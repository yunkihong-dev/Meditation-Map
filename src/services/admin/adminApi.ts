import { apiFetch } from "@/stores/authStore";
import type { MeditationExpert, MeditationPlace } from "@/services/meditation/types";

export interface AdminTrafficMetrics {
  totalHttpRequests: number;
  placesCount: number;
  expertsCount: number;
  regionsCount: number;
  noticesCount: number;
  membersCount: number;
  jvmHeapUsedBytes: number;
  jvmHeapMaxBytes: number;
  topEndpoints: { uri: string; count: number }[];
}

export interface AdminPlaceRow {
  id: string;
  regionId: string;
  name: string;
  data: MeditationPlace;
}

export interface AdminExpertRow {
  id: string;
  name: string;
  data: MeditationExpert;
}

/** 에러 응답 바디({ code, message })에서 사람이 읽을 메시지만 뽑는다. (토스트에 JSON 원문이 뜨지 않게) */
function errorMessageFrom(text: string, status: number): string {
  if (text) {
    try {
      const j = JSON.parse(text) as { message?: string; code?: string };
      if (j?.message) return j.message;
      if (j?.code) return j.code;
    } catch {
      // JSON 이 아니면 원문 사용
    }
    return text;
  }
  return `HTTP ${status}`;
}

async function parseJson<T>(res: Response): Promise<T> {
  if (!res.ok) {
    throw new Error(errorMessageFrom(await res.text(), res.status));
  }
  if (res.status === 204) return undefined as T;
  return res.json() as Promise<T>;
}

export async function adminLogin(loginId: string, password: string) {
  const res = await apiFetch("/admin/auth/login", {
    method: "POST",
    body: JSON.stringify({ loginId, password }),
  });
  if (!res.ok) {
    throw new Error(errorMessageFrom(await res.text(), res.status));
  }
}

export async function fetchAdminTraffic(): Promise<AdminTrafficMetrics> {
  return parseJson(await apiFetch("/admin/metrics/traffic"));
}

export interface MetricSeries {
  granularity: "day" | "month";
  limit: number;
  total: number;
  average: number;
  peak: number;
  points: { key: string; label: string; count: number }[];
}

export async function fetchAdminHttpTraffic(
  granularity: "day" | "month",
  limit: number
): Promise<MetricSeries> {
  const params = new URLSearchParams({
    granularity,
    limit: String(limit),
  });
  return parseJson(await apiFetch(`/admin/metrics/http-traffic?${params.toString()}`));
}

export interface AdminMemberTrafficBundle {
  granularity: "day" | "month";
  limit: number;
  currentTotal: number;
  signupSeries: MetricSeries;
  cumulativeSeries: MetricSeries;
}

export async function fetchAdminMemberTraffic(
  granularity: "day" | "month",
  limit: number
): Promise<AdminMemberTrafficBundle> {
  const params = new URLSearchParams({
    granularity,
    limit: String(limit),
  });
  return parseJson(await apiFetch(`/admin/metrics/member-traffic?${params.toString()}`));
}

export interface AdminApiTrafficBundle {
  granularity: "day" | "month";
  limit: number;
  endpoints: { uri: string; series: MetricSeries }[];
}

export async function fetchAdminApiTraffic(
  granularity: "day" | "month",
  limit: number,
  top = 12
): Promise<AdminApiTrafficBundle> {
  const params = new URLSearchParams({
    granularity,
    limit: String(limit),
    top: String(top),
  });
  return parseJson(await apiFetch(`/admin/metrics/api-traffic?${params.toString()}`));
}

export async function fetchAdminPlaces(): Promise<AdminPlaceRow[]> {
  return parseJson(await apiFetch("/admin/places"));
}

export async function fetchAdminPlace(id: string): Promise<AdminPlaceRow> {
  return parseJson(await apiFetch(`/admin/places/${encodeURIComponent(id)}`));
}

function placeBodyWithoutId(data: MeditationPlace): Record<string, unknown> {
  const { id: _id, ...rest } = data;
  return rest;
}

export async function saveAdminPlace(
  editingId: string | null,
  regionId: string,
  data: MeditationPlace
): Promise<AdminPlaceRow> {
  const payload = { regionId, data: placeBodyWithoutId(data) };
  if (editingId) {
    return parseJson(
      await apiFetch(`/admin/places/${encodeURIComponent(editingId)}`, {
        method: "PUT",
        body: JSON.stringify(payload),
      })
    );
  }
  return parseJson(
    await apiFetch("/admin/places", {
      method: "POST",
      body: JSON.stringify(payload),
    })
  );
}

/** @deprecated saveAdminPlace 사용 */
export async function upsertAdminPlace(body: {
  id: string;
  regionId: string;
  data: MeditationPlace;
}): Promise<AdminPlaceRow> {
  return saveAdminPlace(body.id || null, body.regionId, body.data);
}

export async function deleteAdminPlace(id: string): Promise<void> {
  await parseJson(await apiFetch(`/admin/places/${encodeURIComponent(id)}`, { method: "DELETE" }));
}

export async function fetchAdminExperts(): Promise<AdminExpertRow[]> {
  return parseJson(await apiFetch("/admin/experts"));
}

export async function saveAdminExpert(
  editingId: string | null,
  data: MeditationExpert
): Promise<AdminExpertRow> {
  const payload = { data: expertBodyWithoutId(data) };
  if (editingId) {
    return parseJson(
      await apiFetch(`/admin/experts/${encodeURIComponent(editingId)}`, {
        method: "PUT",
        body: JSON.stringify(payload),
      })
    );
  }
  return parseJson(
    await apiFetch("/admin/experts", {
      method: "POST",
      body: JSON.stringify(payload),
    })
  );
}

function expertBodyWithoutId(data: MeditationExpert): Record<string, unknown> {
  const { id: _id, ...rest } = data;
  return rest;
}

/** 전문가 아이디 사용 가능 여부 */
export async function checkExpertLoginIdAvailability(loginId: string): Promise<boolean> {
  const params = new URLSearchParams({ loginId });
  const res = await parseJson<{ available: boolean }>(
    await apiFetch(`/admin/experts/login-id-availability?${params.toString()}`)
  );
  return res.available;
}

/** 전문가 계정 생성 (아이디·이메일·비밀번호 + 프로필) */
export async function createExpertAccount(input: {
  loginId: string;
  email: string;
  password: string;
  data: MeditationExpert;
}): Promise<AdminExpertRow> {
  const payload = {
    loginId: input.loginId,
    email: input.email,
    password: input.password,
    data: expertBodyWithoutId(input.data),
  };
  return parseJson(
    await apiFetch("/admin/experts/accounts", {
      method: "POST",
      body: JSON.stringify(payload),
    })
  );
}

/** @deprecated saveAdminExpert 사용 */
export async function upsertAdminExpert(body: { id: string; data: MeditationExpert }): Promise<AdminExpertRow> {
  return saveAdminExpert(body.id || null, body.data);
}

export async function deleteAdminExpert(id: string): Promise<void> {
  await parseJson(await apiFetch(`/admin/experts/${encodeURIComponent(id)}`, { method: "DELETE" }));
}

export async function fetchAdminNotices(): Promise<{ id: string; title?: string; payload: Record<string, unknown> }[]> {
  return parseJson(await apiFetch("/admin/notices"));
}

export async function saveAdminNotice(
  editingId: string | null,
  payload: Record<string, unknown>
): Promise<{ id: string; title?: string; payload: Record<string, unknown> }> {
  const body = { payload: noticePayloadWithoutId(payload) };
  if (editingId) {
    return parseJson(
      await apiFetch(`/admin/notices/${encodeURIComponent(editingId)}`, {
        method: "PUT",
        body: JSON.stringify(body),
      })
    );
  }
  return parseJson(
    await apiFetch("/admin/notices", {
      method: "POST",
      body: JSON.stringify(body),
    })
  );
}

function noticePayloadWithoutId(payload: Record<string, unknown>): Record<string, unknown> {
  const { id: _id, ...rest } = payload;
  return rest;
}

/** @deprecated saveAdminNotice 사용 */
export async function upsertAdminNotice(body: { id: string; payload: Record<string, unknown> }): Promise<void> {
  await saveAdminNotice(body.id || null, body.payload);
}

export async function deleteAdminNotice(id: string): Promise<void> {
  await parseJson(await apiFetch(`/admin/notices/${encodeURIComponent(id)}`, { method: "DELETE" }));
}

/** MinIO 업로드 — JWT·쿠키 필요. 비활성 시 URL 직접 입력 fallback */
export async function uploadAdminImage(file: File): Promise<string> {
  const fd = new FormData();
  fd.append("file", file);
  const res = await apiFetch("/storage/objects", { method: "POST", body: fd });
  const data = await parseJson<{ url: string }>(res);
  return data.url;
}

export function emptyPlace(regionId: string): MeditationPlace {
  return {
    id: "",
    regionId,
    name: "",
    shortDescription: "",
    description: "",
    address: "",
    thumbnailUrl: "",
    photos: [],
    hashtags: [],
    themes: [],
    hasTempleStay: false,
    duration: "",
    admissionFee: "",
    venueKind: "명상지",
    organization: { name: "" },
    externalLink: "",
    detailSections: [],
    facilities: [],
    programs: [],
    instructors: [],
  };
}

export function nextNestedNumericId(items: { id: string }[]): string {
  const max = items.reduce((m, item) => {
    const n = Number.parseInt(item.id, 10);
    return Number.isFinite(n) ? Math.max(m, n) : m;
  }, 0);
  return String(max + 1);
}

export function emptyExpert(): MeditationExpert {
  return {
    id: "",
    name: "",
    avatarUrl: "",
    specialties: [],
    regionIds: [],
    intro: "",
    degrees: [],
    certificates: [],
    careers: [],
    classTypes: [],
    hasCenter: false,
    programs: [],
    reviews: [],
  };
}
