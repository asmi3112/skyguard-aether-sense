import { useEffect, useMemo, useRef, useState } from "react";
import {
  Activity, AlertTriangle, Bell, BrainCircuit, Building2, Check, ChevronDown, CircleGauge,
  CloudSun, Code2, Database, Download, Eye, FileText, Filter, Gauge, HeartPulse, HelpCircle,
  Info, Map, Menu, Network, Play, Printer, Radio, RefreshCw, Satellite, Search, Settings2,
  ShieldCheck, Sparkles, Thermometer, TrendingDown, TrendingUp, TriangleAlert, UserRound, Wrench, X, Zap,
  type LucideIcon,
} from "lucide-react";
import {
  Area, AreaChart, CartesianGrid, Legend, Line, LineChart, ReferenceDot, ResponsiveContainer,
  Tooltip, XAxis, YAxis,
} from "recharts";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import { anomalyTypes, baseSeries, initialAlerts, stations, type AlertRecord, type Section, type SensorPoint, type Station, type StationStatus } from "@/lib/skyguard-data";

type SimState = { active:boolean; type:string; score:number; confidence:number; consistency:number; health:number; rootCause:string; step:number; corrected:number };
const initialSim: SimState = { active:false,type:"Normal Operation",score:8,confidence:94,consistency:92,health:91,rootCause:"No fault detected",step:0,corrected:24.8 };

const nav: Array<{id:Section;label:string;icon:LucideIcon}> = [
  {id:"overview",label:"Overview",icon:CircleGauge},{id:"network",label:"Live AWS Network",icon:Map},
  {id:"station",label:"Station Intelligence",icon:Radio},{id:"anomaly",label:"Anomaly Detection",icon:AlertTriangle},
  {id:"xai",label:"Explainable AI",icon:BrainCircuit},{id:"health",label:"Sensor Health",icon:HeartPulse},
  {id:"forecast",label:"Forecast vs Observation",icon:CloudSun},{id:"quality",label:"Data Quality",icon:ShieldCheck},
  {id:"alerts",label:"Alerts",icon:Bell},{id:"maintenance",label:"Maintenance",icon:Wrench},
  {id:"simulation",label:"Simulation Lab",icon:Sparkles},{id:"architecture",label:"Architecture / About",icon:Network},
];

const statusColor: Record<StationStatus,string> = {healthy:"bg-success",warning:"bg-warning",critical:"bg-critical",offline:"bg-offline"};
const css = { cyan:"var(--cyan)", teal:"var(--teal)", warning:"var(--warning)", critical:"var(--critical)", muted:"var(--muted-foreground)", border:"var(--border)", panel:"var(--panel-strong)" };

export function SkyguardApp() {
  const [entered,setEntered]=useState(false);
  const [section,setSection]=useState<Section>("overview");
  const [mobileNav,setMobileNav]=useState(false);
  const [selected,setSelected]=useState<Station>(stations[0]);
  const [filter,setFilter]=useState<StationStatus|"all">("all");
  const [series,setSeries]=useState<SensorPoint[]>(baseSeries);
  const [sim,setSim]=useState<SimState>(initialSim);
  const [alerts,setAlerts]=useState<AlertRecord[]>(initialAlerts);
  const [reportOpen,setReportOpen]=useState(false);
  const [now,setNow]=useState(new Date());
  const demoTimers=useRef<Array<ReturnType<typeof setTimeout>>>([]);

  useEffect(()=>{const t=setInterval(()=>setNow(new Date()),1000);return()=>clearInterval(t)},[]);
  useEffect(()=>()=>demoTimers.current.forEach(clearTimeout),[]);
  useEffect(()=>{
    if(sim.active) return;
    const t=setInterval(()=>setSeries(prev=>{
      const i=prev.length; const next={...prev.at(-1)!,time:new Date().toLocaleTimeString("en-IN",{hour12:false,hour:"2-digit",minute:"2-digit",second:"2-digit"}),temperature:Number((24.8+Math.sin(i/2)*.35).toFixed(1)),pressure:Number((1008.4+Math.cos(i/3)*.25).toFixed(1)),humidity:Number((68.2+Math.sin(i/3)*.7).toFixed(1)),anomaly:Math.round(6+Math.abs(Math.sin(i))*5)};return [...prev.slice(-19),next];}),3500);return()=>clearInterval(t)
  },[sim.active]);

  const latest=series.at(-1) ?? baseSeries[0];
  const healthy=stations.filter(s=>s.status==="healthy").length;
  const filteredStations=filter==="all"?stations:stations.filter(s=>s.status===filter);
  const go=(id:Section)=>{setSection(id);setEntered(true);setMobileNav(false);window.scrollTo({top:0,behavior:"smooth"})};

  const clearTimers=()=>{demoTimers.current.forEach(clearTimeout);demoTimers.current=[]};
  const reset=()=>{clearTimers();setSeries(baseSeries);setSim(initialSim);setAlerts(initialAlerts);toast.success("Simulation reset — telemetry restored")};
  const applyAnomaly=(type:string, fullDemo=false)=>{
    clearTimers(); setEntered(true); setSection("simulation");
    const scenarios: Record<string,Partial<SensorPoint>>={
      "Temperature Spike":{temperature:55,humidity:91,pressure:1034,correctedTemperature:29.8},
      "Frozen Sensor":{humidity:68.2,correctedHumidity:68.5},"Sensor Drift":{humidity:84.6,correctedHumidity:70.2},
      "Missing Data":{temperature:0,pressure:0,humidity:0},"Communication Error":{temperature:55,pressure:1034,humidity:94},
      "Multivariate Anomaly":{temperature:41.3,pressure:1031,humidity:93,correctedTemperature:29.4},
    };
    const base={...series.at(-1)!,time:"10:43:20",anomaly:97,health:42,correctedTemperature:29.8,correctedPressure:1008.2,correctedHumidity:72,...(scenarios[type]||scenarios["Temperature Spike"])};
    setSim({...initialSim,active:true,type,score:34,confidence:71,consistency:64,health:77,rootCause:"Analyzing telemetry…",step:1});
    if(fullDemo){
      const sequence=[[29,68,1008],[31,72,1007],[34,82,1016],[55,91,1034]];
      sequence.forEach((vals,i)=>demoTimers.current.push(setTimeout(()=>{
        const p={...base,time:`10:43:${String(i*5+5).padStart(2,"0")}`,temperature:vals[0] as number,humidity:vals[1] as number,pressure:vals[2] as number,anomaly:i===3?97:16+i*21,health:i===3?42:89-i*11};
        setSeries(prev=>[...prev.slice(-19),p]); setSim(s=>({...s,step:i+1,score:p.anomaly,confidence:i===3?98:72+i*7,consistency:i===3?19:83-i*18,health:p.health}));
      },i*850)));
      demoTimers.current.push(setTimeout(()=>finalize(type,base),3800));
    } else { setSeries(prev=>[...prev.slice(-19),base]); demoTimers.current.push(setTimeout(()=>finalize(type,base),800)); }
  };
  const finalize=(type:string,point:SensorPoint)=>{
    setSim({active:true,type,score:97,confidence:98,consistency:19,health:42,rootCause:type==="Communication Error"?"Telemetry Communication Fault":type==="Missing Data"?"Observation Stream Interruption":"Probable Sensor Fault",step:5,corrected:point.correctedTemperature ?? 29.8});
    setAlerts(prev=>[{id:Date.now(),time:"10:43",station:selected.id,parameter:type.includes("Humidity")?"Humidity":"Temperature",type,severity:"CRITICAL",confidence:98,status:"Open",priority:"P1"},...prev]);
    toast.error("Critical anomaly detected",{description:`${type} at ${selected.id} • 98% confidence`});
  };
  const updateAlert=(id:number,status:string)=>{setAlerts(a=>a.map(v=>v.id===id?{...v,status}:v));toast.success(`Alert marked ${status.toLowerCase()}`)};

  if(!entered) return <Landing onEnter={()=>setEntered(true)} onDemo={()=>{setEntered(true);setTimeout(()=>applyAnomaly("Temperature Spike",true),50)}}/>;
  return <div className="min-h-screen atmospheric-grid">
    <Sidebar section={section} go={go} open={mobileNav} close={()=>setMobileNav(false)}/>
    <div className="lg:pl-64">
      <Topbar now={now} openNav={()=>setMobileNav(true)} alerts={alerts.length} />
      <main className="mx-auto max-w-[1600px] p-4 sm:p-6 lg:p-7">
        <PageHeading section={section} sim={sim} />
        {section==="overview"&&<Overview latest={latest} sim={sim} healthy={healthy} go={go} runDemo={()=>applyAnomaly("Temperature Spike",true)} />}
        {section==="network"&&<NetworkView stations={filteredStations} selected={selected} setSelected={s=>{setSelected(s);go("station")}} filter={filter} setFilter={setFilter}/>} 
        {section==="station"&&<StationView station={selected} series={series} sim={sim}/>} 
        {section==="anomaly"&&<AnomalyView series={series} sim={sim}/>} 
        {section==="xai"&&<XaiView sim={sim}/>} 
        {section==="health"&&<HealthView sim={sim}/>} 
        {section==="forecast"&&<ForecastView series={series} sim={sim}/>} 
        {section==="quality"&&<QualityView sim={sim}/>} 
        {section==="alerts"&&<AlertsView alerts={alerts} update={updateAlert} explain={()=>go("xai")}/>} 
        {section==="maintenance"&&<MaintenanceView sim={sim}/>} 
        {section==="simulation"&&<SimulationView latest={latest} series={series} sim={sim} inject={applyAnomaly} reset={reset} report={()=>setReportOpen(true)}/>} 
        {section==="architecture"&&<ArchitectureView/>}
      </main>
    </div>
    {reportOpen&&<IncidentReport sim={sim} station={selected} latest={latest} close={()=>setReportOpen(false)}/>}<Toaster richColors position="top-right"/>
  </div>
}

function Landing({onEnter,onDemo}:{onEnter:()=>void;onDemo:()=>void}){
 return <main className="relative min-h-screen overflow-hidden atmospheric-grid px-5 py-8 sm:px-10">
  <div className="absolute inset-x-0 top-0 h-px scanline"/><div className="pointer-events-none absolute left-[70%] top-[17%] size-72 rounded-full border border-primary/10 animate-float"><div className="absolute inset-10 rounded-full border border-primary/10"/><div className="absolute inset-24 rounded-full border border-primary/20"/></div>
  <header className="relative mx-auto flex max-w-7xl items-center justify-between"><Brand/><span className="hidden text-xs font-semibold uppercase text-muted-foreground sm:block">SIH 26073 • IMD / MoES Prototype</span></header>
  <section className="relative mx-auto grid min-h-[76vh] max-w-7xl content-center gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
   <div className="max-w-3xl"><div className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[.2em] text-primary"><span className="size-2 rounded-full bg-success shadow-[0_0_16px_var(--success)]"/>National AWS Intelligence Platform</div>
    <h1 className="font-display text-6xl font-semibold leading-[.88] tracking-normal text-foreground sm:text-8xl lg:text-9xl">SKYGUARD<br/><span className="text-primary">AI</span></h1>
    <p className="mt-7 font-display text-2xl font-medium text-foreground sm:text-3xl">Trust Every Weather Observation.</p>
    <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">AI-powered anomaly detection, explainable sensor intelligence and predictive maintenance for resilient Automatic Weather Stations.</p>
    <div className="mt-8 flex flex-wrap gap-3"><Button size="xl" onClick={onEnter}>Enter Command Center <Activity/></Button><Button size="xl" variant="command" onClick={onDemo}><Play/> Run Live AI Demo</Button></div>
    <p className="mt-6 text-xs font-semibold uppercase tracking-[.24em] text-muted-foreground">Detect <span className="text-primary">•</span> Explain <span className="text-primary">•</span> Correct <span className="text-primary">•</span> Predict</p>
   </div>
   <div className="relative mx-auto aspect-square w-full max-w-md"><RadarVisual/></div>
  </section>
  <section className="relative mx-auto grid max-w-7xl grid-cols-2 border-t border-border lg:grid-cols-4">{[[Radio,"Real-Time Monitoring"],[BrainCircuit,"Explainable AI"],[RefreshCw,"Self-Healing Data"],[Wrench,"Predictive Maintenance"]].map(([Icon,label])=><div key={label as string} className="flex items-center gap-3 border-b border-border p-5 lg:border-b-0 lg:border-r"><Icon className="text-primary"/><span className="text-xs font-semibold uppercase text-foreground">{label as string}</span></div>)}</section>
 </main>
}
function Brand(){return <div className="flex items-center gap-3"><div className="grid size-10 place-items-center border border-primary/40 bg-primary/10"><Satellite className="text-primary"/></div><div><div className="font-display text-xl font-bold leading-none">SKYGUARD <span className="text-primary">AI</span></div><div className="mt-1 text-[9px] font-bold uppercase tracking-[.19em] text-muted-foreground">Weather Intelligence</div></div></div>}
function RadarVisual(){return <div className="relative size-full rounded-full border border-primary/25 bg-primary/[.03] shadow-[0_0_80px_color-mix(in_oklab,var(--cyan)_10%,transparent)]"><div className="absolute inset-[12%] rounded-full border border-primary/20"/><div className="absolute inset-[28%] rounded-full border border-primary/20"/><div className="absolute left-1/2 top-0 h-full w-px bg-primary/15"/><div className="absolute left-0 top-1/2 h-px w-full bg-primary/15"/><div className="absolute inset-1/2 origin-left animate-[spin_6s_linear_infinite] border-t border-primary shadow-[0_-8px_24px_var(--primary)]"/><div className="absolute left-[65%] top-[28%] size-3 rounded-full bg-warning animate-critical"/><div className="absolute left-[24%] top-[62%] size-2 rounded-full bg-success shadow-[0_0_14px_var(--success)]"/><div className="absolute inset-0 grid place-items-center"><div className="text-center"><div className="text-data text-5xl font-semibold">128</div><div className="text-[10px] font-bold uppercase tracking-[.2em] text-muted-foreground">Stations online</div></div></div></div>}

function Sidebar({section,go,open,close}:{section:Section;go:(s:Section)=>void;open:boolean;close:()=>void}){return <><aside className={cn("fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-border bg-background/95 p-4 backdrop-blur-xl transition-transform lg:translate-x-0",open?"translate-x-0":"-translate-x-full")}><div className="flex items-center justify-between px-2 py-2"><Brand/><Button variant="ghost" size="icon" className="lg:hidden" onClick={close} aria-label="Close navigation"><X/></Button></div><div className="mt-7 flex-1 space-y-1 overflow-y-auto">{nav.map(item=><Button key={item.id} variant="ghost" onClick={()=>go(item.id)} className={cn("h-10 w-full justify-start px-3 text-xs",section===item.id?"border border-primary/25 bg-primary/10 text-primary":"text-muted-foreground hover:text-foreground")}><item.icon/>{item.label}</Button>)}</div><div className="mt-4 border-t border-border pt-4"><div className="flex items-center gap-3 px-2"><div className="grid size-9 place-items-center rounded-full bg-secondary"><Building2 className="size-4 text-primary"/></div><div><p className="text-xs font-semibold">IMD Operations</p><p className="text-[10px] text-muted-foreground">National network</p></div></div></div></aside>{open&&<button className="fixed inset-0 z-30 bg-background/80 lg:hidden" onClick={close} aria-label="Close navigation overlay"/>}</>}
function Topbar({now,openNav,alerts}:{now:Date;openNav:()=>void;alerts:number}){return <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-border bg-background/75 px-4 backdrop-blur-xl sm:px-6"><div className="flex items-center gap-3"><Button variant="ghost" size="icon" className="lg:hidden" onClick={openNav} aria-label="Open navigation"><Menu/></Button><div className="hidden items-center gap-2 text-[10px] font-bold uppercase tracking-[.14em] text-muted-foreground sm:flex"><span className="size-2 rounded-full bg-success shadow-[0_0_10px_var(--success)]"/>System operational</div></div><div className="flex items-center gap-2 sm:gap-4"><div className="hidden text-right sm:block"><p className="text-data text-xs font-semibold">{now.toLocaleTimeString("en-IN",{hour12:false})} IST</p><p className="text-[9px] uppercase text-muted-foreground">{now.toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"})}</p></div><Button variant="ghost" size="icon" className="relative" aria-label="Notifications"><Bell/><span className="absolute right-1 top-1 grid size-4 place-items-center rounded-full bg-critical text-[8px] text-foreground">{alerts}</span></Button><div className="grid size-9 place-items-center rounded-full border border-primary/30 bg-primary/10"><UserRound className="size-4 text-primary"/></div></div></header>}
function PageHeading({section,sim}:{section:Section;sim:SimState}){const item=nav.find(n=>n.id===section);return <div className="mb-5 flex flex-wrap items-end justify-between gap-3"><div><div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.2em] text-primary">Operations / {item?.label}</div><h1 className="mt-1 font-display text-3xl font-semibold tracking-normal sm:text-4xl">{item?.label}</h1></div><div className="flex items-center gap-2"><span className="rounded-sm border border-border bg-panel px-2 py-1 text-[9px] font-bold uppercase text-muted-foreground">Simulated inference</span>{sim.active&&<span className="animate-critical rounded-sm border border-critical/50 bg-critical/15 px-2 py-1 text-[9px] font-bold uppercase text-critical">Active incident</span>}</div></div>}
function Panel({title,eyebrow,children,className,action}:{title?:string;eyebrow?:string;children:React.ReactNode;className?:string;action?:React.ReactNode}){return <section className={cn("glass-panel overflow-hidden rounded-lg",className)}>{(title||eyebrow||action)&&<header className="flex items-center justify-between border-b border-border px-4 py-3"><div>{eyebrow&&<p className="text-[9px] font-bold uppercase tracking-[.18em] text-primary">{eyebrow}</p>}{title&&<h2 className="mt-0.5 font-display text-lg font-semibold">{title}</h2>}</div>{action}</header>}<div className="p-4">{children}</div></section>}
function Metric({label,value,sub,icon:Icon,tone="primary"}:{label:string;value:string;sub:string;icon:LucideIcon;tone?:"primary"|"warning"|"critical"|"success"}){return <div className="glass-panel rounded-lg p-4 transition-transform hover:-translate-y-0.5"><div className="flex items-start justify-between"><p className="text-[10px] font-bold uppercase tracking-[.13em] text-muted-foreground">{label}</p><Icon className={cn("size-4",tone==="critical"?"text-critical":tone==="warning"?"text-warning":tone==="success"?"text-success":"text-primary")}/></div><p className="text-data mt-3 text-3xl font-semibold">{value}</p><p className="mt-1 text-[10px] text-muted-foreground">{sub}</p></div>}
function GaugeRing({value,label,tone="primary",size="lg"}:{value:number;label:string;tone?:"primary"|"critical"|"warning";size?:"sm"|"lg"}){const c=tone==="critical"?css.critical:tone==="warning"?css.warning:css.cyan;return <div className={cn("relative grid shrink-0 place-items-center rounded-full",size==="lg"?"size-36":"size-24")} style={{background:`conic-gradient(${c} ${value*3.6}deg, color-mix(in oklab,var(--muted) 65%,transparent) 0)`}}><div className="absolute inset-[7px] grid place-items-center rounded-full bg-background"><div className="text-center"><div className={cn("text-data font-semibold",size==="lg"?"text-4xl":"text-2xl")}>{value}<span className="text-sm">%</span></div><div className="mt-1 text-[8px] font-bold uppercase tracking-wider text-muted-foreground">{label}</div></div></div></div>}
