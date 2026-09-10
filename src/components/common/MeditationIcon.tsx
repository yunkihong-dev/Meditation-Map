import styled from "styled-components";

/**
 * 가부좌를 튼 사람 — 명상 전문가 자리에 쓰는 전용 아이콘.
 *
 * Material Symbols 에는 같은 모양이 없어 직접 그렸습니다. 머리·몸통·다리는 면으로,
 * 팔은 둥근 끝을 가진 선으로 그려 어깨에서 무릎까지 흐르게 두었습니다.
 * 색은 부모의 color 를 그대로 따릅니다(currentColor).
 */
const Svg = styled.svg<{ $size: number }>`
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  flex-shrink: 0;
  display: block;
`;

export interface MeditationIconProps {
  /** px */
  size?: number;
  className?: string;
  /** 아이콘만으로 뜻이 전달되는 자리에서는 이름을 읽어 줍니다. */
  label?: string;
}

const MeditationIcon = ({ size = 24, className, label }: MeditationIconProps) => (
  <Svg
    viewBox="0 0 64 64"
    $size={size}
    className={className}
    aria-hidden={label ? undefined : true}
    role={label ? "img" : undefined}
    aria-label={label}
  >
    <g fill="currentColor">
      {/* 머리 */}
      <circle cx="32" cy="11.6" r="8" />
      {/* 몸통 */}
      <path d="M32 20.8c-4.4 0-8.1 2.9-9 7l-1.6 7.4c-.5 2.3 1.2 4.5 3.6 4.5h14c2.4 0 4.1-2.2 3.6-4.5l-1.6-7.4c-.9-4.1-4.6-7-9-7z" />
      {/* 가부좌 */}
      <path d="M32 41.6c-9.1 0-16.8 1.8-20.6 4.6-2.1 1.6-2.7 4.4-1.4 6.5.9 1.5 2.6 2.4 4.4 2.4h35.2c1.8 0 3.5-.9 4.4-2.4 1.3-2.1.7-4.9-1.4-6.5-3.8-2.8-11.5-4.6-20.6-4.6z" />
    </g>
    {/* 팔 */}
    <g fill="none" stroke="currentColor" strokeWidth="7.2" strokeLinecap="round">
      <path d="M25.6 29.6C17.4 33.4 13.6 39.8 16.4 43.8c1.2 1.7 4 2.6 8 2.8" />
      <path d="M38.4 29.6c8.2 3.8 12 10.2 9.2 14.2-1.2 1.7-4 2.6-8 2.8" />
    </g>
  </Svg>
);

export default MeditationIcon;
