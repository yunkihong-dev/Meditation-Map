import { useId } from "react";
import styled from "styled-components";

/**
 * 조회수 곡선 차트 — `관리화면 예시/_4` 대형 지표 카드의 SVG.
 * tw: relative h-24 w-full mt-2 / svg w-full h-full preserveAspectRatio="none" viewBox="0 0 100 40"
 * 그라데이션 #532aa8 0.3 → 0, 선은 primary. 실제 series 값만 그립니다(점 1개면 수평선, 전부 0이면 바닥선).
 */

const Box = styled.div`
  position: relative;
  height: 96px;
  width: 100%;
  margin-top: 8px;

  svg {
    width: 100%;
    height: 100%;
    display: block;
  }
`;

const W = 100;
const H = 40;

export function chartPoints(values: number[], width = W, height = H, pad = 3): [number, number][] {
  if (values.length === 0) return [];
  const max = Math.max(...values, 0);
  const n = values.length;
  return values.map((v, i) => {
    const x = n === 1 ? width / 2 : (i / (n - 1)) * width;
    const y = max === 0 ? height - pad : height - pad - (v / max) * (height - pad * 2);
    return [Number(x.toFixed(2)), Number(y.toFixed(2))];
  });
}

/** 점들을 지나는 부드러운 곡선(Catmull-Rom → cubic Bézier) */
export function smoothPath(pts: [number, number][]): string {
  if (pts.length === 0) return "";
  if (pts.length === 1) return `M0,${pts[0][1]} L${W},${pts[0][1]}`;
  let d = `M${pts[0][0]},${pts[0][1]}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] ?? pts[i];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[i + 2] ?? p2;
    const c1x = p1[0] + (p2[0] - p0[0]) / 6;
    const c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6;
    const c2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += ` C${c1x.toFixed(2)},${c1y.toFixed(2)} ${c2x.toFixed(2)},${c2y.toFixed(2)} ${p2[0]},${p2[1]}`;
  }
  return d;
}

interface Props {
  series: { date: string; views: number }[];
  label: string;
}

export default function ViewsChart({ series, label }: Props) {
  const gid = useId();
  const pts = chartPoints(series.map((s) => s.views));
  if (pts.length === 0) return null;
  const line = smoothPath(pts);
  const lastX = pts.length === 1 ? W : pts[pts.length - 1][0];
  const area = `${line} L${lastX},${H} L0,${H} Z`;
  return (
    <Box>
      <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" role="img" aria-label={label}>
        <defs>
          <linearGradient id={gid} x1="0%" x2="0%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#532aa8" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#532aa8" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={area} fill={`url(#${gid})`} />
        <path d={line} fill="none" stroke="#532aa8" strokeWidth="2" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
      </svg>
    </Box>
  );
}
