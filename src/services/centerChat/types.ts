/**
 * 센터 1:1 문의(고객 ↔ 센터 오너 채팅) 타입 — `harness/runs/current/01_contract_chat.md` C1·C3~C5·C7.
 * 응답은 `as` 로 캐스팅하지 않고 키마다 기본값을 주는 파서로 읽습니다(apiError 도우미).
 * DC5(본인 메시지 소프트 삭제, BE C9): 메시지 `deleted`, `lastMessage.deleted`, 관리자 메시지 `deleted`·`deletedAt`,
 * SSE `chat-message-deleted` — BE 원문(`ChatViews.java`·`ChatRealtimeListener.java`) 기준. 없으면 false/null.
 */
import { arr, bool, num, rec, str, strOrNull } from "@/services/http/apiError";
import type { CursorPage } from "@/services/notifications/types";

export type ChatSenderRole = "CUSTOMER" | "OWNER";
export type ChatThreadStatus = "OPEN" | "BLOCKED";
export type ChatViewer = "customer" | "owner";

export interface ChatImage {
  url: string;
  contentType: string;
  sizeBytes: number;
}

export interface ChatMessage {
  id: string;
  threadId: string;
  senderRole: ChatSenderRole;
  mine: boolean;
  body: string | null;
  images: ChatImage[];
  clientMessageId: string | null;
  createdAt: string;
  /** DC5 — 당사자 화면에는 '삭제된 메시지' 말풍선(BE: body null·images []). 없으면 false */
  deleted: boolean;
  /** 당사자 응답에는 없다(관리자 응답에만). 로컬 삭제 시각을 담아 둘 뿐 */
  deletedAt: string | null;
  /**
   * 계약 C15 — 지금 보는 회원이 이 메시지를 지울 수 있는가(역할 일치 && 보낸 회원 == 보는 회원 && !deleted).
   * 오너 이관 뒤 이전 오너 메시지는 mine:true 여도 false(QA R2-2). BE 가 안 보내면 mine && !deleted 로 폴백
   */
  deletable: boolean;
}

export interface ChatLastMessage {
  id: string;
  senderRole: ChatSenderRole;
  preview: string | null;
  imageCount: number;
  /** C9 — 마지막 메시지가 삭제됐으면 true(preview null·imageCount 0) */
  deleted: boolean;
  createdAt: string;
}

export interface ChatThread {
  id: string;
  place: { id: string; name: string | null; thumbnailUrl: string | null };
  program: { id: string; title: string | null } | null;
  customer: { displayName: string };
  status: ChatThreadStatus | (string & {});
  lastMessage: ChatLastMessage | null;
  unreadCount: number;
  unanswered: boolean;
  myLastReadMessageId: string | null;
  counterpartLastReadMessageId: string | null;
  createdAt: string;
}

export type ChatReportReason = "SPAM" | "ABUSE" | "FRAUD" | "INAPPROPRIATE_IMAGE" | "PRIVACY" | "OTHER";
export type ChatReportStatus = "PENDING" | "RESOLVED" | "DISMISSED";

export const CHAT_REPORT_REASONS: { value: ChatReportReason; label: string }[] = [
  { value: "SPAM", label: "스팸·광고" },
  { value: "ABUSE", label: "욕설·괴롭힘" },
  { value: "FRAUD", label: "사기·거래 유도" },
  { value: "INAPPROPRIATE_IMAGE", label: "부적절한 사진" },
  { value: "PRIVACY", label: "개인정보 노출" },
  { value: "OTHER", label: "기타" },
];

export function reportReasonLabel(r: string): string {
  return CHAT_REPORT_REASONS.find((x) => x.value === r)?.label ?? r;
}

export interface ChatReport {
  id: string;
  threadId: string;
  reason: ChatReportReason | (string & {});
  detail: string | null;
  status: ChatReportStatus | (string & {});
  createdAt: string;
}

export interface ChatAvailability {
  placeId: string;
  available: boolean;
  /** C16 — 판정 순서 NO_OWNER → HIDDEN → KAKAO. null 이면 채팅 가능 */
  reason: "NO_OWNER" | "HIDDEN" | "KAKAO" | (string & {}) | null;
  /** C16 — 오너가 고른 문의 방식(null 없음, 없으면 CHAT) */
  mode: "CHAT" | "KAKAO";
  /** C16 — reason 이 KAKAO 일 때만 값 */
  kakaoType: "OPEN_CHAT" | "CHANNEL" | null;
  kakaoUrl: string | null;
}

export interface ChatUnreadCount {
  unreadThreadCount: number;
  unreadMessageCount: number;
}

export interface InboxSummary {
  placeId: string | null;
  unansweredCount: number;
  unreadThreadCount: number;
  unreadMessageCount: number;
}

export interface ChatReadResult {
  threadId: string;
  lastReadMessageId: string | null;
  unreadCount: number;
}

// ── 관리자 ──
export interface AdminMemberRef {
  memberId: string;
  email: string;
}

export interface AdminChatReportSummary {
  id: string;
  thread: { id: string; placeId: string; placeName: string | null; status: string };
  reporter: AdminMemberRef & { role: string };
  reason: string;
  status: string;
  createdAt: string;
  resolvedAt: string | null;
}

/** 상세에는 최상위 resolvedAt 이 없다(BE ChatViews.AdminReportDetail, 계약 C5.2) — 처리 시각은 resolution.resolvedAt (QA R2-4) */
export interface AdminChatReportDetail extends Omit<AdminChatReportSummary, "resolvedAt"> {
  thread: AdminChatReportSummary["thread"] & { program: { id: string; title: string | null } | null; createdAt: string };
  customer: AdminMemberRef & { displayName: string };
  currentOwner: AdminMemberRef | null;
  detail: string | null;
  reportedUpToMessageId: string | null;
  resolution: {
    action: "BLOCK_THREAD" | "DISMISS" | (string & {});
    note: string | null;
    resolvedBy: { memberId: string; loginId: string } | null;
    resolvedAt: string | null;
  } | null;
  otherReportCount: number;
}

export interface AdminChatMessage {
  id: string;
  threadId: string;
  senderRole: ChatSenderRole;
  sender: AdminMemberRef | null;
  body: string | null;
  images: ChatImage[];
  createdAt: string;
  /** DC5 — 관리자는 삭제된 메시지의 원문과 '삭제됨' 표시를 함께 본다 */
  deleted: boolean;
  deletedAt: string | null;
}

// ── 파서 ──

function role(v: unknown): ChatSenderRole {
  return v === "OWNER" ? "OWNER" : "CUSTOMER";
}

function images(v: unknown): ChatImage[] {
  return arr(v)
    .map((it) => {
      const o = rec(it);
      return { url: str(o.url), contentType: str(o.contentType), sizeBytes: num(o.sizeBytes) };
    })
    .filter((i) => i.url.startsWith("/") && !i.url.startsWith("//"));
}

export function parseChatMessage(raw: unknown): ChatMessage | null {
  const o = rec(raw);
  const id = str(o.id);
  if (!id) return null;
  const mine = bool(o.mine);
  const deleted = bool(o.deleted) || o.deletedAt != null;
  return {
    id,
    threadId: str(o.threadId),
    senderRole: role(o.senderRole),
    mine,
    body: strOrNull(o.body),
    images: images(o.images),
    clientMessageId: strOrNull(o.clientMessageId),
    createdAt: str(o.createdAt),
    deleted,
    deletedAt: strOrNull(o.deletedAt),
    deletable: typeof o.deletable === "boolean" ? o.deletable && !deleted : mine && !deleted,
  };
}

function lastMessage(v: unknown): ChatLastMessage | null {
  if (v == null) return null;
  const o = rec(v);
  const id = str(o.id);
  if (!id) return null;
  return {
    id,
    senderRole: role(o.senderRole),
    preview: strOrNull(o.preview),
    imageCount: num(o.imageCount),
    deleted: bool(o.deleted),
    createdAt: str(o.createdAt),
  };
}

export function parseChatThread(raw: unknown): ChatThread | null {
  const o = rec(raw);
  const id = str(o.id);
  if (!id) return null;
  const place = rec(o.place);
  const program = o.program == null ? null : rec(o.program);
  return {
    id,
    place: { id: str(place.id), name: strOrNull(place.name), thumbnailUrl: strOrNull(place.thumbnailUrl) },
    program: program ? { id: str(program.id), title: strOrNull(program.title) } : null,
    customer: { displayName: str(rec(o.customer).displayName, "회원") },
    status: str(o.status, "OPEN"),
    lastMessage: lastMessage(o.lastMessage),
    unreadCount: Math.max(0, num(o.unreadCount)),
    unanswered: bool(o.unanswered),
    myLastReadMessageId: strOrNull(o.myLastReadMessageId),
    counterpartLastReadMessageId: strOrNull(o.counterpartLastReadMessageId),
    createdAt: str(o.createdAt),
  };
}

export function parseThreadPage(raw: unknown): CursorPage<ChatThread> {
  const o = rec(raw);
  return {
    items: arr(o.items)
      .map(parseChatThread)
      .filter((t): t is ChatThread => t !== null),
    nextCursor: strOrNull(o.nextCursor),
  };
}

export function parseMessagePage(raw: unknown): CursorPage<ChatMessage> {
  const o = rec(raw);
  return {
    items: arr(o.items)
      .map(parseChatMessage)
      .filter((m): m is ChatMessage => m !== null),
    nextCursor: strOrNull(o.nextCursor),
  };
}

export function parseAvailability(raw: unknown): ChatAvailability {
  const o = rec(raw);
  const kt = o.kakaoType === "OPEN_CHAT" || o.kakaoType === "CHANNEL" ? o.kakaoType : null;
  return {
    placeId: str(o.placeId),
    available: bool(o.available),
    reason: strOrNull(o.reason),
    mode: o.mode === "KAKAO" ? "KAKAO" : "CHAT",
    kakaoType: kt,
    kakaoUrl: strOrNull(o.kakaoUrl),
  };
}

export function parseChatUnread(raw: unknown): ChatUnreadCount {
  const o = rec(raw);
  return { unreadThreadCount: num(o.unreadThreadCount), unreadMessageCount: num(o.unreadMessageCount) };
}

export function parseInboxSummary(raw: unknown): InboxSummary {
  const o = rec(raw);
  return {
    placeId: strOrNull(o.placeId),
    unansweredCount: Math.max(0, num(o.unansweredCount)),
    unreadThreadCount: Math.max(0, num(o.unreadThreadCount)),
    unreadMessageCount: Math.max(0, num(o.unreadMessageCount)),
  };
}

export function parseReadResult(raw: unknown): ChatReadResult {
  const o = rec(raw);
  return { threadId: str(o.threadId), lastReadMessageId: strOrNull(o.lastReadMessageId), unreadCount: num(o.unreadCount) };
}

export function parseChatReport(raw: unknown): ChatReport {
  const o = rec(raw);
  return {
    id: str(o.id),
    threadId: str(o.threadId),
    reason: str(o.reason),
    detail: strOrNull(o.detail),
    status: str(o.status, "PENDING"),
    createdAt: str(o.createdAt),
  };
}

function memberRef(v: unknown): AdminMemberRef {
  const o = rec(v);
  return { memberId: str(o.memberId), email: str(o.email) };
}

export function parseAdminReportSummary(raw: unknown): AdminChatReportSummary {
  const o = rec(raw);
  const t = rec(o.thread);
  const rp = rec(o.reporter);
  return {
    id: str(o.id),
    thread: { id: str(t.id), placeId: str(t.placeId), placeName: strOrNull(t.placeName), status: str(t.status, "OPEN") },
    reporter: { ...memberRef(rp), role: str(rp.role) },
    reason: str(o.reason),
    status: str(o.status, "PENDING"),
    createdAt: str(o.createdAt),
    resolvedAt: strOrNull(o.resolvedAt),
  };
}

export function parseAdminReportDetail(raw: unknown): AdminChatReportDetail {
  const o = rec(raw);
  const { resolvedAt: _summaryOnly, ...base } = parseAdminReportSummary(raw);
  void _summaryOnly;
  const t = rec(o.thread);
  const prog = t.program == null ? null : rec(t.program);
  const cust = rec(o.customer);
  const res = o.resolution == null ? null : rec(o.resolution);
  const by = res && res.resolvedBy != null ? rec(res.resolvedBy) : null;
  return {
    ...base,
    thread: {
      ...base.thread,
      program: prog ? { id: str(prog.id), title: strOrNull(prog.title) } : null,
      createdAt: str(t.createdAt),
    },
    customer: { ...memberRef(cust), displayName: str(cust.displayName, "회원") },
    currentOwner: o.currentOwner == null ? null : memberRef(o.currentOwner),
    detail: strOrNull(o.detail),
    reportedUpToMessageId: strOrNull(o.reportedUpToMessageId),
    resolution: res
      ? {
          action: str(res.action),
          note: strOrNull(res.note),
          resolvedBy: by ? { memberId: str(by.memberId), loginId: str(by.loginId) } : null,
          resolvedAt: strOrNull(res.resolvedAt),
        }
      : null,
    otherReportCount: num(o.otherReportCount),
  };
}

export function parseAdminMessagePage(raw: unknown): CursorPage<AdminChatMessage> {
  const o = rec(raw);
  return {
    items: arr(o.items)
      .map((it): AdminChatMessage | null => {
        const m = rec(it);
        const id = str(m.id);
        if (!id) return null;
        return {
          id,
          threadId: str(m.threadId),
          senderRole: role(m.senderRole),
          sender: m.sender == null ? null : memberRef(m.sender),
          body: strOrNull(m.body),
          images: images(m.images),
          createdAt: str(m.createdAt),
          deleted: bool(m.deleted) || m.deletedAt != null,
          deletedAt: strOrNull(m.deletedAt),
        };
      })
      .filter((m): m is AdminChatMessage => m !== null),
    nextCursor: strOrNull(o.nextCursor),
  };
}

// ── SSE 이벤트(C7.1) ──

export interface ChatMessageEvent {
  threadId: string;
  viewerRole: ChatSenderRole;
  message: ChatMessage;
  thread: { lastMessageId: string | null; unreadCount: number; unanswered: boolean; status: string };
}

export function parseChatMessageEvent(raw: unknown): ChatMessageEvent | null {
  const o = rec(raw);
  const message = parseChatMessage(o.message);
  const threadId = str(o.threadId) || message?.threadId || "";
  if (!message || !threadId) return null;
  const t = rec(o.thread);
  return {
    threadId,
    viewerRole: role(o.viewerRole),
    message: { ...message, threadId },
    thread: {
      lastMessageId: strOrNull(t.lastMessageId),
      unreadCount: Math.max(0, num(t.unreadCount)),
      unanswered: bool(t.unanswered),
      status: str(t.status, "OPEN"),
    },
  };
}

export interface ChatReadEvent {
  threadId: string;
  readerRole: ChatSenderRole;
  lastReadMessageId: string | null;
}

export function parseChatReadEvent(raw: unknown): ChatReadEvent | null {
  const o = rec(raw);
  const threadId = str(o.threadId);
  if (!threadId) return null;
  return { threadId, readerRole: role(o.readerRole), lastReadMessageId: strOrNull(o.lastReadMessageId) };
}

export interface ChatThreadEvent {
  threadId: string;
  status: string;
}

export function parseChatThreadEvent(raw: unknown): ChatThreadEvent | null {
  const o = rec(raw);
  const threadId = str(o.threadId);
  if (!threadId) return null;
  return { threadId, status: str(o.status, "OPEN") };
}

/** DC5 삭제 이벤트 `chat-message-deleted` — BE `ChatRealtimeListener.DeletedEvent`
 * `{threadId, viewerRole, messageId, thread:{lastMessageId, unreadCount, unanswered, status}}` */
export interface ChatDeletedEvent {
  threadId: string;
  viewerRole: ChatSenderRole;
  messageId: string;
  thread: { lastMessageId: string | null; unreadCount: number; unanswered: boolean; status: string } | null;
}

export function parseChatDeletedEvent(raw: unknown): ChatDeletedEvent | null {
  const o = rec(raw);
  const threadId = str(o.threadId);
  const messageId = str(o.messageId);
  if (!threadId || !messageId) return null;
  const t = o.thread == null ? null : rec(o.thread);
  return {
    threadId,
    viewerRole: role(o.viewerRole),
    messageId,
    thread: t
      ? {
          lastMessageId: strOrNull(t.lastMessageId),
          unreadCount: Math.max(0, num(t.unreadCount)),
          unanswered: bool(t.unanswered),
          status: str(t.status, "OPEN"),
        }
      : null,
  };
}

/** 신규 오류 코드(C9) → 문구 */
export function chatErrorMessage(code: string | null, fallback: string): string {
  switch (code) {
    case "CENTER_CHAT_UNAVAILABLE":
      return "지금은 이 센터에 문의할 수 없어요.";
    case "CENTER_CHAT_SELF_INQUIRY":
      return "내 센터에는 문의할 수 없어요.";
    case "CENTER_CHAT_PROGRAM_NOT_FOUND":
      return "선택한 프로그램을 찾을 수 없어요.";
    case "CENTER_CHAT_BLOCKED":
      return "운영 정책에 따라 이 대화는 더 이상 이용할 수 없어요.";
    case "CENTER_CHAT_IMAGE_TYPE_NOT_ALLOWED":
      return "사진은 JPG·PNG·WEBP만 보낼 수 있어요.";
    case "CENTER_CHAT_REPORT_ALREADY_PENDING":
      return "이 대화에 대한 신고가 이미 접수되어 검토 중이에요.";
    case "CENTER_CHAT_REPORT_ALREADY_RESOLVED":
      return "이미 처리된 신고예요.";
    case "UPLOAD_TOO_LARGE":
      return "사진은 한 장에 10MB, 합계 25MB까지 보낼 수 있어요.";
    case "FILE_STORAGE_DISABLED":
      return "지금은 사진을 보낼 수 없어요.";
    case "UNAUTHORIZED":
      return "로그인이 필요해요. 다시 로그인해 주세요.";
    case "FORBIDDEN":
      return "내가 보낸 메시지만 삭제할 수 있어요.";
    case "RESOURCE_NOT_FOUND":
      return "더 이상 볼 수 없는 대화예요.";
    default:
      return fallback;
  }
}

// ── 사진 첨부 규칙(C3.6) ──
export const CHAT_MAX_IMAGES = 3;
export const CHAT_IMAGE_MAX_BYTES = 10 * 1024 * 1024;
export const CHAT_IMAGES_TOTAL_MAX_BYTES = 25 * 1024 * 1024;
export const CHAT_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"] as const;
export const CHAT_BODY_MAX = 2000;

/** 첨부 후보 검사 — HEIC 는 서버가 받지 않아 여기서 거릅니다 */
export function validateChatImages(current: { size: number }[], incoming: { type: string; size: number; name: string }[]): string | null {
  if (current.length + incoming.length > CHAT_MAX_IMAGES) return `사진은 한 번에 ${CHAT_MAX_IMAGES}장까지 보낼 수 있어요.`;
  for (const f of incoming) {
    if (!(CHAT_IMAGE_TYPES as readonly string[]).includes(f.type)) return "사진은 JPG·PNG·WEBP만 보낼 수 있어요.";
    if (f.size > CHAT_IMAGE_MAX_BYTES) return "사진은 한 장에 10MB까지 보낼 수 있어요.";
  }
  const total = [...current, ...incoming].reduce((s, f) => s + f.size, 0);
  if (total > CHAT_IMAGES_TOTAL_MAX_BYTES) return "사진은 합계 25MB까지 보낼 수 있어요.";
  return null;
}
