import type { RouteObject } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { routes } from "@/router/routes";

/**
 * 라운드 3 사용자 정정: 소유 신청은 "모든 유저가 보는 장소 상세"가 아니라
 * 프로필 → /center/register(센터 등록: 검색 → 소유권 요청) 한 곳에서만 들어간다.
 * 보장하는 것: 라우트 표에 claim 경로가 없고, /center/register 는 있다.
 * 보장하지 않는 것: 화면 안 버튼 노출(장소 상세 쪽은 컴포넌트를 삭제해 정적으로 사라짐).
 */

function flatten(rs: RouteObject[], parent = ""): string[] {
  return rs.flatMap((r) => {
    const here = r.path ? (r.path.startsWith("/") ? r.path : `${parent.replace(/\/$/, "")}/${r.path}`) : parent;
    return [here, ...(r.children ? flatten(r.children, here) : [])];
  });
}

describe("소유 신청 진입점", () => {
  const paths = flatten(routes);

  it("claim 전용 라우트가 없다(장소 상세에서 들어가는 길 없음)", () => {
    // "/…/claim" 형태의 신청 폼 경로가 없어야 한다(신청 내역 /profile/place-claims/:claimId 는 조회 화면이라 제외)
    expect(paths.filter((p) => /\/claim(\/|$)/.test(p) && !p.startsWith("/admin"))).toEqual([]);
    expect(paths).not.toContain("/meditation/place/:placeId/claim");
  });

  it("진입점 /center/register 와 내 신청 내역은 있다", () => {
    expect(paths).toContain("/center/register");
    expect(paths).toContain("/profile/place-claims");
  });
});
