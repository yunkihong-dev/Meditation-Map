import styled from "styled-components";

/**
 * 시안이 쓰는 Material Symbols Outlined 아이콘.
 *
 * 이 폰트는 글자("forest")를 합자로 아이콘 모양으로 바꿔 그립니다. 그래서
 *  - 화면 낭독기가 "forest" 를 읽지 않도록 aria-hidden 을 기본으로 걸고,
 *  - 브라우저 번역기가 글자를 건드리지 못하도록 translate="no" 를 붙입니다.
 *
 * 크기는 font-size 로, 속 채움은 FILL 축(0↔1)으로 정합니다. 가변 폰트라
 * FILL 을 전환에 걸 수 있어 찜 하트처럼 채워지는 애니메이션도 여기서 납니다.
 */
/*
 * && 로 클래스를 두 번 겹쳐 씁니다.
 * 전역 .material-symbols-outlined 도 font-variation-settings 를 잡고 있어
 * 특이도가 같으면 주입 순서에 따라 FILL 0 이 이겨 버립니다 — 아이콘이
 * 채워지지 않고 늘 선으로만 나오던 원인이 이것이었습니다.
 */
const Glyph = styled.span<{ $size: number; $filled: boolean; $weight: number }>`
  && {
    font-size: ${({ $size }) => $size}px;
    width: ${({ $size }) => $size}px;
    height: ${({ $size }) => $size}px;
    font-variation-settings: "FILL" ${({ $filled }) => ($filled ? 1 : 0)},
      "wght" ${({ $weight }) => $weight};
    transition: font-variation-settings 0.3s ease;
  }
`;

export interface IconProps {
  /** 시안에 적힌 Material Symbols 이름 (예: forest, temple_buddhist) */
  name: string;
  /** 속을 채운 모양 — 시안의 `font-variation-settings: 'FILL' 1` */
  filled?: boolean;
  /** px */
  size?: number;
  weight?: number;
  className?: string;
  /** 아이콘만으로 뜻이 전달되는 자리에서는 이름을 읽어 줍니다. */
  label?: string;
}

const Icon = ({
  name,
  filled = false,
  size = 24,
  weight = 400,
  className,
  label,
}: IconProps) => (
  <Glyph
    className={
      className ? `material-symbols-outlined ${className}` : "material-symbols-outlined"
    }
    $size={size}
    $filled={filled}
    $weight={weight}
    translate="no"
    aria-hidden={label ? undefined : true}
    role={label ? "img" : undefined}
    aria-label={label}
  >
    {name}
  </Glyph>
);

export default Icon;
