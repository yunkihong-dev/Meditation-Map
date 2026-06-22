const LEGACY_KEYS = [
  "meditation-access-token",
  "meditation-user-email",
  "meditation-user-role",
];

/** 과거 버전에서 JS로 저장하던 인증정보를 제거합니다. 현재 인증은 HttpOnly JWT 쿠키만 사용합니다. */
export function clearLegacyAuthArtifacts(): void {
  if (typeof window === "undefined") return;
  for (const key of LEGACY_KEYS) {
    localStorage.removeItem(key);
    document.cookie = `${key}=; path=/; max-age=0; SameSite=Lax`;
  }
}
