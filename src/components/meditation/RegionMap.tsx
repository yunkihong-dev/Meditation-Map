import { useEffect, useRef } from "react";
import styled from "styled-components";
import mapSvg from "@/assets/southKoreaLow.svg?raw";

const MapWrapper = styled.div`
  svg {
    width: 100%;
    height: auto;
    max-width: 760px;
    display: block;
    margin: 0 auto;
  }

  path.land {
    cursor: pointer;
    transition: transform 0.2s ease, fill 0.2s ease;
    transform-box: fill-box;
    transform-origin: center;
  }

  path.land.is-hovered {
    fill: ${({ theme }) => theme.colors.primary200};
    transform: translateY(-4px);
  }

  path.land.is-active {
    fill: ${({ theme }) => theme.colors.primary400};
    transform: translateY(-6px);
  }
`;

interface RegionMapProps {
  activeRegionId?: string;
  onSelectRegion: (regionId: string) => void;
}

const RegionMap = ({ activeRegionId, onSelectRegion }: RegionMapProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    const paths = container.querySelectorAll<SVGPathElement>("svg path.land");
    const cleanupFns: Array<() => void> = [];

    paths.forEach((path) => {
      const regionId = path.getAttribute("id");
      if (!regionId) {
        return;
      }

      const handleClick = () => onSelectRegion(regionId);
      const handleEnter = () => path.classList.add("is-hovered");
      const handleLeave = () => path.classList.remove("is-hovered");

      path.addEventListener("click", handleClick);
      path.addEventListener("mouseenter", handleEnter);
      path.addEventListener("mouseleave", handleLeave);
      cleanupFns.push(() => {
        path.removeEventListener("click", handleClick);
        path.removeEventListener("mouseenter", handleEnter);
        path.removeEventListener("mouseleave", handleLeave);
      });
    });

    return () => {
      cleanupFns.forEach((cleanup) => cleanup());
    };
  }, [onSelectRegion]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    const paths = container.querySelectorAll<SVGPathElement>("svg path.land");
    paths.forEach((path) => {
      const regionId = path.getAttribute("id");
      if (regionId === activeRegionId) {
        path.classList.add("is-active");
      } else {
        path.classList.remove("is-active");
      }
    });
  }, [activeRegionId]);

  const normalizedSvg = mapSvg.includes("viewBox")
    ? mapSvg
    : mapSvg.replace(
        "<svg",
        '<svg viewBox="0 0 700 800" preserveAspectRatio="xMidYMid meet"'
      );

  return (
    <MapWrapper
      ref={containerRef}
      role="img"
      aria-label="대한민국 행정구역 지도"
      dangerouslySetInnerHTML={{ __html: normalizedSvg }}
    />
  );
};

export default RegionMap;
