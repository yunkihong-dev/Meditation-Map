import styled from "styled-components";
import Router from "./router/Router";

const Shell = styled.div`
  min-height: 100vh;
`;

const App = () => {
  return (
    <Shell>
      <Router />
    </Shell>
  );
};

export default App;
