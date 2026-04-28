import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { getExpertById } from "@/services/meditation/expertService";
import { getPlaceById } from "@/services/meditation/meditationService";

const Page = styled.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 0 0 calc(88px + env(safe-area-inset-bottom, 0px));
  color: ${({ theme }) => theme.colors.text900};
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

const ProgramCard = styled.article`
  border: 1px solid ${({ theme }) => theme.colors.primary100};
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  margin-bottom: 14px;
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

const ProgramTitle = styled.h4`
  margin: 0 0 6px;
  font-size: 1.05rem;
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

const ReviewCard = styled.div`
  padding: 14px 16px;
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.warmCream};
  margin-bottom: 10px;
`;

const ReviewAuthor = styled.p`
  margin: 0 0 6px;
  font-size: 0.9rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text900};
`;

const ReviewBody = styled.p`
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.55;
  color: ${({ theme }) => theme.colors.text700};
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
          {expert.classTypes.map((c) => (
            <SpecChip key={c}>{c}</SpecChip>
          ))}
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
          <ProgramCard key={p.id}>
            {p.imageUrl && <ProgramImage src={p.imageUrl} alt="" />}
            <ProgramBody>
              <ProgramBadge>진행 중</ProgramBadge>
              <ProgramTitle>{p.title}</ProgramTitle>
              <BodyText>{p.description}</BodyText>
            </ProgramBody>
          </ProgramCard>
        ))}
      </Section>

      <Section>
        <SectionTitle>이전 프로그램</SectionTitle>
        {past.length === 0 && <BodyText>아직 공개된 이력이 없어요.</BodyText>}
        {past.map((p) => (
          <ProgramCard key={p.id}>
            {p.imageUrl && <ProgramImage src={p.imageUrl} alt="" />}
            <ProgramBody>
              <ProgramBadge $past>종료</ProgramBadge>
              <ProgramTitle>{p.title}</ProgramTitle>
              <BodyText>{p.description}</BodyText>
            </ProgramBody>
          </ProgramCard>
        ))}
      </Section>

      <Section>
        <SectionTitle>후기</SectionTitle>
        {expert.reviews.length === 0 && <EmptyReviews>등록된 후기가 없어요.</EmptyReviews>}
        {expert.reviews.map((r, i) => (
          <ReviewCard key={`${r.author}-${i}`}>
            <ReviewAuthor>
              {r.author}
              {r.rating != null ? ` · ${"★".repeat(r.rating)}` : ""}
            </ReviewAuthor>
            <ReviewBody>{r.body}</ReviewBody>
          </ReviewCard>
        ))}
      </Section>
    </Page>
  );
};

export default MeditationExpertDetailPage;
