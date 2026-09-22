# Skyguard Command

Build a production-quality, highly polished AI/ML web application prototype called:

SKYGUARD AI
"Intelligent Real-Time Anomaly Detection & Self-Healing Platform for Automatic Weather Stations"

This is a prototype for Smart India Hackathon Problem Statement 26073 by the Ministry of Earth Sciences / India Meteorological Department.

The application must look like a real operational meteorological intelligence platform rather than a generic analytics dashboard.

====================================================
1. CORE PRODUCT VISION
====================================================

SkyGuard AI continuously monitors Automatic Weather Station (AWS) observations and uses intelligent anomaly detection to distinguish:

1. Genuine meteorological events
2. Sensor faults
3. Sudden spikes
4. Frozen/stuck sensor values
5. Sensor drift
6. Communication/data corruption
7. Multivariate inconsistencies
8. Potential sensor degradation

The system monitors only:

- Temperature (°C)
- Atmospheric Pressure (hPa)
- Relative Humidity (%)

The platform should combine:

- Temporal anomaly detection
- Multivariate consistency analysis
- Statistical anomaly detection
- Machine-learning anomaly scoring
- Sensor health scoring
- Explainable AI
- Confidence scoring
- Root-cause classification
- Corrected/imputed value estimation
- Maintenance prediction
- Real-time monitoring
- Alert management

The prototype should feel like an operational command center for a national weather observation network.

====================================================
2. DESIGN LANGUAGE
====================================================

Create a premium futuristic meteorological command-center UI.

Visual direction:

- Dark navy / midnight background
- Deep blue atmospheric gradients
- Cyan/teal data highlights
- White typography
- Orange/yellow/red only for warnings and anomaly states
- Glassmorphism panels
- Subtle atmospheric particle animation
- Soft glowing borders
- Thin grid lines
- Radar/weather-station inspired visual elements
- Smooth micro-interactions
- Professional government/defence/meteorological dashboard aesthetic
- Avoid excessive neon or gaming aesthetics

The UI must look suitable for presentation to:

- Ministry of Earth Sciences
- India Meteorological Department
- Disaster Management authorities
- Meteorological researchers
- AWS network operators

Use modern typography and strong visual hierarchy.

Make the application fully responsive.

====================================================
3. APPLICATION STRUCTURE
====================================================

Create the following main sections:

1. Overview
2. Live AWS Network
3. Station Intelligence
4. Anomaly Detection
5. Explainable AI
6. Sensor Health
7. Forecast vs Observation
8. Data Quality
9. Alerts
10. Maintenance
11. Simulation Lab
12. System Architecture / About

Use a left sidebar navigation.

Top navigation should contain:

- SkyGuard AI logo
- "IMD / MoES Prototype"
- System status: OPERATIONAL
- Current date/time
- Notifications
- User profile

====================================================
4. OVERVIEW / COMMAND CENTER
====================================================

Create an impressive main dashboard.

Hero section:

SKYGUARD AI
"Trustworthy Weather Data. Before It Becomes a Risk."

Subtitle:

"Real-time AI-powered anomaly detection and sensor health intelligence for Automatic Weather Stations."

Show a LIVE SYSTEM STATUS indicator.

Main KPI cards:

- AWS Stations Monitored
- Healthy Stations
- Active Anomalies
- Critical Alerts
- Data Quality Score
- Network Health

Example values:

Stations Monitored: 128
Healthy: 113
Warning: 10
Critical: 5
Data Quality: 96.8%
Network Health: 94.2%

These should be dynamic and connected to the demo dataset.

====================================================
5. LIVE AWS NETWORK
====================================================

Create a large interactive India map.

Show simulated AWS locations across India.

Example locations:

- Pune
- Mumbai
- Delhi
- Chennai
- Bengaluru
- Hyderabad
- Kolkata
- Guwahati
- Jaipur
- Bhopal
- Srinagar
- Ahmedabad
- Kochi
- Bhubaneswar

Each AWS marker should have status:

GREEN = Healthy
YELLOW = Warning
RED = Critical
BLUE = Offline/No recent data

Clicking a station opens a detailed station panel.

The map should visually communicate the health of the weather network.

Include filters:

- All
- Healthy
- Warning
- Critical
- Offline

Include a small legend.

====================================================
6. LIVE SENSOR MONITORING
====================================================

Create a real-time monitoring section.

Display three major sensor cards:

TEMPERATURE
24.8 °C

PRESSURE
1008.4 hPa

HUMIDITY
68.2 %

Each should have:

- Current value
- Unit
- Trend arrow
- Mini sparkline
- Normal operating range
- AI status

Example:

Temperature
24.8 °C
↓ 0.7%
NORMAL

Pressure
1008.4 hPa
↑ 0.2%
NORMAL

Humidity
68.2%
↑ 2.4%
NORMAL

Charts should update periodically to simulate live streaming data.

====================================================
7. AI ANOMALY DETECTION ENGINE
====================================================

This is the core feature.

Create a dedicated "AI Anomaly Engine" panel.

Show:

Anomaly Score
0–100

Confidence
0–100%

Severity
LOW / MEDIUM / HIGH / CRITICAL

Root Cause
Sensor Spike / Drift / Frozen Value / Communication Error / Environmental Event / Multivariate Inconsistency

Create a visual anomaly timeline.

Each anomaly should appear as a highlighted point on the temperature/pressure/humidity time-series charts.

Example anomaly:

Temperature suddenly rises from 29.1°C to 55.0°C.

Humidity = 94%

Pressure = 1034 hPa

AI result:

ANOMALY DETECTED

Anomaly Score: 97/100
Confidence: 98%

Classification:
"Probable Temperature Sensor Fault"

====================================================
8. UNIQUE FEATURE — AI REASONING CARD
====================================================

Do NOT simply show:

"Anomaly detected."

Instead create an explainable AI panel titled:

"WHY DID SKYGUARD FLAG THIS?"

Show reasoning in human-readable language.

Example:

AI ANALYSIS

✓ Temperature increased 24.8°C within 2 minutes
✓ Pattern differs significantly from recent station history
✓ Temperature is inconsistent with humidity behavior
✓ Pressure trend does not support a genuine rapid atmospheric event
✓ Similar neighboring station observations remain stable

FINAL ASSESSMENT

"High probability of sensor malfunction rather than a genuine meteorological event."

Show confidence:

98% confidence

Use visual reasoning bars.

This should be one of the strongest demo features.

====================================================
9. UNIQUE FEATURE — METEOROLOGICAL CONSISTENCY SCORE
====================================================

Create a special feature called:

ATMOSPHERIC CONSISTENCY SCORE

Score the relationship between:

Temperature
Pressure
Humidity

Example:

Atmospheric Consistency
92%

Temperature ↔ Humidity
88%

Temperature ↔ Pressure
95%

Humidity ↔ Pressure
91%

If values behave abnormally together, reduce the score.

Explain:

"Observed values are inconsistent with learned temporal and multivariate patterns."

This demonstrates that SkyGuard does more than simple threshold checking.

====================================================
10. UNIQUE FEATURE — SENSOR DIGITAL TWIN
====================================================

Create a "Sensor Digital Twin" visualization.

For every AWS, show:

EXPECTED VALUE
vs
OBSERVED VALUE
vs
AI-CORRECTED VALUE

Example:

Temperature

Expected: 28.7°C
Observed: 55.0°C
AI Corrected: 28.9°C

Pressure

Expected: 1009.2 hPa
Observed: 1034.1 hPa
AI Corrected: 1009.0 hPa

Humidity

Expected: 72%
Observed: 94%
AI Corrected: 73%

Use three visually distinct lines on the graph.

Label the corrected value clearly:

"AI ESTIMATED"

This demonstrates the optional self-healing capability.

====================================================
11. UNIQUE FEATURE — SENSOR HEALTH SCORE
====================================================

Create a sensor health system.

Each sensor gets a score from 0–100.

Example:

Temperature Sensor
Health: 91%

Pressure Sensor
Health: 96%

Humidity Sensor
Health: 63%

Overall Station Health:
82%

Show a circular health gauge.

Create health categories:

90–100 = Excellent
75–89 = Good
50–74 = Degrading
0–49 = Critical

Also show:

Estimated degradation trend
Last calibration
Anomaly frequency
Data missing rate
Drift score

====================================================
12. UNIQUE FEATURE — PREDICTIVE MAINTENANCE
====================================================

Create a maintenance intelligence section.

Instead of waiting for a sensor to fail, SkyGuard predicts potential degradation.

Example:

MAINTENANCE RISK

Humidity Sensor

Risk Level: HIGH

Predicted degradation:
Increasing anomaly frequency

Recommended action:

"Inspect humidity sensor and verify calibration within 7 days."

Show:

Anomaly frequency trend
Sensor drift trend
Health degradation curve

Add a maintenance priority queue.

====================================================
13. ANOMALY TYPES
====================================================

Create visual cards for:

1. Sudden Spike
2. Frozen Sensor
3. Sensor Drift
4. Missing Data
5. Communication Failure
6. Multivariate Inconsistency
7. Impossible/Physically Suspicious Value
8. Seasonal Pattern Deviation

Each should have:

- Icon
- Description
- Detection logic
- Severity
- Number of occurrences

====================================================
14. ANOMALY TIMELINE
====================================================

Create an interactive timeline.

Example:

10:42:10
NORMAL

10:42:30
Temperature begins abnormal rise

10:42:50
Multivariate inconsistency detected

10:43:05
AI anomaly score crosses threshold

10:43:10
CRITICAL ALERT GENERATED

10:43:15
Root cause classification completed

10:43:20
Corrected value generated

This makes the system feel real-time and intelligent.

====================================================
15. ALERT CENTER
====================================================

Create a professional alert management page.

Columns:

Time
Station
Parameter
Anomaly Type
Severity
Confidence
Status
Action

Example:

10:43
AWS-PN-042
Temperature
Sensor Spike
CRITICAL
98%
Investigating

Allow filtering by:

- Severity
- Parameter
- Station
- Status
- Date

Add buttons:

Investigate
Acknowledge
Resolve
View AI Explanation

====================================================
16. SIMULATION LAB — VERY IMPORTANT FOR SIH DEMO
====================================================

Create a page called:

"AI ANOMALY SIMULATION LAB"

This is one of the most important prototype features.

Allow judges to simulate sensor failures.

Controls:

Temperature
Pressure
Humidity

Add buttons:

[Inject Temperature Spike]

[Inject Frozen Sensor]

[Inject Sensor Drift]

[Inject Missing Data]

[Inject Communication Error]

[Inject Multivariate Anomaly]

When the user clicks an injection button:

1. Modify the live data
2. Update graphs
3. AI detects anomaly
4. Anomaly score changes
5. Confidence score appears
6. Root cause classification appears
7. Alert is generated
8. Station health decreases
9. AI correction appears
10. Maintenance recommendation is generated

Add a "RESET SIMULATION" button.

This should work as an actual interactive demo.

====================================================
17. SIGNATURE DEMO SCENARIO
====================================================

Include a pre-built demo scenario called:

"DEMO: SENSOR FAILURE EVENT"

Button:

[RUN AI DEMO]

When clicked, simulate:

Temperature:
29°C → 31°C → 34°C → 55°C

Humidity:
68% → 72% → 91%

Pressure:
1008 hPa → 1007 hPa → 1034 hPa

The system should then display:

CRITICAL ANOMALY DETECTED

Anomaly Score:
97/100

Confidence:
98%

Root Cause:
Probable Sensor Fault

Atmospheric Consistency:
19%

AI Corrected Temperature:
29.8°C

Sensor Health:
42%

Recommended Action:
"Inspect temperature sensor and verify calibration."

Animate this sequence in real time.

====================================================
18. FORECAST VS OBSERVATION
====================================================

Create a chart comparing:

AI Expected Pattern
vs
Actual Observation

Use this to visually show anomaly deviation.

For each parameter show:

Expected
Observed
Deviation

Example:

Temperature deviation:
+26.3°C

Pressure deviation:
+25.2 hPa

Humidity deviation:
+22%

====================================================
19. DATA QUALITY CENTER
====================================================

Create a Data Quality dashboard.

Metrics:

Completeness
Consistency
Validity
Timeliness
Stability

Example:

Data Completeness: 98.2%
Consistency: 94.8%
Validity: 97.1%
Timeliness: 99.4%
Overall Quality: 96.8%

Create a "Trust Score":

WEATHER DATA TRUST SCORE
96.8 / 100

Explain:

"Based on anomaly frequency, missing observations, temporal consistency and sensor health."

====================================================
20. AI MODEL SECTION
====================================================

Create an "AI Intelligence" page.

Show the conceptual pipeline:

RAW AWS DATA
↓
Preprocessing
↓
Feature Engineering
↓
Temporal Pattern Analysis
↓
Multivariate Analysis
↓
Anomaly Detection
↓
Root Cause Classification
↓
Explainable AI
↓
Correction / Imputation
↓
Sensor Health
↓
Predictive Maintenance

Possible model labels:

Isolation Forest
Autoencoder
LSTM/Temporal Model
Statistical Residual Analysis
Multivariate Consistency Engine

The prototype does not need to train a huge model.

For the prototype, create a realistic simulated inference engine with clearly separated architecture so a real ML backend can later replace it.

====================================================
21. EXPLAINABLE AI
====================================================

Create an XAI visualization.

Show feature contribution:

Temperature deviation
████████████ 82%

Humidity inconsistency
████████ 61%

Pressure deviation
██████ 48%

Temporal deviation
██████████ 74%

Show text:

"Temperature deviation contributed most strongly to the anomaly classification."

Use SHAP-style visualization.

Label this:

"Explainable AI — Feature Contribution"

====================================================
22. REAL-TIME DATA STREAM
====================================================

Simulate streaming AWS data.

Show a live table:

Timestamp
Temperature
Pressure
Humidity
Anomaly Score
Station Health
Status

New rows should appear periodically.

Use realistic values and occasional controlled anomalies.

Add:

LIVE STREAMING ●

====================================================
23. STATION DETAIL PAGE
====================================================

Clicking an AWS station should open a detailed station dashboard.

Show:

Station ID
Location
Last Update
Connection Status
Temperature
Pressure
Humidity
Overall Health
Anomaly Count
Data Quality
Last Calibration
Maintenance Risk

Charts:

24-hour Temperature
24-hour Pressure
24-hour Humidity
Anomaly timeline
Sensor health trend

Also show:

"AI Station Assessment"

Example:

"Station operating normally. No significant anomalies detected during the last 24 hours."

====================================================
24. SMART ALERT PRIORITIZATION
====================================================

Do not treat every anomaly equally.

Create an AI priority score based on:

Severity
Confidence
Persistence
Sensor health
Data impact

Example:

Priority:
P1 — Critical
P2 — High
P3 — Medium
P4 — Low

This helps operators focus on important events.

====================================================
25. NETWORK RESILIENCE VIEW
====================================================

Create a national network health visualization.

Show:

Total stations
Online stations
Offline stations
Stations with anomalies
Stations requiring maintenance

Add a network resilience score.

Example:

NETWORK RESILIENCE
94%

Create animated connection lines between stations on the map.

====================================================
26. REPORT GENERATION
====================================================

Add a button:

"GENERATE INCIDENT REPORT"

When clicked, generate a structured report containing:

Station
Timestamp
Detected anomaly
Affected parameter
Observed value
Expected value
Anomaly score
Confidence
Root cause
AI explanation
Corrected value
Sensor health
Recommended action

Add:

Download Report
Print Report

For the prototype, the generated report can be client-side.

====================================================
27. BACKEND / DATA ARCHITECTURE
====================================================

Structure the application so that it can later connect to:

FastAPI / Python ML backend

The frontend should use a clean API service layer.

Create mock APIs/services for:

GET /stations
GET /stations/:id
GET /sensor-data
GET /anomalies
GET /alerts
GET /sensor-health
POST /simulate-anomaly
POST /analyze
POST /correct-value

Use realistic mock data initially.

Keep the architecture modular so the mock inference engine can later be replaced with an actual Python ML model.

====================================================
28. DATA MODEL
====================================================

Create sample AWS records with:

station_id
timestamp
temperature
pressure
humidity
anomaly_score
confidence
anomaly_type
severity
sensor_health
expected_temperature
expected_pressure
expected_humidity
corrected_temperature
corrected_pressure
corrected_humidity

====================================================
29. UX DETAILS
====================================================

Add:

- Smooth page transitions
- Hover effects
- Animated counters
- Animated charts
- Tooltips
- Loading states
- Empty states
- Toast notifications
- Status indicators
- Pulsing critical alerts
- Expandable AI explanations
- Responsive cards
- Dark/light compatibility if practical

Do not overcrowd the dashboard.

Prioritize information hierarchy.

The most important information should always be:

1. Current network health
2. Active anomalies
3. Severity
4. AI confidence
5. Why the anomaly was detected
6. What action should be taken

====================================================
30. LANDING / HERO
====================================================

Create a premium landing screen before entering the dashboard.

Hero:

SKYGUARD AI

"Trust Every Weather Observation."

Subtitle:

"AI-powered anomaly detection, explainable sensor intelligence and predictive maintenance for resilient Automatic Weather Stations."

Buttons:

[ENTER COMMAND CENTER]

[RUN LIVE AI DEMO]

Below the hero show:

Real-Time Monitoring
Explainable AI
Self-Healing Data
Predictive Maintenance

====================================================
31. UNIQUE VALUE PROPOSITION
====================================================

Make these four concepts highly visible throughout the application:

DETECT
"Find anomalies before they become operational risks."

EXPLAIN
"Understand why the AI flagged the observation."

CORRECT
"Estimate trustworthy values when sensor readings fail."

PREDICT
"Identify degrading sensors before complete failure."

Create a visual circular loop:

DETECT → EXPLAIN → CORRECT → PREDICT → DETECT

Label it:

"Closed-Loop Weather Data Intelligence"

====================================================
32. TECHNOLOGY DISPLAY
====================================================

Add an About / Architecture section showing:

Frontend:
React + TypeScript

Visualization:
Recharts / ECharts / Map visualization

Backend:
FastAPI

AI/ML:
Python
Scikit-learn
PyTorch

Explainability:
SHAP

Database:
PostgreSQL

Deployment:
Cloud-ready

Edge deployment:
ESP32-compatible inference architecture

Do not claim actual ESP32 deployment if it is not implemented.

Label it:

"Deployment-ready architecture"

====================================================
33. IMPORTANT PROTOTYPE RULE
====================================================

This is a DEMONSTRATION PROTOTYPE.

Do not pretend that a real ML model is running if it is not.

Use realistic simulated inference for the prototype.

The architecture must make it easy to replace the simulated inference engine with a real ML model later.

Make all simulated data clearly structured and deterministic enough for a live demonstration.

====================================================
34. FINAL JUDGE EXPERIENCE
====================================================

The application should allow a judge to understand the complete concept within 60 seconds.

Ideal demo sequence:

1. Open Command Center
2. Show national AWS network
3. Select a station
4. Show healthy sensor readings
5. Open Simulation Lab
6. Inject temperature spike
7. Watch AI detect anomaly
8. Show anomaly score
9. Show confidence
10. Show WHY DID SKYGUARD FLAG THIS?
11. Show Atmospheric Consistency Score
12. Show AI corrected value
13. Show Sensor Health degradation
14. Show predictive maintenance recommendation
15. Generate incident report

The entire experience should feel like:

"From raw sensor data → AI decision → explainable action"

====================================================
35. QUALITY REQUIREMENTS
====================================================

The final application must:

- Look highly polished
- Be presentation-ready
- Have no broken buttons
- Have realistic mock data
- Have functional navigation
- Have interactive charts
- Have functional anomaly simulation
- Have responsive design
- Have consistent typography
- Have consistent spacing
- Have professional icons
- Have meaningful animations
- Avoid generic template appearance

Do not use excessive text.

Prefer:

visualizations
cards
graphs
status indicators
timelines
maps
AI explanation panels

The result should look like an enterprise-grade meteorological AI command center.

Project name everywhere:

SKYGUARD AI

Tagline:

"Trust Every Weather Observation."

Primary message:

"Detect. Explain. Correct. Predict."

Build the complete frontend prototype now.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/43d39391-a608-4ed3-9cec-cbb726031126).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
