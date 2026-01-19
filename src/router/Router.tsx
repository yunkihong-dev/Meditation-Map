import { BrowserRouter, useRoutes } from "react-router-dom";
import { routes } from "./routes";

const AppRoutes = () => useRoutes(routes);

const Router = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default Router;
