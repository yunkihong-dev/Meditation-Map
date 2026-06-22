import { useCallback, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { AdminButton } from "./adminStyles";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const popIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(8px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 500;
  background: rgba(0, 0, 0, 0.62);
  display: grid;
  place-items: center;
  padding: 20px;
  animation: ${fadeIn} 0.18s ease both;
`;

const Dialog = styled.div`
  width: min(100%, 360px);
  border-radius: 14px;
  border: 1px solid #3f3f46;
  background: #18181b;
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.45);
  animation: ${popIn} 0.22s cubic-bezier(0.22, 1, 0.36, 1) both;
  overflow: hidden;
`;

const Body = styled.div`
  padding: 22px 22px 18px;
`;

const Title = styled.h3`
  margin: 0 0 10px;
  font-size: 16px;
  font-weight: 600;
  color: #f4f4f5;
`;

const Message = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.55;
  color: #a1a1aa;
`;

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  padding: 14px 18px 18px;
  border-top: 1px solid #27272a;
  background: #111114;
`;

interface AdminConfirmModalProps {
  open: boolean;
  title: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function AdminConfirmModal({
  open,
  title,
  message,
  confirmLabel = "확인",
  cancelLabel = "취소",
  onConfirm,
  onCancel,
}: AdminConfirmModalProps) {
  const onOverlayClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) onCancel();
    },
    [onCancel]
  );

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onCancel();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onCancel]);

  if (!open) return null;

  return (
    <Overlay role="presentation" onClick={onOverlayClick}>
      <Dialog role="dialog" aria-modal="true" aria-labelledby="admin-confirm-title">
        <Body>
          <Title id="admin-confirm-title">{title}</Title>
          <Message>{message}</Message>
        </Body>
        <Actions>
          <AdminButton $variant="ghost" type="button" onClick={onCancel}>
            {cancelLabel}
          </AdminButton>
          <AdminButton $variant="primary" type="button" onClick={onConfirm}>
            {confirmLabel}
          </AdminButton>
        </Actions>
      </Dialog>
    </Overlay>
  );
}
