import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import MessageBar from "./components/MessageBar";

const AppMessageBar = styled(MessageBar)`
  position: fixed;
  bottom: 0;
`;

const AppBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-width: 100vw;
  min-height: 100vh;
  padding: 2rem;
`;

const App = () => {
  return (
    <AppBox>
      <GlobalStyle />
      <AppMessageBar />
    </AppBox>
  );
};

export default App;
