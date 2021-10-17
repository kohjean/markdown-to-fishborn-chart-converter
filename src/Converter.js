import styled from '@emotion/styled';
import { FileSection } from './FileSection';
import { CodeSection } from './CodeSection';
import { ConvertButton } from './ConvertButton';

const StyledForm = styled.form`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const AlignCenter = styled.div`
  display: flex;
  align-items: center;
`;

export const Converter = () => {
  return (
    <>
      <StyledForm id="form" action="./" method="">
        <FileSection />
        <AlignCenter>
          <p>or</p>
        </AlignCenter>
        <CodeSection />
      </StyledForm>
      <ConvertButton target={'form'} />
    </>
  );
};
