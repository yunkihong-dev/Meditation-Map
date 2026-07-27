import type { StoredAdminDraft } from "@/services/admin/adminLocalDraft";
import { AdminButton } from "./adminStyles";

function formatSavedAt(ms: number): string {
  try {
    return new Intl.DateTimeFormat("ko-KR", {
      timeZone: "Asia/Seoul",
      dateStyle: "short",
      timeStyle: "short",
    }).format(new Date(ms));
  } catch {
    return "";
  }
}

interface RestoreBannerProps<T> {
  restorable: StoredAdminDraft<T> | null;
  onRestore: (draft: StoredAdminDraft<T>) => void;
  onDismiss: (discard?: boolean) => void;
}

/** 재접속 시 "작성 중이던 임시저장본" 복원 안내 배너 */
export function AdminRestoreBanner<T>({ restorable, onRestore, onDismiss }: RestoreBannerProps<T>) {
  if (!restorable) return null;
  const name = restorable.label?.trim() || (restorable.isNew ? "새 항목" : `번호 ${restorable.recordKey}`);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        flexWrap: "wrap",
        padding: "10px 14px",
        marginBottom: 16,
        borderRadius: 12,
        border: "1px solid #4c3a86",
        background: "rgba(124, 92, 191, 0.16)",
      }}
    >
      <span style={{ fontSize: 13, color: "#e4e4e7" }}>
        작성 중이던 임시저장본이 있어요 —{" "}
        <strong style={{ color: "#fff" }}>{name}</strong>
        <span style={{ color: "#a1a1aa" }}> · {formatSavedAt(restorable.savedAt)}</span>
      </span>
      <div style={{ display: "flex", gap: 8, marginLeft: "auto" }}>
        <AdminButton $variant="primary" type="button" onClick={() => onRestore(restorable)}>
          불러오기
        </AdminButton>
        <AdminButton type="button" onClick={() => onDismiss(true)}>
          삭제
        </AdminButton>
        <AdminButton $variant="ghost" type="button" onClick={() => onDismiss(false)}>
          닫기
        </AdminButton>
      </div>
    </div>
  );
}

/** 편집기 상단의 자동 임시저장 상태 표시 */
export function AdminAutosaveHint({ savedAt }: { savedAt: number | null }) {
  return (
    <span style={{ fontSize: 12, color: savedAt ? "#a78bfa" : "#71717a", whiteSpace: "nowrap" }}>
      {savedAt ? `임시저장됨 · ${formatSavedAt(savedAt)}` : "자동 임시저장"}
    </span>
  );
}
