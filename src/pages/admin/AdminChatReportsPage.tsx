import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import AdminConfirmModal from "@/components/admin/AdminConfirmModal";
import { AdminButton, AdminCard, AdminError, AdminField, AdminLabel, AdminTextarea } from "@/components/admin/adminStyles";
import { ApiError } from "@/services/http/apiError";
import { formatDateTime } from "@/services/notifications/format";
import {
  chatImageHref,
  fetchAdminChatMessages,
  fetchAdminChatReport,
  fetchAdminChatReports,
  resolveAdminChatReport,
} from "@/services/centerChat/repositories/centerChatRepository";
import {
  chatErrorMessage,
  reportReasonLabel,
  type AdminChatMessage,
  type AdminChatReportDetail,
  type AdminChatReportSummary,
} from "@/services/centerChat/types";
import { compareId } from "@/stores/notificationStore";
import { useAdminAuthStore } from "@/stores/adminAuthStore";
import { toast } from "@/stores/toastStore";

/*
 * 관리자 대화 신고 — /admin/chat-reports(/:reportId) (계약 C5, DC3: ADMIN·EMPLOYEE 만, DEV 는 메뉴 숨김 + 403 안내).
 * AdminPlaceClaimsPage 의 목록 + 선택 상세 패턴. 대화는 읽기 전용, 신고 시점(reportedUpToMessageId)에 구분선.
 * 삭제된 메시지(DC5)는 관리자에게 원문 + '삭제됨' 표시.
 */

export const CHAT_REPORT_ROLES = new Set(["ADMIN", "EMPLOYEE"]);

const Layout = styled.div`
  display: grid;
  gap: 16px;

  @media (min-width: 1100px) {
    grid-template-columns: minmax(320px, 400px) 1fr;
    align-items: start;
  }
`;

const ReportRow = styled.button<{ $active: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 12px;
  margin-bottom: 8px;
  border-radius: 12px;
  border: 1px solid ${({ $active }) => ($active ? "#7c3aed" : "#2a2a30")};
  background: ${({ $active }) => ($active ? "rgba(124, 58, 237, 0.12)" : "#111114")};
  color: #f4f4f5;
  text-align: left;
  cursor: pointer;

  strong {
    font-size: 14px;
    overflow-wrap: anywhere;
  }

  span {
    font-size: 12px;
    color: #a1a1aa;
    overflow-wrap: anywhere;
  }
`;

const Tag = styled.span<{ $status: string }>`
  align-self: flex-start;
  padding: 2px 8px;
  border-radius: 999px;
  font-size: 11px !important;
  font-weight: 700;
  color: ${({ $status }) => ($status === "RESOLVED" ? "#86efac" : $status === "DISMISSED" ? "#a1a1aa" : "#fde68a")} !important;
  background: ${({ $status }) =>
    $status === "RESOLVED" ? "rgba(34,197,94,0.15)" : $status === "DISMISSED" ? "rgba(161,161,170,0.15)" : "rgba(234,179,8,0.15)"};
`;

const Dl = styled.dl`
  display: grid;
  grid-template-columns: 110px 1fr;
  gap: 8px 12px;
  margin: 0 0 12px;
  font-size: 13px;

  dt {
    color: #8b8b93;
  }

  dd {
    margin: 0;
    overflow-wrap: anywhere;
    white-space: pre-line;
  }
`;

const Convo = styled.div`
  max-height: 520px;
  overflow-y: auto;
  padding: 12px;
  border: 1px solid #27272a;
  border-radius: 12px;
  background: #0c0c0e;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Msg = styled.div<{ $owner: boolean; $deleted: boolean }>`
  align-self: ${({ $owner }) => ($owner ? "flex-end" : "flex-start")};
  max-width: 80%;
  padding: 8px 12px;
  border-radius: 12px;
  background: ${({ $owner }) => ($owner ? "rgba(124,58,237,0.25)" : "#1f1f23")};
  border: 1px ${({ $deleted }) => ($deleted ? "dashed #f87171" : "solid transparent")};
  font-size: 13px;
  white-space: pre-wrap;
  overflow-wrap: anywhere;

  .who {
    display: block;
    margin-bottom: 4px;
    font-size: 11px;
    color: #a1a1aa;
  }

  .del {
    margin-left: 6px;
    color: #f87171;
    font-weight: 700;
  }

  img {
    width: 96px;
    height: 96px;
    object-fit: cover;
    border-radius: 8px;
    margin: 4px 4px 0 0;
  }
`;

const Cut = styled.div`
  border-top: 2px dashed #f59e0b;
  margin: 6px 0;
  font-size: 11px;
  color: #f59e0b;
  text-align: center;
`;

const FILTERS = [
  { value: "PENDING", label: "대기" },
  { value: "RESOLVED", label: "처리" },
  { value: "DISMISSED", label: "기각" },
  { value: "ALL", label: "전체" },
];

const statusLabel = (s: string) => (s === "PENDING" ? "대기" : s === "RESOLVED" ? "처리됨" : s === "DISMISSED" ? "기각" : s);

export default function AdminChatReportsPage() {
  const navigate = useNavigate();
  const { reportId } = useParams();
  const role = useAdminAuthStore((s) => s.role);
  const allowed = CHAT_REPORT_ROLES.has(role ?? "");
  const [status, setStatus] = useState("PENDING");
  const [rows, setRows] = useState<AdminChatReportSummary[]>([]);
  const [next, setNext] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [detail, setDetail] = useState<AdminChatReportDetail | null>(null);
  const [messages, setMessages] = useState<AdminChatMessage[]>([]);
  const [msgCursor, setMsgCursor] = useState<string | null>(null);
  const [note, setNote] = useState("");
  const [confirm, setConfirm] = useState<"BLOCK_THREAD" | "DISMISS" | null>(null);
  const [busy, setBusy] = useState(false);

  const load = useCallback(
    async (cursor: string | null) => {
      setError(null);
      try {
        const page = await fetchAdminChatReports(status, cursor);
        setRows((prev) => (cursor ? [...prev, ...page.items] : page.items));
        setNext(page.nextCursor);
      } catch (e) {
        setError(e instanceof ApiError && e.status === 403 ? "대화 신고는 ADMIN·EMPLOYEE 만 볼 수 있습니다." : "신고 목록을 불러오지 못했습니다.");
      }
    },
    [status]
  );

  useEffect(() => {
    if (allowed) void load(null);
  }, [allowed, load]);

  useEffect(() => {
    setDetail(null);
    setMessages([]);
    setMsgCursor(null);
    if (!reportId || !allowed) return;
    let cancelled = false;
    fetchAdminChatReport(reportId)
      .then(async (d) => {
        if (cancelled) return;
        setDetail(d);
        const page = await fetchAdminChatMessages(d.thread.id, null);
        if (cancelled) return;
        setMessages([...page.items].sort((x, y) => compareId(x.id, y.id)));
        setMsgCursor(page.nextCursor);
      })
      .catch((e) => {
        if (!cancelled) toast.error(chatErrorMessage(e instanceof ApiError ? e.code : null, "신고를 불러오지 못했습니다."));
      });
    return () => {
      cancelled = true;
    };
  }, [reportId, allowed]);

  const older = async () => {
    if (!detail || !msgCursor) return;
    const page = await fetchAdminChatMessages(detail.thread.id, msgCursor);
    setMessages((prev) => [...page.items, ...prev].sort((x, y) => compareId(x.id, y.id)));
    setMsgCursor(page.nextCursor);
  };

  const resolve = async () => {
    if (!detail || !confirm) return;
    const action = confirm;
    setConfirm(null);
    setBusy(true);
    try {
      const d = await resolveAdminChatReport(detail.id, action, note);
      setDetail(d);
      setNote("");
      setRows((prev) =>
        prev.map((r) => {
          if (r.id === d.id) return { ...r, status: d.status, thread: { ...r.thread, status: d.thread.status } };
          // BLOCK_THREAD 는 같은 대화의 대기 신고를 모두 RESOLVED 로 바꾼다(계약 C5.3) — 목록 행도 같이 (QA R2-5)
          if (action === "BLOCK_THREAD" && r.thread.id === d.thread.id) {
            return { ...r, status: r.status === "PENDING" ? "RESOLVED" : r.status, thread: { ...r.thread, status: d.thread.status } };
          }
          return r;
        })
      );
      toast.success(action === "BLOCK_THREAD" ? "대화를 차단했습니다." : "신고를 기각했습니다.");
    } catch (e) {
      const err = e instanceof ApiError ? e : null;
      if (err && (err.status === 409 || err.code === "CENTER_CHAT_REPORT_ALREADY_RESOLVED")) {
        // 다른 신고의 차단 처리 등으로 이미 처리됨 — 목록·상세를 서버 값으로 다시 받는다
        void load(null);
        const id = detail.id;
        fetchAdminChatReport(id)
          .then((fresh) => setDetail((cur) => (cur && cur.id === id ? fresh : cur)))
          .catch(() => undefined);
        toast.info("이미 처리된 신고예요. 목록을 새로 불러왔어요.");
      } else {
        toast.error(chatErrorMessage(err?.code ?? null, "처리하지 못했습니다."));
      }
    } finally {
      setBusy(false);
    }
  };

  if (!allowed) {
    return (
      <AdminCard>
        <h2 style={{ margin: "0 0 8px", fontSize: 18 }}>대화 신고</h2>
        <AdminError>대화 신고 열람·처리는 ADMIN·EMPLOYEE 권한만 할 수 있습니다.</AdminError>
      </AdminCard>
    );
  }

  return (
    <Layout>
      <AdminCard>
        <h2 style={{ margin: "0 0 12px", fontSize: 18 }}>대화 신고</h2>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 12 }}>
          {FILTERS.map((f) => (
            <AdminButton key={f.value} type="button" $variant={status === f.value ? "primary" : "ghost"} onClick={() => setStatus(f.value)}>
              {f.label}
            </AdminButton>
          ))}
        </div>
        {error && <AdminError>{error}</AdminError>}
        {!error && rows.length === 0 && <p style={{ color: "#71717a", fontSize: 13 }}>해당하는 신고가 없습니다.</p>}
        {rows.map((r) => (
          <ReportRow key={r.id} data-testid={`report-row-${r.id}`} type="button" $active={r.id === reportId} onClick={() => navigate(`/admin/chat-reports/${encodeURIComponent(r.id)}`)}>
            <Tag $status={r.status}>{statusLabel(r.status)}</Tag>
            <strong>{r.thread.placeName ?? `(삭제된 장소 #${r.thread.placeId})`}</strong>
            <span>
              {reportReasonLabel(r.reason)} · {r.reporter.role === "OWNER" ? "센터" : "고객"} {r.reporter.email} · {formatDateTime(r.createdAt)}
              {r.thread.status === "BLOCKED" ? " · 대화 차단됨" : ""}
            </span>
          </ReportRow>
        ))}
        {next && (
          <AdminButton type="button" $variant="ghost" onClick={() => void load(next)}>
            더 보기
          </AdminButton>
        )}
      </AdminCard>

      <AdminCard>
        {!reportId ? (
          <p style={{ color: "#71717a", fontSize: 13, margin: 0 }}>왼쪽 목록에서 신고를 선택하세요.</p>
        ) : !detail ? (
          <p style={{ color: "#71717a", fontSize: 13, margin: 0 }}>불러오는 중…</p>
        ) : (
          <>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8, marginBottom: 12 }}>
              <h3 style={{ margin: 0, fontSize: 16 }}>{detail.thread.placeName ?? `(삭제된 장소 #${detail.thread.placeId})`}</h3>
              <Tag $status={detail.status}>{statusLabel(detail.status)}</Tag>
            </div>
            <Dl>
              <dt>사유</dt>
              <dd>{reportReasonLabel(detail.reason)}</dd>
              <dt>내용</dt>
              <dd>{detail.detail ?? "-"}</dd>
              <dt>신고자</dt>
              <dd>
                {detail.reporter.role === "OWNER" ? "센터" : "고객"} · {detail.reporter.email}
              </dd>
              <dt>고객</dt>
              <dd>
                {detail.customer.displayName} · {detail.customer.email}
              </dd>
              <dt>현재 오너</dt>
              <dd>{detail.currentOwner?.email ?? "없음"}</dd>
              <dt>프로그램</dt>
              <dd>{detail.thread.program?.title ?? "-"}</dd>
              <dt>대화 상태</dt>
              <dd>{detail.thread.status === "BLOCKED" ? "차단됨" : "열림"}</dd>
              <dt>같은 대화 다른 신고</dt>
              <dd>{detail.otherReportCount}건</dd>
              <dt>신고 시각</dt>
              <dd>{formatDateTime(detail.createdAt)}</dd>
              {detail.resolution && (
                <>
                  <dt>처리</dt>
                  <dd>
                    {detail.resolution.action === "BLOCK_THREAD" ? "대화 차단" : "기각"} · {detail.resolution.resolvedBy?.loginId ?? ""} ·{" "}
                    {formatDateTime(detail.resolution.resolvedAt)}
                    {detail.resolution.note ? `\n${detail.resolution.note}` : ""}
                  </dd>
                </>
              )}
            </Dl>

            <AdminField>
              <AdminLabel as="span">대화 (읽기 전용)</AdminLabel>
              <Convo aria-label="신고된 대화">
                {msgCursor && (
                  <AdminButton type="button" $variant="ghost" onClick={() => void older()}>
                    이전 메시지
                  </AdminButton>
                )}
                {messages.map((m) => (
                  <div key={m.id} style={{ display: "contents" }}>
                    <Msg $owner={m.senderRole === "OWNER"} $deleted={m.deleted} data-testid={`admin-msg-${m.id}`}>
                      <span className="who">
                        {m.senderRole === "OWNER" ? "센터" : "고객"} {m.sender?.email ?? ""} · {formatDateTime(m.createdAt)}
                        {m.deleted && <span className="del">삭제됨{m.deletedAt ? ` (${formatDateTime(m.deletedAt)})` : ""}</span>}
                      </span>
                      {m.body}
                      {m.images.length > 0 && (
                        <div>
                          {m.images.map((img, i) => {
                            const href = chatImageHref(img.url);
                            return href ? (
                              <a key={i} href={href} target="_blank" rel="noreferrer">
                                <img src={href} alt={`사진 ${i + 1}`} />
                              </a>
                            ) : null;
                          })}
                        </div>
                      )}
                    </Msg>
                    {detail.reportedUpToMessageId === m.id && <Cut>여기까지 신고됨</Cut>}
                  </div>
                ))}
              </Convo>
            </AdminField>

            {detail.status === "PENDING" && (
              <>
                <AdminField>
                  <AdminLabel htmlFor="chat-report-note">처리 메모(선택, 500자)</AdminLabel>
                  <AdminTextarea
                    id="chat-report-note"
                    style={{ minHeight: 80, fontFamily: "inherit", fontSize: 14 }}
                    maxLength={500}
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                  />
                </AdminField>
                <div style={{ display: "flex", gap: 8 }}>
                  <AdminButton type="button" $variant="ghost" disabled={busy} onClick={() => setConfirm("DISMISS")}>
                    기각
                  </AdminButton>
                  <AdminButton type="button" $variant="danger" disabled={busy} onClick={() => setConfirm("BLOCK_THREAD")}>
                    대화 차단
                  </AdminButton>
                </div>
              </>
            )}
          </>
        )}
      </AdminCard>

      <AdminConfirmModal
        open={confirm !== null}
        title={confirm === "BLOCK_THREAD" ? "대화 차단" : "신고 기각"}
        message={
          confirm === "BLOCK_THREAD"
            ? "이 대화를 차단할까요? 양쪽 모두 더 이상 메시지를 보낼 수 없고, 이 대화의 대기 중 신고가 모두 처리됩니다. 되돌릴 수 없습니다."
            : "이 신고를 기각할까요?"
        }
        confirmLabel={confirm === "BLOCK_THREAD" ? "차단" : "기각"}
        onCancel={() => setConfirm(null)}
        onConfirm={() => void resolve()}
      />
    </Layout>
  );
}
