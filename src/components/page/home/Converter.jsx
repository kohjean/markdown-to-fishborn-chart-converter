import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FileSection } from 'components/model/fileSection';
import { CodeSection } from 'components/model/codeSection';
import { ConvertButton } from './ConvertButton';
import { mq } from 'components/breakpoints';
import { css } from '@emotion/react';

export const Converter = () => {
  const [text, setText] = useState('');
  const [active, setActive] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: このタイミングで textStateにチェックをかけて、エラーが出たらメッセージを出して処理を進めないようにする
    navigate('/converted', { state: { text }, replace: false });
  };

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
      `}
    >
      <form id="form" onSubmit={handleSubmit} css={formStyle}>
        <FileSection
          setText={setText}
          active={active}
          handler={setActive}
          props={sectionStyle}
        />
        <div css={flexCenter}>
          <p>or</p>
        </div>
        <CodeSection
          text={text}
          setText={setText}
          active={active}
          handler={setActive}
          props={sectionStyle}
        />
        <input type="hidden" value={text} id="hidden" />
      </form>
      {/* ConvertButtonのonClickではなくformのonSubmitを使って送っている点に注意 */}
      <ConvertButton target={'form'} />
    </div>
  );
};

const formStyle = css`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  width: 100%;
  ${mq[0]} {
    flex-direction: row;
  }
`;

const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const sectionStyle = css`
  &.active h2 {
    color: #3dccfa;
  }
  ${mq[0]} {
    width: 40%;
  }
`;
