/**
 * 목록·카드 등 작은 레이아웃용 이미지 URL.
 * 외부 CDN은 알려진 형식만 줄이고, 그 외 URL은 원본을 그대로 둡니다.
 */

const PLACE_LIST_MAX_W = 480;
const PEEK_CARD_MAX_W = 360;
const AVATAR_LIST_MAX_W = 128;

function tuneUnsplashUrl(url: string, maxWidth: number): string {
  try {
    const parsed = new URL(url);
    if (!parsed.hostname.includes("images.unsplash.com")) {
      return url;
    }
    parsed.searchParams.set("w", String(maxWidth));
    parsed.searchParams.set("q", "70");
    if (!parsed.searchParams.has("auto")) {
      parsed.searchParams.set("auto", "format");
    }
    if (!parsed.searchParams.has("fit")) {
      parsed.searchParams.set("fit", "crop");
    }
    return parsed.toString();
  } catch {
    return url;
  }
}

/** 명상지 목록/인기 카드 썸네일 */
export function listPlaceThumbnailUrl(url: string | undefined | null): string {
  if (url == null || !String(url).trim()) return "";
  const u = String(url).trim();
  return tuneUnsplashUrl(u, PLACE_LIST_MAX_W);
}

/** 지도 하단 피크 카드(조금 더 작게) */
export function peekPlaceThumbnailUrl(url: string | undefined | null): string {
  if (url == null || !String(url).trim()) return "";
  const u = String(url).trim();
  return tuneUnsplashUrl(u, PEEK_CARD_MAX_W);
}

/** 전문가 목록 아바타 */
export function listExpertAvatarUrl(url: string | undefined | null): string {
  if (url == null || !String(url).trim()) return "";
  const u = String(url).trim();
  return tuneUnsplashUrl(u, AVATAR_LIST_MAX_W);
}
