import { useCallback, useEffect, useState } from "react";
import type { MeditationExpert } from "@/services/meditation/types";
import {
  deleteAdminExpert,
  emptyExpert,
  fetchAdminExperts,
  saveAdminExpert,
  type AdminExpertRow,
} from "@/services/admin/adminApi";
import AdminConfirmModal from "@/components/admin/AdminConfirmModal";
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

export default function AdminExpertsPage() {
  const [rows, setRows] = useState<AdminExpertRow[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [draft, setDraft] = useState<MeditationExpert | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [saveConfirmOpen, setSaveConfirmOpen] = useState(false);
  const [deleteTargetId, setDeleteTargetId] = useState<string | null>(null);

  const load = useCallback(async () => {
    try {
      setRows(await fetchAdminExperts());
    } catch (e) {
      setError(e instanceof Error ? e.message : "로드 실패");
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const select = (row: AdminExpertRow) => {
    setEditingId(row.id);
    setIsNew(false);
    setDraft(structuredClone(row.data));
  };

  const beginNew = () => {
    setEditingId(null);
    setIsNew(true);
    setDraft(emptyExpert());
  };

  const performSave = async () => {
    if (!draft) return;
    setError(null);
    try {
      const saved = await saveAdminExpert(isNew ? null : editingId, draft);
      await load();
      setEditingId(saved.id);
      setIsNew(false);
      setDraft(saved.data);
    } catch (e) {
      setError(e instanceof Error ? e.message : "저장 실패");
    }
  };

  const performDelete = async () => {
    if (!deleteTargetId) return;
    const id = deleteTargetId;
    setDeleteTargetId(null);
    try {
      await deleteAdminExpert(id);
      if (editingId === id) {
        setEditingId(null);
        setIsNew(false);
        setDraft(null);
      }
      await load();
    } catch (e) {
      setError(e instanceof Error ? e.message : "삭제 실패");
    }
  };

  const deleteTarget = deleteTargetId ? rows.find((row) => row.id === deleteTargetId) : null;

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 16 }}>
      <AdminCard>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
          <h2 style={{ margin: 0 }}>전문가</h2>
          <AdminButton $variant="primary" type="button" onClick={beginNew}>
            + 등록
          </AdminButton>
        </div>
        {error && <AdminError>{error}</AdminError>}
        <AdminTable>
          <thead>
            <tr>
              <th>이름</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                <td>
                  <button
                    type="button"
                    style={{ background: "none", border: "none", color: "#fff", cursor: "pointer" }}
                    onClick={() => select(row)}
                  >
                    {row.name || `전문가 ${row.id}`}
                  </button>
                </td>
                <td>
                  <AdminButton $variant="danger" type="button" onClick={() => setDeleteTargetId(row.id)}>
                    삭제
                  </AdminButton>
                </td>
              </tr>
            ))}
          </tbody>
        </AdminTable>
      </AdminCard>

      <AdminCard>
        {!draft ? (
          <p style={{ color: "#a1a1aa" }}>항목을 선택하거나 새로 등록하세요.</p>
        ) : (
          <>
            {!isNew && editingId ? (
              <p style={{ margin: "0 0 12px", color: "#71717a", fontSize: 13 }}>번호: {editingId}</p>
            ) : (
              <p style={{ margin: "0 0 12px", color: "#71717a", fontSize: 13 }}>저장 시 번호가 자동 부여됩니다.</p>
            )}
            <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 12 }}>
              <AdminButton $variant="primary" type="button" onClick={() => setSaveConfirmOpen(true)}>
                저장
              </AdminButton>
            </div>
            <AdminField>
              <AdminLabel>이름</AdminLabel>
              <AdminInput value={draft.name} onChange={(e) => setDraft({ ...draft, name: e.target.value })} />
            </AdminField>
            <AdminField>
              <AdminLabel>소개</AdminLabel>
              <AdminTextarea
                style={{ minHeight: 120, fontFamily: "inherit", fontSize: 14 }}
                value={draft.intro}
                onChange={(e) => setDraft({ ...draft, intro: e.target.value })}
              />
            </AdminField>
            <AdminField>
              <AdminLabel>아바타 URL</AdminLabel>
              <AdminInput value={draft.avatarUrl} onChange={(e) => setDraft({ ...draft, avatarUrl: e.target.value })} />
            </AdminField>
          </>
        )}
      </AdminCard>

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
            ? `「${deleteTarget.name || deleteTarget.id}」을(를) 삭제할까요?`
            : "삭제할까요?"
        }
        cancelLabel="취소"
        confirmLabel="삭제"
        onCancel={() => setDeleteTargetId(null)}
        onConfirm={() => void performDelete()}
      />
    </div>
  );
}
