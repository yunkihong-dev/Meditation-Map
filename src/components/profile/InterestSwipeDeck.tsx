import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
} from "react";
import styled, { css, keyframes } from "styled-components";
import { typography } from "@/styles/typography";
import type { InterestDto } from "@/services/meditation/repositories/interestsRepository";

/** 이 거리(px) 이상 끌면 카드가 넘어갑니다. */
const SWIPE_THRESHOLD = 70;
/** 나가는 카드와 들어오는 카드가 같이 도는 시간. 둘이 같아야 이어져 보입니다. */
const SLIDE_MS = 340;

type Direction = "prev" | "next";

/**
 * 사진이 아직 없는 카드의 배경. 이름으로 결정되므로 카드마다 다른 색이 나오고,
 * 다시 열어도 같은 색입니다.
 */
const GRADIENTS = [
  "linear-gradient(155deg, #5c7f52 0%, #2c4527 100%)",
  "linear-gradient(155deg, #6a5a94 0%, #34275c 100%)",
  "linear-gradient(155deg, #a3776a 0%, #5b3a31 100%)",
  "linear-gradient(155deg, #4f7a86 0%, #24424c 100%)",
  "linear-gradient(155deg, #9c8452 0%, #574526 100%)",
  "linear-gradient(155deg, #7d5f78 0%, #3f2b3d 100%)",
];

function gradientFor(seed: string): string {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  return GRADIENTS[h % GRADIENTS.length];
}

/* ── 움직임 ──────────────────────────────────────────────────────────────
 * 나가는 카드는 손을 뗀 자리(--from-x)에서 이어서 날아갑니다. 0 에서 다시 시작하면
 * 끌던 위치에서 툭 튀어 보입니다.
 */
const exitLeft = keyframes`
  from { transform: translateX(var(--from-x, 0px)) rotate(var(--from-r, 0deg)); opacity: 1; }
  to { transform: translateX(-125%) rotate(-16deg); opacity: 0; }
`;
const exitRight = keyframes`
  from { transform: translateX(var(--from-x, 0px)) rotate(var(--from-r, 0deg)); opacity: 1; }
  to { transform: translateX(125%) rotate(16deg); opacity: 0; }
`;
const enterFromRight = keyframes`
  from { transform: translateX(72%) rotate(10deg) scale(0.96); opacity: 0.3; }
  to { transform: translateX(0) rotate(0) scale(1); opacity: 1; }
`;
const enterFromLeft = keyframes`
  from { transform: translateX(-72%) rotate(-10deg) scale(0.96); opacity: 0.3; }
  to { transform: translateX(0) rotate(0) scale(1); opacity: 1; }
`;

/** 남은 공간을 전부 차지합니다. 버튼과 글자는 전부 이 안에 얹힙니다. */
const Deck = styled.div`
  position: relative;
  flex: 1 1 auto;
  min-height: 0;
  width: 100%;
  margin-top: 10px;
  touch-action: pan-y;
  user-select: none;
`;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
`;

/** 뒤에 겹쳐 보이는 카드. 넘길 것이 남았다는 표시입니다. */
const GhostCard = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.primary100};
  transform: translateY(12px) scale(0.94);
`;

const Card = styled.div<{
  $bg: string;
  $dragging: boolean;
  $phase: "idle" | "exit" | "enter";
  $direction: Direction;
  $flipped: boolean;
}>`
  position: absolute;
  inset: 0;
  border-radius: 20px;
  overflow: hidden;
  cursor: grab;
  background: ${({ $bg }) => $bg};
  box-shadow: 0 18px 40px rgba(75, 0, 130, 0.22);
  z-index: ${({ $phase }) => ($phase === "exit" ? 3 : 2)};
  will-change: transform, opacity;

  &:active {
    cursor: grabbing;
  }

  ${({ $phase, $direction }) =>
    $phase === "exit" &&
    css`
      animation: ${$direction === "next" ? exitLeft : exitRight} ${SLIDE_MS}ms
        cubic-bezier(0.32, 0, 0.67, 0) forwards;
      pointer-events: none;
    `}

  ${({ $phase, $direction }) =>
    $phase === "enter" &&
    css`
      animation: ${$direction === "next" ? enterFromRight : enterFromLeft} ${SLIDE_MS}ms
        cubic-bezier(0.22, 1, 0.36, 1) both;
    `}

  /* 설명을 편 상태에서는 아래쪽을 더 눌러 글이 읽히게 합니다. */
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 34%,
      rgba(0, 0, 0, ${({ $flipped }) => ($flipped ? 0.76 : 0.46)}) 100%
    );
    transition: background 0.25s ease;
  }

  @media (prefers-reduced-motion: reduce) {
    animation-duration: 1ms;
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
  padding: 20px 22px 124px;
  color: #fff;
  text-align: center;
`;

const CardTitle = styled.strong`
  display: block;
  ${typography.title};
  font-size: 1.3rem;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.55);
`;

const CardDesc = styled.p<{ $open: boolean }>`
  margin: ${({ $open }) => ($open ? "10px 0 0" : "0")};
  ${typography.caption};
  line-height: 1.55;
  color: rgba(255, 255, 255, 0.94);
  overflow: hidden;
  max-height: ${({ $open }) => ($open ? "10rem" : "0")};
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  transition:
    max-height 0.3s ease,
    opacity 0.24s ease,
    margin 0.3s ease;
`;

const TapHint = styled.span<{ $hidden: boolean }>`
  display: block;
  margin-top: 8px;
  ${typography.caption};
  font-size: 0.72rem;
  color: rgba(255, 255, 255, 0.72);
  opacity: ${({ $hidden }) => ($hidden ? 0 : 1)};
  transition: opacity 0.2s ease;
`;

const LikedBadge = styled.span`
  position: absolute;
  top: 16px;
  left: 16px;
  z-index: 2;
  padding: 6px 12px;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.primary600};
  color: #fff;
  ${typography.caption};
  font-size: 0.72rem;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.3);
`;

/** 카드 위에 얹는 좌우 버튼. 사진을 가리지 않게 반투명 유리처럼 둡니다. */
const EdgeButton = styled.button<{ $side: "left" | "right" }>`
  position: absolute;
  top: 50%;
  ${({ $side }) => ($side === "left" ? "left: 10px;" : "right: 10px;")}
  transform: translateY(-50%);
  z-index: 4;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.36);
  background: rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(8px);
  color: #fff;
  cursor: pointer;
  transition:
    background 0.18s ease,
    transform 0.16s ease;

  svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }

  &:active {
    transform: translateY(-50%) scale(0.9);
  }
`;

const HeartButton = styled.button<{ $liked: boolean }>`
  position: absolute;
  left: 50%;
  bottom: 30px;
  transform: translateX(-50%);
  z-index: 5;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 66px;
  height: 66px;
  border-radius: 50%;
  cursor: pointer;
  background: ${({ theme, $liked }) => ($liked ? theme.colors.primary600 : "rgba(255, 255, 255, 0.9)")};
  border: 1px solid
    ${({ theme, $liked }) => ($liked ? theme.colors.primary600 : "rgba(255, 255, 255, 0.7)")};
  color: ${({ theme, $liked }) => ($liked ? theme.colors.white : theme.colors.primary600)};
  backdrop-filter: blur(8px);
  box-shadow: 0 10px 26px rgba(0, 0, 0, 0.28);
  transition:
    transform 0.16s ease,
    background 0.2s ease,
    color 0.2s ease;

  svg {
    width: 28px;
    height: 28px;
  }

  &:active {
    transform: translateX(-50%) scale(0.92);
  }
`;

/** 사진 위에 얹는 진행 표시 */
const Counter = styled.span`
  position: absolute;
  top: 16px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
  padding: 6px 13px;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.34);
  backdrop-filter: blur(8px);
  color: rgba(255, 255, 255, 0.95);
  ${typography.caption};
  font-size: 0.76rem;
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
 * - 왼쪽으로 밀면 이전, 오른쪽으로 밀면 다음
 * - 아래 하트를 누르면 고른 뒤 다음 장으로 넘어갑니다
 * - 카드를 누르면 설명이 펼쳐집니다
 *
 * 넘길 때 나가는 카드와 들어오는 카드를 같이 띄웁니다. 하나가 다 빠진 뒤에 다음을 넣으면
 * 중간에 빈 순간이 생겨 끊겨 보입니다.
 */
export default function InterestSwipeDeck({
  interests,
  selected,
  onChange,
}: InterestSwipeDeckProps) {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [dragX, setDragX] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [leaving, setLeaving] = useState<{
    item: InterestDto;
    direction: Direction;
    fromX: number;
  } | null>(null);

  const dragStart = useRef<number | null>(null);
  const moved = useRef(false);
  const timers = useRef<number[]>([]);

  useEffect(() => {
    const pending = timers.current;
    return () => pending.forEach(window.clearTimeout);
  }, []);

  const total = interests.length;
  const current = interests[index];
  const hasPrev = index > 0;
  const hasNext = index < total - 1;

  const go = useCallback(
    (direction: Direction, fromX = 0) => {
      if (leaving || !current) return;
      const nextIndex = direction === "next" ? index + 1 : index - 1;
      if (nextIndex < 0 || nextIndex >= total) return;

      // 나가는 카드를 따로 붙잡아 두고 색인은 바로 옮깁니다. 그래야 두 장이 같이 돕니다.
      setLeaving({ item: current, direction, fromX });
      setIndex(nextIndex);
      setFlipped(false);
      setDragX(0);
      const timer = window.setTimeout(() => setLeaving(null), SLIDE_MS);
      timers.current.push(timer);
    },
    [current, index, leaving, total]
  );

  const toggleLike = () => {
    if (!current) return;
    const isLiked = selected.includes(current.name);
    onChange(isLiked ? selected.filter((n) => n !== current.name) : [...selected, current.name]);
    // 고르면 바로 다음 장으로. 취소일 때와 마지막 장에서는 그 자리에 머뭅니다.
    if (!isLiked && hasNext) go("next");
  };

  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (leaving) return;
    dragStart.current = e.clientX;
    moved.current = false;
    setDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (dragStart.current === null) return;
    const delta = e.clientX - dragStart.current;
    if (Math.abs(delta) > 4) moved.current = true;
    // 갈 수 없는 방향은 저항이 있는 것처럼 조금만 따라옵니다.
    const blocked = (delta > 0 && !hasPrev) || (delta < 0 && !hasNext);
    setDragX(blocked ? delta * 0.25 : delta);
  };

  const onPointerUp = () => {
    const delta = dragX;
    dragStart.current = null;
    setDragging(false);
    if (Math.abs(delta) < SWIPE_THRESHOLD) {
      setDragX(0);
      // 끌지 않고 눌렀다 뗀 것이면 설명을 펼칩니다.
      if (!moved.current) setFlipped((v) => !v);
      return;
    }
    const direction: Direction = delta > 0 ? "prev" : "next";
    if ((direction === "prev" && !hasPrev) || (direction === "next" && !hasNext)) {
      setDragX(0);
      return;
    }
    go(direction, delta);
  };

  if (total === 0) {
    return <Empty>표시할 관심사가 없습니다. 건너뛰고 나중에 프로필에서 고를 수 있어요.</Empty>;
  }
  if (!current) return null;

  const liked = selected.includes(current.name);

  const renderFace = (item: InterestDto, showDesc: boolean) => (
    <>
      {item.imageUrl && <CardImage src={item.imageUrl} alt="" draggable={false} />}
      {selected.includes(item.name) && <LikedBadge>선택됨</LikedBadge>}
      <CardBody>
        <CardTitle>{item.name}</CardTitle>
        {item.description && (
          <>
            <CardDesc $open={showDesc}>{item.description}</CardDesc>
            <TapHint $hidden={showDesc}>눌러서 설명 보기</TapHint>
          </>
        )}
      </CardBody>
    </>
  );

  return (
    <Root>
      <Deck>
        {hasNext && <GhostCard aria-hidden="true" />}

        {leaving && (
          <Card
            key={`leaving-${leaving.item.id}`}
            aria-hidden="true"
            $bg={gradientFor(leaving.item.name)}
            $dragging={false}
            $phase="exit"
            $direction={leaving.direction}
            $flipped={false}
            style={
              {
                "--from-x": `${leaving.fromX}px`,
                "--from-r": `${leaving.fromX / 24}deg`,
              } as CSSProperties
            }
          >
            {renderFace(leaving.item, false)}
          </Card>
        )}

        <Card
          key={current.id}
          $bg={gradientFor(current.name)}
          $dragging={dragging}
          $phase={leaving ? "enter" : "idle"}
          $direction={leaving?.direction ?? "next"}
          $flipped={flipped}
          style={
            leaving
              ? undefined
              : {
                  transform: `translateX(${dragX}px) rotate(${dragX / 24}deg)`,
                  transition: dragging
                    ? "none"
                    : "transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
                }
          }
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
        >
          {renderFace(current, flipped)}
        </Card>

        {/* 버튼과 진행 표시는 카드 밖에 두고 위에 얹습니다. 카드와 같이 날아가지 않고,
            끌기 제스처와도 부딪히지 않습니다. */}
        <Counter>
          {index + 1}/{total}
          {selected.length > 0 && ` · ${selected.length}개 선택`}
        </Counter>

        {hasPrev && (
          <EdgeButton type="button" $side="left" aria-label="이전 관심사" onClick={() => go("prev")}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </EdgeButton>
        )}
        {hasNext && (
          <EdgeButton type="button" $side="right" aria-label="다음 관심사" onClick={() => go("next")}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </EdgeButton>
        )}

        <HeartButton
          type="button"
          $liked={liked}
          aria-label={liked ? `${current.name} 선택 해제` : `${current.name} 선택`}
          aria-pressed={liked}
          onClick={toggleLike}
        >
          <svg viewBox="0 0 24 24" fill={liked ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.8 5.6a5 5 0 0 0-7.1 0L12 7.3l-1.7-1.7a5 5 0 0 0-7.1 7.1l8.8 8.8 8.8-8.8a5 5 0 0 0 0-7.1z" />
          </svg>
        </HeartButton>
      </Deck>
    </Root>
  );
}
