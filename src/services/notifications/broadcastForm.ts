/** 관리자 광고 발송 폼의 순수 로직 (계약 3.1). */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** 쉼표·공백·줄바꿈으로 구분된 이메일 목록 → 중복 제거한 유효 목록 + 형식 오류 목록 */
export function parseEmailList(text: string): { emails: string[]; invalid: string[] } {
  const seen = new Set<string>();
  const emails: string[] = [];
  const invalid: string[] = [];
  for (const raw of text.split(/[\s,;]+/)) {
    const t = raw.trim();
    if (!t) continue;
    const key = t.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    if (EMAIL_RE.test(t)) emails.push(t);
    else invalid.push(t);
  }
  return { emails, invalid };
}

export const BROADCAST_MAX_EMAILS = 200;

/** 서버가 붙이는 "(광고) " 접두를 미리보기에 반영합니다(이미 붙어 있으면 그대로). */
export function previewAdTitle(title: string): string {
  const t = title.trim();
  if (!t) return "";
  return t.startsWith("(광고)") ? t : `(광고) ${t}`;
}

/** KST 21:00~08:00 은 광고 발송 차단 시간(서버 400 BROADCAST_QUIET_HOURS). */
export function isQuietHoursKst(now: Date = new Date()): boolean {
  const kstHour = (now.getUTCHours() + 9) % 24;
  return kstHour >= 21 || kstHour < 8;
}

/** 폼을 열 때 한 번 만들고, 성공한 뒤에만 새로 만듭니다(더블클릭·재시도 409 방지). */
export function newRequestId(): string {
  const c = typeof crypto !== "undefined" ? crypto : undefined;
  if (c && typeof c.randomUUID === "function") return c.randomUUID();
  const bytes = new Uint8Array(16);
  if (c && typeof c.getRandomValues === "function") c.getRandomValues(bytes);
  else for (let i = 0; i < 16; i++) bytes[i] = Math.floor(Math.random() * 256);
  bytes[6] = (bytes[6] & 0x0f) | 0x40;
  bytes[8] = (bytes[8] & 0x3f) | 0x80;
  const h = Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("");
  return `${h.slice(0, 8)}-${h.slice(8, 12)}-${h.slice(12, 16)}-${h.slice(16, 20)}-${h.slice(20)}`;
}

export function broadcastErrorMessage(code: string | null, fallback: string): string {
  switch (code) {
    case "BROADCAST_NO_RECIPIENTS":
      return "발송 대상 회원이 없어요. 광고 수신에 동의한 회원에게만 보낼 수 있어요.";
    case "BROADCAST_DUPLICATE":
      return "이미 처리된 발송 요청이에요. 발송 이력을 확인해 주세요.";
    case "BROADCAST_QUIET_HOURS":
      return "야간(21시~8시)에는 광고 알림을 보낼 수 없어요.";
    case "INVALID_LINK_URL":
      return "링크는 서비스 내부 경로(/로 시작)만 쓸 수 있어요.";
    case "FORBIDDEN":
      return "광고 발송은 ADMIN 권한만 할 수 있어요.";
    case "VALIDATION_FAILED":
      return "입력값을 확인해 주세요.";
    default:
      return fallback;
  }
}
