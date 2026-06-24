import styled from "styled-components";
import { theme } from "@/styles/theme";

export const AdminShell = styled.div`
  display: flex;
  min-height: 100vh;
  background: #0f0f12;
  color: #f4f4f5;
`;

export const AdminSidebar = styled.aside<{ $open: boolean }>`
  width: ${({ $open }) => ($open ? "240px" : "0")};
  overflow: hidden;
  transition: width 0.2s ease;
  background: #18181b;
  border-right: 1px solid #27272a;
  flex-shrink: 0;
`;

export const AdminMain = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
`;

export const AdminTopBar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 20px;
  border-bottom: 1px solid #27272a;
  background: #111114;
`;

export const AdminContent = styled.main`
  flex: 1;
  padding: 20px;
  overflow: auto;
`;

export const AdminNavLink = styled.button<{ $active?: boolean }>`
  display: block;
  width: 100%;
  text-align: left;
  padding: 10px 14px;
  border: none;
  background: ${({ $active }) => ($active ? "rgba(75, 0, 130, 0.32)" : "transparent")};
  color: ${({ $active }) => ($active ? "#fff" : "#a1a1aa")};
  font-size: 14px;
  font-weight: ${({ $active }) => ($active ? 600 : 400)};
  cursor: pointer;
  border-left: 3px solid ${({ $active }) => ($active ? theme.colors.primary500 : "transparent")};
  transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    color: #fff;
  }
`;

export const AdminCard = styled.div`
  background: linear-gradient(180deg, #1b1b1f 0%, #161619 100%);
  border: 1px solid #2a2a30;
  border-radius: ${theme.radii.lg};
  padding: 16px;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.02), 0 8px 24px rgba(0, 0, 0, 0.22);
`;

export const AdminGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 12px;
`;

export const AdminStat = styled.div`
  background: #111114;
  border: 1px solid #27272a;
  border-radius: ${theme.radii.md};
  padding: 14px;
  transition: border-color 0.15s ease, transform 0.15s ease;

  &:hover {
    border-color: #3f3f46;
    transform: translateY(-1px);
  }

  strong {
    display: block;
    font-size: 22px;
    margin-top: 4px;
    color: #fafafa;
    font-variant-numeric: tabular-nums;
  }

  span {
    font-size: 12px;
    color: #a1a1aa;
  }
`;

export const AdminTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;

  th,
  td {
    padding: 10px 12px;
    border-bottom: 1px solid #27272a;
    text-align: left;
  }

  th {
    color: #8b8b93;
    font-weight: 600;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  tbody tr {
    cursor: pointer;
    transition: background 0.12s ease;
  }

  tr:hover td {
    background: rgba(255, 255, 255, 0.04);
  }
`;

export const AdminButton = styled.button<{ $variant?: "primary" | "danger" | "ghost" }>`
  padding: 8px 14px;
  border-radius: ${theme.radii.md};
  border: 1px solid
    ${({ $variant }) =>
      $variant === "danger" ? "#7f1d1d" : $variant === "primary" ? theme.colors.primary600 : "#3f3f46"};
  background: ${({ $variant }) =>
    $variant === "danger" ? "#991b1b" : $variant === "primary" ? theme.colors.primary600 : "transparent"};
  color: #fff;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: filter 0.15s ease, transform 0.06s ease, background 0.15s ease, border-color 0.15s ease;

  &:hover:not(:disabled) {
    filter: brightness(1.12);
    background: ${({ $variant }) => ($variant === "ghost" ? "rgba(255, 255, 255, 0.05)" : undefined)};
  }

  &:active:not(:disabled) {
    transform: translateY(1px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const AdminInput = styled.input`
  width: 100%;
  padding: 8px 10px;
  border-radius: ${theme.radii.md};
  border: 1px solid #3f3f46;
  background: #09090b;
  color: #fff;
  font-size: 14px;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;

  &::placeholder {
    color: #52525b;
  }

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary500};
    box-shadow: 0 0 0 3px rgba(75, 0, 130, 0.25);
  }
`;

export const AdminTextarea = styled.textarea`
  width: 100%;
  min-height: 280px;
  padding: 10px;
  border-radius: ${theme.radii.md};
  border: 1px solid #3f3f46;
  background: #09090b;
  color: #e4e4e7;
  font-family: ui-monospace, monospace;
  font-size: 12px;
  line-height: 1.5;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary500};
    box-shadow: 0 0 0 3px rgba(75, 0, 130, 0.25);
  }
`;

export const AdminLabel = styled.label`
  display: block;
  font-size: 12px;
  color: #a1a1aa;
  margin-bottom: 4px;
`;

export const AdminField = styled.div`
  margin-bottom: 12px;
`;

export const AdminError = styled.p`
  color: #f87171;
  font-size: 13px;
  margin: 8px 0;
`;

export const AdminEmbed = styled.iframe`
  width: 100%;
  height: min(70vh, 720px);
  border: 0;
  border-radius: ${theme.radii.lg};
  background: #000;
`;
