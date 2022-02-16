import styled from '@emotion/styled';

const Container = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 50%;
  margin: 0 auto;
  height: 10rem;
  &:hover label {
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

export const CodeField = ({ name, setText }) => {
  const placeholder = `// You can use '*'
* problem
  * factor 1
    * sub case 1
    * sub case 2
    * sub case 3
      * little node
      * little node
      * little node 1
  * factor 2
    * sub case 4
    * sub case 5
    * sub case 6
    * sub case 7
  * factor 3
    * sub case 8
    * sub case 9
    * sub case 10
    * sub case 11
  * factor 4
    * sub case 12
    * sub case 13
      * little node
      * little node
      * little node 2
`;

  const textDataSetter = (event) => {
    setText(event.target.value);
  };

  return (
    <Container>
      <StyledLabel htmlFor="textarea">{name}</StyledLabel>
      <StyledTextarea
        id="textarea"
        placeholder={placeholder}
        onChange={(event) => textDataSetter(event)}
      />
    </Container>
  );
};
