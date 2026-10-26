import { useEffect, useLayoutEffect, useMemo, useRef, useState, type ReactNode } from "react";
import styled, { css } from "styled-components";
import Icon from "@/components/common/Icon";
import { C, TY, a, inputPc4, shadowMd, tColors, tProp, PRIMARY_RGB } from "@/components/centerManagement/cmKit";
import { chatImageHref } from "@/services/centerChat/repositories/centerChatRepository";
import {
  CHAT_BODY_MAX,
  CHAT_MAX_IMAGES,
  CHAT_REPORT_REASONS,
  chatErrorMessage,
  validateChatImages,
  type ChatMessage,
  type ChatReportReason,
  type ChatViewer,
} from "@/services/centerChat/types";
import { downscaleImage } from "@/services/centerChat/imageResize";
import { reportThread } from "@/services/centerChat/repositories/centerChatRepository";
import { formatDate } from "@/services/notifications/format";
import { ApiError } from "@/services/http/apiError";
import { isUnreadByCounterpart, keyOf, useCenterChatStore, type PendingMessage } from "@/stores/centerChatStore";
import { toast } from "@/stores/toastStore";

/*
 * 고객 채팅(/profile/center-chats/:threadId)과 오너 문의함 오른쪽 패널이 함께 쓰는 대화 화면.
 * 목업이 없어 센터 관리 화면 언어(cmKit — pc_4 카드·입력·버튼, 24px/12px 라운드, 소프트 그림자)로 그립니다.
 * - 말풍선: 내 것 오른쪽 primary, 상대 왼쪽 흰 카드. 날짜 구분선. 내 메시지 중 상대가 안 읽은 것에 "1"
 * - 사진 1~3장 그리드(누르면 크게), 대기 중(전송 중·실패) 말풍선과 '다시 보내기'(같은 clientMessageId)
 * - 내 메시지 삭제(DC5): hover 메뉴(PC)·길게 누르기(모바일) → 확인 후 소프트 삭제 → '삭제된 메시지' 말풍선
 * - BLOCKED 면 입력창 대신 안내. 위로 끝까지 올리면 이전 메시지
 */

const Root = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 0;
  height: 100%;
  background: ${C.surface};
`;

const List = styled.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 16px 16px 8px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const DateSep = styled.div`
  align-self: center;
  margin: 12px 0 6px;
  padding: 4px 12px;
  border-radius: 9999px;
  background: ${a(C.surfaceVariant, 0.5)};
  ${TY.xs};
  color: ${C.onSurfaceVariant};
`;

const Row = styled.div<{ $mine: boolean }>`
  display: flex;
  justify-content: ${({ $mine }) => ($mine ? "flex-end" : "flex-start")};
  align-items: flex-end;
  gap: 6px;
  position: relative;

  .meta {
    display: flex;
    flex-direction: column;
    align-items: ${({ $mine }) => ($mine ? "flex-end" : "flex-start")};
    gap: 2px;
    ${TY.xs};
    color: ${C.outline};
    white-space: nowrap;
    order: ${({ $mine }) => ($mine ? 0 : 2)};
  }

  .unread {
    color: ${C.primary};
    font-weight: 700;
  }

  .more {
    order: ${({ $mine }) => ($mine ? -1 : 3)};
    opacity: 0;
    border: 0;
    padding: 4px;
    border-radius: 9999px;
    background: transparent;
    color: ${C.onSurfaceVariant};
    cursor: pointer;
    ${tProp("opacity")};

    &:hover {
      background: ${a(C.primary, 0.05)};
    }

    &:focus-visible {
      opacity: 1;
    }
  }

  &:hover .more {
    opacity: 1;
  }
`;

const Bubble = styled.div<{ $mine: boolean; $deleted?: boolean; $pending?: boolean }>`
  order: 1;
  max-width: min(75%, 520px);
  padding: 10px 14px;
  border-radius: 16px;
  ${TY.bodyMd};
  font-size: 15px;
  line-height: 1.5;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
  ${({ $mine }) =>
    $mine
      ? css`
          background: ${C.primary};
          color: ${C.onPrimary};
          border-bottom-right-radius: 4px;
        `
      : css`
          background: ${C.surfaceContainerLowest};
          color: ${C.onSurface};
          border: 1px solid ${a(C.outlineVariant, 0.3)};
          border-bottom-left-radius: 4px;
          box-shadow: 0 8px 30px rgba(107, 70, 193, 0.04);
        `}
  ${({ $deleted }) =>
    $deleted &&
    css`
      background: transparent;
      color: ${C.outline};
      border: 1px dashed ${C.outlineVariant};
      font-style: italic;
    `}
  ${({ $pending }) =>
    $pending &&
    css`
      opacity: 0.7;
    `}
`;

const Imgs = styled.div<{ $n: number }>`
  display: grid;
  grid-template-columns: repeat(${({ $n }) => Math.min($n, 3)}, minmax(0, 1fr));
  gap: 4px;
  margin-bottom: 6px;
  min-width: ${({ $n }) => ($n > 1 ? "220px" : "160px")};

  button {
    border: 0;
    padding: 0;
    background: none;
    cursor: zoom-in;
  }

  img {
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: 12px;
    display: block;
  }
`;

const Menu = styled.div<{ $mine: boolean }>`
  position: absolute;
  bottom: 100%;
  ${({ $mine }) => ($mine ? "right: 0;" : "left: 0;")}
  z-index: 20;
  margin-bottom: 4px;
  min-width: 140px;
  padding: 6px;
  border-radius: 12px;
  background: ${C.surfaceContainerLowest};
  border: 1px solid ${a(C.outlineVariant, 0.3)};
  box-shadow: ${shadowMd()};

  button {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 10px;
    border: 0;
    border-radius: 8px;
    background: transparent;
    ${TY.labelMd};
    color: ${C.error};
    cursor: pointer;
    ${tColors()};

    &:hover {
      background: ${C.errorContainer};
    }
  }
`;

const FailLine = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
  ${TY.xs};
  color: ${C.error};

  button {
    border: 0;
    background: none;
    padding: 0;
    ${TY.xs};
    font-weight: 700;
    color: ${C.primary};
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Older = styled.button`
  align-self: center;
  border: 0;
  padding: 6px 14px;
  border-radius: 9999px;
  background: ${C.secondaryContainer};
  color: ${C.onSecondaryContainer};
  ${TY.labelMd};
  cursor: pointer;
  ${tColors()};

  &:hover {
    background: ${C.surfaceContainerHighest};
  }
`;

/** pc_4 고정 저장 바 언어: bg-surface/80 backdrop-blur-md border-t border-outline-variant/30 */
const Composer = styled.form`
  flex-shrink: 0;
  padding: 12px 16px calc(12px + env(safe-area-inset-bottom, 0px));
  background: ${a(C.surface, 0.8)};
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-top: 1px solid ${a(C.outlineVariant, 0.3)};

  .row {
    display: flex;
    align-items: flex-end;
    gap: 8px;
  }

  textarea {
    ${inputPc4};
    flex: 1;
    min-height: 44px;
    max-height: 140px;
    resize: none;
    font-family: inherit;
    padding: 10px 14px;
  }

  .previews {
    display: flex;
    gap: 8px;
    margin-bottom: 8px;
  }

  .thumb {
    position: relative;
    width: 64px;
    height: 64px;
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid ${C.outlineVariant};

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    button {
      position: absolute;
      top: 4px;
      right: 4px;
      width: 22px;
      height: 22px;
      border: 0;
      border-radius: 9999px;
      background: ${a(C.surface, 0.8)};
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      ${tColors()};

      &:hover {
        background: ${C.error};
        color: ${C.onError};
      }
    }
  }

  .hint {
    margin: 6px 0 0;
    ${TY.xs};
    color: ${C.error};
  }
`;

/** tw(pc_4 주소 찾기): bg-secondary-container rounded-xl hover:bg-surface-container-highest transition-colors */
const IconBtn = styled.button`
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  border: 0;
  border-radius: 12px;
  background: ${C.secondaryContainer};
  color: ${C.onSecondaryContainer};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  ${tColors()};

  &:hover:not(:disabled) {
    background: ${C.surfaceContainerHighest};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

/** tw(pc_4 저장): rounded-xl bg-primary shadow-md shadow-primary/20 hover:opacity-90 transition-opacity */
const SendBtn = styled(IconBtn)`
  background: ${C.primary};
  color: ${C.onPrimary};
  box-shadow: ${shadowMd(PRIMARY_RGB, 0.2)};
  ${tProp("opacity")};

  &:hover:not(:disabled) {
    background: ${C.primary};
    opacity: 0.9;
  }
`;

const Blocked = styled.div`
  flex-shrink: 0;
  padding: 16px;
  text-align: center;
  background: ${C.surfaceContainerLow};
  border-top: 1px solid ${a(C.outlineVariant, 0.3)};
  ${TY.sm};
  color: ${C.onSurfaceVariant};
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 900;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background: rgba(24, 28, 30, 0.6);
`;

const Lightbox = styled(Overlay)`
  cursor: zoom-out;

  img {
    max-width: min(92vw, 1200px);
    max-height: 88vh;
    border-radius: 12px;
    object-fit: contain;
  }
`;

/** 신고·삭제 확인 — pc_4 카드 언어 */
const Dialog = styled.div`
  width: min(420px, 100%);
  background: ${C.surfaceContainerLowest};
  border-radius: 24px;
  border: 1px solid ${a(C.outlineVariant, 0.3)};
  box-shadow: 0px 30px 60px -15px rgba(107, 70, 193, 0.12);
  padding: 24px;

  h3 {
    margin: 0 0 8px;
    ${TY.headlineMd};
    font-size: 20px;
  }

  p {
    margin: 0 0 16px;
    ${TY.sm};
    color: ${C.onSurfaceVariant};
  }

  select,
  textarea {
    ${inputPc4};
    font-family: inherit;
    margin-bottom: 12px;
  }

  textarea {
    min-height: 96px;
    resize: vertical;
  }

  .actions {
    display: flex;
    justify-content: flex-end;
    gap: 8px;
  }
`;

const DialogBtn = styled.button<{ $primary?: boolean; $danger?: boolean }>`
  padding: 10px 20px;
  border: 0;
  border-radius: 12px;
  ${TY.labelMd};
  cursor: pointer;
  ${tColors()};
  ${({ $primary, $danger }) =>
    $danger
      ? css`
          background: ${C.error};
          color: ${C.onError};

          &:hover:not(:disabled) {
            background: ${a(C.error, 0.9)};
          }
        `
      : $primary
        ? css`
            background: ${C.primary};
            color: ${C.onPrimary};
            box-shadow: ${shadowMd(PRIMARY_RGB, 0.2)};

            &:hover:not(:disabled) {
              background: ${a(C.primary, 0.9)};
            }
          `
        : css`
            background: ${C.secondaryContainer};
            color: ${C.onSecondaryContainer};

            &:hover:not(:disabled) {
              background: ${C.surfaceContainerHighest};
            }
          `}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

function timeOf(iso: string): string {
  const t = Date.parse(iso);
  if (Number.isNaN(t)) return "";
  const d = new Date(t + 9 * 3600 * 1000);
  const h = d.getUTCHours();
  const m = String(d.getUTCMinutes()).padStart(2, "0");
  return `${h < 12 ? "오전" : "오후"} ${h % 12 === 0 ? 12 : h % 12}:${m}`;
}

const EMPTY: ChatMessage[] = [];
const EMPTY_P: PendingMessage[] = [];

interface Props {
  viewer: ChatViewer;
  threadId: string;
  /** 헤더(고객 화면 상단·오너 패널 상단) */
  header?: ReactNode;
  /** 신고 메뉴를 열고 싶을 때 바깥에서 true */
  reportOpen?: boolean;
  onReportClose?: () => void;
}

export default function ChatRoom({ viewer, threadId, header, reportOpen = false, onReportClose }: Props) {
  const key = keyOf(viewer, threadId);
  const thread = useCenterChatStore((s) => s.threads[key]);
  const messages = useCenterChatStore((s) => s.messages[key] ?? EMPTY);
  const pending = useCenterChatStore((s) => s.pending[key] ?? EMPTY_P);
  const hasOlder = useCenterChatStore((s) => !!s.olderCursor[key]);
  const [body, setBody] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [fileError, setFileError] = useState<string | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [menuFor, setMenuFor] = useState<string | null>(null);
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null);
  const [reason, setReason] = useState<ChatReportReason>("SPAM");
  const [detail, setDetail] = useState("");
  const [reporting, setReporting] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const pressTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const stickBottom = useRef(true);

  const blocked = thread?.status === "BLOCKED";
  const filePreviews = useMemo(
    () => files.map((f) => (typeof URL !== "undefined" && typeof URL.createObjectURL === "function" ? URL.createObjectURL(f) : "")),
    [files]
  );
  useEffect(
    () => () => {
      filePreviews.forEach((u) => u && URL.revokeObjectURL?.(u));
    },
    [filePreviews]
  );

  // 새 메시지가 붙으면 바닥에 붙어 있을 때만 아래로
  useLayoutEffect(() => {
    const el = listRef.current;
    if (el && stickBottom.current) el.scrollTop = el.scrollHeight;
  }, [messages.length, pending.length]);

  useEffect(() => {
    if (!menuFor) return;
    const close = () => setMenuFor(null);
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [menuFor]);

  const onScroll = () => {
    const el = listRef.current;
    if (!el) return;
    stickBottom.current = el.scrollHeight - el.scrollTop - el.clientHeight < 40;
    if (el.scrollTop < 24 && hasOlder) {
      const before = el.scrollHeight;
      void useCenterChatStore
        .getState()
        .loadOlder(viewer, threadId)
        .then(() => {
          // 위에 붙은 만큼 내려 같은 자리를 유지
          if (listRef.current) listRef.current.scrollTop = listRef.current.scrollHeight - before;
        })
        .catch(() => undefined);
    }
  };

  const pickFiles = async (list: FileList | null) => {
    if (!list || list.length === 0) return;
    const incoming = Array.from(list);
    const err = validateChatImages(files, incoming);
    setFileError(err);
    if (err) return;
    const resized = await Promise.all(incoming.map(downscaleImage));
    setFiles((prev) => [...prev, ...resized].slice(0, CHAT_MAX_IMAGES));
  };

  const submit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    const text = body.trim();
    if ((!text && files.length === 0) || blocked) return;
    const toSend = files;
    setBody("");
    setFiles([]);
    setFileError(null);
    if (fileRef.current) fileRef.current.value = "";
    stickBottom.current = true;
    await useCenterChatStore.getState().send(viewer, threadId, text, toSend);
  };

  const doDelete = async (messageId: string) => {
    setConfirmDelete(null);
    try {
      await useCenterChatStore.getState().deleteMine(viewer, threadId, messageId);
    } catch (e) {
      toast.error(chatErrorMessage(e instanceof ApiError ? e.code : null, "메시지를 삭제하지 못했어요."));
    }
  };

  const submitReport = async () => {
    setReporting(true);
    try {
      await reportThread(viewer, threadId, reason, detail);
      toast.success("신고가 접수되었어요. 운영팀이 확인할게요.");
      setDetail("");
      onReportClose?.();
    } catch (e) {
      toast.error(chatErrorMessage(e instanceof ApiError ? e.code : null, "신고하지 못했어요."));
    } finally {
      setReporting(false);
    }
  };

  const startPress = (id: string) => {
    pressTimer.current = setTimeout(() => setMenuFor(id), 500);
  };
  const endPress = () => {
    if (pressTimer.current) clearTimeout(pressTimer.current);
    pressTimer.current = null;
  };

  let lastDate = "";
  return (
    <Root data-testid="chat-room">
      {header}
      <List ref={listRef} onScroll={onScroll} aria-label="대화 내용" aria-live="polite">
        {hasOlder && (
          <Older type="button" onClick={() => void useCenterChatStore.getState().loadOlder(viewer, threadId)}>
            이전 메시지
          </Older>
        )}
        {messages.map((m) => {
          const d = formatDate(m.createdAt);
          const sep = d !== lastDate ? <DateSep key={`d-${m.id}`}>{d}</DateSep> : null;
          lastDate = d;
          const unread = isUnreadByCounterpart(m, thread?.counterpartLastReadMessageId ?? null);
          return (
            <div key={m.id} style={{ display: "contents" }}>
              {sep}
              <Row
                $mine={m.mine}
                data-testid={`msg-${m.id}`}
                onContextMenu={(e) => {
                  if (!m.deletable) return;
                  e.preventDefault();
                  setMenuFor(m.id);
                }}
                onTouchStart={() => m.deletable && startPress(m.id)}
                onTouchEnd={endPress}
                onTouchMove={endPress}
              >
                <Bubble $mine={m.mine} $deleted={m.deleted}>
                  {m.deleted ? (
                    "삭제된 메시지입니다"
                  ) : (
                    <>
                      {m.images.length > 0 && (
                        <Imgs $n={m.images.length}>
                          {m.images.map((img, i) => {
                            const href = chatImageHref(img.url);
                            return href ? (
                              <button key={i} type="button" onClick={() => setPreview(href)} aria-label={`사진 ${i + 1} 크게 보기`}>
                                <img src={href} alt={`사진 ${i + 1}`} loading="lazy" />
                              </button>
                            ) : null;
                          })}
                        </Imgs>
                      )}
                      {m.body}
                    </>
                  )}
                </Bubble>
                <span className="meta">
                  {unread && <span className="unread" aria-label="상대가 아직 읽지 않음">1</span>}
                  <time dateTime={m.createdAt}>{timeOf(m.createdAt)}</time>
                </span>
                {m.deletable && (
                  <button
                    type="button"
                    className="more"
                    aria-label="메시지 메뉴"
                    aria-haspopup="menu"
                    onClick={(e) => {
                      e.stopPropagation();
                      setMenuFor(menuFor === m.id ? null : m.id);
                    }}
                  >
                    <Icon name="more_horiz" size={18} />
                  </button>
                )}
                {menuFor === m.id && (
                  <Menu $mine={m.mine} role="menu" onClick={(e) => e.stopPropagation()}>
                    <button
                      type="button"
                      role="menuitem"
                      onClick={() => {
                        setMenuFor(null);
                        setConfirmDelete(m.id);
                      }}
                    >
                      <Icon name="delete" size={18} />
                      삭제
                    </button>
                  </Menu>
                )}
              </Row>
            </div>
          );
        })}
        {pending.map((p) => (
          <div key={p.clientMessageId} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <Row $mine data-testid={`pending-${p.clientMessageId}`}>
              <Bubble $mine $pending>
                {p.previews.length > 0 && (
                  <Imgs $n={p.previews.length}>
                    {p.previews.map((u, i) => (u ? <img key={i} src={u} alt={`보내는 사진 ${i + 1}`} /> : null))}
                  </Imgs>
                )}
                {p.body}
              </Bubble>
              <span className="meta">{p.status === "sending" ? "보내는 중…" : null}</span>
            </Row>
            {p.status === "failed" && (
              <FailLine role="alert">
                <span>{p.error}</span>
                <button type="button" onClick={() => void useCenterChatStore.getState().retry(viewer, threadId, p.clientMessageId)}>
                  다시 보내기
                </button>
                <button type="button" onClick={() => useCenterChatStore.getState().discard(viewer, threadId, p.clientMessageId)}>
                  지우기
                </button>
              </FailLine>
            )}
          </div>
        ))}
      </List>

      {blocked ? (
        <Blocked role="status">운영 정책에 따라 이 대화는 더 이상 메시지를 보낼 수 없어요.</Blocked>
      ) : (
        <Composer onSubmit={(e) => void submit(e)}>
          {files.length > 0 && (
            <div className="previews">
              {files.map((f, i) => (
                <div className="thumb" key={`${f.name}-${i}`}>
                  {filePreviews[i] ? <img src={filePreviews[i]} alt={`첨부 ${i + 1}`} /> : null}
                  <button type="button" aria-label={`첨부 ${i + 1} 빼기`} onClick={() => setFiles(files.filter((_, j) => j !== i))}>
                    <Icon name="close" size={14} />
                  </button>
                </div>
              ))}
            </div>
          )}
          <div className="row">
            <input
              ref={fileRef}
              type="file"
              accept="image/jpeg,image/png,image/webp"
              multiple
              hidden
              onChange={(e) => void pickFiles(e.target.files)}
            />
            <IconBtn
              type="button"
              aria-label="사진 첨부"
              disabled={files.length >= CHAT_MAX_IMAGES}
              onClick={() => fileRef.current?.click()}
            >
              <Icon name="add_photo_alternate" />
            </IconBtn>
            <textarea
              aria-label="메시지"
              value={body}
              maxLength={CHAT_BODY_MAX}
              rows={1}
              placeholder="메시지를 입력하세요"
              onChange={(e) => setBody(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) {
                  e.preventDefault();
                  void submit();
                }
              }}
            />
            <SendBtn type="submit" aria-label="보내기" disabled={!body.trim() && files.length === 0}>
              <Icon name="send" />
            </SendBtn>
          </div>
          {fileError && <p className="hint">{fileError}</p>}
        </Composer>
      )}

      {preview && (
        <Lightbox role="dialog" aria-label="사진 크게 보기" onClick={() => setPreview(null)}>
          <img src={preview} alt="사진 크게 보기" />
        </Lightbox>
      )}

      {confirmDelete && (
        <Overlay onClick={() => setConfirmDelete(null)}>
          <Dialog role="dialog" aria-label="메시지 삭제" onClick={(e) => e.stopPropagation()}>
            <h3>메시지를 삭제할까요?</h3>
            <p>상대방 화면에도 '삭제된 메시지'로 보여요. 삭제한 메시지는 되돌릴 수 없어요.</p>
            <div className="actions">
              <DialogBtn type="button" onClick={() => setConfirmDelete(null)}>
                취소
              </DialogBtn>
              <DialogBtn type="button" $danger onClick={() => void doDelete(confirmDelete)}>
                삭제
              </DialogBtn>
            </div>
          </Dialog>
        </Overlay>
      )}

      {reportOpen && (
        <Overlay onClick={() => onReportClose?.()}>
          <Dialog role="dialog" aria-label="대화 신고" onClick={(e) => e.stopPropagation()}>
            <h3>대화 신고</h3>
            <p>운영팀이 신고 시점까지의 대화를 확인해요. 신고해도 대화는 계속할 수 있어요.</p>
            <select aria-label="신고 사유" value={reason} onChange={(e) => setReason(e.target.value as ChatReportReason)}>
              {CHAT_REPORT_REASONS.map((r) => (
                <option key={r.value} value={r.value}>
                  {r.label}
                </option>
              ))}
            </select>
            <textarea
              aria-label="자세한 내용"
              maxLength={1000}
              value={detail}
              onChange={(e) => setDetail(e.target.value)}
              placeholder={reason === "OTHER" ? "자세한 내용을 적어 주세요(필수)" : "자세한 내용(선택)"}
            />
            <div className="actions">
              <DialogBtn type="button" onClick={() => onReportClose?.()}>
                취소
              </DialogBtn>
              <DialogBtn
                type="button"
                $primary
                disabled={reporting || (reason === "OTHER" && !detail.trim())}
                onClick={() => void submitReport()}
              >
                {reporting ? "접수 중…" : "신고하기"}
              </DialogBtn>
            </div>
          </Dialog>
        </Overlay>
      )}
    </Root>
  );
}

