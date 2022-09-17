import styled from "styled-components";

export const MessageText = styled.p`
  letter-spacing: 0.15ch;
  margin: 0;
`;

export const MessageBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  border-radius: 0.5rem;
  padding: 1rem;
`;

const Message = ({ className, text }) => {
  return (
    <MessageBox className={className}>
      <MessageText>{text}</MessageText>
    </MessageBox>
  );
};

export default Message;
