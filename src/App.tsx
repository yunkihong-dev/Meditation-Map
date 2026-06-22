import { useEffect } from "react";
import styled from "styled-components";
import ServerErrorBanner from "@/components/layout/ServerErrorBanner";
import Router from "./router/Router";
import { useAuthStore } from "./stores/authStore";
import { useCatalogStore } from "./stores/catalogStore";
import { useFavoritesStore } from "./stores/favoritesStore";

const Shell = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const App = () => {
  useEffect(() => {
    void useAuthStore.getState().bootstrapAuth();
    void useCatalogStore
      .getState()
      .hydrate()
      .then(() => useFavoritesStore.getState().pullFromServer());
  }, []);

  return (
    <Shell>
      <ServerErrorBanner />
      <Router />
    </Shell>
  );
};

export default App;
