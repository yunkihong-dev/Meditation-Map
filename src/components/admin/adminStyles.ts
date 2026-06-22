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
  padding: 10px 16px;
  border: none;
  background: ${({ $active }) => ($active ? "rgba(75, 0, 130, 0.35)" : "transparent")};
  color: ${({ $active }) => ($active ? "#fff" : "#a1a1aa")};
  font-size: 14px;
  cursor: pointer;
  border-left: 3px solid ${({ $active }) => ($active ? theme.colors.primary600 : "transparent")};

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    color: #fff;
  }
`;

export const AdminCard = styled.div`
  background: #18181b;
  border: 1px solid #27272a;
  border-radius: ${theme.radii.lg};
  padding: 16px;
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

  strong {
    display: block;
    font-size: 22px;
    margin-top: 4px;
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
    color: #a1a1aa;
    font-weight: 600;
  }

  tr:hover td {
    background: rgba(255, 255, 255, 0.03);
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
  cursor: pointer;

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
