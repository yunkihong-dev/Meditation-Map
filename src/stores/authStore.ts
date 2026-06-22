import { create } from "zustand";
import { getMeditationApiBaseUrl } from "@/services/meditation/repositories/apiConfig";
import { clearLegacyAuthArtifacts } from "@/stores/authCookie";

const STAFF_ROLES = new Set(["ADMIN", "DEV", "EMPLOYEE"]);

/** JWT는 HttpOnly 쿠키에만 존재하므로 프론트 상태에는 세션 존재 여부만 표시합니다. */
export const COOKIE_SESSION_MARKER = "__http_only_cookie_session__";

interface AuthState {
  accessToken: string | null;
  email: string | null;
  role: string | null;
  authReady: boolean;
  bootstrapAuth: () => Promise<void>;
  setSession: (accessToken?: string, email?: string, role?: string | null) => Promise<void>;
  logout: () => Promise<void>;
  isStaff: () => boolean;
  isAuthenticated: () => boolean;
  authHeader: () => undefined;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  accessToken: null,
  email: null,
  role: null,
  authReady: false,
  bootstrapAuth: async () => {
    clearLegacyAuthArtifacts();
    const base = getMeditationApiBaseUrl();
    if (!base) {
      set({ accessToken: null, email: null, role: null, authReady: true });
      return;
    }
    try {
      const res = await fetch(`${base}/me`, { credentials: "include" });
      if (res.ok) {
        const me = (await res.json()) as { username?: string; email?: string; role?: string };
        const account = me.email ?? me.username ?? "";
        const role = me.role ?? "MEMBER";
        set({
          accessToken: COOKIE_SESSION_MARKER,
          email: account || null,
          role,
          authReady: true,
        });
        return;
      }
    } catch {
      // guest 처리
    }
    set({ accessToken: null, email: null, role: null, authReady: true });
  },
  setSession: async () => {
    set({ accessToken: COOKIE_SESSION_MARKER, email: null, role: null, authReady: false });
    await get().bootstrapAuth();
  },
  logout: async () => {
    const base = getMeditationApiBaseUrl();
    if (base) {
      try {
        await fetch(`${base}/auth/logout`, { method: "POST", credentials: "include" });
      } catch {
        // 로컬 상태는 항상 비웁니다.
      }
    }
    clearLegacyAuthArtifacts();
    set({ accessToken: null, email: null, role: null, authReady: true });
  },
  isStaff: () => STAFF_ROLES.has(get().role ?? ""),
  isAuthenticated: () => !!get().accessToken,
  authHeader: () => undefined,
}));

export async function apiFetch(path: string, init: RequestInit = {}): Promise<Response> {
  const base = getMeditationApiBaseUrl();
  if (!base) throw new Error("VITE_API_BASE_URL 미설정");

  const headers = new Headers(init.headers);
  if (init.body && !headers.has("Content-Type") && !(init.body instanceof FormData)) {
    headers.set("Content-Type", "application/json");
  }
  const url = path.startsWith("/") ? `${base}${path}` : `${base}/${path}`;
  return fetch(url, { ...init, headers, credentials: "include" });
}
