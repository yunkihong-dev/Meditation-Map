import { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
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
  padding: ${({ $compact }) => ($compact ? "4px 8px" : "6px 10px")};
  border-radius: ${theme.radii.pill};
  background: rgba(75, 0, 130, 0.18);
  border: 1px solid rgba(75, 0, 130, 0.35);
  font-size: ${({ $compact }) => ($compact ? "11px" : "12px")};
  color: #d4d4d8;

  strong {
    color: #fff;
    margin-left: 4px;
    font-size: ${({ $compact }) => ($compact ? "12px" : "13px")};
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
`;

const Tooltip = styled.div`
  position: absolute;
  pointer-events: none;
  padding: 6px 10px;
  border-radius: 8px;
  background: rgba(9, 9, 11, 0.95);
  border: 1px solid #3f3f46;
  color: #fff;
  font-size: 12px;
  white-space: nowrap;
  transform: translate(-50%, -120%);
  z-index: 2;
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
  if (accent === "teal") return { stroke: "#2dd4bf", fill: "rgba(45, 212, 191, 0.18)", dot: "#5eead4" };
  if (accent === "gold") return { stroke: "#fbbf24", fill: "rgba(251, 191, 36, 0.16)", dot: "#fde68a" };
  return { stroke: theme.colors.primary300, fill: "rgba(168, 139, 202, 0.2)", dot: theme.colors.primary200 };
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
  const [tooltip, setTooltip] = useState<{ x: number; y: number; text: string } | null>(null);

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

  return (
    <ChartCard $compact={compact}>
      <ChartHeader $compact={compact}>
        <ChartTitle $compact={compact}>
          {title}
        </ChartTitle>
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
          <SvgRoot viewBox={`0 0 ${width} ${height}`} style={{ height }} role="img" aria-label={title}>
            {chart.yTicks.map((tick) => (
              <g key={tick.value}>
                <line
                  x1={pad.left}
                  x2={width - pad.right}
                  y1={tick.y}
                  y2={tick.y}
                  stroke="rgba(255,255,255,0.08)"
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
              <g key={`${divider.yearBefore}-${divider.yearAfter}`}>
                <line
                  x1={divider.x}
                  x2={divider.x}
                  y1={pad.top - 8}
                  y2={chart.baseY}
                  stroke="rgba(255,255,255,0.14)"
                  strokeWidth={1}
                />
                <text
                  x={divider.x}
                  y={pad.top - 16}
                  textAnchor="middle"
                  fill="#52525b"
                  fontSize="11"
                  fontWeight="600"
                >
                  |
                </text>
              </g>
            ))}

            {chart.areaPath && <path d={chart.areaPath} fill={colors.fill} stroke="none" />}
            {chart.linePath && (
              <path
                d={chart.linePath}
                fill="none"
                stroke={colors.stroke}
                strokeWidth={compact ? 2 : 2.5}
                strokeLinejoin="round"
                strokeLinecap="round"
              />
            )}

            {chart.plotted.map((point, index) => {
              const active = hoveredKey === point.key;
              const showLabel = index % chart.labelEvery === 0 || index === chart.plotted.length - 1;
              return (
                <g key={point.key}>
                  <circle
                    cx={point.x}
                    cy={point.y}
                    r={active ? (compact ? 5 : 6) : compact ? 3.5 : 4}
                    fill={colors.dot}
                    stroke={colors.stroke}
                    strokeWidth={2}
                    style={{ cursor: "default" }}
                    onMouseEnter={(e) => {
                      setHoveredKey(point.key);
                      const rect = wrapRef.current?.getBoundingClientRect();
                      if (rect) {
                        setTooltip({
                          x: e.clientX - rect.left,
                          y: e.clientY - rect.top,
                          text: `${point.label}: ${point.count.toLocaleString()}${unit}`,
                        });
                      }
                    }}
                    onMouseLeave={() => {
                      setHoveredKey(null);
                      setTooltip(null);
                    }}
                  />
                  {showLabel && (
                    <text
                      x={point.x}
                      y={chart.baseY + (compact ? 16 : 18)}
                      textAnchor="middle"
                      fill="#a1a1aa"
                      fontSize={compact ? 9 : 10}
                    >
                      {shortXLabel(point.key, chart.granularity)}
                    </text>
                  )}
                </g>
              );
            })}
          </SvgRoot>

          {tooltip && (
            <Tooltip style={{ left: tooltip.x, top: tooltip.y }}>{tooltip.text}</Tooltip>
          )}
        </ChartWrap>
      )}
    </ChartCard>
  );
}
