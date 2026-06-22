import type { DetailSection } from "@/services/meditation/types";

export const NOTICE_SECTION_TITLE = "유의사항";

export function readNoticeBody(sections: DetailSection[] | undefined): string {
  return sections?.find((s) => s.title.includes("유의사항"))?.body ?? "";
}

export function writeNoticeBody(sections: DetailSection[] | undefined, body: string): DetailSection[] {
  const next = [...(sections ?? [])];
  const idx = next.findIndex((s) => s.title.includes("유의사항"));
  const section: DetailSection = { title: NOTICE_SECTION_TITLE, body };
  if (idx >= 0) next[idx] = section;
  else next.push(section);
  return next;
}

/** 시설 목록 → 입력 필드 문자열 (쉼표 구분) */
export function formatFacilitiesInput(facilities: string[] | undefined): string {
  return (facilities ?? []).join(", ");
}

/** 입력 문자열 → 시설 목록 */
export function parseFacilitiesInput(raw: string): string[] {
  return raw
    .split(/[,，]/)
    .map((s) => s.trim())
    .filter(Boolean);
}
