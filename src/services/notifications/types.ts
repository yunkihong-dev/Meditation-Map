/**
 * 알림 계약 타입 — `harness/runs/current/01_contract.md` 1~3절.
 * 모든 ID는 JSON에서 문자열이고, 시각은 ISO-8601 UTC 문자열(없으면 null)입니다.
 */
import { arr, bool, num, rec, str, strOrNull } from "@/services/http/apiError";

export type NotificationType =
  | "AD"
  | "PLACE_CLAIM_SUBMITTED"
  | "PLACE_CLAIM_APPROVED"
  | "PLACE_CLAIM_REJECTED"
  // 센터 1:1 문의(계약 부록 C7.2)
  | "CENTER_CHAT_MESSAGE"
  | "CENTER_CHAT_REPORTED"
  | "CENTER_CHAT_REPORT_RESOLVED";

export type NotificationRefType = "PLACE_CLAIM" | "BROADCAST" | "CENTER_CHAT" | "CENTER_CHAT_REPORT";

export interface AppNotification {
  id: string;
  /** 모르는 type 이 와도 일반 알림으로 그립니다(계약 1절). 그래서 string 까지 받습니다. */
  type: NotificationType | (string & {});
  title: string;
  body: string;
  linkUrl: string | null;
  refType: NotificationRefType | null;
  refId: string | null;
  read: boolean;
  readAt: string | null;
  createdAt: string;
}

export interface CursorPage<T> {
  items: T[];
  nextCursor: string | null;
}

/** 회원(`/me/...`)과 관리자(`/admin/...`)는 같은 shape을 접두만 달리해 씁니다. */
export type NotificationScope = "me" | "admin";

export interface ReadResult {
  id: string;
  read: boolean;
  unreadCount: number;
}

export interface ReadAllResult {
  updated: number;
  unreadCount: number;
}

export type BroadcastTarget = "ALL" | "EMAILS";

export interface BroadcastRequest {
  requestId: string;
  title: string;
  body: string;
  linkUrl: string | null;
  target: BroadcastTarget;
  emails?: string[];
}

export interface BroadcastResult {
  broadcastId: string;
  recipientCount: number;
  unknownEmails: string[];
}

export interface BroadcastHistoryItem {
  id: string;
  title: string;
  body: string;
  linkUrl: string | null;
  target: BroadcastTarget | (string & {});
  recipientCount: number;
  sentBy: { memberId: string; loginId: string } | null;
  createdAt: string;
}

const REF_TYPES = new Set<string>(["PLACE_CLAIM", "BROADCAST", "CENTER_CHAT", "CENTER_CHAT_REPORT"]);

/** 알림 1건. id 가 없으면 쓸 수 없는 값이라 null. */
export function parseNotification(raw: unknown): AppNotification | null {
  const o = rec(raw);
  const id = str(o.id);
  if (!id) return null;
  const refType = typeof o.refType === "string" && REF_TYPES.has(o.refType) ? (o.refType as NotificationRefType) : null;
  return {
    id,
    type: str(o.type, "UNKNOWN"),
    title: str(o.title),
    body: str(o.body),
    linkUrl: safeInternalLink(strOrNull(o.linkUrl)),
    refType,
    refId: strOrNull(o.refId),
    read: bool(o.read),
    readAt: strOrNull(o.readAt),
    createdAt: str(o.createdAt),
  };
}

export function parseNotificationPage(raw: unknown): CursorPage<AppNotification> {
  const o = rec(raw);
  const items = arr(o.items)
    .map(parseNotification)
    .filter((n): n is AppNotification => n !== null);
  return { items, nextCursor: strOrNull(o.nextCursor) };
}

export function parseUnreadCount(raw: unknown): number {
  return Math.max(0, num(rec(raw).unreadCount));
}

export function parseReadResult(raw: unknown): ReadResult {
  const o = rec(raw);
  return { id: str(o.id), read: bool(o.read, true), unreadCount: parseUnreadCount(o) };
}

export function parseReadAllResult(raw: unknown): ReadAllResult {
  const o = rec(raw);
  return { updated: num(o.updated), unreadCount: parseUnreadCount(o) };
}

export function parseBroadcastResult(raw: unknown): BroadcastResult {
  const o = rec(raw);
  return {
    broadcastId: str(o.broadcastId),
    recipientCount: num(o.recipientCount),
    unknownEmails: arr(o.unknownEmails).filter((e): e is string => typeof e === "string"),
  };
}

export function parseBroadcastPage(raw: unknown): CursorPage<BroadcastHistoryItem> {
  const o = rec(raw);
  const items = arr(o.items).map((it): BroadcastHistoryItem => {
    const b = rec(it);
    const sentByRaw = b.sentBy == null ? null : rec(b.sentBy);
    return {
      id: str(b.id),
      title: str(b.title),
      body: str(b.body),
      linkUrl: strOrNull(b.linkUrl),
      target: str(b.target),
      recipientCount: num(b.recipientCount),
      sentBy: sentByRaw ? { memberId: str(sentByRaw.memberId), loginId: str(sentByRaw.loginId) } : null,
      createdAt: str(b.createdAt),
    };
  });
  return { items, nextCursor: strOrNull(o.nextCursor) };
}

/**
 * 계약 0절 linkUrl 규칙 — BE `LinkUrlPolicy.isAllowed`(LinkUrlPolicy.java:16-34)와 같은 판정(QA Q4).
 * `/`로 시작, `//` 금지, 1~300자, 어디든 `http:`·`https:`·`\` 금지, 공백·제어문자 금지.
 */
export function isAllowedLinkUrl(link: string): boolean {
  if (link.length === 0 || link.length > 300) return false;
  if (!link.startsWith("/") || link.startsWith("//")) return false;
  const lower = link.toLowerCase();
  if (lower.includes("http:") || lower.includes("https:") || link.includes("\\")) return false;
  for (let i = 0; i < link.length; i++) {
    const c = link.charCodeAt(i);
    // Java Character.isISOControl(0x00-0x1F, 0x7F-0x9F) · isWhitespace 에 해당하는 문자
    if (c <= 0x1f || (c >= 0x7f && c <= 0x9f) || /\s/.test(link[i])) return false;
  }
  return true;
}

/** 받은 알림의 linkUrl 을 한 번 더 거릅니다. 규칙 밖이면 null(이동하지 않음). */
export function safeInternalLink(link: string | null): string | null {
  if (!link) return null;
  return isAllowedLinkUrl(link) ? link : null;
}

/** 관리자 발송 폼의 linkUrl 사전 검증. 비우면 링크 없음(null 로 보냄)이라 허용. */
export function isValidBroadcastLink(link: string): boolean {
  const t = link.trim();
  if (t === "") return true;
  return isAllowedLinkUrl(t);
}
