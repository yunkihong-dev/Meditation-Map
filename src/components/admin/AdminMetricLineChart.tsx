import { useEffect, useId, useMemo, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { theme } from "@/styles/theme";
import { AdminCard, AdminError } from "./adminStyles";
import type { MetricSeries } from "./adminMetricsTypes";

const ChartHeader = styled.div<{ $compact?: boolean }>`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ $compact }) => ($compact ? "8px" : "12px")};
`;

const ChartCard = styled(AdminCard)<{ $compact?: boolean }>`
  width: 100%;
  padding: ${({ $compact }) => ($compact ? "12px" : "14px 12px")};
`;

const ChartTitle = styled.h3<{ $compact?: boolean }>`
  margin: 0;
  font-size: ${({ $compact }) => ($compact ? "13px" : "15px")};
  font-weight: 600;
  word-break: break-all;
`;

const SummaryRow = styled.div<{ $compact?: boolean }>`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: ${({ $compact }) => ($compact ? "8px" : "12px")};
`;

const SummaryPill = styled.div<{ $compact?: boolean }>`
  display: inline-flex;
  align-items: baseline;
  gap: 4px;
  padding: ${({ $compact }) => ($compact ? "4px 9px" : "5px 11px")};
  border-radius: ${theme.radii.pill};
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  font-size: ${({ $compact }) => ($compact ? "11px" : "12px")};
  color: #a1a1aa;

  strong {
    color: #fafafa;
    font-size: ${({ $compact }) => ($compact ? "12px" : "13px")};
    font-variant-numeric: tabular-nums;
  }
`;

const ChartWrap = styled.div`
  width: 100%;
  min-width: 0;
`;

const SvgRoot = styled.svg`
  display: block;
  width: 100%;
  overflow: visible;
  touch-action: none;
`;

const drawIn = keyframes`
  from { stroke-dashoffset: 1; }
  to { stroke-dashoffset: 0; }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const LinePath = styled.path`
  stroke-dasharray: 1;
  stroke-dashoffset: 0;
  animation: ${drawIn} 0.7s ease forwards;
`;

const AreaPath = styled.path`
  animation: ${fadeIn} 0.7s ease forwards;
`;

const Tooltip = styled.div`
  position: absolute;
  pointer-events: none;
  padding: 7px 11px;
  border-radius: 10px;
  background: rgba(9, 9, 11, 0.92);
  border: 1px solid #3f3f46;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(6px);
  color: #fff;
  white-space: nowrap;
  transform: translate(-50%, calc(-100% - 12px));
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 2px;
  transition: left 0.08s ease, top 0.08s ease;

  .tip-label {
    font-size: 11px;
    color: #a1a1aa;
  }
  .tip-value {
    font-size: 14px;
    font-weight: 700;
    font-variant-numeric: tabular-nums;
  }
`;

const EmptyState = styled.p<{ $compact?: boolean }>`
  margin: 0;
  padding: ${({ $compact }) => ($compact ? "20px 0" : "32px 0")};
  text-align: center;
  color: #71717a;
  font-size: ${({ $compact }) => ($compact ? "12px" : "13px")};
`;

interface AdminMetricLineChartProps {
  title: string;
  series: MetricSeries | null;
  loading?: boolean;
  error?: string | null;
  compact?: boolean;
  accent?: "purple" | "teal" | "gold";
  unit?: string;
  emptyMessage?: string;
  hideSummary?: boolean;
}

const PAD = { top: 28, right: 8, bottom: 36, left: 36 };
const COMPACT_PAD = { top: 24, right: 6, bottom: 32, left: 32 };

function niceMax(value: number): number {
  if (value <= 0) return 4;
  const magnitude = 10 ** Math.floor(Math.log10(value));
  const normalized = value / magnitude;
  const nice = normalized <= 1 ? 1 : normalized <= 2 ? 2 : normalized <= 5 ? 5 : 10;
  return nice * magnitude;
}

function parseYear(key: string): number {
  const match = key.match(/^(\d{4})/);
  return match ? Number(match[1]) : new Date().getFullYear();
}

function shortXLabel(key: string, granularity: MetricSeries["granularity"]): string {
  if (granularity === "month") {
    const parts = key.split("-");
    return parts.length >= 2 ? `${Number(parts[1])}월` : key;
  }
  const parts = key.split("-");
  if (parts.length >= 3) {
    return `${Number(parts[1])}/${Number(parts[2])}`;
  }
  return key;
}

function accentColor(accent: AdminMetricLineChartProps["accent"]) {
  if (accent === "teal") return { stroke: "#2dd4bf", dot: "#5eead4" };
  if (accent === "gold") return { stroke: "#fbbf24", dot: "#fde68a" };
  return { stroke: theme.colors.primary300, dot: theme.colors.primary200 };
}

type PlottedPoint = {
  key: string;
  label: string;
  count: number;
  x: number;
  y: number;
  year: number;
};

type YearBand = {
  year: number;
  xStart: number;
  xEnd: number;
};

type YearDivider = {
  x: number;
  yearBefore: number;
  yearAfter: number;
};

function buildYearLayout(plotted: PlottedPoint[], plotLeft: number, plotRight: number) {
  const dividers: YearDivider[] = [];
  for (let i = 1; i < plotted.length; i++) {
    if (plotted[i].year !== plotted[i - 1].year) {
      dividers.push({
        x: (plotted[i - 1].x + plotted[i].x) / 2,
        yearBefore: plotted[i - 1].year,
        yearAfter: plotted[i].year,
      });
    }
  }

  const yearsInOrder: number[] = [];
  for (const point of plotted) {
    if (yearsInOrder[yearsInOrder.length - 1] !== point.year) {
      yearsInOrder.push(point.year);
    }
  }

  const yearBands: YearBand[] = yearsInOrder.map((year, index) => ({
    year,
    xStart: index === 0 ? plotLeft : dividers[index - 1].x,
    xEnd: index === yearsInOrder.length - 1 ? plotRight : dividers[index].x,
  }));

  return { yearBands, dividers };
}

export default function AdminMetricLineChart({
  title,
  series,
  loading,
  error,
  compact = false,
  accent = "purple",
  unit = "회",
  emptyMessage = "아직 표시할 데이터가 없습니다.",
  hideSummary = false,
}: AdminMetricLineChartProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(960);
  const [hoveredKey, setHoveredKey] = useState<string | null>(null);
  const gradientId = useId().replace(/:/g, "");

  const height = compact ? 168 : 260;
  const pad = compact ? COMPACT_PAD : PAD;
  const colors = accentColor(accent);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const updateWidth = () => {
      const next = el.getBoundingClientRect().width;
      if (next > 0) setWidth(next);
    };

    updateWidth();
    const ro = new ResizeObserver(updateWidth);
    ro.observe(el);
    window.addEventListener("resize", updateWidth);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", updateWidth);
    };
  }, [series, loading]);

  const chart = useMemo(() => {
    const points = series?.points ?? [];
    const granularity = series?.granularity ?? "day";
    const plotW = Math.max(120, width - pad.left - pad.right);
    const plotH = height - pad.top - pad.bottom;
    const peak = series?.peak ?? 0;
    const yMax = niceMax(peak);

    const count = points.length;
    const plotted: PlottedPoint[] = points.map((point, index) => {
      const x =
        count <= 1
          ? pad.left + plotW / 2
          : pad.left + (index / (count - 1)) * plotW;
      const ratio = yMax > 0 ? point.count / yMax : 0;
      const y = pad.top + plotH - ratio * plotH;
      return {
        key: point.key,
        label: point.label,
        count: point.count,
        x,
        y,
        year: parseYear(point.key),
      };
    });

    const linePath =
      plotted.length > 0
        ? plotted.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x.toFixed(2)} ${p.y.toFixed(2)}`).join(" ")
        : "";

    const baseY = pad.top + plotH;
    const plotLeft = pad.left;
    const plotRight = width - pad.right;
    const areaPath =
      plotted.length > 0
        ? `${linePath} L ${plotted[plotted.length - 1].x.toFixed(2)} ${baseY} L ${plotted[0].x.toFixed(2)} ${baseY} Z`
        : "";

    const { yearBands, dividers } = buildYearLayout(plotted, plotLeft, plotRight);

    const gridSteps = 4;
    const yTicks = Array.from({ length: gridSteps + 1 }, (_, i) => {
      const value = Math.round((yMax * i) / gridSteps);
      const y = pad.top + plotH - (yMax > 0 ? (value / yMax) * plotH : 0);
      return { value, y };
    });

    const labelEvery = count <= 12 ? 1 : count <= 24 ? 2 : count <= 60 ? 5 : 7;

    return {
      plotted,
      linePath,
      areaPath,
      yearBands,
      dividers,
      yTicks,
      yMax,
      plotH,
      baseY,
      granularity,
      labelEvery,
    };
  }, [height, pad, series, width]);

  const active = hoveredKey
    ? chart.plotted.find((p) => p.key === hoveredKey) ?? null
    : null;

  // 차트 위 어디서든 마우스를 움직이면 가장 가까운 데이터 점으로 스냅한다.
  const handleMove = (e: React.MouseEvent) => {
    const rect = wrapRef.current?.getBoundingClientRect();
    if (!rect || chart.plotted.length === 0) return;
    const x = e.clientX - rect.left;
    let nearest = chart.plotted[0];
    let best = Infinity;
    for (const p of chart.plotted) {
      const d = Math.abs(p.x - x);
      if (d < best) {
        best = d;
        nearest = p;
      }
    }
    if (nearest.key !== hoveredKey) setHoveredKey(nearest.key);
  };

  // 데이터(기간/단위)가 바뀔 때만 라인 드로우 애니메이션을 재생(리사이즈로는 재생 안 함).
  const animKey = `${chart.granularity}-${chart.plotted.length}-${series?.total ?? 0}`;

  return (
    <ChartCard $compact={compact}>
      <ChartHeader $compact={compact}>
        <ChartTitle $compact={compact}>{title}</ChartTitle>
      </ChartHeader>

      {error && <AdminError>{error}</AdminError>}

      {series && !hideSummary && (
        <SummaryRow $compact={compact}>
          <SummaryPill $compact={compact}>
            합계<strong>{series.total.toLocaleString()}</strong>
          </SummaryPill>
          <SummaryPill $compact={compact}>
            평균<strong>{series.average.toLocaleString()}</strong>
          </SummaryPill>
          <SummaryPill $compact={compact}>
            최대<strong>{series.peak.toLocaleString()}</strong>
          </SummaryPill>
        </SummaryRow>
      )}

      {loading && !series ? (
        <EmptyState $compact={compact}>그래프 데이터를 불러오는 중…</EmptyState>
      ) : chart.plotted.length === 0 ? (
        <EmptyState $compact={compact}>{emptyMessage}</EmptyState>
      ) : (
        <ChartWrap ref={wrapRef} style={{ position: "relative", height }}>
          <SvgRoot
            viewBox={`0 0 ${width} ${height}`}
            style={{ height }}
            role="img"
            aria-label={title}
            onMouseMove={handleMove}
            onMouseLeave={() => setHoveredKey(null)}
          >
            <defs>
              <linearGradient id={`area-${gradientId}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={colors.stroke} stopOpacity={0.38} />
                <stop offset="70%" stopColor={colors.stroke} stopOpacity={0.06} />
                <stop offset="100%" stopColor={colors.stroke} stopOpacity={0} />
              </linearGradient>
            </defs>

            {chart.yTicks.map((tick) => (
              <g key={tick.value}>
                <line
                  x1={pad.left}
                  x2={width - pad.right}
                  y1={tick.y}
                  y2={tick.y}
                  stroke="rgba(255,255,255,0.06)"
                  strokeDasharray="4 4"
                />
                <text
                  x={pad.left - 10}
                  y={tick.y + 4}
                  textAnchor="end"
                  fill="#71717a"
                  fontSize={compact ? 9 : 10}
                >
                  {tick.value.toLocaleString()}
                </text>
              </g>
            ))}

            <line
              x1={pad.left}
              x2={width - pad.right}
              y1={chart.baseY}
              y2={chart.baseY}
              stroke="rgba(255,255,255,0.2)"
              strokeWidth={1}
            />

            {chart.yearBands.map((band) => {
              const centerX = (band.xStart + band.xEnd) / 2;
              return (
                <g key={band.year}>
                  <rect
                    x={band.xStart}
                    y={pad.top - 28}
                    width={Math.max(band.xEnd - band.xStart, 1)}
                    height={20}
                    fill="rgba(75, 0, 130, 0.08)"
                    rx={4}
                  />
                  <text
                    x={centerX}
                    y={pad.top - 14}
                    textAnchor="middle"
                    fill="#d4d4d8"
                    fontSize={compact ? 11 : 12}
                    fontWeight="600"
                  >
                    {band.year}년
                  </text>
                </g>
              );
            })}

            {chart.dividers.map((divider) => (
              <line
                key={`${divider.yearBefore}-${divider.yearAfter}`}
                x1={divider.x}
                x2={divider.x}
                y1={pad.top - 8}
                y2={chart.baseY}
                stroke="rgba(255,255,255,0.14)"
                strokeWidth={1}
              />
            ))}

            {/* 호버 크로스헤어 */}
            {active && (
              <line
                x1={active.x}
                x2={active.x}
                y1={pad.top}
                y2={chart.baseY}
                stroke={colors.stroke}
                strokeOpacity={0.35}
                strokeWidth={1}
                strokeDasharray="3 3"
              />
            )}

            {chart.areaPath && (
              <AreaPath key={`area-${animKey}`} d={chart.areaPath} fill={`url(#area-${gradientId})`} stroke="none" />
            )}
            {chart.linePath && (
              <LinePath
                key={`line-${animKey}`}
                d={chart.linePath}
                pathLength={1}
                fill="none"
                stroke={colors.stroke}
                strokeWidth={compact ? 2 : 2.5}
                strokeLinejoin="round"
                strokeLinecap="round"
              />
            )}

            {/* x축 라벨 */}
            {chart.plotted.map((point, index) => {
              const showLabel = index % chart.labelEvery === 0 || index === chart.plotted.length - 1;
              if (!showLabel) return null;
              return (
                <text
                  key={`lbl-${point.key}`}
                  x={point.x}
                  y={chart.baseY + (compact ? 16 : 18)}
                  textAnchor="middle"
                  fill="#a1a1aa"
                  fontSize={compact ? 9 : 10}
                >
                  {shortXLabel(point.key, chart.granularity)}
                </text>
              );
            })}

            {/* 활성 점 강조(헤일로 + 점) */}
            {active && (
              <g style={{ pointerEvents: "none" }}>
                <circle cx={active.x} cy={active.y} r={compact ? 8 : 10} fill={colors.stroke} opacity={0.18} />
                <circle
                  cx={active.x}
                  cy={active.y}
                  r={compact ? 4.5 : 5.5}
                  fill={colors.dot}
                  stroke="#0f0f12"
                  strokeWidth={2}
                />
              </g>
            )}
          </SvgRoot>

          {active && (
            <Tooltip style={{ left: active.x, top: active.y }}>
              <span className="tip-label">{active.label}</span>
              <span className="tip-value">
                {active.count.toLocaleString()}
                {unit}
              </span>
            </Tooltip>
          )}
        </ChartWrap>
      )}
    </ChartCard>
  );
}
