import styled from '@emotion/styled';

const Container = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 50%;
  margin: 0 auto;
  height: 10rem;
  &:hover label{
    color: #1976d2;
  }
  &:focus-within {
    color: #1976d2;
  }
  `;

const StyledTextarea = styled.textarea`
  box-sizing: border-box;
  color: white;
  border: 1px solid #fff;
  border-radius: 4px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: inherit;
  transition: 0.2s;
  height: 100%;
  width: 100%;
  padding: 8px 4px;
  &:hover {
    border: 1px solid #1976d2;
  }
  &:focus {
    border: 1px solid #1976d2;
  }
  &:focus-visible {
    outline: none;
  }
`;

const StyledLabel = styled.label`
  position: absolute;
  top: -1rem;
  left: 1rem;
  padding: 8px 2px 0;
  transition: 0.2s;
  background-color: #282c34;
  z-index: 1;
  font-size: 0.8rem;
  &:active {
    color: #1976d2;
  }
`;

export const CodeField = ({ name }) => {
  return (
    <Container>
      <StyledLabel htmlFor="textarea">{name}</StyledLabel>
      <StyledTextarea id="textarea" />
    </Container>
  );
};
