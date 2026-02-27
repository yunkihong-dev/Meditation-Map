import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import { getPlaceById, getRegionById } from "@/services/meditation/meditationService";
import FavoriteButton from "@/components/meditation/FavoriteButton";

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

const Description = styled.p`
  font-size: 1.05rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text700};
  margin: 0 0 24px;
`;

const AccordionWrap = styled.div``;

const AccordionItem = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border200};

  &:last-child {
    border-bottom: none;
  }
`;

const AccordionHeader = styled.button<{ $open?: boolean }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  font-size: 1.1rem;
  font-weight: 500;
  color: ${({ theme, $open }) => ($open ? theme.colors.primary600 : theme.colors.text900)};
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;

  &:hover {
    color: ${({ theme }) => theme.colors.primary600};
  }

  svg {
    width: 20px;
    height: 20px;
    color: ${({ theme }) => theme.colors.text700};
    transform: ${({ $open }) => ($open ? "rotate(90deg)" : "none")};
    transition: transform 0.2s ease;
  }
`;

const AccordionBodyWrap = styled.div<{ $open?: boolean }>`
  display: grid;
  grid-template-rows: ${({ $open }) => ($open ? "1fr" : "0fr")};
  transition: grid-template-rows 0.3s ease;
  overflow: hidden;
`;

const AccordionBodyInner = styled.div`
  overflow: hidden;
`;

const AccordionBody = styled.div`
  padding: 0 0 16px;
  font-size: 1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text700};

  p {
    margin: 0 0 0.75em;
    &:last-child {
      margin-bottom: 0;
    }
  }
  ul, ol {
    margin: 0 0 0.75em;
    padding-left: 1.25em;
  }
  li {
    margin-bottom: 0.25em;
  }
  strong {
    font-weight: 600;
  }
  h1, h2, h3 {
    font-size: 1.1rem;
    font-weight: 600;
    margin: 1em 0 0.5em;
  }
  h1:first-child, h2:first-child, h3:first-child {
    margin-top: 0;
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

const MapAddressRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
  flex-wrap: wrap;
`;

const MapAddressButton = styled.button`
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.text700};
  background: rgba(0, 0, 0, 0.04);
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  cursor: pointer;
  text-align: left;
  transition: color 0.2s, background 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary600};
    background: rgba(0, 0, 0, 0.06);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary300};
    outline-offset: 2px;
    border-radius: 4px;
  }

  svg {
    flex-shrink: 0;
    width: 16px;
    height: 16px;
    opacity: 0.6;
  }

  &:hover svg {
    opacity: 1;
  }
`;

const MapAddressText = styled.span`
  flex: 1;
  min-width: 0;
`;

const NavButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  font-size: 0.9rem;
  font-weight: 600;
  color: #fff;
  background: ${({ theme }) => theme.colors.primary600};
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  text-decoration: none;
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.2s ease, transform 0.1s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary700};
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary300};
    outline-offset: 2px;
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;

const CopyToast = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  pointer-events: none;
`;

const CopyToastInner = styled.div`
  padding: 16px 24px;
  font-size: 1rem;
  font-weight: 500;
  color: #fff;
  background: rgba(0, 0, 0, 0.8);
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  animation: fadeInOut 2s ease forwards;

  @keyframes fadeInOut {
    0% {
      opacity: 0;
      transform: scale(0.95);
    }
    15% {
      opacity: 1;
      transform: scale(1);
    }
    85% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: scale(0.95);
    }
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
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 24px;
  text-align: center;
  background: linear-gradient(180deg, ${({ theme }) => theme.colors.primary50} 0%, ${({ theme }) => theme.colors.warmCream} 100%);
`;

const NotFoundTitle3D = styled.div`
  font-size: clamp(4rem, 15vw, 8rem);
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.02em;
  background: linear-gradient(180deg, ${({ theme }) => theme.colors.primary300} 0%, ${({ theme }) => theme.colors.primary500} 40%, ${({ theme }) => theme.colors.primary600} 70%, ${({ theme }) => theme.colors.primary800} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 2px 2px rgba(75, 0, 130, 0.25))
          drop-shadow(0 4px 4px rgba(75, 0, 130, 0.15))
          drop-shadow(0 8px 16px rgba(0, 0, 0, 0.1));
  transform: perspective(200px) rotateX(5deg);
  margin-bottom: 12px;
`;

const NotFoundMessage = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.primary400};
  margin: 0 0 24px;
  line-height: 1.6;
`;

const NotFoundButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 24px;
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  background: ${({ theme }) => theme.colors.primary600};
  border: none;
  border-radius: ${({ theme }) => theme.radii.pill};
  cursor: pointer;
  transition: background 0.2s ease, transform 0.15s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary700};
    transform: translateY(-1px);
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
  const scheduleSection = place?.detailSections.find((s) =>
    s.title.toLowerCase().includes("일정")
  );
  const noticeSection = place?.detailSections.find((s) =>
    s.title.toLowerCase().includes("유의사항")
  );
  const prepSection = place?.detailSections.find((s) =>
    s.title.toLowerCase().includes("준비물")
  );
  const [openTab, setOpenTab] = useState<string | null>(null);
  const [addressCopied, setAddressCopied] = useState(false);

  const copyAddress = () => {
    if (!place) return;
    navigator.clipboard.writeText(place.address).then(() => {
      setAddressCopied(true);
      setTimeout(() => setAddressCopied(false), 2000);
    });
  };

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
        zoom: 17,
        mapTypeControl: true,
      });

      const showAt = (lat: number, lng: number) => {
        const position = new naver.maps.LatLng(lat, lng);
        (map as { setCenter: (p: unknown) => void }).setCenter(position);
        new naver.maps.Marker({ position, map });
      };

      const isValidCoord = (lat: number, lng: number) =>
        Number.isFinite(lat) && Number.isFinite(lng);

      naver.maps.Service!.geocode({ address: place.address }, (status: string | number, response: unknown) => {
        if (status === "ERROR") {
          console.warn(`[지도] 주소 변환 실패 - "${place.name}" (${place.address}): status=${status}`);
          showAt(37.5665, 126.978);
          return;
        }

        const res = response as Record<string, unknown>;
        const parseNum = (v: unknown): number => (typeof v === "number" ? v : parseFloat(String(v ?? "")));

        let lat: number | null = null;
        let lng: number | null = null;

        const items = (res?.result as { items?: Array<{ point?: { x?: unknown; y?: unknown } }> } | undefined)?.items ?? [];
        const item = items.find((i) => (i as { isRoadAddress?: boolean }).isRoadAddress) ?? items[0];
        if (item?.point) {
          lat = parseNum(item.point.y);
          lng = parseNum(item.point.x);
        }
        if ((lat == null || lng == null || !isValidCoord(lat, lng)) && items.length > 0) {
          const first = items[0];
          if (first?.point) {
            lat = parseNum(first.point.y);
            lng = parseNum(first.point.x);
          }
        }
        if (lat == null || lng == null || !isValidCoord(lat, lng)) {
          const addr =
            (res?.v2 as { addresses?: Array<{ x?: unknown; y?: unknown }> } | undefined)?.addresses?.[0] ??
            (res?.addresses as Array<{ x?: unknown; y?: unknown }> | undefined)?.[0];
          if (addr) {
            lat = parseNum(addr.y);
            lng = parseNum(addr.x);
          }
        }

        if (lat != null && lng != null && isValidCoord(lat, lng)) {
          showAt(lat, lng);
        } else {
          showAt(37.5665, 126.978);
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
          <NotFoundTitle3D>404</NotFoundTitle3D>
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
      {addressCopied && (
        <CopyToast>
          <CopyToastInner>주소를 복사했습니다</CopyToastInner>
        </CopyToast>
      )}
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
        <Description>{place.shortDescription}</Description>

        <AccordionWrap>
          {programSection && (
            <AccordionItem>
              <AccordionHeader
                type="button"
                $open={openTab === "program"}
                onClick={() => setOpenTab(openTab === "program" ? null : "program")}
              >
                <span>프로그램</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </AccordionHeader>
              <AccordionBodyWrap $open={openTab === "program"}>
                <AccordionBodyInner>
                  <AccordionBody>
                    <ReactMarkdown>{programSection.body}</ReactMarkdown>
                  </AccordionBody>
                </AccordionBodyInner>
              </AccordionBodyWrap>
            </AccordionItem>
          )}
          <AccordionItem>
            <AccordionHeader
              type="button"
              $open={openTab === "schedule"}
              onClick={() => setOpenTab(openTab === "schedule" ? null : "schedule")}
            >
              <span>일정</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </AccordionHeader>
            <AccordionBodyWrap $open={openTab === "schedule"}>
              <AccordionBodyInner>
                <AccordionBody>
                  {scheduleSection?.body ? (
                    <ReactMarkdown>{scheduleSection.body}</ReactMarkdown>
                  ) : (
                    <>
                      소요 시간: {place.duration}
                      {place.organization?.name && (
                        <p style={{ marginTop: 8, marginBottom: 0 }}>
                          운영: {place.organization.name}
                        </p>
                      )}
                    </>
                  )}
                </AccordionBody>
              </AccordionBodyInner>
            </AccordionBodyWrap>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader
              type="button"
              $open={openTab === "prep"}
              onClick={() => setOpenTab(openTab === "prep" ? null : "prep")}
            >
              <span>준비물</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </AccordionHeader>
            <AccordionBodyWrap $open={openTab === "prep"}>
              <AccordionBodyInner>
                <AccordionBody>
                  {prepSection?.body ? (
                    <ReactMarkdown>{prepSection.body}</ReactMarkdown>
                  ) : (
                    "등록된 준비물이 없습니다."
                  )}
                </AccordionBody>
              </AccordionBodyInner>
            </AccordionBodyWrap>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader
              type="button"
              $open={openTab === "notice"}
              onClick={() => setOpenTab(openTab === "notice" ? null : "notice")}
            >
              <span>유의사항</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </AccordionHeader>
            <AccordionBodyWrap $open={openTab === "notice"}>
              <AccordionBodyInner>
                <AccordionBody>
                  {noticeSection?.body ? (
                    <ReactMarkdown>{noticeSection.body}</ReactMarkdown>
                  ) : (
                    "등록된 유의사항이 없습니다."
                  )}
                </AccordionBody>
              </AccordionBodyInner>
            </AccordionBodyWrap>
          </AccordionItem>
        </AccordionWrap>

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
          <MapAddressRow>
            <MapAddressButton type="button" onClick={copyAddress} title="클릭하여 주소 복사">
              <MapAddressText>{place.address}</MapAddressText>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
            </MapAddressButton>
            <NavButton
              href={`https://map.naver.com/v5/search/${encodeURIComponent(place.address)}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              안내
            </NavButton>
          </MapAddressRow>
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
