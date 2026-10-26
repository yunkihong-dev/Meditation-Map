import { useCallback, useEffect, useMemo, useState } from "react";
import AdminConfirmModal from "@/components/admin/AdminConfirmModal";
import {
  AdminButton,
  AdminCard,
  AdminError,
  AdminField,
  AdminInput,
  AdminLabel,
  AdminTextarea,
} from "@/components/admin/adminStyles";
import { ApiError } from "@/services/http/apiError";
import { formatDateTime } from "@/services/notifications/format";
import {
  BROADCAST_MAX_EMAILS,
  broadcastErrorMessage,
  isQuietHoursKst,
  newRequestId,
  parseEmailList,
  previewAdTitle,
} from "@/services/notifications/broadcastForm";
import {
  fetchBroadcasts,
  sendBroadcast,
} from "@/services/notifications/repositories/notificationsRepository";
import {
  isValidBroadcastLink,
  type BroadcastHistoryItem,
  type BroadcastTarget,
} from "@/services/notifications/types";
import { useAdminAuthStore } from "@/stores/adminAuthStore";
import { toast } from "@/stores/toastStore";

const hint = { margin: "6px 0 0", fontSize: 12, color: "#a1a1aa" } as const;

/** 관리자 광고 발송 + 이력 — /admin/broadcasts (계약 3.1·3.2, D3·D6·D7) */
export default function AdminBroadcastPage() {
  const role = useAdminAuthStore((s) => s.role);
  const canSend = role === "ADMIN"; // D6: 광고 발송은 ADMIN 만

  const [requestId, setRequestId] = useState(() => newRequestId());
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [linkUrl, setLinkUrl] = useState("");
  const [target, setTarget] = useState<BroadcastTarget>("ALL");
  const [emailText, setEmailText] = useState("");
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [lastUnknown, setLastUnknown] = useState<string[]>([]);

  const [history, setHistory] = useState<BroadcastHistoryItem[]>([]);
  const [historyCursor, setHistoryCursor] = useState<string | null>(null);
  const [historyError, setHistoryError] = useState<string | null>(null);

  const loadHistory = useCallback(async (cursor: string | null) => {
    setHistoryError(null);
    try {
      const page = await fetchBroadcasts(cursor);
      setHistory((prev) => (cursor ? [...prev, ...page.items] : page.items));
      setHistoryCursor(page.nextCursor);
    } catch (e) {
      setHistoryError(e instanceof ApiError ? e.message : "발송 이력을 불러오지 못했습니다.");
    }
  }, []);

  useEffect(() => {
    void loadHistory(null);
  }, [loadHistory]);

  const parsedEmails = useMemo(() => parseEmailList(emailText), [emailText]);
  const quiet = isQuietHoursKst();

  const problems: string[] = [];
  if (title.trim().length === 0 || title.trim().length > 100) problems.push("제목은 1~100자입니다.");
  if (body.trim().length === 0 || body.trim().length > 500) problems.push("내용은 1~500자입니다.");
  if (!isValidBroadcastLink(linkUrl)) problems.push("링크는 /로 시작하는 서비스 내부 경로만 쓸 수 있습니다.");
  if (target === "EMAILS") {
    if (parsedEmails.invalid.length > 0) problems.push(`이메일 형식 오류: ${parsedEmails.invalid.slice(0, 5).join(", ")}`);
    if (parsedEmails.emails.length === 0) problems.push("받는 회원 이메일을 한 개 이상 넣어 주세요.");
    if (parsedEmails.emails.length > BROADCAST_MAX_EMAILS) problems.push(`이메일은 최대 ${BROADCAST_MAX_EMAILS}개입니다.`);
  }
  const ready = canSend && problems.length === 0 && !sending;

  const send = async () => {
    setConfirmOpen(false);
    if (!ready) return;
    setSending(true);
    setFormError(null);
    try {
      const r = await sendBroadcast({
        requestId,
        title: title.trim(),
        body: body.trim(),
        linkUrl: linkUrl.trim() || null,
        target,
        emails: target === "EMAILS" ? parsedEmails.emails : undefined,
      });
      toast.success(`발송을 접수했습니다. 대상 ${r.recipientCount}명`);
      setLastUnknown(r.unknownEmails);
      setTitle("");
      setBody("");
      setLinkUrl("");
      setEmailText("");
      setRequestId(newRequestId()); // 성공한 뒤에만 새 요청 id
      void loadHistory(null);
    } catch (e) {
      const err = e instanceof ApiError ? e : null;
      // 실패(중복 409 포함)해도 requestId 는 그대로 둡니다. 같은 요청을 다시 보내면 서버가 중복으로 막아 줍니다.
      setFormError(broadcastErrorMessage(err?.code ?? null, err?.message ?? "발송하지 못했습니다."));
    } finally {
      setSending(false);
    }
  };

  return (
    <div style={{ display: "grid", gap: 16 }}>
      <AdminCard>
        <h2 style={{ margin: "0 0 8px", fontSize: 18 }}>광고 알림 발송</h2>
        <p style={{ ...hint, marginBottom: 12 }}>
          광고 수신에 동의한 회원에게만 발송됩니다. 제목 앞에 "(광고)"가 자동으로 붙고, 야간(21시~8시)에는 보낼 수 없습니다.
          앱을 열어 둔 회원은 실시간으로, 아닌 회원은 푸시로 받습니다. 모든 알림은 알림함에 남습니다.
        </p>
        {!canSend && (
          <AdminError>광고 발송은 ADMIN 권한만 할 수 있습니다. 발송 이력만 볼 수 있어요.</AdminError>
        )}
        {canSend && quiet && <AdminError>지금은 야간 발송 차단 시간입니다(21시~8시). 보내면 거절됩니다.</AdminError>}

        <fieldset disabled={!canSend || sending} style={{ border: 0, padding: 0, margin: 0 }}>
          <AdminField>
            <AdminLabel as="span">대상</AdminLabel>
            <div style={{ display: "flex", gap: 6 }}>
              <AdminButton type="button" $variant={target === "ALL" ? "primary" : "ghost"} onClick={() => setTarget("ALL")}>
                전체 회원
              </AdminButton>
              <AdminButton
                type="button"
                $variant={target === "EMAILS" ? "primary" : "ghost"}
                onClick={() => setTarget("EMAILS")}
              >
                이메일 지정
              </AdminButton>
            </div>
          </AdminField>
          {target === "EMAILS" && (
            <AdminField>
              <AdminLabel htmlFor="bc-emails">받는 회원 이메일 (쉼표·줄바꿈 구분, 최대 {BROADCAST_MAX_EMAILS}개)</AdminLabel>
              <AdminTextarea
                id="bc-emails"
                style={{ minHeight: 100 }}
                value={emailText}
                onChange={(e) => setEmailText(e.target.value)}
                placeholder={"a@example.com\nb@example.com"}
              />
              <p style={hint}>유효 {parsedEmails.emails.length}개{parsedEmails.invalid.length ? ` · 형식 오류 ${parsedEmails.invalid.length}개` : ""}</p>
            </AdminField>
          )}
          <AdminField>
            <AdminLabel htmlFor="bc-title">제목 (1~100자)</AdminLabel>
            <AdminInput id="bc-title" maxLength={100} value={title} onChange={(e) => setTitle(e.target.value)} />
            {title.trim() && <p style={hint}>표시될 제목: {previewAdTitle(title)}</p>}
          </AdminField>
          <AdminField>
            <AdminLabel htmlFor="bc-body">내용 (1~500자)</AdminLabel>
            <AdminTextarea
              id="bc-body"
              style={{ minHeight: 100, fontFamily: "inherit", fontSize: 14 }}
              maxLength={500}
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
            <p style={hint}>{body.length}/500</p>
          </AdminField>
          <AdminField>
            <AdminLabel htmlFor="bc-link">눌렀을 때 이동할 경로 (선택)</AdminLabel>
            <AdminInput id="bc-link" value={linkUrl} onChange={(e) => setLinkUrl(e.target.value)} placeholder="/meditation/map" />
          </AdminField>
        </fieldset>

        {problems.length > 0 && (title || body || linkUrl || emailText) && (
          <AdminError>{problems.join(" ")}</AdminError>
        )}
        {formError && <AdminError role="alert">{formError}</AdminError>}
        {lastUnknown.length > 0 && (
          <p style={{ ...hint, color: "#fde68a" }}>
            가입되지 않았거나 스태프인 이메일이라 제외됨: {lastUnknown.join(", ")}
          </p>
        )}
        <AdminButton type="button" $variant="primary" disabled={!ready} onClick={() => setConfirmOpen(true)}>
          {sending ? "발송 중…" : "발송"}
        </AdminButton>
      </AdminCard>

      <AdminCard>
        <h2 style={{ margin: "0 0 12px", fontSize: 18 }}>발송 이력</h2>
        {historyError && <AdminError>{historyError}</AdminError>}
        {history.length === 0 && !historyError && <p style={{ color: "#71717a", fontSize: 13 }}>발송 이력이 없습니다.</p>}
        {history.map((h) => (
          <div key={h.id} style={{ padding: "10px 0", borderBottom: "1px solid #27272a" }}>
            <strong style={{ fontSize: 14, overflowWrap: "anywhere" }}>{h.title}</strong>
            <p style={{ ...hint, whiteSpace: "pre-line", overflowWrap: "anywhere" }}>{h.body}</p>
            <p style={hint}>
              {formatDateTime(h.createdAt)} · {h.target === "ALL" ? "전체" : "이메일 지정"} · {h.recipientCount}명
              {h.sentBy ? ` · ${h.sentBy.loginId}` : ""}
              {h.linkUrl ? ` · ${h.linkUrl}` : ""}
            </p>
          </div>
        ))}
        {historyCursor && (
          <div style={{ marginTop: 12 }}>
            <AdminButton type="button" $variant="ghost" onClick={() => void loadHistory(historyCursor)}>
              더 보기
            </AdminButton>
          </div>
        )}
      </AdminCard>

      <AdminConfirmModal
        open={confirmOpen}
        title="광고 알림 발송"
        message={`${target === "ALL" ? "광고 수신에 동의한 전체 회원" : `지정한 ${parsedEmails.emails.length}명 중 동의한 회원`}에게 「${previewAdTitle(title)}」을(를) 보낼까요? 보낸 뒤에는 되돌릴 수 없습니다.`}
        confirmLabel="발송"
        onCancel={() => setConfirmOpen(false)}
        onConfirm={() => void send()}
      />
    </div>
  );
}
