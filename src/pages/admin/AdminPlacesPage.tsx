import { useCallback, useEffect, useMemo, useState } from "react";
import type { MeditationPlace, PlaceProgram } from "@/services/meditation/types";
import { regionNameById, resolveDefaultRegionId } from "@/data/koreaRegions";
import {
  deleteAdminPlace,
  nextNestedNumericId,
  emptyPlace,
  fetchAdminPlaces,
  saveAdminPlace,
  type AdminPlaceRow,
} from "@/services/admin/adminApi";
import { orderedPhotosToProgram, programPhotosOrdered } from "@/components/admin/AdminImageUpload";
import { AdminPhotoGridUpload } from "@/components/admin/AdminPhotoGridUpload";
import { AdminRegionSelect } from "@/components/admin/AdminRegionSelect";
import AdminAddressMapField from "@/components/admin/AdminAddressMapField";
import AdminMarkdownField from "@/components/admin/AdminMarkdownField";
import AdminPlacePreview from "@/components/admin/AdminPlacePreview";
import AdminConfirmModal from "@/components/admin/AdminConfirmModal";
import AdminProgramPeriodCalendar from "@/components/admin/AdminProgramPeriodCalendar";
import {
  computeProgramStatus,
  defaultEventPeriod,
  normalizePlacePrograms,
  programStatusLabel,
} from "@/services/meditation/placeProgramStatus";
import {
  formatFacilitiesInput,
  parseFacilitiesInput,
  readNoticeBody,
  writeNoticeBody,
} from "@/services/admin/placeAdminFields";
import {
  AdminButton,
  AdminCard,
  AdminError,
  AdminField,
  AdminInput,
  AdminLabel,
  AdminTable,
  AdminTextarea,
} from "@/components/admin/adminStyles";

type Tab = "basic" | "programs";

function normalizePlace(data: MeditationPlace): MeditationPlace {
  const photos = data.photos ?? [];
  const thumbnailUrl = data.thumbnailUrl?.trim() || photos[0] || "";
  return normalizePlacePrograms({ ...data, photos, thumbnailUrl });
}

export default function AdminPlacesPage() {
  const [rows, setRows] = useState<AdminPlaceRow[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [draft, setDraft] = useState<MeditationPlace | null>(null);
  const [tab, setTab] = useState<Tab>("basic");
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [discardDraftOpen, setDiscardDraftOpen] = useState(false);
  const [saveConfirmOpen, setSaveConfirmOpen] = useState(false);
  const [deleteTargetId, setDeleteTargetId] = useState<string | null>(null);

  const load = useCallback(async () => {
    setError(null);
    try {
      const places = await fetchAdminPlaces();
      setRows(places);
    } catch (e) {
      setError(e instanceof Error ? e.message : "목록 로드 실패");
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const selected = useMemo(() => rows.find((r) => r.id === editingId) ?? null, [rows, editingId]);
  const deleteTarget = useMemo(
    () => (deleteTargetId ? rows.find((r) => r.id === deleteTargetId) ?? null : null),
    [rows, deleteTargetId]
  );

  useEffect(() => {
    if (selected && !isNew) {
      const cloned = normalizePlace(structuredClone(selected.data));
      setDraft(cloned);
    }
  }, [selected, isNew]);

  const beginNew = () => {
    const p = emptyPlace(resolveDefaultRegionId());
    setEditingId(null);
    setIsNew(true);
    setDraft(p);
    setTab("basic");
  };

  const handleStartNew = () => {
    if (draft !== null) {
      setDiscardDraftOpen(true);
      return;
    }
    beginNew();
  };

  const performSave = async () => {
    if (!draft) return;
    setSaving(true);
    setError(null);
    try {
      const data = normalizePlace(draft);
      const saved = await saveAdminPlace(isNew ? null : editingId, data.regionId, data);
      await load();
      setEditingId(saved.id);
      setIsNew(false);
      setDraft(normalizePlace(saved.data));
      setTab("basic");
    } catch (e) {
      setError(e instanceof Error ? e.message : "저장 실패");
    } finally {
      setSaving(false);
    }
  };

  const performDelete = async () => {
    if (!deleteTargetId) return;
    const id = deleteTargetId;
    setDeleteTargetId(null);
    setError(null);
    try {
      await deleteAdminPlace(id);
      if (editingId === id) {
        setEditingId(null);
        setDraft(null);
        setIsNew(false);
      }
      await load();
    } catch (e) {
      setError(e instanceof Error ? e.message : "삭제 실패");
    }
  };

  const updateProgram = (index: number, patch: Partial<PlaceProgram>) => {
    if (!draft) return;
    const programs = [...(draft.programs ?? [])];
    const next = { ...programs[index], ...patch };
    programs[index] = { ...next, status: computeProgramStatus(next) };
    setDraft({ ...draft, programs });
  };

  const addProgram = (kind: "event" | "program") => {
    if (!draft) return;
    const programs = [...(draft.programs ?? [])];
    const period = kind === "event" ? defaultEventPeriod() : {};
    const base = {
      id: nextNestedNumericId(programs),
      kind,
      title: kind === "event" ? "새 행사" : "새 프로그램",
      status: "ongoing" as const,
      imageUrl: "",
      imageUrls: [],
      bodyFromVenue: "",
      reviews: [],
      ...period,
    };
    programs.push({ ...base, status: computeProgramStatus(base) });
    setDraft({ ...draft, programs });
    setTab("programs");
  };

  const removeProgram = (index: number) => {
    if (!draft) return;
    const programs = (draft.programs ?? []).filter((_, i) => i !== index);
    setDraft({ ...draft, programs });
  };

  const setPhotos = (photos: string[]) => {
    if (!draft) return;
    setDraft({
      ...draft,
      photos,
      thumbnailUrl: photos[0] ?? draft.thumbnailUrl,
    });
  };

  const previewPlace = useMemo(() => (draft ? normalizePlace(draft) : null), [draft]);

  const tabLabel: Record<Tab, string> = {
    basic: "기본",
    programs: "행사·프로그램",
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "minmax(260px, 1fr) minmax(340px, 1.15fr) max-content",
        gap: 16,
        alignItems: "start",
      }}
    >
      <AdminCard>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
          <h2 style={{ margin: 0, fontSize: 18 }}>명상지·센터</h2>
          <AdminButton $variant="primary" type="button" onClick={handleStartNew}>
            + 등록
          </AdminButton>
        </div>
        {error && <AdminError>{error}</AdminError>}
        <AdminTable>
          <thead>
            <tr>
              <th>이름</th>
              <th>지역</th>
              <th>구분</th>
              <th>행사·프로그램</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id}>
                <td>
                  <button
                    type="button"
                    style={{ background: "none", border: "none", color: "#fff", cursor: "pointer", padding: 0 }}
                    onClick={() => {
                      setEditingId(r.id);
                      setIsNew(false);
                    }}
                  >
                    {r.name || r.id}
                  </button>
                </td>
                <td>{regionNameById(r.regionId)}</td>
                <td>{r.data.venueKind ?? "명상지"}</td>
                <td>{(r.data.programs ?? []).length}</td>
                <td>
                  <div style={{ display: "flex", gap: 6, justifyContent: "flex-end", flexWrap: "wrap" }}>
                    <AdminButton
                      type="button"
                      onClick={() => {
                        setEditingId(r.id);
                        setIsNew(false);
                        setTab("basic");
                      }}
                    >
                      수정
                    </AdminButton>
                    <AdminButton
                      type="button"
                      onClick={() => {
                        setEditingId(r.id);
                        setIsNew(false);
                        setTab("programs");
                      }}
                    >
                      행사·프로그램
                    </AdminButton>
                    <AdminButton $variant="danger" type="button" onClick={() => setDeleteTargetId(r.id)}>
                      삭제
                    </AdminButton>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </AdminTable>
      </AdminCard>

      <AdminCard>
        {!draft ? (
          <p style={{ color: "#a1a1aa" }}>왼쪽에서 항목을 선택하거나 새로 등록하세요.</p>
        ) : (
          <>
            {!isNew && editingId ? (
              <p style={{ margin: "0 0 12px", color: "#71717a", fontSize: 13 }}>번호: {editingId}</p>
            ) : (
              <p style={{ margin: "0 0 12px", color: "#71717a", fontSize: 13 }}>저장 시 번호가 자동 부여됩니다.</p>
            )}
            <div style={{ display: "flex", gap: 8, marginBottom: 12, flexWrap: "wrap" }}>
              {(["basic", "programs"] as Tab[]).map((t) => (
                <AdminButton key={t} $variant={tab === t ? "primary" : "ghost"} type="button" onClick={() => setTab(t)}>
                  {tabLabel[t]}
                </AdminButton>
              ))}
              <AdminButton
                $variant="primary"
                type="button"
                onClick={() => setSaveConfirmOpen(true)}
                disabled={saving}
                style={{ marginLeft: "auto" }}
              >
                {saving ? "저장 중…" : "저장"}
              </AdminButton>
            </div>

            {tab === "basic" && (
              <>
                <AdminPhotoGridUpload
                  photos={draft.photos ?? []}
                  onChange={setPhotos}
                  maxPhotos={10}
                />
                <AdminRegionSelect
                  value={draft.regionId}
                  onChange={(regionId) => setDraft({ ...draft, regionId })}
                />
                <AdminField>
                  <AdminLabel>구분</AdminLabel>
                  <select
                    value={draft.venueKind ?? "명상지"}
                    onChange={(e) => setDraft({ ...draft, venueKind: e.target.value as "명상지" | "명상센터" })}
                    style={{ width: "100%", padding: 8, borderRadius: 8, background: "#09090b", color: "#fff", border: "1px solid #3f3f46" }}
                  >
                    <option value="명상지">명상지</option>
                    <option value="명상센터">명상센터</option>
                  </select>
                </AdminField>
                <AdminField>
                  <AdminLabel>이름</AdminLabel>
                  <AdminInput value={draft.name} onChange={(e) => setDraft({ ...draft, name: e.target.value })} />
                </AdminField>
                <AdminMarkdownField
                  label="한 줄 소개 (마크다운)"
                  value={draft.shortDescription}
                  onChange={(shortDescription) => setDraft({ ...draft, shortDescription })}
                  placeholder="명상지를 한 줄로 소개해 주세요"
                  minHeight={72}
                />
                <AdminAddressMapField
                  key={isNew ? "new" : editingId ?? "edit"}
                  value={draft.address}
                  lat={draft.lat}
                  lng={draft.lng}
                  onChange={(address) => setDraft({ ...draft, address })}
                  onCoordsChange={(lat, lng) => setDraft((d) => (d ? { ...d, lat, lng } : d))}
                />
                <AdminMarkdownField
                  label="입장료·이용 요금 (마크다운)"
                  value={draft.admissionFee ?? ""}
                  onChange={(admissionFee) => setDraft({ ...draft, admissionFee })}
                  placeholder="예: 무료 / 성인 5,000원 / 프로그램별 상이"
                  minHeight={88}
                />
                <AdminMarkdownField
                  label="유의사항 (마크다운)"
                  value={readNoticeBody(draft.detailSections)}
                  onChange={(body) =>
                    setDraft({
                      ...draft,
                      detailSections: writeNoticeBody(draft.detailSections, body),
                    })
                  }
                  placeholder={"- 조용히 이용해 주세요\n- 사전 예약 필수"}
                  minHeight={100}
                />
                <AdminField>
                  <AdminLabel>시설 정보</AdminLabel>
                  <AdminInput
                    value={formatFacilitiesInput(draft.facilities)}
                    onChange={(e) =>
                      setDraft({
                        ...draft,
                        facilities: parseFacilitiesInput(e.target.value),
                      })
                    }
                    placeholder="Wi-Fi, 주차, 다과·차 (쉼표로 구분)"
                  />
                  <p style={{ margin: "6px 0 0", fontSize: 12, color: "#71717a" }}>
                    원하는 시설명을 쉼표로 구분해 직접 입력하세요.
                  </p>
                </AdminField>
              </>
            )}

            {tab === "programs" && (
              <>
                <p style={{ margin: "0 0 12px", color: "#a1a1aa", fontSize: 13 }}>
                  행사·프로그램은 이 장소에만 속합니다. 다른 명상지·센터와 공유되지 않습니다.
                </p>
                <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
                  <AdminButton $variant="ghost" type="button" onClick={() => addProgram("event")}>
                    + 행사
                  </AdminButton>
                  <AdminButton $variant="ghost" type="button" onClick={() => addProgram("program")}>
                    + 프로그램
                  </AdminButton>
                </div>
                {(draft.programs ?? []).map((p, i) => (
                  <AdminCard key={p.id} style={{ marginBottom: 12, background: "#111114" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8, gap: 8 }}>
                      <strong style={{ fontSize: 14 }}>
                        {p.kind === "event" ? "행사" : "프로그램"} · {p.title || "(제목 없음)"}
                      </strong>
                      <span
                        style={{
                          fontSize: 12,
                          padding: "2px 8px",
                          borderRadius: 999,
                          background: p.status === "past" ? "#27272a" : "rgba(124, 58, 237, 0.25)",
                          color: p.status === "past" ? "#a1a1aa" : "#e9d5ff",
                          flexShrink: 0,
                        }}
                      >
                        {programStatusLabel(p)}
                      </span>
                      <AdminButton $variant="danger" type="button" onClick={() => removeProgram(i)}>
                        삭제
                      </AdminButton>
                    </div>
                    <AdminField>
                      <AdminLabel>구분</AdminLabel>
                      <select
                        value={p.kind ?? "program"}
                        onChange={(e) => updateProgram(i, { kind: e.target.value as "event" | "program" })}
                        style={{ width: "100%", padding: 8, borderRadius: 8, background: "#09090b", color: "#fff", border: "1px solid #3f3f46" }}
                      >
                        <option value="event">행사</option>
                        <option value="program">프로그램</option>
                      </select>
                    </AdminField>
                    <AdminField>
                      <AdminLabel>제목</AdminLabel>
                      <AdminInput value={p.title} onChange={(e) => updateProgram(i, { title: e.target.value })} />
                    </AdminField>
                    <AdminField>
                      <AdminLabel>{p.kind === "event" ? "행사 기간" : "기간 (선택)"}</AdminLabel>
                      <AdminProgramPeriodCalendar
                        startDate={p.startDate}
                        endDate={p.endDate}
                        onChange={(range) => updateProgram(i, range)}
                        allowClear={p.kind !== "event"}
                        hint={
                          p.kind === "event"
                            ? "시작일 → 종료일 순으로 두 번 클릭하세요. 종료일이 지나면 자동으로 완료됩니다."
                            : "기간을 넣으면 종료일 이후 자동으로 완료 처리됩니다."
                        }
                      />
                    </AdminField>
                    <AdminPhotoGridUpload
                      label="사진"
                      photos={programPhotosOrdered(p.imageUrl, p.imageUrls)}
                      onChange={(urls) => updateProgram(i, orderedPhotosToProgram(urls))}
                      maxPhotos={10}
                      hint="첫 사진이 대표입니다."
                    />
                    <AdminField>
                      <AdminLabel>소개 (마크다운)</AdminLabel>
                      <AdminTextarea
                        style={{ minHeight: 120 }}
                        value={p.bodyFromVenue}
                        onChange={(e) => updateProgram(i, { bodyFromVenue: e.target.value })}
                      />
                    </AdminField>
                  </AdminCard>
                ))}
                {(draft.programs ?? []).length === 0 ? (
                  <p style={{ color: "#71717a", fontSize: 13 }}>등록된 행사·프로그램이 없습니다.</p>
                ) : null}
              </>
            )}

          </>
        )}
      </AdminCard>

      <AdminPlacePreview place={previewPlace} />

      <AdminConfirmModal
        open={discardDraftOpen}
        title="새로 등록"
        message="이전에 작성 중인 내용이 사라집니다. 새로 등록하시겠습니까?"
        cancelLabel="계속 작성"
        confirmLabel="새로 등록"
        onCancel={() => setDiscardDraftOpen(false)}
        onConfirm={() => {
          setDiscardDraftOpen(false);
          beginNew();
        }}
      />

      <AdminConfirmModal
        open={saveConfirmOpen}
        title="저장"
        message={isNew ? "등록하시겠습니까?" : "저장하시겠습니까?"}
        cancelLabel="취소"
        confirmLabel="저장"
        onCancel={() => setSaveConfirmOpen(false)}
        onConfirm={() => {
          setSaveConfirmOpen(false);
          void performSave();
        }}
      />

      <AdminConfirmModal
        open={deleteTargetId !== null}
        title="삭제"
        message={
          deleteTarget
            ? `「${deleteTarget.name || deleteTarget.id}」을(를) 삭제할까요? 삭제 후에는 되돌릴 수 없습니다.`
            : "삭제할까요? 삭제 후에는 되돌릴 수 없습니다."
        }
        cancelLabel="취소"
        confirmLabel="삭제"
        onCancel={() => setDeleteTargetId(null)}
        onConfirm={() => void performDelete()}
      />
    </div>
  );
}
