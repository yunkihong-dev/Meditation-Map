import { describe, expect, it } from "vitest";
import { buildClaimFormData } from "@/services/placeClaims/repositories/placeClaimsRepository";
import {
  claimAvailability,
  isValidBizNumber,
  parseAdminClaimDetail,
  parseClaimStatus,
  parseMyPlaceClaim,
  validateEvidenceFile,
} from "@/services/placeClaims/types";
import { isQuietHoursKst, parseEmailList, previewAdTitle } from "@/services/notifications/broadcastForm";

/** 소유 신청(계약 4·5절)과 광고 발송 폼(3.1)의 순수 로직. */

describe("buildClaimFormData", () => {
  it("필수 파트만 있으면 선택 파트는 보내지 않는다", () => {
    const fd = buildClaimFormData({ placeId: "12", contact: " 010-1 ", memo: "  ", businessRegistrationNumber: "" });
    expect([...fd.keys()]).toEqual(["placeId", "contact"]);
    expect(fd.get("contact")).toBe("010-1");
  });

  it("메모·사업자번호·증빙 파트 이름이 계약과 같다", () => {
    const file = new File(["x"], "사업자등록증.pdf", { type: "application/pdf" });
    const fd = buildClaimFormData({ placeId: "12", contact: "a@b.c", memo: "대표", businessRegistrationNumber: "123-45", evidence: file });
    expect([...fd.keys()]).toEqual(["placeId", "contact", "memo", "businessRegistrationNumber", "evidence"]);
    expect((fd.get("evidence") as File).name).toBe("사업자등록증.pdf");
  });
});

describe("validateEvidenceFile / isValidBizNumber", () => {
  it("허용 형식·10MB", () => {
    expect(validateEvidenceFile({ type: "image/png", size: 10, name: "a.png" })).toBeNull();
    expect(validateEvidenceFile({ type: "", size: 10, name: "IMG.HEIC" })).toBeNull();
    expect(validateEvidenceFile({ type: "image/gif", size: 10, name: "a.gif" })).not.toBeNull();
    expect(validateEvidenceFile({ type: "application/pdf", size: 10 * 1024 * 1024 + 1, name: "a.pdf" })).not.toBeNull();
  });

  it("사업자번호는 숫자와 - 만, 20자 이하, 비어도 된다", () => {
    expect(isValidBizNumber("")).toBe(true);
    expect(isValidBizNumber("123-45-67890")).toBe(true);
    expect(isValidBizNumber("12a")).toBe(false);
    expect(isValidBizNumber("1".repeat(21))).toBe(false);
  });
});

describe("파서", () => {
  it("MyPlaceClaim — 계약 4.1 예시", () => {
    const c = parseMyPlaceClaim({
      id: "57", placeId: "12", placeName: "고요명상센터", status: "PENDING", contact: "010-1234-5678",
      memo: "센터 대표입니다.", businessRegistrationNumber: "123-45-67890", hasEvidence: true,
      evidenceFileName: "사업자등록증.pdf", rejectReason: null, createdAt: "2026-10-07T03:00:00.000Z", reviewedAt: null,
    });
    expect(c).toMatchObject({ id: "57", hasEvidence: true, placeName: "고요명상센터", rejectReason: null });
  });

  it("status — canClaim 이 없으면 계약 정의로 계산", () => {
    expect(parseClaimStatus({ placeId: "12", hasOwner: false, isMine: false, myPendingClaimId: null }).canClaim).toBe(true);
    expect(parseClaimStatus({ placeId: "12", hasOwner: false, isMine: false, myPendingClaimId: "57" }).canClaim).toBe(false);
  });

  it("관리자 상세 — evidence null 과 상대 경로", () => {
    const base = { id: "57", placeId: "12", applicant: { memberId: "u", email: "o@e.x" }, status: "PENDING", contact: "c", otherPendingCount: 1, createdAt: "t" };
    expect(parseAdminClaimDetail({ ...base, evidence: null }).evidence).toBeNull();
    const d = parseAdminClaimDetail({
      ...base,
      evidence: { fileName: "a.pdf", contentType: "application/pdf", sizeBytes: 183422, url: "/admin/place-claims/57/evidence" },
      placeCurrentOwner: null,
      reviewedBy: { memberId: "m", loginId: "admin" },
    });
    expect(d.evidence?.url).toBe("/admin/place-claims/57/evidence");
    expect(d.reviewedBy?.loginId).toBe("admin");
    expect(d.otherPendingCount).toBe(1);
  });
});

describe("claimAvailability (센터 등록 화면 검색 결과 — 소유 신청 유일한 진입점)", () => {
  const v = (o: Partial<{ hasOwner: boolean; isMine: boolean; myPendingClaimId: string | null; canClaim: boolean }>) => ({
    placeId: "12", hasOwner: false, isMine: false, myPendingClaimId: null, canClaim: true, ...o,
  });
  it("상태별", () => {
    expect(claimAvailability(null)).toBe("claim");
    expect(claimAvailability(v({}))).toBe("claim");
    expect(claimAvailability(v({ myPendingClaimId: "57", canClaim: false }))).toBe("pending");
    expect(claimAvailability(v({ hasOwner: true, isMine: true, canClaim: false }))).toBe("mine");
    expect(claimAvailability(v({ hasOwner: true, canClaim: false }))).toBe("owned");
  });
});

describe("광고 발송 폼", () => {
  it("이메일 목록: 구분자 혼용·중복·형식 오류", () => {
    expect(parseEmailList("a@x.com, b@x.com\nA@x.com;bad")).toEqual({ emails: ["a@x.com", "b@x.com"], invalid: ["bad"] });
  });

  it("(광고) 접두는 한 번만", () => {
    expect(previewAdTitle("가을 명상")).toBe("(광고) 가을 명상");
    expect(previewAdTitle("(광고) 가을")).toBe("(광고) 가을");
  });

  it("KST 21~08시 차단", () => {
    expect(isQuietHoursKst(new Date("2026-10-07T12:00:00Z"))).toBe(true); // 21:00 KST
    expect(isQuietHoursKst(new Date("2026-10-06T22:59:00Z"))).toBe(true); // 07:59 KST
    expect(isQuietHoursKst(new Date("2026-10-06T23:00:00Z"))).toBe(false); // 08:00 KST
    expect(isQuietHoursKst(new Date("2026-10-07T11:59:00Z"))).toBe(false); // 20:59 KST
  });
});
