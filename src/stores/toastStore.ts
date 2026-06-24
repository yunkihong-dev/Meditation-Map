import { create } from "zustand";

export type ToastVariant = "error" | "success" | "info";

export interface ToastItem {
  id: number;
  message: string;
  variant: ToastVariant;
}

interface ToastState {
  toasts: ToastItem[];
  show: (message: string, variant?: ToastVariant, durationMs?: number) => void;
  dismiss: (id: number) => void;
}

let counter = 0;

export const useToastStore = create<ToastState>((set, get) => ({
  toasts: [],
  show: (message, variant = "info", durationMs = 3200) => {
    if (!message) return;
    const id = ++counter;
    set((s) => ({ toasts: [...s.toasts, { id, message, variant }] }));
    if (durationMs > 0) {
      setTimeout(() => get().dismiss(id), durationMs);
    }
  },
  dismiss: (id) => set((s) => ({ toasts: s.toasts.filter((t) => t.id !== id) })),
}));

/** 훅 없이 어디서든 호출 가능한 헬퍼 (toast.error("...")) */
export const toast = {
  error: (message: string) => useToastStore.getState().show(message, "error"),
  success: (message: string) => useToastStore.getState().show(message, "success"),
  info: (message: string) => useToastStore.getState().show(message, "info"),
};
