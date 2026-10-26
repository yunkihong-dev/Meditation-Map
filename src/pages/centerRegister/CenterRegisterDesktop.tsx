import { useRef, type ReactNode } from "react";
import styled, { css } from "styled-components";
import Icon from "@/components/common/Icon";
import RegisterPhotoGrid from "@/components/centerManagement/RegisterPhotoGrid";
import {
  C,
  TY,
  a,
  glassPanel85,
  inputPc2,
  shadowMd,
  softElevation,
  tAll,
  tColors,
  PRIMARY_RGB,
} from "@/components/centerManagement/cmKit";
import type { GeocodeCandidate } from "@/services/meditation/naverGeocode";
import type { MeditationPlace } from "@/services/meditation/types";
import type { ClaimAvailability } from "@/services/placeClaims/types";
import CenterRegisterDone from "@/pages/centerRegister/CenterRegisterDone";

/*
 * 센터 등록·소유권 요청 PC — `관리화면 예시/pc_1` 구성(제목 → PC 권장 배너 → 3단계 카드 → 두 카드), 마크업은 pc_2 code.html
 * (사용자 지시로 pc_2 의 점 3개 단계 표시는 3단계 카드와 중복이라 뺐습니다). 사진은 `_2`.
 * 상태는 모두 CenterRegisterPage 가 들고, 이 컴포넌트는 그리기만 합니다(폭이 바뀌어도 입력값 유지).
 * 목업에 없는 우리 것: 소유권 요청을 누른 뒤 같은 카드에 열리는 요청 폼(연락처·사업자번호·메모·증빙) —
 * 목업에는 요청 이후 화면이 없어 같은 카드·입력 조각으로 그립니다.
 */

export interface CenterRegisterVM {
  centerQuery: string;
  setCenterQuery: (v: string) => void;
  matches: MeditationPlace[];
  availabilityOf: (place: MeditationPlace) => ClaimAvailability | null;
  regionName: (place: MeditationPlace) => string;
  startClaim: (place: MeditationPlace) => void;
  claimTarget: MeditationPlace | null;
  backToSearch: () => void;
  onOpenMine: (place: MeditationPlace) => void;
  onOpenPending: () => void;
  memo: string;
  setMemo: (v: string) => void;
  evidence: File | null;
  evidenceError: string | null;
  pickEvidence: (f: File | null) => void;
  canSubmitClaim: boolean;
  handleClaim: () => void;
  bizNumber: string;
  setBizNumber: (v: string) => void;
  contact: string;
  setContact: (v: string) => void;
  busy: boolean;
  name: string;
  setName: (v: string) => void;
  addressQuery: string;
  setAddressQuery: (v: string) => void;
  searching: boolean;
  handleAddressSearch: () => void;
  candidates: GeocodeCandidate[];
  picked: GeocodeCandidate | null;
  setPicked: (c: GeocodeCandidate | null) => void;
  detailAddress: string;
  setDetailAddress: (v: string) => void;
  photos: string[];
  setPhotos: (p: string[]) => void;
  maxPhotos: number;
  uploading: boolean;
  handleAddPhotos: (files: FileList | null) => void;
  /** 신규 등록 회신 이메일은 로그인 회원 이메일로 자동(없으면 신청 불가) */
  sessionEmail: string | null;
  canSubmitCreate: boolean;
  handleSubmit: () => void;
  submitted: boolean;
  submittedKind: "claim" | "create";
  goHome: () => void;
  goClaims: () => void;
  goMyCenters: () => void;
  goRegister: () => void;
  goProfile: () => void;
}

/** tw: max-w-[1200px] mx-auto w-full */
const Wrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

/** tw: header mb-10 / h2 font-display-lg text-primary mb-2 / p font-body-lg text-on-surface-variant */
const Head = styled.header`
  margin-bottom: 40px;

  h2 {
    margin: 0 0 8px;
    ${TY.displayLg};
    color: ${C.primary};
  }

  p {
    margin: 0;
    ${TY.bodyLg};
    color: ${C.onSurfaceVariant};
  }
`;



/** tw: mb-10 bg-secondary-container/50 border border-secondary-container rounded-[16px] p-4 flex items-start gap-4 */
const Notice = styled.div`
  margin-bottom: 40px;
  background: ${a(C.secondaryContainer, 0.5)};
  border: 1px solid ${C.secondaryContainer};
  border-radius: 16px;
  padding: 16px;
  display: flex;
  align-items: flex-start;
  gap: 16px;

  .material-symbols-outlined {
    /* tw: text-primary-container mt-1 */
    color: ${C.primaryContainer};
    margin-top: 4px;
  }

  .t1 {
    /* tw: font-label-md text-on-surface font-semibold */
    margin: 0;
    ${TY.labelMd};
    color: ${C.onSurface};
    font-weight: 600;
  }

  .t2 {
    /* tw: font-body-md text-sm text-on-surface-variant mt-1 */
    margin: 4px 0 0;
    ${TY.bodyMd};
    ${TY.sm};
    color: ${C.onSurfaceVariant};
  }
`;

/** tw: section mb-12 > flex md:flex-row items-center justify-between gap-4 relative (+ 연결선) */
const Guide = styled.section`
  margin-bottom: 48px;

  .row {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  }

  .row::before {
    /* tw: hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-surface-variant -z-10 translate-y-[-50%] */
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 2px;
    background: ${C.surfaceVariant};
    transform: translateY(-50%);
    z-index: 0;
  }
`;

/** tw: bg-surface-container-lowest glass-panel rounded-[24px] p-6 w-full md:w-[30%] flex flex-col items-center text-center soft-elevation z-10 */
const GuideCard = styled.div<{ $on: boolean }>`
  background: ${C.surfaceContainerLowest};
  ${glassPanel85};
  ${softElevation};
  border-radius: 24px;
  padding: 24px;
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  z-index: 10;
  position: relative;

  .circle {
    /* tw: w-12 h-12 rounded-full bg-primary-container text-on-primary-container (비활성: bg-surface-variant text-on-surface-variant) mb-4 */
    width: 48px;
    height: 48px;
    border-radius: 9999px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
    background: ${({ $on }) => ($on ? C.primaryContainer : C.surfaceVariant)};
    color: ${({ $on }) => ($on ? C.onPrimaryContainer : C.onSurfaceVariant)};
  }

  h4 {
    /* tw: font-label-md font-bold mb-2 */
    margin: 0 0 8px;
    ${TY.labelMd};
    font-weight: 700;
  }

  p {
    /* tw: font-body-md text-sm text-on-surface-variant */
    margin: 0;
    ${TY.bodyMd};
    ${TY.sm};
    color: ${C.onSurfaceVariant};
  }
`;

/** tw: grid grid-cols-1 lg:grid-cols-12 gap-8 (좌 col-span-5, 우 col-span-7) */
const Cols = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 32px;

  .left {
    grid-column: span 5 / span 5;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .right {
    grid-column: span 7 / span 7;
  }
`;

/** tw: bg-surface-container-lowest glass-panel rounded-[24px] p-8 soft-elevation */
const Card = styled.section<{ $full?: boolean }>`
  background: ${C.surfaceContainerLowest};
  ${glassPanel85};
  ${softElevation};
  border-radius: 24px;
  padding: 32px;
  ${({ $full }) =>
    $full &&
    css`
      height: 100%;
    `}
`;

/** tw: flex items-center gap-3 mb-6 / icon text-primary text-2xl / h3 font-headline-lg-mobile text-on-surface m-0 */
const CardHead = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;

  .material-symbols-outlined {
    color: ${C.primary};
  }

  h3 {
    margin: 0;
    ${TY.headlineLgMobile};
    color: ${C.onSurface};
    word-break: keep-all;
  }
`;

/** tw: font-body-md text-on-surface-variant mb-6|mb-8 */
const Desc = styled.p<{ $mb: number }>`
  margin: 0 0 ${({ $mb }) => $mb}px;
  ${TY.bodyMd};
  color: ${C.onSurfaceVariant};
`;

/** tw: relative mb-8 / icon absolute left-4 top-1/2 -translate-y-1/2 text-outline / input … pl-12 pr-4 py-4 transition-all */
const Search = styled.div`
  position: relative;
  margin-bottom: 32px;

  .material-symbols-outlined {
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    color: ${C.outline};
  }

  input {
    ${inputPc2};
    padding: 16px 16px 16px 48px;
    ${tAll()};
  }
`;

/** tw: border border-outline-variant/20 rounded-[16px] p-5 hover:bg-surface-container/30 transition-colors */
const Result = styled.div`
  border: 1px solid ${a(C.outlineVariant, 0.2)};
  border-radius: 16px;
  padding: 20px;
  ${tColors()};

  & + & {
    margin-top: 16px;
  }

  &:hover {
    background: ${a(C.surfaceContainer, 0.3)};
  }

  h4 {
    /* tw: font-label-md font-bold text-on-surface mb-1 */
    margin: 0 0 4px;
    ${TY.labelMd};
    font-weight: 700;
    color: ${C.onSurface};
  }

  p {
    /* tw: font-body-md text-sm text-on-surface-variant mb-2 */
    margin: 0 0 8px;
    ${TY.bodyMd};
    ${TY.sm};
    color: ${C.onSurfaceVariant};
  }

  .chip {
    /* tw: inline-block px-3 py-1 bg-surface-variant/50 rounded-full text-xs font-label-md text-on-surface-variant */
    display: inline-block;
    padding: 4px 12px;
    background: ${a(C.surfaceVariant, 0.5)};
    border-radius: 9999px;
    ${TY.labelMd};
    ${TY.xs};
    color: ${C.onSurfaceVariant};
  }
`;

/** tw: mt-4 w-full bg-surface-container-high hover:bg-primary hover:text-on-primary text-primary transition-colors duration-300 py-3 rounded-[24px] font-label-md font-semibold */
const ResultBtn = styled.button`
  margin-top: 16px;
  width: 100%;
  padding: 12px 0;
  border: 0;
  border-radius: 24px;
  background: ${C.surfaceContainerHigh};
  color: ${C.primary};
  ${TY.labelMd};
  font-weight: 600;
  cursor: pointer;
  ${tColors(300)};

  &:hover:not(:disabled) {
    background: ${C.primary};
    color: ${C.onPrimary};
  }

  &:disabled {
    color: ${C.outline};
    cursor: default;
  }
`;

/** tw: form space-y-6 */
const Form = styled.form`
  & > * + * {
    margin-top: 24px;
  }
`;

/** tw: block font-label-md text-on-surface mb-2 */
const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  ${TY.labelMd};
  color: ${C.onSurface};
`;

const Input = styled.input`
  ${inputPc2};
`;

const TextArea = styled.textarea`
  ${inputPc2};
  min-height: 120px;
  resize: vertical;
  font-family: inherit;
`;

/** tw: grid grid-cols-1 md:grid-cols-2 gap-6 */
const Two = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
`;

/** tw: bg-secondary-container text-on-secondary-container px-6 rounded-[16px] font-label-md hover:bg-secondary-container/80 transition-colors */
const FindBtn = styled.button`
  flex-shrink: 0;
  border: 0;
  padding: 0 24px;
  border-radius: 16px;
  background: ${C.secondaryContainer};
  color: ${C.onSecondaryContainer};
  ${TY.labelMd};
  white-space: nowrap;
  cursor: pointer;
  ${tColors()};

  &:hover:not(:disabled) {
    background: ${a(C.secondaryContainer, 0.8)};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

const Candidates = styled.ul`
  list-style: none;
  margin: 8px 0 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;

  button {
    ${inputPc2};
    text-align: left;
    cursor: pointer;
    ${tColors()};

    &[aria-selected="true"] {
      border-color: ${C.primaryContainer};
      background: ${a(C.primaryContainer, 0.1)};
    }

    &:hover {
      background: ${a(C.surfaceContainer, 0.6)};
    }
  }
`;

/** tw: pt-6 border-t border-outline-variant/20 flex justify-end */
const Submit = styled.div`
  padding-top: 24px;
  border-top: 1px solid ${a(C.outlineVariant, 0.2)};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
`;

/** tw: bg-primary hover:bg-primary/90 text-on-primary py-4 px-10 rounded-[24px] font-label-md font-bold transition-all shadow-md shadow-primary/20 flex items-center gap-2 */
const PrimaryBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px 40px;
  border: 0;
  border-radius: 24px;
  background: ${C.primary};
  color: ${C.onPrimary};
  ${TY.labelMd};
  font-weight: 700;
  box-shadow: ${shadowMd(PRIMARY_RGB, 0.2)};
  white-space: nowrap;
  flex-shrink: 0;
  cursor: pointer;
  ${tAll()};

  &:hover:not(:disabled) {
    background: ${a(C.primary, 0.9)};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .material-symbols-outlined {
    font-size: 14px !important;
    width: 14px !important;
    height: 14px !important;
  }
`;

const Hint = styled.p<{ $error?: boolean }>`
  margin: 8px 0 0;
  ${TY.sm};
  color: ${({ $error }) => ($error ? C.error : C.outline)};
`;

const CHIP: Record<ClaimAvailability, string> = {
  claim: "소유권 미설정",
  pending: "검토 중",
  mine: "내 센터",
  owned: "관리자 있음",
};

function ResultAction({ vm, place }: { vm: CenterRegisterVM; place: MeditationPlace }): ReactNode {
  const av = vm.availabilityOf(place);
  if (av === "mine") return <ResultBtn type="button" onClick={() => vm.onOpenMine(place)}>내 센터 관리로 가기</ResultBtn>;
  if (av === "pending") return <ResultBtn type="button" onClick={vm.onOpenPending}>요청 검토 중 · 신청 내역 보기</ResultBtn>;
  if (av === "owned") return <ResultBtn type="button" disabled>이미 관리자가 있는 센터예요</ResultBtn>;
  return (
    <ResultBtn type="button" onClick={() => vm.startClaim(place)}>
      소유권 요청 (내 센터입니다)
    </ResultBtn>
  );
}

export default function CenterRegisterDesktop({ vm }: { vm: CenterRegisterVM }) {
  const evidenceRef = useRef<HTMLInputElement>(null);
  const activeStep = vm.submitted ? 2 : vm.claimTarget ? 1 : 0;

  return (
    <Wrap data-testid="center-register-desktop">
      <Head>
        <h2>명상센터 등록 및 소유권 요청</h2>
        <p>위치 인증을 통해 명상 네트워크에 참여하세요.</p>
      </Head>

      <Notice role="note">
        <Icon name="desktop_windows" />
        <div>
          <p className="t1">원활한 서류 업로드와 정보 입력을 위해 PC 환경에서 등록하시는 것을 권장합니다.</p>
          <p className="t2">PC 환경에서 등록하시기를 권장드립니다. 원활한 서류 업로드와 정보 입력을 위해 데스크탑을 이용해주세요.</p>
        </div>
      </Notice>

      <Guide>
        <div className="row">
          <GuideCard $on={activeStep === 0}>
            <div className="circle">
              <Icon name="search" />
            </div>
            <h4>1. 검색 및 입력</h4>
            <p>기존 센터를 찾거나 새로운 정보를 입력하세요.</p>
          </GuideCard>
          <GuideCard $on={activeStep === 1}>
            <div className="circle">
              <Icon name="assignment_turned_in" />
            </div>
            <h4>2. 승인 요청</h4>
            <p>본인 확인을 위한 서류를 제출합니다.</p>
          </GuideCard>
          <GuideCard $on={activeStep === 2}>
            <div className="circle">
              <Icon name="dashboard_customize" />
            </div>
            <h4>3. 관리</h4>
            <p>승인이 완료되면 센터 프로필을 직접 관리할 수 있습니다.</p>
          </GuideCard>
        </div>
      </Guide>

      {vm.submitted ? (
        <CenterRegisterDone
          kind={vm.submittedKind}
          onHome={vm.goHome}
          onRegister={vm.goRegister}
          onProfile={vm.goProfile}
          onClaims={vm.goClaims}
        />
      ) : (
        <Cols>
          <div className="left">
            <Card $full aria-labelledby="cm-claim-title">
              {vm.claimTarget ? (
                <>
                  <CardHead>
                    <Icon name="verified_user" />
                    <h3 id="cm-claim-title">소유권 요청</h3>
                  </CardHead>
                  <Result style={{ marginBottom: 24 }}>
                    <h4>{vm.claimTarget.name}</h4>
                    <p>{vm.claimTarget.address || vm.regionName(vm.claimTarget)}</p>
                  </Result>
                  <Form onSubmit={(e) => e.preventDefault()}>
                    <div>
                      <Label htmlFor="pc-claim-contact">연락처 (이메일 또는 전화번호)</Label>
                      <Input id="pc-claim-contact" maxLength={100} value={vm.contact} onChange={(e) => vm.setContact(e.target.value)} />
                    </div>
                    <div>
                      <Label htmlFor="pc-claim-biz">사업자 등록번호 (선택)</Label>
                      <Input
                        id="pc-claim-biz"
                        inputMode="numeric"
                        maxLength={20}
                        value={vm.bizNumber}
                        onChange={(e) => vm.setBizNumber(e.target.value)}
                        placeholder="000-00-00000"
                      />
                    </div>
                    <div>
                      <Label htmlFor="pc-claim-memo">메모 (선택)</Label>
                      <TextArea id="pc-claim-memo" maxLength={2000} value={vm.memo} onChange={(e) => vm.setMemo(e.target.value)} />
                    </div>
                    <div>
                      <Label htmlFor="pc-claim-evidence">증빙 파일 (선택)</Label>
                      <input
                        ref={evidenceRef}
                        id="pc-claim-evidence"
                        type="file"
                        accept="image/jpeg,image/png,image/webp,image/heic,.heic,application/pdf"
                        onChange={(e) => vm.pickEvidence(e.target.files?.[0] ?? null)}
                      />
                      {vm.evidence && <Hint>선택됨: {vm.evidence.name}</Hint>}
                      <Hint>사업자등록증 등 — 이미지(JPG·PNG·WEBP·HEIC) 또는 PDF, 10MB 이하. 관리자만 볼 수 있어요.</Hint>
                      {vm.evidenceError && (
                        <Hint $error role="alert">
                          {vm.evidenceError}
                        </Hint>
                      )}
                    </div>
                    <Submit style={{ justifyContent: "space-between" }}>
                      <FindBtn type="button" style={{ height: 52 }} onClick={vm.backToSearch}>
                        이전
                      </FindBtn>
                      <PrimaryBtn type="button" disabled={!vm.canSubmitClaim || vm.busy} onClick={vm.handleClaim}>
                        {vm.busy ? "요청 중…" : "소유권 요청하기"}
                        <Icon name="arrow_forward" />
                      </PrimaryBtn>
                    </Submit>
                  </Form>
                </>
              ) : (
                <>
                  <CardHead>
                    <Icon name="location_searching" />
                    <h3 id="cm-claim-title">센터 검색 및 소유권 요청</h3>
                  </CardHead>
                  <Desc $mb={24}>이미 등록된 센터인 경우 여기서 소유권을 요청할 수 있습니다.</Desc>
                  <Search>
                    <Icon name="search" />
                    <input
                      aria-label="센터 찾기"
                      type="text"
                      value={vm.centerQuery}
                      onChange={(e) => vm.setCenterQuery(e.target.value)}
                      placeholder="센터 이름 또는 주소 입력..."
                    />
                  </Search>
                  {vm.centerQuery.trim() && vm.matches.length === 0 && (
                    <Hint>찾는 센터가 없어요. 오른쪽에서 새로 등록해 주세요.</Hint>
                  )}
                  {vm.matches.map((place) => {
                    const av = vm.availabilityOf(place);
                    return (
                      <Result key={place.id}>
                        <h4>{place.name}</h4>
                        <p>{place.address || vm.regionName(place)}</p>
                        {av && <span className="chip">{CHIP[av]}</span>}
                        <ResultAction vm={vm} place={place} />
                      </Result>
                    );
                  })}
                </>
              )}
            </Card>
          </div>

          <div className="right">
            <Card aria-labelledby="cm-create-title">
              <CardHead>
                <Icon name="add_business" />
                <h3 id="cm-create-title">신규 센터 등록</h3>
              </CardHead>
              <Desc $mb={32}>찾으시는 센터가 없나요? 아래 양식을 작성하여 새롭게 등록하세요.</Desc>
              <Form onSubmit={(e) => e.preventDefault()}>
                <Two>
                  <div>
                    <Label htmlFor="pc-center-name">센터명</Label>
                    <Input id="pc-center-name" value={vm.name} onChange={(e) => vm.setName(e.target.value)} placeholder="예: 평온 명상 센터" />
                  </div>
                  <div>
                    <Label htmlFor="pc-center-biz">사업자 등록번호</Label>
                    <Input
                      id="pc-center-biz"
                      inputMode="numeric"
                      value={vm.bizNumber}
                      onChange={(e) => vm.setBizNumber(e.target.value)}
                      placeholder="000-00-00000"
                    />
                  </div>
                </Two>
                <div>
                  <Label htmlFor="pc-center-address">상세 주소</Label>
                  <div style={{ display: "flex", gap: 8 }}>
                    <Input
                      id="pc-center-address"
                      style={{ flex: 1 }}
                      value={vm.addressQuery}
                      onChange={(e) => {
                        vm.setAddressQuery(e.target.value);
                        vm.setPicked(null);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          vm.handleAddressSearch();
                        }
                      }}
                      placeholder="주소 검색"
                    />
                    <FindBtn
                      type="button"
                      disabled={vm.searching || vm.addressQuery.trim().length === 0}
                      onClick={vm.handleAddressSearch}
                    >
                      주소 찾기
                    </FindBtn>
                  </div>
                  {vm.candidates.length > 0 && (
                    <Candidates role="listbox" aria-label="주소 검색 결과">
                      {vm.candidates.map((c) => (
                        <li key={`${c.address}-${c.lat}-${c.lng}`}>
                          <button
                            type="button"
                            role="option"
                            aria-selected={vm.picked?.address === c.address}
                            onClick={() => vm.setPicked(c)}
                          >
                            {c.address}
                          </button>
                        </li>
                      ))}
                    </Candidates>
                  )}
                  <Input
                    style={{ marginTop: 12 }}
                    aria-label="상세 주소 (층, 호수 등)"
                    value={vm.detailAddress}
                    onChange={(e) => vm.setDetailAddress(e.target.value)}
                    placeholder="상세 주소 (층, 호수 등)"
                  />
                </div>
                <div>
                  <Label as="span">센터 사진 (외부/내부, 최대 {vm.maxPhotos}장)</Label>
                  <RegisterPhotoGrid
                    photos={vm.photos}
                    onChange={vm.setPhotos}
                    max={vm.maxPhotos}
                    uploading={vm.uploading}
                    onAddFiles={vm.handleAddPhotos}
                  />
                </div>
                <Submit>
                  {!vm.sessionEmail && <Hint>로그인하면 등록 신청을 보낼 수 있어요. 결과는 회원 이메일로 알려드려요.</Hint>}
                  <PrimaryBtn type="button" disabled={!vm.canSubmitCreate || vm.busy} onClick={vm.handleSubmit}>
                    {vm.busy ? "신청 중…" : "등록 신청하기"}
                    <Icon name="arrow_forward" />
                  </PrimaryBtn>
                </Submit>
              </Form>
            </Card>
          </div>
        </Cols>
      )}
    </Wrap>
  );
}
