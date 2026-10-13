import type { Job } from "~/domain/types";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/** "2025-08" -> "Aug 2025" */
export const formatMonth = (ym: string) => `${MONTHS[Number(ym.slice(5)) - 1]} ${ym.slice(0, 4)}`;

const monthIndex = (ym: string) => Number(ym.slice(0, 4)) * 12 + Number(ym.slice(5)) - 1;

/** Positions (as CSS percentages) for a Gantt-style career chart, from the earliest job to `now`. */
export function buildTimeline(jobs: Job[], now = new Date()) {
  const origin = Math.min(...jobs.map((j) => monthIndex(j.from)));
  const end = now.getFullYear() * 12 + now.getMonth() + 1;
  const span = end - origin;
  const pct = (i: number) => `${((i - origin) / span) * 100}%`;

  const bars = jobs.map((job) => ({
    job,
    left: pct(monthIndex(job.from)),
    width: `${(((job.to ? monthIndex(job.to) : end) - monthIndex(job.from)) / span) * 100}%`,
  }));

  const years: { year: number; left: string }[] = [];
  for (let y = Math.floor(origin / 12) + 1; y <= now.getFullYear(); y++) {
    const left = pct(y * 12);
    if (parseFloat(left) < 98) years.push({ year: y, left });
  }
  return { bars, years };
}
