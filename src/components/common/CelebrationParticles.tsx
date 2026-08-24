import { useEffect, useMemo, useState } from "react";
import styled, { keyframes } from "styled-components";

const COLORS = ["#4B0082", "#a88bca", "#C9A962", "#C9A090", "#7a5aab", "#F5D8D0"];
const COUNT = 70;
const DURATION_MS = 1800;

interface Particle {
  id: number;
  dx: number;
  dy: number;
  spin: number;
  delay: number;
  size: number;
  color: string;
  round: boolean;
}

/** 가운데에서 사방으로 흩어지며 아래로 떨어집니다. */
const burst = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0, 0, 0) rotate(0deg) scale(0.4);
  }
  12% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translate3d(var(--dx), var(--dy), 0) rotate(var(--spin)) scale(1);
  }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  pointer-events: none;
  overflow: hidden;
`;

const Origin = styled.div`
  position: absolute;
  left: 50%;
  top: 38%;
`;

const Piece = styled.span<{ $round: boolean }>`
  position: absolute;
  display: block;
  width: var(--size);
  height: var(--size);
  background: var(--color);
  border-radius: ${({ $round }) => ($round ? "50%" : "2px")};
  animation: ${burst} var(--duration) cubic-bezier(0.15, 0.6, 0.35, 1) var(--delay) forwards;

  @media (prefers-reduced-motion: reduce) {
    animation-duration: 1ms;
  }
`;

interface CelebrationParticlesProps {
  /** true 로 바뀌는 순간 한 번 터집니다. */
  active: boolean;
  onDone?: () => void;
}

/**
 * 축하 파티클. 라이브러리 없이 CSS 애니메이션만 씁니다.
 *
 * 화면 조작을 막지 않도록 pointer-events 를 꺼 두고, 애니메이션이 끝나면 스스로 사라집니다.
 */
export default function CelebrationParticles({ active, onDone }: CelebrationParticlesProps) {
  const [visible, setVisible] = useState(false);

  const particles = useMemo<Particle[]>(() => {
    if (!visible) return [];
    return Array.from({ length: COUNT }, (_, id) => {
      const angle = Math.random() * Math.PI * 2;
      const distance = 90 + Math.random() * 260;
      return {
        id,
        dx: Math.cos(angle) * distance,
        // 위로 튀었다가 중력에 밀리는 느낌을 주려고 아래쪽으로 치우치게 둡니다.
        dy: Math.sin(angle) * distance + 140 + Math.random() * 180,
        spin: Math.random() * 720 - 360,
        delay: Math.random() * 160,
        size: 6 + Math.random() * 8,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        round: Math.random() < 0.4,
      };
    });
    // visible 이 켜질 때마다 새로 뿌립니다.
  }, [visible]);

  useEffect(() => {
    if (!active) return;
    setVisible(true);
    const timer = window.setTimeout(() => {
      setVisible(false);
      onDone?.();
    }, DURATION_MS + 300);
    return () => window.clearTimeout(timer);
  }, [active, onDone]);

  if (!visible) return null;

  return (
    <Overlay aria-hidden="true">
      <Origin>
        {particles.map((p) => (
          <Piece
            key={p.id}
            $round={p.round}
            style={
              {
                "--dx": `${p.dx}px`,
                "--dy": `${p.dy}px`,
                "--spin": `${p.spin}deg`,
                "--delay": `${p.delay}ms`,
                "--size": `${p.size}px`,
                "--color": p.color,
                "--duration": `${DURATION_MS}ms`,
              } as React.CSSProperties
            }
          />
        ))}
      </Origin>
    </Overlay>
  );
}
