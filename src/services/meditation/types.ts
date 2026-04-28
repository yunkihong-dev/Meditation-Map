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

export interface MeditationPlace {
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
