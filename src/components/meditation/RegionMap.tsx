import { useEffect, useRef } from "react";
import styled from "styled-components";
import mapSvg from "@/assets/southKoreaLow.svg?raw";

const MapWrapper = styled.div`
  cursor: pointer;
  overflow: hidden;

  svg {
    width: 100%;
    height: auto;
    max-width: 100%;
    display: block;
    margin: 0 auto;
    pointer-events: none;
  }

  path.land {
    pointer-events: auto;
    fill: ${({ theme }) => theme.colors.buddingPeach};
    stroke: ${({ theme }) => theme.colors.dustyRose};
    stroke-width: 1;
    cursor: pointer;
    transition: fill 0.25s ease;
  }

  path.land.is-hovered {
    fill: ${({ theme }) => theme.colors.primary600} !important;
  }

  path.land.is-active {
    fill: ${({ theme }) => theme.colors.primary600} !important;
  }

  path.land[id="KR-11"]:not(.is-active):not(.is-hovered),
  path.land[id="KR-41"]:not(.is-active):not(.is-hovered),
  path.land[id="KR-42"]:not(.is-active):not(.is-hovered) {
    fill: #f8e0d8;
  }
`;

interface RegionMapProps {
  activeRegionId?: string;
  onSelectRegion: (regionId: string, event?: MouseEvent) => void;
}

const RegionMap = ({ activeRegionId, onSelectRegion }: RegionMapProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const hoveredIdRef = useRef<string | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const getPaths = () =>
      Array.from(container.querySelectorAll<SVGPathElement>("svg path.land")).filter((p) =>
        p.getAttribute("id")
      );

    const updateHover = (targetPath: SVGPathElement | null) => {
      const newId = targetPath?.getAttribute("id") ?? null;
      if (newId === hoveredIdRef.current) return;
      hoveredIdRef.current = newId;

      getPaths().forEach((path) => {
        if (path.getAttribute("id") === newId) {
          path.classList.add("is-hovered");
        } else {
          path.classList.remove("is-hovered");
        }
      });
    };

    const getPathAtPoint = (clientX: number, clientY: number): SVGPathElement | null => {
      const el = document.elementFromPoint(clientX, clientY);
      if (el?.matches?.("path.land")) {
        return el as SVGPathElement;
      }

      const svgEl = container.querySelector("svg");
      if (!svgEl) return null;

      const ctm = svgEl.getScreenCTM();
      if (!ctm) return null;

      const pt = (svgEl as SVGSVGElement).createSVGPoint();
      pt.x = clientX;
      pt.y = clientY;
      const svgP = pt.matrixTransform(ctm.inverse());
      const paths = getPaths();

      for (let i = paths.length - 1; i >= 0; i--) {
        if (paths[i].isPointInFill(svgP)) {
          return paths[i];
        }
      }
      return null;
    };

    const handlePointerMove = (e: PointerEvent) => {
      const target = getPathAtPoint(e.clientX, e.clientY);
      updateHover(target);
    };

    const handlePointerLeave = () => {
      updateHover(null);
    };

    const handleClick = (e: MouseEvent) => {
      const target = getPathAtPoint(e.clientX, e.clientY);
      if (target) {
        const regionId = target.getAttribute("id");
        if (regionId) onSelectRegion(regionId, e);
      }
    };

    let cancelled = false;

    const setupListeners = () => {
      if (cancelled) return;
      const paths = getPaths();
      if (paths.length === 0) {
        requestAnimationFrame(setupListeners);
        return;
      }

      container.addEventListener("pointermove", handlePointerMove);
      container.addEventListener("pointerleave", handlePointerLeave);
      container.addEventListener("click", handleClick);
    };

    setupListeners();

    return () => {
      cancelled = true;
      container.removeEventListener("pointermove", handlePointerMove);
      container.removeEventListener("pointerleave", handlePointerLeave);
      container.removeEventListener("click", handleClick);
    };
  }, [onSelectRegion]);

  const displayRegionId =
    activeRegionId === "KR-47" ? "KR-48" : activeRegionId;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const paths = container.querySelectorAll<SVGPathElement>("svg path.land");
    paths.forEach((path) => {
      const regionId = path.getAttribute("id");
      if (regionId === displayRegionId) {
        path.classList.add("is-active");
      } else {
        path.classList.remove("is-active");
      }
    });
  }, [displayRegionId]);

  return (
    <MapWrapper
      ref={containerRef}
      role="img"
      aria-label="대한민국 행정구역 지도"
      dangerouslySetInnerHTML={{ __html: mapSvg }}
    />
  );
};

export default RegionMap;
