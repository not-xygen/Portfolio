import { describe, expect, it } from "vitest";
import type { Job } from "~/domain/types";
import { buildTimeline, formatMonth } from "./timeline";

const job = (id: string, from: string, to: string | null): Job => ({
  id, short: id, company: id, role: id, from, to, place: "", bullets: 0,
});

describe("formatMonth", () => {
  it("formats YYYY-MM", () => {
    expect(formatMonth("2025-08")).toBe("Aug 2025");
    expect(formatMonth("2023-01")).toBe("Jan 2023");
  });
});

describe("buildTimeline", () => {
  // now = Jan 2024, so the span from Jan 2023 is 13 months (current month included)
  const now = new Date(2024, 0, 15);
  const { bars, years } = buildTimeline(
    [job("open", "2023-07", null), job("closed", "2023-01", "2023-07")],
    now,
  );

  it("starts the earliest job at 0%", () => {
    expect(bars[1]!.left).toBe("0%");
  });

  it("runs open jobs to now", () => {
    const open = bars[0]!;
    expect(parseFloat(open.left) + parseFloat(open.width)).toBeCloseTo(100);
  });

  it("sizes a closed job by its months", () => {
    expect(parseFloat(bars[1]!.width)).toBeCloseTo((6 / 13) * 100);
  });

  it("ticks January of each year after the start", () => {
    expect(years).toHaveLength(1);
    expect(years[0]!.year).toBe(2024);
    expect(parseFloat(years[0]!.left)).toBeCloseTo((12 / 13) * 100);
  });
});
