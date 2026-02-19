import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import RegionMap from "@/components/meditation/RegionMap";
import {
  getPlacesByRegion,
  getRegionById,
  getRegions,
} from "@/services/meditation/meditationService";
import { useMeditationStore } from "@/stores/meditationStore";

const Page = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 16px 24px;
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

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary300};
    outline-offset: 2px;
  }

  svg {
    width: 24px;
    height: 24px;
    stroke: ${({ theme }) => theme.colors.text900};
  }
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  color: ${({ theme }) => theme.colors.text900};
`;

const MapSection = styled.section`
  position: relative;
  padding: 12px;
  border-radius: ${({ theme }) => theme.radii.lg};
  margin-bottom: 20px;
  min-height: 280px;

  svg {
    max-height: 360px;
  }
`;

const popIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-8px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

const RegionPopover = styled.div<{ $x: number; $y: number }>`
  position: absolute;
  left: ${({ $x }) => $x}px;
  top: ${({ $y }) => $y}px;
  transform: translate(-50%, -100%);
  margin-bottom: 8px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: 0 12px 32px rgba(75, 0, 130, 0.2);
  border: 1px solid ${({ theme }) => theme.colors.primary200};
  padding: 16px;
  min-width: 220px;
  max-width: 280px;
  animation: ${popIn} 0.2s ease;
  z-index: 10;

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -8px;
    transform: translateX(-50%);
    border: 8px solid transparent;
    border-top-color: ${({ theme }) => theme.colors.white};
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 28px;
  height: 28px;
  padding: 0;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.text700};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.radii.pill};

  &:hover {
    background: ${({ theme }) => theme.colors.primary50};
    color: ${({ theme }) => theme.colors.text900};
  }
`;

const PopoverRegion = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary700};
  margin: 0 0 4px;
  padding-right: 28px;
`;

const PopoverCount = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text700};
  margin: 0 0 12px;
`;

const ThumbRow = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 12px;

  img {
    width: 48px;
    height: 48px;
    object-fit: cover;
    border-radius: 8px;
  }
`;

const SelectButton = styled.button`
  width: 100%;
  padding: 10px 16px;
  background: ${({ theme }) => theme.colors.primary600};
  color: #fff;
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary700};
  }
`;

const RegionChips = styled.section`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
`;

const RegionChip = styled.button<{ $active?: boolean }>`
  padding: 10px 20px;
  border-radius: 999px;
  border: 1px solid
    ${({ theme, $active }) => ($active ? theme.colors.primary600 : theme.colors.border200)};
  background: ${({ theme, $active }) =>
    $active ? theme.colors.primary600 : theme.colors.white};
  color: ${({ $active }) => ($active ? "#fff" : "inherit")};
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary400};
    background: ${({ theme, $active }) =>
      $active ? theme.colors.primary600 : theme.colors.primary50};
  }
`;

const MeditationMapPage = () => {
  const navigate = useNavigate();
  const mapSectionRef = useRef<HTMLDivElement>(null);
  const chipRegions = [
    { id: "all", name: "전체" },
    ...getRegions().map((r) => ({ id: r.id, name: r.name })),
  ];
  const popoverRef = useRef<HTMLDivElement>(null);
  const chipsRef = useRef<HTMLElement>(null);
  const { selectedRegionId, setRegion } = useMeditationStore();
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);
  const [popoverPos, setPopoverPos] = useState({ x: 0, y: 0 });

  // 팝오버·칩·지도 외부 클릭 시 팝오버 닫기
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!hoveredRegion) return;
      const target = e.target as Node;
      const inPopover = popoverRef.current?.contains(target);
      const inMap = mapSectionRef.current?.contains(target);
      const inChips = chipsRef.current?.contains(target);
      if (!inPopover && !inMap && !inChips) {
        setHoveredRegion(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [hoveredRegion]);

  // 메인에서 지역 선택 후 해당 지역 표시, 없으면 전체 기본 선택
  useEffect(() => {
    const regionToShow = selectedRegionId ?? "all";
    setHoveredRegion(regionToShow);
    const el = mapSectionRef.current;
    if (el) {
      requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        setPopoverPos({ x: rect.width / 2, y: rect.height / 2 - 40 });
      });
    } else {
      setPopoverPos({ x: 200, y: 120 });
    }
  }, [selectedRegionId]);

  const handleMapRegionSelect = (regionId: string, e?: MouseEvent) => {
    if (e && mapSectionRef.current) {
      const rect = mapSectionRef.current.getBoundingClientRect();
      setPopoverPos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    } else {
      setPopoverPos({ x: 0, y: 0 });
    }
    setHoveredRegion(regionId);
  };

  const handleConfirmSelect = () => {
    if (hoveredRegion) {
      setRegion(hoveredRegion);
      navigate(`/meditation/region/${hoveredRegion}`);
    }
  };

  const selectedRegion = hoveredRegion ? getRegionById(hoveredRegion) : null;
  const placesInRegion = hoveredRegion ? getPlacesByRegion(hoveredRegion) : [];
  const thumbnails = placesInRegion.slice(0, 3).map((p) => p.thumbnailUrl);

  return (
    <Page>
      <Header>
        <BackButton type="button" onClick={() => navigate(-1)} aria-label="뒤로 가기">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </BackButton>
        <Title>지역 선택</Title>
      </Header>

      <MapSection ref={mapSectionRef}>
        <RegionMap
          activeRegionId={hoveredRegion ?? undefined}
          onSelectRegion={handleMapRegionSelect}
        />
        {selectedRegion && (
          <RegionPopover ref={popoverRef} $x={popoverPos.x} $y={popoverPos.y}>
            <CloseButton
              type="button"
              onClick={() => setHoveredRegion(null)}
              aria-label="닫기"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </CloseButton>
            <PopoverRegion>{selectedRegion.name}</PopoverRegion>
            <PopoverCount>{placesInRegion.length}곳 명상센터</PopoverCount>
            {thumbnails.length > 0 && (
              <ThumbRow>
                {thumbnails.map((url, i) => (
                  <img key={i} src={url} alt="" />
                ))}
              </ThumbRow>
            )}
            <SelectButton
              type="button"
              onClick={handleConfirmSelect}
            >
              선택하기
            </SelectButton>
          </RegionPopover>
        )}
      </MapSection>

      <RegionChips ref={chipsRef}>
        {chipRegions.map((r) => (
          <RegionChip
            key={r.id}
            type="button"
            $active={hoveredRegion === r.id}
            onClick={(e) => {
              setHoveredRegion(r.id);
              const chip = e.currentTarget;
              const chipRect = chip.getBoundingClientRect();
              const mapRect = mapSectionRef.current?.getBoundingClientRect();
              if (mapRect) {
                setPopoverPos({
                  x: chipRect.left - mapRect.left + chipRect.width / 2,
                  y: chipRect.top - mapRect.top,
                });
              } else {
                setPopoverPos({ x: 200, y: 120 });
              }
            }}
          >
            {r.name}
          </RegionChip>
        ))}
      </RegionChips>
    </Page>
  );
};

export default MeditationMapPage;
