import { FileUploader } from './FileUploader';
import { SubTitle } from './SubTitle';
import { useToggleActive } from './hooks/useToggleActive';
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
