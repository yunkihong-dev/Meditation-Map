import type { DetailSection, MeditationPlace } from "@/services/meditation/types";
import { normalizePlacePrograms } from "@/services/meditation/placeProgramStatus";

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

/**
 * 관리자 장소 폼의 불러오기·저장 정규화. 사진·썸네일·프로그램 상태만 맞추고 **나머지 키는 그대로 둡니다**.
 * 오너가 넣은 `addressDetail`(C4)이나 폼이 모르는 키를 여기서 버리면, 관리자가 저장할 때(PUT 전체 교체)
 * 오너 입력이 지워집니다. 그래서 필드를 골라 담지 않고 펼쳐서(spread) 보존합니다.
 */
export function normalizeAdminPlace(data: MeditationPlace): MeditationPlace {
  const photos = data.photos ?? [];
  const thumbnailUrl = data.thumbnailUrl?.trim() || photos[0] || "";
  return normalizePlacePrograms({ ...data, photos, thumbnailUrl });
}
