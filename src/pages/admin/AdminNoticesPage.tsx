import { useCallback, useEffect, useState } from "react";
import { deleteAdminNotice, fetchAdminNotices, saveAdminNotice } from "@/services/admin/adminApi";
import {
  draftFromPayload,
  emptyNoticeDraft,
  payloadFromDraft,
  type NoticeDraft,
} from "@/services/admin/noticeAdminFields";
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

export default function AdminNoticesPage() {
  const [rows, setRows] = useState<{ id: string; title?: string; payload: Record<string, unknown> }[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [draft, setDraft] = useState<NoticeDraft | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [saveConfirmOpen, setSaveConfirmOpen] = useState(false);
  const [deleteTargetId, setDeleteTargetId] = useState<string | null>(null);

  const load = useCallback(async () => {
    try {
      setRows(await fetchAdminNotices());
    } catch (e) {
      setError(e instanceof Error ? e.message : "로드 실패");
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const beginNew = () => {
    setEditingId(null);
    setIsNew(true);
    setDraft(emptyNoticeDraft());
  };

  const selectRow = (row: { id: string; payload: Record<string, unknown> }) => {
    setEditingId(row.id);
    setIsNew(false);
    setDraft(draftFromPayload(row.payload));
  };

  const performSave = async () => {
    if (!draft) return;
    setError(null);
    try {
      const saved = await saveAdminNotice(isNew ? null : editingId, payloadFromDraft(draft));
      await load();
      setEditingId(saved.id);
      setIsNew(false);
      setDraft(draftFromPayload(saved.payload));
    } catch (e) {
      setError(e instanceof Error ? e.message : "저장 실패");
    }
  };

  const performDelete = async () => {
    if (!deleteTargetId) return;
    const id = deleteTargetId;
    setDeleteTargetId(null);
    try {
      await deleteAdminNotice(id);
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

  const deleteTarget = deleteTargetId
    ? rows.find((row) => row.id === deleteTargetId)
    : null;

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 16 }}>
      <AdminCard>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
          <h2 style={{ margin: 0 }}>공지</h2>
          <AdminButton $variant="primary" type="button" onClick={beginNew}>
            + 등록
          </AdminButton>
        </div>
        {error && <AdminError>{error}</AdminError>}
        <AdminTable>
          <thead>
            <tr>
              <th>제목</th>
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
                    onClick={() => selectRow(row)}
                  >
                    {(row.title || (row.payload.title as string) || "") || `공지 ${row.id}`}
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
        {draft ? (
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
              <AdminLabel>분류</AdminLabel>
              <AdminInput
                value={draft.category}
                onChange={(e) => setDraft({ ...draft, category: e.target.value })}
                placeholder="예: 공지, 업데이트"
              />
            </AdminField>
            <AdminField>
              <AdminLabel>제목</AdminLabel>
              <AdminInput
                value={draft.title}
                onChange={(e) => setDraft({ ...draft, title: e.target.value })}
              />
            </AdminField>
            <AdminField>
              <AdminLabel>날짜</AdminLabel>
              <AdminInput
                type="date"
                value={draft.date}
                onChange={(e) => setDraft({ ...draft, date: e.target.value })}
              />
            </AdminField>
            <AdminField>
              <AdminLabel>목록 요약</AdminLabel>
              <AdminTextarea
                style={{ minHeight: 72, fontFamily: "inherit", fontSize: 14 }}
                value={draft.summary}
                onChange={(e) => setDraft({ ...draft, summary: e.target.value })}
                placeholder="공지 목록에 보이는 한두 줄 요약"
              />
            </AdminField>
            <AdminField>
              <AdminLabel>본문</AdminLabel>
              <AdminTextarea
                style={{ minHeight: 160, fontFamily: "inherit", fontSize: 14 }}
                value={draft.body}
                onChange={(e) => setDraft({ ...draft, body: e.target.value })}
                placeholder="문단마다 빈 줄로 구분"
              />
            </AdminField>
            <AdminField>
              <AdminLabel>목록 (선택)</AdminLabel>
              <AdminTextarea
                style={{ minHeight: 88, fontFamily: "inherit", fontSize: 14 }}
                value={draft.bullets}
                onChange={(e) => setDraft({ ...draft, bullets: e.target.value })}
                placeholder="한 줄에 한 항목"
              />
            </AdminField>
            <AdminField>
              <AdminLabel>하단 문구 (선택)</AdminLabel>
              <AdminInput
                value={draft.footer}
                onChange={(e) => setDraft({ ...draft, footer: e.target.value })}
              />
            </AdminField>
          </>
        ) : (
          <p style={{ color: "#a1a1aa" }}>공지를 선택하거나 새로 등록하세요.</p>
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
            ? `「${(deleteTarget.title || (deleteTarget.payload.title as string) || deleteTarget.id)}」을(를) 삭제할까요?`
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
