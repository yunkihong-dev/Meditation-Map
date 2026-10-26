/**
 * 오너 장소 API 타입 — 01_contract.md 8절.
 *
 * PATCH 에는 `editableFields` 에 있는 키만 담아야 합니다. 금지 키가 하나라도 있으면
 * BE 가 전체를 400 PLACE_OWNER_FIELD_NOT_ALLOWED 로 거부합니다.
 */
import { arr, bool, rec, str, strOrNull } from "@/services/http/apiError";
import type { MeditationPlace } from "@/services/meditation/types";

/** 계약 8.2·8.3 의 허용 필드. 서버가 내려 주는 editableFields 와 교집합만 씁니다. */
export const OWNER_EDITABLE_FIELDS = [
  "name",
  "shortDescription",
  "description",
  "thumbnailUrl",
  "photos",
  "hashtags",
  "duration",
  "admissionFee",
  "programs",
  "instructors",
  "organization",
  "externalLink",
  "detailSections",
  "facilities",
  // C4(라운드 3): 위치·사업자 정보. address·lat·lng 는 셋이 함께 가야 하고, regionId 는 서버가 주소로 다시 정한다.
  "address",
  "addressDetail",
  "lat",
  "lng",
  "businessRegistrationNumber",
] as const;

export type OwnerEditableField = (typeof OWNER_EDITABLE_FIELDS)[number];

/** payload(data) 안의 키. businessRegistrationNumber 는 응답 최상위(data 밖, C5)에 있습니다. */
export type OwnerDataField = Exclude<OwnerEditableField, "businessRegistrationNumber">;

/** address·lat·lng — 하나라도 바뀌면 셋을 함께 보냅니다(빠지면 BE 400 VALIDATION_FAILED). */
export const LOCATION_BUNDLE = ["address", "lat", "lng"] as const;

export type OwnerPlacePatch = Partial<Pick<MeditationPlace, OwnerDataField>> & {
  businessRegistrationNumber?: string;
};

export interface MyPlaceItem {
  placeId: string;
  regionId: string;
  name: string;
  thumbnailUrl: string | null;
  hidden: boolean;
  approvedAt: string | null;
}

export interface OwnerPlaceView {
  placeId: string;
  regionId: string;
  data: MeditationPlace;
  /** C5 — data 밖 최상위. 공개 응답에는 없음 */
  businessRegistrationNumber: string | null;
  editableFields: OwnerEditableField[];
}

const ALLOWED = new Set<string>(OWNER_EDITABLE_FIELDS);

export function parseMyPlaces(raw: unknown): MyPlaceItem[] {
  return arr(rec(raw).items).map((it) => {
    const o = rec(it);
    return {
      placeId: str(o.placeId),
      regionId: str(o.regionId),
      name: str(o.name),
      thumbnailUrl: strOrNull(o.thumbnailUrl),
      hidden: bool(o.hidden),
      approvedAt: strOrNull(o.approvedAt),
    };
  });
}

/**
 * data 는 MeditationPlace 전체 payload 입니다. 폼이 쓰는 배열·문자열 필드가 빠져 와도
 * 편집 화면이 터지지 않도록 기본값을 채웁니다(채운 기본값은 바뀌지 않는 한 PATCH 에 실리지 않음).
 */
export function parseOwnerPlace(raw: unknown): OwnerPlaceView {
  const o = rec(raw);
  const d = rec(o.data);
  const org = rec(d.organization);
  const data = {
    ...(d as unknown as MeditationPlace),
    id: str(d.id, str(o.placeId)),
    regionId: str(d.regionId, str(o.regionId)),
    name: str(d.name),
    shortDescription: str(d.shortDescription),
    description: str(d.description),
    address: str(d.address),
    addressDetail: str(d.addressDetail),
    thumbnailUrl: str(d.thumbnailUrl),
    photos: arr(d.photos).filter((x): x is string => typeof x === "string"),
    hashtags: arr(d.hashtags).filter((x): x is string => typeof x === "string"),
    themes: arr(d.themes).filter((x): x is string => typeof x === "string"),
    hasTempleStay: bool(d.hasTempleStay),
    duration: str(d.duration),
    admissionFee: str(d.admissionFee),
    programs: Array.isArray(d.programs) ? (d.programs as MeditationPlace["programs"]) : [],
    instructors: Array.isArray(d.instructors) ? (d.instructors as MeditationPlace["instructors"]) : [],
    organization: { name: str(org.name) },
    externalLink: str(d.externalLink),
    detailSections: Array.isArray(d.detailSections)
      ? (d.detailSections as MeditationPlace["detailSections"])
      : [],
    facilities: arr(d.facilities).filter((x): x is string => typeof x === "string"),
  } satisfies MeditationPlace;
  const editableFields = arr(o.editableFields).filter(
    (f): f is OwnerEditableField => typeof f === "string" && ALLOWED.has(f)
  );
  return {
    placeId: str(o.placeId),
    regionId: str(o.regionId),
    data,
    businessRegistrationNumber: strOrNull(o.businessRegistrationNumber),
    editableFields,
  };
}

/**
 * 원본과 편집본을 비교해 바뀐 허용 필드만 담은 PATCH 본문을 만듭니다.
 * - editableFields 밖의 키는 절대 담지 않습니다(전체 거부 400 방지)
 * - 담은 키는 최상위 단위로 통째로 교체되므로 값은 편집본 전체를 그대로 보냅니다
 * - programs·instructors 안의 reviews·hidden 은 서버가 id 기준으로 보존하므로 받은 그대로 보내도 됩니다
 */
export function buildOwnerPatch(
  original: MeditationPlace,
  edited: MeditationPlace,
  editableFields: readonly string[],
  /** C5 사업자번호 — data 밖이라 따로 받습니다. 생략하면 보내지 않습니다 */
  business?: { before: string | null; after: string | null }
): OwnerPlacePatch {
  const patch: Record<string, unknown> = {};
  const can = (k: string) => editableFields.includes(k) && ALLOWED.has(k);
  for (const key of editableFields) {
    if (!ALLOWED.has(key) || key === "businessRegistrationNumber") continue;
    const k = key as OwnerDataField;
    const before = original[k];
    const after = edited[k];
    if (JSON.stringify(before ?? null) !== JSON.stringify(after ?? null)) {
      patch[k] = after;
    }
  }
  // 주소·좌표는 묶음: 하나라도 바뀌었으면 셋 모두 실어 보냅니다(C4).
  if (LOCATION_BUNDLE.some((k) => k in patch) && LOCATION_BUNDLE.every(can)) {
    for (const k of LOCATION_BUNDLE) patch[k] = edited[k];
  }
  if (business && can("businessRegistrationNumber")) {
    const before = (business.before ?? "").trim();
    const after = (business.after ?? "").trim();
    // 빈 문자열 = 지우기(C5)
    if (before !== after) patch.businessRegistrationNumber = after;
  }
  return patch as OwnerPlacePatch;
}

/** 서버 details.fields(lat·lng·address·addressDetail 등)를 편집 화면 칸 이름으로 묶습니다. */
export function fieldGroupOf(field: string): string {
  if (field === "lat" || field === "lng" || field === "address" || field === "regionId") return "address";
  return field;
}

export function ownerPlaceErrorMessage(code: string | null, fields: string[], fallback: string): string {
  switch (code) {
    case "PLACE_NOT_OWNER":
      return "이 장소를 수정할 권한이 없어요.";
    case "PLACE_OWNER_FIELD_NOT_ALLOWED":
      return `수정할 수 없는 항목이 포함되어 있어요${fields.length ? `: ${fields.join(", ")}` : ""}`;
    case "VALIDATION_FAILED":
      return fields.length ? `입력값을 확인해 주세요: ${fields.join(", ")}` : fallback;
    case "RESOURCE_NOT_FOUND":
      return "장소를 찾을 수 없어요.";
    default:
      return fallback;
  }
}

function isUrlOrEmpty(v: unknown): boolean {
  if (v == null || v === "") return true;
  return typeof v === "string" && /^https?:\/\//i.test(v.trim());
}

/**
 * PATCH 전 FE 검증(계약 8.3 타입 검증과 같은 규칙). 문제 있는 필드 이름 목록을 돌려줍니다.
 * BE 가 최종 판정하지만, 저장을 눌렀을 때 바로 알려 주려는 용도입니다.
 */
export function validateOwnerDraft(d: MeditationPlace, editableFields: readonly string[]): string[] {
  const has = (k: string) => editableFields.includes(k);
  const bad: string[] = [];
  if (has("name") && (d.name.trim().length === 0 || d.name.trim().length > 100)) bad.push("name");
  if (has("thumbnailUrl") && !isUrlOrEmpty(d.thumbnailUrl)) bad.push("thumbnailUrl");
  if (has("photos") && ((d.photos ?? []).length > 30 || !(d.photos ?? []).every(isUrlOrEmpty))) bad.push("photos");
  if (has("externalLink") && !isUrlOrEmpty(d.externalLink)) bad.push("externalLink");
  if (has("address") && (d.lat != null || d.lng != null)) {
    const latOk = typeof d.lat === "number" && d.lat >= 33.0 && d.lat <= 38.7;
    const lngOk = typeof d.lng === "number" && d.lng >= 124.5 && d.lng <= 132.0;
    if (!latOk || !lngOk || !d.address.trim()) bad.push("address");
  }
  if (has("programs")) {
    const ps = d.programs ?? [];
    const ids = new Set<string>();
    for (const p of ps) {
      if (!p.id || ids.has(p.id) || !isUrlOrEmpty(p.imageUrl) || !(p.imageUrls ?? []).every(isUrlOrEmpty)) {
        bad.push("programs");
        break;
      }
      ids.add(p.id);
    }
  }
  if (has("instructors")) {
    const xs = d.instructors ?? [];
    const ids = new Set<string>();
    for (const x of xs) {
      if (!x.id || ids.has(x.id) || !isUrlOrEmpty(x.photoUrl)) {
        bad.push("instructors");
        break;
      }
      ids.add(x.id);
    }
  }
  return bad;
}

export const OWNER_FIELD_LABELS: Record<OwnerEditableField, string> = {
  name: "이름",
  shortDescription: "한 줄 소개",
  description: "상세 소개",
  thumbnailUrl: "대표 이미지",
  photos: "사진",
  hashtags: "해시태그",
  duration: "소요 시간",
  admissionFee: "이용 요금",
  programs: "행사·프로그램",
  instructors: "강사",
  organization: "운영 기관",
  externalLink: "외부 링크",
  detailSections: "안내 항목",
  facilities: "시설",
  address: "주소",
  addressDetail: "상세 주소",
  lat: "주소(좌표)",
  lng: "주소(좌표)",
  businessRegistrationNumber: "사업자 등록번호",
};

// ── C6 대시보드 통계 GET /me/places/{id}/stats?range= ─────────────────

export type StatsRange = "1D" | "1W" | "1M" | "ALL";
export const STATS_RANGES: StatsRange[] = ["1D", "1W", "1M", "ALL"];

export interface PlaceStats {
  placeId: string;
  range: StatsRange | (string & {});
  from: string;
  to: string;
  views: { total: number; previousTotal: number | null; changeRate: number | null };
  bookmarks: { current: number; added: number; removed: number; net: number };
  granularity: "DAY" | "MONTH" | (string & {});
  series: { date: string; views: number; bookmarksAdded: number; bookmarksRemoved: number }[];
}

function numOr(v: unknown, d: number): number {
  return typeof v === "number" && Number.isFinite(v) ? v : d;
}

function numOrNull(v: unknown): number | null {
  return typeof v === "number" && Number.isFinite(v) ? v : null;
}

export function parsePlaceStats(raw: unknown): PlaceStats {
  const o = rec(raw);
  const v = rec(o.views);
  const b = rec(o.bookmarks);
  return {
    placeId: str(o.placeId),
    range: str(o.range, "1M"),
    from: str(o.from),
    to: str(o.to),
    views: { total: numOr(v.total, 0), previousTotal: numOrNull(v.previousTotal), changeRate: numOrNull(v.changeRate) },
    bookmarks: {
      current: numOr(b.current, 0),
      added: numOr(b.added, 0),
      removed: numOr(b.removed, 0),
      net: numOr(b.net, 0),
    },
    granularity: str(o.granularity, "DAY"),
    series: arr(o.series).map((it) => {
      const s = rec(it);
      return {
        date: str(s.date),
        views: numOr(s.views, 0),
        bookmarksAdded: numOr(s.bookmarksAdded, 0),
        bookmarksRemoved: numOr(s.bookmarksRemoved, 0),
      };
    }),
  };
}

/** 범위별 비교 문구. changeRate 가 null(직전 0·ALL)이면 null → 화면에서 숨깁니다(가짜 숫자 금지). */
export function changeRateText(range: string, changeRate: number | null): string | null {
  if (changeRate == null) return null;
  const base = range === "1D" ? "어제" : range === "1W" ? "직전 7일" : range === "1M" ? "직전 30일" : null;
  if (!base) return null;
  if (changeRate === 0) return `${base} 대비 변화 없음`;
  return `${base} 대비 ${Math.abs(changeRate).toFixed(1)}% ${changeRate > 0 ? "증가" : "감소"}`;
}

export const STATS_RANGE_LABEL: Record<StatsRange, string> = {
  "1D": "일간 조회수",
  "1W": "최근 7일 조회수",
  "1M": "최근 30일 조회수",
  ALL: "누적 조회수",
};
