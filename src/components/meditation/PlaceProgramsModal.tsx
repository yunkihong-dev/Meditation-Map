import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import ReactMarkdown from "react-markdown";
import ReviewsListSheet from "@/components/meditation/ReviewsListSheet";
import { formatFiveStarRow } from "@/services/meditation/starRating";
import type { MeditationPlace, PlaceProgram, PlaceProgramReview } from "@/services/meditation/types";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideUp = keyframes`
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 300;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  animation: ${fadeIn} 0.2s ease both;

  @media (min-width: 600px) {
    justify-content: center;
    align-items: center;
    padding: 24px;
  }
`;

const Sheet = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 20px 20px 0 0;
  max-height: min(94dvh, 920px);
  height: min(94dvh, 920px);
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: ${slideUp} 0.32s cubic-bezier(0.22, 1, 0.36, 1) both;

  @media (min-width: 600px) {
    border-radius: ${({ theme }) => theme.radii.lg};
    max-width: 440px;
    height: min(88dvh, 780px);
  }
`;

const ModalHeader = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  padding-top: calc(12px + env(safe-area-inset-top, 0px));
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary100};
`;

const ModalTitle = styled.span`
  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text900};
`;

const CloseBtn = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  background: ${({ theme }) => theme.colors.bg100};
  border-radius: ${({ theme }) => theme.radii.pill};
  cursor: pointer;
  display: grid;
  place-items: center;
  color: ${({ theme }) => theme.colors.text900};
`;

const Hero = styled.div`
  flex-shrink: 0;
  position: relative;
  height: 42vmin;
  min-height: 200px;
  max-height: 280px;
  background: ${({ theme }) => theme.colors.bg100};
`;

const HeroViewport = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  touch-action: pan-y pinch-zoom;
`;

const HeroTrack = styled.div`
  display: flex;
  height: 100%;
  will-change: transform;
`;

const HeroSlide = styled.div`
  flex-shrink: 0;
  height: 100%;
`;

const HeroSlideImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  pointer-events: none;
  user-select: none;
`;

const HeroImgSingle = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  user-select: none;
`;

const HeroClickable = styled.button<{ $clickable?: boolean }>`
  width: 100%;
  height: 100%;
  display: block;
  padding: 0;
  margin: 0;
  border: none;
  background: transparent;
  font: inherit;
  text-align: inherit;
  cursor: ${({ $clickable }) => ($clickable ? "zoom-in" : "default")};
  -webkit-tap-highlight-color: transparent;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary600};
    outline-offset: -2px;
  }
`;

const ViewerOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 400;
  background: rgba(0, 0, 0, 0.92);
  display: flex;
  flex-direction: column;
  animation: ${fadeIn} 0.2s ease both;
`;

const ViewerTopBar = styled.div`
  flex-shrink: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 8px 12px;
  padding-top: calc(8px + env(safe-area-inset-top, 0px));
`;

const ViewerCloseBtn = styled.button`
  width: 44px;
  height: 44px;
  border: none;
  background: rgba(255, 255, 255, 0.14);
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  display: grid;
  place-items: center;
  -webkit-tap-highlight-color: transparent;

  &:focus-visible {
    outline: 2px solid #fff;
    outline-offset: 2px;
  }
`;

const ViewerStage = styled.div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 10px 28px;
  padding-bottom: calc(28px + env(safe-area-inset-bottom, 0px));
`;

const ViewerPhotoPullWrap = styled.div<{ $snap: boolean }>`
  height: 100%;
  width: 100%;
  will-change: transform;
  transition: ${({ $snap }) =>
    $snap ? "transform 0.28s cubic-bezier(0.22, 1, 0.36, 1)" : "none"};
`;

const ViewerViewport = styled.div`
  position: relative;
  width: 100%;
  max-width: min(96vw, 720px);
  height: min(85dvh, 900px);
  max-height: min(85dvh, 900px);
  overflow: hidden;
  touch-action: none;
  background: transparent;
  border-radius: ${({ theme }) => theme.radii.md};
`;

const ViewerTrack = styled.div`
  display: flex;
  height: 100%;
  will-change: transform;
`;

const ViewerSlide = styled.div`
  flex-shrink: 0;
  height: 100%;
`;

const ViewerSlideImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  background: transparent;
  display: block;
  pointer-events: none;
  user-select: none;
`;

const ViewerImgSingle = styled.img`
  width: 100%;
  height: 100%;
  max-height: min(85dvh, 900px);
  object-fit: contain;
  object-position: center;
  background: transparent;
  display: block;
  user-select: none;
`;

const HeroNav = styled.div`
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

const ViewerNav = styled.div`
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  gap: 6px;
  margin-top: 14px;
  width: 100%;
  pointer-events: none;

  & > * {
    pointer-events: auto;
  }
`;

const DotBtn = styled.button<{ $active?: boolean }>`
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

const TabRow = styled.div`
  flex-shrink: 0;
  display: flex;
  gap: 8px;
  padding: 12px 16px;
  background: ${({ theme }) => theme.colors.warmCream};
`;

const TabBtn = styled.button<{ $active?: boolean }>`
  flex: 1;
  padding: 10px 12px;
  border-radius: ${({ theme }) => theme.radii.pill};
  border: 1px solid
    ${({ theme, $active }) => ($active ? theme.colors.primary600 : theme.colors.primary200)};
  background: ${({ theme, $active }) => ($active ? theme.colors.primary600 : theme.colors.white)};
  color: ${({ $active }) => ($active ? "#fff" : "inherit")};
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
`;

const ThumbRow = styled.div`
  flex-shrink: 0;
  display: flex;
  gap: 10px;
  padding: 12px 16px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary100};

  &::-webkit-scrollbar {
    height: 0;
  }
`;

const Thumb = styled.button<{ $active?: boolean }>`
  flex-shrink: 0;
  width: 88px;
  height: 88px;
  padding: 0;
  border: 3px solid
    ${({ theme, $active }) => ($active ? theme.colors.primary600 : "transparent")};
  border-radius: ${({ theme }) => theme.radii.md};
  overflow: hidden;
  cursor: pointer;
  background: none;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

const ScrollBody = styled.div`
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding: 18px 16px 28px;
`;

const ProgTitle = styled.h3`
  margin: 0 0 12px;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.25;
`;

const VenueBody = styled.div`
  font-size: 1rem;
  line-height: 1.65;
  color: ${({ theme }) => theme.colors.text700};
  margin-bottom: 22px;

  p {
    margin: 0 0 0.75em;
  }
  p:last-child {
    margin-bottom: 0;
  }
  ul,
  ol {
    margin: 0 0 0.75em;
    padding-left: 1.2em;
  }
  strong {
    font-weight: 600;
  }
`;

const ReviewBlock = styled.section`
  margin-top: 8px;
`;

const ReviewHeading = styled.h4`
  margin: 0 0 12px;
  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text900};
`;

const ReviewSnippet = styled.div`
  padding: 14px;
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.warmCream};
  margin-bottom: 10px;
`;

const ReviewSnippetAuthor = styled.p`
  margin: 0 0 6px;
  font-size: 0.88rem;
  font-weight: 600;
`;

const ReviewSnippetText = styled.p`
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.55;
  color: ${({ theme }) => theme.colors.text700};
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const OpenAllReviewsBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 4px;
  padding: 12px 14px;
  border: 1px solid ${({ theme }) => theme.colors.primary300};
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary700};
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;
  font-family: inherit;
  -webkit-tap-highlight-color: transparent;
  transition: background 0.2s ease, border-color 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary50};
    border-color: ${({ theme }) => theme.colors.primary600};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary300};
    outline-offset: 2px;
  }
`;

const InstructorSection = styled.section`
  margin-top: 28px;
  padding-top: 22px;
  border-top: 1px solid ${({ theme }) => theme.colors.primary100};
`;

const InstructorHeading = styled.h4`
  margin: 0 0 14px;
  font-size: 1.05rem;
  font-weight: 700;
`;

const InstructorCard = styled.article`
  margin-bottom: 20px;
`;

const InstructorTop = styled.div`
  display: flex;
  gap: 14px;
  align-items: flex-start;
  margin-bottom: 10px;
`;

const InstructorPhoto = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
`;

const InstructorName = styled.div`
  font-weight: 700;
  font-size: 1.05rem;
  margin-bottom: 6px;
`;

const InstructorIntro = styled.p`
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.55;
  color: ${({ theme }) => theme.colors.text700};
`;

const EmptyLine = styled.p`
  margin: 0;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.text700};
`;

export function useProgramGalleryLoop(urls: string[], measureActive: boolean) {
  const urlsKey = urls.join("\0");
  const [loopIndex, setLoopIndex] = useState(1);
  const [transOff, setTransOff] = useState(false);
  const [vpWidth, setVpWidth] = useState(0);
  const [dragPx, setDragPx] = useState(0);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const loopIndexRef = useRef(1);
  const touchStartX = useRef<number | null>(null);
  const dragPxRef = useRef(0);
  const gestureRawRef = useRef(0);
  const prevUrlsKeyRef = useRef<string | null>(null);

  const endTouch = useCallback(() => {
    touchStartX.current = null;
    dragPxRef.current = 0;
    gestureRawRef.current = 0;
    setDragPx(0);
  }, []);

  useEffect(() => {
    if (prevUrlsKeyRef.current === null) {
      prevUrlsKeyRef.current = urlsKey;
      return;
    }
    if (prevUrlsKeyRef.current !== urlsKey) {
      prevUrlsKeyRef.current = urlsKey;
      setLoopIndex(1);
      setTransOff(false);
      setVpWidth(0);
      endTouch();
    }
  }, [urlsKey, endTouch]);

  useLayoutEffect(() => {
    if (!measureActive || urls.length <= 1) {
      setVpWidth(0);
      return;
    }
    const el = viewportRef.current;
    if (!el) return;

    const measure = () => {
      const w = el.getBoundingClientRect().width;
      if (w > 0) setVpWidth(w);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [measureActive, urls.length, urlsKey]);

  const loopUrls = useMemo(() => {
    const n = urls.length;
    if (n <= 1) return urls;
    return [urls[n - 1], ...urls, urls[0]];
  }, [urls]);

  const slideCount = loopUrls.length;

  const activeDot = useMemo(() => {
    const n = urls.length;
    if (n <= 1) return 0;
    if (loopIndex === 0) return n - 1;
    if (loopIndex === n + 1) return 0;
    return loopIndex - 1;
  }, [urls.length, loopIndex]);

  const onTouchStart = useCallback(
    (e: React.TouchEvent) => {
      if (urls.length <= 1) return;
      touchStartX.current = e.touches[0].clientX;
      dragPxRef.current = 0;
      gestureRawRef.current = 0;
      setDragPx(0);
    },
    [urls.length]
  );

  const onTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (touchStartX.current == null || urls.length <= 1) return;
      const w = viewportRef.current?.offsetWidth ?? 320;
      const n = urls.length;
      let raw = e.touches[0].clientX - touchStartX.current;
      const max = w * 0.45;
      raw = Math.max(-max, Math.min(max, raw));
      gestureRawRef.current = raw;

      const idx = loopIndexRef.current;
      let visual = raw;
      if (idx === 1 && raw > 0) visual = 0;
      if (idx === n && raw < 0) visual = 0;

      dragPxRef.current = visual;
      setDragPx(visual);
    },
    [urls.length]
  );

  const onTouchEnd = useCallback(() => {
    if (touchStartX.current == null || urls.length <= 1) {
      endTouch();
      return;
    }
    const w = viewportRef.current?.offsetWidth ?? 320;
    const threshold = Math.min(48, w * 0.14);
    const d = gestureRawRef.current;
    const n = urls.length;
    setLoopIndex((prev) => {
      if (d > threshold) {
        if (prev === 0) return n - 1;
        if (prev === 1) return 0;
        return prev - 1;
      }
      if (d < -threshold) {
        if (prev === n + 1) return 2;
        if (prev === n) return n + 1;
        return prev + 1;
      }
      return prev;
    });
    endTouch();
  }, [urls.length, endTouch]);

  const onTransitionEnd = useCallback(
    (e: React.TransitionEvent<HTMLDivElement>) => {
      if (!e.propertyName.toLowerCase().includes("transform")) return;
      if (e.target !== e.currentTarget) return;
      const n = urls.length;
      if (n <= 1) return;
      const prev = loopIndexRef.current;
      if (prev === n + 1) {
        setTransOff(true);
        setLoopIndex(1);
      } else if (prev === 0) {
        setTransOff(true);
        setLoopIndex(n);
      }
    },
    [urls.length]
  );

  useLayoutEffect(() => {
    if (!transOff) return;
    const track = trackRef.current;
    if (track) void track.offsetWidth;
    let innerId: number | null = null;
    const outerId = requestAnimationFrame(() => {
      innerId = requestAnimationFrame(() => {
        setTransOff(false);
      });
    });
    return () => {
      cancelAnimationFrame(outerId);
      if (innerId != null) cancelAnimationFrame(innerId);
    };
  }, [loopIndex, transOff]);

  useEffect(() => {
    endTouch();
  }, [urlsKey, endTouch]);

  loopIndexRef.current = loopIndex;

  const usePx = urls.length > 1 && vpWidth > 0;
  const trackWidthPx = usePx ? slideCount * vpWidth : undefined;
  const translatePx = usePx ? -(loopIndex * vpWidth) + dragPx : 0;

  const syncToLoopIndex = useCallback(
    (idx: number) => {
      setTransOff(false);
      setLoopIndex(idx);
      endTouch();
    },
    [endTouch]
  );

  return {
    loopIndex,
    setLoopIndex,
    activeDot,
    loopUrls,
    slideCount,
    usePx,
    trackWidthPx,
    translatePx,
    transOff,
    dragPx,
    viewportRef,
    trackRef,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    onTouchCancel: endTouch,
    onTransitionEnd,
    vpWidth,
    syncToLoopIndex,
  };
}

const VIEWER_AXIS_PX = 14;
const VIEWER_DISMISS_PX = 115;
const VIEWER_PULL_CAP = 360;

function dampViewerPull(raw: number) {
  const sign = Math.sign(raw);
  const a = Math.abs(raw);
  return sign * Math.min(a * 0.88, VIEWER_PULL_CAP);
}

export function ProgramPhotoExpandOverlay({
  urls,
  initialLoopIndex,
  onClose,
  lockBodyScroll = true,
}: {
  urls: string[];
  initialLoopIndex: number;
  onClose: () => void;
  /** 이미 부모(예: 프로그램 모달)에서 body 스크롤을 막은 경우 false */
  lockBodyScroll?: boolean;
}) {
  const measureActive = urls.length > 1;
  const g = useProgramGalleryLoop(urls, measureActive);
  const {
    syncToLoopIndex,
    viewportRef,
    trackRef,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    onTouchCancel,
    onTransitionEnd,
    usePx,
    trackWidthPx,
    translatePx,
    transOff,
    dragPx,
    loopUrls,
    vpWidth,
    setLoopIndex,
    activeDot,
  } = g;

  const [pullY, setPullY] = useState(0);
  const [pullSnap, setPullSnap] = useState(false);
  const pullYRef = useRef(0);
  const dismissStartRef = useRef<{ x: number; y: number } | null>(null);
  const axisRef = useRef<"n" | "h" | "v">("n");
  const passiveCleanupRef = useRef<(() => void) | null>(null);
  const mouseDownRef = useRef(false);

  const assignViewportRef = useCallback(
    (node: HTMLDivElement | null) => {
      passiveCleanupRef.current?.();
      passiveCleanupRef.current = null;
      (viewportRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
      if (node) {
        const prevent = (ev: TouchEvent) => {
          if (axisRef.current === "v") ev.preventDefault();
        };
        node.addEventListener("touchmove", prevent, { passive: false });
        passiveCleanupRef.current = () => node.removeEventListener("touchmove", prevent);
      }
    },
    [viewportRef]
  );

  useEffect(() => {
    if (!lockBodyScroll) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [lockBodyScroll]);

  useLayoutEffect(() => {
    if (urls.length <= 1) return;
    syncToLoopIndex(initialLoopIndex);
  }, [urls.length, initialLoopIndex, syncToLoopIndex]);

  useEffect(() => {
    pullYRef.current = 0;
    setPullY(0);
    axisRef.current = "n";
    dismissStartRef.current = null;
    mouseDownRef.current = false;
  }, [urls.join("\0")]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(
    () => () => {
      passiveCleanupRef.current?.();
      passiveCleanupRef.current = null;
    },
    []
  );

  const onBackdrop = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) onClose();
    },
    [onClose]
  );

  const finishVerticalPull = useCallback(() => {
    if (Math.abs(pullYRef.current) >= VIEWER_DISMISS_PX) {
      pullYRef.current = 0;
      setPullY(0);
      onClose();
      return;
    }
    setPullSnap(true);
    pullYRef.current = 0;
    setPullY(0);
    window.setTimeout(() => setPullSnap(false), 320);
  }, [onClose]);

  const onPullTouchStart = useCallback((e: React.TouchEvent) => {
    if (e.touches.length !== 1) return;
    setPullSnap(false);
    dismissStartRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    axisRef.current = "n";
  }, []);

  const onPullTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!dismissStartRef.current || e.touches.length !== 1) return;
      const x = e.touches[0].clientX;
      const y = e.touches[0].clientY;
      const dx = x - dismissStartRef.current.x;
      const dy = y - dismissStartRef.current.y;

      if (axisRef.current === "n") {
        if (Math.abs(dx) < VIEWER_AXIS_PX && Math.abs(dy) < VIEWER_AXIS_PX) return;
        if (Math.abs(dy) >= Math.abs(dx)) {
          axisRef.current = "v";
        } else {
          axisRef.current = "h";
          if (urls.length > 1) onTouchStart(e);
        }
      }

      if (axisRef.current === "v") {
        const d = dampViewerPull(dy);
        pullYRef.current = d;
        setPullY(d);
        return;
      }
      if (axisRef.current === "h" && urls.length > 1) {
        onTouchMove(e);
      }
    },
    [urls.length, onTouchMove, onTouchStart]
  );

  const onPullTouchEnd = useCallback(() => {
    if (axisRef.current === "v") {
      finishVerticalPull();
    } else if (axisRef.current === "h" && urls.length > 1) {
      onTouchEnd();
    }
    dismissStartRef.current = null;
    axisRef.current = "n";
  }, [finishVerticalPull, onTouchEnd, urls.length]);

  const onPullTouchCancel = useCallback(() => {
    if (axisRef.current === "v") {
      finishVerticalPull();
    } else if (axisRef.current === "h" && urls.length > 1) {
      onTouchCancel();
    }
    dismissStartRef.current = null;
    axisRef.current = "n";
  }, [finishVerticalPull, onTouchCancel, urls.length]);

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    if (e.button !== 0) return;
    mouseDownRef.current = true;
    setPullSnap(false);
    dismissStartRef.current = { x: e.clientX, y: e.clientY };
    axisRef.current = "n";
  }, []);

  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!mouseDownRef.current || !dismissStartRef.current) return;
      const dx = e.clientX - dismissStartRef.current.x;
      const dy = e.clientY - dismissStartRef.current.y;
      if (axisRef.current === "n") {
        if (Math.abs(dx) < VIEWER_AXIS_PX && Math.abs(dy) < VIEWER_AXIS_PX) return;
        if (Math.abs(dy) >= Math.abs(dx)) axisRef.current = "v";
        else {
          axisRef.current = "h";
          mouseDownRef.current = false;
          dismissStartRef.current = null;
          return;
        }
      }
      if (axisRef.current === "v") {
        const d = dampViewerPull(dy);
        pullYRef.current = d;
        setPullY(d);
      }
    },
    []
  );

  const onMouseEnd = useCallback(() => {
    if (!mouseDownRef.current) return;
    mouseDownRef.current = false;
    if (axisRef.current === "v") finishVerticalPull();
    dismissStartRef.current = null;
    axisRef.current = "n";
  }, [finishVerticalPull]);

  if (urls.length === 0) return null;

  const viewportHandlers = {
    ref: assignViewportRef,
    onTouchStart: onPullTouchStart,
    onTouchMove: onPullTouchMove,
    onTouchEnd: onPullTouchEnd,
    onTouchCancel: onPullTouchCancel,
    onMouseDown,
    onMouseMove,
    onMouseUp: onMouseEnd,
    onMouseLeave: onMouseEnd,
  };

  return (
    <ViewerOverlay
      role="dialog"
      aria-modal="true"
      aria-label="프로그램 사진 크게 보기"
      onClick={onBackdrop}
    >
      <ViewerTopBar onClick={(e) => e.stopPropagation()}>
        <ViewerCloseBtn type="button" onClick={onClose} aria-label="닫기">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </ViewerCloseBtn>
      </ViewerTopBar>
      <ViewerStage onClick={(e) => e.stopPropagation()}>
        {urls.length <= 1 ? (
          <ViewerViewport {...viewportHandlers}>
            <ViewerPhotoPullWrap $snap={pullSnap} style={{ transform: `translate3d(0, ${pullY}px, 0)` }}>
              <ViewerImgSingle src={urls[0]} alt="" draggable={false} />
            </ViewerPhotoPullWrap>
          </ViewerViewport>
        ) : (
          <>
            <ViewerViewport {...viewportHandlers}>
              <ViewerPhotoPullWrap $snap={pullSnap} style={{ transform: `translate3d(0, ${pullY}px, 0)` }}>
                {!usePx ? (
                  <ViewerImgSingle src={urls[0]} alt="" draggable={false} />
                ) : (
                  <ViewerTrack
                    ref={trackRef}
                    onTransitionEnd={onTransitionEnd}
                    style={{
                      width: trackWidthPx,
                      height: "100%",
                      transform: `translate3d(${translatePx}px, 0, 0)`,
                      transition:
                        dragPx !== 0 || transOff
                          ? "none"
                          : "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
                    }}
                  >
                    {loopUrls.map((url, i) => (
                      <ViewerSlide key={`viewer-loop-${i}`} style={{ width: vpWidth, flexShrink: 0 }}>
                        <ViewerSlideImg src={url} alt="" draggable={false} />
                      </ViewerSlide>
                    ))}
                  </ViewerTrack>
                )}
              </ViewerPhotoPullWrap>
            </ViewerViewport>
            <ViewerNav>
              {urls.map((_, i) => (
                <DotBtn
                  key={i}
                  type="button"
                  aria-label={`${i + 1}번째 사진으로 이동`}
                  aria-current={i === activeDot ? "true" : undefined}
                  $active={i === activeDot}
                  onClick={() => setLoopIndex(i + 1)}
                />
              ))}
            </ViewerNav>
          </>
        )}
      </ViewerStage>
    </ViewerOverlay>
  );
}

interface PlaceProgramsModalProps {
  place: MeditationPlace;
  open: boolean;
  onClose: () => void;
  initialProgramId?: string;
}

const PlaceProgramsModal = ({ place, open, onClose, initialProgramId }: PlaceProgramsModalProps) => {
  const programs = place.programs ?? [];
  const ongoing = useMemo(() => programs.filter((p) => p.status === "ongoing"), [programs]);
  const past = useMemo(() => programs.filter((p) => p.status === "past"), [programs]);

  const [tab, setTab] = useState<"ongoing" | "past">("ongoing");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [imageViewerOpen, setImageViewerOpen] = useState(false);
  const [reviewsListSheet, setReviewsListSheet] = useState<{
    heading: string;
    reviews: PlaceProgramReview[];
  } | null>(null);

  const listForTab = tab === "ongoing" ? ongoing : past;

  useEffect(() => {
    if (!open) return;
    const firstOngoing = ongoing[0]?.id;
    const firstPast = past[0]?.id;
    if (initialProgramId && programs.some((p) => p.id === initialProgramId)) {
      const p = programs.find((x) => x.id === initialProgramId)!;
      setTab(p.status === "ongoing" ? "ongoing" : "past");
      setSelectedId(initialProgramId);
    } else if (firstOngoing) {
      setTab("ongoing");
      setSelectedId(firstOngoing);
    } else if (firstPast) {
      setTab("past");
      setSelectedId(firstPast);
    } else {
      setSelectedId(null);
    }
  }, [open, initialProgramId, ongoing, past, programs]);

  const selected = programs.find((p) => p.id === selectedId) ?? null;

  const galleryUrls = useMemo(() => {
    if (!selected) return [];
    const extra = selected.imageUrls?.length ? selected.imageUrls : [];
    const all = [selected.imageUrl, ...extra.filter((u) => u !== selected.imageUrl)];
    return Array.from(new Set(all));
  }, [selected]);

  const heroMeasureActive = open && !!selected && galleryUrls.length > 1;
  const hero = useProgramGalleryLoop(galleryUrls, heroMeasureActive);

  useEffect(() => {
    if (!open) return;
    hero.syncToLoopIndex(1);
  }, [open, hero.syncToLoopIndex]);

  useEffect(() => {
    setReviewsListSheet(null);
  }, [selectedId]);

  useEffect(() => {
    if (!open) setImageViewerOpen(false);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) setReviewsListSheet(null);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (imageViewerOpen) {
        e.preventDefault();
        setImageViewerOpen(false);
        return;
      }
      onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose, imageViewerOpen]);

  const onOverlayClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) onClose();
    },
    [onClose]
  );

  const showCenterInstructors =
    place.venueKind === "명상센터" && (place.instructors?.length ?? 0) > 0;

  const openProgramImageViewer = useCallback(() => {
    if (galleryUrls.length === 0) return;
    setImageViewerOpen(true);
  }, [galleryUrls.length]);

  if (!open || programs.length === 0) return null;

  const venueLabel = place.venueKind === "명상센터" ? "명상센터" : "명상지";

  return (
    <>
    <Overlay role="presentation" onClick={onOverlayClick}>
      <Sheet
        role="dialog"
        aria-modal="true"
        aria-labelledby="place-programs-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <ModalHeader>
          <ModalTitle id="place-programs-modal-title">
            프로그램 · 후기 <span style={{ opacity: 0.75 }}>({venueLabel})</span>
          </ModalTitle>
          <CloseBtn type="button" onClick={onClose} aria-label="닫기">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </CloseBtn>
        </ModalHeader>

        {selected && (
          <>
            <Hero>
              {galleryUrls.length <= 1 ? (
                <HeroClickable type="button" $clickable={galleryUrls.length > 0} onClick={openProgramImageViewer} aria-label="사진 크게 보기">
                  <HeroImgSingle src={galleryUrls[0] ?? selected.imageUrl} alt="" draggable={false} />
                </HeroClickable>
              ) : (
                <>
                  <HeroClickable
                    type="button"
                    $clickable
                    onClick={openProgramImageViewer}
                    aria-label="사진 크게 보기"
                  >
                    <HeroViewport
                      ref={hero.viewportRef}
                      onTouchStart={hero.onTouchStart}
                      onTouchMove={hero.onTouchMove}
                      onTouchEnd={hero.onTouchEnd}
                      onTouchCancel={hero.onTouchCancel}
                    >
                      {!hero.usePx ? (
                        <HeroImgSingle src={galleryUrls[0]} alt="" draggable={false} />
                      ) : (
                        <HeroTrack
                          ref={hero.trackRef}
                          onTransitionEnd={hero.onTransitionEnd}
                          style={{
                            width: hero.trackWidthPx,
                            transform: `translate3d(${hero.translatePx}px, 0, 0)`,
                            transition:
                              hero.dragPx !== 0 || hero.transOff
                                ? "none"
                                : "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
                          }}
                        >
                          {hero.loopUrls.map((url, i) => (
                            <HeroSlide key={`hero-loop-${i}`} style={{ width: hero.vpWidth, flexShrink: 0 }}>
                              <HeroSlideImg src={url} alt="" draggable={false} />
                            </HeroSlide>
                          ))}
                        </HeroTrack>
                      )}
                    </HeroViewport>
                  </HeroClickable>
                  <HeroNav>
                    {galleryUrls.map((_, i) => (
                      <DotBtn
                        key={i}
                        type="button"
                        aria-label={`${i + 1}번째 사진으로 이동`}
                        aria-current={i === hero.activeDot ? "true" : undefined}
                        $active={i === hero.activeDot}
                        onClick={() => hero.setLoopIndex(i + 1)}
                      />
                    ))}
                  </HeroNav>
                </>
              )}
            </Hero>

            <TabRow>
              <TabBtn
                type="button"
                $active={tab === "ongoing"}
                onClick={() => {
                  setTab("ongoing");
                  const id = ongoing[0]?.id;
                  setSelectedId(id ?? null);
                }}
                disabled={ongoing.length === 0}
                style={{ opacity: ongoing.length === 0 ? 0.45 : 1 }}
              >
                진행 중 {ongoing.length > 0 ? `(${ongoing.length})` : ""}
              </TabBtn>
              <TabBtn
                type="button"
                $active={tab === "past"}
                onClick={() => {
                  setTab("past");
                  const id = past[0]?.id;
                  setSelectedId(id ?? null);
                }}
                disabled={past.length === 0}
                style={{ opacity: past.length === 0 ? 0.45 : 1 }}
              >
                지난 프로그램 {past.length > 0 ? `(${past.length})` : ""}
              </TabBtn>
            </TabRow>

            <ThumbRow>
              {listForTab.length === 0 && <EmptyLine>이 구간에 등록된 프로그램이 없어요.</EmptyLine>}
              {listForTab.map((p: PlaceProgram) => (
                <Thumb
                  key={p.id}
                  type="button"
                  $active={p.id === selectedId}
                  onClick={() => setSelectedId(p.id)}
                  aria-label={p.title}
                >
                  <img src={p.imageUrl} alt="" draggable={false} />
                </Thumb>
              ))}
            </ThumbRow>

            <ScrollBody>
              <ProgTitle>{selected.title}</ProgTitle>
              <VenueBody>
                <ReactMarkdown>{selected.bodyFromVenue}</ReactMarkdown>
              </VenueBody>
              <ReviewBlock>
                <ReviewHeading>프로그램 후기</ReviewHeading>
                {selected.reviews.length === 0 && <EmptyLine>아직 등록된 후기가 없어요.</EmptyLine>}
                {selected.reviews.slice(0, 2).map((r, i) => (
                  <ReviewSnippet key={`${r.author}-${i}`}>
                    <ReviewSnippetAuthor>
                      {r.author}
                      {r.rating != null ? ` · ${formatFiveStarRow(r.rating)}` : ""}
                    </ReviewSnippetAuthor>
                    <ReviewSnippetText>{r.body}</ReviewSnippetText>
                  </ReviewSnippet>
                ))}
                {selected.reviews.length > 2 && (
                  <EmptyLine style={{ marginBottom: 10, fontSize: "0.88rem" }}>
                    외 {selected.reviews.length - 2}건의 후기가 더 있어요.
                  </EmptyLine>
                )}
                {selected.reviews.length > 0 && (
                  <OpenAllReviewsBtn
                    type="button"
                    onClick={() =>
                      setReviewsListSheet({
                        heading: "프로그램 후기",
                        reviews: selected.reviews,
                      })
                    }
                  >
                    전체 후기 보기 · {selected.reviews.length}건
                  </OpenAllReviewsBtn>
                )}
              </ReviewBlock>

              {showCenterInstructors && (
                <InstructorSection>
                  <InstructorHeading>강사 소개 · 강사 후기</InstructorHeading>
                  {place.instructors!.map((ins) => (
                    <InstructorCard key={ins.id}>
                      <InstructorTop>
                        <InstructorPhoto src={ins.photoUrl} alt="" />
                        <div>
                          <InstructorName>{ins.name}</InstructorName>
                          <InstructorIntro>{ins.intro}</InstructorIntro>
                        </div>
                      </InstructorTop>
                      {ins.reviews.length > 0 && (
                        <>
                          <ReviewHeading style={{ fontSize: "0.95rem", marginBottom: 8 }}>
                            강사 후기
                          </ReviewHeading>
                          {ins.reviews.slice(0, 2).map((r, i) => (
                            <ReviewSnippet key={`${ins.id}-ir-${i}`}>
                              <ReviewSnippetAuthor>
                                {r.author}
                                {r.rating != null ? ` · ${formatFiveStarRow(r.rating)}` : ""}
                              </ReviewSnippetAuthor>
                              <ReviewSnippetText>{r.body}</ReviewSnippetText>
                            </ReviewSnippet>
                          ))}
                          {ins.reviews.length > 2 && (
                            <EmptyLine style={{ marginBottom: 10, fontSize: "0.88rem" }}>
                              외 {ins.reviews.length - 2}건의 후기가 더 있어요.
                            </EmptyLine>
                          )}
                          <OpenAllReviewsBtn
                            type="button"
                            onClick={() =>
                              setReviewsListSheet({
                                heading: `강사 후기 · ${ins.name}`,
                                reviews: ins.reviews,
                              })
                            }
                          >
                            강사 후기 전체 보기 · {ins.reviews.length}건
                          </OpenAllReviewsBtn>
                        </>
                      )}
                    </InstructorCard>
                  ))}
                </InstructorSection>
              )}
            </ScrollBody>
          </>
        )}
      </Sheet>
    </Overlay>
    <ReviewsListSheet
      open={reviewsListSheet != null}
      onClose={() => setReviewsListSheet(null)}
      heading={reviewsListSheet?.heading}
      reviews={reviewsListSheet?.reviews ?? []}
    />
    {imageViewerOpen && selected && galleryUrls.length > 0 && (
      <ProgramPhotoExpandOverlay
        urls={galleryUrls}
        initialLoopIndex={hero.loopIndex}
        onClose={() => setImageViewerOpen(false)}
        lockBodyScroll={false}
      />
    )}
    </>
  );
};

export default PlaceProgramsModal;
