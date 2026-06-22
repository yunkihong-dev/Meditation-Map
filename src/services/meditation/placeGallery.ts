import type { MeditationPlace } from "./types";

/** 상세 페이지 히어로 갤러리 URL (photos[] 순서 우선) */
export function buildPlaceHeroGalleryUrls(place: MeditationPlace): string[] {
  const out: string[] = [];
  const seen = new Set<string>();
  const push = (u: string | undefined) => {
    const s = u?.trim();
    if (!s || seen.has(s)) return;
    seen.add(s);
    out.push(s);
  };
  if (place.photos?.length) {
    for (const u of place.photos) push(u);
  } else {
    push(place.thumbnailUrl);
  }
  for (const p of place.programs ?? []) {
    if (p.status !== "ongoing") continue;
    push(p.imageUrl);
    for (const u of p.imageUrls ?? []) push(u);
  }
  return out;
}

export function listPreviewThumbnail(place: MeditationPlace): string {
  const hero = buildPlaceHeroGalleryUrls(place);
  return hero[0] ?? place.thumbnailUrl ?? "";
}
