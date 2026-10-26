/**
 * 센터 1:1 문의 API — 계약 C2~C5. 고객(`/me/center-chats`)·오너(`/me/center-inbox`)·관리자 함수는
 * contract_scan 이 읽을 수 있도록 **각각 리터럴 경로**로 apiFetch 에 넘깁니다(QA Q1 관례).
 */
import { apiFetch } from "@/stores/authStore";
import { readJson } from "@/services/http/apiError";
import { getMeditationApiBaseUrl } from "@/services/meditation/repositories/apiConfig";
import type { CursorPage } from "@/services/notifications/types";
import {
  parseAdminMessagePage,
  parseAdminReportDetail,
  parseAdminReportSummary,
  parseAvailability,
  parseChatMessage,
  parseChatReport,
  parseChatThread,
  parseChatUnread,
  parseInboxSummary,
  parseMessagePage,
  parseReadResult,
  parseThreadPage,
  type AdminChatMessage,
  type AdminChatReportDetail,
  type AdminChatReportSummary,
  type ChatAvailability,
  type ChatMessage,
  type ChatReadResult,
  type ChatReport,
  type ChatReportReason,
  type ChatThread,
  type ChatUnreadCount,
  type ChatViewer,
  type InboxSummary,
} from "@/services/centerChat/types";
import { rec, arr, strOrNull } from "@/services/http/apiError";

const enc = encodeURIComponent;

function q(params: Record<string, string | null | undefined>): string {
  const u = new URLSearchParams();
  for (const [k, v] of Object.entries(params)) if (v != null && v !== "") u.set(k, v);
  const s = u.toString();
  return s ? `?${s}` : "";
}

/** 이미지·사진 상대 경로 → 실제 URL (쿠키 동반 <img>) */
export function chatImageHref(relativeUrl: string): string | null {
  const base = getMeditationApiBaseUrl();
  if (!base || !relativeUrl.startsWith("/") || relativeUrl.startsWith("//")) return null;
  return `${base}${relativeUrl}`;
}

// ── 공개 C2 ──
export async function fetchChatAvailability(placeId: string): Promise<ChatAvailability> {
  return parseAvailability(await readJson(await apiFetch(`/places/${enc(placeId)}/chat-availability`)));
}

// ── 고객 C3 ──
export async function startChat(placeId: string, programId: string | null): Promise<ChatThread> {
  const res = await apiFetch("/me/center-chats", {
    method: "POST",
    body: JSON.stringify({ placeId, programId }),
  });
  const t = parseChatThread(await readJson(res));
  if (!t) throw new Error("대화를 시작하지 못했어요.");
  return t;
}

export async function fetchUnreadChats(): Promise<ChatUnreadCount> {
  return parseChatUnread(await readJson(await apiFetch("/me/center-chats/unread-count")));
}

export async function fetchThreads(viewer: ChatViewer, opts: { cursor?: string | null; placeId?: string | null; unanswered?: boolean } = {}): Promise<CursorPage<ChatThread>> {
  // 쿼리는 변수로 빼 둡니다 — contract_scan 이 템플릿 안의 중첩 괄호를 경로로 읽지 못해서
  if (viewer === "customer") {
    const qs = q({ cursor: opts.cursor, size: "20" });
    return parseThreadPage(await readJson(await apiFetch(`/me/center-chats${qs}`)));
  }
  const qs = q({ placeId: opts.placeId, unanswered: opts.unanswered ? "true" : null, cursor: opts.cursor, size: "20" });
  return parseThreadPage(await readJson(await apiFetch(`/me/center-inbox${qs}`)));
}

export async function fetchThread(viewer: ChatViewer, threadId: string): Promise<ChatThread> {
  const res = viewer === "customer" ? await apiFetch(`/me/center-chats/${enc(threadId)}`) : await apiFetch(`/me/center-inbox/${enc(threadId)}`);
  const t = parseChatThread(await readJson(res));
  if (!t) throw new Error("대화를 불러오지 못했어요.");
  return t;
}

/** 과거 페이지(cursor) 또는 따라잡기(after) — 둘 중 하나만 */
export async function fetchMessages(
  viewer: ChatViewer,
  threadId: string,
  mode: { cursor?: string | null } | { after: string }
): Promise<CursorPage<ChatMessage>> {
  const query = "after" in mode ? q({ after: mode.after }) : q({ cursor: mode.cursor, size: "30" });
  const res =
    viewer === "customer"
      ? await apiFetch(`/me/center-chats/${enc(threadId)}/messages${query}`)
      : await apiFetch(`/me/center-inbox/${enc(threadId)}/messages${query}`);
  return parseMessagePage(await readJson(res));
}

export interface SendInput {
  clientMessageId: string;
  body: string;
  images: File[];
}

export function buildMessageForm(input: SendInput): FormData {
  const fd = new FormData();
  fd.append("clientMessageId", input.clientMessageId);
  const body = input.body.trim();
  if (body) fd.append("body", body);
  for (const f of input.images) fd.append("images", f, f.name);
  return fd;
}

/** 201 새 메시지 / 200 같은 clientMessageId 의 기존 메시지(멱등) — 둘 다 ChatMessage */
export async function sendMessage(viewer: ChatViewer, threadId: string, input: SendInput): Promise<ChatMessage> {
  const init = { method: "POST", body: buildMessageForm(input) };
  const res =
    viewer === "customer"
      ? await apiFetch(`/me/center-chats/${enc(threadId)}/messages`, init)
      : await apiFetch(`/me/center-inbox/${enc(threadId)}/messages`, init);
  const m = parseChatMessage(await readJson(res));
  if (!m) throw new Error("메시지를 보내지 못했어요.");
  return m;
}

export async function markThreadRead(viewer: ChatViewer, threadId: string, lastReadMessageId?: string | null): Promise<ChatReadResult> {
  const init = { method: "POST", body: JSON.stringify(lastReadMessageId ? { lastReadMessageId } : {}) };
  const res =
    viewer === "customer"
      ? await apiFetch(`/me/center-chats/${enc(threadId)}/read`, init)
      : await apiFetch(`/me/center-inbox/${enc(threadId)}/read`, init);
  return parseReadResult(await readJson(res));
}

export async function reportThread(viewer: ChatViewer, threadId: string, reason: ChatReportReason, detail: string): Promise<ChatReport> {
  const init = { method: "POST", body: JSON.stringify({ reason, detail: detail.trim() || null }) };
  const res =
    viewer === "customer"
      ? await apiFetch(`/me/center-chats/${enc(threadId)}/reports`, init)
      : await apiFetch(`/me/center-inbox/${enc(threadId)}/reports`, init);
  return parseChatReport(await readJson(res));
}

/**
 * DC5 본인 메시지 소프트 삭제 — 계약 부록에 경로가 아직 없다(BE 원문 대기).
 * 가정 경로 `DELETE /me/center-chats/{t}/messages/{m}`(오너는 center-inbox). BE 확정 시 이 함수만 맞춘다.
 */
export async function deleteMessage(viewer: ChatViewer, threadId: string, messageId: string): Promise<ChatMessage | null> {
  const res =
    viewer === "customer"
      ? await apiFetch(`/me/center-chats/${enc(threadId)}/messages/${enc(messageId)}`, { method: "DELETE" })
      : await apiFetch(`/me/center-inbox/${enc(threadId)}/messages/${enc(messageId)}`, { method: "DELETE" });
  const data = await readJson(res);
  return data === undefined ? null : parseChatMessage(data);
}

// ── 오너 C4.2 ──
export async function fetchInboxSummary(placeId?: string | null): Promise<InboxSummary> {
  const qs = q({ placeId });
  return parseInboxSummary(await readJson(await apiFetch(`/me/center-inbox/summary${qs}`)));
}

// ── 관리자 C5 ──
export async function fetchAdminChatReports(status: string, cursor?: string | null): Promise<CursorPage<AdminChatReportSummary>> {
  const qs = q({ status, cursor, size: "20" });
  const o = rec(await readJson(await apiFetch(`/admin/center-chat-reports${qs}`)));
  return { items: arr(o.items).map(parseAdminReportSummary), nextCursor: strOrNull(o.nextCursor) };
}

export async function fetchAdminChatReport(reportId: string): Promise<AdminChatReportDetail> {
  return parseAdminReportDetail(await readJson(await apiFetch(`/admin/center-chat-reports/${enc(reportId)}`)));
}

export async function resolveAdminChatReport(reportId: string, action: "BLOCK_THREAD" | "DISMISS", note: string): Promise<AdminChatReportDetail> {
  const res = await apiFetch(`/admin/center-chat-reports/${enc(reportId)}/resolve`, {
    method: "POST",
    body: JSON.stringify({ action, note: note.trim() || null }),
  });
  return parseAdminReportDetail(await readJson(res));
}

export async function fetchAdminChatMessages(threadId: string, cursor?: string | null): Promise<CursorPage<AdminChatMessage>> {
  const qs = q({ cursor, size: "50" });
  return parseAdminMessagePage(await readJson(await apiFetch(`/admin/center-chats/${enc(threadId)}/messages${qs}`)));
}

