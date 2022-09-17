import styled from "styled-components";
import Message from "./Message";

export const MessageContainerBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 0.75rem;
  width: 100%;
`;

const MessageContainer = ({ className, messages }) => {
  const displayMessages = () => {
    return messages.map((message) => <Message text={message} />);
  };

  return (
    <MessageContainerBox className={className}>
      {displayMessages()}
    </MessageContainerBox>
  );
};

export default MessageContainer;
