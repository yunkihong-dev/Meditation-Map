/**
 * 전문가 프로필 편집(/profile/expert) 모바일 단계 — 카드 순서를 그대로 다섯 단계로 나눕니다(이력 카드 안의 관심사는 모바일에서만 따로).
 * 저장 조건(활동명·자기소개·활동 지역)은 페이지의 `valid` 와 같고, 여기서는 "어느 단계가 비었는지" 안내만 만듭니다.
 */
export const EXPERT_STEPS = ["기본 정보", "이력", "관심사", "활동 지역", "센터 정보"] as const;

/** 단계 번호(0부터) — 페이지와 테스트가 같은 값을 씁니다 */
export const EXPERT_STEP = { basic: 0, career: 1, interests: 2, regions: 3, center: 4 } as const;

export interface ExpertRequiredDraft {
  name: string;
  intro: string;
  regionIds: readonly string[];
}

/** 저장에 필요한데 비어 있는 단계(0부터) — 페이지의 valid 조건과 1:1 */
export function expertMissingSteps(d: ExpertRequiredDraft): number[] {
  const out: number[] = [];
  if (d.name.trim().length === 0 || d.intro.trim().length === 0) out.push(EXPERT_STEP.basic);
  if (d.regionIds.length === 0) out.push(EXPERT_STEP.regions);
  return out;
}
