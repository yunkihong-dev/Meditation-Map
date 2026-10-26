import { describe, expect, it } from "vitest";
import type { MeditationPlace } from "@/services/meditation/types";
import { OWNER_EDITABLE_FIELDS, buildOwnerPatch, parseOwnerPlace, validateOwnerDraft } from "@/services/ownerPlaces/types";

/**
 * 오너 PATCH 본문(계약 8.3). 금지 키가 하나라도 섞이면 BE 가 전체를 400 으로 거부하므로
 * FE 는 editableFields 안의 "바뀐 키"만 보내야 한다.
 */

const raw = {
  placeId: "12",
  regionId: "seoul",
  data: {
    id: "12",
    regionId: "seoul",
    name: "고요명상센터",
    address: "서울 어딘가",
    lat: 37.5,
    lng: 127,
    hidden: false,
    themes: ["힐링"],
    hasTempleStay: false,
    shortDescription: "a",
    description: "b",
    thumbnailUrl: "https://m/t.jpg",
    photos: ["https://m/1.jpg"],
    hashtags: ["숲"],
    duration: "1시간",
    organization: { name: "기관" },
    externalLink: "",
    detailSections: [],
    programs: [{ id: "1", title: "아침", status: "ongoing", imageUrl: "", bodyFromVenue: "", reviews: [{ author: "a", body: "좋아요" }], hidden: true }],
    viewCount: 99,
  },
  editableFields: [...OWNER_EDITABLE_FIELDS, "hidden", "regionId"],
};

describe("parseOwnerPlace", () => {
  it("계약 밖 editableFields(hidden·regionId)는 버린다", () => {
    const v = parseOwnerPlace(raw);
    expect(v.editableFields).not.toContain("hidden");
    expect(v.editableFields).not.toContain("regionId");
    expect(v.editableFields).toHaveLength(OWNER_EDITABLE_FIELDS.length);
  });

  it("빠진 배열·문자열은 기본값으로 채운다", () => {
    const v = parseOwnerPlace({ placeId: "3", regionId: "r", data: { name: "x" }, editableFields: ["name"] });
    expect(v.data.photos).toEqual([]);
    expect(v.data.detailSections).toEqual([]);
    expect(v.data.organization).toEqual({ name: "" });
    expect(v.data.id).toBe("3");
  });
});

describe("buildOwnerPatch", () => {
  const view = parseOwnerPlace(raw);

  it("바뀌지 않았으면 빈 객체", () => {
    expect(buildOwnerPatch(view.data, { ...view.data }, view.editableFields)).toEqual({});
  });

  it("바뀐 허용 필드만 담고, 금지 필드(hidden·regionId·themes)는 바뀌어도 담지 않는다", () => {
    const edited: MeditationPlace = {
      ...view.data,
      name: "새 이름",
      photos: ["https://m/2.jpg", "https://m/1.jpg"],
      hidden: true,
      regionId: "KR-26",
      themes: ["x"],
    };
    const patch = buildOwnerPatch(view.data, edited, view.editableFields);
    expect(Object.keys(patch).sort()).toEqual(["name", "photos"]);
    expect(patch).not.toHaveProperty("regionId");
  });

  it("C4: 주소·좌표 중 하나만 바뀌어도 address·lat·lng 셋을 함께 담는다", () => {
    const onlyLat = buildOwnerPatch(view.data, { ...view.data, lat: 35.1 }, view.editableFields);
    expect(onlyLat).toEqual({ address: "서울 어딘가", lat: 35.1, lng: 127 });
    const moved = buildOwnerPatch(
      view.data,
      { ...view.data, address: "부산광역시 해운대구 우동 1", lat: 35.16, lng: 129.16, regionId: "KR-26" },
      view.editableFields
    );
    expect(moved).toEqual({ address: "부산광역시 해운대구 우동 1", lat: 35.16, lng: 129.16 });
  });

  it("C4: addressDetail 은 묶음과 별개 키", () => {
    expect(buildOwnerPatch(view.data, { ...view.data, addressDetail: "4층" }, view.editableFields)).toEqual({
      addressDetail: "4층",
    });
  });

  it("C5: 사업자번호는 data 밖 값으로 비교, 빈 문자열은 지우기", () => {
    const f = view.editableFields;
    expect(buildOwnerPatch(view.data, view.data, f, { before: null, after: "123-45-67890" })).toEqual({
      businessRegistrationNumber: "123-45-67890",
    });
    expect(buildOwnerPatch(view.data, view.data, f, { before: "1", after: "" })).toEqual({ businessRegistrationNumber: "" });
    expect(buildOwnerPatch(view.data, view.data, f, { before: null, after: "" })).toEqual({});
    expect(buildOwnerPatch(view.data, view.data, ["name"], { before: null, after: "9" })).toEqual({});
  });

  it("서버가 editableFields 를 좁히면 그 밖의 키는 바뀌어도 보내지 않는다", () => {
    const patch = buildOwnerPatch(view.data, { ...view.data, name: "x", duration: "2시간" }, ["duration"]);
    expect(patch).toEqual({ duration: "2시간" });
  });

  it("프로그램은 배열 통째로 보낸다(reviews·hidden 은 받은 그대로 — 서버가 id 기준 보존)", () => {
    const programs = [{ ...view.data.programs![0], title: "저녁" }];
    const patch = buildOwnerPatch(view.data, { ...view.data, programs }, view.editableFields);
    expect(patch.programs?.[0]).toMatchObject({ id: "1", title: "저녁", reviews: [{ author: "a", body: "좋아요" }] });
  });
});

describe("validateOwnerDraft", () => {
  const view = parseOwnerPlace(raw);
  it("이름 비움·잘못된 URL·중복 프로그램 id 를 잡는다", () => {
    const bad = validateOwnerDraft(
      {
        ...view.data,
        name: " ",
        externalLink: "javascript:alert(1)",
        programs: [view.data.programs![0], view.data.programs![0]],
      },
      view.editableFields
    );
    expect(bad).toEqual(expect.arrayContaining(["name", "externalLink", "programs"]));
  });

  it("정상 값은 통과", () => {
    expect(validateOwnerDraft(view.data, view.editableFields)).toEqual([]);
  });
});
