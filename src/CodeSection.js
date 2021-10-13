import { SubTitle } from './SubTitle';
import { CodeField } from './CodeField';
import { useToggleActive } from './hooks/useToggleActive';
import styled from '@emotion/styled';

const Container = styled.div`
  width: 40%;
`;

export const CodeSection = (props) => {
  useToggleActive('code-section', 'file-section');
  return (
    <Container id="code-section">
      <SubTitle text="Input Code" />
      <CodeField name={"CODE"}/>
    </Container>
  );
};
