import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FileSection } from 'components/model/fileSection';
import { CodeSection } from 'components/model/codeSection';
import { ConvertButton } from './ConvertButton';
import { mq } from 'components/breakpoints';
import { css } from '@emotion/react';

export const Converter = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // 変換後の画面からBACKボタンで戻ってきた時はデータを維持したまま表示する
  const cachedText = location.state?.mdText ?? '';
  const [mdText, setMdText] = useState(cachedText);
  const [active, setActive] = useState(location.state?.active ?? true);

  const handleSubmit = (event) => {
    event.preventDefault();
    const mdLines = mdText.split('\n');
    const filter = /^[\s\t]*?[*+-]\s/;
    const data = mdLines.filter((row) => row.match(filter));
    // 変換できないデータであればdataは空配列になる
    if (data.length) {
      navigate(`${process.env.PUBLIC_URL}/converted/`, {
        state: { mdText },
        replace: false,
      });
    } else {
      alert('入力されたデータは変換できません。');
    }
  };

  // useLocationのstateをリフレッシュする
  useEffect(() => {
    return window.history.pushState(null, '');
  });

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
          setMdText={setMdText}
          active={active}
          setActive={setActive}
          style={sectionStyle}
        />
        <div css={flexCenter}>
          <p>or</p>
        </div>
        <CodeSection
          mdText={mdText}
          value={mdText}
          setMdText={setMdText}
          active={active}
          setActive={setActive}
          style={sectionStyle}
        />
        <input type="hidden" value={mdText} id="hidden" />
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
