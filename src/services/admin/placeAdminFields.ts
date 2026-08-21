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
