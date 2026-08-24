import { useCallback, useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import styled, { css, keyframes } from "styled-components";
import { typography } from "@/styles/typography";
import type { InterestDto } from "@/services/meditation/repositories/interestsRepository";

/** 이 거리(px) 이상 끌면 카드가 넘어갑니다. */
const SWIPE_THRESHOLD = 72;
const EXIT_MS = 260;

type Direction = "prev" | "next";

/* ── 카드가 빠져나가고 들어오는 움직임 ──────────────────────────────────── */

const exitToRight = keyframes`
  to { opacity: 0; transform: translateX(56%) rotate(9deg) scale(0.94); }
`;
const exitToLeft = keyframes`
  to { opacity: 0; transform: translateX(-56%) rotate(-9deg) scale(0.94); }
`;
const enterFromLeft = keyframes`
  from { opacity: 0; transform: translateX(-34%) rotate(-6deg) scale(0.94); }
  to { opacity: 1; transform: translateX(0) rotate(0) scale(1); }
`;
const enterFromRight = keyframes`
  from { opacity: 0; transform: translateX(34%) rotate(6deg) scale(0.94); }
  to { opacity: 1; transform: translateX(0) rotate(0) scale(1); }
`;

const Deck = styled.div`
  position: relative;
  width: min(78vw, 260px);
  aspect-ratio: 5 / 6;
  margin: 8px auto 0;
  touch-action: pan-y;
  user-select: none;
`;

/** 뒤에 겹쳐 보이는 카드. 덱이라는 느낌을 주고, 넘길 곳이 남았음을 알려줍니다. */
const GhostCard = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 22px;
  background: ${({ theme }) => theme.colors.primary100};
  transform: translateY(10px) scale(0.95);
  opacity: 0.55;
`;

const Card = styled.div<{
  $dragging: boolean;
  $exit: Direction | null;
  $enter: Direction | null;
  $flipped: boolean;
}>`
  position: absolute;
  inset: 0;
  border-radius: 22px;
  overflow: hidden;
  cursor: grab;
  background: linear-gradient(160deg, #4f7a4a 0%, #2f4a2c 100%);
  box-shadow: 0 16px 36px rgba(75, 0, 130, 0.18);
  transition: ${({ $dragging }) => ($dragging ? "none" : "transform 0.28s cubic-bezier(0.2, 0.8, 0.3, 1)")};

  &:active {
    cursor: grabbing;
  }

  ${({ $exit }) =>
    $exit &&
    css`
      animation: ${$exit === "next" ? exitToLeft : exitToRight} ${EXIT_MS}ms ease-in forwards;
    `}

  ${({ $enter }) =>
    $enter &&
    css`
      animation: ${$enter === "next" ? enterFromRight : enterFromLeft} 0.3s
        cubic-bezier(0.2, 0.8, 0.3, 1);
    `}

  /* 설명을 편 상태에서는 사진을 조금 더 눌러 글이 읽히게 합니다. */
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 30%,
      rgba(0, 0, 0, ${({ $flipped }) => ($flipped ? 0.72 : 0.42)}) 100%
    );
    transition: background 0.25s ease;
  }

  @media (prefers-reduced-motion: reduce) {
    animation-duration: 1ms;
    transition-duration: 1ms;
  }
`;

const CardImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CardBody = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  padding: 18px 18px 22px;
  color: #fff;
  text-align: center;
`;

const CardTitle = styled.strong`
  display: block;
  ${typography.title};
  font-size: 1.15rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
`;

const CardDesc = styled.p<{ $open: boolean }>`
  margin: ${({ $open }) => ($open ? "8px 0 0" : "0")};
  ${typography.caption};
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.92);
  overflow: hidden;
  max-height: ${({ $open }) => ($open ? "9rem" : "0")};
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  transition:
    max-height 0.28s ease,
    opacity 0.22s ease,
    margin 0.28s ease;
`;

const TapHint = styled.span<{ $hidden: boolean }>`
  display: block;
  margin-top: 6px;
  ${typography.caption};
  font-size: 0.72rem;
  color: rgba(255, 255, 255, 0.7);
  opacity: ${({ $hidden }) => ($hidden ? 0 : 1)};
  transition: opacity 0.2s ease;
`;

const LikedBadge = styled.span`
  position: absolute;
  top: 14px;
  left: 14px;
  z-index: 2;
  padding: 5px 11px;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.primary600};
  color: #fff;
  ${typography.caption};
  font-size: 0.72rem;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  margin-top: 22px;
`;

const RoundButton = styled.button<{ $primary?: boolean; $liked?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ $primary }) => ($primary ? "64px" : "46px")};
  height: ${({ $primary }) => ($primary ? "64px" : "46px")};
  border-radius: 50%;
  cursor: pointer;
  background: ${({ theme, $liked }) => ($liked ? theme.colors.primary600 : theme.colors.white)};
  border: 1px solid
    ${({ theme, $liked }) => ($liked ? theme.colors.primary600 : theme.colors.primary200)};
  color: ${({ theme, $liked }) => ($liked ? theme.colors.white : theme.colors.primary600)};
  box-shadow: 0 6px 18px rgba(75, 0, 130, 0.14);
  transition:
    transform 0.16s ease,
    background 0.2s ease,
    color 0.2s ease;

  svg {
    width: ${({ $primary }) => ($primary ? "26px" : "18px")};
    height: ${({ $primary }) => ($primary ? "26px" : "18px")};
  }

  &:active {
    transform: scale(0.92);
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

const Counter = styled.p`
  margin: 14px 0 0;
  text-align: center;
  ${typography.caption};
  color: ${({ theme }) => theme.colors.text700};
`;

const Empty = styled.p`
  margin: 32px 0;
  text-align: center;
  ${typography.body2};
  color: ${({ theme }) => theme.colors.text700};
`;

interface InterestSwipeDeckProps {
  interests: InterestDto[];
  selected: string[];
  onChange: (next: string[]) => void;
}

/**
 * 관심사 카드 덱.
 *
 * - 왼쪽으로 밀면 이전 카드, 오른쪽으로 밀면 다음 카드
 * - 아래 하트를 누르면 고른 뒤 다음 카드로 넘어갑니다
 * - 카드를 누르면 설명이 펼쳐집니다
 */
export default function InterestSwipeDeck({
  interests,
  selected,
  onChange,
}: InterestSwipeDeckProps) {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [dragX, setDragX] = useState(0);
  const [exit, setExit] = useState<Direction | null>(null);
  const [enter, setEnter] = useState<Direction | null>(null);

  const dragStart = useRef<number | null>(null);
  const moved = useRef(false);
  const timers = useRef<number[]>([]);

  useEffect(() => {
    const pending = timers.current;
    return () => pending.forEach(window.clearTimeout);
  }, []);

  const total = interests.length;
  const current = interests[index];

  /** 카드를 빼내고 → 새 카드를 넣습니다. 두 애니메이션을 이어 붙여 넘어가는 느낌을 만듭니다. */
  const go = useCallback(
    (direction: Direction) => {
      if (total <= 1 || exit) return;
      const nextIndex =
        direction === "next" ? (index + 1) % total : (index - 1 + total) % total;

      setExit(direction);
      setFlipped(false);
      const timer = window.setTimeout(() => {
        setIndex(nextIndex);
        setExit(null);
        setDragX(0);
        setEnter(direction);
        const clear = window.setTimeout(() => setEnter(null), 320);
        timers.current.push(clear);
      }, EXIT_MS);
      timers.current.push(timer);
    },
    [index, total, exit]
  );

  const toggleLike = () => {
    if (!current) return;
    const isLiked = selected.includes(current.name);
    onChange(
      isLiked ? selected.filter((n) => n !== current.name) : [...selected, current.name]
    );
    // 고르면 바로 다음 장으로 넘깁니다. 취소일 때는 그 자리에 머뭅니다.
    if (!isLiked) go("next");
  };

  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (exit) return;
    dragStart.current = e.clientX;
    moved.current = false;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (dragStart.current === null) return;
    const delta = e.clientX - dragStart.current;
    if (Math.abs(delta) > 4) moved.current = true;
    setDragX(delta);
  };

  const onPointerUp = () => {
    const delta = dragX;
    dragStart.current = null;
    setDragX(0);
    if (Math.abs(delta) < SWIPE_THRESHOLD) {
      // 끌지 않고 눌렀다 뗀 것이면 설명을 펼칩니다.
      if (!moved.current) setFlipped((v) => !v);
      return;
    }
    go(delta > 0 ? "prev" : "next");
  };

  if (total === 0) {
    return <Empty>표시할 관심사가 없습니다. 건너뛰고 나중에 프로필에서 고를 수 있어요.</Empty>;
  }
  if (!current) return null;

  const liked = selected.includes(current.name);
  const rotation = dragX / 18;

  return (
    <div>
      <Deck>
        {total > 1 && <GhostCard aria-hidden="true" />}
        <Card
          key={current.id}
          $dragging={dragStart.current !== null}
          $exit={exit}
          $enter={enter}
          $flipped={flipped}
          style={
            exit || enter
              ? undefined
              : { transform: `translateX(${dragX}px) rotate(${rotation}deg)` }
          }
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
        >
          {current.imageUrl && <CardImage src={current.imageUrl} alt="" draggable={false} />}
          {liked && <LikedBadge>선택됨</LikedBadge>}
          <CardBody>
            <CardTitle>{current.name}</CardTitle>
            {current.description && (
              <>
                <CardDesc $open={flipped}>{current.description}</CardDesc>
                <TapHint $hidden={flipped}>눌러서 설명 보기</TapHint>
              </>
            )}
          </CardBody>
        </Card>
      </Deck>

      <Controls>
        <RoundButton
          type="button"
          aria-label="이전 관심사"
          disabled={total <= 1}
          onClick={() => go("prev")}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6" />
          </svg>
        </RoundButton>

        <RoundButton
          type="button"
          $primary
          $liked={liked}
          aria-label={liked ? `${current.name} 선택 해제` : `${current.name} 선택하고 다음으로`}
          aria-pressed={liked}
          onClick={toggleLike}
        >
          <svg viewBox="0 0 24 24" fill={liked ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.8 5.6a5 5 0 0 0-7.1 0L12 7.3l-1.7-1.7a5 5 0 0 0-7.1 7.1l8.8 8.8 8.8-8.8a5 5 0 0 0 0-7.1z" />
          </svg>
        </RoundButton>

        <RoundButton
          type="button"
          aria-label="다음 관심사"
          disabled={total <= 1}
          onClick={() => go("next")}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </RoundButton>
      </Controls>

      <Counter>
        {index + 1}/{total}
        {selected.length > 0 && ` · ${selected.length}개 선택`}
      </Counter>
    </div>
  );
}
