import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import RegionMap from "@/components/meditation/RegionMap";
import NotionMarkdownEditor from "@/components/common/NotionMarkdownEditor";
import { KOREA_REGIONS, regionNameById } from "@/data/koreaRegions";
import {
  fetchMyExpertProfile,
  fetchMyProfile,
  updateMyExpertProfile,
  type ExpertProfileDraft,
  type MeProfile,
} from "@/services/profile/profileApi";
import { useAuthStore } from "@/stores/authStore";
import { typography } from "@/styles/typography";

const CLASS_OPTIONS = ["마음챙김", "아트명상", "숲 명상", "호흡명상", "걷기명상", "소리명상"];

const Page = styled.div`
  max-width: 980px;
  margin: 0 auto;
  padding: calc(18px + env(safe-area-inset-top, 0px)) 0 48px;
  color: ${({ theme }) => theme.colors.text900};
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
`;

const Back = styled.button`
  width: 38px;
  height: 38px;
  border: 1px solid ${({ theme }) => theme.colors.primary100};
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.text900};
  ${typography.body1};
  cursor: pointer;
`;

const Title = styled.h1`
  margin: 0;
  ${typography.title};
`;

const Lead = styled.p`
  margin: 0 0 24px 50px;
  color: ${({ theme }) => theme.colors.text700};
  ${typography.body2};

  @media (max-width: 640px) {
    margin-left: 0;
  }
`;

const Card = styled.section`
  margin-top: 16px;
  padding: 22px;
  border: 1px solid rgba(75, 0, 130, 0.09);
  border-radius: 22px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 8px 24px rgba(75, 0, 130, 0.05);

  @media (max-width: 640px) {
    padding: 18px 15px;
  }
`;

const SectionTitle = styled.h2`
  margin: 0 0 6px;
  ${typography.body1};
  font-weight: 700;
`;

const SectionDesc = styled.p`
  margin: 0 0 18px;
  color: ${({ theme }) => theme.colors.text700};
  ${typography.caption};
`;

const Field = styled.div`
  margin-top: 18px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  ${typography.body2};
  font-weight: 700;
`;

const Hint = styled.p`
  margin: -4px 0 8px;
  color: ${({ theme }) => theme.colors.text700};
  ${typography.caption};
`;

const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 13px 14px;
  border: 1px solid ${({ theme }) => theme.colors.primary200};
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.text900};
  ${typography.body2};
`;

const Textarea = styled.textarea`
  width: 100%;
  min-height: 118px;
  box-sizing: border-box;
  resize: vertical;
  padding: 13px 14px;
  border: 1px solid ${({ theme }) => theme.colors.primary200};
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.text900};
  font-family: inherit;
  ${typography.body2};
`;

const Chips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Chip = styled.button<{ $selected: boolean }>`
  padding: 8px 11px;
  border: 1px solid
    ${({ theme, $selected }) =>
      $selected ? theme.colors.primary600 : theme.colors.primary200};
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme, $selected }) =>
    $selected ? theme.colors.primary600 : theme.colors.white};
  color: ${({ theme, $selected }) => ($selected ? theme.colors.white : theme.colors.text700)};
  ${typography.caption};
  cursor: pointer;
`;

const RegionLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(260px, 0.9fr) minmax(240px, 1.1fr);
  gap: 20px;
  align-items: center;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const MapPanel = styled.div`
  padding: 12px;
  border-radius: 18px;
  background: ${({ theme }) => theme.colors.primary50};
`;

const RegionHelp = styled.div`
  color: ${({ theme }) => theme.colors.text700};
  ${typography.body2};
`;

const ChoiceGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;

const Choice = styled.button<{ $selected: boolean }>`
  padding: 14px;
  border: 1px solid
    ${({ theme, $selected }) =>
      $selected ? theme.colors.primary600 : theme.colors.primary200};
  border-radius: 13px;
  background: ${({ theme, $selected }) =>
    $selected ? theme.colors.primary50 : theme.colors.white};
  color: ${({ theme }) => theme.colors.text900};
  ${typography.body2};
  cursor: pointer;
`;

const Footer = styled.div`
  position: sticky;
  bottom: calc(56px + env(safe-area-inset-bottom, 0px));
  z-index: 5;
  margin-top: 20px;
  padding: 12px;
  border-radius: 18px;
  background: rgba(255, 250, 248, 0.94);
  backdrop-filter: blur(12px);
`;

const Save = styled.button`
  width: 100%;
  padding: 15px;
  border: 0;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme }) => theme.colors.primary600};
  color: white;
  ${typography.buttonMd};
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Message = styled.p<{ $error?: boolean }>`
  margin: 10px 0 0;
  color: ${({ theme, $error }) => ($error ? "#c5221f" : theme.colors.primary600)};
  text-align: center;
  ${typography.caption};
`;

const Loading = styled.p`
  padding: 80px 20px;
  text-align: center;
  color: ${({ theme }) => theme.colors.text700};
  ${typography.body2};
`;

const blank = (profile: MeProfile): ExpertProfileDraft => ({
  name: profile.displayName || profile.username.split("@")[0] || "",
  intro: "",
  degrees: [],
  certificates: [],
  careers: [],
  classTypes: [],
  regionIds: profile.regionIds ?? [],
  hasCenter: false,
  centerName: "",
  centerAddress: "",
  businessRegistrationNumber: "",
  businessOpeningDate: "",
});

const lines = (value: string) =>
  value
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);

export default function ExpertProfileEditorPage() {
  const navigate = useNavigate();
  const accessToken = useAuthStore((state) => state.accessToken);
  const [profile, setProfile] = useState<MeProfile | null>(null);
  const [draft, setDraft] = useState<ExpertProfileDraft | null>(null);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState<{ text: string; error?: boolean } | null>(null);

  useEffect(() => {
    if (!accessToken) {
      navigate("/profile", { replace: true });
      return;
    }
    void Promise.all([fetchMyProfile(), fetchMyExpertProfile()])
      .then(([me, expert]) => {
        setProfile(me);
        setDraft({ ...blank(me), ...(expert ?? {}) });
      })
      .catch((error) =>
        setMessage({
          text: error instanceof Error ? error.message : "정보를 불러오지 못했어요.",
          error: true,
        })
      )
      .finally(() => setLoading(false));
  }, [accessToken, navigate]);

  const selectedRegionNames = useMemo(
    () => draft?.regionIds.map(regionNameById) ?? [],
    [draft?.regionIds]
  );

  if (loading || !draft || !profile) {
    return <Page><Loading>{message?.text ?? "전문가 정보를 불러오는 중…"}</Loading></Page>;
  }

  const toggleArray = (key: "classTypes" | "regionIds", value: string) => {
    const current = draft[key];
    setDraft({
      ...draft,
      [key]: current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value],
    });
  };

  const valid =
    draft.name.trim().length > 0 &&
    draft.intro.trim().length > 0 &&
    draft.regionIds.length > 0;

  return (
    <Page>
      <Header>
        <Back type="button" onClick={() => navigate("/profile")} aria-label="마이페이지로 돌아가기">
          ‹
        </Back>
        <Title>{profile.expertProfileId ? "전문가 프로필 수정" : "명상 전문가로 전환"}</Title>
      </Header>
      <Lead>작성한 내용은 명상 전문가 목록과 상세 페이지에 공개됩니다.</Lead>

      <Card>
        <SectionTitle>기본 정보</SectionTitle>
        <SectionDesc>전문가 페이지에 표시될 활동명과 소개를 작성해 주세요.</SectionDesc>
        <Field>
          <Label htmlFor="expert-name">활동명</Label>
          <Input
            id="expert-name"
            value={draft.name}
            maxLength={80}
            onChange={(e) => setDraft({ ...draft, name: e.target.value })}
          />
        </Field>
        <Field>
          <Label htmlFor="expert-intro">자기소개</Label>
          <Hint>
            노션처럼 문법을 입력하면 해당 줄의 모양이 바로 바뀝니다.
          </Hint>
          <NotionMarkdownEditor
            value={draft.intro}
            onChange={(intro) => setDraft((current) => current ? { ...current, intro } : current)}
            placeholder="명상을 시작하게 된 계기와 수업 철학을 소개해 주세요."
          />
        </Field>
      </Card>

      <Card>
        <SectionTitle>이력과 전문 분야</SectionTitle>
        <SectionDesc>각 항목은 한 줄에 하나씩 입력해 주세요.</SectionDesc>
        <Field>
          <Label htmlFor="expert-degrees">학위</Label>
          <Textarea
            id="expert-degrees"
            value={draft.degrees.join("\n")}
            onChange={(e) => setDraft({ ...draft, degrees: lines(e.target.value) })}
            placeholder={"○○대학교 상담심리학 석사\n△△대학교 명상학 전공"}
          />
        </Field>
        <Field>
          <Label htmlFor="expert-certificates">자격증·이수 교육과정</Label>
          <Textarea
            id="expert-certificates"
            value={draft.certificates.join("\n")}
            onChange={(e) => setDraft({ ...draft, certificates: lines(e.target.value) })}
          />
        </Field>
        <Field>
          <Label htmlFor="expert-careers">경력</Label>
          <Textarea
            id="expert-careers"
            value={draft.careers.join("\n")}
            onChange={(e) => setDraft({ ...draft, careers: lines(e.target.value) })}
          />
        </Field>
        <Field>
          <Label>클래스 종류</Label>
          <Chips>
            {CLASS_OPTIONS.map((item) => (
              <Chip
                key={item}
                type="button"
                $selected={draft.classTypes.includes(item)}
                onClick={() => toggleArray("classTypes", item)}
              >
                {item}
              </Chip>
            ))}
          </Chips>
        </Field>
      </Card>

      <Card>
        <SectionTitle>주 활동 지역</SectionTitle>
        <SectionDesc>지도에서 활동 가능한 지역을 여러 곳 선택할 수 있습니다.</SectionDesc>
        <RegionLayout>
          <MapPanel>
            <RegionMap
              activeRegionIds={draft.regionIds}
              maxMapHeight="460px"
              onSelectRegion={(regionId) => toggleArray("regionIds", regionId)}
            />
          </MapPanel>
          <RegionHelp>
            <strong>{selectedRegionNames.length}개 지역 선택됨</strong>
            <p>선택된 지역을 다시 누르면 해제됩니다.</p>
            <Chips>
              {KOREA_REGIONS.filter((region) => draft.regionIds.includes(region.id)).map(
                (region) => (
                  <Chip
                    key={region.id}
                    type="button"
                    $selected
                    onClick={() => toggleArray("regionIds", region.id)}
                  >
                    {region.name} ×
                  </Chip>
                )
              )}
            </Chips>
          </RegionHelp>
        </RegionLayout>
      </Card>

      <Card>
        <SectionTitle>센터 정보</SectionTitle>
        <SectionDesc>본인 소유 센터가 있다면 인증 정보를 함께 입력해 주세요.</SectionDesc>
        <ChoiceGrid>
          <Choice
            type="button"
            $selected={!draft.hasCenter}
            onClick={() => setDraft({ ...draft, hasCenter: false })}
          >
            센터 없음
          </Choice>
          <Choice
            type="button"
            $selected={draft.hasCenter}
            onClick={() => setDraft({ ...draft, hasCenter: true })}
          >
            센터 있음
          </Choice>
        </ChoiceGrid>
        {draft.hasCenter && (
          <>
            <Field>
              <Label htmlFor="center-name">센터명</Label>
              <Input
                id="center-name"
                value={draft.centerName}
                onChange={(e) => setDraft({ ...draft, centerName: e.target.value })}
              />
            </Field>
            <Field>
              <Label htmlFor="center-address">센터 위치</Label>
              <Input
                id="center-address"
                value={draft.centerAddress}
                onChange={(e) => setDraft({ ...draft, centerAddress: e.target.value })}
              />
            </Field>
            <Field>
              <Label htmlFor="business-number">사업자등록번호</Label>
              <Input
                id="business-number"
                inputMode="numeric"
                value={draft.businessRegistrationNumber}
                onChange={(e) =>
                  setDraft({
                    ...draft,
                    businessRegistrationNumber: e.target.value.replace(/[^\d-]/g, ""),
                  })
                }
              />
            </Field>
            <Field>
              <Label htmlFor="opening-date">개업일자</Label>
              <Input
                id="opening-date"
                type="date"
                value={draft.businessOpeningDate}
                onChange={(e) => setDraft({ ...draft, businessOpeningDate: e.target.value })}
              />
            </Field>
          </>
        )}
      </Card>

      <Footer>
        <Save
          type="button"
          disabled={busy || !valid}
          onClick={() => {
            setBusy(true);
            setMessage(null);
            void updateMyExpertProfile(draft)
              .then((next) => {
                setProfile(next);
                setMessage({ text: "전문가 프로필을 저장했어요." });
                window.setTimeout(() => navigate("/profile"), 700);
              })
              .catch((error) =>
                setMessage({
                  text: error instanceof Error ? error.message : "저장하지 못했어요.",
                  error: true,
                })
              )
              .finally(() => setBusy(false));
          }}
        >
          {busy
            ? "저장 중…"
            : profile.expertProfileId
              ? "전문가 정보 저장"
              : "명상 전문가로 전환"}
        </Save>
        {message && <Message $error={message.error}>{message.text}</Message>}
      </Footer>
    </Page>
  );
}
