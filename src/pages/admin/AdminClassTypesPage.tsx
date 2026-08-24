import { useCallback, useEffect, useState } from "react";
import {
  createAdminClassType,
  deleteAdminClassType,
  fetchAdminClassTypes,
  updateAdminClassType,
  type AdminClassType,
} from "@/services/admin/adminApi";
import { toast } from "@/stores/toastStore";
import AdminConfirmModal from "@/components/admin/AdminConfirmModal";
import {
  AdminButton,
  AdminCard,
  AdminError,
  AdminInput,
  AdminTable,
} from "@/components/admin/adminStyles";

/**
 * 전문가가 프로필에서 고르는 "클래스 종류" 목록을 관리합니다.
 *
 * 삭제 대신 "노출/숨김"을 먼저 권합니다. 이미 그 종류를 선택해 둔 전문가 프로필에는 이름이
 * 문자열로 남아 있어서, 목록에서 지워도 그 전문가 화면에서는 계속 보입니다. 숨김은 새로 고르는
 * 것만 막고 기존 값은 건드리지 않습니다.
 */
export default function AdminClassTypesPage() {
  const [rows, setRows] = useState<AdminClassType[]>([]);
  const [newName, setNewName] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingName, setEditingName] = useState("");
  const [deleteTarget, setDeleteTarget] = useState<AdminClassType | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const load = useCallback(async () => {
    try {
      setRows(await fetchAdminClassTypes());
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

  const add = () => {
    const name = newName.trim();
    if (!name) return;
    if (rows.some((r) => r.name === name)) {
      toast.error("이미 있는 종류입니다.");
      return;
    }
    void run(async () => {
      await createAdminClassType(name);
      setNewName("");
    }, `"${name}"을(를) 추가했습니다.`);
  };

  const rename = (row: AdminClassType) => {
    const name = editingName.trim();
    if (!name || name === row.name) {
      setEditingId(null);
      return;
    }
    void run(async () => {
      await updateAdminClassType(row.id, { name });
      setEditingId(null);
    }, "이름을 저장했습니다.");
  };

  const toggleActive = (row: AdminClassType) => {
    void run(
      () => updateAdminClassType(row.id, { name: row.name, active: !row.active }),
      row.active ? `"${row.name}"을(를) 숨겼습니다.` : `"${row.name}"을(를) 노출했습니다.`
    );
  };

  const remove = () => {
    const row = deleteTarget;
    if (!row) return;
    setDeleteTarget(null);
    void run(() => deleteAdminClassType(row.id), `"${row.name}"을(를) 삭제했습니다.`);
  };

  return (
    <div>
      <AdminCard>
        <h2 style={{ margin: "0 0 4px", fontSize: 18 }}>클래스 종류</h2>
        <p style={{ margin: "0 0 14px", color: "#a1a1aa", fontSize: 13 }}>
          전문가가 프로필에서 고르는 목록입니다. 숨기면 새로 고를 수 없게 되고, 이미 선택해 둔
          전문가의 값은 그대로 남습니다.
        </p>

        <div style={{ display: "flex", gap: 8, marginBottom: 18 }}>
          <AdminInput
            value={newName}
            maxLength={60}
            placeholder="예: 차명상"
            onChange={(e) => setNewName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key !== "Enter") return;
              e.preventDefault();
              add();
            }}
          />
          <AdminButton
            $variant="primary"
            type="button"
            disabled={busy || !newName.trim()}
            onClick={add}
          >
            + 추가
          </AdminButton>
        </div>

        {error && <AdminError>{error}</AdminError>}

        <AdminTable>
          <thead>
            <tr>
              <th>이름</th>
              <th>상태</th>
              <th style={{ width: 260 }} />
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 && (
              <tr>
                <td colSpan={3} style={{ color: "#71717a" }}>
                  등록된 클래스 종류가 없습니다.
                </td>
              </tr>
            )}
            {rows.map((row) => (
              <tr key={row.id}>
                <td>
                  {editingId === row.id ? (
                    <AdminInput
                      autoFocus
                      value={editingName}
                      maxLength={60}
                      onChange={(e) => setEditingName(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          rename(row);
                        }
                        if (e.key === "Escape") setEditingId(null);
                      }}
                    />
                  ) : (
                    <span style={{ opacity: row.active ? 1 : 0.5 }}>{row.name}</span>
                  )}
                </td>
                <td style={{ color: row.active ? "#4ade80" : "#a1a1aa" }}>
                  {row.active ? "노출" : "숨김"}
                </td>
                <td>
                  <div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
                    {editingId === row.id ? (
                      <>
                        <AdminButton
                          $variant="primary"
                          type="button"
                          disabled={busy}
                          onClick={() => rename(row)}
                        >
                          저장
                        </AdminButton>
                        <AdminButton
                          $variant="ghost"
                          type="button"
                          onClick={() => setEditingId(null)}
                        >
                          취소
                        </AdminButton>
                      </>
                    ) : (
                      <>
                        <AdminButton
                          $variant="ghost"
                          type="button"
                          onClick={() => {
                            setEditingId(row.id);
                            setEditingName(row.name);
                          }}
                        >
                          이름 수정
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
                      </>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </AdminTable>
      </AdminCard>

      <AdminConfirmModal
        open={deleteTarget !== null}
        title="클래스 종류 삭제"
        message={`"${deleteTarget?.name ?? ""}"을(를) 삭제할까요? 이미 이 종류를 선택해 둔 전문가 프로필에는 이름이 그대로 남습니다. 새로 고르지 못하게 하려는 것이라면 "숨기기"로 충분합니다.`}
        confirmLabel="삭제"
        onConfirm={remove}
        onCancel={() => setDeleteTarget(null)}
      />
    </div>
  );
}
