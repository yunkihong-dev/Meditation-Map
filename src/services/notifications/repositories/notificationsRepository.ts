/**
 * 알림 API (계약 2·3절). 인증은 쿠키뿐이라 모두 apiFetch(credentials include)로 부릅니다.
 * scope "me" → `/me/...`(회원 쿠키), "admin" → `/admin/...`(관리자 쿠키). 응답 shape은 같습니다.
 */
import { apiFetch } from "@/stores/authStore";
import { expectOk, readJson } from "@/services/http/apiError";
import { getMeditationApiBaseUrl } from "@/services/meditation/repositories/apiConfig";
import {
  parseBroadcastPage,
  parseBroadcastResult,
  parseNotificationPage,
  parseReadAllResult,
  parseReadResult,
  parseUnreadCount,
  type BroadcastHistoryItem,
  type BroadcastRequest,
  type BroadcastResult,
  type CursorPage,
  type AppNotification,
  type NotificationScope,
  type ReadAllResult,
  type ReadResult,
} from "@/services/notifications/types";

export const NOTIFICATION_PAGE_SIZE = 20;

/*
 * 경로는 scope 로 분기해 리터럴로 씁니다. 템플릿 변수로 접두를 붙이면
 * contract_scan(하네스 contract-scan 게이트)이 FE 호출 경로를 정적으로 읽지 못합니다(QA Q1).
 */

function cursorQuery(cursor: string | null | undefined, size: number): string {
  const q = new URLSearchParams({ size: String(size) });
  if (cursor) q.set("cursor", cursor);
  return q.toString();
}

export async function fetchNotifications(
  scope: NotificationScope,
  cursor?: string | null,
  size = NOTIFICATION_PAGE_SIZE
): Promise<CursorPage<AppNotification>> {
  const q = cursorQuery(cursor, size);
  const res = await (scope === "admin"
    ? apiFetch(`/admin/notifications?${q}`)
    : apiFetch(`/me/notifications?${q}`));
  return parseNotificationPage(await readJson(res));
}

export async function fetchUnreadCount(scope: NotificationScope): Promise<number> {
  const res = await (scope === "admin"
    ? apiFetch("/admin/notifications/unread-count")
    : apiFetch("/me/notifications/unread-count"));
  return parseUnreadCount(await readJson(res));
}

export async function markNotificationRead(scope: NotificationScope, id: string): Promise<ReadResult> {
  const enc = encodeURIComponent(id);
  const res = await (scope === "admin"
    ? apiFetch(`/admin/notifications/${enc}/read`, { method: "POST" })
    : apiFetch(`/me/notifications/${enc}/read`, { method: "POST" }));
  return parseReadResult(await readJson(res));
}

export async function markAllNotificationsRead(scope: NotificationScope): Promise<ReadAllResult> {
  const res = await (scope === "admin"
    ? apiFetch("/admin/notifications/read-all", { method: "POST" })
    : apiFetch("/me/notifications/read-all", { method: "POST" }));
  return parseReadAllResult(await readJson(res));
}

/** SSE 스트림 URL. EventSource 는 apiFetch 를 못 쓰므로 베이스 URL을 직접 붙입니다. */
export function notificationStreamUrl(scope: NotificationScope): string | null {
  const base = getMeditationApiBaseUrl();
  if (!base) return null;
  return scope === "admin"
    ? `${base}/admin/notifications/stream`
    : `${base}/me/notifications/stream`;
}

/** PUT /me/push-tokens — 204 */
export async function registerPushToken(scope: NotificationScope, token: string): Promise<void> {
  const init: RequestInit = { method: "PUT", body: JSON.stringify({ token, platform: "WEB" }) };
  await expectOk(
    await (scope === "admin" ? apiFetch("/admin/push-tokens", init) : apiFetch("/me/push-tokens", init))
  );
}

/** DELETE /me/push-tokens — 204(멱등). DELETE 에도 JSON 본문을 씁니다(계약 2.5). */
export async function unregisterPushToken(scope: NotificationScope, token: string): Promise<void> {
  const init: RequestInit = { method: "DELETE", body: JSON.stringify({ token, platform: "WEB" }) };
  await expectOk(
    await (scope === "admin" ? apiFetch("/admin/push-tokens", init) : apiFetch("/me/push-tokens", init))
  );
}

// ── 관리자 광고 발송 (계약 3.1·3.2) ──────────────────────────

export async function sendBroadcast(req: BroadcastRequest): Promise<BroadcastResult> {
  const body: BroadcastRequest = {
    requestId: req.requestId,
    title: req.title,
    body: req.body,
    linkUrl: req.linkUrl,
    target: req.target,
    ...(req.target === "EMAILS" ? { emails: req.emails ?? [] } : {}),
  };
  const res = await apiFetch("/admin/notifications/broadcasts", {
    method: "POST",
    body: JSON.stringify(body),
  });
  return parseBroadcastResult(await readJson(res));
}

export async function fetchBroadcasts(
  cursor?: string | null,
  size = NOTIFICATION_PAGE_SIZE
): Promise<CursorPage<BroadcastHistoryItem>> {
  const res = await apiFetch(`/admin/notifications/broadcasts?${cursorQuery(cursor, size)}`);
  return parseBroadcastPage(await readJson(res));
}

/**
 * 알림 1건 찾기 — BE 에 단건 조회 API 가 없어(계약 2절) 목록 API 를 커서로 훑습니다.
 * 목록은 id 내림차순이므로 페이지 마지막 id 가 찾는 id 보다 작아지면 더 볼 필요가 없습니다.
 * 최대 `maxPages` 쪽(기본 5 × 50건)까지만 봅니다. 못 찾으면 null.
 */
export async function findNotificationById(
  scope: NotificationScope,
  id: string,
  maxPages = 5
): Promise<AppNotification | null> {
  if (!/^\d+$/.test(id)) return null;
  const target = BigInt(id);
  let cursor: string | null = null;
  for (let i = 0; i < maxPages; i++) {
    const page: CursorPage<AppNotification> = await fetchNotifications(scope, cursor, 50);
    const hit = page.items.find((n) => n.id === id);
    if (hit) return hit;
    const last = page.items[page.items.length - 1];
    if (!page.nextCursor || !last || (/^\d+$/.test(last.id) && BigInt(last.id) < target)) return null;
    cursor = page.nextCursor;
  }
  return null;
}
