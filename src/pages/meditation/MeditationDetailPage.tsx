import { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { getPlaceById, getRegionById } from "@/services/meditation/meditationService";
import FavoriteButton from "@/components/meditation/FavoriteButton";
import owlQuestionImg from "@/assets/owl-question.png";

const Page = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 0 calc(80px + env(safe-area-inset-bottom, 0px));
  color: ${({ theme }) => theme.colors.text900};

  @media (max-width: 960px) {
    padding: 0 0 calc(72px + env(safe-area-inset-bottom, 0px));
  }
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
  z-index: 10;
`;

const BackButton = styled.button`
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  color: ${({ theme }) => theme.colors.text900};
  background: transparent;
  border: none;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.radii.pill};

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary300};
    outline-offset: 2px;
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

const HeaderTitle = styled.h1`
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
`;

const HeroImage = styled.div`
  width: 100%;
  height: 280px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Content = styled.div`
  padding: 24px 20px;
`;

const TitleRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 12px;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0;
  color: ${({ theme }) => theme.colors.text900};
  flex: 1;
  min-width: 0;
`;

const LocationRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text700};
  margin-bottom: 8px;

  svg {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
  }
`;

const RatingRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.dustyGold};
  margin-bottom: 16px;

  svg {
    width: 18px;
    height: 18px;
  }
`;

const Description = styled.p`
  font-size: 1.05rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text700};
  margin: 0 0 24px;
`;

const NavRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border200};
  font-size: 1.1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text900};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primary600};
  }

  svg {
    width: 20px;
    height: 20px;
    color: ${({ theme }) => theme.colors.text700};
  }
`;

const FacilitiesSection = styled.section`
  margin-top: 28px;

  h3 {
    font-size: 1.2rem;
    margin-bottom: 16px;
    font-weight: 600;
  }
`;

const FacilityIcons = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
`;

const FacilityItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.text700};

  svg {
    width: 28px;
    height: 28px;
    color: ${({ theme }) => theme.colors.primary600};
  }
`;

const BookButton = styled.a`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: block;
  padding: 16px 20px;
  padding-bottom: calc(16px + env(safe-area-inset-bottom, 0px));
  background: ${({ theme }) => theme.colors.primary600};
  color: #fff;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s ease;
  z-index: 20;

  &:hover {
    background: ${({ theme }) => theme.colors.primary700};
    color: #fff;
  }
`;

const MapSection = styled.section`
  margin-top: 32px;

  h3 {
    font-size: 1.2rem;
    margin-bottom: 12px;
  }
`;

const MapWrap = styled.div`
  width: 100%;
  min-height: 240px;
  height: 240px;
  border-radius: ${({ theme }) => theme.radii.lg};
  background: ${({ theme }) => theme.colors.bg100};
  overflow: hidden;
  position: relative;
`;

const NotFoundWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  padding: 48px 24px;
  text-align: center;
`;

const NotFoundOwl = styled.img`
  width: 200px;
  height: auto;
  margin-bottom: 28px;
  object-fit: contain;
`;

const NotFoundMessage = styled.p`
  font-size: 1.15rem;
  color: ${({ theme }) => theme.colors.text700};
  margin: 0 0 28px;
  line-height: 1.6;
`;

const NotFoundButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 24px;
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.primary600};
  border: none;
  border-radius: ${({ theme }) => theme.radii.pill};
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary700};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary300};
    outline-offset: 2px;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const FACILITY_LABELS: Record<string, string> = {
  wifi: "Wi-Fi",
  parking: "Parking",
  tea: "Tea",
};

const defaultFacilities = ["wifi", "parking", "tea"];

const MeditationDetailPage = () => {
  const navigate = useNavigate();
  const { placeId } = useParams();
  const place = placeId ? getPlaceById(placeId) : undefined;
  const region = place ? getRegionById(place.regionId) : undefined;
  const mapRef = useRef<HTMLDivElement | null>(null);

  const facilities = place?.facilities ?? defaultFacilities;
  const programSection = place?.detailSections.find((s) =>
    s.title.toLowerCase().includes("프로그램")
  );
  const rating = place?.rating ?? 4.5;
  const reviewCount = place?.reviewCount ?? 120;

  useEffect(() => {
    if (!place) return;

    const ncpKeyId = import.meta.env.VITE_NAVER_MAP_CLIENT_ID;
    if (!ncpKeyId) {
      console.warn("VITE_NAVER_MAP_CLIENT_ID가 설정되지 않았습니다. .env에 추가해주세요.");
      return;
    }

    const initMapFromAddress = () => {
      const mapEl = document.getElementById("naver-map");
      if (!mapEl || !window.naver?.maps?.Service) return false;
      const naver = window.naver;
      const defaultCenter = new naver.maps.LatLng(37.5665, 126.978);
      const map = new naver.maps.Map(mapEl, {
        center: defaultCenter,
        zoom: 15,
        mapTypeControl: true,
      });
      const marker = new naver.maps.Marker({
        position: defaultCenter,
        map,
      });
      const searchAddress = place.address;
      const applyCoords = (lat: number, lng: number) => {
        const position = new naver.maps.LatLng(lat, lng);
        (map as { setCenter: (p: unknown) => void }).setCenter(position);
        (marker as { setPosition: (p: unknown) => void }).setPosition(position);
      };

      naver.maps.Service!.geocode({ address: searchAddress }, (status: string, response: unknown) => {
        const res = response as {
          result?: { items?: Array<{ point: { x: number; y: number } }> };
          v2?: { addresses?: Array<{ x: string; y: string }> };
          addresses?: Array<{ x: string; y: string }>;
        };
        const item = res?.result?.items?.[0];
        const addr = res?.v2?.addresses?.[0] ?? res?.addresses?.[0];
        if (item?.point != null) {
          applyCoords(item.point.y, item.point.x);
          return;
        }
        if (addr != null) {
          applyCoords(Number(addr.y), Number(addr.x));
        }
      });
      return true;
    };

    const tryInit = () => {
      if (window.naver?.maps && window.naver.maps.Service) {
        initMapFromAddress();
        return true;
      }
      return false;
    };

    if (tryInit()) return;

    const hasScript = document.querySelector('script[src*="oapi.map.naver.com"]');
    if (hasScript) {
      const id = setInterval(() => {
        if (tryInit()) clearInterval(id);
      }, 100);
      const timeout = setTimeout(() => clearInterval(id), 10000);
      return () => {
        clearInterval(id);
        clearTimeout(timeout);
      };
    }

    const callbackName = "onNaverMapsReady";
    (window as unknown as Record<string, () => void>)[callbackName] = () => {
      if (tryInit()) return;
      const fallbackId = setInterval(() => {
        if (tryInit()) clearInterval(fallbackId);
      }, 100);
    };

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${ncpKeyId}&submodules=geocoder&callback=${callbackName}`;
    script.async = true;
    document.head.appendChild(script);

    return () => {
      delete (window as unknown as Record<string, unknown>)[callbackName];
    };
  }, [place]);

  if (!place) {
    return (
      <Page>
        <Header>
          <BackButton type="button" onClick={() => navigate(-1)} aria-label="뒤로 가기">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </BackButton>
          <HeaderTitle>상세 페이지</HeaderTitle>
        </Header>
        <NotFoundWrap>
          <NotFoundOwl src={owlQuestionImg} alt="" aria-hidden />
          <NotFoundMessage>
            해당 명상센터를 찾지 못했어요.
            <br />
            URL을 확인하거나 메인에서 다시 탐색해주세요.
          </NotFoundMessage>
          <NotFoundButton type="button" onClick={() => navigate("/meditation")}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            메인으로 돌아가기
          </NotFoundButton>
        </NotFoundWrap>
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
        <HeaderTitle>상세 페이지</HeaderTitle>
      </Header>

      <HeroImage>
        <img src={place.thumbnailUrl} alt={`${place.name} 대표 이미지`} />
      </HeroImage>

      <Content>
        <TitleRow>
          <Title>{place.name}</Title>
          <FavoriteButton placeId={place.id} />
        </TitleRow>
        <LocationRow>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          {place.address}
        </LocationRow>
        <RatingRow>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          {rating.toFixed(1)} ({reviewCount} 리뷰)
        </RatingRow>
        <Description>{place.shortDescription}</Description>

        {programSection && (
          <NavRow>
            <span>프로그램</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </NavRow>
        )}
        <NavRow>
          <span>일정</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </NavRow>

        <FacilitiesSection>
          <h3>시설 정보</h3>
          <FacilityIcons>
            {facilities.map((key) => (
              <FacilityItem key={key}>
                {key === "wifi" && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12.55a11 11 0 0 1 14.08 0" />
                    <path d="M1.42 9a16 16 0 0 1 21.16 0" />
                    <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
                    <line x1="12" y1="20" x2="12.01" y2="20" />
                  </svg>
                )}
                {key === "parking" && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M3 9h18M9 21V9" />
                  </svg>
                )}
                {key === "tea" && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                    <line x1="6" y1="1" x2="6" y2="4" />
                    <line x1="10" y1="1" x2="10" y2="4" />
                    <line x1="14" y1="1" x2="14" y2="4" />
                  </svg>
                )}
                <span>{FACILITY_LABELS[key] ?? key}</span>
              </FacilityItem>
            ))}
          </FacilityIcons>
        </FacilitiesSection>

        <MapSection>
          <h3>위치</h3>
          <p style={{ marginBottom: 12, fontSize: "0.95rem" }}>
            {place.address}
          </p>
          <MapWrap id="naver-map" ref={mapRef} />
        </MapSection>
      </Content>

      <BookButton href={place.externalLink} target="_blank" rel="noreferrer">
        예약하기
      </BookButton>
    </Page>
  );
};

export default MeditationDetailPage;
