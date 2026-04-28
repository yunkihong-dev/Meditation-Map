import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import logoImg from "@/assets/logo.png";
import kakaoImg from "@/assets/kakao.png";
import naverImg from "@/assets/naver.png";
import googleImg from "@/assets/google.png";
import leftArrowImg from "@/assets/left-arrow.png";
import RegionMap from "@/components/meditation/RegionMap";
import { typography } from "@/styles/typography";
import { getRegionById, getRegionIdFromCoordinates } from "@/services/meditation/meditationService";

const stepFadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fieldMsgIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const modalOverlayIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const modalCardIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.96) translateY(8px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
`;

/** 비밀번호 설정 단계 전용: 입력 블록 등장 */
const passwordBlockIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(14px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

/** 회원가입: 다음 입력 블록 등장 */
const signupRevealIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const SignupReveal = styled.div`
  margin-top: 0;
  animation: ${signupRevealIn} 0.42s cubic-bezier(0.22, 1, 0.36, 1) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

/** 인증번호: 안내 문구 + 입력을 한 블록으로 (StepBody 큰 margin 없음) */
const SignupCodeBlock = styled.div`
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const CodeFieldHint = styled.p`
  margin: 0;
  padding: 0 4px;
  text-align: left;
  ${typography.caption};
  color: ${({ theme }) => theme.colors.text700};
  line-height: 1.45;
`;

const Page = styled.section`
  /* Layout Content 하단: 56px(바) + 24px + safe-area — 한 화면에 고정, body 스크롤 방지 */
  --page-outset-bottom: calc(80px + env(safe-area-inset-bottom, 0px));
  box-sizing: border-box;
  height: calc(100vh - var(--page-outset-bottom));
  max-height: calc(100vh - var(--page-outset-bottom));
  height: calc(100dvh - var(--page-outset-bottom));
  max-height: calc(100dvh - var(--page-outset-bottom));
  min-height: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.warmCream};
  color: ${({ theme }) => theme.colors.text900};
  padding-top: calc(16px + env(safe-area-inset-top, 0px));
`;

const Card = styled.div`
  position: relative;
  width: min(100%, 420px);
  padding: 6px 18px 16px;
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const StepContent = styled.div`
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: ${stepFadeIn} 0.35s ease both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

/** 상단·중앙 영역만 스크롤 — 하단 버튼은 StepFooter에 고정 */
const StepMain = styled.div`
  flex: 1 1 auto;
  min-height: 0;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
`;

/** 카드 하단에 primary 버튼 위치 통일 */
const StepFooter = styled.div`
  flex-shrink: 0;
  margin-top: auto;
  padding-top: 12px;
  width: 100%;
`;

const TopNavRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 16px;
  gap: 12px;
  flex-shrink: 0;
`;

const BackButton = styled.button`
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.text900};
  ${typography.body2};
  padding: 10px 6px;
  margin: 0;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  transition: color 0.2s ease, opacity 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary600};
  }
`;

const BackIcon = styled.img`
  width: 18px;
  height: 18px;
  object-fit: contain;
`;

const Brand = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
  flex-shrink: 0;
`;

const BrandLogo = styled.img`
  width: 74px;
  height: 74px;
  object-fit: contain;
`;

const LogoWelcomeText = styled.p`
  margin: 10px 0 0;
  padding: 0 12px;
  text-align: center;
  ${typography.body1};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text900};
  line-height: 1.45;
  max-width: 320px;
`;

const BrandTitle = styled.h1`
  margin: 8px 0 0;
  ${typography.title};
  color: ${({ theme }) => theme.colors.primary300};
`;

const StepTitle = styled.h2`
  margin: 14px 0 0;
  text-align: center;
  ${typography.h3};
`;

const StepDesc = styled.p`
  margin: 8px 0 0;
  text-align: center;
  ${typography.body2};
  color: ${({ theme }) => theme.colors.text700};
`;

const toastSlide = keyframes`
  0% {
    opacity: 0;
    transform: translate(-50%, -14px);
  }
  14% {
    opacity: 1;
    transform: translate(-50%, 0);
  }
  82% {
    opacity: 1;
    transform: translate(-50%, 0);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -14px);
  }
`;

const TopToast = styled.div`
  position: fixed;
  top: calc(env(safe-area-inset-top, 0px) + 10px);
  left: 50%;
  z-index: 130;
  pointer-events: none;
  animation: ${toastSlide} 2.2s ease both;
`;

const TopToastCard = styled.div<{ $variant?: "success" | "error" }>`
  padding: 12px 18px;
  border-radius: ${({ theme }) => theme.radii.pill};
  border: 1px solid
    ${({ $variant }) => ($variant === "error" ? "#f0b8b8" : "#96d6a3")};
  background: ${({ $variant }) => ($variant === "error" ? "#fce8e6" : "#e8f8ec")};
  color: ${({ $variant }) => ($variant === "error" ? "#c5221f" : "#1f6a2b")};
  ${typography.body2};
`;

const StepBody = styled.div`
  margin-top: clamp(24px, 6vh, 48px);
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const Hint = styled.p`
  margin: 8px 0 0;
  text-align: center;
  ${typography.body2};
  color: ${({ theme }) => theme.colors.text700};
`;

const FieldError = styled.p`
  margin: 6px 4px 0;
  ${typography.caption};
  color: #d93025;
  animation: ${fieldMsgIn} 0.24s ease both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const FieldSuccess = styled.p`
  margin: 6px 4px 0;
  ${typography.caption};
  color: #188038;
  animation: ${fieldMsgIn} 0.24s ease both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const PasswordFieldRow = styled.div<{ $index: number }>`
  display: flex;
  flex-direction: column;
  gap: 0;
  animation: ${passwordBlockIn} 0.42s cubic-bezier(0.22, 1, 0.36, 1) both;
  animation-delay: ${({ $index }) => $index * 0.07}s;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const PasswordHint = styled(Hint)`
  margin-top: 0;
  text-align: left;
  padding: 0 2px;
  animation: ${passwordBlockIn} 0.42s cubic-bezier(0.22, 1, 0.36, 1) 0.2s both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const PasswordFieldError = styled(FieldError)`
  animation: ${fieldMsgIn} 0.3s cubic-bezier(0.22, 1, 0.36, 1) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const PasswordInputWrap = styled.div`
  position: relative;
  width: 100%;
`;

const PasswordToggle = styled.button`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.text700};
  ${typography.caption};
  font-weight: 600;
  cursor: pointer;
  padding: 8px 10px;
  border-radius: ${({ theme }) => theme.radii.pill};
  z-index: 1;
  transition: color 0.2s ease, background 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary600};
    background: ${({ theme }) => theme.colors.primary50};
  }
`;

const CodeRow = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 8px;
  align-items: center;
`;

const ResendButton = styled.button<{ $highlight?: boolean }>`
  border: 1px solid
    ${({ theme, $highlight }) => ($highlight ? theme.colors.primary600 : theme.colors.primary200)};
  background: ${({ theme, $highlight }) => ($highlight ? theme.colors.primary600 : theme.colors.white)};
  color: ${({ theme, $highlight }) => ($highlight ? theme.colors.white : theme.colors.text700)};
  border-radius: ${({ theme }) => theme.radii.pill};
  padding: 12px 14px;
  ${typography.buttonMd};
  cursor: pointer;
  opacity: 1;
  transition: border-color 0.22s ease, background 0.22s ease, color 0.22s ease;

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
`;

const BottomPrimaryButton = styled.button<{ $disabled?: boolean }>`
  width: 100%;
  border: none;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme }) => theme.colors.primary300};
  color: ${({ theme }) => theme.colors.white};
  padding: 16px 20px;
  ${typography.buttonMd};
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  opacity: ${({ $disabled }) => ($disabled ? 0.55 : 1)};
  margin-top: 0;
  flex-shrink: 0;
  transition: opacity 0.25s ease, transform 0.2s ease;

  &:not(:disabled):active {
    transform: scale(0.99);
  }
`;

const LocationRow = styled.div`
  margin-top: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const LocationButton = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.primary300};
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary300};
  ${typography.buttonMd};
  border-radius: ${({ theme }) => theme.radii.pill};
  padding: 10px 18px;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease, opacity 0.2s ease;

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.primary50};
  }

  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }
`;

const LocationHint = styled.p<{ $error?: boolean }>`
  margin: 0;
  text-align: center;
  ${typography.caption};
  color: ${({ theme, $error }) => ($error ? "#d93025" : theme.colors.text700)};
  max-width: 320px;
  line-height: 1.45;
`;

const MapBox = styled.div`
  margin-top: 18px;
`;

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.28);
  display: grid;
  place-items: center;
  z-index: 120;
  animation: ${modalOverlayIn} 0.22s ease both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const TermsDetailOverlay = styled(ModalOverlay)`
  z-index: 125;
`;

const ModalCard = styled.div`
  width: min(88vw, 320px);
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 22px 18px 16px;
  animation: ${modalCardIn} 0.28s cubic-bezier(0.22, 1, 0.36, 1) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const ModalTitle = styled.p`
  text-align: center;
  ${typography.body1};
  color: ${({ theme }) => theme.colors.text900};
`;

const ModalActions = styled.div`
  margin-top: 18px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;

const ModalButton = styled.button<{ $primary?: boolean }>`
  border: 1px solid
    ${({ theme, $primary }) => ($primary ? theme.colors.primary300 : theme.colors.primary200)};
  background: ${({ theme, $primary }) => ($primary ? theme.colors.primary300 : theme.colors.white)};
  color: ${({ theme, $primary }) => ($primary ? theme.colors.white : theme.colors.text900)};
  border-radius: ${({ theme }) => theme.radii.pill};
  padding: 10px 14px;
  ${typography.buttonMd};
  cursor: pointer;
`;

const TermsDetailConfirm = styled(ModalButton).attrs({ type: "button", $primary: true })`
  width: 100%;
  margin-top: 14px;
`;

const InterestCard = styled.div`
  margin: 16px auto 0;
  width: min(100%, 200px);
  max-height: min(36dvh, 240px);
  aspect-ratio: 3 / 4;
  border-radius: 30px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 20px;
  color: #fff;
  ${typography.h2};
  background:
    linear-gradient(to top, rgba(0, 0, 0, 0.48), rgba(0, 0, 0, 0.06)),
    radial-gradient(circle at 20% 20%, #a8d97a, #5f8f49 38%, #304f2d);
`;

const CenterIconButton = styled.button`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.primary200};
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary300};
  margin: 16px auto 0;
  font-size: 2rem;
  display: grid;
  place-items: center;
`;

/** 관심사 단계 하단 CTA — StepFooter에서 여백 통일 */
const InterestNextButton = styled(BottomPrimaryButton)`
  flex-shrink: 0;
`;

const SkipButton = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.primary200};
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary300};
  ${typography.buttonMd};
  border-radius: ${({ theme }) => theme.radii.pill};
  padding: 8px 14px;
  cursor: pointer;
  flex-shrink: 0;
  transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary50};
    border-color: ${({ theme }) => theme.colors.primary300};
  }
`;

const TopRightCount = styled.span`
  display: block;
  text-align: right;
  width: 100%;
  margin: 0 0 4px;
  ${typography.caption};
  color: ${({ theme }) => theme.colors.text700};
`;

const CompleteArt = styled.div`
  margin: 36px auto 0;
  display: flex;
  justify-content: center;
`;

const CompleteLogo = styled.img`
  width: 108px;
  height: 108px;
  object-fit: contain;
`;

const CompleteTitle = styled.h2`
  margin: 10px 0 0;
  text-align: center;
  ${typography.h1};
  color: ${({ theme }) => theme.colors.primary300};
`;

const CompleteDesc = styled.p`
  margin: 8px 0 0;
  text-align: center;
  ${typography.body2};
  color: ${({ theme }) => theme.colors.text700};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const Input = styled.input<{ $error?: boolean }>`
  width: 100%;
  border: 1px solid ${({ theme, $error }) => ($error ? "#d93025" : theme.colors.primary200)};
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.text900};
  ${typography.body2};
  padding: 14px 24px;
  transition: border-color 0.2s ease, transform 0.2s ease;

  &::placeholder {
    color: ${({ theme }) => theme.colors.text700};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme, $error }) => ($error ? "#d93025" : theme.colors.primary400)};
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 1;
    cursor: not-allowed;
    background: ${({ theme }) => theme.colors.primary50};
    color: ${({ theme }) => theme.colors.text700};
    transform: none;
  }

  &:disabled:focus {
    border-color: ${({ theme, $error }) => ($error ? "#d93025" : theme.colors.primary200)};
    transform: none;
  }
`;

const PasswordInput = styled(Input)`
  padding: 14px 56px 14px 24px;
  transition:
    border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.22s ease;
`;

const CodeInputWrap = styled.div`
  position: relative;
  width: 100%;
  min-width: 0;
`;

const CodeInput = styled(Input)`
  padding: 14px 58px 14px 24px;
`;

const CodeTimerInField = styled.span`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  ${typography.caption};
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  color: ${({ theme }) => theme.colors.text700};
`;

const LoginButton = styled.button`
  margin-top: 0;
  width: 100%;
  border: none;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme }) => theme.colors.primary300};
  color: ${({ theme }) => theme.colors.white};
  padding: 16px 20px;
  ${typography.buttonMd};
  cursor: pointer;
  transition: transform 0.15s ease;

  &:hover {
    transform: translateY(-1px);
  }
`;

const Divider = styled.div`
  margin: 22px 0 18px;
  display: flex;
  align-items: center;
  gap: 14px;
  color: ${({ theme }) => theme.colors.text700};
  ${typography.caption};

  &::before,
  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background: ${({ theme }) => theme.colors.primary200};
  }
`;

const SocialRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 22px;
`;

const SocialButton = styled.button<{ $bg: string; $color?: string }>`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.12);
  background: ${({ $bg }) => $bg};
  color: ${({ $color = "#111" }) => $color};
  font-size: 1.7rem;
  font-weight: 700;
  cursor: pointer;
  display: grid;
  place-items: center;
  padding: 0;
`;

const SocialIcon = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  object-fit: cover;
`;

const SignUpText = styled.div`
  margin: 28px 0 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 6px;
  text-align: center;
  ${typography.body2};
  color: ${({ theme }) => theme.colors.text900};
`;

const SignUpLink = styled.button`
  border: none;
  margin: 0;
  padding: 0;
  background: none;
  font: inherit;
  line-height: inherit;
  color: ${({ theme }) => theme.colors.primary300};
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  display: inline;

  &:hover {
    color: ${({ theme }) => theme.colors.primary400};
    text-decoration: underline;
    text-underline-offset: 3px;
  }
`;

const TermsMain = styled.div`
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
`;

/** 로고만 위·아래 콘텐츠 사이 남는 영역에서 가로·세로 중앙 */
const TermsLogoCenter = styled.div`
  flex: 1 1 auto;
  min-height: min(200px, 28dvh);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

/** 안내 문구·약관·전체 동의 — 하단에 고정 */
const TermsBottomBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  padding-bottom: 4px;
`;

const TermsLogoBlock = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0;
`;

const TermsLogo = styled.img`
  width: 72px;
  height: 72px;
  object-fit: contain;
`;

const TermsLead = styled.p`
  margin: 0;
  text-align: center;
  ${typography.body2};
  color: ${({ theme }) => theme.colors.text700};
  line-height: 1.45;
  max-width: 300px;
`;

const TermsList = styled.div`
  margin-top: 22px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0;
`;

const TermsRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  min-height: 52px;
  padding: 10px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary200};
`;

const TermsRowMain = styled.label`
  flex: 1 1 auto;
  min-width: 0;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin: 0;
  padding: 0;
  cursor: pointer;
  text-align: left;
  font: inherit;
  color: inherit;
`;

const TermsCheckbox = styled.input`
  width: 20px;
  height: 20px;
  margin: 2px 0 0;
  flex-shrink: 0;
  accent-color: ${({ theme }) => theme.colors.primary300};
  cursor: pointer;
`;

const TermsRowText = styled.span`
  ${typography.body2};
  color: ${({ theme }) => theme.colors.text900};
  line-height: 1.4;
`;

const TermsBadge = styled.span<{ $optional?: boolean }>`
  display: inline-block;
  margin-right: 6px;
  ${typography.caption};
  font-weight: 700;
  color: ${({ theme, $optional }) =>
    $optional ? theme.colors.text700 : theme.colors.primary600};
`;

const TermsDetailBtn = styled.button`
  flex-shrink: 0;
  margin: 0;
  padding: 8px 4px 8px 10px;
  border: none;
  background: none;
  ${typography.caption};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text700};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 2px;
  white-space: nowrap;

  &:hover {
    color: ${({ theme }) => theme.colors.primary600};
  }
`;

/** 개별 행의 「자세히」 셀과 너비 맞춤 */
const TermsRowAlignSpacer = styled.span`
  flex-shrink: 0;
  width: 64px;
`;

const TermsDetailModalCard = styled(ModalCard)`
  width: min(92vw, 360px);
  max-height: min(72dvh, 520px);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 18px 16px 14px;
`;

const TermsDetailBody = styled.div`
  margin-top: 12px;
  overflow-y: auto;
  flex: 1 1 auto;
  min-height: 0;
  ${typography.body2};
  color: ${({ theme }) => theme.colors.text700};
  line-height: 1.55;
  white-space: pre-line;
`;

type ProfileStep =
  | "login"
  | "signup-terms"
  | "signup-account"
  | "signup-region"
  | "signup-interest"
  | "signup-complete";

type TermsDetailId = "service" | "privacy" | "marketing";

const TERMS_DETAIL_TEXT: Record<TermsDetailId, { title: string; body: string }> = {
  service: {
    title: "서비스 이용약관",
    body: `제1조 (목적)\n본 약관은 명상 지도 서비스의 이용 조건 및 절차, 회사와 회원 간 권리·의무를 규정합니다.\n\n제2조 (정의)\n“서비스”란 회사가 제공하는 명상 지도 및 관련 기능을 말합니다.\n\n제3조 (약관의 게시)\n회사는 앱 내 설정 화면에 본 약관을 게시합니다.\n\n※ 실제 서비스 오픈 전 법무 검토 후 최종 약관 전문을 연결해 주세요.`,
  },
  privacy: {
    title: "개인정보 수집 및 이용",
    body: `1. 수집 항목\n이메일, 비밀번호(암호화), 서비스 이용 기록 등\n\n2. 이용 목적\n회원 관리, 서비스 제공 및 개선, 고객 문의 대응\n\n3. 보유 기간\n회원 탈퇴 후 지체 없이 파기(관련 법령에 따른 예외는 해당 기간 동안 보관)\n\n※ 최종 내용은 개인정보처리방침 전문을 통해 안내합니다.`,
  },
  marketing: {
    title: "마케팅 정보 수신",
    body: `이벤트·혜택·신규 기능 등의 안내를 이메일 등으로 받아보실 수 있습니다.\n\n본 항목은 선택 사항이며, 동의하지 않아도 서비스 가입 및 이용에 제한이 없습니다.\n\n수신 방법·빈도·철회 절차 등은 추후 설정에서 변경하실 수 있습니다.`,
  },
};

const meetsPasswordPolicy = (p: string) => {
  if (p.length < 8) return false;
  if (!/[a-zA-Z]/.test(p)) return false;
  if (!/[0-9]/.test(p)) return false;
  return true;
};

const EMAIL_FORMAT_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
/** 휴대폰: 01x + 7~8자리 (하이픈 없이 숫자만 입력) */
const PHONE_LOCAL_REGEX = /^01[0-9]\d{7,8}$/;
/** 데모: 이 번호만 인증 성공, 그 외(예: 222222)는 실패 모달 */
const DEMO_SMS_AUTH_CODE_OK = "111111";

const ProfilePage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<ProfileStep>("login");
  const [email, setEmail] = useState("");
  const [emailStepDone, setEmailStepDone] = useState(false);
  const [phone, setPhone] = useState("");
  const [verifyCode, setVerifyCode] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [regionId, setRegionId] = useState("KR-11");
  const [isRegionModalOpen, setRegionModalOpen] = useState(false);
  const [hasRequestedPhoneCode, setHasRequestedPhoneCode] = useState(false);
  const [phoneAuthVerified, setPhoneAuthVerified] = useState(false);
  const [authResultToast, setAuthResultToast] = useState<"success" | "error" | null>(null);
  const [codeTimer, setCodeTimer] = useState(300);
  const [showCodeSentNotice, setShowCodeSentNotice] = useState(false);
  const [agreeService, setAgreeService] = useState(false);
  const [agreePrivacy, setAgreePrivacy] = useState(false);
  const [agreeMarketing, setAgreeMarketing] = useState(false);
  const [termsDetailOpen, setTermsDetailOpen] = useState<TermsDetailId | null>(null);
  const [geoLoading, setGeoLoading] = useState(false);
  const [geoMessage, setGeoMessage] = useState<string | null>(null);
  const [geoIsError, setGeoIsError] = useState(false);
  const selectedRegionName = getRegionById(regionId)?.name ?? "서울";

  const normalizedEmail = useMemo(() => email.trim(), [email]);
  const isEmailFormatInvalid = useMemo(() => {
    if (!normalizedEmail) return false;
    return !EMAIL_FORMAT_REGEX.test(normalizedEmail);
  }, [normalizedEmail]);
  const isEmailValid = useMemo(
    () => normalizedEmail.length > 0 && EMAIL_FORMAT_REGEX.test(normalizedEmail),
    [normalizedEmail]
  );
  const hasEmailError = isEmailFormatInvalid;
  const normalizedPhoneDigits = useMemo(() => phone.replace(/[^\d]/g, ""), [phone]);
  const isPhoneFormatInvalid = useMemo(() => {
    if (!normalizedPhoneDigits) return false;
    return !PHONE_LOCAL_REGEX.test(normalizedPhoneDigits);
  }, [normalizedPhoneDigits]);
  const isPhoneValid = useMemo(
    () => normalizedPhoneDigits.length > 0 && PHONE_LOCAL_REGEX.test(normalizedPhoneDigits),
    [normalizedPhoneDigits]
  );
  const hasPhoneError = isPhoneFormatInvalid;
  const isCodeValid = useMemo(() => /^\d{6}$/.test(verifyCode.trim()), [verifyCode]);

  const passwordPolicyError = useMemo(() => {
    const p = password;
    if (!p) return null;
    if (p.length < 8) return "8자 이상이어야 합니다";
    if (!/[a-zA-Z]/.test(p)) return "영문이 포함되어야 합니다";
    if (!/[0-9]/.test(p)) return "숫자가 포함되어야 합니다";
    return null;
  }, [password]);

  const isPasswordMismatch = useMemo(
    () => passwordConfirm.length > 0 && password !== passwordConfirm,
    [password, passwordConfirm]
  );

  const isPasswordValid = useMemo(
    () => meetsPasswordPolicy(password) && password === passwordConfirm,
    [password, passwordConfirm]
  );
  const isResendHighlight = codeTimer <= 0;
  const formattedCodeTimer = useMemo(() => {
    const minutes = Math.floor(codeTimer / 60);
    const seconds = codeTimer % 60;
    return `${minutes}:${String(seconds).padStart(2, "0")}`;
  }, [codeTimer]);

  const allTermsChecked = useMemo(
    () => agreeService && agreePrivacy && agreeMarketing,
    [agreeService, agreePrivacy, agreeMarketing]
  );

  const requiredTermsOk = useMemo(
    () => agreeService && agreePrivacy,
    [agreeService, agreePrivacy]
  );

  useEffect(() => {
    if (step !== "signup-account" || !hasRequestedPhoneCode) return;
    const timerId = window.setInterval(() => {
      setCodeTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => window.clearInterval(timerId);
  }, [step, hasRequestedPhoneCode]);

  useEffect(() => {
    if (step !== "signup-account") return;
    if (!hasRequestedPhoneCode) return;
    if (!phoneAuthVerified) return;
    const id = window.setTimeout(() => {
      document.getElementById("signup-password-anchor")?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }, 80);
    return () => window.clearTimeout(id);
  }, [step, hasRequestedPhoneCode, phoneAuthVerified]);

  useEffect(() => {
    if (step !== "signup-account" || !emailStepDone) return;
    const id = window.setTimeout(() => {
      document.getElementById("signup-phone-anchor")?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }, 100);
    return () => window.clearTimeout(id);
  }, [step, emailStepDone]);

  useEffect(() => {
    if (!authResultToast) return;
    const timeoutId = window.setTimeout(() => {
      setAuthResultToast(null);
    }, 2200);
    return () => window.clearTimeout(timeoutId);
  }, [authResultToast]);

  useEffect(() => {
    if (!showCodeSentNotice) return;
    const timeoutId = window.setTimeout(() => {
      setShowCodeSentNotice(false);
    }, 2200);
    return () => window.clearTimeout(timeoutId);
  }, [showCodeSentNotice]);

  useEffect(() => {
    if (step === "login") {
      setShowLoginPassword(false);
    }
  }, [step]);

  useEffect(() => {
    if (step !== "signup-region") {
      setGeoMessage(null);
      setGeoIsError(false);
      setGeoLoading(false);
    }
  }, [step]);

  const handleUseCurrentLocation = () => {
    setGeoMessage(null);
    setGeoIsError(false);
    if (!navigator.geolocation) {
      setGeoIsError(true);
      setGeoMessage("이 환경에서는 위치 정보를 쓸 수 없어요. 지도에서 골라주세요.");
      return;
    }
    setGeoLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setGeoLoading(false);
        const id = getRegionIdFromCoordinates(
          pos.coords.latitude,
          pos.coords.longitude
        );
        if (id) {
          setRegionId(id);
          setRegionModalOpen(true);
          setGeoIsError(false);
          const name = getRegionById(id)?.name ?? id;
          setGeoMessage(`${name} 지역으로 맞췄어요. 맞는지 확인해 주세요.`);
        } else {
          setGeoIsError(true);
          setGeoMessage("위치로 시·도를 찾지 못했어요. 지도에서 선택해 주세요.");
        }
      },
      (err) => {
        setGeoLoading(false);
        setGeoIsError(true);
        if (err.code === 1) {
          setGeoMessage("위치 권한이 필요해요. 허용하시거나 지도에서 골라주세요.");
        } else if (err.code === 2) {
          setGeoMessage("위치를 가져올 수 없어요. 지도에서 선택해 주세요.");
        } else {
          setGeoMessage("위치 확인에 실패했어요. 지도에서 선택해 주세요.");
        }
      },
      { enableHighAccuracy: false, maximumAge: 300_000, timeout: 12_000 }
    );
  };

  const handleBack = () => {
    if (step === "login") {
      navigate(-1);
      return;
    }
    if (step === "signup-terms") {
      setTermsDetailOpen(null);
      setStep("login");
      return;
    }
    if (step === "signup-account") {
      setEmailStepDone(false);
      setHasRequestedPhoneCode(false);
      setPhoneAuthVerified(false);
      setAuthResultToast(null);
      setPhone("");
      setVerifyCode("");
      setPassword("");
      setPasswordConfirm("");
      setShowPassword(false);
      setShowPasswordConfirm(false);
      setStep("signup-terms");
      return;
    }
    if (step === "signup-region") {
      setStep("signup-account");
      return;
    }
    if (step === "signup-interest") setStep("signup-region");
  };

  return (
    <Page>
      <Card>
        {step !== "signup-complete" && (
          <TopNavRow>
            <BackButton type="button" onClick={handleBack} aria-label="뒤로가기">
              <BackIcon src={leftArrowImg} alt="" aria-hidden="true" />
              뒤로가기
            </BackButton>
            {step === "signup-interest" && (
              <SkipButton type="button" onClick={() => setStep("signup-complete")}>
                건너뛰기
              </SkipButton>
            )}
          </TopNavRow>
        )}

        {step === "login" && (
          <StepContent>
            <StepMain>
              <Brand>
                <BrandLogo src={logoImg} alt="명상 지도 로고" />
                <LogoWelcomeText>명상 지도에 오신 것을 환영합니다!</LogoWelcomeText>
                <BrandTitle>명상 지도</BrandTitle>
              </Brand>

              <Form>
                <Input type="email" placeholder="이메일" aria-label="이메일" />
                <PasswordInputWrap>
                  <PasswordInput
                    type={showLoginPassword ? "text" : "password"}
                    placeholder="비밀번호"
                    aria-label="비밀번호"
                    autoComplete="current-password"
                  />
                  <PasswordToggle
                    type="button"
                    aria-pressed={showLoginPassword}
                    aria-label={showLoginPassword ? "비밀번호 숨기기" : "비밀번호 보기"}
                    onClick={() => setShowLoginPassword((v) => !v)}
                  >
                    {showLoginPassword ? "숨기기" : "보기"}
                  </PasswordToggle>
                </PasswordInputWrap>
              </Form>

              <Divider>또는</Divider>

              <SocialRow>
                <SocialButton type="button" $bg="transparent" aria-label="카카오로 로그인">
                  <SocialIcon src={kakaoImg} alt="카카오 로그인" />
                </SocialButton>
                <SocialButton type="button" $bg="transparent" $color="#fff" aria-label="네이버로 로그인">
                  <SocialIcon src={naverImg} alt="네이버 로그인" />
                </SocialButton>
                <SocialButton type="button" $bg="transparent" aria-label="구글로 로그인">
                  <SocialIcon src={googleImg} alt="구글 로그인" />
                </SocialButton>
              </SocialRow>

              <SignUpText>
                <span>계정이 없으신가요?</span>
                <SignUpLink
                  type="button"
                  onClick={() => {
                    setEmail("");
                    setEmailStepDone(false);
                    setPhone("");
                    setVerifyCode("");
                    setPassword("");
                    setPasswordConfirm("");
                    setShowPassword(false);
                    setShowPasswordConfirm(false);
                    setHasRequestedPhoneCode(false);
                    setPhoneAuthVerified(false);
                    setAuthResultToast(null);
                    setCodeTimer(300);
                    setRegionId("KR-11");
                    setAgreeService(false);
                    setAgreePrivacy(false);
                    setAgreeMarketing(false);
                    setTermsDetailOpen(null);
                    setStep("signup-terms");
                  }}
                >
                  회원가입
                </SignUpLink>
              </SignUpText>
            </StepMain>
            <StepFooter>
              <LoginButton type="button">로그인하기</LoginButton>
            </StepFooter>
          </StepContent>
        )}

        {step === "signup-terms" && (
          <StepContent>
            <TermsMain>
              <TermsLogoCenter>
                <TermsLogoBlock>
                  <TermsLogo src={logoImg} alt="명상 지도 로고" />
                  <LogoWelcomeText>명상 지도에 오신 것을 환영합니다!</LogoWelcomeText>
                </TermsLogoBlock>
              </TermsLogoCenter>
              <TermsBottomBlock>
                <TermsLead>서비스 이용을 위해 아래 약관에 동의해 주세요.</TermsLead>
                <TermsList>
                <TermsRow>
                  <TermsRowMain htmlFor="signup-terms-service">
                    <TermsCheckbox
                      id="signup-terms-service"
                      type="checkbox"
                      checked={agreeService}
                      onChange={(e) => setAgreeService(e.target.checked)}
                    />
                    <TermsRowText>
                      <TermsBadge>[필수]</TermsBadge>서비스 이용약관에 동의합니다
                    </TermsRowText>
                  </TermsRowMain>
                  <TermsDetailBtn
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setTermsDetailOpen("service");
                    }}
                  >
                    자세히 ›
                  </TermsDetailBtn>
                </TermsRow>
                <TermsRow>
                  <TermsRowMain htmlFor="signup-terms-privacy">
                    <TermsCheckbox
                      id="signup-terms-privacy"
                      type="checkbox"
                      checked={agreePrivacy}
                      onChange={(e) => setAgreePrivacy(e.target.checked)}
                    />
                    <TermsRowText>
                      <TermsBadge>[필수]</TermsBadge>개인정보 수집 및 이용에 동의합니다
                    </TermsRowText>
                  </TermsRowMain>
                  <TermsDetailBtn
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setTermsDetailOpen("privacy");
                    }}
                  >
                    자세히 ›
                  </TermsDetailBtn>
                </TermsRow>
                <TermsRow>
                  <TermsRowMain htmlFor="signup-terms-marketing">
                    <TermsCheckbox
                      id="signup-terms-marketing"
                      type="checkbox"
                      checked={agreeMarketing}
                      onChange={(e) => setAgreeMarketing(e.target.checked)}
                    />
                    <TermsRowText>
                      <TermsBadge $optional>[선택]</TermsBadge>마케팅 정보 수신에 동의합니다
                    </TermsRowText>
                  </TermsRowMain>
                  <TermsDetailBtn
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setTermsDetailOpen("marketing");
                    }}
                  >
                    자세히 ›
                  </TermsDetailBtn>
                </TermsRow>
                <TermsRow>
                  <TermsRowMain htmlFor="signup-terms-all">
                    <TermsCheckbox
                      id="signup-terms-all"
                      type="checkbox"
                      checked={allTermsChecked}
                      onChange={(e) => {
                        const on = e.target.checked;
                        setAgreeService(on);
                        setAgreePrivacy(on);
                        setAgreeMarketing(on);
                      }}
                    />
                    <TermsRowText>전체 동의</TermsRowText>
                  </TermsRowMain>
                  <TermsRowAlignSpacer aria-hidden />
                </TermsRow>
              </TermsList>
              </TermsBottomBlock>
            </TermsMain>
            <StepFooter>
              <BottomPrimaryButton
                type="button"
                $disabled={!requiredTermsOk}
                disabled={!requiredTermsOk}
                onClick={() => setStep("signup-account")}
              >
                다음
              </BottomPrimaryButton>
            </StepFooter>
          </StepContent>
        )}

        {step === "signup-account" && (
          <StepContent>
            <StepMain>
              <StepTitle>회원가입</StepTitle>
              <StepBody>
                <Input
                  type="email"
                  placeholder="이메일"
                  value={email}
                  $error={hasEmailError}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  disabled={emailStepDone}
                />
                {isEmailFormatInvalid && <FieldError>이메일 형식이 아닙니다</FieldError>}
                {!hasEmailError && isEmailValid && !emailStepDone && (
                  <FieldSuccess>사용가능한 이메일입니다</FieldSuccess>
                )}

                {emailStepDone && (
                  <SignupReveal id="signup-phone-anchor">
                    <Input
                      type="tel"
                      inputMode="numeric"
                      placeholder="휴대폰 번호 (- 없이)"
                      value={phone}
                      $error={hasPhoneError}
                      onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                      autoComplete="tel"
                      disabled={phoneAuthVerified}
                    />
                    {hasPhoneError && (
                      <FieldError>올바른 휴대폰 번호를 입력해 주세요</FieldError>
                    )}
                  </SignupReveal>
                )}
              </StepBody>

              {hasRequestedPhoneCode && (
                <SignupReveal id="signup-code-anchor">
                  <SignupCodeBlock>
                    <CodeRow>
                      <CodeInputWrap>
                        <CodeInput
                          type="text"
                          inputMode="numeric"
                          placeholder="인증번호"
                          value={verifyCode}
                          onChange={(e) =>
                            setVerifyCode(e.target.value.replace(/\D/g, "").slice(0, 6))
                          }
                          autoComplete="one-time-code"
                          aria-describedby={
                            phoneAuthVerified ? undefined : "signup-code-hint"
                          }
                          disabled={phoneAuthVerified}
                        />
                        <CodeTimerInField title={`남은 시간 ${formattedCodeTimer}`}>
                          {formattedCodeTimer}
                        </CodeTimerInField>
                      </CodeInputWrap>
                      <ResendButton
                        type="button"
                        $highlight={isResendHighlight}
                        disabled={phoneAuthVerified}
                        onClick={() => {
                          setVerifyCode("");
                          setPhoneAuthVerified(false);
                          setAuthResultToast(null);
                          setCodeTimer(300);
                          setShowCodeSentNotice(true);
                        }}
                      >
                        다시받기
                      </ResendButton>
                    </CodeRow>
                    {!phoneAuthVerified && (
                      <CodeFieldHint id="signup-code-hint">
                        휴대폰으로 발송된 6자리 인증번호를 입력해 주세요
                      </CodeFieldHint>
                    )}
                  </SignupCodeBlock>
                </SignupReveal>
              )}

              {hasRequestedPhoneCode && phoneAuthVerified && (
                <SignupReveal id="signup-password-anchor">
                  <StepBody>
                    <PasswordFieldRow $index={0}>
                      <PasswordInputWrap>
                        <PasswordInput
                          type={showPassword ? "text" : "password"}
                          placeholder="비밀번호"
                          value={password}
                          $error={!!passwordPolicyError}
                          onChange={(e) => setPassword(e.target.value)}
                          autoComplete="new-password"
                        />
                        <PasswordToggle
                          type="button"
                          aria-pressed={showPassword}
                          aria-label={showPassword ? "비밀번호 숨기기" : "비밀번호 보기"}
                          onClick={() => setShowPassword((v) => !v)}
                        >
                          {showPassword ? "숨기기" : "보기"}
                        </PasswordToggle>
                      </PasswordInputWrap>
                      {passwordPolicyError && (
                        <PasswordFieldError>{passwordPolicyError}</PasswordFieldError>
                      )}
                    </PasswordFieldRow>
                    <PasswordFieldRow $index={1}>
                      <PasswordInputWrap>
                        <PasswordInput
                          type={showPasswordConfirm ? "text" : "password"}
                          placeholder="비밀번호 확인"
                          value={passwordConfirm}
                          $error={isPasswordMismatch}
                          onChange={(e) => setPasswordConfirm(e.target.value)}
                          autoComplete="new-password"
                        />
                        <PasswordToggle
                          type="button"
                          aria-pressed={showPasswordConfirm}
                          aria-label={
                            showPasswordConfirm ? "비밀번호 확인 숨기기" : "비밀번호 확인 보기"
                          }
                          onClick={() => setShowPasswordConfirm((v) => !v)}
                        >
                          {showPasswordConfirm ? "숨기기" : "보기"}
                        </PasswordToggle>
                      </PasswordInputWrap>
                      {isPasswordMismatch && (
                        <PasswordFieldError>비밀번호가 일치하지 않습니다</PasswordFieldError>
                      )}
                    </PasswordFieldRow>
                    <PasswordHint>8자 이상, 영문+숫자 포함</PasswordHint>
                  </StepBody>
                </SignupReveal>
              )}
            </StepMain>
            <StepFooter>
              {!emailStepDone && (
                <BottomPrimaryButton
                  type="button"
                  $disabled={!isEmailValid}
                  disabled={!isEmailValid}
                  onClick={() => setEmailStepDone(true)}
                >
                  다음
                </BottomPrimaryButton>
              )}
              {emailStepDone && !hasRequestedPhoneCode && (
                <BottomPrimaryButton
                  type="button"
                  $disabled={!isPhoneValid}
                  disabled={!isPhoneValid}
                  onClick={() => {
                    setHasRequestedPhoneCode(true);
                    setPhoneAuthVerified(false);
                    setAuthResultToast(null);
                    setVerifyCode("");
                    setCodeTimer(300);
                    setShowCodeSentNotice(true);
                    window.setTimeout(() => {
                      document
                        .getElementById("signup-code-anchor")
                        ?.scrollIntoView({ behavior: "smooth", block: "nearest" });
                    }, 120);
                  }}
                >
                  인증번호 받기
                </BottomPrimaryButton>
              )}
              {hasRequestedPhoneCode && !phoneAuthVerified && (
                <BottomPrimaryButton
                  type="button"
                  $disabled={!isCodeValid}
                  disabled={!isCodeValid}
                  onClick={() => {
                    if (!isCodeValid) return;
                    if (verifyCode.trim() === DEMO_SMS_AUTH_CODE_OK) {
                      setPhoneAuthVerified(true);
                      setAuthResultToast("success");
                    } else {
                      setAuthResultToast("error");
                    }
                  }}
                >
                  인증
                </BottomPrimaryButton>
              )}
              {hasRequestedPhoneCode && phoneAuthVerified && (
                <BottomPrimaryButton
                  type="button"
                  $disabled={!isPasswordValid}
                  disabled={!isPasswordValid}
                  onClick={() => setStep("signup-region")}
                >
                  다음
                </BottomPrimaryButton>
              )}
            </StepFooter>
          </StepContent>
        )}

        {showCodeSentNotice && (
          <TopToast role="status" aria-live="polite">
            <TopToastCard>인증번호를 보냈어요!</TopToastCard>
          </TopToast>
        )}

        {authResultToast === "success" && (
          <TopToast role="status" aria-live="polite">
            <TopToastCard>인증되었습니다</TopToastCard>
          </TopToast>
        )}
        {authResultToast === "error" && (
          <TopToast role="alert" aria-live="assertive">
            <TopToastCard $variant="error">인증번호가 틀렸습니다</TopToastCard>
          </TopToast>
        )}

        {step === "signup-region" && (
          <StepContent>
            <StepMain>
            <StepTitle>활동 지역을 설정해주세요</StepTitle>
            <StepDesc>주로 명상하는 지역을 선택해주세요</StepDesc>
            <LocationRow>
              <LocationButton
                type="button"
                disabled={geoLoading}
                aria-busy={geoLoading}
                onClick={handleUseCurrentLocation}
              >
                {geoLoading ? "위치 확인 중…" : "현재 위치로 지역 맞추기"}
              </LocationButton>
              {geoMessage && <LocationHint $error={geoIsError}>{geoMessage}</LocationHint>}
            </LocationRow>
            <MapBox>
              <RegionMap
                maxMapHeight="clamp(220px, calc(100dvh - 260px), 480px)"
                activeRegionId={regionId}
                onSelectRegion={(nextRegionId) => {
                  setRegionId(nextRegionId);
                  setRegionModalOpen(true);
                }}
              />
            </MapBox>
            </StepMain>
          </StepContent>
        )}

        {step === "signup-interest" && (
          <StepContent>
            <StepMain>
            <TopRightCount>1/10</TopRightCount>
            <StepTitle>관심사를 선택해주세요</StepTitle>
            <StepDesc>좌우로 넘기며 관심있는 주제를 선택하세요</StepDesc>
            <InterestCard>숲</InterestCard>
            <CenterIconButton type="button" aria-label="관심사 좋아요">
              ♡
            </CenterIconButton>
            </StepMain>
            <StepFooter>
            <InterestNextButton type="button" onClick={() => setStep("signup-complete")}>
              다음
            </InterestNextButton>
            </StepFooter>
          </StepContent>
        )}

        {step === "signup-complete" && (
          <StepContent>
            <StepMain>
            <CompleteArt>
              <CompleteLogo src={logoImg} alt="명상 지도 로고" />
            </CompleteArt>
            <CompleteTitle>가입 완료!</CompleteTitle>
            <CompleteDesc>평온한 명상 여행을 시작하세요</CompleteDesc>
            </StepMain>
            <StepFooter>
            <BottomPrimaryButton
              type="button"
              onClick={() => {
                setStep("login");
              }}
            >
              시작하기
            </BottomPrimaryButton>
            </StepFooter>
          </StepContent>
        )}

        {step === "signup-region" && isRegionModalOpen && (
          <ModalOverlay role="dialog" aria-modal="true" aria-label="지역 확인">
            <ModalCard>
              <ModalTitle>{selectedRegionName} 지역이 맞습니까?</ModalTitle>
              <ModalActions>
                <ModalButton type="button" onClick={() => setRegionModalOpen(false)}>
                  아니오
                </ModalButton>
                <ModalButton
                  type="button"
                  $primary
                  onClick={() => {
                    setRegionModalOpen(false);
                    setStep("signup-interest");
                  }}
                >
                  네
                </ModalButton>
              </ModalActions>
            </ModalCard>
          </ModalOverlay>
        )}
        {termsDetailOpen !== null && (
          <TermsDetailOverlay
            role="dialog"
            aria-modal="true"
            aria-labelledby="terms-detail-title"
            onClick={() => setTermsDetailOpen(null)}
          >
            <TermsDetailModalCard onClick={(e) => e.stopPropagation()}>
              <ModalTitle id="terms-detail-title">
                {TERMS_DETAIL_TEXT[termsDetailOpen].title}
              </ModalTitle>
              <TermsDetailBody>{TERMS_DETAIL_TEXT[termsDetailOpen].body}</TermsDetailBody>
              <TermsDetailConfirm onClick={() => setTermsDetailOpen(null)}>확인</TermsDetailConfirm>
            </TermsDetailModalCard>
          </TermsDetailOverlay>
        )}
      </Card>
    </Page>
  );
};

export default ProfilePage;
