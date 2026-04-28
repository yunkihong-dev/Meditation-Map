import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { getExpertsByRegion } from "@/services/meditation/expertService";
import { getRegionById } from "@/services/meditation/meditationService";

const Page = styled.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 24px 16px calc(64px + env(safe-area-inset-bottom, 0px));
  color: ${({ theme }) => theme.colors.text900};
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
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

const TitleBlock = styled.div`
  flex: 1;
  min-width: 0;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 1.35rem;
  font-weight: 700;
`;

const Subtitle = styled.p`
  margin: 4px 0 0;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.text700};
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const Card = styled.button`
  display: flex;
  align-items: flex-start;
  gap: 14px;
  width: 100%;
  padding: 14px 16px;
  text-align: left;
  border: 1px solid ${({ theme }) => theme.colors.primary100};
  border-radius: ${({ theme }) => theme.radii.lg};
  background: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary300};
    box-shadow: 0 4px 16px rgba(75, 0, 130, 0.08);
  }
`;

const Avatar = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
`;

const CardBody = styled.div`
  flex: 1;
  min-width: 0;
`;

const Name = styled.h2`
  margin: 0 0 6px;
  font-size: 1.1rem;
  font-weight: 700;
`;

const Specs = styled.p`
  margin: 0;
  font-size: 0.92rem;
  color: ${({ theme }) => theme.colors.text700};
  line-height: 1.45;
`;

const Empty = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.text700};
  padding: 40px 16px;
`;

const MeditationExpertsListPage = () => {
  const navigate = useNavigate();
  const { regionId } = useParams();
  const region = regionId ? getRegionById(regionId) : undefined;
  const experts = regionId ? getExpertsByRegion(regionId) : [];

  if (!regionId || !region) {
    return (
      <Page>
        <Empty>지역 정보를 찾을 수 없어요.</Empty>
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
        <TitleBlock>
          <Title>{region.name} 명상 전문가</Title>
          <Subtitle>프로필 · 전문 분야를 확인하고 상세로 이동하세요</Subtitle>
        </TitleBlock>
      </Header>

      <List>
        {experts.length === 0 && (
          <Empty>이 지역에 등록된 명상 전문가가 아직 없어요.</Empty>
        )}
        {experts.map((e) => (
          <Card key={e.id} type="button" onClick={() => navigate(`/meditation/expert/${e.id}`)}>
            <Avatar src={e.avatarUrl} alt="" />
            <CardBody>
              <Name>{e.name}</Name>
              <Specs>{e.specialties.join(" · ")}</Specs>
            </CardBody>
          </Card>
        ))}
      </List>
    </Page>
  );
};

export default MeditationExpertsListPage;
