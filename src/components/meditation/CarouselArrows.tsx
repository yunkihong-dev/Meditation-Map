import styled from "styled-components";

/**
 * 사진 캐러셀의 좌우 이동 버튼.
 *
 * 스와이프만으로 넘기게 돼 있어서 마우스뿐인 환경에서는 두 번째 사진을 볼 방법이 점 버튼밖에
 * 없었습니다. 화면 폭이 아니라 포인터 종류로 판단합니다 — 앱을 모바일 폭으로 묶은 뒤로는
 * PC 에서도 창이 좁아, 폭으로 재면 정작 마우스 쓰는 사람에게 화살표가 사라집니다.
 */
const Arrow = styled.button<{ $side: "left" | "right" }>`
  display: none;

  @media (hover: hover) and (pointer: fine) {
    position: absolute;
    top: 50%;
    ${({ $side }) => ($side === "left" ? "left: 10px;" : "right: 10px;")}
    transform: translateY(-50%);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    padding: 0;
    border: 0;
    border-radius: 50%;
    cursor: pointer;
    color: #fff;
    background: rgba(0, 0, 0, 0.38);
    backdrop-filter: blur(2px);
    opacity: 0.75;
    transition: opacity 0.15s ease, background 0.15s ease;

    &:hover {
      opacity: 1;
      background: rgba(0, 0, 0, 0.55);
    }

    &:focus-visible {
      outline: 2px solid #fff;
      outline-offset: 2px;
      opacity: 1;
    }

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

interface CarouselArrowsProps {
  onPrev: () => void;
  onNext: () => void;
}

export default function CarouselArrows({ onPrev, onNext }: CarouselArrowsProps) {
  return (
    <>
      <Arrow $side="left" type="button" onClick={onPrev} aria-label="이전 사진">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="m15 18-6-6 6-6" />
        </svg>
      </Arrow>
      <Arrow $side="right" type="button" onClick={onNext} aria-label="다음 사진">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="m9 18 6-6-6-6" />
        </svg>
      </Arrow>
    </>
  );
}
