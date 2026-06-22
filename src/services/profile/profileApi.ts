import { apiFetch } from "@/stores/authStore";

export type MeProfile = {
  username: string;
  email: string;
  role: string;
  profileImageUrl: string | null;
  createdAt: string | null;
  displayName: string | null;
  regionIds: string[];
  interests: string[];
  expertProfileId: string | null;
};

export type ExpertProfileDraft = {
  name: string;
  intro: string;
  degrees: string[];
  certificates: string[];
  careers: string[];
  classTypes: string[];
  regionIds: string[];
  hasCenter: boolean;
  centerName: string;
  centerAddress: string;
  businessRegistrationNumber: string;
  businessOpeningDate: string;
};

async function parseResponse<T>(res: Response): Promise<T> {
  if (!res.ok) {
    let message = "요청을 처리하지 못했어요.";
    try {
      const error = (await res.json()) as { message?: string };
      if (error.message?.trim()) message = error.message;
    } catch {
      // 기본 메시지 사용
    }
    throw new Error(message);
  }
  return (await res.json()) as T;
}

export async function updateMyProfile(input: {
  displayName: string;
  regionIds: string[];
  interests: string[];
}) {
  return parseResponse<MeProfile>(
    await apiFetch("/me/profile", {
      method: "PUT",
      body: JSON.stringify(input),
    })
  );
}

export async function fetchMyProfile() {
  return parseResponse<MeProfile>(await apiFetch("/me"));
}

export async function fetchMyExpertProfile(): Promise<Partial<ExpertProfileDraft> | null> {
  const res = await apiFetch("/me/expert-profile");
  if (res.status === 204) return null;
  if (!res.ok) throw new Error("전문가 정보를 불러오지 못했어요.");
  const data = (await res.json()) as Record<string, unknown> | null;
  if (!data) return null;
  return {
    name: String(data.name ?? ""),
    intro: String(data.intro ?? ""),
    degrees: Array.isArray(data.degrees) ? data.degrees.map(String) : [],
    certificates: Array.isArray(data.certificates) ? data.certificates.map(String) : [],
    careers: Array.isArray(data.careers) ? data.careers.map(String) : [],
    classTypes: Array.isArray(data.classTypes) ? data.classTypes.map(String) : [],
    regionIds: Array.isArray(data.regionIds) ? data.regionIds.map(String) : [],
    hasCenter: Boolean(data.hasCenter),
    centerName: String(data.centerSummary ?? ""),
    centerAddress: String(data.centerAddress ?? ""),
  };
}

export async function updateMyExpertProfile(input: ExpertProfileDraft) {
  return parseResponse<MeProfile>(
    await apiFetch("/me/expert-profile", {
      method: "PUT",
      body: JSON.stringify({
        ...input,
        businessOpeningDate: input.businessOpeningDate || null,
      }),
    })
  );
}
