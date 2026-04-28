import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import ReactMarkdown from "react-markdown";
import ReviewsListSheet from "@/components/meditation/ReviewsListSheet";
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
  /** 무한 슬라이드: 0 = 마지막 장 클론, 1..n = 실제, n+1 = 첫 장 클론 (n = galleryUrls.length) */
  const [heroLoopIndex, setHeroLoopIndex] = useState(1);
  /** 클론 경계 재정렬 시 한 프레임 transition 끔 */
  const [heroTransOff, setHeroTransOff] = useState(false);
  const [reviewsListSheet, setReviewsListSheet] = useState<{
    heading: string;
    reviews: PlaceProgramReview[];
  } | null>(null);

  const heroViewportRef = useRef<HTMLDivElement>(null);
  const heroTrackRef = useRef<HTMLDivElement>(null);
  const heroLoopIndexRef = useRef(1);
  const heroTouchStartX = useRef<number | null>(null);
  const heroDragPxRef = useRef(0);
  /** 끝에서는 화면에 드래그를 보이지 않게 하고, 판정만 raw 거리로 함 */
  const heroGestureRawRef = useRef(0);
  const [heroDragPx, setHeroDragPx] = useState(0);
  /** 픽셀 단위 슬라이드 폭 — % 반올림으로 클론↔실제 점프 티 나는 것 방지 */
  const [heroVpWidth, setHeroVpWidth] = useState(0);

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
    setHeroTransOff(false);
    setHeroLoopIndex(1);
  }, [open, initialProgramId, ongoing, past, programs]);

  const selected = programs.find((p) => p.id === selectedId) ?? null;

  const galleryUrls = useMemo(() => {
    if (!selected) return [];
    const extra = selected.imageUrls?.length ? selected.imageUrls : [];
    const all = [selected.imageUrl, ...extra.filter((u) => u !== selected.imageUrl)];
    return Array.from(new Set(all));
  }, [selected]);

  useLayoutEffect(() => {
    if (!open || galleryUrls.length <= 1) {
      setHeroVpWidth(0);
      return;
    }
    const el = heroViewportRef.current;
    if (!el) return;

    const measure = () => {
      const w = el.getBoundingClientRect().width;
      if (w > 0) setHeroVpWidth(w);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [open, selectedId, galleryUrls.length]);

  /** [마지막 클론, …원본…, 첫 클론] — 양끝이 이어진 것처럼 넘김 */
  const heroLoopUrls = useMemo(() => {
    const n = galleryUrls.length;
    if (n <= 1) return galleryUrls;
    return [galleryUrls[n - 1], ...galleryUrls, galleryUrls[0]];
  }, [galleryUrls]);

  const heroSlideCount = heroLoopUrls.length;

  const heroActiveDot = useMemo(() => {
    const n = galleryUrls.length;
    if (n <= 1) return 0;
    if (heroLoopIndex === 0) return n - 1;
    if (heroLoopIndex === n + 1) return 0;
    return heroLoopIndex - 1;
  }, [galleryUrls.length, heroLoopIndex]);

  const onHeroTouchStart = useCallback(
    (e: React.TouchEvent) => {
      if (galleryUrls.length <= 1) return;
      heroTouchStartX.current = e.touches[0].clientX;
      heroDragPxRef.current = 0;
      heroGestureRawRef.current = 0;
      setHeroDragPx(0);
    },
    [galleryUrls.length]
  );

  const onHeroTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (heroTouchStartX.current == null || galleryUrls.length <= 1) return;
      const w = heroViewportRef.current?.offsetWidth ?? 320;
      const n = galleryUrls.length;
      let raw = e.touches[0].clientX - heroTouchStartX.current;
      const max = w * 0.45;
      raw = Math.max(-max, Math.min(max, raw));
      heroGestureRawRef.current = raw;

      const idx = heroLoopIndexRef.current;
      let visual = raw;
      if (idx === 1 && raw > 0) visual = 0;
      if (idx === n && raw < 0) visual = 0;

      heroDragPxRef.current = visual;
      setHeroDragPx(visual);
    },
    [galleryUrls.length]
  );

  const endHeroTouch = useCallback(() => {
    heroTouchStartX.current = null;
    heroDragPxRef.current = 0;
    heroGestureRawRef.current = 0;
    setHeroDragPx(0);
  }, []);

  const onHeroTouchEnd = useCallback(() => {
    if (heroTouchStartX.current == null || galleryUrls.length <= 1) {
      endHeroTouch();
      return;
    }
    const w = heroViewportRef.current?.offsetWidth ?? 320;
    const threshold = Math.min(48, w * 0.14);
    const d = heroGestureRawRef.current;
    const n = galleryUrls.length;
    setHeroLoopIndex((prev) => {
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
    endHeroTouch();
  }, [galleryUrls.length, endHeroTouch]);

  const handleHeroTrackTransitionEnd = useCallback(
    (e: React.TransitionEvent<HTMLDivElement>) => {
      if (!e.propertyName.toLowerCase().includes("transform")) return;
      if (e.target !== e.currentTarget) return;
      const n = galleryUrls.length;
      if (n <= 1) return;
      const prev = heroLoopIndexRef.current;
      if (prev === n + 1) {
        setHeroTransOff(true);
        setHeroLoopIndex(1);
      } else if (prev === 0) {
        setHeroTransOff(true);
        setHeroLoopIndex(n);
      }
    },
    [galleryUrls.length]
  );

  useLayoutEffect(() => {
    if (!heroTransOff) return;
    const track = heroTrackRef.current;
    if (track) {
      void track.offsetWidth;
    }
    let innerId: number | null = null;
    const outerId = requestAnimationFrame(() => {
      innerId = requestAnimationFrame(() => {
        setHeroTransOff(false);
      });
    });
    return () => {
      cancelAnimationFrame(outerId);
      if (innerId != null) cancelAnimationFrame(innerId);
    };
  }, [heroLoopIndex, heroTransOff]);

  useEffect(() => {
    endHeroTouch();
  }, [selectedId, endHeroTouch]);

  useEffect(() => {
    setHeroTransOff(false);
    setHeroLoopIndex(1);
    setHeroVpWidth(0);
  }, [selectedId]);

  useEffect(() => {
    setReviewsListSheet(null);
  }, [selectedId]);

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
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const onOverlayClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) onClose();
    },
    [onClose]
  );

  const showCenterInstructors =
    place.venueKind === "명상센터" && (place.instructors?.length ?? 0) > 0;

  heroLoopIndexRef.current = heroLoopIndex;

  if (!open || programs.length === 0) return null;

  const venueLabel = place.venueKind === "명상센터" ? "명상센터" : "명상지";

  const heroUsePx = galleryUrls.length > 1 && heroVpWidth > 0;
  const heroTrackWidthPx = heroUsePx ? heroSlideCount * heroVpWidth : undefined;
  const heroTranslatePx = heroUsePx ? -(heroLoopIndex * heroVpWidth) + heroDragPx : 0;

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
                <HeroImgSingle src={galleryUrls[0] ?? selected.imageUrl} alt="" draggable={false} />
              ) : (
                <>
                  <HeroViewport
                    ref={heroViewportRef}
                    onTouchStart={onHeroTouchStart}
                    onTouchMove={onHeroTouchMove}
                    onTouchEnd={onHeroTouchEnd}
                    onTouchCancel={endHeroTouch}
                  >
                    {!heroUsePx ? (
                      <HeroImgSingle src={galleryUrls[0]} alt="" draggable={false} />
                    ) : (
                    <HeroTrack
                      ref={heroTrackRef}
                      onTransitionEnd={handleHeroTrackTransitionEnd}
                      style={{
                        width: heroTrackWidthPx,
                        transform: `translate3d(${heroTranslatePx}px, 0, 0)`,
                        transition:
                          heroDragPx !== 0 || heroTransOff
                            ? "none"
                            : "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
                      }}
                    >
                      {heroLoopUrls.map((url, i) => (
                        <HeroSlide
                          key={`hero-loop-${i}`}
                          style={{ width: heroVpWidth, flexShrink: 0 }}
                        >
                          <HeroSlideImg src={url} alt="" draggable={false} />
                        </HeroSlide>
                      ))}
                    </HeroTrack>
                    )}
                  </HeroViewport>
                  <HeroNav>
                    {galleryUrls.map((_, i) => (
                      <DotBtn
                        key={i}
                        type="button"
                        aria-label={`${i + 1}번째 사진으로 이동`}
                        aria-current={i === heroActiveDot ? "true" : undefined}
                        $active={i === heroActiveDot}
                        onClick={() => setHeroLoopIndex(i + 1)}
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
                      {r.rating != null ? ` · ${"★".repeat(r.rating)}` : ""}
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
                                {r.rating != null ? ` · ${"★".repeat(r.rating)}` : ""}
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
    </>
  );
};

export default PlaceProgramsModal;
