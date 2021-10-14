import styled from '@emotion/styled';
import { FileSection } from './FileSection';
import { CodeSection } from './CodeSection';
import { ConvertButton } from './ConvertButton';

const StyledDiv = styled.div`
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
      <StyledDiv>
        <FileSection />
        <AlignCenter>
          <p>or</p>
        </AlignCenter>
        <CodeSection />
      </StyledDiv>
      <ConvertButton />
    </>
  );
};
