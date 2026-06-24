import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import { MarkdownText } from "@/components/common/MarkdownText";
import { fetchPlaceById, getRegionById } from "@/services/meditation/meditationService";
import FavoriteButton from "@/components/meditation/FavoriteButton";
import PlaceProgramsModal, {
  ProgramPhotoExpandOverlay,
  useProgramGalleryLoop,
} from "@/components/meditation/PlaceProgramsModal";
import type { MeditationPlace } from "@/services/meditation/types";
import { buildPlaceHeroGalleryUrls } from "@/services/meditation/placeGallery";

export { buildPlaceHeroGalleryUrls };

const Page = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 0 calc(28px + env(safe-area-inset-bottom, 0px));
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

const HeroImage = styled.button`
  display: block;
  width: 100%;
  height: 280px;
  padding: 0;
  border: none;
  background: ${({ theme }) => theme.colors.bg100};
  overflow: hidden;
  cursor: zoom-in;
  -webkit-tap-highlight-color: transparent;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary300};
    outline-offset: -2px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    pointer-events: none;
  }
`;

const DetailHeroCarousel = styled.div`
  position: relative;
  width: 100%;
  height: 280px;
  background: ${({ theme }) => theme.colors.bg100};
`;

const DetailHeroZoomBtn = styled.button`
  display: block;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  border: none;
  background: transparent;
  font: inherit;
  cursor: zoom-in;
  -webkit-tap-highlight-color: transparent;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary300};
    outline-offset: -2px;
  }
`;

const DetailHeroViewportRef = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  touch-action: pan-y pinch-zoom;
`;

const DetailHeroTrack = styled.div`
  display: flex;
  height: 100%;
  will-change: transform;
`;

const DetailHeroSlide = styled.div`
  flex-shrink: 0;
  height: 100%;
`;

const DetailHeroSlideImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  pointer-events: none;
  user-select: none;
`;

const DetailHeroNav = styled.div`
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  gap: 6px;
  pointer-events: none;

  & > * {
    pointer-events: auto;
  }
`;

const DetailHeroDot = styled.button<{ $active?: boolean }>`
  width: 7px;
  height: 7px;
  padding: 0;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  background: ${({ $active }) => ($active ? "#fff" : "rgba(255,255,255,0.45)")};
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.2);
  -webkit-tap-highlight-color: transparent;

  &:focus-visible {
    outline: 2px solid #fff;
    outline-offset: 2px;
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

const Description = styled.div`
  font-size: 1.05rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text700};
  margin: 0 0 24px;
`;

const ProgramsPreviewSection = styled.section`
  margin: 0 0 28px;
`;

const ProgramsPreviewLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 12px;
`;

const ProgramsPreviewHeading = styled.h3`
  margin: 0;
  font-size: 1.15rem;
  font-weight: 700;
`;

const ProgramsPreviewTitleBlock = styled.div`
  min-width: 0;
`;

const ProgramsPreviewSubline = styled.p`
  margin: 6px 0 0;
  font-size: 0.88rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text700};
`;

const ProgramsPastOnlyEntry = styled.button`
  width: 100%;
  padding: 14px 18px;
  border: 1px solid ${({ theme }) => theme.colors.border200};
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.bg100};
  color: ${({ theme }) => theme.colors.text900};
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  text-align: center;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary300};
    outline-offset: 2px;
  }
`;

const VenueKindTag = styled.span`
  font-size: 0.75rem;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme }) => theme.colors.primary100};
  color: ${({ theme }) => theme.colors.primary700};
`;

const ProgramsPhotoStrip = styled.div`
  display: flex;
  gap: 12px;
  overflow-x: auto;
  padding: 4px 0 12px;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x mandatory;

  &::-webkit-scrollbar {
    height: 4px;
  }
`;

const ProgramThumbBtn = styled.button`
  flex-shrink: 0;
  width: 120px;
  padding: 0;
  border: none;
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  cursor: pointer;
  scroll-snap-align: start;
  background: ${({ theme }) => theme.colors.bg100};
  box-shadow: 0 2px 12px rgba(75, 0, 130, 0.08);

  img {
    width: 120px;
    height: 120px;
    object-fit: cover;
    display: block;
  }
`;

const ProgramThumbCaption = styled.span`
  display: block;
  padding: 8px;
  font-size: 0.8rem;
  font-weight: 600;
  text-align: left;
  line-height: 1.35;
  color: ${({ theme }) => theme.colors.text900};
  background: ${({ theme }) => theme.colors.white};
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


const MeditationDetailPage = () => {
  const navigate = useNavigate();
  const { placeId } = useParams();
  const [place, setPlace] = useState<MeditationPlace | undefined>();
  const [detailLoading, setDetailLoading] = useState(true);
  const [detailError, setDetailError] = useState<string | null>(null);

  useEffect(() => {
    if (!placeId) {
      setPlace(undefined);
      setDetailLoading(false);
      setDetailError(null);
      return;
    }
    let cancelled = false;
    setDetailLoading(true);
    setDetailError(null);
    void fetchPlaceById(placeId)
      .then((p) => {
        if (cancelled) return;
        if (p) {
          setPlace(p);
          setDetailError(null);
        } else {
          setPlace(undefined);
          setDetailError("not_found");
        }
        setDetailLoading(false);
      })
      .catch(() => {
        if (cancelled) return;
        setPlace(undefined);
        setDetailError("network");
        setDetailLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [placeId]);

  const region = place ? getRegionById(place.regionId) : undefined;
  const mapRef = useRef<HTMLDivElement | null>(null);

  const facilities = place?.facilities ?? [];
  const noticeSection = place?.detailSections?.find((s) =>
    s.title.toLowerCase().includes("유의사항")
  );
  const [openTab, setOpenTab] = useState<string | null>(null);
  const [addressCopied, setAddressCopied] = useState(false);
  const [programsModalOpen, setProgramsModalOpen] = useState(false);
  const [modalInitialProgramId, setModalInitialProgramId] = useState<string | undefined>();
  const [photoExpand, setPhotoExpand] = useState<{
    urls: string[];
    initialLoopIndex: number;
  } | null>(null);

  const heroGalleryUrls = useMemo(
    () => (place ? buildPlaceHeroGalleryUrls(place) : []),
    [place]
  );
  const heroMeasureActive = Boolean(place) && heroGalleryUrls.length > 1;
  const detailHero = useProgramGalleryLoop(heroGalleryUrls, heroMeasureActive);

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
        scrollWheel: true,
        mapTypeControl: true,
      });

      const showAt = (lat: number, lng: number) => {
        const position = new naver.maps.LatLng(lat, lng);
        (map as { setCenter: (p: unknown) => void }).setCenter(position);
        new naver.maps.Marker({ position, map });
      };

      const isValidCoord = (lat: number, lng: number) =>
        Number.isFinite(lat) && Number.isFinite(lng);

      // 관리자가 보정한 저장 좌표가 있으면 지오코딩 없이 그 위치에 표시
      if (isValidCoord(place.lat ?? NaN, place.lng ?? NaN)) {
        showAt(place.lat as number, place.lng as number);
        return true;
      }

      naver.maps.Service!.geocode({ query: place.address }, (status: string | number, response: unknown) => {
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

  useEffect(() => {
    if (!place) return;
    detailHero.syncToLoopIndex(1);
  }, [place?.id, detailHero.syncToLoopIndex]);

  if (detailLoading) {
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
          <NotFoundMessage>불러오는 중…</NotFoundMessage>
        </NotFoundWrap>
      </Page>
    );
  }

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
            {detailError === "not_found"
              ? "해당 명상센터를 찾지 못했어요."
              : "장소 정보를 불러올 수 없어요."}
            <br />
            메인에서 다시 찾아 주세요.
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

  const allPrograms = place.programs ?? [];
  const ongoingPrograms = allPrograms.filter((p) => p.status === "ongoing");
  const pastPrograms = allPrograms.filter((p) => p.status === "past");
  const hasProgramModal = allPrograms.length > 0;
  const venueLabel = place.venueKind === "명상센터" ? "명상센터" : "명상지";
  const programCountParts: string[] = [];
  if (ongoingPrograms.length > 0) programCountParts.push(`진행 중 ${ongoingPrograms.length}`);
  if (pastPrograms.length > 0) programCountParts.push(`지난 ${pastPrograms.length}`);
  const programCountSubline = programCountParts.join(" · ");

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

      {heroGalleryUrls.length <= 1 ? (
        <HeroImage
          type="button"
          onClick={() =>
            setPhotoExpand({
              urls: heroGalleryUrls.length === 1 ? heroGalleryUrls : [place.thumbnailUrl],
              initialLoopIndex: 1,
            })
          }
          aria-label={`${place.name} 대표 사진 크게 보기`}
        >
          <img src={heroGalleryUrls[0] ?? place.thumbnailUrl} alt={`${place.name} 대표 이미지`} />
        </HeroImage>
      ) : (
        <DetailHeroCarousel>
          <DetailHeroZoomBtn
            type="button"
            onClick={() =>
              setPhotoExpand({
                urls: heroGalleryUrls,
                initialLoopIndex: detailHero.loopIndex,
              })
            }
            aria-label={`${place.name} 사진 크게 보기`}
          >
            <DetailHeroViewportRef
              ref={detailHero.viewportRef}
              onTouchStart={detailHero.onTouchStart}
              onTouchMove={detailHero.onTouchMove}
              onTouchEnd={detailHero.onTouchEnd}
              onTouchCancel={detailHero.onTouchCancel}
            >
              {!detailHero.usePx ? (
                <DetailHeroSlideImg src={heroGalleryUrls[0]} alt="" draggable={false} />
              ) : (
                <DetailHeroTrack
                  ref={detailHero.trackRef}
                  onTransitionEnd={detailHero.onTransitionEnd}
                  style={{
                    width: detailHero.trackWidthPx,
                    transform: `translate3d(${detailHero.translatePx}px, 0, 0)`,
                    transition:
                      detailHero.dragPx !== 0 || detailHero.transOff
                        ? "none"
                        : "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
                  }}
                >
                  {detailHero.loopUrls.map((url, i) => (
                    <DetailHeroSlide
                      key={`detail-hero-${i}`}
                      style={{ width: detailHero.vpWidth, flexShrink: 0 }}
                    >
                      <DetailHeroSlideImg src={url} alt="" draggable={false} />
                    </DetailHeroSlide>
                  ))}
                </DetailHeroTrack>
              )}
            </DetailHeroViewportRef>
          </DetailHeroZoomBtn>
          <DetailHeroNav>
            {heroGalleryUrls.map((_, i) => (
              <DetailHeroDot
                key={i}
                type="button"
                aria-label={`${i + 1}번째 사진으로 이동`}
                aria-current={i === detailHero.activeDot ? "true" : undefined}
                $active={i === detailHero.activeDot}
                onClick={() => detailHero.setLoopIndex(i + 1)}
              />
            ))}
          </DetailHeroNav>
        </DetailHeroCarousel>
      )}

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
        <Description>
          <MarkdownText markdown={place.shortDescription} />
        </Description>

        {hasProgramModal && (
          <ProgramsPreviewSection>
            <ProgramsPreviewLabel>
              <ProgramsPreviewTitleBlock>
                <ProgramsPreviewHeading>프로그램 · 후기</ProgramsPreviewHeading>
                {programCountSubline ? (
                  <ProgramsPreviewSubline>{programCountSubline}</ProgramsPreviewSubline>
                ) : null}
              </ProgramsPreviewTitleBlock>
              <VenueKindTag>{venueLabel}</VenueKindTag>
            </ProgramsPreviewLabel>
            {ongoingPrograms.length > 0 ? (
              <ProgramsPhotoStrip aria-label="진행 중인 프로그램 사진">
                {ongoingPrograms.map((p) => (
                  <ProgramThumbBtn
                    key={p.id}
                    type="button"
                    onClick={() => {
                      setModalInitialProgramId(p.id);
                      setProgramsModalOpen(true);
                    }}
                  >
                    <img src={p.imageUrl} alt="" draggable={false} />
                    <ProgramThumbCaption>{p.title}</ProgramThumbCaption>
                  </ProgramThumbBtn>
                ))}
              </ProgramsPhotoStrip>
            ) : (
              <ProgramsPastOnlyEntry
                type="button"
                onClick={() => {
                  setModalInitialProgramId(undefined);
                  setProgramsModalOpen(true);
                }}
              >
                지난 프로그램·후기 보기 ({pastPrograms.length})
              </ProgramsPastOnlyEntry>
            )}
          </ProgramsPreviewSection>
        )}

        <AccordionWrap>
          <AccordionItem>
            <AccordionHeader
              type="button"
              $open={openTab === "fee"}
              onClick={() => setOpenTab(openTab === "fee" ? null : "fee")}
            >
              <span>입장료·이용 요금</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </AccordionHeader>
            <AccordionBodyWrap $open={openTab === "fee"}>
              <AccordionBodyInner>
                <AccordionBody>
                  {place.admissionFee?.trim() ? (
                    <ReactMarkdown>{place.admissionFee}</ReactMarkdown>
                  ) : (
                    "현장·예약 시 안내"
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

        {facilities.length > 0 && (
          <FacilitiesSection>
            <h3>시설 정보</h3>
            <FacilityIcons>
              {facilities.map((item) => (
                <FacilityItem key={item}>
                  {item === "wifi" && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12.55a11 11 0 0 1 14.08 0" />
                      <path d="M1.42 9a16 16 0 0 1 21.16 0" />
                      <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
                      <line x1="12" y1="20" x2="12.01" y2="20" />
                    </svg>
                  )}
                  {item === "parking" && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <path d="M3 9h18M9 21V9" />
                    </svg>
                  )}
                  {item === "tea" && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                      <line x1="6" y1="1" x2="6" y2="4" />
                      <line x1="10" y1="1" x2="10" y2="4" />
                      <line x1="14" y1="1" x2="14" y2="4" />
                    </svg>
                  )}
                  {!["wifi", "parking", "tea"].includes(item) && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 8v4M12 16h.01" />
                    </svg>
                  )}
                  <span>{FACILITY_LABELS[item] ?? item}</span>
                </FacilityItem>
              ))}
            </FacilityIcons>
          </FacilitiesSection>
        )}

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

      {hasProgramModal && (
        <PlaceProgramsModal
          place={place}
          open={programsModalOpen}
          onClose={() => setProgramsModalOpen(false)}
          initialProgramId={modalInitialProgramId}
        />
      )}
      {photoExpand && (
        <ProgramPhotoExpandOverlay
          urls={photoExpand.urls}
          initialLoopIndex={photoExpand.initialLoopIndex}
          onClose={() => setPhotoExpand(null)}
        />
      )}
    </Page>
  );
};

export default MeditationDetailPage;
