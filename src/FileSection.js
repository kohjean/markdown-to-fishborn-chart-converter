import { FileUploader } from './FileUploader';
import { SubTitle } from './SubTitle';
import styled from '@emotion/styled';

const StyledForm = styled.form`
  width: 40%;
`;

export const FileSection = () => {
  return (
    <StyledForm id="file-uploader" action="./#" method="">
      <SubTitle text="File Upload" />
      <FileUploader size={'10rem'} />
    </StyledForm>
  );
};
