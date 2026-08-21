import { type PointerEvent as ReactPointerEvent, useEffect, useRef, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import logoImg from "@/assets/logo.png";
import kakaoImg from "@/assets/kakao.png";
import naverImg from "@/assets/naver.png";
import googleImg from "@/assets/google.png";
import { typography } from "@/styles/typography";
import { getMeditationApiBaseUrl } from "@/services/meditation/repositories/apiConfig";
import { apiFetch, useAuthStore } from "@/stores/authStore";
import { useFavoritesStore } from "@/stores/favoritesStore";
import { dismissLanding } from "@/stores/landingPreference";
import { toast } from "@/stores/toastStore";

/* ─────────────────────────  대화 스크립트  ─────────────────────────
 * 각 스텝: 봇이 순서대로 흘려보내는 말풍선 + 사용자가 고를 답변(choices).
 * 답변을 고르면 사용자 말풍선이 찍히고 다음 스텝이 이어집니다.
 * 마지막 스텝(final): 답변 대신 "튜토리얼 시작하기" CTA를 띄웁니다.
 */
/** 대화 턴: 봇이 설명하고 → 사용자가 좌(스킵/분기) · 우(계속) 중 답을 고르며 진행 */
type ChoiceNext = number | "login" | "exit" | "tutorial";
interface Choice {
  label: string;
  next: ChoiceNext;
}
interface Turn {
  bot: string[];
  left?: Choice; // 보조(외곽선): 스킵/로그인
  right?: Choice; // 주(채움): 계속 진행
  auto?: number; // 선택 없이 이 턴으로 자동으로 이어짐(설명 구간)
}

const TURNS: Turn[] = [
  // 0. 인사 + 회원/처음 분기
  {
    bot: ["안녕하세요 🎉", "명상 웰니스 지도에 오신 걸 환영해요!", "이전에 명상 웰니스 지도를 이용해본 적 있나요?"],
    left: { label: "네, 회원이에요 😊", next: 1 },
    right: { label: "처음이에요 🚀", next: 2 },
  },
  // 1. 회원: 로그인 안내 + "그래도 소개받을래요?"
  {
    bot: ["반가워요! 로그인만 하면 바로 이용할 수 있어요 😊", "혹시 명상 웰니스 지도가 아직 낯설다면, 잠깐 소개해 드릴까요?"],
    left: { label: "음, 괜찮아 😊", next: "login" },
    right: { label: "좋아, 들어볼게 ✨", next: 2 },
  },
  // 2. 소개 ① (선택 없이 자동으로 이어짐)
  {
    bot: ["바쁜 하루 속, 마음 쉴 곳 찾기 어려우셨죠? 🤔", "내 주변 명상 공간을 지도에서 바로 찾게 도와드려요 🗺️"],
    auto: 3,
  },
  // 3. 소개 ② (선택 없이 자동으로 이어짐)
  {
    bot: ["검증된 전문가의 클래스와 리트릿도 살펴보고 예약할 수 있어요 🧘", "마음에 든 공간은 찜하고, 나만의 명상 기록도 남길 수 있고요 📖"],
    auto: 4,
  },
  // 4. 튜토리얼 CTA
  {
    bot: ["이제 어떻게 쓰는지 튜토리얼로 딱 보여드릴게요 🧚", "1분이면 충분해요!"],
    left: { label: "나중에 할래요", next: "exit" },
    right: { label: "튜토리얼 볼래요 🧚", next: "tutorial" },
  },
];

/* ── 튜토리얼 미리보기(스크린샷 자리 — 임시 플레이스홀더) ── */
type PreviewKey = "map" | "expert" | "record";

const PREVIEWS: Record<PreviewKey, { emoji: string; title: string; bg: string }> = {
  map: { emoji: "🗺️", title: "내 주변 명상 공간 지도", bg: "#efe9f6" },
  expert: { emoji: "🧘", title: "전문가 클래스 · 리트릿", bg: "#f6ece8" },
  record: { emoji: "📖", title: "찜 · 나의 명상 기록", bg: "#eaf0ec" },
};

const TUTORIAL: { key: PreviewKey; caption: string }[] = [
  { key: "map", caption: "지도에서 내 주변 명상 공간을 골라요" },
  { key: "expert", caption: "전문가 클래스와 리트릿을 예약해요" },
  { key: "record", caption: "찜하고 나만의 명상 기록을 남겨요" },
];

/* ─────────────────────────  애니메이션  ───────────────────────── */

const bubbleIn = keyframes`
  from { opacity: 0; transform: translateY(14px) scale(0.98); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`;

const dotBounce = keyframes`
  0%, 80%, 100% { transform: translateY(0); opacity: 0.4; }
  40% { transform: translateY(-5px); opacity: 1; }
`;

const footerIn = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
`;

const overlayIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const modalIn = keyframes`
  from { opacity: 0; transform: translateY(18px) scale(0.97); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`;

const zoomIn = keyframes`
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
`;

/* ─────────────────────────  공통 레이아웃  ───────────────────────── */

const Screen = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.warmCream};
`;

const Header = styled.header`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: calc(14px + env(safe-area-inset-top, 0px)) 20px 12px;
`;

const HeaderTitle = styled.h1`
  margin: 0;
  ${typography.title};
  color: ${({ theme }) => theme.colors.text900};
`;

const TextButton = styled.button`
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.text700};
  ${typography.body2};
  cursor: pointer;
  padding: 6px 4px;

  &:hover {
    color: ${({ theme }) => theme.colors.primary600};
  }
`;

const ProgressTrack = styled.div`
  flex-shrink: 0;
  height: 3px;
  margin: 0 20px;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme }) => theme.colors.primary100};
  overflow: hidden;
`;

const ProgressFill = styled.div<{ $pct: number }>`
  height: 100%;
  width: ${({ $pct }) => `${$pct}%`};
  border-radius: inherit;
  background: ${({ theme }) => theme.colors.primary400};
  transition: width 0.4s cubic-bezier(0.22, 1, 0.36, 1);
`;

/* ── 채팅 ── */

const Transcript = styled.div`
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
  padding: 18px 18px 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Row = styled.div<{ $user?: boolean }>`
  display: flex;
  align-items: flex-end;
  gap: 8px;
  justify-content: ${({ $user }) => ($user ? "flex-end" : "flex-start")};
`;

const Avatar = styled.div<{ $ghost?: boolean }>`
  flex-shrink: 0;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary50};
  display: grid;
  place-items: center;
  visibility: ${({ $ghost }) => ($ghost ? "hidden" : "visible")};

  img {
    width: 22px;
    height: 22px;
    object-fit: contain;
  }
`;

const Bubble = styled.div<{ $user?: boolean }>`
  max-width: 76%;
  padding: 12px 15px;
  ${typography.body1};
  line-height: 1.45;
  word-break: keep-all;
  animation: ${bubbleIn} 0.36s cubic-bezier(0.22, 1, 0.36, 1) both;

  ${({ $user, theme }) =>
    $user
      ? `
    background: ${theme.colors.primary600};
    color: ${theme.colors.white};
    border-radius: 20px 20px 6px 20px;
    box-shadow: 0 6px 16px rgba(75, 0, 130, 0.14);
  `
      : `
    background: ${theme.colors.white};
    color: ${theme.colors.text900};
    border-radius: 20px 20px 20px 6px;
    box-shadow: 0 6px 16px rgba(61, 61, 61, 0.06);
  `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const TypingBubble = styled.div`
  display: inline-flex;
  gap: 5px;
  padding: 15px 16px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 20px 20px 20px 6px;
  box-shadow: 0 6px 16px rgba(61, 61, 61, 0.06);
  animation: ${bubbleIn} 0.24s ease both;

  span {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary200};
    animation: ${dotBounce} 1.3s ease-in-out infinite;
  }
  span:nth-child(2) {
    animation-delay: 0.18s;
  }
  span:nth-child(3) {
    animation-delay: 0.36s;
  }
`;

/* ── Footer: 선택지 / 최종 CTA ── */

const Footer = styled.div`
  flex-shrink: 0;
  background: ${({ theme }) => theme.colors.white};
  border-top: 1px solid ${({ theme }) => theme.colors.primary100};
  box-shadow: 0 -6px 20px rgba(61, 61, 61, 0.05);
  padding: 16px 18px calc(18px + env(safe-area-inset-bottom, 0px));
`;

const ChoiceRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  animation: ${footerIn} 0.3s cubic-bezier(0.22, 1, 0.36, 1) both;
`;

const ChoiceButton = styled.button<{ $primary?: boolean }>`
  width: 100%;
  min-width: 0;
  padding: 16px 12px;
  ${typography.buttonMd};
  border-radius: ${({ theme }) => theme.radii.md};
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  transition: transform 0.15s ease, background 0.2s ease, border-color 0.2s ease;

  ${({ $primary, theme }) =>
    $primary
      ? `
    border: none;
    background: ${theme.colors.primary500};
    color: ${theme.colors.white};
    &:hover { background: ${theme.colors.primary600}; }
  `
      : `
    border: 1.5px solid ${theme.colors.primary300};
    background: ${theme.colors.white};
    color: ${theme.colors.primary600};
    &:hover { background: ${theme.colors.primary50}; }
  `}

  &:hover {
    transform: translateY(-1px);
  }

  &:active {
    transform: scale(0.98);
  }
`;

const FinalActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  animation: ${footerIn} 0.3s cubic-bezier(0.22, 1, 0.36, 1) both;
`;

const PrimaryButton = styled.button`
  width: 100%;
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.primary500};
  color: ${({ theme }) => theme.colors.white};
  padding: 16px 20px;
  ${typography.buttonMd};
  cursor: pointer;
  transition: transform 0.15s ease, background 0.2s ease, opacity 0.2s ease;

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.primary600};
    transform: translateY(-1px);
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const GhostTextButton = styled.button`
  display: block;
  margin: 2px auto 0;
  padding: 10px 4px;
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors.text700};
  ${typography.body2};
  text-decoration: underline;
  text-underline-offset: 4px;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primary600};
  }
`;

/* ── 튜토리얼 캐러셀 ── */

const Dots = styled.div`
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  gap: 8px;
  padding: 8px 0 4px;
`;

const Dot = styled.span<{ $active: boolean }>`
  width: ${({ $active }) => ($active ? "22px" : "8px")};
  height: 8px;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme, $active }) => ($active ? theme.colors.primary400 : theme.colors.primary100)};
  transition: width 0.25s ease, background 0.25s ease;
`;

const Carousel = styled.div`
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior-x: contain;

  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
`;

const Slide = styled.div`
  flex: 0 0 100%;
  width: 100%;
  height: 100%;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 22px;
  padding: 8px 24px 12px;
  box-sizing: border-box;
`;

const PreviewCard = styled.button<{ $bg: string }>`
  border: none;
  padding: 0;
  cursor: zoom-in;
  width: min(78%, 280px);
  aspect-ratio: 9 / 15;
  border-radius: 28px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 20px 44px rgba(61, 61, 61, 0.12);
  display: flex;
  flex-direction: column;
  transition: transform 0.18s ease;

  &:hover {
    transform: translateY(-3px);
  }
  &:active {
    transform: scale(0.99);
  }
`;

const PreviewArt = styled.div<{ $bg: string }>`
  flex: 1 1 auto;
  display: grid;
  place-items: center;
  font-size: 5.4rem;
  background: ${({ $bg }) => $bg};
`;

const PreviewBar = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 14px 16px;
  ${typography.body2};
  color: ${({ theme }) => theme.colors.text700};
  border-top: 1px solid ${({ theme }) => theme.colors.primary100};

  &::before {
    content: "미리보기";
    ${typography.caption};
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary600};
    background: ${({ theme }) => theme.colors.primary50};
    padding: 2px 7px;
    border-radius: ${({ theme }) => theme.radii.pill};
  }
`;

const SlideCaption = styled.p`
  margin: 0;
  text-align: center;
  ${typography.title};
  color: ${({ theme }) => theme.colors.text900};
`;

const ZoomHint = styled.span`
  ${typography.caption};
  color: ${({ theme }) => theme.colors.text700};
`;

/* ── 확대 라이트박스 ── */

const ZoomOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 90;
  background: rgba(0, 0, 0, 0.72);
  display: grid;
  place-items: center;
  padding: 24px;
  cursor: zoom-out;
  animation: ${overlayIn} 0.2s ease both;
`;

const ZoomCard = styled.div<{ $bg: string }>`
  width: min(100%, 420px);
  aspect-ratio: 9 / 15;
  max-height: 82vh;
  border-radius: 30px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  cursor: grab;
  touch-action: none; /* 세로 드래그를 스크롤이 아닌 제스처로 받기 */
  animation: ${zoomIn} 0.26s cubic-bezier(0.22, 1, 0.36, 1) both;

  &:active {
    cursor: grabbing;
  }
`;

const ZoomArt = styled.div<{ $bg: string }>`
  flex: 1 1 auto;
  display: grid;
  place-items: center;
  font-size: 8rem;
  background: ${({ $bg }) => $bg};
`;

/* ── 로그인 모달 (별도 창) ── */

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 80;
  background: rgba(0, 0, 0, 0.38);
  display: grid;
  place-items: center;
  padding: 20px;
  animation: ${overlayIn} 0.2s ease both;
`;

const Modal = styled.div`
  position: relative;
  width: min(100%, 400px);
  padding: 28px 22px 22px;
  border-radius: 26px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.22);
  animation: ${modalIn} 0.28s cubic-bezier(0.22, 1, 0.36, 1) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const ModalClose = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 34px;
  height: 34px;
  border: none;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary50};
  color: ${({ theme }) => theme.colors.text700};
  font-size: 1.8rem;
  line-height: 1;
  cursor: pointer;
  display: grid;
  place-items: center;

  &:hover {
    color: ${({ theme }) => theme.colors.primary600};
  }
`;

const ModalTitle = styled.h2`
  margin: 0;
  text-align: center;
  ${typography.title};
  color: ${({ theme }) => theme.colors.text900};
`;

const ModalDesc = styled.p`
  margin: 8px 0 22px;
  text-align: center;
  ${typography.body2};
  color: ${({ theme }) => theme.colors.text700};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Input = styled.input`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.primary200};
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.text900};
  ${typography.body2};
  padding: 14px 20px;
  transition: border-color 0.2s ease, transform 0.2s ease;

  &::placeholder {
    color: ${({ theme }) => theme.colors.text700};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary400};
    transform: translateY(-1px);
  }
`;

const Divider = styled.div`
  margin: 18px 0 14px;
  display: flex;
  align-items: center;
  gap: 12px;
  color: ${({ theme }) => theme.colors.text700};
  ${typography.caption};

  &::before,
  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background: ${({ theme }) => theme.colors.primary200};
  }
`;

const SocialRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const socialCircle = `
  width: 52px;
  height: 52px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  padding: 0;
  cursor: pointer;
  border: none;
  background: transparent;
  transition: transform 0.16s ease;
`;

const SocialAnchor = styled.a`
  ${socialCircle}
  &:hover { transform: translateY(-3px); }
`;

const SocialButton = styled.button`
  ${socialCircle}
  &:disabled { opacity: 0.5; cursor: not-allowed; }
`;

const SocialIcon = styled.img`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  object-fit: cover;
`;

const SignUpRow = styled.div`
  margin: 20px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  ${typography.body2};
  color: ${({ theme }) => theme.colors.text900};
`;

const SignUpLink = styled.button`
  border: none;
  padding: 0;
  background: none;
  font: inherit;
  color: ${({ theme }) => theme.colors.primary300};
  font-weight: 700;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primary400};
    text-decoration: underline;
    text-underline-offset: 3px;
  }
`;

/* ─────────────────────────  컴포넌트  ───────────────────────── */

interface LogItem {
  from: "bot" | "user";
  text: string;
  /** 봇 발화 그룹의 첫 메시지 — 이때만 아바타를 표시(연속 메시지는 그룹핑) */
  head?: boolean;
}

type Phase = "chat" | "tutorial";

const LandingPage = () => {
  const navigate = useNavigate();
  const authReady = useAuthStore((s) => s.authReady);
  const isAuthed = useAuthStore((s) => !!s.accessToken);

  const [phase, setPhase] = useState<Phase>("chat");

  const [log, setLog] = useState<LogItem[]>([]);
  const [typing, setTyping] = useState(false);
  const [turnIndex, setTurnIndex] = useState(0);
  const [awaiting, setAwaiting] = useState(false); // 현재 턴 봇 발화 끝 → 답변 대기

  const [tutorialIndex, setTutorialIndex] = useState(0);
  const [zoomed, setZoomed] = useState<PreviewKey | null>(null);
  const [dragY, setDragY] = useState(0); // 줌 사진 세로 드래그(스와이프-투-디스미스)
  const dragStartRef = useRef<number | null>(null);

  const [authOpen, setAuthOpen] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [busy, setBusy] = useState(false);

  const bottomRef = useRef<HTMLDivElement | null>(null);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const oauthApiBase = getMeditationApiBaseUrl() ?? "";

  // 현재 턴의 봇 메시지를 순서대로 흘려보내고, 끝나면 답변(선택지)을 띄움
  // (StrictMode의 이중 마운트는 cleanup에서 타이머를 취소하므로 중복 없이 동작)
  useEffect(() => {
    const turn = TURNS[turnIndex];
    if (!turn) return;
    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];
    setAwaiting(false);
    let i = 0;

    const showNext = () => {
      if (cancelled) return;
      if (i >= turn.bot.length) {
        setTyping(false);
        if (typeof turn.auto === "number") {
          // 설명 구간: 선택 없이 잠깐 뒤 다음 턴으로 자동 진행
          const nextTurn = turn.auto;
          timers.push(
            setTimeout(() => {
              if (!cancelled) setTurnIndex(nextTurn);
            }, 500)
          );
        } else {
          setAwaiting(true);
        }
        return;
      }
      setTyping(true);
      const wait = i === 0 ? 450 : 720;
      timers.push(
        setTimeout(() => {
          if (cancelled) return;
          setTyping(false);
          const text = turn.bot[i]; // i 증가 전에 값을 캡처 (업데이터 지연 실행 대비)
          const head = i === 0;
          setLog((prev) => [...prev, { from: "bot", text, head }]);
          i += 1;
          timers.push(setTimeout(showNext, 300));
        }, wait)
      );
    };
    showNext();

    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, [turnIndex]);

  // 새 메시지·타이핑·전환 시 하단으로 스크롤
  useEffect(() => {
    if (phase !== "chat") return;
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [log, typing, awaiting, phase]);

  // Esc로 오버레이 닫기
  useEffect(() => {
    if (!authOpen && !zoomed) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setAuthOpen(false);
      setZoomed(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [authOpen, zoomed]);

  // 이미 로그인한 사용자는 랜딩을 건너뜀
  if (authReady && isAuthed) {
    return <Navigate to="/" replace />;
  }

  const browseAsGuest = () => {
    dismissLanding();
    navigate("/");
  };

  // 답변 선택: 사용자 말풍선을 찍고, next에 따라 진행/로그인/나가기/튜토리얼
  const pick = (choice: Choice) => {
    setAwaiting(false);
    setLog((prev) => [...prev, { from: "user", text: choice.label }]);
    const next = choice.next;
    if (next === "login") setAuthOpen(true);
    else if (next === "exit") browseAsGuest();
    else if (next === "tutorial") setPhase("tutorial");
    else setTurnIndex(next);
  };

  const goSignup = () => navigate("/profile?start=signup");

  // 줌 라이트박스: 열기/닫기 + 세로 드래그로 닫기
  const openZoom = (key: PreviewKey) => {
    dragStartRef.current = null;
    setDragY(0);
    setZoomed(key);
  };
  const closeZoom = () => {
    dragStartRef.current = null;
    setDragY(0);
    setZoomed(null);
  };
  const onZoomPointerDown = (e: ReactPointerEvent) => {
    dragStartRef.current = e.clientY;
  };
  const onZoomPointerMove = (e: ReactPointerEvent) => {
    if (dragStartRef.current === null) return;
    setDragY(e.clientY - dragStartRef.current);
  };
  const onZoomPointerEnd = (e: ReactPointerEvent) => {
    if (dragStartRef.current === null) return;
    const dy = e.clientY - dragStartRef.current;
    dragStartRef.current = null;
    if (Math.abs(dy) > 80) closeZoom();
    else setDragY(0);
  };

  const onCarouselScroll = () => {
    const el = carouselRef.current;
    if (!el) return;
    const idx = Math.round(el.scrollLeft / el.clientWidth);
    setTutorialIndex(Math.max(0, Math.min(TUTORIAL.length - 1, idx)));
  };

  const handleLogin = async () => {
    if (!getMeditationApiBaseUrl()) {
      toast.error("지금은 이용할 수 없어요. 잠시 후 다시 시도해 주세요.");
      return;
    }
    const em = loginEmail.trim();
    if (!em || !loginPassword) {
      toast.error("이메일과 비밀번호를 입력해 주세요.");
      return;
    }
    setBusy(true);
    try {
      const res = await apiFetch("/auth/login", {
        method: "POST",
        body: JSON.stringify({ email: em, password: loginPassword }),
      });
      if (!res.ok) {
        let code = "";
        try {
          const j = (await res.json()) as { error?: string };
          code = j.error ?? "";
        } catch {
          /* ignore */
        }
        toast.error(
          code === "INVALID_CREDENTIALS"
            ? "이메일 또는 비밀번호를 확인해 주세요."
            : "로그인에 실패했습니다."
        );
        return;
      }
      await useAuthStore.getState().setSession();
      await useFavoritesStore.getState().pullFromServer();
      setLoginPassword("");
      // 로그인까지 마친 사용자에게는 이 브라우저에서 랜딩을 다시 띄우지 않습니다.
      dismissLanding();
      navigate("/");
    } catch {
      toast.error("잠시 후 다시 시도해 주세요.");
    } finally {
      setBusy(false);
    }
  };

  const turn = TURNS[turnIndex];
  const chatPct = Math.round(((turnIndex + (awaiting ? 1 : 0)) / TURNS.length) * 100);
  const tutorialPct = Math.round(((tutorialIndex + 1) / TUTORIAL.length) * 100);
  const showChoices = phase === "chat" && awaiting && !!turn?.left && !!turn?.right;
  const isLastSlide = tutorialIndex >= TUTORIAL.length - 1;

  return (
    <Screen>
      <Header>
        <HeaderTitle>{phase === "chat" ? "시작하기" : "튜토리얼"}</HeaderTitle>
        <TextButton type="button" onClick={browseAsGuest}>
          나가기
        </TextButton>
      </Header>
      <ProgressTrack>
        <ProgressFill $pct={phase === "chat" ? chatPct : tutorialPct} />
      </ProgressTrack>

      {phase === "chat" && (
        <>
          <Transcript>
            {log.map((item, idx) =>
              item.from === "user" ? (
                <Row key={idx} $user>
                  <Bubble $user>{item.text}</Bubble>
                </Row>
              ) : (
                <Row key={idx}>
                  <Avatar $ghost={!item.head}>
                    <img src={logoImg} alt="" />
                  </Avatar>
                  <Bubble>{item.text}</Bubble>
                </Row>
              )
            )}

            {typing && (
              <Row>
                <Avatar>
                  <img src={logoImg} alt="" />
                </Avatar>
                <TypingBubble>
                  <span />
                  <span />
                  <span />
                </TypingBubble>
              </Row>
            )}

            <div ref={bottomRef} />
          </Transcript>

          {showChoices && turn?.left && turn?.right && (
            <Footer>
              <ChoiceRow>
                <ChoiceButton type="button" onClick={() => pick(turn.left!)}>
                  {turn.left.label}
                </ChoiceButton>
                <ChoiceButton type="button" $primary onClick={() => pick(turn.right!)}>
                  {turn.right.label}
                </ChoiceButton>
              </ChoiceRow>
            </Footer>
          )}
        </>
      )}

      {phase === "tutorial" && (
        <>
          <Dots>
            {TUTORIAL.map((t, i) => (
              <Dot key={t.key} $active={i === tutorialIndex} />
            ))}
          </Dots>

          <Carousel ref={carouselRef} onScroll={onCarouselScroll}>
            {TUTORIAL.map((t) => {
              const p = PREVIEWS[t.key];
              return (
                <Slide key={t.key}>
                  <PreviewCard
                    type="button"
                    $bg={p.bg}
                    onClick={() => openZoom(t.key)}
                    aria-label={`${p.title} 크게 보기`}
                  >
                    <PreviewArt $bg={p.bg}>{p.emoji}</PreviewArt>
                    <PreviewBar>{p.title}</PreviewBar>
                  </PreviewCard>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                    <SlideCaption>{t.caption}</SlideCaption>
                    <ZoomHint>탭하면 크게 볼 수 있어요</ZoomHint>
                  </div>
                </Slide>
              );
            })}
          </Carousel>

          <Footer>
            <FinalActions>
              {isLastSlide ? (
                <PrimaryButton type="button" onClick={() => setAuthOpen(true)}>
                  명상 웰니스 지도 시작하기 ✨
                </PrimaryButton>
              ) : (
                <PrimaryButton
                  type="button"
                  onClick={() => {
                    const el = carouselRef.current;
                    if (el) el.scrollTo({ left: (tutorialIndex + 1) * el.clientWidth, behavior: "smooth" });
                  }}
                >
                  다음 →
                </PrimaryButton>
              )}
              <GhostTextButton type="button" onClick={browseAsGuest}>
                나중에 할래요
              </GhostTextButton>
            </FinalActions>
          </Footer>
        </>
      )}

      {zoomed && (
        <ZoomOverlay onClick={closeZoom}>
          <ZoomCard
            $bg={PREVIEWS[zoomed].bg}
            onClick={(e) => e.stopPropagation()}
            onPointerDown={onZoomPointerDown}
            onPointerMove={onZoomPointerMove}
            onPointerUp={onZoomPointerEnd}
            onPointerCancel={onZoomPointerEnd}
            style={
              dragY !== 0
                ? {
                    transform: `translateY(${dragY}px)`,
                    opacity: Math.max(0.4, 1 - Math.abs(dragY) / 500),
                    animation: "none",
                  }
                : undefined
            }
          >
            <ZoomArt $bg={PREVIEWS[zoomed].bg}>{PREVIEWS[zoomed].emoji}</ZoomArt>
            <PreviewBar>{PREVIEWS[zoomed].title}</PreviewBar>
          </ZoomCard>
        </ZoomOverlay>
      )}

      {authOpen && (
        <Overlay
          onClick={(e) => {
            if (e.target === e.currentTarget) setAuthOpen(false);
          }}
        >
          <Modal role="dialog" aria-modal="true" aria-label="로그인">
            <ModalClose type="button" aria-label="닫기" onClick={() => setAuthOpen(false)}>
              ×
            </ModalClose>
            <ModalTitle>로그인</ModalTitle>
            <ModalDesc>로그인하고 나에게 딱 맞는 명상 공간을 찾아보세요.</ModalDesc>

            <Form
              onSubmit={(e) => {
                e.preventDefault();
                void handleLogin();
              }}
            >
              <Input
                type="email"
                placeholder="이메일"
                aria-label="이메일"
                autoComplete="email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
              />
              <Input
                type="password"
                placeholder="비밀번호"
                aria-label="비밀번호"
                autoComplete="current-password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />
              <PrimaryButton type="submit" disabled={busy}>
                {busy ? "처리 중…" : "로그인하기"}
              </PrimaryButton>
            </Form>

            <Divider>또는</Divider>

            <SocialRow>
              {oauthApiBase ? (
                <SocialAnchor href={`${oauthApiBase}/oauth2/authorization/kakao`} aria-label="카카오로 로그인">
                  <SocialIcon src={kakaoImg} alt="" />
                </SocialAnchor>
              ) : (
                <SocialButton type="button" disabled aria-label="카카오로 로그인 (API 주소 필요)">
                  <SocialIcon src={kakaoImg} alt="" />
                </SocialButton>
              )}
              {oauthApiBase ? (
                <SocialAnchor href={`${oauthApiBase}/oauth2/authorization/naver`} aria-label="네이버로 로그인">
                  <SocialIcon src={naverImg} alt="" />
                </SocialAnchor>
              ) : (
                <SocialButton type="button" disabled aria-label="네이버로 로그인 (API 주소 필요)">
                  <SocialIcon src={naverImg} alt="" />
                </SocialButton>
              )}
              {oauthApiBase ? (
                <SocialAnchor href={`${oauthApiBase}/oauth2/authorization/google`} aria-label="구글로 로그인">
                  <SocialIcon src={googleImg} alt="" />
                </SocialAnchor>
              ) : (
                <SocialButton type="button" disabled aria-label="구글로 로그인 (API 주소 필요)">
                  <SocialIcon src={googleImg} alt="" />
                </SocialButton>
              )}
            </SocialRow>

            <SignUpRow>
              <span>아직 회원이 아니신가요?</span>
              <SignUpLink type="button" onClick={goSignup}>
                회원가입
              </SignUpLink>
            </SignUpRow>
          </Modal>
        </Overlay>
      )}
    </Screen>
  );
};

export default LandingPage;
