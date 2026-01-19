import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import RegionMap from "@/components/meditation/RegionMap";
import { getRegions } from "@/services/meditation/meditationService";
import { useMeditationStore } from "@/stores/meditationStore";
import { useEffect } from "react";

const Page = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 20px 64px;
  color: ${({ theme }) => theme.colors.text900};

  @media (max-width: 960px) {
    padding: 20px 14px 48px;
  }
`;

const Hero = styled.header`
  display: flex;
  justify-content: space-between;
  gap: 24px;
  align-items: center;
  margin-bottom: 32px;

  h1 {
    font-size: 2.4rem;
    margin-top: 6px;
  }

  @media (max-width: 960px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Eyebrow = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.text700};
`;

const Subtitle = styled.p`
  margin-top: 8px;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.text700};
`;

const Chips = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 32px;
`;

const Chip = styled.button<{ $active?: boolean }>`
  padding: 6px 14px;
  border-radius: ${({ theme }) => theme.radii.pill};
  border: 1px solid ${({ theme }) => theme.colors.border200};
  background: ${({ theme, $active }) => ($active ? theme.colors.primary600 : theme.colors.white)};
  color: ${({ $active }) => ($active ? "#fff" : "inherit")};
  font-size: 1.1rem;
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary300};
    outline-offset: 2px;
  }
`;

const MapSection = styled.section`
  background: ${({ theme }) => theme.colors.white};
  padding: 24px;
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadow.soft};
  animation: fadeUp 0.6s ease both;
  border: 1px solid ${({ theme }) => theme.colors.primary100};
`;

const MeditationMainPage = () => {
  const navigate = useNavigate();
  const { selectedRegionId, setRegion } = useMeditationStore();
  const regions = getRegions();

  useEffect(() => {
    setRegion(undefined);
  }, [setRegion]);

  const handleSelectRegion = (regionId: string) => {
    setRegion(regionId);
    navigate(`/meditation/region/${regionId}`);
  };

  return (
    <Page>
      <Hero>
        <div>
          <Eyebrow>어디에서 쉬고 싶나요?</Eyebrow>
          <h1>지역별 명상지 찾기</h1>
          <Subtitle>
            원하는 행정구역을 선택하면 해당 지역의 명상지를 볼 수 있어요.
          </Subtitle>
        </div>
      </Hero>

      <Chips>
        {regions.map((region) => (
          <Chip
            key={region.id}
            type="button"
            $active={selectedRegionId === region.id}
            onClick={() => handleSelectRegion(region.id)}
          >
            {region.name}
          </Chip>
        ))}
      </Chips>

      <MapSection>
        <RegionMap
          activeRegionId={selectedRegionId}
          onSelectRegion={handleSelectRegion}
        />
      </MapSection>
    </Page>
  );
};

export default MeditationMainPage;
