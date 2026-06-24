import { useCallback, useEffect, useState, type CSSProperties } from "react";
import type { MeditationExpert } from "@/services/meditation/types";
import {
  checkExpertLoginIdAvailability,
  createExpertAccount,
  deleteAdminExpert,
  emptyExpert,
  fetchAdminExperts,
  saveAdminExpert,
  type AdminExpertRow,
} from "@/services/admin/adminApi";
import { toast } from "@/stores/toastStore";
import { KOREA_REGIONS } from "@/data/koreaRegions";
import AdminConfirmModal from "@/components/admin/AdminConfirmModal";
import AdminMarkdownField from "@/components/admin/AdminMarkdownField";
import AdminExpertPreview from "@/components/admin/AdminExpertPreview";
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

const LOGIN_ID_REGEX = /^[A-Za-z0-9._-]{4,64}$/;
const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const CLASS_OPTIONS = ["마음챙김", "아트명상", "숲 명상", "호흡명상", "걷기명상", "소리명상"];

const lines = (value: string) =>
  value
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);

type LoginIdStatus = "idle" | "checking" | "available" | "taken";

interface AccountForm {
  loginId: string;
  email: string;
  password: string;
}

const emptyAccount = (): AccountForm => ({ loginId: "", email: "", password: "" });

const chipStyle = (selected: boolean): CSSProperties => ({
  padding: "6px 12px",
  borderRadius: 999,
  fontSize: 13,
  cursor: "pointer",
  border: `1px solid ${selected ? "#7c5cbf" : "#3f3f46"}`,
  background: selected ? "rgba(124, 92, 191, 0.28)" : "transparent",
  color: selected ? "#fff" : "#a1a1aa",
  transition: "all 0.12s ease",
});

const listTextareaStyle: CSSProperties = {
  minHeight: 84,
  fontFamily: "inherit",
  fontSize: 14,
};

export default function AdminExpertsPage() {
  const [rows, setRows] = useState<AdminExpertRow[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [draft, setDraft] = useState<MeditationExpert | null>(null);
  const [account, setAccount] = useState<AccountForm>(emptyAccount());
  const [loginIdStatus, setLoginIdStatus] = useState<LoginIdStatus>("idle");
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
    setDraft({ ...emptyExpert(), ...structuredClone(row.data) });
    setAccount(emptyAccount());
    setLoginIdStatus("idle");
  };

  const beginNew = () => {
    setEditingId(null);
    setIsNew(true);
    setDraft(emptyExpert());
    setAccount(emptyAccount());
    setLoginIdStatus("idle");
  };

  const patch = (partial: Partial<MeditationExpert>) =>
    setDraft((d) => (d ? { ...d, ...partial } : d));

  const toggleArrayField = (key: "classTypes" | "regionIds", value: string) =>
    setDraft((d) => {
      if (!d) return d;
      const current = d[key];
      return {
        ...d,
        [key]: current.includes(value)
          ? current.filter((x) => x !== value)
          : [...current, value],
      };
    });

  const loginIdValid = LOGIN_ID_REGEX.test(account.loginId);
  const passwordValid = PASSWORD_REGEX.test(account.password);
  const emailValid = EMAIL_REGEX.test(account.email.trim());

  const checkLoginId = async () => {
    if (!loginIdValid) {
      toast.error("아이디는 영문·숫자와 . _ - 만, 4~64자로 입력하세요.");
      return;
    }
    setLoginIdStatus("checking");
    try {
      const available = await checkExpertLoginIdAvailability(account.loginId.trim());
      setLoginIdStatus(available ? "available" : "taken");
      if (!available) toast.error("이미 사용 중인 아이디입니다.");
    } catch (e) {
      setLoginIdStatus("idle");
      toast.error(e instanceof Error ? e.message : "중복 확인 실패");
    }
  };

  const onChangeLoginId = (value: string) => {
    setAccount((a) => ({ ...a, loginId: value }));
    setLoginIdStatus("idle");
  };

  const requestSave = () => {
    if (isNew) {
      if (loginIdStatus !== "available") return toast.error("아이디 중복확인을 해주세요.");
      if (!emailValid) return toast.error("이메일 형식을 확인하세요.");
      if (!passwordValid)
        return toast.error("비밀번호는 8자 이상이며 영문·숫자·특수문자를 모두 포함해야 합니다.");
    }
    if (!draft?.name?.trim()) return toast.error("활동명을 입력하세요.");
    setSaveConfirmOpen(true);
  };

  const performSave = async () => {
    if (!draft) return;
    setError(null);
    try {
      if (isNew) {
        const saved = await createExpertAccount({
          loginId: account.loginId.trim(),
          email: account.email.trim(),
          password: account.password,
          data: draft,
        });
        await load();
        setEditingId(saved.id);
        setIsNew(false);
        setDraft({ ...emptyExpert(), ...saved.data });
        setAccount(emptyAccount());
        setLoginIdStatus("idle");
        toast.success("전문가 계정이 생성되었습니다.");
      } else {
        const saved = await saveAdminExpert(editingId, draft);
        await load();
        setEditingId(saved.id);
        setDraft({ ...emptyExpert(), ...saved.data });
        toast.success("저장되었습니다.");
      }
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "저장 실패");
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
      toast.error(e instanceof Error ? e.message : "삭제 실패");
    }
  };

  const deleteTarget = deleteTargetId ? rows.find((row) => row.id === deleteTargetId) : null;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "minmax(200px, 0.7fr) minmax(360px, 1.3fr) max-content",
        gap: 16,
        alignItems: "start",
      }}
    >
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
                  <div style={{ display: "flex", gap: 6, justifyContent: "flex-end" }}>
                    <AdminButton type="button" onClick={() => select(row)}>
                      수정
                    </AdminButton>
                    <AdminButton $variant="danger" type="button" onClick={() => setDeleteTargetId(row.id)}>
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
          <p style={{ color: "#a1a1aa" }}>항목을 선택하거나 새로 등록하세요.</p>
        ) : (
          <>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
              <p style={{ margin: 0, color: "#71717a", fontSize: 13 }}>
                {!isNew && editingId ? `번호: ${editingId}` : "전문가 계정을 새로 만듭니다."}
              </p>
              <AdminButton $variant="primary" type="button" onClick={requestSave}>
                {isNew ? "계정 생성" : "저장"}
              </AdminButton>
            </div>

            {isNew && (
              <div
                style={{
                  border: "1px solid #27272a",
                  borderRadius: 12,
                  padding: 14,
                  marginBottom: 16,
                  background: "#141417",
                }}
              >
                <h3 style={{ margin: "0 0 10px", fontSize: 14, color: "#e4e4e7" }}>로그인 계정</h3>
                <AdminField>
                  <AdminLabel>아이디</AdminLabel>
                  <div style={{ display: "flex", gap: 8, alignItems: "stretch" }}>
                    <AdminInput
                      value={account.loginId}
                      onChange={(e) => onChangeLoginId(e.target.value)}
                      placeholder="영문·숫자 . _ - (4~64자)"
                      autoComplete="off"
                    />
                    <AdminButton
                      type="button"
                      onClick={checkLoginId}
                      disabled={loginIdStatus === "checking" || !loginIdValid}
                      style={{ whiteSpace: "nowrap" }}
                    >
                      {loginIdStatus === "checking" ? "확인 중…" : "중복확인"}
                    </AdminButton>
                  </div>
                  {loginIdStatus === "available" && (
                    <p style={{ margin: "6px 0 0", fontSize: 12, color: "#34d399" }}>사용 가능한 아이디입니다.</p>
                  )}
                  {loginIdStatus === "taken" && (
                    <p style={{ margin: "6px 0 0", fontSize: 12, color: "#f87171" }}>이미 사용 중인 아이디입니다.</p>
                  )}
                </AdminField>
                <AdminField>
                  <AdminLabel>이메일</AdminLabel>
                  <AdminInput
                    type="email"
                    value={account.email}
                    onChange={(e) => setAccount((a) => ({ ...a, email: e.target.value }))}
                    placeholder="expert@example.com"
                    autoComplete="off"
                  />
                </AdminField>
                <AdminField>
                  <AdminLabel>비밀번호</AdminLabel>
                  <AdminInput
                    type="password"
                    value={account.password}
                    onChange={(e) => setAccount((a) => ({ ...a, password: e.target.value }))}
                    placeholder="8자 이상 · 영문·숫자·특수문자 포함"
                    autoComplete="new-password"
                  />
                  <p
                    style={{
                      margin: "6px 0 0",
                      fontSize: 12,
                      color: account.password ? (passwordValid ? "#34d399" : "#f87171") : "#a1a1aa",
                    }}
                  >
                    8자 이상, 영문·숫자·특수문자를 모두 포함
                  </p>
                </AdminField>
              </div>
            )}

            {/* 프로필 사진 */}
            <AdminImageUpload
              label="프로필 사진"
              value={draft.avatarUrl}
              onChange={(avatarUrl) => patch({ avatarUrl })}
            />

            <AdminField>
              <AdminLabel>활동명</AdminLabel>
              <AdminInput value={draft.name} maxLength={80} onChange={(e) => patch({ name: e.target.value })} />
            </AdminField>

            <AdminMarkdownField
              label="자기소개 (마크다운)"
              value={draft.intro}
              onChange={(intro) => patch({ intro })}
              placeholder="명상을 시작하게 된 계기와 수업 철학을 소개해 주세요."
              minHeight={120}
            />

            <AdminField>
              <AdminLabel>전문 분야 (한 줄에 하나)</AdminLabel>
              <AdminTextarea
                style={listTextareaStyle}
                value={(draft.specialties ?? []).join("\n")}
                onChange={(e) => patch({ specialties: lines(e.target.value) })}
                placeholder={"마음챙김 명상\n스트레스 완화"}
              />
            </AdminField>

            <AdminField>
              <AdminLabel>학위 (한 줄에 하나)</AdminLabel>
              <AdminTextarea
                style={listTextareaStyle}
                value={(draft.degrees ?? []).join("\n")}
                onChange={(e) => patch({ degrees: lines(e.target.value) })}
                placeholder={"○○대학교 상담심리학 석사"}
              />
            </AdminField>

            <AdminField>
              <AdminLabel>자격증·이수 교육과정 (한 줄에 하나)</AdminLabel>
              <AdminTextarea
                style={listTextareaStyle}
                value={(draft.certificates ?? []).join("\n")}
                onChange={(e) => patch({ certificates: lines(e.target.value) })}
              />
            </AdminField>

            <AdminField>
              <AdminLabel>경력 (한 줄에 하나)</AdminLabel>
              <AdminTextarea
                style={listTextareaStyle}
                value={(draft.careers ?? []).join("\n")}
                onChange={(e) => patch({ careers: lines(e.target.value) })}
              />
            </AdminField>

            <AdminField>
              <AdminLabel>클래스 종류</AdminLabel>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {CLASS_OPTIONS.map((item) => (
                  <button
                    key={item}
                    type="button"
                    style={chipStyle(draft.classTypes.includes(item))}
                    onClick={() => toggleArrayField("classTypes", item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </AdminField>

            <AdminField>
              <AdminLabel>활동 지역 ({draft.regionIds.length}개 선택)</AdminLabel>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {KOREA_REGIONS.map((region) => (
                  <button
                    key={region.id}
                    type="button"
                    style={chipStyle(draft.regionIds.includes(region.id))}
                    onClick={() => toggleArrayField("regionIds", region.id)}
                  >
                    {region.name}
                  </button>
                ))}
              </div>
            </AdminField>

            <AdminField>
              <AdminLabel>센터 여부</AdminLabel>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                <button type="button" style={chipStyle(!draft.hasCenter)} onClick={() => patch({ hasCenter: false })}>
                  센터 없음
                </button>
                <button type="button" style={chipStyle(draft.hasCenter)} onClick={() => patch({ hasCenter: true })}>
                  센터 있음
                </button>
              </div>
            </AdminField>

            {draft.hasCenter && (
              <>
                <AdminField>
                  <AdminLabel>센터명</AdminLabel>
                  <AdminInput
                    value={draft.centerSummary ?? ""}
                    onChange={(e) => patch({ centerSummary: e.target.value })}
                  />
                </AdminField>
                <AdminField>
                  <AdminLabel>센터 위치</AdminLabel>
                  <AdminInput
                    value={draft.centerAddress ?? ""}
                    onChange={(e) => patch({ centerAddress: e.target.value })}
                  />
                </AdminField>
                <AdminField>
                  <AdminLabel>사업자등록번호</AdminLabel>
                  <AdminInput
                    inputMode="numeric"
                    value={draft.businessRegistrationNumber ?? ""}
                    onChange={(e) =>
                      patch({ businessRegistrationNumber: e.target.value.replace(/[^\d-]/g, "") })
                    }
                  />
                </AdminField>
                <AdminField>
                  <AdminLabel>개업일자</AdminLabel>
                  <AdminInput
                    type="date"
                    value={draft.businessOpeningDate ?? ""}
                    onChange={(e) => patch({ businessOpeningDate: e.target.value })}
                  />
                </AdminField>
              </>
            )}
          </>
        )}
      </AdminCard>

      <AdminExpertPreview expert={draft} />

      <AdminConfirmModal
        open={saveConfirmOpen}
        title={isNew ? "계정 생성" : "저장"}
        message={isNew ? "전문가 계정을 생성하시겠습니까?" : "저장하시겠습니까?"}
        cancelLabel="취소"
        confirmLabel={isNew ? "생성" : "저장"}
        onCancel={() => setSaveConfirmOpen(false)}
        onConfirm={() => {
          setSaveConfirmOpen(false);
          void performSave();
        }}
      />

      <AdminConfirmModal
        open={deleteTargetId !== null}
        title="삭제"
        message={deleteTarget ? `「${deleteTarget.name || deleteTarget.id}」을(를) 삭제할까요?` : "삭제할까요?"}
        cancelLabel="취소"
        confirmLabel="삭제"
        onCancel={() => setDeleteTargetId(null)}
        onConfirm={() => void performDelete()}
      />
    </div>
  );
}
