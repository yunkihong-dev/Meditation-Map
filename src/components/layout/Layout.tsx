import { useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import AppHeader from "@/components/layout/AppHeader";
import Sidebar from "@/components/layout/Sidebar";

const LayoutShell = styled.div`
  min-height: 100vh;
`;

const Content = styled.main`
  padding-top: 64px;
`;

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <LayoutShell>
      <AppHeader onOpenSidebar={() => setIsSidebarOpen(true)} />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <Content>
        <Outlet />
      </Content>
    </LayoutShell>
  );
};

export default Layout;
