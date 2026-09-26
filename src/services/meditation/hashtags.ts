/**
 * 해시태그는 `#` 없이 저장하고, 화면에서만 `#`을 붙입니다.
 * 관리자가 "#숲명상", "숲 명상", " 숲명상 " 어떻게 넣어도 같은 태그 하나로 모읍니다.
 */
export const MAX_HASHTAGS = 8;

export function normalizeHashtag(raw: string): string {
  return raw.replace(/^#+/, "").replace(/\s+/g, "").trim();
}

/** 쉼표·공백·줄바꿈으로 여러 개를 한 번에 붙여 넣어도 나눠서 받습니다. */
export function splitHashtags(raw: string): string[] {
  return raw.split(/[,\s]+/).map(normalizeHashtag).filter(Boolean);
}

/** 기존 목록 뒤에 새 태그를 붙이되 중복은 버리고 최대 개수에서 자릅니다. */
export function mergeHashtags(current: string[], incoming: string[]): string[] {
  const next = current.map(normalizeHashtag).filter(Boolean);
  for (const tag of incoming.map(normalizeHashtag)) {
    if (tag && !next.includes(tag)) next.push(tag);
  }
  return next.slice(0, MAX_HASHTAGS);
}

/** 카드에 뿌릴 `#태그` 문자열 — 앞쪽 몇 개만. */
export function displayHashtags(tags: string[] | undefined, limit: number): string[] {
  return mergeHashtags([], tags ?? [])
    .slice(0, limit)
    .map((tag) => `#${tag}`);
}
