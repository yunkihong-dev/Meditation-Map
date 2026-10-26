import { useEffect, useMemo, useState, type ReactNode } from "react";
import { useOwnerDesktop } from "@/hooks/useMediaQuery";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import LoginRequired, { useMemberSession } from "@/components/common/LoginRequired";
import Icon from "@/components/common/Icon";
import OwnerPhotoList from "@/components/ownerPlaces/OwnerPhotoList";
import { FACILITY_GROUPS, resolveFacilityKey } from "@/data/facilities";
import { nextNestedNumericId } from "@/services/admin/adminApi";
import { orderedPhotosToProgram, programPhotosOrdered } from "@/components/admin/AdminImageUpload";
import { computeProgramStatus } from "@/services/meditation/placeProgramStatus";
import type { MeditationPlace, PlaceInstructor, PlaceProgram } from "@/services/meditation/types";
import { searchAddressCandidates, type GeocodeCandidate } from "@/services/meditation/naverGeocode";
import { ApiError } from "@/services/http/apiError";
import {
  fetchOwnerPlace,
  patchOwnerPlace,
} from "@/services/ownerPlaces/repositories/ownerPlacesRepository";
import {
  OWNER_FIELD_LABELS,
  buildOwnerPatch,
  fieldGroupOf,
  ownerPlaceErrorMessage,
  validateOwnerDraft,
  type OwnerEditableField,
  type OwnerPlaceView,
} from "@/services/ownerPlaces/types";
import { fetchInquirySettings, putInquirySettings } from "@/services/ownerPlaces/repositories/inquirySettingsRepository";
import {
  KAKAO_URL_PLACEHOLDER,
  buildInquiryPut,
  draftOf,
  inquiryDirty,
  validateInquiryDraft,
  type InquiryDraft,
  type InquiryField,
  type InquirySettings,
} from "@/services/ownerPlaces/inquirySettings";
import { useCatalogStore } from "@/stores/catalogStore";
import { toast } from "@/stores/toastStore";
import { C, TY, a, shadowMd, tAll, tColors, tProp, inputPc4, PRIMARY_RGB } from "@/components/centerManagement/cmKit";
import {
  dirtySections,
  initialOpenSection,
  sectionOfField,
  type OwnerSectionId,
} from "@/pages/ownerPlaces/ownerEditSections";

/* ── `관리화면 예시/pc_4/code.html` 이식 (모바일도 같은 마크업 — 목업이 반응형: p-6 / lg:p-margin-desktop) ── */

/** tw: max-w-3xl mx-auto pb-32 (+ 고정 저장 바가 마지막 입력을 가리지 않도록 아래 여백) */
const Editor = styled.div<{ $desktop: boolean }>`
  max-width: 768px;
  margin: 0 auto;
  /* 모바일: 저장 바(약 72px) + 기기 하단 안전 영역만큼 */
  padding-bottom: ${({ $desktop }) => ($desktop ? "128px" : "calc(96px + env(safe-area-inset-bottom, 0px))")};
`;

/** tw: main p-6 lg:p-margin-desktop — 레이아웃이 PC 에서 64px 를 주므로 모바일만 24px */
const Page = styled.div<{ $desktop: boolean }>`
  padding: ${({ $desktop }) => ($desktop ? "0" : "20px 16px")};
`;

/** tw: header mb-10 / h1 font-display-lg text-on-background mb-2 / p font-body-lg text-on-surface-variant */
const Head = styled.header<{ $desktop: boolean }>`
  margin-bottom: 40px;

  h1 {
    margin: 0 0 8px;
    ${TY.displayLg};
    color: ${C.onBackground};
    word-break: keep-all;
  }

  p {
    margin: 0;
    ${TY.bodyLg};
    color: ${C.onSurfaceVariant};
  }

  nav {
    display: flex;
    gap: 8px;
    margin-top: 16px;
    flex-wrap: wrap;
  }

  /* 모바일: 목업 모바일 화면(_4·_6)의 headline-lg-mobile 크기, 여백 축소 */
  ${({ $desktop }) =>
    $desktop
      ? ""
      : `
    margin-bottom: 20px;

    h1 {
      font-size: 28px;
      line-height: 1.3;
      letter-spacing: 0;
      font-weight: 600;
      margin-bottom: 4px;
    }

    p {
      font-size: 15px;
      line-height: 1.5;
    }

    nav {
      margin-top: 12px;
    }
  `}
`;

/** tw: bg-surface-container-lowest rounded-[24px] shadow-[0px_30px_60px_-15px_rgba(107,70,193,0.04)] border border-outline-variant/30 p-8 mb-8 */
const Card = styled.section`
  background: ${C.surfaceContainerLowest};
  border-radius: 24px;
  box-shadow: 0px 30px 60px -15px rgba(107, 70, 193, 0.04);
  border: 1px solid ${a(C.outlineVariant, 0.3)};
  padding: 32px;
  margin-bottom: 32px;
`;

/** tw: space-y-6 */
const Stack = styled.div`
  & > * + * {
    margin-top: 24px;
  }
`;

/** tw: font-headline-md text-headline-md text-on-background mb-2 */
const CardTitle = styled.h3`
  margin: 0 0 8px;
  ${TY.headlineMd};
  color: ${C.onBackground};
`;

/** tw: font-body-md text-on-surface-variant mb-6 */
const CardDesc = styled.p`
  margin: 0 0 24px;
  ${TY.bodyMd};
  color: ${C.onSurfaceVariant};
`;

const Field = styled.div`
  min-width: 0;
`;

/** tw: block font-label-md text-label-md text-on-surface mb-2 */
const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  ${TY.labelMd};
  color: ${C.onSurface};
`;

const TextInput = styled.input`
  ${inputPc4};

  &[aria-invalid="true"] {
    border-color: ${C.error};
  }

  &:read-only {
    cursor: default;
  }
`;

const TextArea = styled.textarea`
  ${inputPc4};
  min-height: 120px;
  resize: vertical;
  font-family: inherit;
`;

const Select = styled.select`
  ${inputPc4};
`;

/** tw: bg-secondary-container text-on-secondary-container px-6 py-3 rounded-xl font-label-md hover:bg-surface-container-highest transition-colors whitespace-nowrap */
const SoftButton = styled.button`
  flex-shrink: 0;
  border: 0;
  padding: 12px 24px;
  border-radius: 12px;
  background: ${C.secondaryContainer};
  color: ${C.onSecondaryContainer};
  ${TY.labelMd};
  white-space: nowrap;
  cursor: pointer;
  ${tColors()};

  &:hover:not(:disabled) {
    background: ${C.surfaceContainerHighest};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

/** 목록 안 보조 버튼(삭제·추가) — 같은 SoftButton 을 작게 */
const SmallButton = styled(SoftButton)`
  padding: 8px 16px;
`;

const Hint = styled.p`
  margin: 8px 0 0;
  ${TY.sm};
  color: ${C.onSurfaceVariant};
`;

const Muted = Hint;

const ErrorText = styled.p`
  margin: 8px 0 0;
  ${TY.sm};
  color: ${C.error};
`;

/** 하위 항목(프로그램·강사·안내 항목) 묶음 — pc_4 카드 언어(rounded-xl, border outline-variant/30) */
const SubCard = styled.div`
  padding: 20px;
  border-radius: 12px;
  border: 1px solid ${a(C.outlineVariant, 0.3)};
  background: ${C.surfaceContainerLow};

  & > * + * {
    margin-top: 16px;
  }
`;

const SubHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;

  strong {
    ${TY.labelMd};
    font-weight: 700;
    overflow-wrap: anywhere;
  }
`;

const Chips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 8px 0 16px;
`;

const Chip = styled.button<{ $on: boolean }>`
  padding: 8px 14px;
  border-radius: 9999px;
  border: 1px solid ${({ $on }) => ($on ? C.primaryContainer : C.outlineVariant)};
  background: ${({ $on }) => ($on ? a(C.primaryContainer, 0.1) : C.surfaceContainerLowest)};
  color: ${({ $on }) => ($on ? C.primary : C.onSurfaceVariant)};
  ${TY.labelMd};
  cursor: pointer;
  ${tColors()};

  &:hover {
    border-color: ${C.primaryContainer};
  }
`;

const DateRow = styled.div`
  display: flex;
  gap: 8px;

  & > * {
    flex: 1;
    min-width: 0;
  }
`;

/** tw: grid grid-cols-2 md:grid-cols-4 gap-4 — 하위 카드는 md 이상 2열 */
const ItemGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 16px;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const FieldGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 24px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));

    & > .wide {
      grid-column: 1 / -1;
    }
  }
`;

/** tw: fixed bottom-0 left-0 lg:left-64 right-0 bg-surface/80 backdrop-blur-md border-t border-outline-variant/30 p-4 lg:px-margin-desktop z-40 */
const SaveBar = styled.div<{ $desktop: boolean }>`
  position: fixed;
  bottom: 0;
  left: ${({ $desktop }) => ($desktop ? "256px" : "0")};
  right: 0;
  z-index: 40;
  background: ${a(C.surface, 0.8)};
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-top: 1px solid ${a(C.outlineVariant, 0.3)};
  padding: ${({ $desktop }) => ($desktop ? "16px 64px" : "16px")};

  .inner {
    /* tw: max-w-3xl mx-auto flex justify-end gap-4 */
    max-width: 768px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 16px;
  }

  .err {
    flex: 1;
    min-width: 0;
    margin: 0;
    ${TY.sm};
    color: ${C.error};
  }

  /* 모바일: 하단 안전 영역, 저장 버튼이 남는 폭을 차지, 오류 문구는 버튼 위 한 줄 */
  ${({ $desktop }) =>
    $desktop
      ? ""
      : `
    padding: 12px 16px calc(12px + env(safe-area-inset-bottom, 0px));

    .inner {
      flex-wrap: wrap;
      gap: 8px;
    }

    .err {
      flex-basis: 100%;
    }

    .inner > button {
      padding-left: 20px;
      padding-right: 20px;
    }

    .inner > button:last-child {
      flex: 1;
    }
  `}
`;

/** tw(취소): px-8 py-3 rounded-xl bg-secondary-container text-on-secondary-container font-label-md hover:bg-surface-container-highest transition-colors */
const CancelButton = styled(SoftButton)`
  padding: 12px 32px;
`;

/** tw(저장): px-8 py-3 rounded-xl bg-primary text-on-primary font-label-md shadow-md shadow-primary/20 hover:opacity-90 transition-opacity */
const SaveButton = styled.button`
  padding: 12px 32px;
  border: 0;
  border-radius: 12px;
  background: ${C.primary};
  color: ${C.onPrimary};
  ${TY.labelMd};
  box-shadow: ${shadowMd(PRIMARY_RGB, 0.2)};
  white-space: nowrap;
  cursor: pointer;
  ${tProp("opacity")};

  &:hover:not(:disabled) {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

/**
 * 문의 방식 선택지 — pc_4 카드 언어(rounded-xl, border outline-variant/30)에 선택 상태는 Chip 과 같은 primary 테두리·옅은 채움.
 * 진짜 radio 를 감싼 label 이라 키보드(화살표)·스크린리더가 그대로 동작합니다.
 */
const Choices = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 12px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Choice = styled.label<{ $on: boolean }>`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px 20px;
  border-radius: 12px;
  border: 1px solid ${({ $on }) => ($on ? C.primaryContainer : a(C.outlineVariant, 0.6))};
  background: ${({ $on }) => ($on ? a(C.primaryContainer, 0.06) : C.surfaceContainerLowest)};
  cursor: pointer;
  ${tColors()};

  &:hover {
    border-color: ${C.primaryContainer};
  }

  input {
    margin: 3px 0 0;
    accent-color: ${C.primary};
    width: 18px;
    height: 18px;
    flex-shrink: 0;
  }

  .t {
    display: flex;
    flex-direction: column;
    gap: 4px;
    min-width: 0;
  }

  strong {
    ${TY.labelMd};
    font-weight: 700;
    color: ${C.onSurface};
  }

  small {
    ${TY.sm};
    color: ${C.onSurfaceVariant};
  }
`;

/** 카카오톡 종류(오픈채팅/채널) — 작은 pill radio */
const TypePill = styled.label<{ $on: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  border-radius: 9999px;
  border: 1px solid ${({ $on }) => ($on ? C.primaryContainer : C.outlineVariant)};
  background: ${({ $on }) => ($on ? a(C.primaryContainer, 0.1) : C.surfaceContainerLowest)};
  color: ${({ $on }) => ($on ? C.primary : C.onSurfaceVariant)};
  ${TY.labelMd};
  cursor: pointer;
  ${tColors()};

  input {
    margin: 0;
    accent-color: ${C.primary};
  }
`;

/** 주소 검색 결과 — pc_4 입력 조각 모양의 선택지 */
const Candidate = styled.button`
  ${inputPc4};
  text-align: left;
  cursor: pointer;

  &:hover {
    border-color: ${C.primaryContainer};
  }
`;

/** 두 화면(기본 정보·사진 ↔ 프로그램·상세 정보) 사이 이동 — 사이드바 항목과 같은 hover */
const SubNav = styled.button<{ $on: boolean }>`
  padding: 8px 16px;
  border-radius: 12px;
  border: 0;
  background: ${({ $on }) => ($on ? C.primaryContainer : "transparent")};
  color: ${({ $on }) => ($on ? C.onPrimaryContainer : C.onSurfaceVariant)};
  ${TY.labelMd};
  cursor: pointer;
  ${tAll(300)};

  &:hover {
    background: ${({ $on }) => ($on ? C.primaryContainer : a(C.surfaceVariant, 0.5))};
  }
`;

/* ── 모바일(<1024px) 접기 — 목업(pc_4)의 카드 언어 그대로, 카드 머리만 눌러서 펼치는 요약 행으로 ── */

const FoldCard = styled.section`
  background: ${C.surfaceContainerLowest};
  border-radius: 20px;
  box-shadow: 0px 30px 60px -15px rgba(107, 70, 193, 0.04);
  border: 1px solid ${a(C.outlineVariant, 0.3)};
  margin-bottom: 12px;
  scroll-margin-top: 12px;

  & > .body {
    padding: 0 16px 20px;
  }

  & > .body[hidden] {
    display: none;
  }

  /* 모바일 카드 안 간격: 24 → 16 */
  & ${Stack} > * + * {
    margin-top: 16px;
  }

  & ${FieldGrid} {
    gap: 16px;
  }

  & ${CardDesc} {
    margin-bottom: 16px;
    ${TY.sm};
  }
`;

const FoldHead = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  border: 0;
  background: transparent;
  text-align: left;
  cursor: pointer;
  color: ${C.onSurface};

  .t {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .row {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  strong {
    font-size: 18px;
    line-height: 1.4;
    font-weight: 600;
    color: ${C.onBackground};
  }

  em {
    font-style: normal;
    padding: 2px 8px;
    border-radius: 9999px;
    background: ${C.secondaryContainer};
    color: ${C.primary};
    ${TY.xs};
    font-weight: 600;
  }

  small {
    ${TY.sm};
    color: ${C.onSurfaceVariant};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .chev {
    flex-shrink: 0;
    color: ${C.onSurfaceVariant};
    ${tProp("transform", 200)};
  }

  &[aria-expanded="true"] .chev {
    transform: rotate(180deg);
  }
`;

/** 하위 항목(프로그램·강사) 본문 — 모바일에서만 접힘 */
const SubBody = styled.div`
  & > * + * {
    margin-top: 16px;
  }

  &[hidden] {
    display: none;
  }
`;

interface FoldProps {
  desktop: boolean;
  id: OwnerSectionId;
  title: string;
  /** PC 카드에 제목(SecTitle)을 그리는지 — 기본 정보 카드는 PC 에서 제목 없이 aria-label 만 */
  desktopTitle?: boolean;
  ariaLabel?: string;
  summary: string;
  dirty: boolean;
  open: boolean;
  onToggle: () => void;
  children: ReactNode;
}

/** PC: 기존 카드 그대로. 모바일: 요약 머리 + 펼침 본문(접혀도 hidden 으로 DOM·draft 유지) */
function Fold({ desktop, id, title, desktopTitle = true, ariaLabel, summary, dirty, open, onToggle, children }: FoldProps) {
  if (desktop) {
    return (
      <Card id={id} aria-label={ariaLabel}>
        {desktopTitle && <CardTitle>{title}</CardTitle>}
        {children}
      </Card>
    );
  }
  const bodyId = `${id}-body`;
  return (
    <FoldCard id={id} aria-label={ariaLabel ?? title} data-open={open ? "true" : "false"}>
      <FoldHead type="button" aria-expanded={open} aria-controls={bodyId} onClick={onToggle}>
        <span className="t">
          <span className="row">
            <strong>{title}</strong>
            {dirty && <em>수정됨</em>}
          </span>
          <small>{summary}</small>
        </span>
        <Icon name="expand_more" className="chev" />
      </FoldHead>
      <div id={bodyId} className="body" hidden={!open}>
        {children}
      </div>
    </FoldCard>
  );
}

/** 접힌 카드 요약용 — 마크다운 첫 줄(기호 제거) */
function firstLine(v: string | undefined): string {
  return (v ?? "").split("\n").map((l) => l.replace(/^[#>*\-\s]+/, "").trim()).find(Boolean) ?? "";
}

function splitTags(v: string): string[] {
  return v
    .split(/[,\n]/)
    .map((t) => t.trim().replace(/^#/, ""))
    .filter(Boolean);
}

/** 오너 편집 — /profile/places/:placeId/edit (계약 8.2·8.3). editableFields 에 있는 필드만 그리고 보냅니다. */
/** 화면별로 다루는(보내는) 키 — pc_4 '센터 정보 수정'은 기본 정보·사진만, 나머지는 '프로그램·상세 정보 관리' */
export const OWNER_MODE_FIELDS: Record<"basic" | "details", ReadonlySet<string>> = {
  basic: new Set(["name", "businessRegistrationNumber", "address", "addressDetail", "lat", "lng", "photos"]),
  details: new Set([
    "shortDescription",
    "description",
    "hashtags",
    "duration",
    "admissionFee",
    "organization",
    "externalLink",
    "thumbnailUrl",
    "facilities",
    "detailSections",
    "programs",
    "instructors",
  ]),
};

export default function OwnerPlaceEditPage({ mode = "basic" }: { mode?: "basic" | "details" }) {
  const navigate = useNavigate();
  const { placeId = "" } = useParams();
  const { authReady, isMember } = useMemberSession();
  const [view, setView] = useState<OwnerPlaceView | null>(null);
  const [draft, setDraft] = useState<MeditationPlace | null>(null);
  const [tagText, setTagText] = useState("");
  const [loadError, setLoadError] = useState<string | null>(null);
  const [saveError, setSaveError] = useState<string | null>(null);
  const [badFields, setBadFields] = useState<string[]>([]);
  const [saving, setSaving] = useState(false);
  // C5 사업자번호(data 밖)와 주소 찾기(관리자 폼과 같은 네이버 지오코딩 searchAddressCandidates)
  const [biz, setBiz] = useState("");
  const [addrQuery, setAddrQuery] = useState("");
  const [addrCandidates, setAddrCandidates] = useState<GeocodeCandidate[]>([]);
  const [addrSearching, setAddrSearching] = useState(false);
  const [addrOpen, setAddrOpen] = useState(false);
  // 폭이 바뀌어도 이 컴포넌트는 그대로이므로(CenterManagementLayout 이 트리를 유지) 입력 중인 draft 는 남습니다.
  const desktop = useOwnerDesktop();
  const location = useLocation();
  // 문의 방식(C14) — 기본정보 PATCH 와 별도 리소스. 저장 바에서 함께 저장하되 요청은 따로 보냅니다.
  const [inqServer, setInqServer] = useState<InquirySettings | null>(null);
  const [inqDraft, setInqDraft] = useState<InquiryDraft>(() => draftOf(null));
  const [inqErrors, setInqErrors] = useState<Partial<Record<InquiryField, string>>>({});
  const [inqLoadError, setInqLoadError] = useState(false);
  // 모바일 접기: 한 번에 한 카드만 펼칩니다(PC 는 전부 펼친 기존 화면). 하위 항목(프로그램·강사)도 모바일에서만 접습니다.
  const [openSec, setOpenSec] = useState<OwnerSectionId | null>(() => initialOpenSection(mode, location.hash));
  const [openItems, setOpenItems] = useState<ReadonlySet<string>>(() => new Set());
  useEffect(() => {
    setOpenSec(initialOpenSection(mode, location.hash));
  }, [mode, location.hash]);
  const toggleSec = (id: OwnerSectionId) => {
    const opening = openSec !== id;
    setOpenSec(opening ? id : null);
    // 위 카드가 접히면서 누른 카드가 화면 위로 밀려 올라가면 그 머리로 다시 맞춥니다.
    if (opening)
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < 0 && typeof el.scrollIntoView === "function") el.scrollIntoView({ block: "start" });
      });
  };
  const itemOpen = (key: string) => desktop || openItems.has(key);
  const setItemOpen = (key: string, on: boolean) =>
    setOpenItems((cur) => {
      const next = new Set(cur);
      if (on) next.add(key);
      else next.delete(key);
      return next;
    });

  useEffect(() => {
    if (!isMember || !placeId) return;
    let cancelled = false;
    setLoadError(null);
    fetchOwnerPlace(placeId)
      .then((v) => {
        if (cancelled) return;
        setView(v);
        setDraft(v.data);
        setTagText(v.data.hashtags.join(", "));
        setBiz(v.businessRegistrationNumber ?? "");
        setAddrQuery(v.data.address);
      })
      .catch((e) => {
        if (cancelled) return;
        const code = e instanceof ApiError ? e.code : null;
        setLoadError(ownerPlaceErrorMessage(code, [], "장소 정보를 불러오지 못했어요."));
      });
    return () => {
      cancelled = true;
    };
  }, [isMember, placeId]);

  useEffect(() => {
    if (!isMember || !placeId || mode !== "basic") return;
    let cancelled = false;
    setInqLoadError(false);
    fetchInquirySettings(placeId)
      .then((v) => {
        if (cancelled) return;
        setInqServer(v);
        setInqDraft(draftOf(v));
        setInqErrors({});
      })
      .catch(() => {
        if (!cancelled) setInqLoadError(true);
      });
    return () => {
      cancelled = true;
    };
  }, [isMember, placeId, mode]);

  // 대시보드의 "사진 관리"·"프로그램 추가"(#owner-photos 등)로 들어오면 그 카드로 스크롤합니다.
  const loaded = !!draft;
  useEffect(() => {
    if (!loaded || !location.hash) return;
    document.getElementById(location.hash.slice(1))?.scrollIntoView({ block: "start" });
  }, [loaded, location.hash]);

  // 서버 허용(editableFields) ∩ 이 화면이 다루는 키 — PATCH 도 이 키만 보냅니다
  const modeFields = useMemo(
    () => (view?.editableFields ?? []).filter((f) => OWNER_MODE_FIELDS[mode].has(f)),
    [view, mode]
  );
  const editable = useMemo(() => new Set<string>(modeFields), [modeFields]);
  const can = (f: OwnerEditableField) => editable.has(f);

  // 해시태그 입력칸을 건드리지 않았으면 원래 배열을 그대로 둡니다(공백·# 정리로 생기는 가짜 변경 방지).
  const edited = useMemo<MeditationPlace | null>(() => {
    if (!draft) return null;
    const untouched = tagText === (view?.data.hashtags ?? []).join(", ");
    const hashtags = editable.has("hashtags") && !untouched ? splitTags(tagText) : draft.hashtags;
    return { ...draft, hashtags };
  }, [draft, tagText, editable, view]);

  const patch = useMemo(
    () =>
      view && edited
        ? buildOwnerPatch(view.data, edited, modeFields, {
            before: view.businessRegistrationNumber,
            after: biz,
          })
        : {},
    [view, edited, biz, modeFields]
  );
  const dirty = Object.keys(patch).length > 0;
  const dirtySecs = useMemo(() => dirtySections(Object.keys(patch)), [patch]);
  const inqDirty = mode === "basic" && inquiryDirty(inqServer, inqDraft);
  const anyDirty = dirty || inqDirty;
  const setInq = (p: Partial<InquiryDraft>) => {
    setInqDraft((d) => ({ ...d, ...p }));
    setInqErrors({});
  };

  const set = <K extends keyof MeditationPlace>(key: K, value: MeditationPlace[K]) =>
    setDraft((d) => (d ? { ...d, [key]: value } : d));

  const updateProgram = (i: number, p: Partial<PlaceProgram>) =>
    setDraft((d) => {
      if (!d) return d;
      const programs = [...(d.programs ?? [])];
      const next = { ...programs[i], ...p };
      programs[i] = { ...next, status: computeProgramStatus(next) };
      return { ...d, programs };
    });

  const addProgram = () => {
    if (draft) setItemOpen(`program-${nextNestedNumericId(draft.programs ?? [])}`, true);
    addProgramToDraft();
  };

  const addProgramToDraft = () =>
    setDraft((d) => {
      if (!d) return d;
      const programs = d.programs ?? [];
      // 새 항목은 reviews 를 비우고 hidden 은 넣지 않습니다(계약 8.3 — 서버도 같은 규칙으로 덮어씀).
      const base: PlaceProgram = {
        id: nextNestedNumericId(programs),
        kind: "program",
        title: "새 프로그램",
        status: "ongoing",
        imageUrl: "",
        imageUrls: [],
        bodyFromVenue: "",
        reviews: [],
      };
      return { ...d, programs: [...programs, { ...base, status: computeProgramStatus(base) }] };
    });

  const updateInstructor = (i: number, p: Partial<PlaceInstructor>) =>
    setDraft((d) => {
      if (!d) return d;
      const instructors = [...(d.instructors ?? [])];
      instructors[i] = { ...instructors[i], ...p };
      return { ...d, instructors };
    });

  /** 문의 방식 오류 칸을 화면 가운데로(고정 저장 바에 가리지 않게) 가져오고 링크 칸이면 포커스 */
  const revealInquiryError = (errs: Partial<Record<InquiryField, string>>) => {
    if (Object.keys(errs).length === 0) return;
    setOpenSec("owner-inquiry");
    requestAnimationFrame(() => {
      const el = document.getElementById(errs.kakaoUrl ? "owner-kakao-url" : "owner-inquiry");
      if (el && typeof el.scrollIntoView === "function") el.scrollIntoView({ block: "center" });
      if (el instanceof HTMLInputElement) el.focus({ preventScroll: true });
    });
  };

  const save = async () => {
    if (!view || !edited || !anyDirty) return;
    const bad = dirty ? validateOwnerDraft(edited, modeFields) : [];
    const inqBad = inqDirty ? validateInquiryDraft(inqDraft) : {};
    setBadFields(bad);
    setInqErrors(inqBad);
    if (bad.length > 0) setOpenSec(sectionOfField(bad[0]) ?? openSec);
    const msgs: string[] = [];
    if (bad.length > 0) msgs.push(`입력값을 확인해 주세요: ${bad.map((f) => OWNER_FIELD_LABELS[f as OwnerEditableField] ?? f).join(", ")}`);
    if (Object.keys(inqBad).length > 0) msgs.push("문의 방식을 확인해 주세요.");
    if (msgs.length > 0) {
      setSaveError(msgs.join(" "));
      if (bad.length === 0) revealInquiryError(inqBad);
      return;
    }
    setSaving(true);
    setSaveError(null);
    // 요청 두 개(PATCH 기본정보 · PUT 문의 방식)를 따로 보내고, 실패하면 어느 쪽인지 적습니다.
    const [pr, ir] = await Promise.allSettled([
      dirty ? patchOwnerPlace(view.placeId, patch) : Promise.resolve(null),
      inqDirty ? putInquirySettings(view.placeId, buildInquiryPut(inqDraft)) : Promise.resolve(null),
    ]);
    let baseErr: string | null = null;
    let inqErr: string | null = null;
    if (pr.status === "fulfilled" && pr.value) {
      const next = pr.value;
      setView(next);
      setDraft(next.data);
      setTagText(next.data.hashtags.join(", "));
      setBiz(next.businessRegistrationNumber ?? "");
      setAddrQuery(next.data.address);
      setAddrCandidates([]);
      // 공개 목록 캐시를 다시 받아 홈·지도에도 바로 보이게 합니다.
      void useCatalogStore.getState().hydrate();
    } else if (pr.status === "rejected") {
      const err = pr.reason instanceof ApiError ? pr.reason : null;
      // 서버 details.fields(lat·lng 등)를 화면 칸(주소)으로 묶어 강조합니다.
      const groups = Array.from(new Set((err?.fields ?? []).map(fieldGroupOf)));
      setBadFields(groups);
      const sec = groups.map(sectionOfField).find((x): x is OwnerSectionId => x != null);
      if (sec) setOpenSec(sec);
      baseErr = ownerPlaceErrorMessage(err?.code ?? null, err?.fields ?? [], err?.message ?? "저장하지 못했어요.");
    }
    if (ir.status === "fulfilled" && ir.value) {
      setInqServer(ir.value);
      setInqDraft(draftOf(ir.value));
    } else if (ir.status === "rejected") {
      const err = ir.reason instanceof ApiError ? ir.reason : null;
      const fm = err?.fieldMessages ?? {};
      const shown: Partial<Record<InquiryField, string>> = {};
      for (const k of ["mode", "kakaoType", "kakaoUrl"] as const) if (fm[k]) shown[k] = fm[k];
      setInqErrors(shown);
      revealInquiryError(shown);
      inqErr = Object.keys(shown).length > 0 ? "링크를 확인해 주세요." : ownerPlaceErrorMessage(err?.code ?? null, [], "잠시 후 다시 시도해 주세요.");
    }
    if (!baseErr && !inqErr) {
      toast.success("저장했어요. 바로 반영됩니다.");
    } else if (dirty && inqDirty) {
      if (baseErr && inqErr) setSaveError(`기본 정보와 문의 방식 모두 저장하지 못했어요. 기본 정보: ${baseErr} 문의 방식: ${inqErr}`);
      else if (inqErr) setSaveError(`기본 정보는 저장했어요. 문의 방식은 저장하지 못했어요: ${inqErr}`);
      else setSaveError(`문의 방식은 저장했어요. 기본 정보는 저장하지 못했어요: ${baseErr}`);
    } else {
      setSaveError(baseErr ?? `문의 방식을 저장하지 못했어요: ${inqErr}`);
    }
    setSaving(false);
  };

  const revert = () => {
    if (!view) return;
    setDraft(view.data);
    setTagText(view.data.hashtags.join(", "));
    setBiz(view.businessRegistrationNumber ?? "");
    setAddrQuery(view.data.address);
    setAddrCandidates([]);
    setBadFields([]);
    setSaveError(null);
    setInqDraft(draftOf(inqServer));
    setInqErrors({});
  };

  const searchAddress = async () => {
    const q = addrQuery.trim();
    if (!q) return;
    setAddrSearching(true);
    try {
      const found = await searchAddressCandidates(q);
      setAddrCandidates(found);
      if (found.length === 0) toast.info("검색된 주소가 없어요. 다르게 적어 보세요.");
    } catch (e) {
      console.error("[address-search]", e);
      toast.error("주소를 찾지 못했어요. 잠시 후 다시 시도해 주세요.");
    } finally {
      setAddrSearching(false);
    }
  };

  /** 지오코딩 결과 하나를 고르면 address·lat·lng 를 한꺼번에 바꿉니다(C4 — 셋이 따로 놀지 않게). regionId 는 건드리지 않습니다. */
  const pickAddress = (c: GeocodeCandidate) => {
    setDraft((d) => (d ? { ...d, address: c.address, lat: c.lat, lng: c.lng } : d));
    setAddrQuery(c.address);
    setAddrCandidates([]);
    setAddrOpen(false);
  };

  /** 하위 항목(프로그램·강사) 접기 — PC 는 버튼 없이 항상 펼침(기존 화면 그대로) */
  const subToggle = (key: string, name: string) =>
    desktop ? null : (
      <SmallButton
        type="button"
        style={{ marginLeft: "auto" }}
        aria-expanded={itemOpen(key)}
        aria-controls={`${key}-body`}
        aria-label={`${name} ${itemOpen(key) ? "접기" : "편집"}`}
        onClick={() => setItemOpen(key, !itemOpen(key))}
      >
        {itemOpen(key) ? "접기" : "편집"}
      </SmallButton>
    );
  const subBody = (key: string, children: ReactNode) =>
    desktop ? (
      children
    ) : (
      <SubBody id={`${key}-body`} hidden={!itemOpen(key)}>
        {children}
      </SubBody>
    );

  /** Fold 공통 props — 모바일 펼침 상태·수정됨 표시 */
  const fold = (id: OwnerSectionId, extraDirty = false) => ({
    desktop,
    id,
    dirty: extraDirty || dirtySecs.has(id),
    open: openSec === id,
    onToggle: () => toggleSec(id),
  });

  const fieldError = (f: OwnerEditableField) =>
    badFields.includes(f) ? <ErrorText>{OWNER_FIELD_LABELS[f]} 값을 확인해 주세요.</ErrorText> : null;

  return (
    <Page $desktop={desktop}>
      {!authReady ? null : !isMember ? (
        <LoginRequired />
      ) : loadError ? (
        <Card>
          <CardTitle>편집할 수 없어요</CardTitle>
          <Muted>{loadError}</Muted>
          <div style={{ marginTop: 12 }}>
            <SmallButton type="button" onClick={() => navigate("/profile/places")}>
              내 센터 관리
            </SmallButton>
          </div>
        </Card>
      ) : !draft || !view ? (
        <Muted>불러오는 중…</Muted>
      ) : (
        <Editor $desktop={desktop} data-testid="owner-editor" data-layout={desktop ? "desktop" : "mobile"}>
          <Head $desktop={desktop}>
            <h1>{mode === "basic" ? "센터 정보 수정" : "프로그램·상세 정보 관리"}</h1>
            <p>{mode === "basic" ? "센터의 정보를 최신 상태로 유지하세요." : "소개·시설·프로그램·강사 정보를 관리하세요."}</p>
            {/* 목업(pc_4)에 없는 두 화면 간 이동 — 화면을 나눈 대신 넣은 최소 장치 */}
            <nav aria-label="편집 화면">
              <SubNav
                type="button"
                $on={mode === "basic"}
                aria-current={mode === "basic" ? "page" : undefined}
                onClick={() => navigate(`/profile/places/${encodeURIComponent(view.placeId)}/edit`)}
              >
                기본 정보·사진
              </SubNav>
              <SubNav
                type="button"
                $on={mode === "details"}
                aria-current={mode === "details" ? "page" : undefined}
                onClick={() => navigate(`/profile/places/${encodeURIComponent(view.placeId)}/details`)}
              >
                프로그램·상세 정보
              </SubNav>
            </nav>
          </Head>

          {mode === "basic" && (
          <Fold {...fold("owner-basic")} title="기본 정보" desktopTitle={false} ariaLabel="기본 정보" summary={[draft.name, draft.address].filter(Boolean).join(" · ") || "센터 이름·주소"}>
            <Stack>
            {can("name") && (
              <Field className="wide">
                <Label htmlFor="owner-name">센터 이름</Label>
                <TextInput
                  id="owner-name"
                  maxLength={100}
                  value={draft.name}
                  onChange={(e) => set("name", e.target.value)}
                  placeholder="센터 이름을 입력해주세요"
                />
                {fieldError("name")}
              </Field>
            )}
            {/* 주소·사업자등록번호 — 오너 편집(C4·C5). 서버가 허용하지 않으면(editableFields 에 없으면) 읽기 전용 */}
              <Field>
                <Label htmlFor="owner-biz">사업자 등록번호</Label>
                <TextInput
                  id="owner-biz"
                  inputMode="numeric"
                  maxLength={20}
                  readOnly={!can("businessRegistrationNumber")}
                  value={biz}
                  onChange={(e) => setBiz(e.target.value)}
                  placeholder="사업자 등록번호를 입력해주세요"
                  aria-invalid={badFields.includes("businessRegistrationNumber") || undefined}
                />
                {fieldError("businessRegistrationNumber")}
              </Field>
              <Field>
                <Label htmlFor="owner-address">주소 검색</Label>
                {/* tw: flex gap-2 — 입력은 목업처럼 readonly(현재 주소), "주소 찾기"를 누르면 아래에 검색 칸이 열립니다 */}
                <div style={{ display: "flex", gap: 8 }}>
                  <TextInput
                    id="owner-address"
                    readOnly
                    value={draft.address}
                    aria-invalid={badFields.includes("address") || undefined}
                  />
                  <SoftButton
                    type="button"
                    disabled={!can("address")}
                    aria-expanded={addrOpen}
                    onClick={() => setAddrOpen((v) => !v)}
                  >
                    주소 찾기
                  </SoftButton>
                </div>
                {addrOpen && (
                  <div style={{ marginTop: 12 }}>
                    <div style={{ display: "flex", gap: 8 }}>
                      <TextInput
                        aria-label="주소 검색어"
                        value={addrQuery}
                        autoFocus
                        onChange={(e) => setAddrQuery(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            void searchAddress();
                          }
                        }}
                        placeholder="도로명·지번 주소"
                      />
                      <SoftButton type="button" disabled={addrSearching || !addrQuery.trim()} onClick={() => void searchAddress()}>
                        {addrSearching ? "찾는 중…" : "검색"}
                      </SoftButton>
                    </div>
                    {addrCandidates.length > 0 && (
                      <ul role="listbox" aria-label="주소 검색 결과" style={{ listStyle: "none", margin: "8px 0 0", padding: 0 }}>
                        {addrCandidates.map((c) => (
                          <li key={`${c.address}-${c.lat}-${c.lng}`} style={{ marginBottom: 6 }}>
                            <Candidate type="button" role="option" aria-selected={false} onClick={() => pickAddress(c)}>
                              {c.address}
                            </Candidate>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
                {draft.address !== view.data.address && (
                  <Hint>지역은 저장할 때 바뀐 주소에 맞춰 서버가 다시 정해요.</Hint>
                )}
                {fieldError("address")}
              </Field>
              {can("addressDetail") && (
                <Field>
                  <Label htmlFor="owner-address-detail">상세 주소</Label>
                  <TextInput
                    id="owner-address-detail"
                    maxLength={200}
                    value={draft.addressDetail ?? ""}
                    onChange={(e) => set("addressDetail", e.target.value)}
                    placeholder="상세 주소를 입력해주세요"
                    aria-invalid={badFields.includes("addressDetail") || undefined}
                  />
                  {fieldError("addressDetail")}
                </Field>
              )}
            </Stack>
          </Fold>
          )}

          {mode === "basic" && can("photos") && (
            <Fold {...fold("owner-photos")} title="센터 사진 관리" summary={`사진 ${(draft.photos ?? []).length}장`}>
              <CardDesc>사진을 드래그하여 노출 순서를 변경할 수 있습니다.</CardDesc>
              <OwnerPhotoList label="사진" photos={draft.photos ?? []} onChange={(photos) => set("photos", photos)} max={30} />
              {fieldError("photos")}
            </Fold>
          )}

          {mode === "basic" && (
            <Fold
              {...fold("owner-inquiry", inqDirty)}
              title="문의 방식"
              ariaLabel="문의 방식"
              summary={inqDraft.mode === "KAKAO" ? "카카오톡으로 받기" : "우리 채팅으로 받기"}
            >
              <CardDesc>
                고객이 장소 상세의 &lsquo;문의하기&rsquo;를 누르면 어디로 연결할지 고르세요. 카카오톡으로 바꿔도 진행 중인 대화는 1:1 문의에서 계속
                답변할 수 있어요.
              </CardDesc>
              {inqLoadError ? (
                <Muted>문의 방식을 불러오지 못했어요. 새로고침해 주세요.</Muted>
              ) : !inqServer ? (
                <Muted>불러오는 중…</Muted>
              ) : (
                <Stack>
                  <Choices role="radiogroup" aria-label="문의 받는 방법">
                    <Choice $on={inqDraft.mode === "CHAT"}>
                      <input
                        type="radio"
                        name="owner-inquiry-mode"
                        aria-labelledby="owner-inq-chat"
                        aria-describedby="owner-inq-chat-desc"
                        checked={inqDraft.mode === "CHAT"}
                        onChange={() => setInq({ mode: "CHAT" })}
                      />
                      <span className="t">
                        <strong id="owner-inq-chat">우리 채팅으로 받기</strong>
                        <small id="owner-inq-chat-desc">앱 안 1:1 문의로 받고 센터 관리에서 답변해요.</small>
                      </span>
                    </Choice>
                    <Choice $on={inqDraft.mode === "KAKAO"}>
                      <input
                        type="radio"
                        name="owner-inquiry-mode"
                        aria-labelledby="owner-inq-kakao"
                        aria-describedby="owner-inq-kakao-desc"
                        checked={inqDraft.mode === "KAKAO"}
                        onChange={() => setInq({ mode: "KAKAO", kakaoType: inqDraft.kakaoType ?? "OPEN_CHAT" })}
                      />
                      <span className="t">
                        <strong id="owner-inq-kakao">카카오톡으로 받기</strong>
                        <small id="owner-inq-kakao-desc">오픈채팅 또는 카카오톡 채널 링크로 연결해요.</small>
                      </span>
                    </Choice>
                  </Choices>
                  {inqDraft.mode === "KAKAO" && (
                    <>
                      <Field>
                        <Label as="span" id="owner-kakao-type-label">
                          카카오톡 종류
                        </Label>
                        <div role="radiogroup" aria-labelledby="owner-kakao-type-label" style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                          {(
                            [
                              ["OPEN_CHAT", "오픈채팅"],
                              ["CHANNEL", "카카오톡 채널"],
                            ] as const
                          ).map(([t, label]) => (
                            <TypePill key={t} $on={inqDraft.kakaoType === t}>
                              <input type="radio" name="owner-kakao-type" checked={inqDraft.kakaoType === t} onChange={() => setInq({ kakaoType: t })} />
                              {label}
                            </TypePill>
                          ))}
                        </div>
                        {inqErrors.kakaoType && <ErrorText>카카오톡 종류를 골라 주세요.</ErrorText>}
                      </Field>
                      <Field>
                        <Label htmlFor="owner-kakao-url">카카오톡 링크</Label>
                        <TextInput
                          id="owner-kakao-url"
                          inputMode="url"
                          autoComplete="off"
                          spellCheck={false}
                          value={inqDraft.kakaoUrl}
                          placeholder={KAKAO_URL_PLACEHOLDER[inqDraft.kakaoType ?? "OPEN_CHAT"]}
                          aria-invalid={inqErrors.kakaoUrl ? true : undefined}
                          aria-describedby="owner-kakao-url-hint"
                          onChange={(e) => setInq({ kakaoUrl: e.target.value })}
                        />
                        {inqErrors.kakaoUrl ? (
                          <ErrorText id="owner-kakao-url-hint">{inqErrors.kakaoUrl}</ErrorText>
                        ) : (
                          <Hint id="owner-kakao-url-hint">
                            {inqDraft.kakaoType === "CHANNEL"
                              ? "카카오톡 채널 관리자센터의 채널 URL(https://pf.kakao.com/…)을 붙여 넣으세요. 끝에 /chat 이 붙은 주소도 돼요."
                              : "오픈채팅방 공유 링크(https://open.kakao.com/o/…)를 붙여 넣으세요."}
                          </Hint>
                        )}
                      </Field>
                    </>
                  )}
                  {inqErrors.mode && <ErrorText>{inqErrors.mode}</ErrorText>}
                </Stack>
              )}
            </Fold>
          )}

          {mode === "details" && (
            <Fold {...fold("owner-intro")} title="소개 정보" summary={firstLine(draft.shortDescription) || "한 줄 소개·상세 소개·요금·링크"}>
              <FieldGrid>
            {can("shortDescription") && (
              <Field className="wide">
                <Label htmlFor="owner-short">한 줄 소개 (마크다운)</Label>
                <TextArea
                  id="owner-short"
                  style={{ minHeight: 72 }}
                  value={draft.shortDescription}
                  onChange={(e) => set("shortDescription", e.target.value)}
                />
              </Field>
            )}
            {can("description") && (
              <Field className="wide">
                <Label htmlFor="owner-desc">상세 소개 (마크다운)</Label>
                <TextArea id="owner-desc" value={draft.description} onChange={(e) => set("description", e.target.value)} />
              </Field>
            )}
            {can("hashtags") && (
              <Field>
                <Label htmlFor="owner-tags">해시태그</Label>
                <TextInput id="owner-tags" value={tagText} onChange={(e) => setTagText(e.target.value)} placeholder="쉼표로 구분 (예: 호흡명상, 숲)" />
              </Field>
            )}
            {can("duration") && (
              <Field>
                <Label htmlFor="owner-duration">소요 시간</Label>
                <TextInput id="owner-duration" value={draft.duration} onChange={(e) => set("duration", e.target.value)} />
              </Field>
            )}
            {can("admissionFee") && (
              <Field>
                <Label htmlFor="owner-fee">이용 요금 (마크다운)</Label>
                <TextArea
                  id="owner-fee"
                  style={{ minHeight: 72 }}
                  value={draft.admissionFee ?? ""}
                  onChange={(e) => set("admissionFee", e.target.value)}
                />
              </Field>
            )}
            {can("organization") && (
              <Field>
                <Label htmlFor="owner-org">운영 기관</Label>
                <TextInput
                  id="owner-org"
                  value={draft.organization.name}
                  onChange={(e) => set("organization", { ...draft.organization, name: e.target.value })}
                />
              </Field>
            )}
            {can("externalLink") && (
              <Field>
                <Label htmlFor="owner-link">외부 링크</Label>
                <TextInput
                  id="owner-link"
                  inputMode="url"
                  value={draft.externalLink}
                  onChange={(e) => set("externalLink", e.target.value)}
                  placeholder="https://"
                />
                {fieldError("externalLink")}
              </Field>
            )}
              </FieldGrid>
            </Fold>
          )}

          {mode === "details" && can("thumbnailUrl") && (
            <Fold {...fold("owner-thumbnail")} title="목록 썸네일" summary={draft.thumbnailUrl ? "등록됨" : "없음"}>
              {can("thumbnailUrl") && (
                <Field>
                  <Label as="span">목록 썸네일</Label>
                  <OwnerPhotoList
                    photos={draft.thumbnailUrl ? [draft.thumbnailUrl] : []}
                    onChange={(urls) => set("thumbnailUrl", urls[0] ?? "")}
                    max={1}
                    markFirst={false}
                  />
                  {fieldError("thumbnailUrl")}
                </Field>
              )}
            </Fold>
          )}

          {mode === "details" && can("facilities") && (
            <Fold {...fold("owner-facilities")} title="시설" summary={`${(draft.facilities ?? []).length}개 선택`}>
              {FACILITY_GROUPS.map((g) => (
                <div key={g.title}>
                  <Hint>{g.title}</Hint>
                  <Chips>
                    {g.items.map((f) => {
                      const current = draft.facilities ?? [];
                      const on = current.some((x) => resolveFacilityKey(x) === f.key);
                      return (
                        <Chip
                          key={f.key}
                          type="button"
                          $on={on}
                          aria-pressed={on}
                          onClick={() =>
                            set(
                              "facilities",
                              on ? current.filter((x) => resolveFacilityKey(x) !== f.key) : [...current, f.key]
                            )
                          }
                        >
                          {f.label}
                        </Chip>
                      );
                    })}
                  </Chips>
                </div>
              ))}
            </Fold>
          )}

          {mode === "details" && can("detailSections") && (
            <Fold {...fold("owner-sections")} title="안내 항목" summary={`${draft.detailSections.length}개`}>
              <ItemGrid>
              {draft.detailSections.map((s, i) => (
                <SubCard key={i}>
                  <SubHead>
                    <strong>{s.title || "(제목 없음)"}</strong>
                    <SmallButton
                      type="button"
                      onClick={() => set("detailSections", draft.detailSections.filter((_, j) => j !== i))}
                    >
                      삭제
                    </SmallButton>
                  </SubHead>
                  <Field>
                    <TextInput
                      aria-label="항목 제목"
                      value={s.title}
                      onChange={(e) =>
                        set(
                          "detailSections",
                          draft.detailSections.map((x, j) => (j === i ? { ...x, title: e.target.value } : x))
                        )
                      }
                    />
                  </Field>
                  <TextArea
                    aria-label="항목 내용"
                    value={s.body}
                    onChange={(e) =>
                      set(
                        "detailSections",
                        draft.detailSections.map((x, j) => (j === i ? { ...x, body: e.target.value } : x))
                      )
                    }
                  />
                </SubCard>
              ))}
              </ItemGrid>
              <SmallButton
                type="button"
                onClick={() => set("detailSections", [...draft.detailSections, { title: "", body: "" }])}
              >
                + 항목 추가
              </SmallButton>
            </Fold>
          )}

          {mode === "details" && can("programs") && (
            <Fold {...fold("owner-programs")} title="행사·프로그램" summary={`${(draft.programs ?? []).length}개`}>
              <Muted style={{ marginBottom: 10 }}>후기는 이용자가 남긴 그대로 유지돼요.</Muted>
              <ItemGrid>
              {(draft.programs ?? []).map((p, i) => (
                <SubCard key={p.id}>
                  <SubHead>
                    <strong>{p.title || "(제목 없음)"}</strong>
                    {subToggle(`program-${p.id}`, p.title || "프로그램")}
                    <SmallButton
                      type="button"
                      onClick={() => set("programs", (draft.programs ?? []).filter((_, j) => j !== i))}
                    >
                      삭제
                    </SmallButton>
                  </SubHead>
                  {subBody(`program-${p.id}`, <>
                  <Field>
                    <Label as="span">구분</Label>
                    <Select
                      aria-label="구분"
                      value={p.kind ?? "program"}
                      onChange={(e) => updateProgram(i, { kind: e.target.value as "event" | "program" })}
                    >
                      <option value="program">프로그램</option>
                      <option value="event">행사</option>
                    </Select>
                  </Field>
                  <Field>
                    <Label as="span">제목</Label>
                    <TextInput aria-label="제목" value={p.title} onChange={(e) => updateProgram(i, { title: e.target.value })} />
                  </Field>
                  <Field>
                    <Label as="span">기간 {p.kind === "event" ? "" : "(선택)"}</Label>
                    <DateRow>
                      <TextInput
                        type="date"
                        aria-label="시작일"
                        value={p.startDate ?? ""}
                        onChange={(e) => updateProgram(i, { startDate: e.target.value || undefined })}
                      />
                      <TextInput
                        type="date"
                        aria-label="종료일"
                        value={p.endDate ?? ""}
                        onChange={(e) => updateProgram(i, { endDate: e.target.value || undefined })}
                      />
                    </DateRow>
                  </Field>
                  <Field>
                    <Label as="span">사진</Label>
                    <OwnerPhotoList
                      photos={programPhotosOrdered(p.imageUrl, p.imageUrls)}
                      onChange={(urls) => updateProgram(i, orderedPhotosToProgram(urls))}
                      max={10}
                    />
                  </Field>
                  <Field>
                    <Label as="span">소개 (마크다운)</Label>
                    <TextArea
                      aria-label="소개"
                      value={p.bodyFromVenue}
                      onChange={(e) => updateProgram(i, { bodyFromVenue: e.target.value })}
                    />
                  </Field>
                  </>)}
                </SubCard>
              ))}
              </ItemGrid>
              {fieldError("programs")}
              <SmallButton type="button" onClick={addProgram}>
                + 프로그램 추가
              </SmallButton>
            </Fold>
          )}

          {mode === "details" && can("instructors") && (
            <Fold {...fold("owner-instructors")} title="강사" summary={`${(draft.instructors ?? []).length}명`}>
              <ItemGrid>
              {(draft.instructors ?? []).map((x, i) => (
                <SubCard key={x.id}>
                  <SubHead>
                    <strong>{x.name || "(이름 없음)"}</strong>
                    {subToggle(`instructor-${x.id}`, x.name || "강사")}
                    <SmallButton
                      type="button"
                      onClick={() => set("instructors", (draft.instructors ?? []).filter((_, j) => j !== i))}
                    >
                      삭제
                    </SmallButton>
                  </SubHead>
                  {subBody(`instructor-${x.id}`, <>
                  <Field>
                    <TextInput aria-label="강사 이름" value={x.name} onChange={(e) => updateInstructor(i, { name: e.target.value })} />
                  </Field>
                  <Field>
                    <Label as="span">사진</Label>
                    <OwnerPhotoList
                      photos={x.photoUrl ? [x.photoUrl] : []}
                      onChange={(urls) => updateInstructor(i, { photoUrl: urls[0] ?? "" })}
                      max={1}
                      markFirst={false}
                    />
                  </Field>
                  <TextArea aria-label="강사 소개" value={x.intro} onChange={(e) => updateInstructor(i, { intro: e.target.value })} />
                  </>)}
                </SubCard>
              ))}
              </ItemGrid>
              {fieldError("instructors")}
              <SmallButton
                type="button"
                onClick={() => {
                  const id = nextNestedNumericId(draft.instructors ?? []);
                  setItemOpen(`instructor-${id}`, true);
                  set("instructors", [
                    ...(draft.instructors ?? []),
                    { id, name: "", photoUrl: "", intro: "", reviews: [] },
                  ]);
                }}
              >
                + 강사 추가
              </SmallButton>
            </Fold>
          )}

          <SaveBar $desktop={desktop}>
            <div className="inner">
              {saveError ? (
                <p className="err" role="alert">
                  {saveError}
                </p>
              ) : null}
              <CancelButton type="button" disabled={!anyDirty || saving} onClick={revert}>
                취소
              </CancelButton>
              <SaveButton type="button" disabled={!anyDirty || saving} onClick={() => void save()}>
                {saving ? "저장 중…" : "변경사항 저장하기"}
              </SaveButton>
            </div>
          </SaveBar>
        </Editor>
      )}
    </Page>
  );
}
