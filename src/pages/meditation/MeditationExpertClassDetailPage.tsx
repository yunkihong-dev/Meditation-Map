import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { getExpertById } from "@/services/meditation/expertService";

const Page = styled.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 0 0 calc(48px + env(safe-area-inset-bottom, 0px));
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
  background: rgba(255, 255, 255, 0.96);
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
  font-size: 1.05rem;
  font-weight: 600;
  margin: 0;
  flex: 1;
  min-width: 0;
`;

const Hero = styled.div`
  width: 100%;
`;

const HeroImage = styled.img`
  width: 100%;
  max-height: 240px;
  object-fit: cover;
  display: block;
  background: ${({ theme }) => theme.colors.bg100};
`;

const Main = styled.div`
  padding: 20px 20px 28px;
`;

const Badge = styled.span<{ $past?: boolean }>`
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 8px;
  margin-bottom: 12px;
  background: ${({ theme, $past }) => ($past ? theme.colors.bg100 : theme.colors.primary100)};
  color: ${({ theme, $past }) => ($past ? theme.colors.text700 : theme.colors.primary700)};
`;

const Title = styled.h2`
  margin: 0 0 14px;
  font-size: 1.45rem;
  font-weight: 700;
  line-height: 1.3;
`;

const Body = styled.p`
  margin: 0;
  font-size: 1.05rem;
  line-height: 1.65;
  color: ${({ theme }) => theme.colors.text700};
`;

const ExpertLink = styled.button`
  margin-top: 24px;
  padding: 0;
  border: none;
  background: none;
  font-size: 0.95rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary600};
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 3px;
`;

const EmptyText = styled.p`
  padding: 32px 20px;
  color: ${({ theme }) => theme.colors.text700};
`;

const MeditationExpertClassDetailPage = () => {
  const navigate = useNavigate();
  const { expertId, programId } = useParams();
  const expert = expertId ? getExpertById(expertId) : undefined;
  const program = expert?.programs.find((p) => p.id === programId);

  if (!expert || !program) {
    return (
      <Page>
        <Header>
          <BackButton type="button" onClick={() => navigate(-1)} aria-label="뒤로 가기">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </BackButton>
          <HeaderTitle>클래스</HeaderTitle>
        </Header>
        <EmptyText>클래스 정보를 찾을 수 없어요.</EmptyText>
      </Page>
    );
  }

  return (
    <Page>
      <Header>
        <BackButton type="button" onClick={() => navigate(-1)} aria-label="뒤로 가기">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </BackButton>
        <HeaderTitle>클래스 상세</HeaderTitle>
      </Header>

      {program.imageUrl ? (
        <Hero>
          <HeroImage src={program.imageUrl} alt="" />
        </Hero>
      ) : (
        <div style={{ height: 8 }} />
      )}

      <Main>
        <Badge $past={program.status === "past"}>
          {program.status === "ongoing" ? "진행 중" : "종료된 프로그램"}
        </Badge>
        <Title>{program.title}</Title>
        <Body>{program.description}</Body>
        <ExpertLink
          type="button"
          onClick={() => navigate(`/meditation/expert/${expert.id}`)}
        >
          ← {expert.name} 프로필로 돌아가기
        </ExpertLink>
      </Main>
    </Page>
  );
};

export default MeditationExpertClassDetailPage;
