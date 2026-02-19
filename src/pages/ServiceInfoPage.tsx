import { Link } from "react-router-dom";
import styled from "styled-components";

const Page = styled.div`
  color: ${({ theme }) => theme.colors.text900};
`;

const Section = styled.section`
  padding: 48px 20px;

  @media (max-width: 960px) {
    padding: 36px 14px;
  }
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const Hero = styled.section`
  padding: 64px 20px calc(56px + env(safe-area-inset-bottom, 0px));
  background: linear-gradient(180deg, #ffffff 0%, ${({ theme }) => theme.colors.primary50} 100%);

  @media (max-width: 960px) {
    padding: 48px 14px calc(40px + env(safe-area-inset-bottom, 0px));
  }
`;

const HeroCard = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 36px;
  box-shadow: ${({ theme }) => theme.shadow.soft};
  border: 1px solid ${({ theme }) => theme.colors.primary100};
  display: grid;
  gap: 16px;
`;

const Title = styled.h1`
  font-size: 3rem;
  line-height: 1.3;
`;

const Subtitle = styled.p`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.text700};
`;

const PrimaryButton = styled(Link)`
  justify-self: start;
  border: none;
  background: ${({ theme }) => theme.colors.primary600};
  color: #fff;
  padding: 10px 16px;
  border-radius: ${({ theme }) => theme.radii.md};
  cursor: pointer;
  font-size: 1.1rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  text-decoration: none;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 26px rgba(103, 59, 183, 0.3);
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.primary100};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 18px;
  box-shadow: ${({ theme }) => theme.shadow.soft};
`;

const StatLabel = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.text700};
`;

const StatValue = styled.p`
  font-size: 2.2rem;
  font-weight: 700;
  margin-top: 8px;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.primary100};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 24px;
  box-shadow: ${({ theme }) => theme.shadow.soft};
  display: grid;
  gap: 10px;
`;

const FeatureIcon = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.primary100};
  display: grid;
  place-items: center;

  svg {
    width: 22px;
    height: 22px;
    stroke: ${({ theme }) => theme.colors.primary700};
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    fill: none;
  }
`;

const Band = styled.section`
  padding: 48px 20px;
  background: ${({ theme }) => theme.colors.primary600};
  color: #fff;
`;

const BandInner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 960px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const BandButton = styled.button`
  border: none;
  background: #fff;
  color: ${({ theme }) => theme.colors.primary700};
  padding: 10px 18px;
  border-radius: ${({ theme }) => theme.radii.md};
  cursor: pointer;
  font-size: 1.1rem;
`;

const ServiceInfoPage = () => {
  return (
    <Page>
      <Hero>
        <HeroCard>
          <Title>누구나 원하는 곳에서, 더 깊은 힐링 명상</Title>
          <Subtitle>
            전국 힐링명상지도는 지역별 명상센터를 쉽고 빠르게 찾을 수 있는 플랫폼입니다.
          </Subtitle>
          <PrimaryButton to="/">명상센터 찾아보기</PrimaryButton>
        </HeroCard>
      </Hero>

      <Section>
        <Container>
          <StatsGrid>
            <StatCard>
              <StatLabel>누적 명상센터</StatLabel>
              <StatValue>1,200+</StatValue>
            </StatCard>
            <StatCard>
              <StatLabel>지역 커버리지</StatLabel>
              <StatValue>전국 17개</StatValue>
            </StatCard>
            <StatCard>
              <StatLabel>누적 검색 수</StatLabel>
              <StatValue>210만+</StatValue>
            </StatCard>
          </StatsGrid>
        </Container>
      </Section>

      <Section>
        <Container>
          <FeatureGrid>
            <FeatureCard>
              <FeatureIcon>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M3 11l9-7 9 7" />
                  <path d="M5 10v10h14V10" />
                </svg>
              </FeatureIcon>
              <h3>지도 기반 탐색</h3>
              <p>대한민국 지도로 지역을 선택하고, 명상센터를 한눈에 찾아보세요.</p>
            </FeatureCard>
            <FeatureCard>
              <FeatureIcon>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4 6h16M4 12h10M4 18h6" />
                </svg>
              </FeatureIcon>
              <h3>맞춤형 필터</h3>
              <p>해시태그와 정렬 기준으로 내게 맞는 명상센터를 빠르게 추천해요.</p>
            </FeatureCard>
            <FeatureCard>
              <FeatureIcon>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="8" r="3" />
                  <path d="M6 20c1.5-3 4-5 6-5s4.5 2 6 5" />
                </svg>
              </FeatureIcon>
              <h3>상세 정보 제공</h3>
              <p>주소, 프로그램, 운영 단체 정보까지 한 페이지에서 확인하세요.</p>
            </FeatureCard>
            <FeatureCard>
              <FeatureIcon>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="10" cy="10" r="6" />
                  <line x1="14.5" y1="14.5" x2="21" y2="21" />
                </svg>
              </FeatureIcon>
              <h3>검색 경험</h3>
              <p>검색어 입력만으로 관련 명상센터를 부드럽게 이어 보여드립니다.</p>
            </FeatureCard>
          </FeatureGrid>
        </Container>
      </Section>

      <Band>
        <BandInner>
          <div>
            <h2>명상센터 운영자라면 함께해요</h2>
            <p>전국 힐링명상지도와 함께 더 많은 사람에게 명상 경험을 전달하세요.</p>
          </div>
          <BandButton type="button">등록 문의하기</BandButton>
        </BandInner>
      </Band>

    </Page>
  );
};

export default ServiceInfoPage;
