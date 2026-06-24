import styled, { keyframes } from "styled-components";
import { useToastStore, type ToastVariant } from "@/stores/toastStore";

const slideIn = keyframes`
  from { opacity: 0; transform: translateY(-12px); }
  to { opacity: 1; transform: translateY(0); }
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

function variantStyle(variant: ToastVariant) {
  if (variant === "error") {
    return { bg: "rgba(127, 29, 29, 0.96)", border: "#b91c1c", icon: "⚠️" };
  }
  if (variant === "success") {
    return { bg: "rgba(6, 78, 59, 0.96)", border: "#059669", icon: "✓" };
  }
  return { bg: "rgba(24, 24, 27, 0.96)", border: "#3f3f46", icon: "ℹ️" };
}

const Card = styled.div<{ $variant: ToastVariant }>`
  pointer-events: auto;
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 12px 14px;
  border-radius: 12px;
  font-size: 14px;
  line-height: 1.4;
  color: #fff;
  background: ${({ $variant }) => variantStyle($variant).bg};
  border: 1px solid ${({ $variant }) => variantStyle($variant).border};
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(8px);
  animation: ${slideIn} 0.22s ease;
  cursor: pointer;

  .toast-icon {
    flex-shrink: 0;
    font-size: 14px;
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
          <span className="toast-icon">{variantStyle(t.variant).icon}</span>
          <span className="toast-msg">{t.message}</span>
        </Card>
      ))}
    </Wrap>
  );
}
