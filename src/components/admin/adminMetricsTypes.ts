import styled from "styled-components";
import { theme } from "@/styles/theme";

export type MetricGranularity = "day" | "month";

export interface MetricPoint {
  key: string;
  label: string;
  count: number;
}

export interface MetricSeries {
  granularity: MetricGranularity;
  limit: number;
  total: number;
  average: number;
  peak: number;
  points: MetricPoint[];
}

export const DAY_LIMIT_OPTIONS = [
  { value: 7, label: "최근 7일" },
  { value: 14, label: "최근 14일" },
  { value: 30, label: "최근 30일" },
  { value: 60, label: "최근 60일" },
  { value: 90, label: "최근 90일" },
] as const;

export const MONTH_LIMIT_OPTIONS = [
  { value: 6, label: "최근 6개월" },
  { value: 12, label: "최근 12개월" },
  { value: 24, label: "최근 24개월" },
] as const;

export const ChartControlsBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
`;

export const ChartSelect = styled.select`
  padding: 6px 10px;
  border-radius: ${theme.radii.md};
  border: 1px solid #3f3f46;
  background: #09090b;
  color: #fff;
  font-size: 12px;
  cursor: pointer;
`;

export const DashboardHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 16px;
`;

export const DashboardHeaderActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
`;

export const DashboardTitle = styled.h2`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
`;

export const SectionTitle = styled.h3`
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: #e4e4e7;
`;

export const SectionHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 10px;
`;

export const ChartsStack = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;

  & + & {
    margin-top: 20px;
  }
`;

export const EndpointGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const DashboardStatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(132px, 1fr));
  gap: 8px;
  margin-bottom: 20px;
`;

export const DashboardStat = styled.div`
  background: #111114;
  border: 1px solid #27272a;
  border-radius: ${theme.radii.md};
  padding: 10px 12px;

  strong {
    display: block;
    font-size: 18px;
    margin-top: 2px;
    line-height: 1.2;
  }

  span {
    font-size: 11px;
    color: #a1a1aa;
  }
`;
