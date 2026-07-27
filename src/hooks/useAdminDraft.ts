import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  listDrafts,
  removeDraft,
  writeDraft,
  type StoredAdminDraft,
} from "@/services/admin/adminLocalDraft";

interface UseAdminDraftParams<T> {
  scope: string;
  /** 현재 편집 중인 항목 키 — 기존 항목 id 또는 신규 "new". 편집기 미개방 시 null */
  recordKey: string | null;
  isNew: boolean;
  draft: T | null;
  /** 목록·배너에 표기할 라벨 (예: 이름/제목) */
  label?: string;
}

interface UseAdminDraftResult<T> {
  /** 마지막 자동 임시저장 시각 (ms). 없으면 null */
  savedAt: number | null;
  /** 재접속 시 복원 가능한 임시저장본 (가장 최근 것) */
  restorable: StoredAdminDraft<T> | null;
  /**
   * 서버에서 불러온 값·저장 직후의 값 등 "편집 기준점"을 알린다.
   * 기준점과 draft 가 같으면 자동저장하지 않아, 손대지 않은 서버 원본이
   * 임시저장본으로 남지 않는다. 실제 편집이 생기면 그때부터 자동저장된다.
   */
  markBaseline: (baseline: T | null) => void;
  /** 현재 항목의 임시저장본 삭제 (서버 저장 성공·명시적 폐기 시) */
  clearCurrent: () => void;
  /** 복원 배너 닫기. discard=true 면 해당 임시저장본도 삭제 */
  dismissRestorable: (discard?: boolean) => void;
}

export function useAdminDraft<T>({
  scope,
  recordKey,
  isNew,
  draft,
  label,
}: UseAdminDraftParams<T>): UseAdminDraftResult<T> {
  const baselineRef = useRef<string | null>(null);
  const [savedAt, setSavedAt] = useState<number | null>(null);
  const [restorable, setRestorable] = useState<StoredAdminDraft<T> | null>(null);

  // 최초 진입 시 해당 scope 의 임시저장본을 찾아 복원 후보로 노출
  useEffect(() => {
    const [latest] = listDrafts<T>(scope);
    setRestorable(latest ?? null);
  }, [scope]);

  const draftJson = useMemo(() => (draft == null ? null : JSON.stringify(draft)), [draft]);

  // 편집 기준점과 다를 때만 자동 임시저장
  useEffect(() => {
    if (recordKey == null || draft == null || draftJson == null) return;
    if (baselineRef.current == null) return; // 기준점 미설정 → 저장 보류
    if (draftJson === baselineRef.current) return; // 서버 원본 그대로 → 저장 안 함
    const now = Date.now();
    writeDraft<T>({
      scope,
      recordKey,
      isNew,
      label: label ?? "",
      savedAt: now,
      data: draft,
    });
    setSavedAt(now);
  }, [scope, recordKey, isNew, label, draft, draftJson]);

  const markBaseline = useCallback((baseline: T | null) => {
    baselineRef.current = baseline == null ? null : JSON.stringify(baseline);
    setSavedAt(null);
  }, []);

  const clearCurrent = useCallback(() => {
    if (recordKey != null) removeDraft(scope, recordKey);
    setSavedAt(null);
    setRestorable((prev) => (prev && prev.recordKey === recordKey ? null : prev));
  }, [scope, recordKey]);

  const dismissRestorable = useCallback(
    (discard?: boolean) => {
      setRestorable((prev) => {
        if (discard && prev) removeDraft(prev.scope, prev.recordKey);
        return null;
      });
    },
    []
  );

  return { savedAt, restorable, markBaseline, clearCurrent, dismissRestorable };
}
