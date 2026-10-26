import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { searchAddressCandidates, type GeocodeCandidate } from "@/services/meditation/naverGeocode";
import { getRegionById } from "@/services/meditation/meditationService";
import type { MeditationPlace } from "@/services/meditation/types";
import { useCatalogStore } from "@/stores/catalogStore";
import { getMeditationApiBaseUrl } from "@/services/meditation/repositories/apiConfig";
import { uploadAdminImage } from "@/services/admin/adminApi";
import { apiFetch, useAuthStore } from "@/stores/authStore";
import {
  fetchPlaceClaimStatus,
  submitPlaceClaim,
} from "@/services/placeClaims/repositories/placeClaimsRepository";
import {
  claimAvailability,
  claimErrorMessage,
  isValidBizNumber,
  validateEvidenceFile,
  type PlaceClaimStatusView,
} from "@/services/placeClaims/types";
import { ApiError } from "@/services/http/apiError";
import { toast } from "@/stores/toastStore";
import { useOwnerDesktop } from "@/hooks/useMediaQuery";
import CenterRegisterDesktop from "@/pages/centerRegister/CenterRegisterDesktop";
import CenterRegisterMobile, { type CenterRegisterMobileVM } from "@/pages/centerRegister/CenterRegisterMobile";

/*
 * 명상센터 등록 — 프론트 시안(명상센터등록(모바일))을 따릅니다.
 *
 * 흐름은 "이미 있는 곳인지 먼저 확인" 입니다. 같은 센터가 두 번 등록되면 사용자에게는
 * 같은 곳이 둘로 보이고, 정리하는 쪽이 훨씬 큰 일이 됩니다. 그래서 찾기부터 시작해
 * 있으면 소유권을 주장하고, 없을 때만 새로 등록하게 둡니다.
 *
 * 모바일 폭은 시안(_6)대로 이 파일이 그립니다. PC 폭(≥1024px)은 관리 화면 목업(pc_1·pc_2)을 따라
 * CenterManagementLayout(사이드바) 안에서 CenterRegisterDesktop 이 그립니다(라운드 4). 상태는 이 컴포넌트가 들고 있어
 * 폭이 바뀌어도 입력값이 남습니다.
 *
 * 모바일 시안에 있던 것 중 여기 없는 것:
 *  - 상단 앱바("Mindful Path" + 닫기): 이 앱은 하위 화면에 상단바를 두지 않습니다.
 *  - 화면 아래 고정 액션바: 떠 있는 탭바와 자리가 겹칩니다. 버튼은 폼 끝에 둡니다.
 */

/** 모바일(_6) 공간 사진 최대 5장, PC(_2) 최대 10장 */
const MAX_PHOTOS = 5;
const MAX_PHOTOS_PC = 10;
const CenterRegisterPage = () => {
  const navigate = useNavigate();
  const isAuthed = useAuthStore((s) => !!s.accessToken);
  const isStaff = useAuthStore((s) => s.isStaff());
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
  const [memo, setMemo] = useState("");
  const [evidence, setEvidence] = useState<File | null>(null);
  const [evidenceError, setEvidenceError] = useState<string | null>(null);
  /** 검색 결과별 소유 신청 상태(계약 4.3). 소유 신청 진입점은 이 화면뿐이라 status API 도 여기서만 씁니다. */
  const [claimStatus, setClaimStatus] = useState<Record<string, PlaceClaimStatusView>>({});
  const isMember = isAuthed && !isStaff;
  const desktop = useOwnerDesktop();
  const maxPhotos = desktop ? MAX_PHOTOS_PC : MAX_PHOTOS;

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

  // 회원이면 검색 결과(최대 8곳)의 신청 가능 여부를 받아 둡니다. 실패한 곳은 요청을 열어 두고 서버 판정에 맡깁니다.
  const matchIds = matches.map((p) => p.id).join(",");
  const statusRequested = useRef(new Set<string>());
  useEffect(() => {
    if (!isMember || !matchIds) return;
    for (const id of matchIds.split(",")) {
      if (statusRequested.current.has(id)) continue;
      statusRequested.current.add(id);
      fetchPlaceClaimStatus(id)
        .then((v) => setClaimStatus((prev) => ({ ...prev, [id]: v })))
        .catch(() => statusRequested.current.delete(id));
    }
  }, [isMember, matchIds]);

  const startClaim = (place: MeditationPlace) => {
    if (!isMember) {
      toast.error(isStaff ? "관리자 계정으로는 요청할 수 없어요. 회원 계정으로 로그인해 주세요." : "로그인한 뒤 소유권을 요청할 수 있어요.");
      navigate("/profile");
      return;
    }
    setClaimTarget(place);
    setBizNumber("");
    setMemo("");
    setEvidence(null);
    setEvidenceError(null);
    setMode("claim");
  };

  const pickEvidence = (file: File | null) => {
    if (!file) {
      setEvidence(null);
      setEvidenceError(null);
      return;
    }
    const err = validateEvidenceFile(file);
    setEvidenceError(err);
    setEvidence(err ? null : file);
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

  // 사업자등록번호는 선택(계약 4.1). 필수는 연락처뿐, 메모·증빙은 선택입니다.
  const canSubmitClaim =
    isValidBizNumber(bizNumber) &&
    memo.length <= 2000 &&
    !evidenceError &&
    contact.trim().length > 0 &&
    contact.trim().length <= 100 &&
    claimTarget != null;

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
    } catch (e) {
      console.error("[address-search]", e);
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
    const room = maxPhotos - photos.length;
    if (room <= 0) return;
    setUploading(true);
    try {
      const uploaded: string[] = [];
      for (const file of Array.from(files).slice(0, room)) {
        uploaded.push(await uploadAdminImage(file));
      }
      setPhotos((prev) => [...prev, ...uploaded].slice(0, maxPhotos));
    } catch {
      toast.error("사진 업로드에 실패했어요.");
    } finally {
      setUploading(false);
    }
  };

  /**
   * 신규 센터 등록 접수 창구. 전용 API 가 아직 없어 1:1 문의로 보냅니다.
   * (소유권 요청은 소유 신청 API — POST /me/place-claims — 로 보냅니다. handleClaim 참고)
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
        // 신규 등록 회신 이메일은 로그인 회원 이메일(PC·모바일 모두 칸 없이 자동)
        body: JSON.stringify({ email: (kind === "create" && sessionEmail ? sessionEmail : contact).trim(), subject, body }),
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

  /** 소유권 요청 — 소유 신청 API(POST /me/place-claims, 계약 4.1). 승인·반려 결과는 알림으로 갑니다. */
  const handleClaim = async () => {
    if (!claimTarget) return;
    if (!isAuthed || isStaff) {
      toast.error("회원으로 로그인한 뒤 요청할 수 있어요.");
      navigate("/profile");
      return;
    }
    setBusy(true);
    try {
      await submitPlaceClaim({
        placeId: claimTarget.id,
        contact: contact.trim(),
        memo,
        businessRegistrationNumber: bizNumber.trim(),
        evidence,
      });
      setSubmittedKind("claim");
      setSubmitted(true);
    } catch (e) {
      const err = e instanceof ApiError ? e : null;
      toast.error(claimErrorMessage(err?.code ?? null, "요청에 실패했어요. 잠시 후 다시 시도해 주세요."));
    } finally {
      setBusy(false);
    }
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

  // 폭에 따라 PC(pc_1·pc_2)·모바일(_6 위저드) 화면을 고릅니다. 상태는 위 훅들에 있어 폭이 바뀌어도 입력값이 남습니다.
  const vm: CenterRegisterMobileVM = {
    centerQuery,
    setCenterQuery,
    matches,
    availabilityOf: (place) => (isMember ? claimAvailability(claimStatus[place.id] ?? null) : null),
    regionName: (place) => getRegionById(place.regionId)?.name ?? place.regionId,
    startClaim,
    claimTarget: mode === "claim" ? claimTarget : null,
    backToSearch,
    onOpenMine: (place) => navigate(`/profile/places/${encodeURIComponent(place.id)}/edit`),
    onOpenPending: () => navigate("/profile/place-claims"),
    memo,
    setMemo,
    evidence,
    evidenceError,
    pickEvidence,
    canSubmitClaim,
    handleClaim: () => void handleClaim(),
    bizNumber,
    setBizNumber,
    contact,
    setContact,
    busy,
    name,
    setName,
    addressQuery,
    setAddressQuery,
    searching,
    handleAddressSearch: () => void handleAddressSearch(),
    candidates,
    picked,
    setPicked,
    detailAddress,
    setDetailAddress,
    photos,
    setPhotos,
    maxPhotos,
    uploading,
    handleAddPhotos: (files) => void handleAddPhotos(files),
    // 회신 이메일은 로그인 회원 이메일로 자동(pc_2 에 칸 없음)
    sessionEmail: isMember ? sessionEmail : null,
    canSubmitCreate:
      isMember &&
      !!sessionEmail &&
      name.trim().length > 0 &&
      bizNumber.trim().length > 0 &&
      fullAddress.length > 0,
    handleSubmit,
    submitted,
    submittedKind,
    goHome: () => navigate("/"),
    goClaims: () => navigate("/profile/place-claims"),
    goMyCenters: () => navigate("/profile/places"),
    goRegister: () => {
      setSubmitted(false);
      backToSearch();
    },
    goProfile: () => navigate("/profile"),
    mode,
    startCreate,
    step,
    setStep,
    intro,
    setIntro,
    fullAddress,
    canGoNext,
    close: () => navigate("/profile"),
  };
  if (desktop) return <CenterRegisterDesktop vm={vm} />;
  return <CenterRegisterMobile vm={vm} />;
};

export default CenterRegisterPage;
