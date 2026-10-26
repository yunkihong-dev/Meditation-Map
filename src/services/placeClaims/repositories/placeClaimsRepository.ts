/** 장소 소유 신청 API (계약 4·5절). 회원은 /me/**, 관리자는 /admin/** — 쿠키 인증(apiFetch). */
import { apiFetch } from "@/stores/authStore";
import { readJson } from "@/services/http/apiError";
import { getMeditationApiBaseUrl } from "@/services/meditation/repositories/apiConfig";
import type { CursorPage } from "@/services/notifications/types";
import { strOrNull, rec, arr } from "@/services/http/apiError";
import {
  parseAdminClaimDetail,
  parseAdminClaimSummary,
  parseClaimStatus,
  parseMyPlaceClaim,
  parseMyPlaceClaims,
  type AdminClaimStatusFilter,
  type AdminPlaceClaimDetail,
  type AdminPlaceClaimSummary,
  type MyPlaceClaim,
  type PlaceClaimInput,
  type PlaceClaimStatusView,
} from "@/services/placeClaims/types";

/**
 * HEIC/HEIF 는 브라우저(Chrome·Windows 등)가 `type` 을 빈 문자열로 주는 일이 많습니다.
 * 그대로 붙이면 part content type 이 application/octet-stream 이 되어 BE 가 400 으로 거부합니다(QA Q3).
 * 확장자로 판별해 같은 내용·이름의 File 로 다시 감쌉니다.
 */
export function withEvidenceType(file: File): File {
  if (file.type) return file;
  if (/\.heic$/i.test(file.name)) return new File([file], file.name, { type: "image/heic" });
  if (/\.heif$/i.test(file.name)) return new File([file], file.name, { type: "image/heif" });
  return file;
}

/** POST /me/place-claims — multipart. 빈 선택 필드는 보내지 않습니다. */
export function buildClaimFormData(input: PlaceClaimInput): FormData {
  const fd = new FormData();
  fd.append("placeId", input.placeId);
  fd.append("contact", input.contact.trim());
  const memo = input.memo?.trim();
  if (memo) fd.append("memo", memo);
  const biz = input.businessRegistrationNumber?.trim();
  if (biz) fd.append("businessRegistrationNumber", biz);
  if (input.evidence) {
    const f = withEvidenceType(input.evidence);
    fd.append("evidence", f, f.name);
  }
  return fd;
}

export async function submitPlaceClaim(input: PlaceClaimInput): Promise<MyPlaceClaim> {
  const res = await apiFetch("/me/place-claims", { method: "POST", body: buildClaimFormData(input) });
  return parseMyPlaceClaim(await readJson(res));
}

export async function fetchMyPlaceClaims(): Promise<MyPlaceClaim[]> {
  return parseMyPlaceClaims(await readJson(await apiFetch("/me/place-claims")));
}

/** C8 — 본인 신청 1건. 남의 것·없는 것은 404 RESOURCE_NOT_FOUND */
export async function fetchMyPlaceClaim(claimId: string): Promise<MyPlaceClaim> {
  return parseMyPlaceClaim(await readJson(await apiFetch(`/me/place-claims/${encodeURIComponent(claimId)}`)));
}

export async function fetchPlaceClaimStatus(placeId: string): Promise<PlaceClaimStatusView> {
  const q = new URLSearchParams({ placeId });
  return parseClaimStatus(await readJson(await apiFetch(`/me/place-claims/status?${q.toString()}`)));
}

// ── 관리자 ────────────────────────────────────────────────

export async function fetchAdminPlaceClaims(
  status: AdminClaimStatusFilter,
  cursor?: string | null,
  size = 20
): Promise<CursorPage<AdminPlaceClaimSummary>> {
  const q = new URLSearchParams({ status, size: String(size) });
  if (cursor) q.set("cursor", cursor);
  const o = rec(await readJson(await apiFetch(`/admin/place-claims?${q.toString()}`)));
  return { items: arr(o.items).map(parseAdminClaimSummary), nextCursor: strOrNull(o.nextCursor) };
}

export async function fetchAdminPlaceClaim(id: string): Promise<AdminPlaceClaimDetail> {
  return parseAdminClaimDetail(
    await readJson(await apiFetch(`/admin/place-claims/${encodeURIComponent(id)}`))
  );
}

export async function approvePlaceClaim(id: string): Promise<AdminPlaceClaimDetail> {
  const res = await apiFetch(`/admin/place-claims/${encodeURIComponent(id)}/approve`, { method: "POST" });
  return parseAdminClaimDetail(await readJson(res));
}

export async function rejectPlaceClaim(id: string, reason: string): Promise<AdminPlaceClaimDetail> {
  const res = await apiFetch(`/admin/place-claims/${encodeURIComponent(id)}/reject`, {
    method: "POST",
    body: JSON.stringify({ reason: reason.trim() }),
  });
  return parseAdminClaimDetail(await readJson(res));
}

/**
 * 증빙 파일 URL. 계약상 evidence.url 은 API 상대 경로이므로 베이스 URL 을 붙입니다.
 * 같은 사이트 쿠키(관리자)가 함께 가서 <img>·새 탭으로 열 수 있습니다.
 * 혹시 절대 URL 이 오면 쓰지 않습니다(공개 스토리지 URL 노출 방지).
 */
export function evidenceHref(relativeUrl: string): string | null {
  const base = getMeditationApiBaseUrl();
  if (!base || !relativeUrl.startsWith("/") || relativeUrl.startsWith("//")) return null;
  return `${base}${relativeUrl}`;
}
