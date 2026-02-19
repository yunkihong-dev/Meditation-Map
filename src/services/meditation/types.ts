export type SortBy = "recommend" | "name";
export type Category =
  | "all"
  | "템플스테이"
  | "명상센터"
  | "프리랜서(공간없음)"
  | "요가센터"
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
