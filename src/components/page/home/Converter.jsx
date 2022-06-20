import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { FileSection } from 'components/model/fileSection';
import { CodeSection } from 'components/model/codeSection';
import { ConvertButton } from './ConvertButton';

export const Converter = () => {
  const [text, setText] = useState('');
  const [active, setActive] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // URLエンコードの際に改行コードが変換されるので目印の文字列に変換しておいて受け取り先で復号する
    const replaceLF = (text) => text.replace(/\r?\n/g, '&nbsp;');
    const param = replaceLF(`${event.target.children['hidden'].value}`);
    const url = `/converted/${param}`;
    navigate(url);
  };

  return (
    <>
      <StyledForm id="form" onSubmit={handleSubmit}>
        <FileSection
          setText={setText}
          active={active}
          handler={setActive}
        />
        <AlignCenter>
          <p>or</p>
        </AlignCenter>
        <CodeSection
          text={text}
          setText={setText}
          active={active}
          handler={setActive}
        />
        <input type="hidden" value={text} id="hidden" />
      </StyledForm>
      <ConvertButton target={'form'} />
    </>
  );
};

const StyledForm = styled.form`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const AlignCenter = styled.div`
  display: flex;
  align-items: center;
`;
