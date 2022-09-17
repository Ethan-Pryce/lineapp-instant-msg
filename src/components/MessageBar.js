import styled from "styled-components";

export const MessageSubmitBtn = styled.button`
  user-select: none;
  background-color: black;
  color: white;
  border: 0.1rem solid black;
  border-radius: 0.5rem;
  padding: 0.25rem 1rem;
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
  padding: 1.25rem;
`;

export const MessageBarBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
  gap: 1rem;
  width: 100%;
  padding: 2rem;
`;

const MessageBar = ({ className }) => {
  return (
    <MessageBarBox className={className}>
      <MessageInput placeholder="Enter a message..." />
      <MessageSubmitBtn>Send Message</MessageSubmitBtn>
    </MessageBarBox>
  );
};

export default MessageBar;
