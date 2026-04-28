export type SortBy = "recommend" | "name";
export type Category =
  | "all"
  | "템플스테이"
  | "명상센터"
  | "프리랜서(공간없음)"
  /** 요가·스트레칭 중심 장소 제외, 그 외 명상·힐링 위주 */
  | "힐링명상"
  | "기타";

export interface Region {
  id: string;
  name: string;
  slug: string;
}

export interface OrganizationInfo {
  name: string;
}

export interface DetailSection {
  title: string;
  body: string;
}

/** 명상지/센터 프로그램 모달용 후기 */
export interface PlaceProgramReview {
  author: string;
  body: string;
  rating?: number;
}

/** 업체 프로그램(진행/종료) — 모달에서 사진·업체 글·후기 */
export interface PlaceProgram {
  id: string;
  title: string;
  status: "ongoing" | "past";
  /** 대표 사진 */
  imageUrl: string;
  /** 추가 사진(가로 스와이프·점 표시) */
  imageUrls?: string[];
  /** 업체가 작성한 프로그램 소개(마크다운) */
  bodyFromVenue: string;
  reviews: PlaceProgramReview[];
}

/** 명상센터 강사 */
export interface PlaceInstructor {
  id: string;
  name: string;
  photoUrl: string;
  intro: string;
  reviews: PlaceProgramReview[];
}

export interface MeditationPlace {
  /** DB places.id */
  id: string;
  regionId: string;
  name: string;
  rating?: number;
  reviewCount?: number;
  shortDescription: string;
  description: string;
  address: string;
  thumbnailUrl: string;
  hashtags: string[];
  themes: string[];
  hasTempleStay: boolean;
  duration: string;
  /** 이용 요금·입장료 (한 줄 요약) */
  admissionFee?: string;
  /** 명상지 | 명상센터 (센터면 강사 블록·UI 라벨) */
  venueKind?: "명상지" | "명상센터";
  /** 프로그램·후기 모달 데이터 */
  programs?: PlaceProgram[];
  /** 명상센터 전용 강사 소개·강사 후기 */
  instructors?: PlaceInstructor[];
  organization: OrganizationInfo;
  externalLink: string;
  detailSections: DetailSection[];
  facilities?: string[];
}

export interface MeditationFilters {
  tags: string[];
  keyword: string;
  sortBy: SortBy;
  category: Category;
}

export interface PaginationResult<T> {
  items: T[];
  totalItems: number;
  totalPages: number;
  page: number;
  pageSize: number;
}

export interface ExpertReview {
  author: string;
  body: string;
  rating?: number;
}

export interface ExpertProgram {
  id: string;
  title: string;
  status: "ongoing" | "past";
  imageUrl?: string;
  description: string;
  /** 「클래스·분야」칩 label과 1:1 연결 (없으면 제목·설명 유사 매칭) */
  linksClassTypes?: string[];
}

export interface MeditationExpert {
  id: string;
  name: string;
  avatarUrl: string;
  specialties: string[];
  regionIds: string[];
  intro: string;
  degrees: string[];
  certificates: string[];
  careers: string[];
  classTypes: string[];
  hasCenter: boolean;
  centerSummary?: string;
  /** 본인 소유·연계 명상지 place id */
  centerPlaceId?: string;
  /** 센터 없을 때 활동 반경(지명) */
  activityAreas?: string[];
  programs: ExpertProgram[];
  reviews: ExpertReview[];
}
