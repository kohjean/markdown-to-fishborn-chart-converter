import { SubTitle } from 'components/commons/title/SubTitle';
import { CodeField } from './CodeField';
import { useToggleActive } from 'components/functional/hooks/useToggleActive';
import styled from '@emotion/styled';

export const CodeSection = ({ setText }) => {
  useToggleActive('code-section', 'file-section');
  return (
    <Container id="code-section">
      <SubTitle text="Input Text" />
      <CodeField name={'CODE'} setText={setText} />
    </Container>
  );
};

const Container = styled.div`
  width: 40%;
`;
