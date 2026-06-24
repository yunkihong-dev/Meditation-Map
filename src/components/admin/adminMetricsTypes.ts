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
  transition: border-color 0.15s ease, box-shadow 0.15s ease;

  &:hover {
    border-color: #52525b;
  }

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary500};
    box-shadow: 0 0 0 3px rgba(75, 0, 130, 0.22);
  }
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
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 600;
  color: #e4e4e7;

  &::before {
    content: "";
    width: 3px;
    height: 14px;
    border-radius: 2px;
    background: ${theme.colors.primary500};
  }
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
  background: linear-gradient(180deg, #141417 0%, #111114 100%);
  border: 1px solid #27272a;
  border-radius: ${theme.radii.md};
  padding: 12px 14px;
  transition: border-color 0.15s ease, transform 0.15s ease;

  &:hover {
    border-color: #3f3f46;
    transform: translateY(-1px);
  }

  strong {
    display: block;
    font-size: 20px;
    margin-top: 3px;
    line-height: 1.15;
    color: #fafafa;
    font-variant-numeric: tabular-nums;
  }

  span {
    font-size: 11px;
    color: #8b8b93;
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }
`;
