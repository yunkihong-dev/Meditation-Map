import { requireMeditationApiBaseUrl } from "./apiConfig";

export interface ClassTypeDto {
  id: string;
  name: string;
  active: boolean;
}

/** 노출 중인 클래스 종류만 내려옵니다. 관리자가 내린 항목은 빠집니다. */
export async function fetchClassTypes(): Promise<ClassTypeDto[]> {
  const res = await fetch(`${requireMeditationApiBaseUrl()}/class-types`);
  if (!res.ok) throw new Error("GET /class-types 실패");
  return (await res.json()) as ClassTypeDto[];
}
