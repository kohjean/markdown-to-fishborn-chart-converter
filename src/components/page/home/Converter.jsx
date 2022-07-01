import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FileSection } from 'components/model/fileSection';
import { CodeSection } from 'components/model/codeSection';
import { ConvertButton } from './ConvertButton';
import { mq } from 'components/breakpoints';
import { css } from '@emotion/react';

export const Converter = () => {
  const [markdown, setText] = useState('');
  const [active, setActive] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const mdLines = markdown.split('\n');
    const filter = /^[\s\t]*?[*+-]\s/;
    const data = mdLines.filter((row) => row.match(filter));
    // 変換できないデータであればdataは空配列になる
    if (data.length) {
      navigate(`${process.env.PUBLIC_URL}/converted/`, {
        state: { markdown },
        replace: false,
      });
    } else {
      alert('入力されたデータは変換できません。');
    }
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
          text={markdown}
          setText={setText}
          active={active}
          handler={setActive}
          props={sectionStyle}
        />
        <input type="hidden" value={markdown} id="hidden" />
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