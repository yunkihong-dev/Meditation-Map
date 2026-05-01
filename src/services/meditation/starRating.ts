const FILLED = "★";
const EMPTY = "☆";

/** 5점 만점: 왼쪽부터 채운 별, 오른쪽은 빈 별 (예: 4점 → ★★★★☆). */
export function formatFiveStarRow(rating: number, max = 5): string {
  const n = Math.round(Number(rating));
  const filled = Math.max(0, Math.min(max, Number.isFinite(n) ? n : 0));
  return FILLED.repeat(filled) + EMPTY.repeat(max - filled);
}
