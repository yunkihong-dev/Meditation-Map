import type { ReactNode } from "react";

/**
 * 시설 정보 카탈로그.
 *
 * 관리자 등록 화면과 공개 상세 화면이 같은 목록을 봅니다. 예전에는 관리자가 쉼표로 구분한
 * 자유 문자열을 저장했는데, 상세 화면은 `wifi` 같은 키를 기대하고 있어서 등록해도 아이콘이
 * 붙지 않았습니다. 여기 있는 key 만 저장하도록 바꿔 둘을 하나로 맞춥니다.
 */
export interface FacilityDef {
  key: string;
  label: string;
  /** 자유 입력 시절에 저장된 표기 — 기존 데이터를 키로 되돌릴 때 씁니다. */
  aliases?: string[];
}

export interface FacilityGroup {
  title: string;
  items: FacilityDef[];
}

export const FACILITY_GROUPS: FacilityGroup[] = [
  {
    title: "공간",
    items: [
      { key: "meditation-hall", label: "명상홀", aliases: ["명상실", "선방"] },
      { key: "yoga-room", label: "요가·수련실", aliases: ["요가실", "수련실"] },
      { key: "group-room", label: "단체실", aliases: ["단체 수련실"] },
      { key: "private-room", label: "개인실", aliases: ["1인실", "개인 수련실"] },
      { key: "lounge", label: "라운지", aliases: ["휴게실", "휴게 공간"] },
      { key: "garden", label: "정원·자연", aliases: ["정원", "산책로"] },
      { key: "outdoor", label: "야외 수련장", aliases: ["야외", "야외 공간"] },
      { key: "library", label: "도서·자료", aliases: ["서재", "도서관"] },
    ],
  },
  {
    title: "편의시설",
    items: [
      { key: "wifi", label: "Wi-Fi", aliases: ["와이파이", "wifi", "무선인터넷"] },
      { key: "parking", label: "주차", aliases: ["주차장", "무료주차", "parking"] },
      { key: "locker", label: "사물함", aliases: ["보관함", "짐 보관"] },
      { key: "shower", label: "샤워실", aliases: ["샤워"] },
      { key: "changing-room", label: "탈의실", aliases: ["갱의실"] },
      { key: "restroom", label: "화장실", aliases: ["화장실 완비"] },
      { key: "elevator", label: "엘리베이터", aliases: ["승강기"] },
      { key: "barrier-free", label: "무장애 접근", aliases: ["배리어프리", "휠체어"] },
      { key: "aircon", label: "냉·난방", aliases: ["에어컨", "냉난방"] },
      { key: "water", label: "정수기", aliases: ["음수대"] },
      { key: "charging", label: "충전 가능", aliases: ["콘센트", "충전"] },
    ],
  },
  {
    title: "식음료",
    items: [
      { key: "tea", label: "다과·차", aliases: ["다과", "차", "tea", "티"] },
      { key: "meal", label: "식사 제공", aliases: ["식사", "공양"] },
      { key: "vegan", label: "채식 식단", aliases: ["채식", "비건"] },
    ],
  },
  {
    title: "수련 물품",
    items: [
      { key: "mat", label: "매트 대여", aliases: ["요가매트", "매트"] },
      { key: "cushion", label: "방석 제공", aliases: ["방석", "좌복"] },
      { key: "singing-bowl", label: "싱잉볼", aliases: ["싱잉볼 사용"] },
      { key: "incense", label: "향·아로마", aliases: ["향", "아로마"] },
    ],
  },
  {
    title: "숙박·부대",
    items: [
      { key: "stay", label: "숙박", aliases: ["숙소", "게스트룸"] },
      { key: "temple-stay", label: "템플스테이", aliases: ["템플 스테이"] },
      { key: "sauna", label: "사우나·찜질", aliases: ["사우나", "찜질"] },
    ],
  },
  {
    title: "이용 안내",
    items: [
      { key: "quiet", label: "정숙 구역", aliases: ["묵언", "정숙"] },
      { key: "pet", label: "반려동물 동반", aliases: ["반려동물", "펫 동반"] },
      { key: "kids", label: "아동 동반", aliases: ["아동", "어린이 동반"] },
      { key: "card", label: "카드 결제", aliases: ["카드"] },
      { key: "reservation", label: "예약 필수", aliases: ["사전예약", "예약제"] },
    ],
  },
];

export const FACILITIES: FacilityDef[] = FACILITY_GROUPS.flatMap((g) => g.items);

/** 별칭 대조용 — 대소문자·공백·구분기호를 지운 형태로 비교합니다. */
function normalize(raw: string): string {
  return raw.toLowerCase().replace(/[\s·・.\-_]/g, "");
}

const BY_KEY = new Map(FACILITIES.map((f) => [f.key, f]));

const BY_ALIAS = new Map<string, string>();
for (const f of FACILITIES) {
  BY_ALIAS.set(normalize(f.key), f.key);
  BY_ALIAS.set(normalize(f.label), f.key);
  for (const alias of f.aliases ?? []) BY_ALIAS.set(normalize(alias), f.key);
}

/** 저장된 값을 카탈로그 키로 되돌립니다. 못 알아보면 원본을 그대로 돌려줍니다. */
export function resolveFacilityKey(raw: string): string {
  return BY_ALIAS.get(normalize(raw)) ?? raw;
}

/** 화면에 표시할 이름. 카탈로그에 없는 예전 값은 입력된 그대로 보여줍니다. */
export function facilityLabel(raw: string): string {
  return BY_KEY.get(resolveFacilityKey(raw))?.label ?? raw;
}

export function isKnownFacility(raw: string): boolean {
  return BY_KEY.has(resolveFacilityKey(raw));
}

/* ─────────────────────────  아이콘  ─────────────────────────
 * 아이콘 라이브러리를 새로 들이지 않고 기존 화면과 같은 방식(24px 뷰박스, 선 굵기 2)으로
 * 직접 그립니다. 색은 currentColor 를 따라가므로 쓰는 쪽에서 정합니다.
 */
const ICONS: Record<string, ReactNode> = {
  "meditation-hall": (
    <>
      <path d="M3 10 12 4l9 6" />
      <path d="M5 10v9M12 10v9M19 10v9" />
      <path d="M3 20h18" />
    </>
  ),
  "yoga-room": (
    <>
      <circle cx="12" cy="4.5" r="2" />
      <path d="M12 7v5" />
      <path d="M7.5 9h9" />
      <path d="M12 12 8 20M12 12l4 8" />
    </>
  ),
  "group-room": (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20a6 6 0 0 1 12 0" />
      <path d="M16.5 5.3a3 3 0 0 1 0 5.4" />
      <path d="M18 14.4a6 6 0 0 1 3 5.6" />
    </>
  ),
  "private-room": (
    <>
      <rect x="5" y="3" width="14" height="18" rx="1.5" />
      <circle cx="15" cy="12" r="1" />
    </>
  ),
  lounge: (
    <>
      <path d="M4 11V8a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v3" />
      <rect x="2" y="11" width="20" height="6" rx="2" />
      <path d="M6 17v2M18 17v2" />
    </>
  ),
  garden: (
    <>
      <path d="M11 20A7 7 0 0 1 4 13c0-5.5 4.5-9 16-9 0 8-4.5 16-9 16z" />
      <path d="M4 21c2.5-5.5 6-8.5 10-10" />
    </>
  ),
  outdoor: (
    <>
      <circle cx="7" cy="6" r="2.5" />
      <path d="M3 20l5.5-7 3.5 4.5L15 13l6 7" />
      <path d="M2 20h20" />
    </>
  ),
  library: (
    <>
      <path d="M4 4h5a3 3 0 0 1 3 3v13a2.5 2.5 0 0 0-2.5-2H4z" />
      <path d="M20 4h-5a3 3 0 0 0-3 3v13a2.5 2.5 0 0 1 2.5-2H20z" />
    </>
  ),
  wifi: (
    <>
      <path d="M5 12.6a11 11 0 0 1 14 0" />
      <path d="M1.5 9a16 16 0 0 1 21 0" />
      <path d="M8.5 16.1a6 6 0 0 1 7 0" />
      <path d="M12 20h.01" />
    </>
  ),
  parking: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M9.5 17V7h3.2a3.4 3.4 0 0 1 0 6.8H9.5" />
    </>
  ),
  locker: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M4 12h16" />
      <path d="M8.5 7.5h2M8.5 16.5h2" />
    </>
  ),
  shower: (
    <>
      <path d="M12 3v3.5" />
      <path d="M6 11a6 6 0 0 1 12 0z" />
      <path d="M8.5 15v1.5M12 15v2.5M15.5 15v1.5M10 19.5v1M14 19.5v1" />
    </>
  ),
  "changing-room": (
    <>
      <path d="M12 7.5a2 2 0 1 1 2 2c-1.1 0-2 .9-2 2" />
      <path d="m12 11.5-8.4 6.1A1 1 0 0 0 4.2 19.5h15.6a1 1 0 0 0 .6-1.8z" />
    </>
  ),
  restroom: (
    <>
      <circle cx="7" cy="4" r="2" />
      <path d="M7 7a3 3 0 0 0-3 3v4h2v6h2v-6h2v-4a3 3 0 0 0-3-3z" />
      <circle cx="17" cy="4" r="2" />
      <path d="m17 7-3 8h2v5h2v-5h2z" />
    </>
  ),
  elevator: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M12 3v18" />
      <path d="m7 10 1.5-2L10 10" />
      <path d="m14 14 1.5 2L17 14" />
    </>
  ),
  "barrier-free": (
    <>
      <circle cx="15" cy="4" r="1.6" />
      <path d="M11 7.5 8 9l-3-2.5" />
      <path d="M11 7.5v5h5l2 7" />
      <circle cx="11" cy="16.5" r="4.5" />
    </>
  ),
  aircon: (
    <>
      <path d="M12 2v20" />
      <path d="m4.5 6.5 15 11M19.5 6.5l-15 11" />
      <path d="m9.5 4 2.5 2.5L14.5 4M9.5 20l2.5-2.5 2.5 2.5" />
    </>
  ),
  water: <path d="M12 3s6.5 6.8 6.5 10.5a6.5 6.5 0 0 1-13 0C5.5 9.8 12 3 12 3z" />,
  charging: <path d="M13 2 4 14h7l-1 8 9-12h-7z" />,
  tea: (
    <>
      <path d="M18 8h1a3.5 3.5 0 0 1 0 7h-1" />
      <path d="M3 8h15v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4z" />
      <path d="M7 2v3M11 2v3" />
    </>
  ),
  meal: (
    <>
      <path d="M6 3v7a2 2 0 0 0 4 0V3" />
      <path d="M8 10v11" />
      <path d="M17 3c-1.4 2-2 4-2 6s.9 3 2 3 2-1 2-3-.6-4-2-6z" />
      <path d="M17 12v9" />
    </>
  ),
  vegan: (
    <>
      <path d="M12 21V10" />
      <path d="M12 12c0-4-3-6-7-6 0 4 3 6 7 6z" />
      <path d="M12 14c0-3.2 2.4-5 6-5 0 3.2-2.4 5-6 5z" />
    </>
  ),
  mat: (
    <>
      <rect x="2" y="8.5" width="15" height="7" rx="3.5" />
      <path d="M17 8.5a3.5 3.5 0 0 1 0 7" />
      <path d="M6 8.5v7" />
    </>
  ),
  cushion: (
    <>
      <rect x="3" y="7" width="18" height="10" rx="4" />
      <path d="M7.5 7v10M16.5 7v10" />
    </>
  ),
  "singing-bowl": (
    <>
      <path d="M3.5 10h17a8.5 8.5 0 0 1-17 0z" />
      <path d="M8.5 6.5C8.5 5.1 10 4 12 4s3.5 1.1 3.5 2.5" />
    </>
  ),
  incense: (
    <>
      <path d="M12 20V9" />
      <path d="M12 9c-2.2-2.2-1.2-5.4 0-7 1.2 1.6 2.2 4.8 0 7z" />
      <path d="M8.5 20h7" />
    </>
  ),
  stay: (
    <>
      <path d="M2 5v15" />
      <path d="M2 9h16a3 3 0 0 1 3 3v8" />
      <path d="M2 18h19" />
      <path d="M7 9v5" />
    </>
  ),
  "temple-stay": (
    <>
      <path d="M3 8h18L12 3z" />
      <path d="M5 12h14l-2-4H7z" />
      <path d="M7.5 20.5V15h9v5.5" />
      <path d="M4 20.5h16" />
    </>
  ),
  sauna: (
    <>
      <path d="M5 20.5h14" />
      <circle cx="9" cy="17.5" r="2" />
      <circle cx="15" cy="17.5" r="2" />
      <path d="M9 12c0-2 2-2.2 2-4.2M15 12c0-2 2-2.2 2-4.2" />
    </>
  ),
  quiet: (
    <>
      <path d="M11 5 6.5 9H3v6h3.5L11 19z" />
      <path d="m16 9.5 5 5M21 9.5l-5 5" />
    </>
  ),
  pet: (
    <>
      <circle cx="6.5" cy="9.5" r="1.8" />
      <circle cx="11" cy="6.5" r="1.8" />
      <circle cx="16" cy="8" r="1.8" />
      <circle cx="19" cy="12.5" r="1.6" />
      <path d="M12.5 12c-3 0-5.5 2.4-5.5 5s2.5 4 5.5 4 5.5-1.4 5.5-4-2.5-5-5.5-5z" />
    </>
  ),
  kids: (
    <>
      <circle cx="12" cy="6.5" r="3.5" />
      <path d="M9 21v-4.5H7.5V14a4.5 4.5 0 0 1 9 0v2.5H15V21" />
    </>
  ),
  card: (
    <>
      <rect x="2" y="5" width="20" height="14" rx="2.5" />
      <path d="M2 10h20" />
      <path d="M6 15h4" />
    </>
  ),
  reservation: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2.5" />
      <path d="M3 10h18" />
      <path d="M8 3v4M16 3v4" />
      <path d="m9 15 2 2 4-4" />
    </>
  ),
};

const FALLBACK_ICON = (
  <>
    <circle cx="12" cy="12" r="9.5" />
    <path d="M12 8v4.5M12 16h.01" />
  </>
);

interface FacilityIconProps {
  /** 저장된 값(키 또는 예전 자유 문자열) */
  name: string;
  className?: string;
}

/** 카탈로그에 없는 값에는 물음표 아이콘이 붙습니다. */
export function FacilityIcon({ name, className }: FacilityIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ICONS[resolveFacilityKey(name)] ?? FALLBACK_ICON}
    </svg>
  );
}
