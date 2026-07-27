/**
 * 어드민 편집 화면의 "임시저장" — 서버 저장과 별개로, 작성 중인 내용을
 * 브라우저 localStorage 에 자동 보관한다. 새로고침·재접속 후 복원 배너로 되살린다.
 *
 * - scope: "places" | "experts" | "notices"
 * - recordKey: 기존 항목은 id, 신규 작성은 "new"
 */

const VERSION = "v1";
const PREFIX = `admin-draft:${VERSION}:`;

export interface StoredAdminDraft<T> {
  scope: string;
  recordKey: string;
  isNew: boolean;
  /** 항목 목록·배너 표기용 라벨 */
  label: string;
  savedAt: number;
  data: T;
}

const keyOf = (scope: string, recordKey: string) => `${PREFIX}${scope}:${recordKey}`;

export function writeDraft<T>(draft: StoredAdminDraft<T>): void {
  try {
    localStorage.setItem(keyOf(draft.scope, draft.recordKey), JSON.stringify(draft));
  } catch {
    // 용량 초과 등은 무시 — 임시저장 실패가 편집을 막지 않도록
  }
}

export function readDraft<T>(scope: string, recordKey: string): StoredAdminDraft<T> | null {
  try {
    const raw = localStorage.getItem(keyOf(scope, recordKey));
    return raw ? (JSON.parse(raw) as StoredAdminDraft<T>) : null;
  } catch {
    return null;
  }
}

export function removeDraft(scope: string, recordKey: string): void {
  try {
    localStorage.removeItem(keyOf(scope, recordKey));
  } catch {
    // 무시
  }
}

/** 해당 scope 의 임시저장본을 최근 저장 순으로 반환 */
export function listDrafts<T>(scope: string): StoredAdminDraft<T>[] {
  const prefix = `${PREFIX}${scope}:`;
  const drafts: StoredAdminDraft<T>[] = [];
  try {
    for (let i = 0; i < localStorage.length; i += 1) {
      const key = localStorage.key(i);
      if (!key || !key.startsWith(prefix)) continue;
      const raw = localStorage.getItem(key);
      if (!raw) continue;
      try {
        drafts.push(JSON.parse(raw) as StoredAdminDraft<T>);
      } catch {
        // 손상된 항목은 건너뜀
      }
    }
  } catch {
    // localStorage 접근 불가 환경
  }
  return drafts.sort((a, b) => b.savedAt - a.savedAt);
}
