import type { RouteObject } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import MeditationMainPage from "@/pages/meditation/MeditationMainPage";
import MeditationMapPage from "@/pages/meditation/MeditationMapPage";
import MeditationRegionPage from "@/pages/meditation/MeditationRegionPage";
import MeditationDetailPage from "@/pages/meditation/MeditationDetailPage";
import NoticePage from "@/pages/NoticePage";
import InquiryPage from "@/pages/InquiryPage";
import FavoritesPage from "@/pages/FavoritesPage";
import PlaceholderPage from "@/pages/PlaceholderPage";
import ServiceInfoPage from "@/pages/ServiceInfoPage";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <MeditationMainPage /> },
      { path: "meditation", element: <MeditationMainPage /> },
      { path: "meditation/map", element: <MeditationMapPage /> },
      { path: "meditation/region/:regionId", element: <MeditationRegionPage /> },
      { path: "meditation/place/:placeId", element: <MeditationDetailPage /> },
      { path: "favorites", element: <FavoritesPage /> },
      { path: "profile", element: <PlaceholderPage title="Profile" message="준비 중입니다." /> },
      { path: "notice", element: <NoticePage /> },
      { path: "inquiry", element: <InquiryPage /> },
      { path: "service-info", element: <ServiceInfoPage /> },
    ],
  },
];
