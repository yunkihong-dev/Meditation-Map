import styled, { keyframes } from "styled-components";
import { theme } from "@/styles/theme";
import { useToastStore, type ToastVariant } from "@/stores/toastStore";

const slideIn = keyframes`
  from { opacity: 0; transform: translateY(-12px) scale(0.98); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`;

const Wrap = styled.div`
  position: fixed;
  top: 16px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: min(92vw, 380px);
  pointer-events: none;
`;

/**
 * 밝은 카드에 브랜드 퍼플 계열 강조색을 얹습니다.
 *
 * 전에는 카드 전체가 짙은 자주·짙은 초록·검정이라 화면에서 혼자 무거웠습니다. 흰 배경에
 * 색은 왼쪽 띠와 아이콘에만 쓰면 눈에 잘 띄면서도 서비스 톤과 붙습니다.
 */
function variantStyle(variant: ToastVariant) {
  if (variant === "error") {
    // 위험은 브랜드 색에 묻히면 안 되므로, 팔레트의 dustyRose 를 선명하게 올린 붉은 계열을 씁니다.
    return { accent: "#D2415A", tint: "rgba(210, 65, 90, 0.12)", glyph: "!" };
  }
  if (variant === "success") {
    return { accent: theme.colors.primary600, tint: "rgba(75, 0, 130, 0.1)", glyph: "✓" };
  }
  return { accent: theme.colors.dustyGold, tint: "rgba(201, 169, 98, 0.16)", glyph: "i" };
}

const Card = styled.div<{ $variant: ToastVariant }>`
  pointer-events: auto;
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 13px 15px 13px 17px;
  border-radius: 14px;
  overflow: hidden;
  font-size: 14px;
  line-height: 1.45;
  color: ${({ theme: t }) => t.colors.text900};
  background: rgba(255, 255, 255, 0.97);
  border: 1px solid ${({ $variant }) => variantStyle($variant).tint};
  box-shadow:
    0 10px 30px rgba(75, 0, 130, 0.16),
    0 2px 6px rgba(61, 61, 61, 0.06);
  backdrop-filter: blur(10px);
  animation: ${slideIn} 0.22s cubic-bezier(0.2, 0.8, 0.3, 1);
  cursor: pointer;

  /* 왼쪽 강조 띠 — 종류를 색으로만 구분하지 않도록 아이콘 글리프와 함께 씁니다. */
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background: ${({ $variant }) => variantStyle($variant).accent};
  }

  .toast-icon {
    flex-shrink: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: ${({ $variant }) => variantStyle($variant).accent};
    color: ${({ theme: t }) => t.colors.white};
    font-size: 13px;
    font-weight: 700;
    line-height: 1;
  }

  .toast-msg {
    flex: 1;
    word-break: break-word;
  }
`;

export default function Toaster() {
  const toasts = useToastStore((s) => s.toasts);
  const dismiss = useToastStore((s) => s.dismiss);

  if (toasts.length === 0) return null;

  return (
    <Wrap aria-live="polite">
      {toasts.map((t) => (
        <Card key={t.id} $variant={t.variant} role="alert" onClick={() => dismiss(t.id)}>
          <span className="toast-icon" aria-hidden="true">
            {variantStyle(t.variant).glyph}
          </span>
          <span className="toast-msg">{t.message}</span>
        </Card>
      ))}
    </Wrap>
  );
}
