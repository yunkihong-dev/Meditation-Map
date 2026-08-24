import { useCallback, useEffect, useState } from "react";
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

interface DraftState {
  name: string;
  description: string;
  imageUrl: string;
}

const emptyDraft: DraftState = { name: "", description: "", imageUrl: "" };

/**
 * 관심사(주제)를 관리합니다. 사용자 온보딩 카드와 전문가 프로필 칩이 이 목록을 같이 씁니다.
 *
 * 삭제보다 "숨기기"를 앞세웁니다. 이미 그 주제를 골라 둔 사용자·전문가의 프로필에는 이름이
 * 문자열로 남아 있어서, 목록에서 지워도 그 화면에서는 계속 보입니다. 숨김은 새로 고르는
 * 것만 막고 기존 값은 건드리지 않습니다.
 */
export default function AdminInterestsPage() {
  const [rows, setRows] = useState<AdminInterest[]>([]);
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

  const run = async (task: () => Promise<unknown>, successMessage: string) => {
    setBusy(true);
    setError(null);
    try {
      await task();
      await load();
      toast.success(successMessage);
    } catch (e) {
      const message = e instanceof Error ? e.message : "처리하지 못했습니다.";
      setError(message);
      toast.error(message);
    } finally {
      setBusy(false);
    }
  };

  const startNew = () => {
    setEditingId(null);
    setDraft(emptyDraft);
  };

  const startEdit = (row: AdminInterest) => {
    setEditingId(row.id);
    setDraft({
      name: row.name,
      description: row.description ?? "",
      imageUrl: row.imageUrl ?? "",
    });
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
    if (editingId) {
      void run(() => updateAdminInterest(editingId, body), "저장되었습니다.");
      return;
    }
    void run(async () => {
      await createAdminInterest(body);
      setDraft(emptyDraft);
    }, `"${name}"을(를) 추가했습니다.`);
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
    if (editingId === row.id) startNew();
    void run(() => deleteAdminInterest(row.id), `"${row.name}"을(를) 삭제했습니다.`);
  };

  return (
    <div style={{ display: "grid", gap: 16 }}>
      <AdminCard>
        <h2 style={{ margin: "0 0 4px", fontSize: 18 }}>
          {editingId ? "관심사 수정" : "관심사 추가"}
        </h2>
        <p style={{ margin: "0 0 14px", color: "#71717a", fontSize: 13 }}>
          가입 온보딩의 카드와 프로필·전문가 화면의 칩이 이 목록을 같이 씁니다. 사진과 설명은
          카드에 쓰입니다.
        </p>

        <AdminField>
          <AdminLabel>이름</AdminLabel>
          <AdminInput
            value={draft.name}
            maxLength={60}
            placeholder="예: 숲 명상"
            onChange={(e) => setDraft({ ...draft, name: e.target.value })}
          />
        </AdminField>

        <AdminField>
          <AdminLabel>설명</AdminLabel>
          <AdminTextarea
            style={{ minHeight: 80, fontFamily: "inherit", fontSize: 14 }}
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

        <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
          <AdminButton $variant="primary" type="button" disabled={busy} onClick={save}>
            {editingId ? "저장" : "+ 추가"}
          </AdminButton>
          {editingId && (
            <AdminButton $variant="ghost" type="button" onClick={startNew}>
              새로 추가하기
            </AdminButton>
          )}
        </div>
      </AdminCard>

      <AdminCard>
        <h2 style={{ margin: "0 0 14px", fontSize: 18 }}>관심사 목록</h2>
        <AdminTable>
          <thead>
            <tr>
              <th style={{ width: 72 }}>사진</th>
              <th>이름</th>
              <th>설명</th>
              <th style={{ width: 70 }}>상태</th>
              <th style={{ width: 300 }} />
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 && (
              <tr>
                <td colSpan={5} style={{ color: "#71717a" }}>
                  등록된 관심사가 없습니다.
                </td>
              </tr>
            )}
            {rows.map((row, index) => (
              <tr key={row.id} style={{ opacity: row.active ? 1 : 0.5 }}>
                <td>
                  {row.imageUrl ? (
                    <img
                      src={row.imageUrl}
                      alt=""
                      style={{ width: 52, height: 52, objectFit: "cover", borderRadius: 8 }}
                    />
                  ) : (
                    <div
                      style={{
                        width: 52,
                        height: 52,
                        borderRadius: 8,
                        background: "#27272a",
                        display: "grid",
                        placeItems: "center",
                        color: "#52525b",
                        fontSize: 11,
                      }}
                    >
                      없음
                    </div>
                  )}
                </td>
                <td>{row.name}</td>
                <td style={{ color: "#a1a1aa", fontSize: 13 }}>{row.description ?? "—"}</td>
                <td style={{ color: row.active ? "#4ade80" : "#a1a1aa" }}>
                  {row.active ? "노출" : "숨김"}
                </td>
                <td>
                  <div style={{ display: "flex", gap: 6, justifyContent: "flex-end" }}>
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
                    <AdminButton $variant="ghost" type="button" onClick={() => startEdit(row)}>
                      수정
                    </AdminButton>
                    <AdminButton
                      $variant="ghost"
                      type="button"
                      disabled={busy}
                      onClick={() => toggleActive(row)}
                    >
                      {row.active ? "숨기기" : "노출하기"}
                    </AdminButton>
                    <AdminButton
                      $variant="danger"
                      type="button"
                      disabled={busy}
                      onClick={() => setDeleteTarget(row)}
                    >
                      삭제
                    </AdminButton>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </AdminTable>
      </AdminCard>

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
