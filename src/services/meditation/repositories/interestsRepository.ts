import { requireMeditationApiBaseUrl } from "./apiConfig";

export interface InterestDto {
  id: string;
  name: string;
  description: string | null;
  imageUrl: string | null;
  sortOrder: number;
  active: boolean;
}

/** 노출 중인 관심사만 내려옵니다. 관리자가 내린 항목은 빠집니다. */
export async function fetchInterests(): Promise<InterestDto[]> {
  const res = await fetch(`${requireMeditationApiBaseUrl()}/interests`);
  if (!res.ok) throw new Error("GET /interests 실패");
  return (await res.json()) as InterestDto[];
}
