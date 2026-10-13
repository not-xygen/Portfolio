import type { ProjectGroup } from "~/domain/types";

// Descriptions live in i18n/locales under `projects.items.<id>`.
export const projectGroups: ProjectGroup[] = [
  {
    path: "~/projects/open-source",
    items: [
      { id: "water", name: "Water Network Simulation", tags: ["React", "Vite", "TypeScript"], repo: "https://github.com/not-xygen/Water-Network-Simulation-Web-App", url: "https://water-network-simulation.netlify.app" },
      { id: "simu", name: "SIMU-API", tags: ["Rust", "API"], repo: "https://github.com/not-xygen/API-SIMU" },
    ],
  },
  {
    path: "~/projects/client-work",
    items: [
      { id: "noble", name: "Noble Property Asia", tags: ["Dashboard", "Image upload", "PDF export", "Data logs", "Advanced filters"], url: "https://nobleasiaid.com" },
      { id: "kramakata", name: "Kramakata", tags: ["Animated Site", "CMS", "Multilingual"], url: "https://kramakata.com" },
      { id: "sentry", name: "Sentry Security", tags: ["CMS", "Multilingual", "Map", "Contact Form"], url: "https://sentrysecurity.co.id" },
      { id: "fed", name: "FED Insight", tags: ["CMS", "Multilingual"], url: "https://www.fed-insight.com" },
      { id: "asmr", name: "ASMR Retail", tags: ["POS", "Stock", "Invoices", "PDF export"] },
    ],
  },
];
