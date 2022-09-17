import { useState } from "react";
import styled from "styled-components";

export const MessageSubmitBtn = styled.button`
  user-select: none;
  background-color: black;
  color: white;
  border: 0.1rem solid black;
  border-radius: 0.5rem;
  letter-spacing: 0.05ch;
  padding: 0.75rem 1rem;
  transition: 0.25s;

  &:hover {
    cursor: pointer;
    background-color: white;
    color: black;
  }
`;

export const MessageInput = styled.input.attrs({ type: "text" })`
  flex-grow: 1;
  height: 2rem;
  border-radius: 0.5rem;
  letter-spacing: 0.075ch;
  padding: 1.25rem;
`;

export const MessageBarBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
  gap: 1rem;
  width: 100%;

  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

const MessageBar = ({ className, addMessage }) => {
  const [messageInput, setMessageInput] = useState("");

  const handleSendMessage = () => {
    addMessage(messageInput);
    setMessageInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <MessageBarBox className={className}>
      <MessageInput
        value={messageInput}
        placeholder="Enter a message..."
        onChange={(e) => setMessageInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <MessageSubmitBtn onClick={handleSendMessage}>
        Send Message
      </MessageSubmitBtn>
    </MessageBarBox>
  );
};

export default MessageBar;
