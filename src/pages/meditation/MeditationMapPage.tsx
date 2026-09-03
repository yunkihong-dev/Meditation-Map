import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Icon from "@/components/common/Icon";
import RegionMap from "@/components/meditation/RegionMap";
import { getRegionById } from "@/services/meditation/meditationService";
import type { Category } from "@/services/meditation/types";
import { useCatalogStore } from "@/stores/catalogStore";
import { useMeditationStore } from "@/stores/meditationStore";

const Page = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 4px 24px;
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
  font-size: 2.4rem;
  font-weight: 600;
  line-height: 1.4;
  margin: 0;
  color: ${({ theme }) => theme.colors.charcoal};
`;

const MapSection = styled.section`
  position: relative;
  padding: 16px;
  border-radius: ${({ theme }) => theme.radii.lg};
  background: ${({ theme }) => theme.colors.white};
  border: ${({ theme }) => theme.hairline};
  box-shadow: ${({ theme }) => theme.shadow.card};
  margin-bottom: 20px;
  min-height: 280px;
  overflow: visible;

  svg {
    max-height: 360px;
  }
`;

const MapBackdrop = styled.div`
  position: absolute;
  inset: 0;
  z-index: 5;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.radii.lg};
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

const RegionPopoverWrap = styled.div<{ $x: number; $y: number }>`
  position: absolute;
  left: ${({ $x }) => $x}px;
  top: ${({ $y }) => $y}px;
  transform: translate(-50%, -100%);
  z-index: 10;
  filter: drop-shadow(0 12px 40px rgba(107, 70, 193, 0.15));
  animation: ${popIn} 0.2s ease;
`;

const RegionPopover = styled.div`
  position: relative;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: ${({ theme }) => theme.radii.lg};
  border: 1px solid rgba(255, 255, 255, 0.4);
  padding: 20px;
  min-width: 220px;
  max-width: 280px;

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -11px;
    transform: translateX(-50%);
    border-left: 9px solid transparent;
    border-right: 9px solid transparent;
    border-top: 11px solid rgba(255, 255, 255, 0.4);
  }

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -10px;
    transform: translateX(-50%);
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 10px solid ${({ theme }) => theme.colors.white};
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
  font-size: 1.9rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.charcoal};
  margin: 0 0 4px;
  padding-right: 28px;
`;

const PopoverHint = styled.p`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.warmGray};
  margin: 0 0 16px;
  line-height: 1.6;
`;

const TypePickList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const TypePickButton = styled.button`
  width: 100%;
  padding: 14px 16px;
  text-align: left;
  background: ${({ theme }) => theme.colors.surfaceContainer};
  color: ${({ theme }) => theme.colors.charcoal};
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: 1.4rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.secondaryContainer};
    color: ${({ theme }) => theme.colors.onSecondaryContainer};
  }
`;

/** 유형을 이미 들고 온 경우의 단일 액션 — 지역명 아래 채워진 보라 버튼. */
const GoButton = styled.button`
  width: 100%;
  margin-top: 14px;
  padding: 13px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.primary600};
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.shadow.press};
  transition: transform 0.16s ease, opacity 0.16s ease;

  &:hover {
    opacity: 0.92;
  }

  &:active {
    transform: scale(0.97);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary300};
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:active {
      transform: none;
    }
  }
`;

const RegionChips = styled.section`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
`;

const RegionChip = styled.button<{ $active?: boolean }>`
  padding: 10px 18px;
  border: none;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme, $active }) =>
    $active ? theme.colors.primary100 : theme.colors.surfaceContainer};
  color: ${({ theme, $active }) =>
    $active ? theme.colors.primary900 : theme.colors.warmGray};
  box-shadow: ${({ theme, $active }) => ($active ? theme.shadow.soft : "none")};
  font-size: 1.4rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  white-space: nowrap;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease;

  &:hover {
    background: ${({ theme, $active }) =>
      $active ? theme.colors.primary100 : theme.colors.secondaryFixed};
  }
`;

export type RegionEntryKind = "place" | "center" | "expert";

/**
 * 홈 바로가기에서 넘어올 때 실어 보내는 값.
 * 유형을 이미 골라 왔으므로 지역 팝오버에서 다시 묻지 않고 "이동"만 보여 줍니다.
 */
export type RegionMapEntryState = {
  entry: RegionEntryKind;
  category: Category;
  /** 명상지 / 명상센터 구분. 비우면 둘 다 */
  venueKind?: "명상지" | "명상센터";
};

/** 지역 선택 후 명상지 / 센터는 필터와 함께 목록, 전문가는 별도 리스트 */
const REGION_ENTRY_TYPES: { label: string; kind: RegionEntryKind }[] = [
  { label: "명상지", kind: "place" },
  { label: "명상센터", kind: "center" },
  { label: "명상 전문가", kind: "expert" },
];

const MeditationMapPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  /** 홈 바로가기로 들어왔으면 유형이 이미 정해져 있습니다. */
  const preset = (state as RegionMapEntryState | null) ?? null;
  const mapSectionRef = useRef<HTMLDivElement>(null);
  const regions = useCatalogStore((s) => s.regions);
  const chipRegions = useMemo(
    () => [{ id: "all", name: "전체" }, ...regions.map((r) => ({ id: r.id, name: r.name }))],
    [regions]
  );
  const popoverRef = useRef<HTMLDivElement>(null);
  const chipsRef = useRef<HTMLElement>(null);
  const { selectedRegionId, setRegion, setCategory, setVenueKind } = useMeditationStore();
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

  const getRegionCenterInSection = useCallback((regionId: string): { x: number; y: number } | null => {
    const section = mapSectionRef.current;
    if (!section) return null;
    if (regionId === "all") {
      const rect = section.getBoundingClientRect();
      return { x: rect.width / 2, y: rect.height / 2 - 40 };
    }
    const path = section.querySelector(`.land[id="${regionId}"]`) as SVGGeometryElement | null;
    if (!path) return null;
    const svg = path.closest("svg") as SVGSVGElement | null;
    if (!svg) return null;
    const bbox = path.getBBox();
    const cx = bbox.x + bbox.width / 2;
    let cy = bbox.y + bbox.height / 2;
    if (regionId === "KR-42") {
      cy = bbox.y + bbox.height * 0.65;
    }
    const pt = svg.createSVGPoint();
    pt.x = cx;
    pt.y = cy;
    // 각 지역 요소는 자체 transform(translate)을 가지므로 요소의 CTM으로 변환
    const ctm = path.getScreenCTM();
    if (!ctm) return null;
    const screenPt = pt.matrixTransform(ctm);
    const sectionRect = section.getBoundingClientRect();
    const yOffset =
      regionId === "KR-42"
        ? 5
        : regionId === "KR-11"
          ? 0
          : regionId === "KR-41"
            ? -15
            : 15;
    return {
      x: screenPt.x - sectionRect.left,
      y: screenPt.y - sectionRect.top - yOffset,
    };
  }, []);

  // 메인에서 지역 선택 후 해당 지역 표시, 없으면 전체 기본 선택
  useEffect(() => {
    const regionToShow = selectedRegionId ?? "all";
    setHoveredRegion(regionToShow);
    const el = mapSectionRef.current;
    if (el) {
      requestAnimationFrame(() => {
        const pos = getRegionCenterInSection(regionToShow);
        setPopoverPos(pos ?? { x: el.getBoundingClientRect().width / 2, y: el.getBoundingClientRect().height / 2 - 40 });
      });
    } else {
      setPopoverPos({ x: 200, y: 120 });
    }
  }, [selectedRegionId, getRegionCenterInSection]);

  const handleMapRegionSelect = (regionId: string) => {
    setHoveredRegion(regionId);
    requestAnimationFrame(() => {
      const pos = getRegionCenterInSection(regionId);
      setPopoverPos(pos ?? { x: 200, y: 120 });
    });
  };

  const handlePickEntryType = (kind: RegionEntryKind) => {
    if (!hoveredRegion) return;
    setRegion(hoveredRegion);
    if (kind === "expert") {
      navigate(`/meditation/region/${hoveredRegion}/experts`);
      return;
    }
    // 고른 말과 걸리는 필터를 같게 둡니다 — "명상지" 를 골랐으면 명상지만 나오도록.
    setCategory("all");
    setVenueKind(kind === "place" ? "명상지" : "명상센터");
    navigate(`/meditation/region/${hoveredRegion}`);
  };

  /** 유형을 들고 온 경우 — 고를 것 없이 그 지역으로 바로 넘어갑니다. */
  const handleGoWithPreset = () => {
    if (!hoveredRegion || !preset) return;
    setRegion(hoveredRegion);
    if (preset.entry === "expert") {
      navigate(`/meditation/region/${hoveredRegion}/experts`);
      return;
    }
    setCategory(preset.category);
    setVenueKind(preset.venueKind);
    navigate(`/meditation/region/${hoveredRegion}`);
  };

  const selectedRegion = hoveredRegion ? getRegionById(hoveredRegion) : null;

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
          <>
            <MapBackdrop
              onClick={() => setHoveredRegion(null)}
              aria-label="모달 닫기"
            />
            <RegionPopoverWrap ref={popoverRef} $x={popoverPos.x} $y={popoverPos.y}>
            <RegionPopover>
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
            {preset ? (
              <GoButton type="button" onClick={handleGoWithPreset}>
                이동
                <Icon name="arrow_forward" size={18} />
              </GoButton>
            ) : (
              <>
                <PopoverHint>찾으시는 유형을 선택해 주세요</PopoverHint>
                <TypePickList>
                  {REGION_ENTRY_TYPES.map(({ label, kind }) => (
                    <TypePickButton
                      key={kind}
                      type="button"
                      onClick={() => handlePickEntryType(kind)}
                    >
                      {label}
                    </TypePickButton>
                  ))}
                </TypePickList>
              </>
            )}
            </RegionPopover>
          </RegionPopoverWrap>
          </>
        )}
      </MapSection>

      <RegionChips ref={chipsRef}>
        {chipRegions.map((r) => (
          <RegionChip
            key={r.id}
            type="button"
            $active={hoveredRegion === r.id}
            onClick={() => {
              setHoveredRegion(r.id);
              requestAnimationFrame(() => {
                const pos = getRegionCenterInSection(r.id);
                setPopoverPos(pos ?? { x: 200, y: 120 });
              });
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
