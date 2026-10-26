/**
 * 회원 화면(알림·소유 신청·내 장소) 공통 조각.
 * 기존 화면(CenterRegisterPage·ProfilePage)의 토큰과 반경·그림자를 그대로 씁니다.
 */
import styled from "styled-components";
import { typography } from "@/styles/typography";

export const MemberPage = styled.div`
  padding: calc(16px + env(safe-area-inset-top, 0px)) 4px 24px;
  color: ${({ theme }) => theme.colors.text900};
`;

export const PageHead = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
`;

export const BackButton = styled.button`
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  border: 0;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 4px 20px rgba(107, 70, 193, 0.06);
  color: ${({ theme }) => theme.colors.primary600};
  cursor: pointer;
`;

export const PageTitle = styled.h1`
  flex: 1;
  min-width: 0;
  margin: 0;
  ${typography.h3};
  color: ${({ theme }) => theme.colors.text900};
`;

export const Lead = styled.p`
  margin: 0 0 16px;
  ${typography.body2};
  color: ${({ theme }) => theme.colors.text700};
`;

export const Card = styled.section`
  padding: 18px;
  margin-bottom: 14px;
  border: ${({ theme }) => theme.hairline};
  border-radius: 22px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadow.card};
`;

export const CardTitle = styled.h2`
  margin: 0 0 6px;
  ${typography.body1};
  font-weight: 700;
`;

export const Muted = styled.p`
  margin: 0;
  ${typography.caption};
  color: ${({ theme }) => theme.colors.text700};
  overflow-wrap: anywhere;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 14px;
`;

export const Label = styled.label`
  ${typography.body2};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text900};
`;

export const Hint = styled.span`
  ${typography.caption};
  color: ${({ theme }) => theme.colors.text700};
`;

export const ErrorText = styled.p`
  margin: 4px 0 0;
  ${typography.caption};
  color: ${({ theme }) => theme.colors.error};
`;

export const TextInput = styled.input`
  width: 100%;
  min-height: 48px;
  box-sizing: border-box;
  padding: 0 14px;
  border: 1px solid ${({ theme }) => theme.colors.border200};
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.white};
  ${typography.body1};
  color: ${({ theme }) => theme.colors.text900};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary500};
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 120px;
  box-sizing: border-box;
  padding: 12px 14px;
  border: 1px solid ${({ theme }) => theme.colors.border200};
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.white};
  ${typography.body2};
  color: ${({ theme }) => theme.colors.text900};
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary500};
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 8px;

  & > * {
    flex: 1;
  }
`;

export const PrimaryButton = styled.button`
  min-height: 50px;
  padding: 0 18px;
  border: 0;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme }) => theme.colors.primary600};
  color: ${({ theme }) => theme.colors.white};
  ${typography.buttonLg};
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const GhostButton = styled.button`
  min-height: 44px;
  padding: 0 16px;
  border: 1px solid ${({ theme }) => theme.colors.border200};
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary600};
  ${typography.buttonMd};
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const SmallButton = styled.button`
  flex-shrink: 0;
  min-height: 36px;
  padding: 0 14px;
  border: 0;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme }) => theme.colors.primary100};
  color: ${({ theme }) => theme.colors.primary700};
  ${typography.buttonMd};
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const Empty = styled.div`
  padding: 40px 12px;
  text-align: center;
  ${typography.body2};
  color: ${({ theme }) => theme.colors.text700};
`;

export const StatusChip = styled.span<{ $tone: "pending" | "ok" | "no" | "neutral" }>`
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  padding: 4px 10px;
  border-radius: ${({ theme }) => theme.radii.pill};
  ${typography.caption};
  font-weight: 700;
  background: ${({ theme, $tone }) =>
    $tone === "ok"
      ? "#e3f5ea"
      : $tone === "no"
        ? theme.colors.errorContainer
        : $tone === "pending"
          ? theme.colors.primary100
          : theme.colors.surfaceContainer};
  color: ${({ theme, $tone }) =>
    $tone === "ok"
      ? "#1e6b3a"
      : $tone === "no"
        ? theme.colors.onErrorContainer
        : $tone === "pending"
          ? theme.colors.primary700
          : theme.colors.text700};
`;

export function statusTone(status: string): "pending" | "ok" | "no" | "neutral" {
  if (status === "PENDING") return "pending";
  if (status === "APPROVED") return "ok";
  if (status === "REJECTED") return "no";
  return "neutral";
}
