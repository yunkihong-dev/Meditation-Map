/**
 * 장소 소유 신청 계약 타입 — 01_contract.md 4·5절.
 * 증빙의 objectKey·공개 URL 은 회원 응답에 없습니다. 관리자 상세의 evidence.url 은 API 상대 경로입니다.
 */
import { arr, bool, num, rec, str, strOrNull } from "@/services/http/apiError";

export type PlaceClaimStatus = "PENDING" | "APPROVED" | "REJECTED";
export type AdminClaimStatusFilter = PlaceClaimStatus | "ALL";

export interface MyPlaceClaim {
  id: string;
  placeId: string;
  /** 장소가 삭제되면 null */
  placeName: string | null;
  status: PlaceClaimStatus | (string & {});
  contact: string;
  memo: string | null;
  businessRegistrationNumber: string | null;
  hasEvidence: boolean;
  evidenceFileName: string | null;
  rejectReason: string | null;
  createdAt: string;
  reviewedAt: string | null;
}

export interface PlaceClaimStatusView {
  placeId: string;
  hasOwner: boolean;
  isMine: boolean;
  myPendingClaimId: string | null;
  canClaim: boolean;
}

export interface MemberRef {
  memberId: string;
  email: string;
}

export interface AdminPlaceClaimSummary {
  id: string;
  placeId: string;
  placeName: string | null;
  applicant: MemberRef;
  status: PlaceClaimStatus | (string & {});
  hasEvidence: boolean;
  createdAt: string;
  reviewedAt: string | null;
}

export interface ClaimEvidence {
  fileName: string;
  contentType: string;
  sizeBytes: number;
  /** API 상대 경로(`/admin/place-claims/57/evidence`). VITE_API_BASE_URL 을 앞에 붙여 엽니다. */
  url: string;
}

export interface AdminPlaceClaimDetail {
  id: string;
  placeId: string;
  placeName: string | null;
  applicant: MemberRef;
  status: PlaceClaimStatus | (string & {});
  contact: string;
  memo: string | null;
  businessRegistrationNumber: string | null;
  evidence: ClaimEvidence | null;
  rejectReason: string | null;
  reviewedBy: { memberId: string; loginId: string } | null;
  reviewedAt: string | null;
  placeCurrentOwner: { memberId: string; email: string; approvedAt: string | null } | null;
  otherPendingCount: number;
  createdAt: string;
}

export interface PlaceClaimInput {
  placeId: string;
  contact: string;
  memo?: string;
  businessRegistrationNumber?: string;
  evidence?: File | null;
}

export const CLAIM_EVIDENCE_MAX_BYTES = 10 * 1024 * 1024;
export const CLAIM_EVIDENCE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/heic",
  "application/pdf",
] as const;

/** 업로드 전에 FE 에서 먼저 걸러 냅니다(BE 400 CLAIM_EVIDENCE_TYPE_NOT_ALLOWED · 413 UPLOAD_TOO_LARGE 와 같은 규칙). */
export function validateEvidenceFile(file: { type: string; size: number; name: string }): string | null {
  const type = file.type || (/\.heic$/i.test(file.name) ? "image/heic" : "");
  if (!(CLAIM_EVIDENCE_TYPES as readonly string[]).includes(type)) {
    return "증빙 파일은 이미지(JPG·PNG·WEBP·HEIC) 또는 PDF만 올릴 수 있어요.";
  }
  if (file.size > CLAIM_EVIDENCE_MAX_BYTES) return "증빙 파일은 10MB 이하만 올릴 수 있어요.";
  return null;
}

/** 사업자등록번호: 숫자와 `-`만, 최대 20자(선택). */
export function isValidBizNumber(v: string): boolean {
  const t = v.trim();
  return t === "" || (/^[0-9-]+$/.test(t) && t.length <= 20);
}

function memberRef(v: unknown): MemberRef {
  const o = rec(v);
  return { memberId: str(o.memberId), email: str(o.email) };
}

export function parseMyPlaceClaim(raw: unknown): MyPlaceClaim {
  const o = rec(raw);
  return {
    id: str(o.id),
    placeId: str(o.placeId),
    placeName: strOrNull(o.placeName),
    status: str(o.status, "PENDING"),
    contact: str(o.contact),
    memo: strOrNull(o.memo),
    businessRegistrationNumber: strOrNull(o.businessRegistrationNumber),
    hasEvidence: bool(o.hasEvidence),
    evidenceFileName: strOrNull(o.evidenceFileName),
    rejectReason: strOrNull(o.rejectReason),
    createdAt: str(o.createdAt),
    reviewedAt: strOrNull(o.reviewedAt),
  };
}

export function parseMyPlaceClaims(raw: unknown): MyPlaceClaim[] {
  return arr(rec(raw).items).map(parseMyPlaceClaim);
}

export function parseClaimStatus(raw: unknown): PlaceClaimStatusView {
  const o = rec(raw);
  const hasOwner = bool(o.hasOwner);
  const myPendingClaimId = strOrNull(o.myPendingClaimId);
  return {
    placeId: str(o.placeId),
    hasOwner,
    isMine: bool(o.isMine),
    myPendingClaimId,
    canClaim: typeof o.canClaim === "boolean" ? o.canClaim : !hasOwner && myPendingClaimId == null,
  };
}

export function parseAdminClaimSummary(raw: unknown): AdminPlaceClaimSummary {
  const o = rec(raw);
  return {
    id: str(o.id),
    placeId: str(o.placeId),
    placeName: strOrNull(o.placeName),
    applicant: memberRef(o.applicant),
    status: str(o.status, "PENDING"),
    hasEvidence: bool(o.hasEvidence),
    createdAt: str(o.createdAt),
    reviewedAt: strOrNull(o.reviewedAt),
  };
}

export function parseAdminClaimDetail(raw: unknown): AdminPlaceClaimDetail {
  const o = rec(raw);
  const ev = o.evidence == null ? null : rec(o.evidence);
  const rb = o.reviewedBy == null ? null : rec(o.reviewedBy);
  const owner = o.placeCurrentOwner == null ? null : rec(o.placeCurrentOwner);
  return {
    id: str(o.id),
    placeId: str(o.placeId),
    placeName: strOrNull(o.placeName),
    applicant: memberRef(o.applicant),
    status: str(o.status, "PENDING"),
    contact: str(o.contact),
    memo: strOrNull(o.memo),
    businessRegistrationNumber: strOrNull(o.businessRegistrationNumber),
    evidence:
      ev && str(ev.url)
        ? {
            fileName: str(ev.fileName, "증빙 파일"),
            contentType: str(ev.contentType),
            sizeBytes: num(ev.sizeBytes),
            url: str(ev.url),
          }
        : null,
    rejectReason: strOrNull(o.rejectReason),
    reviewedBy: rb ? { memberId: str(rb.memberId), loginId: str(rb.loginId) } : null,
    reviewedAt: strOrNull(o.reviewedAt),
    placeCurrentOwner: owner
      ? { memberId: str(owner.memberId), email: str(owner.email), approvedAt: strOrNull(owner.approvedAt) }
      : null,
    otherPendingCount: num(o.otherPendingCount),
    createdAt: str(o.createdAt),
  };
}

/** 신청 API 오류 코드 → 사람이 읽을 문구 (계약 4.1 오류 표) */
export function claimErrorMessage(code: string | null, fallback: string): string {
  switch (code) {
    case "PLACE_ALREADY_OWNED":
      return "이미 승인된 오너가 있는 장소예요.";
    case "PLACE_CLAIM_ALREADY_PENDING":
      return "이 장소에 대한 신청이 이미 검토 중이에요.";
    case "PLACE_CLAIM_ALREADY_REVIEWED":
      return "이미 처리된 신청이에요.";
    case "CLAIM_EVIDENCE_TYPE_NOT_ALLOWED":
      return "증빙 파일은 이미지(JPG·PNG·WEBP·HEIC) 또는 PDF만 올릴 수 있어요.";
    case "UPLOAD_TOO_LARGE":
      return "증빙 파일은 10MB 이하만 올릴 수 있어요.";
    case "FILE_STORAGE_DISABLED":
      return "지금은 파일을 올릴 수 없어요. 증빙 없이 신청하거나 잠시 후 다시 시도해 주세요.";
    case "RESOURCE_NOT_FOUND":
      return "장소를 찾을 수 없어요.";
    case "UNAUTHORIZED":
      return "로그인이 필요해요.";
    default:
      return fallback;
  }
}

/**
 * 센터 등록 화면(/center/register) 검색 결과의 소유권 요청 버튼 상태 — 소유 신청의 유일한 진입점.
 * status 응답(계약 4.3)이 없으면(비로그인·조회 실패) 요청을 열어 두고, 제출 단계에서 로그인·서버 판정에 맡깁니다.
 */
export type ClaimAvailability = "claim" | "pending" | "mine" | "owned";

export function claimAvailability(view: PlaceClaimStatusView | null): ClaimAvailability {
  if (!view) return "claim";
  if (view.isMine) return "mine";
  if (view.myPendingClaimId) return "pending";
  if (view.hasOwner) return "owned";
  return view.canClaim ? "claim" : "owned";
}

export function claimStatusLabel(status: string): string {
  if (status === "PENDING") return "검토 중";
  if (status === "APPROVED") return "승인됨";
  if (status === "REJECTED") return "반려됨";
  return status;
}
