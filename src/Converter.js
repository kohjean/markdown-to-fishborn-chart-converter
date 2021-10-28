import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const markdown = `${event.target.children['hidden'].value}`;
    const query = './converted/' + markdown;
    navigate(query);
  };

  return (
    <>
      <StyledForm id="form" onSubmit={handleSubmit}>
        <FileSection setText={setText} />
        <AlignCenter>
          <p>or</p>
        </AlignCenter>
        <CodeSection setText={setText} />
        <input type="hidden" value={text} id="hidden" />
      </StyledForm>
      <ConvertButton target={'form'} />
    </>
  );
};
