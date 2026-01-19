import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { getPlaceById, getRegionById } from "@/services/meditation/meditationService";

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

const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 12px 0 16px;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text700};
`;

const LinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.primary600};
  color: #fff;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 24px rgba(103, 59, 183, 0.35);
  }
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.primary600};
  color: #fff;
  font-size: 1rem;
  border: none;
  cursor: pointer;
`;

const ImageWrap = styled.div`
  img {
    width: 320px;
    height: 240px;
    object-fit: cover;
    border-radius: ${({ theme }) => theme.radii.lg};

    @media (max-width: 960px) {
      width: 100%;
      height: auto;
    }
  }
`;

const Section = styled.section`
  margin-top: 32px;

  h2 {
    font-size: 1.6rem;
    margin-bottom: 12px;
  }
`;

const DetailGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
`;

const DetailCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: 16px;
  border-radius: 14px;
  box-shadow: ${({ theme }) => theme.shadow.soft};
`;

const MapWrap = styled.div`
  iframe {
    width: 100%;
    height: 320px;
    border: none;
    border-radius: ${({ theme }) => theme.radii.lg};
    background: ${({ theme }) => theme.colors.bg100};
  }
`;

const OrgSection = styled.section`
  margin-top: 40px;
`;

const OrgInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  background: ${({ theme }) => theme.colors.white};
  padding: 18px;
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadow.soft};
`;

const OrgLogo = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 12px;
  object-fit: cover;
`;

const OrgName = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 6px;
`;

const Empty = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.text700};
`;

const MeditationDetailPage = () => {
  const { placeId } = useParams();
  const place = placeId ? getPlaceById(placeId) : undefined;
  const region = place ? getRegionById(place.regionId) : undefined;

  if (!place) {
    return (
      <Page>
        <Empty>해당 명상지를 찾지 못했어요.</Empty>
        <BackLink to="/meditation">메인으로 돌아가기</BackLink>
      </Page>
    );
  }

  const mapQuery = encodeURIComponent(place.address);
  const mapUrl = `https://map.naver.com/p/search/${mapQuery}`;

  return (
    <Page>
      <Hero>
        <ImageWrap>
          <img src={place.thumbnailUrl} alt={`${place.name} 대표 이미지`} />
        </ImageWrap>
        <div>
          <Eyebrow>
            {region?.name ?? "지역"} · {place.duration}
          </Eyebrow>
          <h1>{place.name}</h1>
          <Subtitle>{place.shortDescription}</Subtitle>
          <TagRow>
            {place.hashtags.map((tag) => (
              <span key={tag}>#{tag}</span>
            ))}
          </TagRow>
          <LinkButton href={place.externalLink} target="_blank" rel="noreferrer">
            바로가기
          </LinkButton>
        </div>
      </Hero>

      <Section>
        <h2>상세 설명</h2>
        <p>{place.description}</p>
      </Section>

      <Section>
        <h2>프로그램 상세</h2>
        <DetailGrid>
          {place.detailSections.map((section) => (
            <DetailCard key={section.title}>
              <h3>{section.title}</h3>
              <p>{section.body}</p>
            </DetailCard>
          ))}
        </DetailGrid>
      </Section>

      <Section>
        <h2>위치 안내</h2>
        <p>{place.address}</p>
        <MapWrap>
          <iframe
            title="네이버 지도"
            src={mapUrl}
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </MapWrap>
      </Section>

      <OrgSection>
        <OrgInfo>
          <OrgLogo src={place.organization.logoUrl} alt={`${place.organization.name} 로고`} />
          <div>
            <OrgName>{place.organization.name}</OrgName>
            <a href={place.organization.website} target="_blank" rel="noreferrer">
              운영 단체 홈페이지
            </a>
          </div>
        </OrgInfo>
      </OrgSection>
    </Page>
  );
};

export default MeditationDetailPage;
