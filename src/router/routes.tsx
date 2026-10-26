import type { RouteObject } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import GuestLandingGate from "@/components/layout/GuestLandingGate";
import LandingPage from "@/pages/LandingPage";
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
import ExpertProfileEditorPage from "@/pages/ExpertProfileEditorPage";
import CenterRegisterPage from "@/pages/CenterRegisterPage";
import OAuthCallbackPage from "@/pages/OAuthCallbackPage";
import ServiceInfoPage from "@/pages/ServiceInfoPage";
import NotFoundPage from "@/pages/NotFoundPage";
import NotificationsPage from "@/pages/NotificationsPage";
import NotificationDetailPage from "@/pages/NotificationDetailPage";
import MyPlaceClaimsPage from "@/pages/placeClaims/MyPlaceClaimsPage";
import MyPlaceClaimDetailPage from "@/pages/placeClaims/MyPlaceClaimDetailPage";
import MyPlacesPage from "@/pages/ownerPlaces/MyPlacesPage";
import OwnerPlaceEditPage from "@/pages/ownerPlaces/OwnerPlaceEditPage";
import CenterManagementLayout from "@/components/centerManagement/CenterManagementLayout";
import CenterInquiriesPage from "@/pages/centerChat/CenterInquiriesPage";
import CustomerChatListPage from "@/pages/centerChat/CustomerChatListPage";
import CustomerChatPage from "@/pages/centerChat/CustomerChatPage";
import ChatLayout from "@/components/layout/ChatLayout";
import AdminChatReportsPage from "@/pages/admin/AdminChatReportsPage";

import AdminLoginPage from "@/pages/admin/AdminLoginPage";
import AdminDashboardPage from "@/pages/admin/AdminDashboardPage";
import AdminPlacesPage from "@/pages/admin/AdminPlacesPage";
import AdminExpertsPage from "@/pages/admin/AdminExpertsPage";
import AdminNoticesPage from "@/pages/admin/AdminNoticesPage";
import AdminBannersPage from "@/pages/admin/AdminBannersPage";
import AdminInterestsPage from "@/pages/admin/AdminInterestsPage";
import AdminNotificationsPage from "@/pages/admin/AdminNotificationsPage";
import AdminPlaceClaimsPage from "@/pages/admin/AdminPlaceClaimsPage";
import AdminBroadcastPage from "@/pages/admin/AdminBroadcastPage";
import AdminLayout from "@/components/admin/AdminLayout";
import ProtectedAdminRoute from "@/components/admin/ProtectedAdminRoute";

export const routes: RouteObject[] = [
  {
    path: "/welcome",
    element: <LandingPage />,
  },
  {
    path: "/admin/login",
    element: <AdminLoginPage />,
  },
  {
    path: "/admin",
    element: <ProtectedAdminRoute />,
    children: [
      {
        element: <AdminLayout />,
        children: [
          { index: true, element: <AdminDashboardPage /> },
          { path: "places", element: <AdminPlacesPage /> },
          { path: "experts", element: <AdminExpertsPage /> },
          { path: "notices", element: <AdminNoticesPage /> },
          { path: "banners", element: <AdminBannersPage /> },
          { path: "interests", element: <AdminInterestsPage /> },
          { path: "notifications", element: <AdminNotificationsPage /> },
          { path: "notifications/:notificationId", element: <NotificationDetailPage scope="admin" /> },
          { path: "place-claims", element: <AdminPlaceClaimsPage /> },
          { path: "place-claims/:claimId", element: <AdminPlaceClaimsPage /> },
          { path: "broadcasts", element: <AdminBroadcastPage /> },
          { path: "chat-reports", element: <AdminChatReportsPage /> },
          { path: "chat-reports/:reportId", element: <AdminChatReportsPage /> },
        ],
      },
    ],
  },
  {
    // 고객 채팅 — 입력창이 아래에 붙어야 해서 하단 탭 없는 레이아웃(계약 C8)
    element: <ChatLayout />,
    children: [{ path: "/profile/center-chats/:threadId", element: <CustomerChatPage /> }],
  },
  {
    // 센터 관리(등록·내 센터 관리·정보 수정) — PC 폭에서는 모바일 기둥을 벗어난 관리 화면 레이아웃
    element: <CenterManagementLayout />,
    children: [
      { path: "/center/register", element: <CenterRegisterPage /> },
      { path: "/center/inquiries", element: <CenterInquiriesPage /> },
      { path: "/center/inquiries/:threadId", element: <CenterInquiriesPage /> },
      { path: "/profile/places", element: <MyPlacesPage /> },
      { path: "/profile/places/:placeId/edit", element: <OwnerPlaceEditPage /> },
      { path: "/profile/places/:placeId/details", element: <OwnerPlaceEditPage mode="details" /> },
    ],
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <GuestLandingGate /> },
      { path: "meditation", element: <GuestLandingGate /> },
      { path: "meditation/map", element: <MeditationMapPage /> },
      { path: "meditation/expert/:expertId/class/:programId", element: <MeditationExpertClassDetailPage /> },
      { path: "meditation/expert/:expertId", element: <MeditationExpertDetailPage /> },
      { path: "meditation/region/:regionId/experts", element: <MeditationExpertsListPage /> },
      { path: "meditation/region/:regionId", element: <MeditationRegionPage /> },
      { path: "meditation/place/:placeId", element: <MeditationDetailPage /> },
      { path: "favorites", element: <FavoritesPage /> },
      { path: "profile", element: <ProfilePage /> },
      { path: "profile/expert", element: <ExpertProfileEditorPage /> },
      { path: "profile/place-claims", element: <MyPlaceClaimsPage /> },
      { path: "profile/center-chats", element: <CustomerChatListPage /> },
      { path: "profile/place-claims/:claimId", element: <MyPlaceClaimDetailPage /> },
      { path: "notifications", element: <NotificationsPage /> },
      { path: "notifications/:notificationId", element: <NotificationDetailPage scope="me" /> },
      { path: "auth/oauth", element: <OAuthCallbackPage /> },
      { path: "notice", element: <NoticePage /> },
      { path: "inquiry", element: <InquiryPage /> },
      { path: "service-info", element: <ServiceInfoPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
];
