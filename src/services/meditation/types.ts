export type SortBy = "recommend" | "name";

export interface Region {
  id: string;
  name: string;
  slug: string;
}

export interface OrganizationInfo {
  name: string;
  logoUrl: string;
  website: string;
}

export interface DetailSection {
  title: string;
  body: string;
}

export interface MeditationPlace {
  id: string;
  regionId: string;
  name: string;
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
  coordinates: {
    lat: number;
    lng: number;
  };
  detailSections: DetailSection[];
}

export interface MeditationFilters {
  tags: string[];
  keyword: string;
  sortBy: SortBy;
}

export interface PaginationResult<T> {
  items: T[];
  totalItems: number;
  totalPages: number;
  page: number;
  pageSize: number;
}
