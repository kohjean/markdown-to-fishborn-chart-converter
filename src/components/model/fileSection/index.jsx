import { FileUploader } from './fileUploader';
import { SubTitle } from 'components/commons/title/SubTitle';
import styled from '@emotion/styled';

export const FileSection = ({ setText, handler, active }) => {
  return (
    <Container
      onClick={() => handler(true)}
      className={active ? 'active' : 'inactive'}
    >
      <SubTitle text="File Upload" />
      <FileUploader size={'10rem'} setText={setText} />
    </Container>
  );
};

const Container = styled.div`
  width: 40%;
`;
