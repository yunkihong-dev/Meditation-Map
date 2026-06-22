import { useMemo, useState } from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import type { MeditationPlace } from "@/services/meditation/types";
import { regionNameById } from "@/data/koreaRegions";
import { buildPlaceHeroGalleryUrls, listPreviewThumbnail } from "@/services/meditation/placeGallery";
import { programPhotosOrdered } from "@/components/admin/AdminImageUpload";
import AdminPreviewMap from "@/components/admin/AdminPreviewMap";
import { MarkdownContent } from "@/components/common/MarkdownContent";
import { MarkdownText } from "@/components/common/MarkdownText";
import { formatProgramPeriod, normalizePlacePrograms } from "@/services/meditation/placeProgramStatus";

const PreviewShell = styled.div`
  position: sticky;
  top: 16px;
`;

const PreviewHeading = styled.h3`
  margin: 0 0 12px;
  font-size: 15px;
  font-weight: 600;
  color: #f4f4f5;
`;

const ModeTabs = styled.div`
  display: flex;
  gap: 6px;
  margin-bottom: 12px;
`;

const ModeTab = styled.button<{ $active?: boolean }>`
  flex: 1;
  padding: 8px 10px;
  border-radius: 8px;
  border: 1px solid ${({ $active }) => ($active ? "#7c3aed" : "#3f3f46")};
  background: ${({ $active }) => ($active ? "rgba(124, 58, 237, 0.25)" : "#18181b")};
  color: ${({ $active }) => ($active ? "#fff" : "#a1a1aa")};
  font-size: 12px;
  cursor: pointer;
`;

const PhoneFrame = styled.div`
  border-radius: 24px;
  border: 6px solid #3f3f46;
  background: #fff;
  overflow: hidden;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35);
  max-height: min(78vh, 760px);
  overflow-y: auto;
  scrollbar-width: thin;
`;

const ListCardWrap = styled.div`
  display: flex;
  justify-content: center;
  padding: 8px 0 4px;
  background: linear-gradient(180deg, ${({ theme }) => theme.colors.primary50} 0%, ${({ theme }) => theme.colors.warmCream} 100%);
  border-radius: 16px;
  border: 1px solid #27272a;
`;

const ListCard = styled.div`
  width: 200px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadow.soft};
  border: 1px solid ${({ theme }) => theme.colors.primary100};
  position: relative;
`;

const ListThumb = styled.div`
  width: 100%;
  height: 120px;
  background: ${({ theme }) => theme.colors.bg100};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

const ListBody = styled.div`
  padding: 12px;
`;

const ListTitle = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 6px;
  color: ${({ theme }) => theme.colors.text900};
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ListLocation = styled.span`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.text700};
`;

const ListTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 6px;
`;

const ListTag = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.primary600};
  background: ${({ theme }) => theme.colors.primary50};
  padding: 2px 8px;
  border-radius: ${({ theme }) => theme.radii.pill};
`;

const DetailPage = styled.div`
  color: ${({ theme }) => theme.colors.text900};
  background: #fff;
`;

const DetailHeader = styled.header`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  background: rgba(255, 255, 255, 0.95);
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary100};
  position: sticky;
  top: 0;
  z-index: 2;
`;

const DetailHeaderTitle = styled.h1`
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
`;

const Hero = styled.div`
  position: relative;
  width: 100%;
  height: 220px;
  background: ${({ theme }) => theme.colors.bg100};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

const HeroDots = styled.div`
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 6px;
`;

const HeroDot = styled.span<{ $active?: boolean }>`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${({ $active }) => ($active ? "#fff" : "rgba(255,255,255,0.45)")};
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15);
`;

const HeroEmpty = styled.div`
  height: 220px;
  display: grid;
  place-items: center;
  color: ${({ theme }) => theme.colors.text700};
  font-size: 0.9rem;
  background: ${({ theme }) => theme.colors.bg100};
`;

const DetailContent = styled.div`
  padding: 20px 16px 28px;
`;

const TitleRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 10px;
`;

const DetailTitle = styled.h2`
  margin: 0;
  font-size: 1.55rem;
  font-weight: 700;
  line-height: 1.25;
  flex: 1;
`;

const HeartIcon = styled.span`
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary50};
  color: ${({ theme }) => theme.colors.primary600};

  svg {
    width: 20px;
    height: 20px;
  }
`;

const LocationRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 6px;
  font-size: 0.92rem;
  color: ${({ theme }) => theme.colors.text700};
  margin-bottom: 10px;

  svg {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    margin-top: 2px;
  }
`;

const ShortDesc = styled.div`
  margin: 0 0 20px;
  font-size: 0.98rem;
  line-height: 1.55;
  color: ${({ theme }) => theme.colors.text700};
`;

const ProgramsBlock = styled.section`
  margin-bottom: 22px;
`;

const ProgramsLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 10px;
`;

const ProgramsHeading = styled.h3`
  margin: 0;
  font-size: 1.05rem;
  font-weight: 700;
`;

const VenueTag = styled.span`
  font-size: 0.72rem;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme }) => theme.colors.primary100};
  color: ${({ theme }) => theme.colors.primary700};
`;

const ProgramStrip = styled.div`
  display: flex;
  gap: 10px;
  overflow-x: auto;
  padding-bottom: 4px;
`;

const ProgramThumb = styled.div`
  flex-shrink: 0;
  width: 108px;
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  background: ${({ theme }) => theme.colors.bg100};
  box-shadow: 0 2px 10px rgba(75, 0, 130, 0.08);

  img {
    width: 108px;
    height: 108px;
    object-fit: cover;
    display: block;
  }

  span {
    display: block;
    padding: 6px 8px;
    font-size: 0.75rem;
    font-weight: 600;
    line-height: 1.3;
    background: #fff;
  }
`;

const AccordionItem = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border200};
  padding: 12px 0;
  color: ${({ theme }) => theme.colors.text900};
`;

const AccordionTitle = styled.div`
  font-size: 0.95rem;
  font-weight: 500;
  line-height: 1.4;
`;

const AccordionPreview = styled.div`
  margin-top: 8px;
  font-size: 0.88rem;
  font-weight: 400;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.text700};
`;

const MapBlock = styled.div`
  margin-top: 22px;

  h3 {
    margin: 0 0 10px;
    font-size: 1.05rem;
    font-weight: 600;
  }
`;

const MapAddress = styled.p`
  margin: 0 0 10px;
  font-size: 0.88rem;
  line-height: 1.45;
  color: ${({ theme }) => theme.colors.text700};
`;

const FACILITY_LABELS: Record<string, string> = {
  wifi: "Wi-Fi",
  parking: "Parking",
  tea: "Tea",
};

interface AdminPlacePreviewProps {
  place: MeditationPlace | null;
}

export default function AdminPlacePreview({ place }: AdminPlacePreviewProps) {
  const [mode, setMode] = useState<"detail" | "list">("detail");
  const [heroIndex, setHeroIndex] = useState(0);

  const normalized = useMemo(() => {
    if (!place) return null;
    const photos = place.photos ?? [];
    const thumbnailUrl = place.thumbnailUrl?.trim() || photos[0] || "";
    return normalizePlacePrograms({ ...place, photos, thumbnailUrl, id: place.id || "preview" });
  }, [place]);

  const heroUrls = useMemo(
    () => (normalized ? buildPlaceHeroGalleryUrls(normalized) : []),
    [normalized]
  );

  if (!normalized) {
    return (
      <PreviewShell>
        <PreviewHeading>미리보기</PreviewHeading>
        <p style={{ margin: 0, color: "#71717a", fontSize: 13 }}>편집 중인 명상지가 없습니다.</p>
      </PreviewShell>
    );
  }

  const ongoingPrograms = (normalized.programs ?? []).filter((p) => p.status === "ongoing");
  const pastPrograms = (normalized.programs ?? []).filter((p) => p.status === "past");
  const venueLabel = normalized.venueKind === "명상센터" ? "명상센터" : "명상지";
  const noticeSection = normalized.detailSections?.find((s) =>
    s.title.toLowerCase().includes("유의사항")
  );
  const facilities = normalized.facilities ?? [];
  const thumb = listPreviewThumbnail(normalized);
  const regionName = regionNameById(normalized.regionId);
  const safeHeroIndex = heroUrls.length > 0 ? heroIndex % heroUrls.length : 0;

  return (
    <PreviewShell>
      <PreviewHeading>미리보기</PreviewHeading>
      <ModeTabs>
        <ModeTab type="button" $active={mode === "detail"} onClick={() => setMode("detail")}>
          상세 페이지
        </ModeTab>
        <ModeTab type="button" $active={mode === "list"} onClick={() => setMode("list")}>
          목록 카드
        </ModeTab>
      </ModeTabs>

      {mode === "list" ? (
        <ListCardWrap>
          <ListCard>
            <ListThumb>
              {thumb ? (
                <img src={thumb} alt="" />
              ) : (
                <HeroEmpty style={{ height: 120 }}>사진 없음</HeroEmpty>
              )}
            </ListThumb>
            <ListBody>
              <ListTitle>{normalized.name || "이름 미입력"}</ListTitle>
              <ListLocation>{regionName}</ListLocation>
              {normalized.hashtags?.length > 0 && (
                <ListTags>
                  {normalized.hashtags.slice(0, 2).map((tag) => (
                    <ListTag key={tag}>{tag}</ListTag>
                  ))}
                </ListTags>
              )}
            </ListBody>
          </ListCard>
        </ListCardWrap>
      ) : (
        <PhoneFrame>
          <DetailPage>
            <DetailHeader>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              <DetailHeaderTitle>상세 페이지</DetailHeaderTitle>
            </DetailHeader>

            {heroUrls.length > 0 ? (
              <Hero>
                <img src={heroUrls[safeHeroIndex]} alt="" />
                {heroUrls.length > 1 && (
                  <HeroDots>
                    {heroUrls.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        aria-label={`${i + 1}번째 사진`}
                        onClick={() => setHeroIndex(i)}
                        style={{ padding: 0, border: "none", background: "none", cursor: "pointer" }}
                      >
                        <HeroDot $active={i === safeHeroIndex} />
                      </button>
                    ))}
                  </HeroDots>
                )}
              </Hero>
            ) : (
              <HeroEmpty>대표 사진을 추가하세요</HeroEmpty>
            )}

            <DetailContent>
              <TitleRow>
                <DetailTitle>{normalized.name || "이름 미입력"}</DetailTitle>
                <HeartIcon aria-hidden>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </HeartIcon>
              </TitleRow>

              <LocationRow>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {normalized.address || "주소 미입력"}
              </LocationRow>

              <ShortDesc>
                <MarkdownText
                  markdown={normalized.shortDescription}
                  fallback="한 줄 소개를 입력하세요."
                />
              </ShortDesc>

              {(normalized.programs ?? []).length > 0 && (
                <ProgramsBlock>
                  <ProgramsLabel>
                    <ProgramsHeading>프로그램 · 후기</ProgramsHeading>
                    <VenueTag>{venueLabel}</VenueTag>
                  </ProgramsLabel>
                  {ongoingPrograms.length > 0 ? (
                    <ProgramStrip>
                      {ongoingPrograms.map((p) => {
                        const photo = programPhotosOrdered(p.imageUrl, p.imageUrls)[0];
                        return (
                          <ProgramThumb key={p.id}>
                            {photo ? <img src={photo} alt="" /> : <HeroEmpty style={{ height: 108 }}>사진</HeroEmpty>}
                            <span>{p.title || "(제목 없음)"}</span>
                          </ProgramThumb>
                        );
                      })}
                    </ProgramStrip>
                  ) : (
                    <AccordionPreview>지난 프로그램·후기 ({pastPrograms.length})</AccordionPreview>
                  )}
                </ProgramsBlock>
              )}

              <AccordionItem>
                <AccordionTitle>입장료·이용 요금</AccordionTitle>
                <AccordionPreview>
                  {normalized.admissionFee?.trim() ? (
                    <MarkdownContent>
                      <ReactMarkdown>{normalized.admissionFee}</ReactMarkdown>
                    </MarkdownContent>
                  ) : (
                    "현장·예약 시 안내"
                  )}
                </AccordionPreview>
              </AccordionItem>
              <AccordionItem>
                <AccordionTitle>유의사항</AccordionTitle>
                <AccordionPreview>
                  {noticeSection?.body ? (
                    <MarkdownContent>
                      <ReactMarkdown>{noticeSection.body}</ReactMarkdown>
                    </MarkdownContent>
                  ) : (
                    "등록된 유의사항이 없습니다."
                  )}
                </AccordionPreview>
              </AccordionItem>

              {facilities.length > 0 && (
                <AccordionItem>
                  <AccordionTitle>시설 정보</AccordionTitle>
                  <AccordionPreview>
                    {facilities.map((key) => FACILITY_LABELS[key] ?? key).join(" · ")}
                  </AccordionPreview>
                </AccordionItem>
              )}

              <MapBlock>
                <h3>위치</h3>
                {normalized.address ? <MapAddress>{normalized.address}</MapAddress> : null}
                <AdminPreviewMap address={normalized.address} />
              </MapBlock>
            </DetailContent>
          </DetailPage>
        </PhoneFrame>
      )}
    </PreviewShell>
  );
}
