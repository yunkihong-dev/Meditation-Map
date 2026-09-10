/** 홈 배너 관리 폼이 다루는 값. 서버에는 이 값들이 payload(JSON) 한 덩어리로 저장됩니다. */
export type BannerDraft = {
  imageUrl: string;
  /** 이미지가 안 보일 때 읽히는 설명 */
  alt: string;
  /** 눌렀을 때 갈 곳. 비우면 링크 없는 이미지 */
  href: string;
  /** 작을수록 앞. 목록은 이 순서로 보입니다 */
  sortOrder: number;
  /** YYYY-MM-DD. 비우면 바로 시작 */
  startsAt: string;
  /** YYYY-MM-DD. 비우면 내릴 때까지 계속 */
  endsAt: string;
  /** 기간과 무관하게 즉시 내리는 스위치 */
  enabled: boolean;
};

/** 서버가 찍어 주는 값 — 폼에서 고치지 않고 보여 주기만 합니다. */
export type BannerStamps = {
  createdAt?: string;
  updatedAt?: string;
};

/**
 * 기본 배너. 올린 광고가 하나도 없을 때 홈이 이걸 대신 띄웁니다.
 *
 * 그래서 "광고 자리" 같은 안내가 아니라 서비스를 알리는 내용으로 채웠습니다 —
 * 사용자에게 보이는 면이라, 비어 있다는 사정이 드러나면 안 됩니다.
 * 관리자가 새 배너를 만들 때의 시작 이미지이기도 해서, 그대로 저장해도 말이 됩니다.
 */
export const DEFAULT_BANNER_IMAGE = "/banner-default.svg";

/** 기본 배너를 눌렀을 때 갈 곳 — 전국 지도. */
export const DEFAULT_BANNER_HREF = "/meditation/region/all";

/** 기본 배너의 대체 텍스트. */
export const DEFAULT_BANNER_ALT = "오늘, 쉬어갈 곳을 찾아보세요 — 내 주변 명상 공간과 프로그램을 지도에서";

export function emptyBannerDraft(nextSortOrder = 0): BannerDraft {
  return {
    imageUrl: DEFAULT_BANNER_IMAGE,
    alt: DEFAULT_BANNER_ALT,
    href: "",
    sortOrder: nextSortOrder,
    startsAt: "",
    endsAt: "",
    enabled: true,
  };
}

function str(value: unknown): string {
  return value == null ? "" : String(value).trim();
}

export function draftFromPayload(payload: Record<string, unknown>): BannerDraft {
  return {
    imageUrl: str(payload.imageUrl),
    alt: str(payload.alt),
    href: str(payload.href),
    sortOrder: Number.isFinite(Number(payload.sortOrder)) ? Number(payload.sortOrder) : 0,
    startsAt: str(payload.startsAt),
    endsAt: str(payload.endsAt),
    // enabled 가 없던 예전 데이터는 켜진 것으로 봅니다 (서버 판정과 같게).
    enabled: payload.enabled == null ? true : Boolean(payload.enabled),
  };
}

export function payloadFromDraft(draft: BannerDraft): Record<string, unknown> {
  return {
    imageUrl: draft.imageUrl.trim(),
    alt: draft.alt.trim(),
    href: draft.href.trim(),
    sortOrder: Number.isFinite(draft.sortOrder) ? draft.sortOrder : 0,
    startsAt: draft.startsAt.trim(),
    endsAt: draft.endsAt.trim(),
    enabled: draft.enabled,
  };
}

export type BannerStatus = "게시중" | "예정" | "종료" | "꺼짐" | "이미지 없음";

/** KST 기준 오늘 (YYYY-MM-DD) */
export function todayKst(): string {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Seoul" }).format(new Date());
}

/**
 * 지금 이 배너가 어떤 상태인지. 서버의 BannerVisibility 와 같은 규칙입니다.
 * 기간은 양끝을 포함하고, 꺼짐 스위치가 기간보다 우선합니다.
 */
export function bannerStatus(draft: BannerDraft, today = todayKst()): BannerStatus {
  if (!draft.imageUrl) return "이미지 없음";
  if (!draft.enabled) return "꺼짐";
  if (draft.startsAt && today < draft.startsAt) return "예정";
  if (draft.endsAt && today > draft.endsAt) return "종료";
  return "게시중";
}

/** "2026-03-01 ~ 2026-03-31" / "2026-03-01 ~" / "상시" */
export function formatPeriod(draft: BannerDraft): string {
  const { startsAt, endsAt } = draft;
  if (startsAt && endsAt) return `${startsAt} ~ ${endsAt}`;
  if (startsAt) return `${startsAt} ~`;
  if (endsAt) return `~ ${endsAt}`;
  return "상시";
}
