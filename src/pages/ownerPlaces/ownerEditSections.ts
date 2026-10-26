/**
 * 센터 편집(/profile/places/:placeId/edit · /details) 모바일 접기 — 카드(섹션)와 필드의 대응.
 *
 * 모바일(<1024px)에서는 카드를 한 번에 하나만 펼칩니다. 접힌 카드의 입력값은 draft 상태에 그대로 있고
 * DOM 도 hidden 으로 남아 있어 저장 payload 는 접기와 무관합니다. 이 표는 UI 용도뿐입니다:
 * - 카드 머리의 "수정됨" 표시(patch 키 → 카드)
 * - 저장 검증·서버 오류가 접힌 카드의 필드를 가리키면 그 카드를 펼치기
 */
export type OwnerSectionId =
  | "owner-basic"
  | "owner-photos"
  | "owner-inquiry"
  | "owner-intro"
  | "owner-thumbnail"
  | "owner-facilities"
  | "owner-sections"
  | "owner-programs"
  | "owner-instructors";

export const OWNER_SECTION_FIELDS: Record<OwnerSectionId, readonly string[]> = {
  "owner-basic": ["name", "businessRegistrationNumber", "address", "addressDetail", "lat", "lng"],
  "owner-photos": ["photos"],
  // 문의 방식은 별도 리소스(PUT inquiry-settings) — patch 키가 없습니다
  "owner-inquiry": [],
  "owner-intro": ["shortDescription", "description", "hashtags", "duration", "admissionFee", "organization", "externalLink"],
  "owner-thumbnail": ["thumbnailUrl"],
  "owner-facilities": ["facilities"],
  "owner-sections": ["detailSections"],
  "owner-programs": ["programs"],
  "owner-instructors": ["instructors"],
};

export const OWNER_SECTIONS_BY_MODE: Record<"basic" | "details", readonly OwnerSectionId[]> = {
  basic: ["owner-basic", "owner-photos", "owner-inquiry"],
  details: ["owner-intro", "owner-thumbnail", "owner-facilities", "owner-sections", "owner-programs", "owner-instructors"],
};

export function sectionOfField(field: string): OwnerSectionId | null {
  for (const [id, fields] of Object.entries(OWNER_SECTION_FIELDS) as [OwnerSectionId, readonly string[]][]) {
    if (fields.includes(field)) return id;
  }
  return null;
}

/**
 * 처음 펼칠 카드 — 주소의 #해시가 이 화면 카드면 그것.
 * 아니면 기본 정보 화면은 첫 카드(이름·주소, 짧음)를 펼치고, 카드가 6개인 상세 화면은 전부 접은 요약 목록으로 시작합니다.
 */
export function initialOpenSection(mode: "basic" | "details", hash: string): OwnerSectionId | null {
  const fromHash = hash.replace(/^#/, "");
  const list = OWNER_SECTIONS_BY_MODE[mode];
  if ((list as readonly string[]).includes(fromHash)) return fromHash as OwnerSectionId;
  return mode === "basic" ? list[0] : null;
}

/** patch 키(바뀐 필드)들이 속한 카드 집합 */
export function dirtySections(patchKeys: readonly string[]): ReadonlySet<OwnerSectionId> {
  const out = new Set<OwnerSectionId>();
  for (const k of patchKeys) {
    const s = sectionOfField(k);
    if (s) out.add(s);
  }
  return out;
}
