import { createFileRoute } from "@tanstack/react-router";
import { SkyguardApp } from "@/components/skyguard/SkyguardApp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SKYGUARD AI — Weather Intelligence Command Center" },
      { name: "description", content: "AI-powered anomaly detection, explainable sensor intelligence and predictive maintenance for Automatic Weather Stations." },
      { property: "og:title", content: "SKYGUARD AI — Trust Every Weather Observation" },
      { property: "og:description", content: "A real-time meteorological intelligence prototype for resilient Automatic Weather Stations." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SkyguardApp,
});
