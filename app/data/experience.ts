import type { Job } from "~/domain/types";

// Newest first. Copy for each job's bullets lives in i18n/locales under `experience.<id>`.
export const jobs: Job[] = [
  { id: "bjp", short: "BJP", company: "PT. Bersinar Jaya Perkasa", role: "IT Support Engineer | Software Engineer", from: "2026-04", to: null, place: "Balikpapan", bullets: 1 },
  { id: "erp", short: "ERP Nusantara", company: "ERP Nusantara", role: "Full-Stack Developer", from: "2025-08", to: "2026-04", place: "Balikpapan", bullets: 3 },
  { id: "xploratech", short: "Xploratech", company: "Xploratech", role: "Founder", from: "2023-11", to: null, place: "Balikpapan", bullets: 3 },
  { id: "bangkit", short: "Bangkit", company: "Bangkit Academy led by Google, Tokopedia, Gojek & Traveloka", role: "Cloud Computing Cohort", from: "2023-02", to: "2023-07", place: "", bullets: 2 },
  { id: "kramakata", short: "Kramakata", company: "Kramakata", role: "Software Engineer", from: "2022-08", to: null, place: "Jakarta", bullets: 3 },
];
