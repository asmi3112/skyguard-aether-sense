import { baseSeries, initialAlerts, stations, type SensorPoint, type Station } from "./skyguard-data";

const fallbackStation: Station = { id:"AWS-PN-042",city:"Pune",state:"Maharashtra",x:31,y:66,status:"critical",temperature:24.8,pressure:1008.4,humidity:68.2,health:82,quality:94.2 };
const fallbackPoint: SensorPoint = { time:"10:43",temperature:24.8,pressure:1008.4,humidity:68.2,expectedTemperature:24.7,expectedPressure:1008.5,expectedHumidity:67.9,anomaly:8,health:94 };

const wait = (ms = 180) => new Promise((resolve) => setTimeout(resolve, ms));
export const skyguardApi = {
  async getStations() { await wait(); return stations; },
  async getStation(id: string) { await wait(); return stations.find((station) => station.id === id) ?? stations[0] ?? fallbackStation; },
  async getSensorData() { await wait(); return baseSeries; },
  async getAnomalies() { await wait(); return baseSeries.filter((point) => point.anomaly > 30); },
  async getAlerts() { await wait(); return initialAlerts; },
  async getSensorHealth() { await wait(); return { temperature: 91, pressure: 96, humidity: 63 }; },
  async simulateAnomaly(type: string): Promise<SensorPoint> { await wait(); return { ...(baseSeries.at(-1) ?? fallbackPoint), time: "10:43", temperature: type.includes("Temperature") ? 55 : 31, pressure: type.includes("Multivariate") ? 1034 : 1007, humidity: 91, anomaly: 97, health: 42, correctedTemperature: 29.8, correctedPressure: 1008.2, correctedHumidity: 72 }; },
  async analyze() { await wait(); return { score: 97, confidence: 98, rootCause: "Probable Sensor Fault" }; },
  async correctValue() { await wait(); return { temperature: 29.8, pressure: 1008.2, humidity: 72 }; },
};
