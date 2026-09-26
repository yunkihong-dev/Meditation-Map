import { describe, expect, it } from "vitest";
import {
  MAX_HASHTAGS,
  displayHashtags,
  mergeHashtags,
  normalizeHashtag,
  splitHashtags,
} from "./hashtags";

describe("hashtags", () => {
  it("앞의 #과 공백을 걷어 낸다", () => {
    expect(normalizeHashtag("##숲 명상 ")).toBe("숲명상");
    expect(normalizeHashtag("#")).toBe("");
  });

  it("쉼표·공백으로 붙여 넣은 여러 태그를 나눈다", () => {
    expect(splitHashtags("#숲명상, 호흡 #템플스테이")).toEqual(["숲명상", "호흡", "템플스테이"]);
  });

  it("중복을 버리고 최대 개수에서 자른다", () => {
    expect(mergeHashtags(["숲명상"], ["#숲명상", "호흡"])).toEqual(["숲명상", "호흡"]);
    const many = Array.from({ length: 20 }, (_, i) => `t${i}`);
    expect(mergeHashtags([], many)).toHaveLength(MAX_HASHTAGS);
  });

  it("화면용은 #을 한 번만 붙이고 개수를 제한한다", () => {
    expect(displayHashtags(["#숲명상", "호흡", "요가"], 2)).toEqual(["#숲명상", "#호흡"]);
    expect(displayHashtags(undefined, 2)).toEqual([]);
  });
});
