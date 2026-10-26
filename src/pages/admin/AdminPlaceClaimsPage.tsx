import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import AdminConfirmModal from "@/components/admin/AdminConfirmModal";
import {
  AdminButton,
  AdminCard,
  AdminError,
  AdminField,
  AdminLabel,
  AdminTextarea,
} from "@/components/admin/adminStyles";
import { ApiError } from "@/services/http/apiError";
import { formatDateTime } from "@/services/notifications/format";
import {
  approvePlaceClaim,
  evidenceHref,
  fetchAdminPlaceClaim,
  fetchAdminPlaceClaims,
  rejectPlaceClaim,
} from "@/services/placeClaims/repositories/placeClaimsRepository";
import {
  claimErrorMessage,
  claimStatusLabel,
  type AdminClaimStatusFilter,
  type AdminPlaceClaimDetail,
  type AdminPlaceClaimSummary,
} from "@/services/placeClaims/types";
import { toast } from "@/stores/toastStore";

const Layout = styled.div`
  display: grid;
  gap: 16px;

  @media (min-width: 1100px) {
    grid-template-columns: minmax(320px, 420px) 1fr;
    align-items: start;
  }
`;

const ClaimRow = styled.button<{ $active: boolean }>`
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
  color: ${({ $status }) => ($status === "APPROVED" ? "#86efac" : $status === "REJECTED" ? "#fca5a5" : "#e9d5ff")} !important;
  background: ${({ $status }) =>
    $status === "APPROVED" ? "rgba(34,197,94,0.15)" : $status === "REJECTED" ? "rgba(239,68,68,0.15)" : "rgba(124,58,237,0.25)"};
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

  @media (max-width: 520px) {
    grid-template-columns: 1fr;

    dd {
      margin-bottom: 6px;
    }
  }
`;

const Warn = styled.p`
  margin: 0 0 12px;
  padding: 10px 12px;
  border-radius: 10px;
  background: rgba(234, 179, 8, 0.12);
  color: #fde68a;
  font-size: 13px;
`;

const EvidenceImg = styled.img`
  display: block;
  max-width: 100%;
  max-height: 480px;
  border-radius: 10px;
  border: 1px solid #27272a;
  background: #000;
`;

const FILTERS: { value: AdminClaimStatusFilter; label: string }[] = [
  { value: "PENDING", label: "검토 대기" },
  { value: "APPROVED", label: "승인" },
  { value: "REJECTED", label: "반려" },
  { value: "ALL", label: "전체" },
];

function errMsg(e: unknown, fallback: string) {
  if (e instanceof ApiError) return claimErrorMessage(e.code, e.message || fallback);
  return fallback;
}

/** 관리자 소유 신청 — /admin/place-claims, /admin/place-claims/:claimId (계약 5절) */
export default function AdminPlaceClaimsPage() {
  const navigate = useNavigate();
  const { claimId } = useParams();
  const [status, setStatus] = useState<AdminClaimStatusFilter>("PENDING");
  const [rows, setRows] = useState<AdminPlaceClaimSummary[]>([]);
  const [nextCursor, setNextCursor] = useState<string | null>(null);
  const [listError, setListError] = useState<string | null>(null);
  const [listLoading, setListLoading] = useState(false);
  const [detail, setDetail] = useState<AdminPlaceClaimDetail | null>(null);
  const [detailError, setDetailError] = useState<string | null>(null);
  const [approveOpen, setApproveOpen] = useState(false);
  const [rejecting, setRejecting] = useState(false);
  const [reason, setReason] = useState("");
  const [busy, setBusy] = useState(false);

  const loadList = useCallback(
    async (cursor: string | null) => {
      setListLoading(true);
      setListError(null);
      try {
        const page = await fetchAdminPlaceClaims(status, cursor);
        setRows((prev) => (cursor ? [...prev, ...page.items] : page.items));
        setNextCursor(page.nextCursor);
      } catch (e) {
        setListError(errMsg(e, "신청 목록을 불러오지 못했습니다."));
      } finally {
        setListLoading(false);
      }
    },
    [status]
  );

  useEffect(() => {
    void loadList(null);
  }, [loadList]);

  useEffect(() => {
    setDetail(null);
    setDetailError(null);
    setRejecting(false);
    setReason("");
    if (!claimId) return;
    let cancelled = false;
    fetchAdminPlaceClaim(claimId)
      .then((d) => {
        if (!cancelled) setDetail(d);
      })
      .catch((e) => {
        if (!cancelled) setDetailError(errMsg(e, "신청을 불러오지 못했습니다."));
      });
    return () => {
      cancelled = true;
    };
  }, [claimId]);

  /** 처리 결과를 상세와 목록 행에 같이 반영합니다. */
  const applyReviewed = (d: AdminPlaceClaimDetail) => {
    setDetail(d);
    setRows((prev) =>
      prev.map((r) => (r.id === d.id ? { ...r, status: d.status, reviewedAt: d.reviewedAt } : r))
    );
  };

  const approve = async () => {
    if (!detail) return;
    setApproveOpen(false);
    setBusy(true);
    try {
      applyReviewed(await approvePlaceClaim(detail.id));
      toast.success("승인했습니다. 같은 장소의 다른 대기 신청은 자동 반려됩니다.");
      void loadList(null);
    } catch (e) {
      toast.error(errMsg(e, "승인하지 못했습니다."));
      // 409(이미 처리·이미 오너 있음)면 최신 상태를 다시 받습니다.
      void fetchAdminPlaceClaim(detail.id).then(applyReviewed).catch(() => undefined);
    } finally {
      setBusy(false);
    }
  };

  const reject = async () => {
    if (!detail) return;
    const r = reason.trim();
    if (r.length === 0 || r.length > 500) return;
    setBusy(true);
    try {
      applyReviewed(await rejectPlaceClaim(detail.id, r));
      setRejecting(false);
      setReason("");
      toast.success("반려했습니다.");
    } catch (e) {
      toast.error(errMsg(e, "반려하지 못했습니다."));
      void fetchAdminPlaceClaim(detail.id).then(applyReviewed).catch(() => undefined);
    } finally {
      setBusy(false);
    }
  };

  const evidenceUrl = detail?.evidence ? evidenceHref(detail.evidence.url) : null;
  const isImage = detail?.evidence?.contentType.startsWith("image/") ?? false;

  return (
    <Layout>
      <AdminCard>
        <h2 style={{ margin: "0 0 12px", fontSize: 18 }}>소유 신청</h2>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 12 }}>
          {FILTERS.map((f) => (
            <AdminButton
              key={f.value}
              type="button"
              $variant={status === f.value ? "primary" : "ghost"}
              onClick={() => setStatus(f.value)}
            >
              {f.label}
            </AdminButton>
          ))}
        </div>
        {listError && <AdminError>{listError}</AdminError>}
        {!listLoading && rows.length === 0 && !listError && (
          <p style={{ color: "#71717a", fontSize: 13 }}>해당하는 신청이 없습니다.</p>
        )}
        {rows.map((r) => (
          <ClaimRow
            key={r.id}
            type="button"
            $active={r.id === claimId}
            onClick={() => navigate(`/admin/place-claims/${encodeURIComponent(r.id)}`)}
          >
            <Tag $status={r.status}>{claimStatusLabel(r.status)}</Tag>
            <strong>{r.placeName ?? `(삭제된 장소 #${r.placeId})`}</strong>
            <span>
              {r.applicant.email || r.applicant.memberId} · {formatDateTime(r.createdAt)}
              {r.hasEvidence ? " · 증빙 있음" : ""}
            </span>
          </ClaimRow>
        ))}
        {nextCursor && (
          <AdminButton type="button" $variant="ghost" disabled={listLoading} onClick={() => void loadList(nextCursor)}>
            {listLoading ? "불러오는 중…" : "더 보기"}
          </AdminButton>
        )}
      </AdminCard>

      <AdminCard>
        {!claimId ? (
          <p style={{ color: "#71717a", fontSize: 13, margin: 0 }}>왼쪽 목록에서 신청을 선택하세요.</p>
        ) : detailError ? (
          <AdminError>{detailError}</AdminError>
        ) : !detail ? (
          <p style={{ color: "#71717a", fontSize: 13, margin: 0 }}>불러오는 중…</p>
        ) : (
          <>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 8, alignItems: "center", marginBottom: 12 }}>
              <h3 style={{ margin: 0, fontSize: 16, overflowWrap: "anywhere" }}>
                {detail.placeName ?? `(삭제된 장소 #${detail.placeId})`}
              </h3>
              <Tag $status={detail.status}>{claimStatusLabel(detail.status)}</Tag>
            </div>

            {detail.status === "PENDING" && detail.placeCurrentOwner && (
              <Warn>
                이 장소에는 이미 승인된 오너({detail.placeCurrentOwner.email})가 있습니다. 승인하면 409로 거절됩니다. 반려해 주세요.
              </Warn>
            )}
            {detail.status === "PENDING" && detail.otherPendingCount > 0 && (
              <Warn>
                같은 장소에 다른 대기 신청이 {detail.otherPendingCount}건 있습니다. 이 신청을 승인하면 나머지는 자동 반려됩니다.
              </Warn>
            )}

            <Dl>
              <dt>신청자</dt>
              <dd>{detail.applicant.email || detail.applicant.memberId}</dd>
              <dt>연락처</dt>
              <dd>{detail.contact}</dd>
              <dt>사업자번호</dt>
              <dd>{detail.businessRegistrationNumber ?? "-"}</dd>
              <dt>메모</dt>
              <dd>{detail.memo ?? "-"}</dd>
              <dt>신청 시각</dt>
              <dd>{formatDateTime(detail.createdAt)}</dd>
              {detail.reviewedAt && (
                <>
                  <dt>처리</dt>
                  <dd>
                    {formatDateTime(detail.reviewedAt)}
                    {detail.reviewedBy ? ` · ${detail.reviewedBy.loginId}` : ""}
                  </dd>
                </>
              )}
              {detail.rejectReason && (
                <>
                  <dt>반려 사유</dt>
                  <dd>{detail.rejectReason}</dd>
                </>
              )}
              <dt>장소</dt>
              <dd>
                <a
                  href={`/meditation/place/${encodeURIComponent(detail.placeId)}`}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#c4b5fd" }}
                >
                  공개 화면 열기 (#{detail.placeId})
                </a>
              </dd>
            </Dl>

            <AdminField>
              <AdminLabel as="span">증빙</AdminLabel>
              {!detail.evidence ? (
                <p style={{ margin: 0, fontSize: 13, color: "#a1a1aa" }}>첨부 없음</p>
              ) : !evidenceUrl ? (
                <AdminError>증빙 주소를 열 수 없습니다.</AdminError>
              ) : (
                <>
                  <p style={{ margin: "0 0 8px", fontSize: 13 }}>
                    {detail.evidence.fileName} · {Math.ceil(detail.evidence.sizeBytes / 1024)}KB ·{" "}
                    <a href={evidenceUrl} target="_blank" rel="noreferrer" style={{ color: "#c4b5fd" }}>
                      새 탭에서 열기
                    </a>
                  </p>
                  {isImage && <EvidenceImg src={evidenceUrl} alt={`증빙: ${detail.evidence.fileName}`} />}
                </>
              )}
            </AdminField>

            {detail.status === "PENDING" && (
              <>
                {rejecting ? (
                  <AdminField>
                    <AdminLabel htmlFor="reject-reason">반려 사유 (신청자에게 알림으로 전달됩니다)</AdminLabel>
                    <AdminTextarea
                      id="reject-reason"
                      style={{ minHeight: 100, fontFamily: "inherit", fontSize: 14 }}
                      maxLength={500}
                      value={reason}
                      onChange={(e) => setReason(e.target.value)}
                    />
                    <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
                      <AdminButton type="button" $variant="ghost" onClick={() => setRejecting(false)}>
                        취소
                      </AdminButton>
                      <AdminButton
                        type="button"
                        $variant="danger"
                        disabled={busy || reason.trim().length === 0}
                        onClick={() => void reject()}
                      >
                        반려 확정
                      </AdminButton>
                    </div>
                  </AdminField>
                ) : (
                  <div style={{ display: "flex", gap: 8 }}>
                    <AdminButton type="button" $variant="primary" disabled={busy} onClick={() => setApproveOpen(true)}>
                      승인
                    </AdminButton>
                    <AdminButton type="button" $variant="danger" disabled={busy} onClick={() => setRejecting(true)}>
                      반려
                    </AdminButton>
                  </div>
                )}
              </>
            )}
          </>
        )}
      </AdminCard>

      <AdminConfirmModal
        open={approveOpen}
        title="소유 신청 승인"
        message={`「${detail?.placeName ?? ""}」의 오너로 ${detail?.applicant.email ?? "신청자"}를 승인할까요? 승인하면 이 회원이 장소 정보를 바로 수정할 수 있습니다.`}
        confirmLabel="승인"
        onCancel={() => setApproveOpen(false)}
        onConfirm={() => void approve()}
      />
    </Layout>
  );
}
