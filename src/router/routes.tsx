import type { RouteObject } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import MeditationMainPage from "@/pages/meditation/MeditationMainPage";
import MeditationMapPage from "@/pages/meditation/MeditationMapPage";
import MeditationRegionPage from "@/pages/meditation/MeditationRegionPage";
import MeditationExpertsListPage from "@/pages/meditation/MeditationExpertsListPage";
import MeditationExpertDetailPage from "@/pages/meditation/MeditationExpertDetailPage";
import MeditationExpertClassDetailPage from "@/pages/meditation/MeditationExpertClassDetailPage";
import MeditationDetailPage from "@/pages/meditation/MeditationDetailPage";
import NoticePage from "@/pages/NoticePage";
import InquiryPage from "@/pages/InquiryPage";
import FavoritesPage from "@/pages/FavoritesPage";
import ProfilePage from "@/pages/ProfilePage";
import ServiceInfoPage from "@/pages/ServiceInfoPage";
import NotFoundPage from "@/pages/NotFoundPage";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <MeditationMainPage /> },
      { path: "meditation", element: <MeditationMainPage /> },
      { path: "meditation/map", element: <MeditationMapPage /> },
      { path: "meditation/expert/:expertId/class/:programId", element: <MeditationExpertClassDetailPage /> },
      { path: "meditation/expert/:expertId", element: <MeditationExpertDetailPage /> },
      { path: "meditation/region/:regionId/experts", element: <MeditationExpertsListPage /> },
      { path: "meditation/region/:regionId", element: <MeditationRegionPage /> },
      { path: "meditation/place/:placeId", element: <MeditationDetailPage /> },
      { path: "favorites", element: <FavoritesPage /> },
      { path: "profile", element: <ProfilePage /> },
      { path: "notice", element: <NoticePage /> },
      { path: "inquiry", element: <InquiryPage /> },
      { path: "service-info", element: <ServiceInfoPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
];
