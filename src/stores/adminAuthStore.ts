import { create } from "zustand";
import { getMeditationApiBaseUrl } from "@/services/meditation/repositories/apiConfig";

const STAFF_ROLES = new Set(["ADMIN", "DEV", "EMPLOYEE"]);

interface AdminAuthState {
  username: string | null;
  role: string | null;
  ready: boolean;
  authenticated: boolean;
  bootstrap: () => Promise<void>;
  logout: () => Promise<void>;
}

export const useAdminAuthStore = create<AdminAuthState>((set) => ({
  username: null,
  role: null,
  ready: false,
  authenticated: false,
  bootstrap: async () => {
    const base = getMeditationApiBaseUrl();
    if (!base) {
      set({ username: null, role: null, ready: true, authenticated: false });
      return;
    }
    try {
      const res = await fetch(`${base}/admin/auth/me`, { credentials: "include" });
      if (res.ok) {
        const me = (await res.json()) as { username?: string; role?: string };
        const role = me.role ?? "";
        if (me.username && STAFF_ROLES.has(role)) {
          set({ username: me.username, role, ready: true, authenticated: true });
          return;
        }
      }
    } catch {
      // unauthenticated
    }
    set({ username: null, role: null, ready: true, authenticated: false });
  },
  logout: async () => {
    const base = getMeditationApiBaseUrl();
    if (base) {
      try {
        await fetch(`${base}/admin/auth/logout`, {
          method: "POST",
          credentials: "include",
        });
      } catch {
        // 상태는 비웁니다.
      }
    }
    set({ username: null, role: null, ready: true, authenticated: false });
  },
}));
