import styled from "styled-components";
import type { MeditationExpert } from "@/services/meditation/types";
import { MarkdownText } from "@/components/common/MarkdownText";
import { regionNameById } from "@/data/koreaRegions";
import AdminPreviewFrame from "@/components/admin/AdminPreviewFrame";

/**
 * 실제 전문가 상세 페이지(MeditationExpertDetailPage)와 동일한 레이아웃·스타일을
 * 폰 프레임 안에 라이트 테마로 렌더하는 관리자용 미리보기. 네비게이션/후기 시트는 정적 처리.
 * 크기 조절(드래그 zoom)은 공용 AdminPreviewFrame 이 담당.
 */

const PhoneFrame = styled.div`
  border: 6px solid #3f3f46;
  border-radius: 24px;
  overflow: hidden;
  width: 360px;
  max-height: min(76vh, 820px);
  overflow-y: auto;
  background: ${({ theme }) => theme.colors.white};
`;

const Page = styled.div`
  margin: 0 auto;
  padding: 0 0 24px;
  color: ${({ theme }) => theme.colors.text900};
`;

const TopBar = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 18px;
  position: sticky;
  top: 0;
  background: rgba(255, 255, 255, 0.95);
  z-index: 2;
  font-size: 1rem;
  font-weight: 600;
`;

const Hero = styled.div`
  padding: 8px 20px 20px;
  text-align: center;
`;

const Avatar = styled.img`
  width: 112px;
  height: 112px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid ${({ theme }) => theme.colors.primary200};
`;

const AvatarPlaceholder = styled.div`
  width: 112px;
  height: 112px;
  border-radius: 50%;
  margin: 0 auto;
  display: grid;
  place-items: center;
  background: ${({ theme }) => theme.colors.primary50};
  border: 3px solid ${({ theme }) => theme.colors.primary200};
  color: ${({ theme }) => theme.colors.primary700};
  font-size: 0.85rem;
`;

const Name = styled.h2`
  margin: 16px 0 8px;
  font-size: 1.6rem;
  font-weight: 700;
`;

const SpecList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  justify-content: center;
`;

const SpecChip = styled.span`
  font-size: 0.85rem;
  padding: 4px 10px;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme }) => theme.colors.primary50};
  color: ${({ theme }) => theme.colors.primary700};
`;

const Section = styled.section`
  padding: 0 20px 24px;
`;

const SectionTitle = styled.h3`
  margin: 0 0 10px;
  font-size: 1.15rem;
  font-weight: 700;
`;

const BodyText = styled.p`
  margin: 0;
  font-size: 1rem;
  line-height: 1.65;
  color: ${({ theme }) => theme.colors.text700};
`;

const BulletList = styled.ul`
  margin: 0;
  padding-left: 1.2em;
  color: ${({ theme }) => theme.colors.text700};
  line-height: 1.6;

  li {
    margin-bottom: 6px;
  }
`;

const ProgramCard = styled.div`
  margin-bottom: 14px;
  border: 1px solid ${({ theme }) => theme.colors.primary100};
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  background: ${({ theme }) => theme.colors.white};
`;

const ProgramImage = styled.img`
  width: 100%;
  height: 140px;
  object-fit: cover;
  display: block;
`;

const ProgramBody = styled.div`
  padding: 14px 16px;
`;

const ProgramBadge = styled.span<{ $past?: boolean }>`
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 6px;
  margin-bottom: 8px;
  background: ${({ theme, $past }) => ($past ? theme.colors.bg100 : theme.colors.primary100)};
  color: ${({ theme, $past }) => ($past ? theme.colors.text700 : theme.colors.primary700)};
`;

const ProgramTitle = styled.span`
  display: block;
  margin: 0 0 6px;
  font-size: 1.05rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text900};
`;

const ProgramDesc = styled.span`
  display: block;
  font-size: 1rem;
  line-height: 1.65;
  color: ${({ theme }) => theme.colors.text700};
`;

const Empty = styled.p`
  margin: 0;
  padding: 24px 0;
  text-align: center;
  color: #52525b;
  font-size: 13px;
`;

export default function AdminExpertPreview({ expert }: { expert: MeditationExpert | null }) {
  if (!expert) {
    return (
      <AdminPreviewFrame>
        <PhoneFrame>
          <Empty>전문가를 선택하거나 새로 입력하면 실제 화면처럼 미리보기가 표시됩니다.</Empty>
        </PhoneFrame>
      </AdminPreviewFrame>
    );
  }

  const ongoing = (expert.programs ?? []).filter((p) => p.status === "ongoing");
  const past = (expert.programs ?? []).filter((p) => p.status === "past");
  const credentials = [...(expert.degrees ?? []), ...(expert.certificates ?? [])];

  return (
    <AdminPreviewFrame>
      <PhoneFrame>
        <Page>
          <TopBar>‹ 명상 전문가</TopBar>

          <Hero>
            {expert.avatarUrl ? (
              <Avatar src={expert.avatarUrl} alt="" />
            ) : (
              <AvatarPlaceholder>사진</AvatarPlaceholder>
            )}
            <Name>{expert.name || "활동명"}</Name>
            <SpecList>
              {(expert.specialties ?? []).map((s) => (
                <SpecChip key={s}>{s}</SpecChip>
              ))}
            </SpecList>
          </Hero>

          <Section>
            <SectionTitle>자기소개</SectionTitle>
            <BodyText as="div">
              <MarkdownText
                markdown={expert.intro}
                fallback={<span style={{ color: "#9ca3af" }}>소개를 입력하세요.</span>}
              />
            </BodyText>
          </Section>

          <Section>
            <SectionTitle>학위·이수</SectionTitle>
            <BulletList>
              {credentials.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </BulletList>
          </Section>

          <Section>
            <SectionTitle>경력</SectionTitle>
            <BulletList>
              {(expert.careers ?? []).map((line) => (
                <li key={line}>{line}</li>
              ))}
            </BulletList>
          </Section>

          <Section>
            <SectionTitle>클래스·분야</SectionTitle>
            <SpecList style={{ justifyContent: "flex-start" }}>
              {(expert.classTypes ?? []).map((c) => (
                <SpecChip key={c}>{c}</SpecChip>
              ))}
            </SpecList>
          </Section>

          <Section>
            <SectionTitle>센터·활동 지역</SectionTitle>
            {expert.hasCenter ? (
              <>
                {expert.centerSummary && (
                  <BodyText style={{ marginBottom: 8 }}>{expert.centerSummary}</BodyText>
                )}
                {expert.centerAddress && <BodyText>{expert.centerAddress}</BodyText>}
              </>
            ) : (
              <BodyText>
                주 활동 지역:{" "}
                {(expert.regionIds ?? []).map(regionNameById).filter(Boolean).join(", ") || "—"}
              </BodyText>
            )}
          </Section>

          <Section>
            <SectionTitle>진행 중인 클래스</SectionTitle>
            {ongoing.length === 0 && <BodyText>현재 모집 중인 공개 일정이 없어요.</BodyText>}
            {ongoing.map((p) => (
              <ProgramCard key={p.id}>
                {p.imageUrl && <ProgramImage src={p.imageUrl} alt="" />}
                <ProgramBody>
                  <ProgramBadge>진행 중</ProgramBadge>
                  <ProgramTitle>{p.title}</ProgramTitle>
                  <ProgramDesc>{p.description}</ProgramDesc>
                </ProgramBody>
              </ProgramCard>
            ))}
          </Section>

          {past.length > 0 && (
            <Section>
              <SectionTitle>이전 프로그램</SectionTitle>
              {past.map((p) => (
                <ProgramCard key={p.id}>
                  {p.imageUrl && <ProgramImage src={p.imageUrl} alt="" />}
                  <ProgramBody>
                    <ProgramBadge $past>종료</ProgramBadge>
                    <ProgramTitle>{p.title}</ProgramTitle>
                    <ProgramDesc>{p.description}</ProgramDesc>
                  </ProgramBody>
                </ProgramCard>
              ))}
            </Section>
          )}
        </Page>
      </PhoneFrame>
    </AdminPreviewFrame>
  );
}
