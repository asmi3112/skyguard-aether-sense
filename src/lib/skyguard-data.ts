export type StationStatus = "healthy" | "warning" | "critical" | "offline";
export type Section = "overview" | "network" | "station" | "anomaly" | "xai" | "health" | "forecast" | "quality" | "alerts" | "maintenance" | "simulation" | "architecture";

export interface Station {
  id: string; city: string; state: string; x: number; y: number; status: StationStatus;
  temperature: number; pressure: number; humidity: number; health: number; quality: number;
}

export interface SensorPoint { time: string; temperature: number; pressure: number; humidity: number; expectedTemperature: number; expectedPressure: number; expectedHumidity: number; correctedTemperature?: number; correctedPressure?: number; correctedHumidity?: number; anomaly: number; health: number; }

export interface AlertRecord { id: number; time: string; station: string; parameter: string; type: string; severity: "CRITICAL" | "HIGH" | "MEDIUM"; confidence: number; status: string; priority: string; }

export const stations: Station[] = [
  { id:"AWS-PN-042",city:"Pune",state:"Maharashtra",x:31,y:66,status:"critical",temperature:24.8,pressure:1008.4,humidity:68.2,health:82,quality:94.2 },
  { id:"AWS-MB-017",city:"Mumbai",state:"Maharashtra",x:25,y:60,status:"warning",temperature:29.4,pressure:1007.8,humidity:79.1,health:78,quality:92.8 },
  { id:"AWS-DL-003",city:"Delhi",state:"Delhi",x:41,y:30,status:"healthy",temperature:31.2,pressure:1003.5,humidity:55.4,health:96,quality:98.1 },
  { id:"AWS-CN-026",city:"Chennai",state:"Tamil Nadu",x:48,y:81,status:"healthy",temperature:30.6,pressure:1009.2,humidity:76.4,health:94,quality:97.2 },
  { id:"AWS-BG-011",city:"Bengaluru",state:"Karnataka",x:39,y:75,status:"healthy",temperature:23.1,pressure:1011.4,humidity:62.8,health:97,quality:98.5 },
  { id:"AWS-HY-009",city:"Hyderabad",state:"Telangana",x:42,y:62,status:"healthy",temperature:27.8,pressure:1008.8,humidity:64.2,health:93,quality:97.4 },
  { id:"AWS-KO-021",city:"Kolkata",state:"West Bengal",x:69,y:49,status:"warning",temperature:29.8,pressure:1006.7,humidity:81.2,health:74,quality:91.6 },
  { id:"AWS-GW-008",city:"Guwahati",state:"Assam",x:83,y:39,status:"healthy",temperature:26.4,pressure:1005.1,humidity:83.6,health:91,quality:96.3 },
  { id:"AWS-JP-014",city:"Jaipur",state:"Rajasthan",x:33,y:34,status:"healthy",temperature:32.1,pressure:1001.6,humidity:42.4,health:95,quality:97.8 },
  { id:"AWS-BP-033",city:"Bhopal",state:"Madhya Pradesh",x:43,y:48,status:"offline",temperature:27.2,pressure:1008.1,humidity:59.8,health:51,quality:76.2 },
  { id:"AWS-SR-005",city:"Srinagar",state:"Jammu & Kashmir",x:38,y:12,status:"critical",temperature:14.7,pressure:1015.3,humidity:71.3,health:44,quality:81.5 },
  { id:"AWS-AH-018",city:"Ahmedabad",state:"Gujarat",x:25,y:46,status:"healthy",temperature:33.2,pressure:1002.8,humidity:47.1,health:92,quality:96.7 },
  { id:"AWS-KC-007",city:"Kochi",state:"Kerala",x:34,y:88,status:"healthy",temperature:28.4,pressure:1009.7,humidity:84.5,health:95,quality:98.0 },
  { id:"AWS-BB-019",city:"Bhubaneswar",state:"Odisha",x:65,y:59,status:"warning",temperature:28.9,pressure:1006.4,humidity:78.7,health:71,quality:90.4 },
];

export const baseSeries: SensorPoint[] = Array.from({length: 20},(_,i)=>({
  time:`10:${String(24+i).padStart(2,"0")}`,
  temperature:Number((24.2 + Math.sin(i/3)*.8 + i*.025).toFixed(1)),
  pressure:Number((1008.8 + Math.cos(i/4)*.7).toFixed(1)),
  humidity:Number((66.4 + Math.sin(i/4)*2.1).toFixed(1)),
  expectedTemperature:Number((24.4 + Math.sin(i/3)*.65).toFixed(1)),
  expectedPressure:Number((1008.7 + Math.cos(i/4)*.45).toFixed(1)),
  expectedHumidity:Number((66.7 + Math.sin(i/4)*1.7).toFixed(1)),
  anomaly: Math.round(5 + Math.abs(Math.sin(i)) * 8), health: 94,
}));

export const initialAlerts: AlertRecord[] = [
 {id:1,time:"10:43",station:"AWS-PN-042",parameter:"Temperature",type:"Sensor Spike",severity:"CRITICAL",confidence:98,status:"Investigating",priority:"P1"},
 {id:2,time:"10:31",station:"AWS-SR-005",parameter:"Humidity",type:"Sensor Drift",severity:"HIGH",confidence:91,status:"Open",priority:"P2"},
 {id:3,time:"10:18",station:"AWS-KO-021",parameter:"Pressure",type:"Frozen Value",severity:"MEDIUM",confidence:86,status:"Acknowledged",priority:"P3"},
 {id:4,time:"09:56",station:"AWS-BB-019",parameter:"Humidity",type:"Missing Data",severity:"HIGH",confidence:94,status:"Open",priority:"P2"},
];

export const anomalyTypes = [
 ["Sudden Spike","Abrupt outlier against recent trend","Rate-of-change + residual",12,"HIGH"],
 ["Frozen Sensor","Repeated identical observations","Zero-variance window",4,"HIGH"],
 ["Sensor Drift","Gradual movement from expected baseline","Rolling residual slope",7,"MEDIUM"],
 ["Missing Data","Expected observation not received","Cadence validation",9,"MEDIUM"],
 ["Communication Failure","Corrupted or interrupted telemetry","Packet integrity",3,"CRITICAL"],
 ["Multivariate Inconsistency","Parameters violate learned relationships","Cross-sensor model",6,"HIGH"],
 ["Suspicious Value","Physically improbable observation","Domain constraints",2,"CRITICAL"],
 ["Seasonal Deviation","Pattern diverges from seasonal baseline","Historical envelope",5,"MEDIUM"],
] as const;
