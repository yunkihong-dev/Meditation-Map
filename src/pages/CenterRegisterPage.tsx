import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Icon from "@/components/common/Icon";
import { searchAddressCandidates, type GeocodeCandidate } from "@/services/meditation/naverGeocode";
import { getRegionById } from "@/services/meditation/meditationService";
import type { MeditationPlace } from "@/services/meditation/types";
import { useCatalogStore } from "@/stores/catalogStore";
import { getMeditationApiBaseUrl } from "@/services/meditation/repositories/apiConfig";
import { uploadAdminImage } from "@/services/admin/adminApi";
import { apiFetch, useAuthStore } from "@/stores/authStore";
import { toast } from "@/stores/toastStore";

/*
 * 명상센터 등록 — 프론트 시안(명상센터등록(모바일))을 따릅니다.
 *
 * 흐름은 "이미 있는 곳인지 먼저 확인" 입니다. 같은 센터가 두 번 등록되면 사용자에게는
 * 같은 곳이 둘로 보이고, 정리하는 쪽이 훨씬 큰 일이 됩니다. 그래서 찾기부터 시작해
 * 있으면 소유권을 주장하고, 없을 때만 새로 등록하게 둡니다.
 *
 * 시안에 있던 것 중 여기 없는 것:
 *  - 상단 앱바("Mindful Path" + 닫기): 이 앱은 하위 화면에 상단바를 두지 않습니다.
 *  - PC 사이드바("Management")와 "PC 환경 권장" 안내: 앱은 모바일 한 벌뿐입니다.
 *  - 화면 아래 고정 액션바: 떠 있는 탭바와 자리가 겹칩니다. 버튼은 폼 끝에 둡니다.
 */

const MAX_PHOTOS = 5;
const STEPS = ["기본 정보", "공간 사진", "확인 및 신청"] as const;

const Page = styled.div`
  max-width: 480px;
  margin: 0 auto;
  padding: 24px 4px 24px;
  color: ${({ theme }) => theme.colors.text900};
`;

/* ── 진행 표시 ─────────────────────────────────────────── */
const Progress = styled.div`
  margin-bottom: 32px;
`;

const ProgressLabels = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 1.4rem;
  font-weight: 500;
  letter-spacing: 0.02em;
`;

const StepCount = styled.span`
  color: ${({ theme }) => theme.colors.primary600};
`;

const StepName = styled.span`
  color: ${({ theme }) => theme.colors.warmGray};
`;

const ProgressTrack = styled.div`
  height: 8px;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme }) => theme.colors.surfaceHigh};
  overflow: hidden;
`;

const ProgressFill = styled.div<{ $ratio: number }>`
  width: ${({ $ratio }) => Math.round($ratio * 100)}%;
  height: 100%;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme }) => theme.colors.primary600};
  transition: width 0.5s ease-in-out;
`;

/* ── 제목 ──────────────────────────────────────────────── */
const Title = styled.h1`
  margin: 0 0 8px;
  font-size: 2.8rem;
  font-weight: 600;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.charcoal};
`;

const Lead = styled.p`
  margin: 0 0 24px;
  font-size: 1.6rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.warmGray};
`;

/* ── 폼 ────────────────────────────────────────────────── */
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Field = styled.div``;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 1.4rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  color: ${({ theme }) => theme.colors.charcoal};
`;

const LabelRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const Counter = styled.span`
  font-size: 1.4rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary600};
`;

/** 시안의 입력 — 테두리 없이 흰 면, 왼쪽에 아이콘, 포커스는 은은한 링. */
const InputWrap = styled.div`
  position: relative;

  /* 입력 왼쪽에 얹히는 시안 아이콘 */
  > .material-symbols-outlined {
    position: absolute;
    left: 14px;
    top: 50%;
    transform: translateY(-50%);
    color: ${({ theme }) => theme.colors.outline};
    pointer-events: none;
  }
`;

const Input = styled.input<{ $hasIcon?: boolean }>`
  width: 100%;
  padding: 14px 16px;
  padding-left: ${({ $hasIcon }) => ($hasIcon ? "44px" : "16px")};
  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 4px 20px rgba(107, 70, 193, 0.04);
  font-size: 1.6rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.charcoal};
  outline: none;
  transition: box-shadow 0.2s ease, border-color 0.2s ease;

  &::placeholder {
    color: ${({ theme }) => theme.colors.border200};
  }

  &:focus {
    border-color: rgba(107, 70, 193, 0.35);
    box-shadow: 0 0 0 3px rgba(107, 70, 193, 0.14);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 120px;
  resize: vertical;
  padding: 14px 16px;
  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 4px 20px rgba(107, 70, 193, 0.04);
  font: inherit;
  font-size: 1.6rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.charcoal};
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.border200};
  }

  &:focus {
    border-color: rgba(107, 70, 193, 0.35);
    box-shadow: 0 0 0 3px rgba(107, 70, 193, 0.14);
  }
`;

const SearchRow = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 12px;

  ${InputWrap} {
    flex: 1;
    min-width: 0;
  }
`;

const SearchButton = styled.button`
  flex-shrink: 0;
  width: 52px;
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.primary600};
  color: ${({ theme }) => theme.colors.white};
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover:not(:disabled) {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
`;

/** 주소 검색 결과 — 시안의 지도 미리보기 자리에 실제 후보를 보여줍니다. */
const Candidates = styled.ul`
  list-style: none;
  margin: 0 0 12px;
  padding: 6px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.white};
  border: ${({ theme }) => theme.hairline};
  box-shadow: ${({ theme }) => theme.shadow.card};
`;

const CandidateButton = styled.button<{ $selected: boolean }>`
  width: 100%;
  padding: 12px 14px;
  text-align: left;
  border: none;
  border-radius: ${({ theme }) => theme.radii.sm};
  background: ${({ theme, $selected }) =>
    $selected ? theme.colors.secondaryContainer : "transparent"};
  color: ${({ theme }) => theme.colors.charcoal};
  font-size: 1.4rem;
  line-height: 1.5;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.surfaceLow};
  }
`;

const CandidateHint = styled.span`
  display: block;
  margin-top: 2px;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.outline};
`;

/* ── 센터 찾기 ─────────────────────────────────────────── */
const ResultList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ResultCard = styled.li`
  padding: 16px;
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.white};
  border: ${({ theme }) => theme.hairline};
  box-shadow: ${({ theme }) => theme.shadow.card};
`;

const ResultName = styled.p`
  margin: 0 0 4px;
  font-size: 1.7rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.charcoal};
`;

const ResultAddress = styled.p`
  margin: 0 0 12px;
  font-size: 1.3rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.warmGray};
`;

const ClaimButton = styled.button`
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.secondaryContainer};
  color: ${({ theme }) => theme.colors.primary700};
  font-size: 1.4rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary600};
    color: ${({ theme }) => theme.colors.white};
  }
`;

/** 찾는 곳이 없을 때만 신규 등록으로 넘어갑니다. */
const NoMatch = styled.div`
  margin-top: 20px;
  padding: 20px;
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.surfaceLow};
  text-align: center;

  p {
    margin: 0 0 12px;
    font-size: 1.4rem;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.warmGray};
  }
`;

/** 소유권 요청 대상 — 어느 센터를 주장하는지 계속 보이게 둡니다. */
const ClaimTarget = styled.div`
  padding: 16px;
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.secondaryContainer};
  margin-bottom: 4px;

  span {
    display: block;
    font-size: 1.2rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.primary700};
    margin-bottom: 4px;
  }

  strong {
    display: block;
    font-size: 1.7rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.charcoal};
  }

  em {
    display: block;
    margin-top: 4px;
    font-style: normal;
    font-size: 1.3rem;
    color: ${({ theme }) => theme.colors.onSecondaryContainer};
  }
`;

/* ── 사진 ──────────────────────────────────────────────── */
const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
`;

const AddPhoto = styled.label`
  aspect-ratio: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  border: 2px dashed ${({ theme }) => theme.colors.border200};
  border-radius: ${({ theme }) => theme.radii.md};
  background: rgba(255, 255, 255, 0.5);
  color: ${({ theme }) => theme.colors.outline};
  font-size: 1.2rem;
  font-weight: 500;
  cursor: pointer;
  transition: border-color 0.2s ease, color 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary600};
    color: ${({ theme }) => theme.colors.primary600};
  }

  input {
    display: none;
  }
`;

const PhotoSlot = styled.div<{ $empty?: boolean }>`
  position: relative;
  aspect-ratio: 1;
  border-radius: ${({ theme }) => theme.radii.md};
  overflow: hidden;
  background: ${({ theme, $empty }) =>
    $empty ? "rgba(241, 244, 246, 0.5)" : theme.colors.surfaceVariant};
  display: grid;
  place-items: center;
  color: ${({ theme }) => theme.colors.border200};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const RemovePhoto = styled.button`
  position: absolute;
  top: 6px;
  right: 6px;
  width: 26px;
  height: 26px;
  padding: 0;
  border: none;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: rgba(0, 0, 0, 0.55);
  color: ${({ theme }) => theme.colors.white};
  display: grid;
  place-items: center;
  cursor: pointer;
`;

const Hint = styled.p`
  margin: 8px 0 0;
  font-size: 1.2rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.warmGray};
`;

/* ── 확인 단계 ─────────────────────────────────────────── */
const Summary = styled.dl`
  margin: 0;
  padding: 20px;
  border-radius: ${({ theme }) => theme.radii.lg};
  background: ${({ theme }) => theme.colors.white};
  border: ${({ theme }) => theme.hairline};
  box-shadow: ${({ theme }) => theme.shadow.card};

  div + div {
    margin-top: 16px;
    padding-top: 16px;
    border-top: 1px solid ${({ theme }) => theme.colors.surfaceVariant};
  }

  dt {
    margin-bottom: 4px;
    font-size: 1.2rem;
    font-weight: 500;
    letter-spacing: 0.02em;
    color: ${({ theme }) => theme.colors.outline};
  }

  dd {
    margin: 0;
    font-size: 1.6rem;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.charcoal};
    word-break: break-all;
  }
`;

const Notice = styled.div`
  display: flex;
  gap: 12px;
  padding: 16px;
  border-radius: ${({ theme }) => theme.radii.md};
  background: rgba(234, 217, 254, 0.5);
  border: 1px solid ${({ theme }) => theme.colors.secondaryContainer};

  > .material-symbols-outlined {
    flex-shrink: 0;
    margin-top: 2px;
    color: ${({ theme }) => theme.colors.primary500};
  }

  p {
    margin: 0;
    font-size: 1.4rem;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.warmGray};
  }
`;

/* ── 버튼 ──────────────────────────────────────────────── */
const Actions = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 8px;
`;

const PrimaryButton = styled.button`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px;
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.primary600};
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.6rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.shadow.press};
  transition: opacity 0.2s ease;

  &:hover:not(:disabled) {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    box-shadow: none;
  }
`;

const GhostButton = styled.button`
  flex-shrink: 0;
  padding: 16px 24px;
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.secondaryContainer};
  color: ${({ theme }) => theme.colors.primary700};
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    opacity: 0.85;
  }
`;

/* ── 신청 완료 ─────────────────────────────────────────── */
const Done = styled.div`
  padding: 48px 24px;
  text-align: center;
  border-radius: ${({ theme }) => theme.radii.lg};
  background: ${({ theme }) => theme.colors.white};
  border: ${({ theme }) => theme.hairline};
  box-shadow: ${({ theme }) => theme.shadow.card};
`;

const DoneIcon = styled.div`
  width: 72px;
  height: 72px;
  margin: 0 auto 20px;
  display: grid;
  place-items: center;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme }) => theme.colors.primary100};
  color: ${({ theme }) => theme.colors.primary600};
`;

const CenterRegisterPage = () => {
  const navigate = useNavigate();
  const isAuthed = useAuthStore((s) => !!s.accessToken);
  const sessionEmail = useAuthStore((s) => s.email);

  /**
   * search — 이미 있는 곳인지 먼저 찾습니다 (기본 시작점)
   * claim  — 찾은 곳이 내 센터라고 주장
   * create — 없을 때만 새로 등록
   */
  const [mode, setMode] = useState<"search" | "claim" | "create">("search");
  const [centerQuery, setCenterQuery] = useState("");
  const [claimTarget, setClaimTarget] = useState<MeditationPlace | null>(null);
  const places = useCatalogStore((s) => s.places);

  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [submittedKind, setSubmittedKind] = useState<"claim" | "create">("create");
  const [busy, setBusy] = useState(false);

  const [name, setName] = useState("");
  const [bizNumber, setBizNumber] = useState("");
  const [addressQuery, setAddressQuery] = useState("");
  const [detailAddress, setDetailAddress] = useState("");
  const [candidates, setCandidates] = useState<GeocodeCandidate[]>([]);
  const [picked, setPicked] = useState<GeocodeCandidate | null>(null);
  const [searching, setSearching] = useState(false);
  const [photos, setPhotos] = useState<string[]>([]);
  const [uploading, setUploading] = useState(false);
  const [intro, setIntro] = useState("");
  const [contact, setContact] = useState(sessionEmail ?? "");

  const fullAddress = useMemo(
    () => [picked?.address ?? addressQuery.trim(), detailAddress.trim()].filter(Boolean).join(" "),
    [picked, addressQuery, detailAddress]
  );

  /** 이름·주소로 훑습니다. 목록이 이미 손에 있어 서버를 다시 부르지 않습니다. */
  const matches = useMemo(() => {
    const q = centerQuery.trim().toLowerCase();
    if (q.length === 0) return [];
    return places
      .filter(
        (place) =>
          place.name.toLowerCase().includes(q) ||
          (place.address ?? "").toLowerCase().includes(q)
      )
      .slice(0, 8);
  }, [centerQuery, places]);

  const startClaim = (place: MeditationPlace) => {
    setClaimTarget(place);
    setBizNumber("");
    setMode("claim");
  };

  /** 찾은 곳이 없어 새로 등록할 때 — 검색어를 센터명 첫 값으로 물려 줍니다. */
  const startCreate = () => {
    setName(centerQuery.trim());
    setStep(0);
    setMode("create");
  };

  const backToSearch = () => {
    setClaimTarget(null);
    setMode("search");
  };

  const canSubmitClaim =
    bizNumber.trim().length > 0 && contact.trim().length > 0 && claimTarget != null;

  const canGoNext =
    step === 0
      ? name.trim().length > 0 && bizNumber.trim().length > 0 && fullAddress.length > 0
      : step === 1
        ? true
        : contact.trim().length > 0;

  const handleAddressSearch = async () => {
    const query = addressQuery.trim();
    if (!query) return;
    setSearching(true);
    try {
      const found = await searchAddressCandidates(query);
      setCandidates(found);
      if (found.length === 0) toast.info("검색된 주소가 없어요. 다르게 적어 보세요.");
    } catch {
      toast.error("주소를 찾지 못했어요. 잠시 후 다시 시도해 주세요.");
    } finally {
      setSearching(false);
    }
  };

  const handleAddPhotos = async (files: FileList | null) => {
    if (!files || files.length === 0) return;
    if (!isAuthed) {
      toast.error("사진을 올리려면 로그인이 필요해요.");
      return;
    }
    const room = MAX_PHOTOS - photos.length;
    if (room <= 0) return;
    setUploading(true);
    try {
      const uploaded: string[] = [];
      for (const file of Array.from(files).slice(0, room)) {
        uploaded.push(await uploadAdminImage(file));
      }
      setPhotos((prev) => [...prev, ...uploaded].slice(0, MAX_PHOTOS));
    } catch {
      toast.error("사진 업로드에 실패했어요.");
    } finally {
      setUploading(false);
    }
  };

  /**
   * 접수 창구. 등록도 소유권 요청도 전용 API 가 아직 없어 1:1 문의로 보냅니다.
   * 담당자가 제목만 보고 구분할 수 있도록 말머리를 다르게 답니다.
   */
  const send = async (subject: string, body: string, kind: "claim" | "create") => {
    if (!getMeditationApiBaseUrl()) {
      toast.error("지금은 신청할 수 없어요. 잠시 후 다시 시도해 주세요.");
      return;
    }
    setBusy(true);
    try {
      const res = await apiFetch("/inquiries", {
        method: "POST",
        body: JSON.stringify({ email: contact.trim(), subject, body }),
      });
      if (!res.ok) {
        toast.error("신청에 실패했어요. 잠시 후 다시 시도해 주세요.");
        return;
      }
      setSubmittedKind(kind);
      setSubmitted(true);
    } catch {
      toast.error("신청에 실패했어요. 잠시 후 다시 시도해 주세요.");
    } finally {
      setBusy(false);
    }
  };

  const handleClaim = () => {
    if (!claimTarget) return;
    const region = getRegionById(claimTarget.regionId);
    void send(
      `[명상센터 소유권 요청] ${claimTarget.name}`,
      [
        `센터 번호: ${claimTarget.id}`,
        `센터명: ${claimTarget.name}`,
        `주소: ${claimTarget.address || (region?.name ?? claimTarget.regionId)}`,
        `사업자 등록번호: ${bizNumber.trim()}`,
        `회신 이메일: ${contact.trim()}`,
      ].join("\n"),
      "claim"
    );
  };

  const handleSubmit = () => {
    {
      const body = [
        `센터명: ${name.trim()}`,
        `사업자 등록번호: ${bizNumber.trim()}`,
        `주소: ${fullAddress}`,
        picked ? `좌표: ${picked.lat}, ${picked.lng}` : null,
        photos.length > 0 ? `사진:\n${photos.join("\n")}` : "사진: 없음",
        intro.trim() ? `소개:\n${intro.trim()}` : null,
      ]
        .filter(Boolean)
        .join("\n");

      void send(`[명상센터 등록 신청] ${name.trim()}`, body, "create");
    }
  };

  if (submitted) {
    return (
      <Page>
        <Done>
          <DoneIcon>
            <Icon name="check_circle" filled size={36} />
          </DoneIcon>
          <Title>
            {submittedKind === "claim" ? "소유권 요청이 접수되었어요" : "등록 신청이 접수되었어요"}
          </Title>
          <Lead>
            담당자가 정보를 확인한 뒤 <strong>{contact.trim()}</strong> 으로 결과를 알려드릴게요.
          </Lead>
          <Actions>
            <PrimaryButton type="button" onClick={() => navigate("/")}>
              홈으로
            </PrimaryButton>
          </Actions>
        </Done>
      </Page>
    );
  }

  /* ── 1) 센터 찾기 ─────────────────────────────────── */
  if (mode === "search") {
    return (
      <Page>
        <Title>명상센터 등록</Title>
        <Lead>
          이미 등록된 센터인지 먼저 확인해 주세요. 같은 곳이 두 번 올라가면 이용자에게는 서로 다른
          곳으로 보입니다.
        </Lead>

        <Field>
          <Label htmlFor="center-search">센터 찾기</Label>
          <InputWrap>
            <Icon name="search" size={20} />
            <Input
              id="center-search"
              $hasIcon
              type="text"
              value={centerQuery}
              onChange={(e) => setCenterQuery(e.target.value)}
              placeholder="센터 이름 또는 주소"
            />
          </InputWrap>
        </Field>

        {centerQuery.trim().length > 0 && (
          <div style={{ marginTop: 20 }}>
            {matches.length > 0 && (
              <ResultList>
                {matches.map((place) => {
                  const region = getRegionById(place.regionId);
                  return (
                    <ResultCard key={place.id}>
                      <ResultName>{place.name}</ResultName>
                      <ResultAddress>
                        {place.address || region?.name || place.regionId}
                      </ResultAddress>
                      <ClaimButton type="button" onClick={() => startClaim(place)}>
                        소유권 요청 (내 센터입니다)
                      </ClaimButton>
                    </ResultCard>
                  );
                })}
              </ResultList>
            )}

            <NoMatch>
              <p>
                {matches.length > 0
                  ? "위에 찾으시는 센터가 없나요?"
                  : "검색 결과가 없어요. 아직 등록되지 않은 센터인가요?"}
              </p>
              <PrimaryButton type="button" onClick={startCreate}>
                새로 등록하기
                <Icon name="arrow_forward" size={18} />
              </PrimaryButton>
            </NoMatch>
          </div>
        )}
      </Page>
    );
  }

  /* ── 2) 소유권 요청 ───────────────────────────────── */
  if (mode === "claim") {
    return (
      <Page>
        <Title>소유권 요청</Title>
        <Lead>본인 확인을 마치면 이 센터를 직접 관리할 수 있게 됩니다.</Lead>

        <Form onSubmit={(e) => e.preventDefault()}>
          <ClaimTarget>
            <span>요청하는 센터</span>
            <strong>{claimTarget?.name}</strong>
            <em>
              {claimTarget?.address ||
                getRegionById(claimTarget?.regionId ?? "")?.name ||
                claimTarget?.regionId}
            </em>
          </ClaimTarget>

          <Field>
            <Label htmlFor="claim-biz">사업자 등록번호</Label>
            <InputWrap>
              <Icon name="badge" size={20} />
              <Input
                id="claim-biz"
                $hasIcon
                type="text"
                inputMode="numeric"
                value={bizNumber}
                onChange={(e) => setBizNumber(e.target.value)}
                placeholder="사업자 등록번호 (000-00-00000)"
              />
            </InputWrap>
          </Field>

          <Field>
            <Label htmlFor="claim-contact">회신 받을 이메일</Label>
            <Input
              id="claim-contact"
              type="email"
              autoComplete="email"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="you@example.com"
            />
          </Field>

          <Notice>
            <Icon name="info" size={20} />
            <p>
              담당자가 사업자 정보와 센터가 일치하는지 확인한 뒤 승인합니다. 실제와 다르면 반려될
              수 있어요.
            </p>
          </Notice>

          <Actions>
            <GhostButton type="button" onClick={backToSearch}>
              이전
            </GhostButton>
            <PrimaryButton
              type="button"
              disabled={!canSubmitClaim || busy}
              onClick={handleClaim}
            >
              {busy ? "요청 중…" : "소유권 요청하기"}
            </PrimaryButton>
          </Actions>
        </Form>
      </Page>
    );
  }

  /* ── 3) 신규 등록 ─────────────────────────────────── */
  return (
    <Page>
      <Progress>
        <ProgressLabels>
          <StepCount>
            {STEPS.length}단계 중 {step + 1}단계
          </StepCount>
          <StepName>{STEPS[step]}</StepName>
        </ProgressLabels>
        <ProgressTrack>
          <ProgressFill $ratio={(step + 1) / STEPS.length} />
        </ProgressTrack>
      </Progress>

      <Title>명상센터 등록</Title>
      <Lead>명상센터 정보를 입력하여 등록을 시작하세요.</Lead>

      <Form onSubmit={(e) => e.preventDefault()}>
        {step === 0 && (
          <>
            <Field>
              <Label htmlFor="center-name">센터명</Label>
              <InputWrap>
                <Icon name="storefront" size={20} />
                <Input
                  id="center-name"
                  $hasIcon
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="예: 평온 명상 센터"
                />
              </InputWrap>
            </Field>

            <Field>
              <Label htmlFor="center-biz">사업자 등록번호</Label>
              <InputWrap>
                <Icon name="badge" size={20} />
                <Input
                  id="center-biz"
                  $hasIcon
                  type="text"
                  inputMode="numeric"
                  value={bizNumber}
                  onChange={(e) => setBizNumber(e.target.value)}
                  placeholder="사업자 등록번호 (000-00-00000)"
                />
              </InputWrap>
            </Field>

            <Field>
              <Label htmlFor="center-address">위치 주소</Label>
              <SearchRow>
                <InputWrap>
                  <Icon name="search" size={20} />
                  <Input
                    id="center-address"
                    $hasIcon
                    type="text"
                    value={addressQuery}
                    onChange={(e) => {
                      setAddressQuery(e.target.value);
                      setPicked(null);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        void handleAddressSearch();
                      }
                    }}
                    placeholder="주소 검색"
                  />
                </InputWrap>
                <SearchButton
                  type="button"
                  onClick={() => void handleAddressSearch()}
                  disabled={searching || addressQuery.trim().length === 0}
                  aria-label="주소 검색"
                >
                  <Icon name="search" size={20} />
                </SearchButton>
              </SearchRow>

              {candidates.length > 0 && (
                <Candidates>
                  {candidates.map((candidate) => (
                    <li key={`${candidate.address}-${candidate.lat}-${candidate.lng}`}>
                      <CandidateButton
                        type="button"
                        $selected={picked?.address === candidate.address}
                        onClick={() => setPicked(candidate)}
                      >
                        {candidate.address}
                        {candidate.approximate && (
                          <CandidateHint>대략적인 위치예요. 상세 주소를 함께 적어 주세요.</CandidateHint>
                        )}
                      </CandidateButton>
                    </li>
                  ))}
                </Candidates>
              )}

              <InputWrap>
                <Input
                  type="text"
                  value={detailAddress}
                  onChange={(e) => setDetailAddress(e.target.value)}
                  placeholder="상세 주소 (층, 호수 등)"
                />
              </InputWrap>
            </Field>
          </>
        )}

        {step === 1 && (
          <>
            <Field>
              <LabelRow>
                <Label as="span">공간 사진</Label>
                <Counter>
                  {photos.length}/{MAX_PHOTOS}
                </Counter>
              </LabelRow>
              <PhotoGrid>
                {photos.map((url, index) => (
                  <PhotoSlot key={url}>
                    <img src={url} alt={`공간 사진 ${index + 1}`} />
                    <RemovePhoto
                      type="button"
                      onClick={() => setPhotos((prev) => prev.filter((item) => item !== url))}
                      aria-label={`공간 사진 ${index + 1} 삭제`}
                    >
                      <Icon name="close" size={16} />
                    </RemovePhoto>
                  </PhotoSlot>
                ))}
                {photos.length < MAX_PHOTOS && (
                  <AddPhoto>
                    <Icon name="add_a_photo" size={22} />
                    {uploading ? "올리는 중…" : "사진 추가"}
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      disabled={uploading}
                      onChange={(e) => {
                        void handleAddPhotos(e.target.files);
                        e.target.value = "";
                      }}
                    />
                  </AddPhoto>
                )}
                {Array.from({
                  length: Math.max(0, 3 - photos.length - (photos.length < MAX_PHOTOS ? 1 : 0)),
                }).map((_, index) => (
                  <PhotoSlot key={`empty-${index}`} $empty aria-hidden="true">
                    <Icon name="image" size={22} />
                  </PhotoSlot>
                ))}
              </PhotoGrid>
              <Hint>명상 공간, 입구, 시설 사진을 업로드해 주세요. (최대 {MAX_PHOTOS}장)</Hint>
            </Field>

            <Field>
              <Label htmlFor="center-intro">센터 소개</Label>
              <TextArea
                id="center-intro"
                value={intro}
                onChange={(e) => setIntro(e.target.value)}
                placeholder="어떤 프로그램을 운영하시나요? 공간의 분위기도 함께 알려주세요."
              />
            </Field>
          </>
        )}

        {step === 2 && (
          <>
            <Summary>
              <div>
                <dt>센터명</dt>
                <dd>{name.trim()}</dd>
              </div>
              <div>
                <dt>사업자 등록번호</dt>
                <dd>{bizNumber.trim()}</dd>
              </div>
              <div>
                <dt>주소</dt>
                <dd>{fullAddress}</dd>
              </div>
              <div>
                <dt>공간 사진</dt>
                <dd>{photos.length > 0 ? `${photos.length}장` : "없음"}</dd>
              </div>
              {intro.trim() && (
                <div>
                  <dt>센터 소개</dt>
                  <dd>{intro.trim()}</dd>
                </div>
              )}
            </Summary>

            <Field>
              <Label htmlFor="center-contact">회신 받을 이메일</Label>
              <Input
                id="center-contact"
                type="email"
                autoComplete="email"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="you@example.com"
              />
            </Field>

            <Notice>
              <Icon name="info" size={20} />
              <p>
                신청 내용은 담당자가 확인한 뒤 등록됩니다. 사업자 정보와 주소가 실제와 다르면
                반려될 수 있어요.
              </p>
            </Notice>
          </>
        )}

        <Actions>
          <GhostButton
            type="button"
            onClick={() => (step > 0 ? setStep((prev) => prev - 1) : backToSearch())}
          >
            이전
          </GhostButton>
          {step < STEPS.length - 1 ? (
            <PrimaryButton
              type="button"
              disabled={!canGoNext}
              onClick={() => setStep((prev) => prev + 1)}
            >
              계속하기
              <Icon name="arrow_forward" size={18} />
            </PrimaryButton>
          ) : (
            <PrimaryButton
              type="button"
              disabled={!canGoNext || busy}
              onClick={() => void handleSubmit()}
            >
              {busy ? "신청 중…" : "등록 신청하기"}
            </PrimaryButton>
          )}
        </Actions>
      </Form>
    </Page>
  );
};

export default CenterRegisterPage;
