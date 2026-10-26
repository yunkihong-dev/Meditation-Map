/** 알림 시각 표시: 방금 전 / n분 전 / n시간 전 / n일 전 / YYYY.MM.DD (KST 기준 날짜) */
export function formatRelativeTime(iso: string, now: Date = new Date()): string {
  const t = Date.parse(iso);
  if (Number.isNaN(t)) return "";
  const diffSec = Math.floor((now.getTime() - t) / 1000);
  if (diffSec < 60) return "방금 전";
  const min = Math.floor(diffSec / 60);
  if (min < 60) return `${min}분 전`;
  const hour = Math.floor(min / 60);
  if (hour < 24) return `${hour}시간 전`;
  const day = Math.floor(hour / 24);
  if (day < 7) return `${day}일 전`;
  return formatDate(iso);
}

/** YYYY.MM.DD (Asia/Seoul) */
export function formatDate(iso: string): string {
  const t = Date.parse(iso);
  if (Number.isNaN(t)) return "";
  const kst = new Date(t + 9 * 3600 * 1000);
  const y = kst.getUTCFullYear();
  const m = String(kst.getUTCMonth() + 1).padStart(2, "0");
  const d = String(kst.getUTCDate()).padStart(2, "0");
  return `${y}.${m}.${d}`;
}

/** YYYY.MM.DD HH:mm (Asia/Seoul) */
export function formatDateTime(iso: string | null): string {
  if (!iso) return "";
  const t = Date.parse(iso);
  if (Number.isNaN(t)) return "";
  const kst = new Date(t + 9 * 3600 * 1000);
  const hh = String(kst.getUTCHours()).padStart(2, "0");
  const mm = String(kst.getUTCMinutes()).padStart(2, "0");
  return `${formatDate(iso)} ${hh}:${mm}`;
}

/** 배지 숫자: 0이면 표시 안 함, 99 초과는 99+ */
export function badgeText(count: number): string | null {
  if (!Number.isFinite(count) || count <= 0) return null;
  return count > 99 ? "99+" : String(Math.floor(count));
}

/** 알림 type → 아이콘 이름(Material Symbols). 모르는 type 은 일반 알림. */
export function notificationIcon(type: string): string {
  switch (type) {
    case "AD":
      return "campaign";
    case "PLACE_CLAIM_SUBMITTED":
      return "assignment_ind";
    case "PLACE_CLAIM_APPROVED":
      return "verified";
    case "PLACE_CLAIM_REJECTED":
      return "block";
    case "CENTER_CHAT_MESSAGE":
      return "chat";
    case "CENTER_CHAT_REPORTED":
      return "flag";
    case "CENTER_CHAT_REPORT_RESOLVED":
      return "task_alt";
    default:
      return "notifications";
  }
}

/**
 * 알림을 눌렀을 때 갈 "상세" 경로.
 * linkUrl 이 있으면 그 화면이 상세이고, 없으면(광고 등) 알림 자체 상세 화면으로 갑니다.
 * (`/notifications/:id`·`/admin/notifications/:id` 는 계약 9절 밖 FE 전용 경로 — 라운드 4)
 */
export function notificationTarget(n: { id: string; linkUrl: string | null }, scope: "me" | "admin"): string {
  if (n.linkUrl) return n.linkUrl;
  const id = encodeURIComponent(n.id);
  return scope === "admin" ? `/admin/notifications/${id}` : `/notifications/${id}`;
}
