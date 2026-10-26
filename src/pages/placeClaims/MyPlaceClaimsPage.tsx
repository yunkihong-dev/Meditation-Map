import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Icon from "@/components/common/Icon";
import LoginRequired, { useMemberSession } from "@/components/common/LoginRequired";
import {
  BackButton,
  Card,
  Empty,
  ErrorText,
  MemberPage,
  Muted,
  PageHead,
  PageTitle,
  SmallButton,
  StatusChip,
  statusTone,
} from "@/components/common/memberPageStyles";
import { fetchMyPlaceClaims } from "@/services/placeClaims/repositories/placeClaimsRepository";
import { claimStatusLabel, type MyPlaceClaim } from "@/services/placeClaims/types";
import { formatDateTime } from "@/services/notifications/format";
import { typography } from "@/styles/typography";

const Head = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 6px;
`;

const Name = styled.strong`
  ${typography.body1};
  font-weight: 700;
  overflow-wrap: anywhere;
`;

const Reason = styled.p`
  margin: 10px 0 0;
  padding: 10px 12px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.errorContainer};
  color: ${({ theme }) => theme.colors.onErrorContainer};
  ${typography.caption};
  white-space: pre-line;
`;

/** 내 소유 신청 내역 — /profile/place-claims (계약 4.2, 9절) */
export default function MyPlaceClaimsPage() {
  const navigate = useNavigate();
  const { authReady, isMember } = useMemberSession();
  const [items, setItems] = useState<MyPlaceClaim[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isMember) return;
    let cancelled = false;
    fetchMyPlaceClaims()
      .then((list) => {
        if (!cancelled) setItems(list);
      })
      .catch(() => {
        if (!cancelled) setError("신청 내역을 불러오지 못했어요.");
      });
    return () => {
      cancelled = true;
    };
  }, [isMember]);

  return (
    <MemberPage>
      <PageHead>
        <BackButton type="button" aria-label="뒤로" onClick={() => navigate(-1)}>
          <Icon name="arrow_back" size={22} />
        </BackButton>
        <PageTitle>소유 신청 내역</PageTitle>
      </PageHead>

      {!authReady ? null : !isMember ? (
        <LoginRequired />
      ) : (
        <>
          {error && <ErrorText role="alert">{error}</ErrorText>}
          {items && items.length === 0 && (
            <Empty>
              아직 신청한 장소가 없어요.
              <br />
              프로필 &gt; 센터 등록에서 내 센터를 찾아 소유권을 요청할 수 있어요.
              <div style={{ marginTop: 12 }}>
                <SmallButton type="button" onClick={() => navigate("/center/register")}>
                  센터 등록으로 가기
                </SmallButton>
              </div>
            </Empty>
          )}
          {items?.map((c) => (
            <Card key={c.id}>
              <Head>
                <Name>{c.placeName ?? "삭제된 장소"}</Name>
                <StatusChip $tone={statusTone(c.status)}>{claimStatusLabel(c.status)}</StatusChip>
              </Head>
              <Muted>신청 {formatDateTime(c.createdAt)}</Muted>
              {c.reviewedAt && <Muted>처리 {formatDateTime(c.reviewedAt)}</Muted>}
              <Muted>연락처 {c.contact}</Muted>
              {c.hasEvidence && <Muted>증빙 {c.evidenceFileName ?? "첨부됨"}</Muted>}
              {c.status === "REJECTED" && c.rejectReason && <Reason>반려 사유: {c.rejectReason}</Reason>}
              <div style={{ marginTop: 10, display: "flex", gap: 8, flexWrap: "wrap" }}>
                <SmallButton type="button" onClick={() => navigate(`/profile/place-claims/${encodeURIComponent(c.id)}`)}>
                  상세 보기
                </SmallButton>
                {c.status === "APPROVED" && c.placeName && (
                  <SmallButton
                    type="button"
                    onClick={() => navigate(`/profile/places/${encodeURIComponent(c.placeId)}/edit`)}
                  >
                    센터 정보 수정
                  </SmallButton>
                )}
              </div>
            </Card>
          ))}
        </>
      )}
    </MemberPage>
  );
}
