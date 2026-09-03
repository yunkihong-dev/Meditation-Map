import { useCallback, useEffect, useMemo, useState } from "react";
import {
  deleteAdminBanner,
  fetchAdminBanners,
  saveAdminBanner,
  type AdminBannerRow,
} from "@/services/admin/adminApi";
import {
  bannerStatus,
  draftFromPayload,
  emptyBannerDraft,
  formatPeriod,
  payloadFromDraft,
  todayKst,
  type BannerDraft,
  type BannerStatus,
} from "@/services/admin/bannerAdminFields";
import { AdminImageUpload } from "@/components/admin/AdminImageUpload";
import AdminConfirmModal from "@/components/admin/AdminConfirmModal";
import { toast } from "@/stores/toastStore";
import {
  AdminButton,
  AdminCard,
  AdminError,
  AdminField,
  AdminInput,
  AdminLabel,
  AdminTable,
} from "@/components/admin/adminStyles";

/** 상태마다 색을 달리해 목록에서 한눈에 구분되게 합니다. */
const STATUS_COLOR: Record<BannerStatus, string> = {
  게시중: "#34d399",
  예정: "#a78bfa",
  종료: "#71717a",
  꺼짐: "#f87171",
  "이미지 없음": "#f87171",
};

type Row = AdminBannerRow & { draft: BannerDraft };

export default function AdminBannersPage() {
  const [rows, setRows] = useState<Row[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [draft, setDraft] = useState<BannerDraft | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [saveConfirmOpen, setSaveConfirmOpen] = useState(false);
  const [deleteTargetId, setDeleteTargetId] = useState<string | null>(null);

  const today = todayKst();

  const load = useCallback(async () => {
    try {
      const fetched = await fetchAdminBanners();
      setRows(
        fetched
          .map((row) => ({ ...row, draft: draftFromPayload(row.payload) }))
          .sort((a, b) => a.draft.sortOrder - b.draft.sortOrder)
      );
    } catch (e) {
      setError(e instanceof Error ? e.message : "로드 실패");
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  const nextSortOrder = useMemo(
    () => rows.reduce((max, row) => Math.max(max, row.draft.sortOrder), -1) + 1,
    [rows]
  );

  const beginNew = () => {
    setEditingId(null);
    setIsNew(true);
    setDraft(emptyBannerDraft(nextSortOrder));
  };

  const selectRow = (row: Row) => {
    setEditingId(row.id);
    setIsNew(false);
    setDraft(row.draft);
  };

  const performSave = async () => {
    if (!draft) return;
    if (!draft.imageUrl.trim()) {
      const message = "배너 이미지를 올려 주세요.";
      setError(message);
      toast.error(message);
      return;
    }
    if (draft.startsAt && draft.endsAt && draft.startsAt > draft.endsAt) {
      const message = "게시 종료일이 시작일보다 앞설 수 없습니다.";
      setError(message);
      toast.error(message);
      return;
    }
    setError(null);
    setBusy(true);
    try {
      const saved = await saveAdminBanner(isNew ? null : editingId, payloadFromDraft(draft));
      await load();
      setEditingId(saved.id);
      setIsNew(false);
      setDraft(draftFromPayload(saved.payload));
      toast.success(isNew ? "등록되었습니다." : "저장되었습니다.");
    } catch (e) {
      const message = e instanceof Error ? e.message : "저장 실패";
      setError(message);
      toast.error(message);
    } finally {
      setBusy(false);
    }
  };

  const performDelete = async () => {
    if (!deleteTargetId) return;
    const id = deleteTargetId;
    setDeleteTargetId(null);
    try {
      await deleteAdminBanner(id);
      if (editingId === id) {
        setEditingId(null);
        setIsNew(false);
        setDraft(null);
      }
      await load();
      toast.success("삭제되었습니다.");
    } catch (e) {
      const message = e instanceof Error ? e.message : "삭제 실패";
      setError(message);
      toast.error(message);
    }
  };

  /**
   * 위·아래로 한 칸 옮깁니다. 자리를 바꾼 뒤 순서를 0,1,2… 로 다시 매겨
   * 값이 겹치거나 벌어지는 일이 없게 합니다. 바뀐 줄만 저장합니다.
   */
  const move = async (index: number, delta: number) => {
    const target = index + delta;
    if (target < 0 || target >= rows.length) return;

    const reordered = [...rows];
    [reordered[index], reordered[target]] = [reordered[target], reordered[index]];

    const changed = reordered
      .map((row, i) => ({ row, sortOrder: i }))
      .filter(({ row, sortOrder }) => row.draft.sortOrder !== sortOrder);
    if (changed.length === 0) return;

    setBusy(true);
    try {
      await Promise.all(
        changed.map(({ row, sortOrder }) =>
          saveAdminBanner(row.id, payloadFromDraft({ ...row.draft, sortOrder }))
        )
      );
      await load();
      // 편집 중이던 배너의 순서 값도 화면과 맞춰 둡니다.
      const moved = changed.find(({ row }) => row.id === editingId);
      if (moved && draft) setDraft({ ...draft, sortOrder: moved.sortOrder });
    } catch (e) {
      const message = e instanceof Error ? e.message : "순서 변경 실패";
      setError(message);
      toast.error(message);
    } finally {
      setBusy(false);
    }
  };

  const deleteTarget = deleteTargetId ? rows.find((row) => row.id === deleteTargetId) : null;

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 16 }}>
      <AdminCard>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
          <h2 style={{ margin: 0 }}>홈 배너</h2>
          <AdminButton $variant="primary" type="button" onClick={beginNew}>
            + 등록
          </AdminButton>
        </div>
        <p style={{ margin: "0 0 12px", color: "#71717a", fontSize: 13 }}>
          홈 화면의 바로가기와 “오늘의 마인드풀 스팟” 사이에 위에서부터 순서대로 보입니다.
        </p>
        {error && <AdminError>{error}</AdminError>}
        <AdminTable>
          <thead>
            <tr>
              <th style={{ width: 72 }}>순서</th>
              <th style={{ width: 96 }}>미리보기</th>
              <th>문구 · 게시 기간</th>
              <th style={{ width: 80 }}>상태</th>
              <th style={{ width: 64 }} />
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 && (
              <tr>
                <td colSpan={5} style={{ color: "#a1a1aa", padding: "20px 8px" }}>
                  등록된 배너가 없습니다. 배너가 하나도 없으면 홈에서 그 자리는 사라집니다.
                </td>
              </tr>
            )}
            {rows.map((row, index) => {
              const status = bannerStatus(row.draft, today);
              return (
                <tr key={row.id} style={{ opacity: editingId === row.id ? 1 : 0.9 }}>
                  <td>
                    <div style={{ display: "flex", gap: 4 }}>
                      <AdminButton
                        type="button"
                        disabled={index === 0 || busy}
                        onClick={() => void move(index, -1)}
                        aria-label="위로"
                      >
                        ↑
                      </AdminButton>
                      <AdminButton
                        type="button"
                        disabled={index === rows.length - 1 || busy}
                        onClick={() => void move(index, 1)}
                        aria-label="아래로"
                      >
                        ↓
                      </AdminButton>
                    </div>
                  </td>
                  <td>
                    {row.draft.imageUrl ? (
                      <img
                        src={row.draft.imageUrl}
                        alt=""
                        style={{
                          width: 80,
                          height: 35,
                          objectFit: "cover",
                          borderRadius: 6,
                          display: "block",
                        }}
                      />
                    ) : (
                      <span style={{ color: "#71717a", fontSize: 12 }}>없음</span>
                    )}
                  </td>
                  <td>
                    <button
                      type="button"
                      style={{
                        background: "none",
                        border: "none",
                        color: "#fff",
                        cursor: "pointer",
                        textAlign: "left",
                        padding: 0,
                      }}
                      onClick={() => selectRow(row)}
                    >
                      <span style={{ display: "block" }}>{row.draft.alt || `배너 ${row.id}`}</span>
                      <span style={{ display: "block", color: "#71717a", fontSize: 12, marginTop: 2 }}>
                        {formatPeriod(row.draft)}
                      </span>
                    </button>
                  </td>
                  <td style={{ color: STATUS_COLOR[status], fontSize: 13 }}>{status}</td>
                  <td>
                    <AdminButton
                      $variant="danger"
                      type="button"
                      onClick={() => setDeleteTargetId(row.id)}
                    >
                      삭제
                    </AdminButton>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </AdminTable>
      </AdminCard>

      <AdminCard>
        {draft ? (
          <>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 12,
              }}
            >
              <p style={{ margin: 0, color: "#71717a", fontSize: 13 }}>
                {isNew ? "저장 시 번호가 자동 부여됩니다." : `번호: ${editingId}`}
              </p>
              <AdminButton
                $variant="primary"
                type="button"
                disabled={busy}
                onClick={() => setSaveConfirmOpen(true)}
              >
                저장
              </AdminButton>
            </div>

            <AdminImageUpload
              label="배너 이미지 (가로가 긴 이미지, 16:7 권장)"
              value={draft.imageUrl}
              onChange={(url) => setDraft({ ...draft, imageUrl: url })}
            />

            <AdminField>
              <AdminLabel>대체 텍스트</AdminLabel>
              <AdminInput
                value={draft.alt}
                onChange={(e) => setDraft({ ...draft, alt: e.target.value })}
                placeholder="배너에 적힌 문구를 그대로"
              />
              <p style={{ margin: "6px 0 0", color: "#71717a", fontSize: 12 }}>
                글자가 그림 안에 있어서, 이게 없으면 화면 낭독기 사용자에게는 빈 배너입니다.
              </p>
            </AdminField>

            <AdminField>
              <AdminLabel>클릭 시 이동 (선택)</AdminLabel>
              <AdminInput
                value={draft.href}
                onChange={(e) => setDraft({ ...draft, href: e.target.value })}
                placeholder="/meditation/map 또는 https://example.com"
              />
              <p style={{ margin: "6px 0 0", color: "#71717a", fontSize: 12 }}>
                비우면 눌러도 아무 일도 일어나지 않습니다. https 주소는 새 창으로 열립니다.
              </p>
            </AdminField>

            <AdminField>
              <AdminLabel>게시 시작 (선택)</AdminLabel>
              <AdminInput
                type="date"
                value={draft.startsAt}
                onChange={(e) => setDraft({ ...draft, startsAt: e.target.value })}
              />
              <p style={{ margin: "6px 0 0", color: "#71717a", fontSize: 12 }}>
                비우면 저장 즉시 보입니다. 이 날부터 보입니다.
              </p>
            </AdminField>

            <AdminField>
              <AdminLabel>게시 종료 (선택)</AdminLabel>
              <AdminInput
                type="date"
                value={draft.endsAt}
                onChange={(e) => setDraft({ ...draft, endsAt: e.target.value })}
              />
              <p style={{ margin: "6px 0 0", color: "#71717a", fontSize: 12 }}>
                비우면 직접 내릴 때까지 계속 보입니다. 이 날까지 보입니다.
              </p>
            </AdminField>

            <AdminField>
              <AdminLabel>순서</AdminLabel>
              <AdminInput
                type="number"
                value={draft.sortOrder}
                onChange={(e) =>
                  setDraft({ ...draft, sortOrder: Number(e.target.value) || 0 })
                }
              />
              <p style={{ margin: "6px 0 0", color: "#71717a", fontSize: 12 }}>
                작을수록 앞. 왼쪽 목록의 ↑↓ 로 옮기면 이 값이 자동으로 정리됩니다.
              </p>
            </AdminField>

            <AdminField>
              <AdminLabel>게시 여부</AdminLabel>
              <label style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer" }}>
                <input
                  type="checkbox"
                  checked={draft.enabled}
                  onChange={(e) => setDraft({ ...draft, enabled: e.target.checked })}
                />
                <span style={{ fontSize: 14 }}>
                  {draft.enabled ? "게시함" : "내림 (기간과 상관없이 숨깁니다)"}
                </span>
              </label>
            </AdminField>

            <p style={{ margin: "16px 0 0", color: "#a1a1aa", fontSize: 13 }}>
              지금 상태:{" "}
              <strong style={{ color: STATUS_COLOR[bannerStatus(draft, today)] }}>
                {bannerStatus(draft, today)}
              </strong>
            </p>
            {!isNew && (
              <p style={{ margin: "6px 0 0", color: "#71717a", fontSize: 12 }}>
                등록 {String(rows.find((r) => r.id === editingId)?.payload.createdAt ?? "-").slice(0, 16)}
                {" · "}
                최근 수정 {String(rows.find((r) => r.id === editingId)?.payload.updatedAt ?? "-").slice(0, 16)}
              </p>
            )}
          </>
        ) : (
          <p style={{ color: "#a1a1aa" }}>배너를 선택하거나 새로 등록하세요.</p>
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
            ? `「${deleteTarget.draft.alt || `배너 ${deleteTarget.id}`}」을(를) 삭제할까요?`
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
