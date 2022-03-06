import { FileUploader } from './fileUploader';
import { SubTitle } from 'components/commons/title/SubTitle';
import { useToggleActive } from 'components/functional/hooks/useToggleActive';
import styled from '@emotion/styled';

const Container = styled.div`
  width: 40%;
`;

export const FileSection = ({ setText }) => {
  useToggleActive('file-section', 'code-section');
  return (
    <Container id="file-section">
      <SubTitle text="File Upload" />
      <FileUploader size={'10rem'} setText={setText} />
    </Container>
  );
};
