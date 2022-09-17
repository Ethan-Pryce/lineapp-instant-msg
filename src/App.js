import { useState } from "react";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import MessageContainer from "./components/MessageContainer";
import MessageBar from "./components/MessageBar";

const AppMessages = styled(MessageContainer)`
  flex-grow: 1;
`;

const AppMessageBar = styled(MessageBar)`
  margin-top: auto;
`;

const AppBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  min-width: 100vw;
  min-height: 100vh;
  padding: 2rem;
`;

const App = () => {
  const [messages, setMessages] = useState([]);

  const addMessage = (message) => {
    setMessages([...messages, message]);
  };

  return (
    <AppBox>
      <GlobalStyle />
      <AppMessages messages={messages} />
      <AppMessageBar addMessage={addMessage} />
    </AppBox>
  );
};

export default App;
