import { SubTitle } from 'components/commons/title/SubTitle';
import { CodeField } from './CodeField';
import styled from '@emotion/styled';

export const CodeSection = ({ text, setText, handler, active }) => {
  return (
    <Container
      onClick={() => handler(false)}
      className={active ? 'inactive' : 'active'}
    >
      <SubTitle text="Input Text" />
      <CodeField name="CODE" text={text} setText={setText} />
    </Container>
  );
};

const Container = styled.div`
  width: 40%;
`;
