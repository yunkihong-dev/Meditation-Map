import type { PlaceProgram } from "@/services/meditation/types";

export type ProgramLifecycleStatus = PlaceProgram["status"];

/** KST 기준 YYYY-MM-DD */
export function todayKstIso(): string {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Seoul" }).format(new Date());
}

function isIsoDate(value: string | undefined): value is string {
  return Boolean(value && /^\d{4}-\d{2}-\d{2}$/.test(value));
}

/** 행사·프로그램 상태 — 기간 기준 자동 계산 */
export function computeProgramStatus(
  program: Pick<PlaceProgram, "kind" | "startDate" | "endDate" | "status">,
  today: string = todayKstIso()
): ProgramLifecycleStatus {
  const kind = program.kind ?? "program";
  const start = program.startDate?.trim();
  const end = program.endDate?.trim();

  if (kind === "event") {
    if (isIsoDate(start) && isIsoDate(end)) {
      return today > end ? "past" : "ongoing";
    }
    return program.status === "past" ? "past" : "ongoing";
  }

  if (isIsoDate(end) && today > end) return "past";
  return "ongoing";
}

export function normalizePrograms(programs: PlaceProgram[] | undefined): PlaceProgram[] {
  return (programs ?? []).map((program) => ({
    ...program,
    status: computeProgramStatus(program),
  }));
}

export function normalizePlacePrograms<T extends { programs?: PlaceProgram[] }>(place: T): T {
  if (!place.programs?.length) return place;
  return { ...place, programs: normalizePrograms(place.programs) };
}

export function programStatusLabel(
  program: Pick<PlaceProgram, "status" | "startDate" | "endDate">,
  today: string = todayKstIso()
): "진행 중" | "완료" | "예정" {
  if (program.status === "past") return "완료";
  const start = program.startDate?.trim();
  if (isIsoDate(start) && today < start) return "예정";
  return "진행 중";
}

export function formatProgramPeriod(startDate?: string, endDate?: string): string | null {
  const start = startDate?.trim();
  const end = endDate?.trim();
  if (start && end) return start === end ? start : `${start} ~ ${end}`;
  if (start) return `${start} ~`;
  if (end) return `~ ${end}`;
  return null;
}

export function defaultEventPeriod(today: string = todayKstIso()): { startDate: string; endDate: string } {
  const start = new Date(`${today}T12:00:00+09:00`);
  const end = new Date(start);
  end.setDate(end.getDate() + 6);
  const endDate = new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Seoul" }).format(end);
  return { startDate: today, endDate };
}
