import { useState } from 'react';
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
  const [text, setText] = useState('');
  return (
    <>
      <StyledForm id="form" action="./" method="">
        <FileSection setText={setText} />
        <AlignCenter>
          <p>or</p>
        </AlignCenter>
        <CodeSection setText={setText} />
        <input type="hidden" name="files-data" value={text} />
      </StyledForm>
      <ConvertButton target={'form'} />
    </>
  );
};
