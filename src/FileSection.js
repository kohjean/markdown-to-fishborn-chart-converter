import { FileUploader } from './FileUploader';
import { SubTitle } from './SubTitle';
import { useToggleActive } from './hooks/useToggleActive';
import styled from '@emotion/styled';

const StyledForm = styled.form`
  width: 40%;
`;

export const FileSection = () => {
  useToggleActive('file-section', 'code-section');
  return (
    <StyledForm id="file-section" action="./#" method="">
      <SubTitle text="File Upload" />
      <FileUploader size={'10rem'} />
    </StyledForm>
  );
};
