import type { RouteObject } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import MeditationMainPage from "@/pages/meditation/MeditationMainPage";
import MeditationRegionPage from "@/pages/meditation/MeditationRegionPage";
import MeditationDetailPage from "@/pages/meditation/MeditationDetailPage";
import MeditationSearchPage from "@/pages/meditation/MeditationSearchPage";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <MeditationMainPage /> },
      { path: "meditation", element: <MeditationMainPage /> },
      { path: "meditation/region/:regionId", element: <MeditationRegionPage /> },
      { path: "meditation/place/:placeId", element: <MeditationDetailPage /> },
      { path: "meditation/search", element: <MeditationSearchPage /> },
    ],
  },
];
