import { getMeditationApiBaseUrl } from "./apiConfig";

/** 홈 배너 — 서버가 게시 기간·on/off 를 이미 걸러서 순서대로 내려 줍니다. */
export interface BannerDto {
  id: string;
  imageUrl: string;
  alt?: string;
  href?: string;
}

export async function fetchBanners(): Promise<BannerDto[]> {
  const base = getMeditationApiBaseUrl();
  if (!base) return [];

  const res = await fetch(`${base}/banners`);
  if (!res.ok) throw new Error(`배너를 불러오지 못했습니다 (${res.status})`);

  const rows: unknown = await res.json();
  if (!Array.isArray(rows)) return [];

  return rows
    .filter((row): row is Record<string, unknown> => typeof row === "object" && row !== null)
    .map((row) => ({
      id: String(row.id ?? ""),
      imageUrl: String(row.imageUrl ?? ""),
      alt: row.alt == null ? undefined : String(row.alt),
      href: row.href == null ? undefined : String(row.href),
    }))
    .filter((banner) => banner.imageUrl.length > 0);
}
