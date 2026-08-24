import { useCallback, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import {
  createAdminInterest,
  deleteAdminInterest,
  fetchAdminInterests,
  updateAdminInterest,
  type AdminInterest,
} from "@/services/admin/adminApi";
import { toast } from "@/stores/toastStore";
import AdminConfirmModal from "@/components/admin/AdminConfirmModal";
import { AdminImageUpload } from "@/components/admin/AdminImageUpload";
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

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const popIn = keyframes`
  from { opacity: 0; transform: translateY(8px) scale(0.98); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 500;
  background: rgba(0, 0, 0, 0.62);
  display: grid;
  place-items: center;
  padding: 20px;
  overflow-y: auto;
  animation: ${fadeIn} 0.18s ease both;
`;

const Dialog = styled.div`
  width: min(100%, 480px);
  border-radius: 14px;
  border: 1px solid #3f3f46;
  background: #18181b;
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.45);
  animation: ${popIn} 0.22s cubic-bezier(0.22, 1, 0.36, 1) both;
  overflow: hidden;
`;

const DialogHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 20px 12px;

  h3 {
    margin: 0;
    font-size: 16px;
    font-weight: 600;
    color: #f4f4f5;
  }
`;

const CloseButton = styled.button`
  border: 0;
  background: none;
  color: #71717a;
  font-size: 18px;
  line-height: 1;
  cursor: pointer;
  padding: 4px;

  &:hover {
    color: #e4e4e7;
  }
`;

const DialogBody = styled.div`
  padding: 0 20px 4px;
`;

const DialogActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  padding: 14px 20px 18px;
  border-top: 1px solid #27272a;
  background: #111114;
`;

const CardHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
  gap: 12px;

  h2 {
    margin: 0;
    font-size: 18px;
  }

  p {
    margin: 4px 0 0;
    color: #71717a;
    font-size: 13px;
  }
`;

const Thumb = styled.div<{ $src?: string | null }>`
  width: 46px;
  height: 46px;
  border-radius: 8px;
  background: ${({ $src }) => ($src ? `center/cover url(${$src})` : "#27272a")};
  display: grid;
  place-items: center;
  color: #52525b;
  font-size: 11px;
`;

const RowActions = styled.div`
  display: flex;
  gap: 6px;
  justify-content: flex-end;
`;

const Desc = styled.td`
  color: #a1a1aa;
  font-size: 13px;
  max-width: 420px;
`;

interface DraftState {
  name: string;
  description: string;
  imageUrl: string;
}

const emptyDraft: DraftState = { name: "", description: "", imageUrl: "" };

/**
 * 관심사(주제) 관리. 목록이 본문이고, 추가·수정은 모달에서 합니다.
 *
 * 삭제보다 "숨기기"를 앞세웁니다. 이미 그 주제를 골라 둔 사용자·전문가의 프로필에는 이름이
 * 문자열로 남아 있어서, 목록에서 지워도 그 화면에서는 계속 보입니다. 숨김은 새로 고르는
 * 것만 막고 기존 값은 건드리지 않습니다.
 */
export default function AdminInterestsPage() {
  const [rows, setRows] = useState<AdminInterest[]>([]);
  const [editorOpen, setEditorOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [draft, setDraft] = useState<DraftState>(emptyDraft);
  const [deleteTarget, setDeleteTarget] = useState<AdminInterest | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const load = useCallback(async () => {
    try {
      setRows(await fetchAdminInterests());
      setError(null);
    } catch (e) {
      setError(e instanceof Error ? e.message : "로드 실패");
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const closeEditor = useCallback(() => {
    setEditorOpen(false);
    setEditingId(null);
    setDraft(emptyDraft);
    setError(null);
  }, []);

  useEffect(() => {
    if (!editorOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeEditor();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [editorOpen, closeEditor]);

  const run = async (task: () => Promise<unknown>, successMessage: string) => {
    setBusy(true);
    setError(null);
    try {
      await task();
      await load();
      toast.success(successMessage);
      return true;
    } catch (e) {
      const message = e instanceof Error ? e.message : "처리하지 못했습니다.";
      setError(message);
      toast.error(message);
      return false;
    } finally {
      setBusy(false);
    }
  };

  const openNew = () => {
    setEditingId(null);
    setDraft(emptyDraft);
    setError(null);
    setEditorOpen(true);
  };

  const openEdit = (row: AdminInterest) => {
    setEditingId(row.id);
    setDraft({
      name: row.name,
      description: row.description ?? "",
      imageUrl: row.imageUrl ?? "",
    });
    setError(null);
    setEditorOpen(true);
  };

  const save = () => {
    const name = draft.name.trim();
    if (!name) {
      toast.error("이름을 입력하세요.");
      return;
    }
    const body = {
      name,
      description: draft.description.trim() || null,
      imageUrl: draft.imageUrl.trim() || null,
    };
    void (async () => {
      const ok = editingId
        ? await run(() => updateAdminInterest(editingId, body), "저장되었습니다.")
        : await run(() => createAdminInterest(body), `"${name}"을(를) 추가했습니다.`);
      // 실패하면 입력값을 잃지 않도록 모달을 열어 둡니다.
      if (ok) closeEditor();
    })();
  };

  const toggleActive = (row: AdminInterest) => {
    void run(
      () =>
        updateAdminInterest(row.id, {
          name: row.name,
          description: row.description,
          imageUrl: row.imageUrl,
          active: !row.active,
        }),
      row.active ? `"${row.name}"을(를) 숨겼습니다.` : `"${row.name}"을(를) 노출했습니다.`
    );
  };

  const move = (row: AdminInterest, direction: -1 | 1) => {
    const index = rows.findIndex((r) => r.id === row.id);
    const swapWith = rows[index + direction];
    if (!swapWith) return;
    // 두 행의 순서값을 맞바꿉니다. 목록 전체를 다시 매기지 않아 요청이 두 번으로 끝납니다.
    void run(async () => {
      await updateAdminInterest(row.id, { name: row.name, sortOrder: swapWith.sortOrder });
      await updateAdminInterest(swapWith.id, { name: swapWith.name, sortOrder: row.sortOrder });
    }, "순서를 바꿨습니다.");
  };

  const remove = () => {
    const row = deleteTarget;
    if (!row) return;
    setDeleteTarget(null);
    void run(() => deleteAdminInterest(row.id), `"${row.name}"을(를) 삭제했습니다.`);
  };

  return (
    <div>
      <AdminCard>
        <CardHead>
          <div>
            <h2>관심사</h2>
            <p>가입 온보딩 카드와 프로필·전문가 화면의 칩이 이 목록을 같이 씁니다.</p>
          </div>
          <AdminButton $variant="primary" type="button" onClick={openNew}>
            + 추가
          </AdminButton>
        </CardHead>

        {error && !editorOpen && <AdminError>{error}</AdminError>}

        <AdminTable>
          <thead>
            <tr>
              <th style={{ width: 66 }}>사진</th>
              <th style={{ width: 160 }}>이름</th>
              <th>설명</th>
              <th style={{ width: 70 }}>상태</th>
              <th style={{ width: 280 }} />
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 && (
              <tr>
                <td colSpan={5} style={{ color: "#71717a" }}>
                  등록된 관심사가 없습니다. 오른쪽 위 “+ 추가”로 만들어 주세요.
                </td>
              </tr>
            )}
            {rows.map((row, index) => (
              <tr key={row.id} style={{ opacity: row.active ? 1 : 0.45 }}>
                <td>
                  <Thumb $src={row.imageUrl}>{row.imageUrl ? "" : "없음"}</Thumb>
                </td>
                <td>{row.name}</td>
                <Desc>{row.description ?? "—"}</Desc>
                <td style={{ color: row.active ? "#4ade80" : "#a1a1aa" }}>
                  {row.active ? "노출" : "숨김"}
                </td>
                <td>
                  <RowActions>
                    <AdminButton
                      $variant="ghost"
                      type="button"
                      aria-label="위로"
                      disabled={busy || index === 0}
                      onClick={() => move(row, -1)}
                    >
                      ↑
                    </AdminButton>
                    <AdminButton
                      $variant="ghost"
                      type="button"
                      aria-label="아래로"
                      disabled={busy || index === rows.length - 1}
                      onClick={() => move(row, 1)}
                    >
                      ↓
                    </AdminButton>
                    <AdminButton $variant="ghost" type="button" onClick={() => openEdit(row)}>
                      수정
                    </AdminButton>
                    <AdminButton
                      $variant="ghost"
                      type="button"
                      disabled={busy}
                      onClick={() => toggleActive(row)}
                    >
                      {row.active ? "숨기기" : "노출"}
                    </AdminButton>
                    <AdminButton
                      $variant="danger"
                      type="button"
                      disabled={busy}
                      onClick={() => setDeleteTarget(row)}
                    >
                      삭제
                    </AdminButton>
                  </RowActions>
                </td>
              </tr>
            ))}
          </tbody>
        </AdminTable>
      </AdminCard>

      {editorOpen && (
        <Overlay
          onClick={(e) => {
            if (e.target === e.currentTarget) closeEditor();
          }}
        >
          <Dialog role="dialog" aria-modal="true" aria-label={editingId ? "관심사 수정" : "관심사 추가"}>
            <DialogHead>
              <h3>{editingId ? "관심사 수정" : "관심사 추가"}</h3>
              <CloseButton type="button" aria-label="닫기" onClick={closeEditor}>
                ✕
              </CloseButton>
            </DialogHead>

            <DialogBody>
              <AdminField>
                <AdminLabel>이름</AdminLabel>
                <AdminInput
                  autoFocus
                  value={draft.name}
                  maxLength={60}
                  placeholder="예: 숲 명상"
                  onChange={(e) => setDraft({ ...draft, name: e.target.value })}
                />
              </AdminField>

              <AdminField>
                <AdminLabel>설명</AdminLabel>
                <AdminTextarea
                  style={{ minHeight: 78, fontFamily: "inherit", fontSize: 14 }}
                  value={draft.description}
                  maxLength={300}
                  placeholder="카드를 눌렀을 때 제목과 함께 보이는 문구입니다."
                  onChange={(e) => setDraft({ ...draft, description: e.target.value })}
                />
              </AdminField>

              <AdminImageUpload
                label="카드 사진"
                value={draft.imageUrl}
                onChange={(imageUrl) => setDraft({ ...draft, imageUrl })}
              />

              {error && <AdminError>{error}</AdminError>}
            </DialogBody>

            <DialogActions>
              <AdminButton $variant="ghost" type="button" onClick={closeEditor}>
                취소
              </AdminButton>
              <AdminButton $variant="primary" type="button" disabled={busy} onClick={save}>
                {busy ? "저장 중…" : editingId ? "저장" : "추가"}
              </AdminButton>
            </DialogActions>
          </Dialog>
        </Overlay>
      )}

      <AdminConfirmModal
        open={deleteTarget !== null}
        title="관심사 삭제"
        message={`"${deleteTarget?.name ?? ""}"을(를) 삭제할까요? 이미 이 주제를 골라 둔 사용자·전문가 프로필에는 이름이 그대로 남습니다. 새로 고르지 못하게 하려는 것이라면 "숨기기"로 충분합니다.`}
        confirmLabel="삭제"
        onConfirm={remove}
        onCancel={() => setDeleteTarget(null)}
      />
    </div>
  );
}
