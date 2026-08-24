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
import { useCatalogStore } from "@/stores/catalogStore";
import { toast } from "@/stores/toastStore";
import CelebrationParticles from "@/components/common/CelebrationParticles";
import CredentialListField from "@/components/profile/CredentialListField";
import { typography } from "@/styles/typography";

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

const CustomClassRow = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 10px;
`;

const AddClassButton = styled.button`
  flex: none;
  padding: 0 18px;
  border: 1px solid ${({ theme }) => theme.colors.primary600};
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary600};
  cursor: pointer;
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
  hidden: false,
});

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

  const managedInterests = useCatalogStore((state) => state.interests);
  const [customClassType, setCustomClassType] = useState("");
  const [celebrating, setCelebrating] = useState(false);

  // 관리자 목록에 더해, 이 전문가가 예전에 직접 넣어 둔 주제도 칩으로 보여줍니다.
  // 그러지 않으면 관리자가 목록에서 내린 순간 선택해 둔 값이 화면에서 사라집니다.
  const classTypeOptions = useMemo(() => {
    const names = managedInterests.map((i) => i.name);
    const selected = draft?.classTypes ?? [];
    return [...names, ...selected.filter((t) => !names.includes(t))];
  }, [managedInterests, draft?.classTypes]);

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

  const addCustomClassType = () => {
    const name = customClassType.trim();
    if (!name) return;
    setCustomClassType("");
    if (draft?.classTypes.includes(name)) return;
    toggleArray("classTypes", name);
  };

  const valid =
    draft.name.trim().length > 0 &&
    draft.intro.trim().length > 0 &&
    draft.regionIds.length > 0;

  return (
    <Page>
      <CelebrationParticles active={celebrating} />
      <Header>
        <Back type="button" onClick={() => navigate("/profile")} aria-label="마이페이지로 돌아가기">
          ‹
        </Back>
        <Title>{profile.expertProfileId ? "전문가 프로필 수정" : "명상 전문가로 전환"}</Title>
      </Header>
      <Lead>작성한 내용은 명상 전문가 목록과 상세 페이지에 공개됩니다.</Lead>

      <Card>
        <SectionTitle>공개 설정</SectionTitle>
        <SectionDesc>
          내 전문가 프로필을 명상 전문가 목록·상세에 공개할지 선택하세요. 숨김으로 두면
          다른 사용자에게 표시되지 않습니다.
        </SectionDesc>
        <ChoiceGrid>
          <Choice
            type="button"
            $selected={!draft.hidden}
            onClick={() => setDraft({ ...draft, hidden: false })}
          >
            공개 (노출)
          </Choice>
          <Choice
            type="button"
            $selected={draft.hidden}
            onClick={() => setDraft({ ...draft, hidden: true })}
          >
            숨김
          </Choice>
        </ChoiceGrid>
      </Card>

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
        <SectionDesc>
          항목마다 제목과 내용을 나눠 적고, 더 있으면 아래 버튼으로 줄을 추가해 주세요.
        </SectionDesc>
        <Field>
          <Label>학위</Label>
          <CredentialListField
            value={draft.degrees}
            onChange={(degrees) => setDraft({ ...draft, degrees })}
            titlePlaceholder="○○대학교 상담심리학과"
            detailPlaceholder="명상심리 전공 · 석사"
            addLabel="학위 추가"
          />
        </Field>
        <Field>
          <Label>자격증·이수 교육과정</Label>
          <CredentialListField
            value={draft.certificates}
            onChange={(certificates) => setDraft({ ...draft, certificates })}
            titlePlaceholder="명상지도사 1급"
            detailPlaceholder="한국명상학회 · 2024"
            addLabel="자격증·과정 추가"
          />
        </Field>
        <Field>
          <Label>경력</Label>
          <CredentialListField
            value={draft.careers}
            onChange={(careers) => setDraft({ ...draft, careers })}
            titlePlaceholder="○○명상센터"
            detailPlaceholder="수석 지도자 · 2020~2024"
            addLabel="경력 추가"
          />
        </Field>
        <Field>
          <Label>관심사</Label>
          <Hint>가르치는 주제를 고르세요. 목록에 없으면 아래에 직접 적어 추가할 수 있습니다.</Hint>
          <Chips>
            {classTypeOptions.map((item) => (
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
          <CustomClassRow>
            <Input
              value={customClassType}
              maxLength={30}
              placeholder="예: 차명상"
              onChange={(e) => setCustomClassType(e.target.value)}
              onKeyDown={(e) => {
                if (e.key !== "Enter") return;
                e.preventDefault();
                addCustomClassType();
              }}
            />
            <AddClassButton type="button" onClick={addCustomClassType}>
              추가
            </AddClassButton>
          </CustomClassRow>
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
            // 저장하면 expertProfileId 가 생기므로, 전환인지 여부는 요청 전에 판단해 둡니다.
            const isConversion = !profile.expertProfileId;
            void updateMyExpertProfile(draft)
              .then((next) => {
                setProfile(next);
                if (isConversion) {
                  setCelebrating(true);
                  toast.success("전문가로 전환이 성공했습니다!");
                } else {
                  toast.success("전문가 정보를 저장했습니다.");
                }
                setMessage({
                  text: isConversion
                    ? "명상 전문가로 전환됐어요."
                    : "전문가 프로필을 저장했어요.",
                });
                // 축하 효과를 볼 시간을 주고 넘어갑니다.
                window.setTimeout(() => navigate("/profile"), isConversion ? 2000 : 700);
              })
              .catch((error) => {
                const text = error instanceof Error ? error.message : "저장하지 못했어요.";
                setMessage({ text, error: true });
                toast.error(text);
              })
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
