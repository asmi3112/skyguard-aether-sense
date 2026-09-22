# SKYGUARD AI Frontend Prototype

## Goal

Build a presentation-ready meteorological command center that demonstrates the full path from live AWS observations to anomaly detection, explanation, correction, health impact, maintenance action, and incident reporting.

## Experience

- Add a cinematic entry screen with the SKYGUARD AI identity, tagline, command-center entry, and one-click live demo.
- Build a responsive operational shell with left navigation, live status, date/time, notifications, and operator profile.
- Create focused views for Overview, AWS Network, Station Intelligence, Anomaly Detection, Explainable AI, Sensor Health, Forecast vs Observation, Data Quality, Alerts, Maintenance, Simulation Lab, and Architecture.
- Keep national network health, active anomalies, severity, confidence, reasoning, and recommended action visually dominant.

## Demo and Interaction

- Use deterministic mock AWS stations and sensor streams for temperature, pressure, and humidity.
- Implement station selection, status filtering, live-updating readings, anomaly markers, alert actions, and expandable explanations.
- Implement all requested anomaly injections plus reset.
- Implement the signature sensor-failure sequence with animated readings and synchronized anomaly score, confidence, consistency, corrected value, health, alert, and maintenance recommendation.
- Generate a structured client-side incident report with print and download actions.

## Visual Direction

- Midnight atmospheric command-center aesthetic with deep navy surfaces, cyan/teal telemetry, restrained warning colors, glass panels, radar/grid motifs, soft borders, and subtle particles.
- Use compact professional typography, crisp data hierarchy, polished charts, maps, gauges, tooltips, and motion without gaming-style neon.
- Support desktop command-center layouts and compact mobile navigation.

## Technical Details

- Build modular React/TypeScript data, simulation, chart, map, shell, and panel components.
- Use Recharts for time series and analytical charts, Lucide icons for controls, and semantic Tailwind design tokens. use python as well where shouldbeusdedto
- Keep a mock service layer matching the future FastAPI endpoints and a replaceable simulated inference engine.
- Keep all prototype inference explicitly labeled as simulated.
- Add route-specific metadata and verify the experience at desktop and mobile widths.