import { useRef, type ReactNode } from "react";
import styled, { css } from "styled-components";
import logoImg from "@/assets/logo.png";
import Icon from "@/components/common/Icon";
import AdminPreviewMap from "@/components/admin/AdminPreviewMap";
import { C, EASE, TY, a, glassCard, inputM6, tColors, tProp } from "@/components/centerManagement/cmKit";
import type { CenterRegisterVM } from "@/pages/centerRegister/CenterRegisterDesktop";
import CenterRegisterDone from "@/pages/centerRegister/CenterRegisterDone";
import type { MeditationPlace } from "@/services/meditation/types";
import type { ClaimAvailability } from "@/services/placeClaims/types";

/*
 * 센터 등록 모바일 3단계 위저드 — `관리화면 예시/_6/code.html`(1단계 기본 정보) 이식, 완료는 `_3`.
 * 목업에 있는 건 1단계뿐이라 2·3단계(서류 제출·승인 대기)는 같은 조각(헤더·진행바·glass-card 입력·하단 고정 버튼)으로 이어 그립니다.
 * - 신규 등록: 1 기본 정보(_6) → 2 서류 제출(센터 소개·서류 안내) → 3 승인 대기(확인 후 신청) → 완료(_3)
 * - 소유권 요청: 1 센터 검색 → 2 서류 제출(연락처·사업자번호·메모·증빙) → 완료(_3)
 * 하단 탭바는 목업처럼 이 화면에서 숨깁니다(CenterManagementLayout).
 */

export interface CenterRegisterMobileVM extends CenterRegisterVM {
  mode: "search" | "claim" | "create";
  startCreate: () => void;
  step: number;
  setStep: (n: number) => void;
  intro: string;
  setIntro: (v: string) => void;
  fullAddress: string;
  canGoNext: boolean;
  close: () => void;
}

/** tw: flex justify-between items-center w-full px-margin-mobile h-16 fixed top-0 z-50 bg-surface/70 backdrop-blur-xl shadow-sm shadow-primary/5 */
const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  height: 64px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${a(C.surface, 0.7)};
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  box-shadow: 0 1px 2px 0 rgba(83, 42, 168, 0.05);

  /* tw: text-on-surface-variant hover:opacity-80 transition-opacity */
  button {
    display: flex;
    border: 0;
    padding: 0;
    background: none;
    color: ${C.onSurfaceVariant};
    cursor: pointer;
    ${tProp("opacity")};

    &:hover {
      opacity: 0.8;
    }
  }

  img {
    height: 32px;
    width: auto;
  }

  .spacer {
    width: 24px;
    height: 24px;
  }
`;

/** tw: main pt-24 px-margin-mobile max-w-md mx-auto (+ body pb-32) */
const Main = styled.main`
  padding: 32px 20px 32px;
  max-width: 448px;
  margin: 0 auto;
  color: ${C.onBackground};
`;

/** tw: mb-8 / flex justify-between items-center mb-2 / h-2 bg-surface-container-high rounded-full overflow-hidden / w-1/3 h-full bg-primary rounded-full transition-all duration-500 ease-in-out */
const Progress = styled.div<{ $ratio: number }>`
  margin-bottom: 32px;

  .labels {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
    ${TY.labelMd};

    span:first-child {
      color: ${C.primary};
    }

    span:last-child {
      color: ${C.onSurfaceVariant};
    }
  }

  .track {
    height: 8px;
    background: ${C.surfaceContainerHigh};
    border-radius: 9999px;
    overflow: hidden;
  }

  .fill {
    width: ${({ $ratio }) => `${$ratio * 100}%`};
    height: 100%;
    background: ${C.primary};
    border-radius: 9999px;
    transition: all 500ms ${EASE};
  }
`;

/** tw: mb-6 / h2 font-headline-lg-mobile text-on-background mb-2 / p font-body-md text-on-surface-variant */
const Title = styled.div`
  margin-bottom: 24px;

  h2 {
    margin: 0 0 8px;
    ${TY.headlineLgMobile};
    color: ${C.onBackground};
  }

  p {
    margin: 0;
    ${TY.bodyMd};
    color: ${C.onSurfaceVariant};
  }
`;

/** tw: form space-y-6 */
const Form = styled.form`
  & > * + * {
    margin-top: 24px;
  }
`;

/** tw: block font-label-md text-label-md text-on-surface mb-2 */
const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  ${TY.labelMd};
  color: ${C.onSurface};
`;

/** tw: relative / 아이콘 absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-outline */
const IconInput = styled.div`
  position: relative;
  flex-grow: 1;

  .material-symbols-outlined {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: ${C.outline};
    pointer-events: none;
    /* 입력의 흰 배경이 아이콘을 덮지 않게 */
    z-index: 1;
  }

  input {
    ${inputM6};
  }
`;

/** 상세 주소 tw: block w-full px-4 py-3 … (아이콘 없음) */
const PlainInput = styled.input`
  ${inputM6};
  padding: 12px 16px;
`;

const TextArea = styled.textarea`
  ${inputM6};
  padding: 12px 16px;
  min-height: 120px;
  resize: vertical;
  font-family: inherit;
`;

/** tw: bg-primary text-on-primary font-label-md px-3 py-3 rounded-[16px] hover:bg-primary/90 transition-colors flex items-center justify-center */
const SearchBtn = styled.button`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  border: 0;
  border-radius: 16px;
  background: ${C.primary};
  color: ${C.onPrimary};
  ${TY.labelMd};
  cursor: pointer;
  ${tColors()};

  &:hover:not(:disabled) {
    background: ${a(C.primary, 0.9)};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const Candidates = styled.ul`
  list-style: none;
  margin: 0 0 12px;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;

  button {
    ${inputM6};
    padding: 12px 16px;
    text-align: left;
    cursor: pointer;

    &[aria-selected="true"] {
      box-shadow: 0 0 0 2px ${C.primary};
    }
  }
`;

/** tw: w-full h-40 rounded-[24px] overflow-hidden relative glass-card */
const MapBox = styled.div`
  width: 100%;
  height: 160px;
  border-radius: 24px;
  overflow: hidden;
  position: relative;
  ${glassCard};

  & > div {
    height: 100% !important;
    border-radius: 0 !important;
  }
`;

/** tw: grid grid-cols-3 gap-3 */
const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
`;

/** tw: aspect-square rounded-[16px] border-2 border-dashed border-outline-variant flex flex-col items-center justify-center text-outline
 *  hover:border-primary hover:text-primary transition-colors bg-white/50 */
const AddPhoto = styled.label`
  aspect-ratio: 1;
  border-radius: 16px;
  border: 2px dashed ${C.outlineVariant};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${C.outline};
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  ${tColors()};

  &:hover {
    border-color: ${C.primary};
    color: ${C.primary};
  }

  .material-symbols-outlined {
    margin-bottom: 4px;
  }

  span:last-of-type {
    font-size: 12px;
    font-weight: 500;
  }

  input {
    display: none;
  }
`;

/** 빈 칸 tw: aspect-square rounded-[16px] bg-surface-container-low/50 flex items-center justify-center text-outline-variant */
const Slot = styled.div`
  position: relative;
  aspect-ratio: 1;
  border-radius: 16px;
  background: ${a(C.surfaceContainerLow, 0.5)};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${C.outlineVariant};
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  button {
    position: absolute;
    top: 6px;
    right: 6px;
    width: 24px;
    height: 24px;
    border: 0;
    border-radius: 9999px;
    background: ${a(C.surface, 0.8)};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    ${tColors()};

    &:hover {
      background: ${C.error};
      color: ${C.onError};
    }
  }
`;

/** tw: font-body-md text-[12px] text-on-surface-variant mt-2 */
const SmallNote = styled.p`
  margin: 8px 0 0;
  font-size: 12px;
  line-height: 1.6;
  color: ${C.onSurfaceVariant};
`;

/** 검색 결과 카드 — _6 glass-card, 24px */
const ResultCard = styled.div`
  ${glassCard};
  border-radius: 24px;
  padding: 20px;

  & + & {
    margin-top: 12px;
  }

  h4 {
    margin: 0 0 4px;
    ${TY.labelMd};
    font-weight: 700;
  }

  p {
    margin: 0 0 8px;
    ${TY.sm};
    color: ${C.onSurfaceVariant};
  }

  .chip {
    display: inline-block;
    padding: 4px 12px;
    border-radius: 9999px;
    background: ${a(C.surfaceVariant, 0.5)};
    ${TY.xs};
    color: ${C.onSurfaceVariant};
  }
`;

const ResultBtn = styled.button`
  margin-top: 12px;
  width: 100%;
  padding: 12px 0;
  border: 0;
  border-radius: 16px;
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

const Summary = styled.dl`
  ${glassCard};
  border-radius: 24px;
  padding: 20px;
  margin: 0;

  div + div {
    margin-top: 12px;
  }

  dt {
    ${TY.labelMd};
    color: ${C.onSurfaceVariant};
    margin-bottom: 4px;
  }

  dd {
    margin: 0;
    ${TY.bodyMd};
    overflow-wrap: anywhere;
  }
`;

const Hint = styled.p<{ $error?: boolean }>`
  margin: 8px 0 0;
  font-size: 12px;
  line-height: 1.6;
  color: ${({ $error }) => ($error ? C.error : C.onSurfaceVariant)};
`;

/** tw: fixed bottom-0 left-0 w-full p-margin-mobile bg-white/70 backdrop-blur-[40px] border-t border-white/20 z-40 */
const BottomBar = styled.div`
  position: sticky;
  bottom: 0;
  z-index: 40;
  padding: 20px;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(40px);
  -webkit-backdrop-filter: blur(40px);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
`;

/** tw: w-full bg-primary text-on-primary font-label-md py-4 rounded-xl hover:bg-primary/90 transition-colors shadow-[0_8px_30px_rgba(107,70,193,0.15)] flex justify-center items-center */
const NextBtn = styled.button<{ $ghost?: boolean }>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 0;
  border: 0;
  border-radius: 12px;
  ${TY.labelMd};
  cursor: pointer;
  ${tColors()};
  ${({ $ghost }) =>
    $ghost
      ? css`
          background: ${C.secondaryFixed};
          color: ${C.onSecondaryFixed};

          &:hover {
            background: ${C.secondaryFixedDim};
          }
        `
      : css`
          background: ${C.primary};
          color: ${C.onPrimary};
          box-shadow: 0 8px 30px rgba(107, 70, 193, 0.15);

          &:hover:not(:disabled) {
            background: ${a(C.primary, 0.9)};
          }
        `}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .material-symbols-outlined {
    margin-left: 8px;
  }
`;

const CHIP: Record<ClaimAvailability, string> = {
  claim: "소유권 미설정",
  pending: "검토 중",
  mine: "내 센터",
  owned: "관리자 있음",
};

function ResultAction({ vm, place }: { vm: CenterRegisterMobileVM; place: MeditationPlace }): ReactNode {
  const av = vm.availabilityOf(place);
  if (av === "mine") return <ResultBtn type="button" onClick={() => vm.onOpenMine(place)}>내가 관리하는 센터예요 · 편집하기</ResultBtn>;
  if (av === "pending") return <ResultBtn type="button" onClick={vm.onOpenPending}>요청을 검토 중이에요 · 신청 내역 보기</ResultBtn>;
  if (av === "owned") return <ResultBtn type="button" disabled>이미 관리자가 있는 센터예요</ResultBtn>;
  return (
    <ResultBtn type="button" onClick={() => vm.startClaim(place)}>
      소유권 요청 (내 센터입니다)
    </ResultBtn>
  );
}

const CREATE_STEPS = ["기본 정보", "서류 제출", "승인 대기"];

export default function CenterRegisterMobile({ vm }: { vm: CenterRegisterMobileVM }) {
  const evidenceRef = useRef<HTMLInputElement>(null);

  if (vm.submitted) {
    return (
      <CenterRegisterDone
        kind={vm.submittedKind}
        onHome={vm.goHome}
        onRegister={vm.goRegister}
        onProfile={vm.goProfile}
        onClaims={vm.goClaims}
      />
    );
  }

  // 진행 단계(1~3)와 라벨
  const stepNo = vm.mode === "create" ? vm.step + 1 : vm.mode === "claim" ? 2 : 1;
  const stepName = vm.mode === "create" ? CREATE_STEPS[vm.step] : vm.mode === "claim" ? "서류 제출" : "센터 검색";
  const canBack = vm.mode !== "search";
  const onBack = () => {
    if (vm.mode === "create" && vm.step > 0) vm.setStep(vm.step - 1);
    else vm.backToSearch();
  };

  const header = (
    <Header>
      {canBack ? (
        <button type="button" aria-label="이전 단계" onClick={onBack}>
          <Icon name="arrow_back" size={24} />
        </button>
      ) : (
        <button type="button" aria-label="닫기" onClick={vm.close}>
          <Icon name="close" size={24} />
        </button>
      )}
      <img src={logoImg} alt="Wellit" />
      <div className="spacer" aria-hidden />
    </Header>
  );

  const progress = (
    <Progress $ratio={stepNo / 3}>
      <div className="labels">
        <span>3단계 중 {stepNo}단계</span>
        <span>{stepName}</span>
      </div>
      <div className="track" role="progressbar" aria-valuemin={1} aria-valuemax={3} aria-valuenow={stepNo} aria-label="등록 진행">
        <div className="fill" />
      </div>
    </Progress>
  );

  // ── 1) 센터 검색 ──
  if (vm.mode === "search") {
    return (
      <div data-testid="center-register-mobile">
        {header}
        <Main>
          {progress}
          <Title>
            <h2>명상센터 등록</h2>
            <p>이미 등록된 센터인지 먼저 확인해 주세요.</p>
          </Title>
          <Form onSubmit={(e) => e.preventDefault()}>
            <div>
              <Label htmlFor="m-center-search">센터 찾기</Label>
              <IconInput>
                <Icon name="search" />
                <input
                  id="m-center-search"
                  type="text"
                  value={vm.centerQuery}
                  onChange={(e) => vm.setCenterQuery(e.target.value)}
                  placeholder="센터 이름 또는 주소"
                />
              </IconInput>
            </div>
            {vm.centerQuery.trim().length > 0 && (
              <div>
                {vm.matches.map((place) => {
                  const av = vm.availabilityOf(place);
                  return (
                    <ResultCard key={place.id}>
                      <h4>{place.name}</h4>
                      <p>{place.address || vm.regionName(place)}</p>
                      {av && <span className="chip">{CHIP[av]}</span>}
                      <ResultAction vm={vm} place={place} />
                    </ResultCard>
                  );
                })}
                {vm.matches.length === 0 && <Hint>찾는 센터가 없어요. 아래에서 새로 등록해 주세요.</Hint>}
              </div>
            )}
          </Form>
        </Main>
        <BottomBar>
          <NextBtn type="button" onClick={vm.startCreate}>
            새로 등록하기
            <Icon name="arrow_forward" size={20} />
          </NextBtn>
        </BottomBar>
      </div>
    );
  }

  // ── 소유권 요청 2) 서류 제출 ──
  if (vm.mode === "claim") {
    return (
      <div data-testid="center-register-mobile">
        {header}
        <Main>
          {progress}
          <Title>
            <h2>소유권 요청</h2>
            <p>본인 확인을 마치면 이 센터를 직접 관리할 수 있게 됩니다.</p>
          </Title>
          <Form onSubmit={(e) => e.preventDefault()}>
            {vm.claimTarget && (
              <ResultCard>
                <h4>{vm.claimTarget.name}</h4>
                <p>{vm.claimTarget.address || vm.regionName(vm.claimTarget)}</p>
              </ResultCard>
            )}
            <div>
              <Label htmlFor="claim-contact">연락처 (이메일 또는 전화번호)</Label>
              <IconInput>
                <Icon name="call" />
                <input id="claim-contact" type="text" maxLength={100} value={vm.contact} onChange={(e) => vm.setContact(e.target.value)} />
              </IconInput>
            </div>
            <div>
              <Label htmlFor="claim-biz">사업자 등록번호 (선택)</Label>
              <IconInput>
                <Icon name="badge" />
                <input
                  id="claim-biz"
                  type="text"
                  inputMode="numeric"
                  maxLength={20}
                  value={vm.bizNumber}
                  onChange={(e) => vm.setBizNumber(e.target.value)}
                  placeholder="사업자 등록번호 (000-00-00000)"
                />
              </IconInput>
            </div>
            <div>
              <Label htmlFor="claim-memo">메모 (선택)</Label>
              <TextArea
                id="claim-memo"
                maxLength={2000}
                value={vm.memo}
                onChange={(e) => vm.setMemo(e.target.value)}
                placeholder="예) 센터 대표입니다. 운영 시간과 프로그램을 직접 관리하고 싶어요."
              />
            </div>
            <div>
              <Label htmlFor="claim-evidence">증빙 파일 (선택)</Label>
              <input
                ref={evidenceRef}
                id="claim-evidence"
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
          </Form>
        </Main>
        <BottomBar>
          <NextBtn type="button" disabled={!vm.canSubmitClaim || vm.busy} onClick={vm.handleClaim}>
            {vm.busy ? "요청 중…" : "소유권 요청하기"}
            <Icon name="arrow_forward" size={20} />
          </NextBtn>
        </BottomBar>
      </div>
    );
  }

  // ── 신규 등록 ──
  const last = vm.step === CREATE_STEPS.length - 1;
  return (
    <div data-testid="center-register-mobile">
      {header}
      <Main>
        {progress}
        <Title>
          <h2>명상센터 등록</h2>
          <p>
            {vm.step === 0
              ? "명상센터 정보를 입력하여 등록을 시작하세요."
              : vm.step === 1
                ? "센터를 소개하고, 확인에 필요한 서류 안내를 읽어 주세요."
                : "입력한 내용을 확인한 뒤 등록을 신청하세요."}
          </p>
        </Title>
        <Form onSubmit={(e) => e.preventDefault()}>
          {vm.step === 0 && (
            <>
              <div>
                <Label htmlFor="center_name">센터명</Label>
                <IconInput>
                  <Icon name="storefront" />
                  <input id="center_name" type="text" value={vm.name} onChange={(e) => vm.setName(e.target.value)} placeholder="예: 평온 명상 센터" />
                </IconInput>
              </div>
              <div>
                <Label htmlFor="biz_reg">사업자 등록번호</Label>
                <IconInput>
                  <Icon name="badge" />
                  <input
                    id="biz_reg"
                    type="text"
                    inputMode="numeric"
                    value={vm.bizNumber}
                    onChange={(e) => vm.setBizNumber(e.target.value)}
                    placeholder="사업자 등록번호 (000-00-00000)"
                  />
                </IconInput>
              </div>
              <div>
                <Label htmlFor="address">위치 주소</Label>
                <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
                  <IconInput>
                    <Icon name="search" />
                    <input
                      id="address"
                      type="text"
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
                  </IconInput>
                  <SearchBtn
                    type="button"
                    aria-label="주소 검색"
                    disabled={vm.searching || vm.addressQuery.trim().length === 0}
                    onClick={vm.handleAddressSearch}
                  >
                    <Icon name="search" />
                  </SearchBtn>
                </div>
                {vm.candidates.length > 0 && (
                  <Candidates role="listbox" aria-label="주소 검색 결과">
                    {vm.candidates.map((c) => (
                      <li key={`${c.address}-${c.lat}-${c.lng}`}>
                        <button type="button" role="option" aria-selected={vm.picked?.address === c.address} onClick={() => vm.setPicked(c)}>
                          {c.address}
                        </button>
                      </li>
                    ))}
                  </Candidates>
                )}
                <div style={{ marginBottom: 12 }}>
                  <PlainInput
                    id="detail_address"
                    aria-label="상세 주소 (층, 호수 등)"
                    value={vm.detailAddress}
                    onChange={(e) => vm.setDetailAddress(e.target.value)}
                    placeholder="상세 주소 (층, 호수 등)"
                  />
                </div>
                {/* 지도 미리보기 — 기존 네이버 지도 컴포넌트(AdminPreviewMap). 목업의 my_location(현재 위치) 버튼은 위치 데이터가 없어 넣지 않았습니다 */}
                <MapBox>
                  <AdminPreviewMap address={vm.picked?.address ?? vm.addressQuery} lat={vm.picked?.lat} lng={vm.picked?.lng} />
                </MapBox>
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                  <Label as="span" style={{ marginBottom: 0 }}>
                    공간 사진
                  </Label>
                  <span style={{ fontSize: 14, fontWeight: 500, color: C.primary }}>
                    {vm.photos.length}/{vm.maxPhotos}
                  </span>
                </div>
                <PhotoGrid>
                  {vm.photos.length < vm.maxPhotos && (
                    <AddPhoto>
                      <Icon name="add_a_photo" />
                      <span>{vm.uploading ? "올리는 중…" : "사진 추가"}</span>
                      <input
                        type="file"
                        accept="image/*"
                        multiple
                        disabled={vm.uploading}
                        onChange={(e) => {
                          vm.handleAddPhotos(e.target.files);
                          e.target.value = "";
                        }}
                      />
                    </AddPhoto>
                  )}
                  {vm.photos.map((url, i) => (
                    <Slot key={url}>
                      <img src={url} alt={`공간 사진 ${i + 1}`} />
                      <button
                        type="button"
                        aria-label={`공간 사진 ${i + 1} 삭제`}
                        onClick={() => vm.setPhotos(vm.photos.filter((p) => p !== url))}
                      >
                        <Icon name="close" size={14} />
                      </button>
                    </Slot>
                  ))}
                  {Array.from({ length: Math.max(0, 2 - vm.photos.length) }).map((_, i) => (
                    <Slot key={`empty-${i}`} aria-hidden>
                      <Icon name="image" />
                    </Slot>
                  ))}
                </PhotoGrid>
                <SmallNote>명상 공간, 입구, 시설 사진을 업로드해 주세요. (최대 {vm.maxPhotos}장)</SmallNote>
              </div>
            </>
          )}

          {vm.step === 1 && (
            <>
              <div>
                <Label htmlFor="center-intro">센터 소개 (선택)</Label>
                <TextArea
                  id="center-intro"
                  value={vm.intro}
                  onChange={(e) => vm.setIntro(e.target.value)}
                  placeholder="어떤 프로그램을 운영하시나요? 공간의 분위기도 함께 알려주세요."
                />
              </div>
              <Summary as="div">
                <div>
                  <dt>사업자등록증 등 서류</dt>
                  <dd>
                    {vm.sessionEmail
                      ? `담당자가 확인 과정에서 회원 이메일(${vm.sessionEmail})로 필요한 서류를 요청드려요.`
                      : "로그인하면 신청할 수 있어요. 결과와 서류 요청은 회원 이메일로 보내 드려요."}
                  </dd>
                </div>
              </Summary>
            </>
          )}

          {vm.step === 2 && (
            <Summary>
              <div>
                <dt>센터명</dt>
                <dd>{vm.name.trim()}</dd>
              </div>
              <div>
                <dt>사업자 등록번호</dt>
                <dd>{vm.bizNumber.trim()}</dd>
              </div>
              <div>
                <dt>주소</dt>
                <dd>{vm.fullAddress}</dd>
              </div>
              <div>
                <dt>공간 사진</dt>
                <dd>{vm.photos.length}장</dd>
              </div>
              <div>
                <dt>회신 이메일</dt>
                <dd>{vm.sessionEmail ?? "로그인 필요"}</dd>
              </div>
            </Summary>
          )}
        </Form>
      </Main>
      <BottomBar>
        {last ? (
          <NextBtn type="button" disabled={!vm.canSubmitCreate || vm.busy} onClick={vm.handleSubmit}>
            {vm.busy ? "신청 중…" : "등록 신청하기"}
            <Icon name="arrow_forward" size={20} />
          </NextBtn>
        ) : (
          <NextBtn type="button" disabled={!vm.canGoNext} onClick={() => vm.setStep(vm.step + 1)}>
            계속하기
            <Icon name="arrow_forward" size={20} />
          </NextBtn>
        )}
      </BottomBar>
    </div>
  );
}
