import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Icon from "@/components/common/Icon";
import LoginRequired, { useMemberSession } from "@/components/common/LoginRequired";
import {
  BackButton,
  Card,
  CardTitle,
  ErrorText,
  GhostButton,
  MemberPage,
  Muted,
  PageHead,
  PageTitle,
  SmallButton,
  StatusChip,
  statusTone,
} from "@/components/common/memberPageStyles";
import { ApiError } from "@/services/http/apiError";
import { formatDateTime } from "@/services/notifications/format";
import { fetchMyPlaceClaim } from "@/services/placeClaims/repositories/placeClaimsRepository";
import { claimStatusLabel, type MyPlaceClaim } from "@/services/placeClaims/types";

/**
 * 내 소유 신청 상세 — /profile/place-claims/:claimId (C8).
 * 반려 알림(PLACE_CLAIM_REJECTED)의 새 linkUrl 이 여기로 옵니다. 옛 linkUrl(/profile/place-claims)은 목록 화면이 그대로 받습니다.
 * 404(남의 것·없는 것)면 목록으로 돌려보냅니다.
 */
export default function MyPlaceClaimDetailPage() {
  const navigate = useNavigate();
  const { claimId = "" } = useParams();
  const { authReady, isMember } = useMemberSession();
  const [claim, setClaim] = useState<MyPlaceClaim | null>(null);
  const [notFound, setNotFound] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isMember || !claimId) return;
    let cancelled = false;
    fetchMyPlaceClaim(claimId)
      .then((c) => {
        if (!cancelled) setClaim(c);
      })
      .catch((e) => {
        if (cancelled) return;
        if (e instanceof ApiError && e.status === 404) setNotFound(true);
        else setError("신청을 불러오지 못했어요.");
      });
    return () => {
      cancelled = true;
    };
  }, [isMember, claimId]);

  if (notFound) return <Navigate to="/profile/place-claims" replace />;

  return (
    <MemberPage>
      <PageHead>
        <BackButton type="button" aria-label="뒤로" onClick={() => navigate(-1)}>
          <Icon name="arrow_back" size={22} />
        </BackButton>
        <PageTitle>소유 신청 상세</PageTitle>
      </PageHead>
      {!authReady ? null : !isMember ? (
        <LoginRequired />
      ) : error ? (
        <ErrorText role="alert">{error}</ErrorText>
      ) : !claim ? (
        <Muted>불러오는 중…</Muted>
      ) : (
        <Card as="article" data-testid="claim-detail">
          <div style={{ display: "flex", justifyContent: "space-between", gap: 10, alignItems: "flex-start" }}>
            <CardTitle style={{ overflowWrap: "anywhere" }}>{claim.placeName ?? "삭제된 장소"}</CardTitle>
            <StatusChip $tone={statusTone(claim.status)}>{claimStatusLabel(claim.status)}</StatusChip>
          </div>
          <Muted>신청 {formatDateTime(claim.createdAt)}</Muted>
          {claim.reviewedAt && <Muted>처리 {formatDateTime(claim.reviewedAt)}</Muted>}
          {claim.status === "REJECTED" && claim.rejectReason && (
            <p
              style={{
                margin: "14px 0 0",
                padding: "12px 14px",
                borderRadius: 12,
                background: "#ffdad6",
                color: "#93000a",
                fontSize: "1.3rem",
                whiteSpace: "pre-line",
              }}
            >
              반려 사유: {claim.rejectReason}
            </p>
          )}
          <dl style={{ margin: "16px 0 0", display: "grid", gap: 8, fontSize: "1.4rem" }}>
            <div>
              <dt style={{ color: "#7a7484" }}>연락처</dt>
              <dd style={{ margin: 0 }}>{claim.contact}</dd>
            </div>
            <div>
              <dt style={{ color: "#7a7484" }}>사업자 등록번호</dt>
              <dd style={{ margin: 0 }}>{claim.businessRegistrationNumber ?? "-"}</dd>
            </div>
            <div>
              <dt style={{ color: "#7a7484" }}>메모</dt>
              <dd style={{ margin: 0, whiteSpace: "pre-line", overflowWrap: "anywhere" }}>{claim.memo ?? "-"}</dd>
            </div>
            <div>
              <dt style={{ color: "#7a7484" }}>증빙</dt>
              <dd style={{ margin: 0 }}>{claim.hasEvidence ? (claim.evidenceFileName ?? "첨부됨") : "없음"}</dd>
            </div>
          </dl>
          <div style={{ display: "flex", gap: 8, marginTop: 16, flexWrap: "wrap" }}>
            {claim.status === "APPROVED" && claim.placeName && (
              <SmallButton type="button" onClick={() => navigate(`/profile/places/${encodeURIComponent(claim.placeId)}/edit`)}>
                센터 정보 수정
              </SmallButton>
            )}
            {claim.status === "REJECTED" && (
              <SmallButton type="button" onClick={() => navigate("/center/register")}>
                센터 등록에서 다시 요청하기
              </SmallButton>
            )}
          </div>
        </Card>
      )}
      <div style={{ marginTop: 16, display: "flex" }}>
        <GhostButton type="button" style={{ flex: 1 }} onClick={() => navigate("/profile/place-claims")}>
          신청 내역 전체 보기
        </GhostButton>
      </div>
    </MemberPage>
  );
}
