import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import ReviewsListSheet from "@/components/meditation/ReviewsListSheet";
import { getExpertById } from "@/services/meditation/expertService";
import { getPlaceById } from "@/services/meditation/meditationService";
import { formatFiveStarRow } from "@/services/meditation/starRating";
import type { MeditationExpert } from "@/services/meditation/types";

function findProgramForClassLabel(expert: MeditationExpert, label: string) {
  const t = label.trim();
  if (!t) return undefined;

  const explicit = expert.programs.find((p) => p.linksClassTypes?.includes(t));
  if (explicit) return explicit;

  const simplified = t.replace(/\([^)]*\)/g, " ").replace(/[·]/g, " ");
  const words = simplified
    .split(/\s+/)
    .map((w) => w.replace(/[()]/g, "").trim())
    .filter((w) => w.length >= 2);

  const haystackFor = (p: (typeof expert.programs)[0]) =>
    `${p.title} ${p.description}`.toLowerCase();

  const fuzzy = expert.programs.find((p) => {
    const hay = haystackFor(p);
    if (hay.includes(t.toLowerCase())) return true;
    return words.some((w) => hay.includes(w.toLowerCase()));
  });
  if (fuzzy) return fuzzy;

  return expert.programs.find((p) => p.status === "ongoing") ?? expert.programs[0];
}

const Page = styled.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 0 0 calc(120px + env(safe-area-inset-bottom, 0px));
  color: ${({ theme }) => theme.colors.text900};
  position: relative;
  z-index: 1;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  padding-top: calc(16px + env(safe-area-inset-top, 0px));
  position: sticky;
  top: 0;
  background: rgba(255, 255, 255, 0.95);
  z-index: 5;
`;

const BackButton = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  background: transparent;
  display: grid;
  place-items: center;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.radii.pill};

  svg {
    width: 24px;
    stroke: ${({ theme }) => theme.colors.text900};
  }
`;

const HeaderTitle = styled.h1`
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
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

const ClassChipButton = styled.button`
  font-size: 0.85rem;
  padding: 4px 10px;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme }) => theme.colors.primary50};
  color: ${({ theme }) => theme.colors.primary700};
  border: 1px solid transparent;
  cursor: pointer;
  font-family: inherit;
  transition: background 0.2s ease, border-color 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary100};
    border-color: ${({ theme }) => theme.colors.primary200};
  }

  &:disabled {
    opacity: 0.55;
    cursor: default;
  }

  &:disabled:hover {
    background: ${({ theme }) => theme.colors.primary50};
    border-color: transparent;
  }
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

/** button 내부는 phrasing만 허용 — h4·p 넣지 않음 (모바일 탭 무반응 방지) */
const ProgramCardButton = styled.button`
  display: block;
  width: 100%;
  padding: 0;
  margin-bottom: 14px;
  text-align: left;
  border: 1px solid ${({ theme }) => theme.colors.primary100};
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  background: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  font: inherit;
  color: inherit;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary300};
    box-shadow: 0 4px 14px rgba(75, 0, 130, 0.08);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary300};
    outline-offset: 2px;
  }
`;

const ProgramCardTitle = styled.span`
  display: block;
  margin: 0 0 6px;
  font-size: 1.05rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text900};
`;

const ProgramCardDesc = styled.span`
  display: block;
  font-size: 1rem;
  line-height: 1.65;
  color: ${({ theme }) => theme.colors.text700};
`;

const ProgramImage = styled.img`
  width: 100%;
  height: 140px;
  object-fit: cover;
  display: block;
  pointer-events: none;
  user-select: none;
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

const CenterLink = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 8px;
  padding: 8px 14px;
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.primary600};
  color: #fff;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
`;

const ReviewSnippet = styled.div`
  padding: 14px 16px;
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.warmCream};
  margin-bottom: 10px;
`;

const ReviewSnippetAuthor = styled.p`
  margin: 0 0 6px;
  font-size: 0.9rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text900};
`;

const ReviewSnippetText = styled.p`
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.55;
  color: ${({ theme }) => theme.colors.text700};
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const OpenAllReviewsBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 4px;
  padding: 12px 14px;
  border: 1px solid ${({ theme }) => theme.colors.primary300};
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary700};
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;
  font-family: inherit;
  -webkit-tap-highlight-color: transparent;
  transition: background 0.2s ease, border-color 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary50};
    border-color: ${({ theme }) => theme.colors.primary600};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary300};
    outline-offset: 2px;
  }
`;

const EmptyReviews = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.text700};
  font-size: 0.95rem;
`;

const MeditationExpertDetailPage = () => {
  const navigate = useNavigate();
  const { expertId } = useParams();
  const expert = expertId ? getExpertById(expertId) : undefined;
  const linkedPlace = expert?.centerPlaceId ? getPlaceById(expert.centerPlaceId) : undefined;
  const [allReviewsOpen, setAllReviewsOpen] = useState(false);

  if (!expert) {
    return (
      <Page>
        <Header>
          <BackButton type="button" onClick={() => navigate(-1)} aria-label="뒤로 가기">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </BackButton>
          <HeaderTitle>전문가</HeaderTitle>
        </Header>
        <Section>
          <BodyText>프로필을 찾을 수 없어요.</BodyText>
        </Section>
      </Page>
    );
  }

  const ongoing = expert.programs.filter((p) => p.status === "ongoing");
  const past = expert.programs.filter((p) => p.status === "past");

  return (
    <Page>
      <Header>
        <BackButton type="button" onClick={() => navigate(-1)} aria-label="뒤로 가기">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </BackButton>
        <HeaderTitle>명상 전문가</HeaderTitle>
      </Header>

      <Hero>
        <Avatar src={expert.avatarUrl} alt="" />
        <Name>{expert.name}</Name>
        <SpecList>
          {expert.specialties.map((s) => (
            <SpecChip key={s}>{s}</SpecChip>
          ))}
        </SpecList>
      </Hero>

      <Section>
        <SectionTitle>자기소개</SectionTitle>
        <BodyText>{expert.intro}</BodyText>
      </Section>

      <Section>
        <SectionTitle>학위·이수</SectionTitle>
        <BulletList>
          {[...expert.degrees, ...expert.certificates].map((line) => (
            <li key={line}>{line}</li>
          ))}
        </BulletList>
      </Section>

      <Section>
        <SectionTitle>경력</SectionTitle>
        <BulletList>
          {expert.careers.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </BulletList>
      </Section>

      <Section>
        <SectionTitle>클래스·분야</SectionTitle>
        <SpecList style={{ justifyContent: "flex-start" }}>
          {expert.classTypes.map((c) => {
            const linked = findProgramForClassLabel(expert, c);
            return (
              <ClassChipButton
                key={c}
                type="button"
                disabled={!linked}
                title={linked ? `${linked.title} 상세 보기` : "등록된 클래스가 없어요"}
                onClick={() => {
                  if (!linked) return;
                  navigate(`/meditation/expert/${expert.id}/class/${linked.id}`);
                }}
              >
                {c}
              </ClassChipButton>
            );
          })}
        </SpecList>
      </Section>

      <Section>
        <SectionTitle>센터·활동 지역</SectionTitle>
        {expert.hasCenter && expert.centerSummary && (
          <BodyText style={{ marginBottom: 8 }}>{expert.centerSummary}</BodyText>
        )}
        {expert.hasCenter && expert.centerPlaceId && linkedPlace && (
          <CenterLink
            type="button"
            onClick={() => navigate(`/meditation/place/${expert.centerPlaceId}`)}
          >
            연결된 명상지 보기 — {linkedPlace.name}
          </CenterLink>
        )}
        {!expert.hasCenter && expert.activityAreas && expert.activityAreas.length > 0 && (
          <BodyText>주 활동 반경: {expert.activityAreas.join(", ")}</BodyText>
        )}
      </Section>

      <Section>
        <SectionTitle>진행 중인 클래스</SectionTitle>
        {ongoing.length === 0 && <BodyText>현재 모집 중인 공개 일정이 없어요.</BodyText>}
        {ongoing.map((p) => (
          <ProgramCardButton
            key={p.id}
            type="button"
            aria-label={`${p.title} 클래스 상세`}
            onClick={() =>
              navigate(`/meditation/expert/${expert.id}/class/${p.id}`)
            }
          >
            {p.imageUrl && <ProgramImage src={p.imageUrl} alt="" draggable={false} />}
            <ProgramBody>
              <ProgramBadge>진행 중</ProgramBadge>
              <ProgramCardTitle>{p.title}</ProgramCardTitle>
              <ProgramCardDesc>{p.description}</ProgramCardDesc>
            </ProgramBody>
          </ProgramCardButton>
        ))}
      </Section>

      {past.length > 0 && (
        <Section>
          <SectionTitle>이전 프로그램</SectionTitle>
          {past.map((p) => (
            <ProgramCardButton
              key={p.id}
              type="button"
              aria-label={`${p.title} 클래스 상세`}
              onClick={() =>
                navigate(`/meditation/expert/${expert.id}/class/${p.id}`)
              }
            >
              {p.imageUrl && <ProgramImage src={p.imageUrl} alt="" draggable={false} />}
              <ProgramBody>
                <ProgramBadge $past>종료</ProgramBadge>
                <ProgramCardTitle>{p.title}</ProgramCardTitle>
                <ProgramCardDesc>{p.description}</ProgramCardDesc>
              </ProgramBody>
            </ProgramCardButton>
          ))}
        </Section>
      )}

      {expert.reviews.length > 0 && (
        <Section>
          <SectionTitle>후기</SectionTitle>
          {expert.reviews.slice(0, 2).map((r, i) => (
            <ReviewSnippet key={`${r.author}-${i}`}>
              <ReviewSnippetAuthor>
                {r.author}
                {r.rating != null ? ` · ${formatFiveStarRow(r.rating)}` : ""}
              </ReviewSnippetAuthor>
              <ReviewSnippetText>{r.body}</ReviewSnippetText>
            </ReviewSnippet>
          ))}
          {expert.reviews.length > 2 && (
            <EmptyReviews style={{ marginBottom: 10 }}>
              외 {expert.reviews.length - 2}건의 후기가 더 있어요.
            </EmptyReviews>
          )}
          <OpenAllReviewsBtn type="button" onClick={() => setAllReviewsOpen(true)}>
            전체 후기 보기 · {expert.reviews.length}건
          </OpenAllReviewsBtn>
        </Section>
      )}
      <ReviewsListSheet
        open={allReviewsOpen}
        onClose={() => setAllReviewsOpen(false)}
        heading="후기"
        reviews={expert.reviews}
      />
    </Page>
  );
};

export default MeditationExpertDetailPage;
