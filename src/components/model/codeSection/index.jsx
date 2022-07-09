import { SubTitle } from 'components/commons/title/SubTitle';
import { CodeField } from './CodeField';
import { css } from '@emotion/react';

export const CodeSection = ({
  mdText,
  setMdText,
  active,
  setActive,
  style,
}) => {
  return (
    <div
      onClick={() => setActive(false)}
      className={active ? 'inactive' : 'active'} // ここのactiveは自身じゃなくてfilesがactiveかどうか
      css={css`
        ${style};
      `}
    >
      <SubTitle title="Input Text" />
      <CodeField
        name="CODE"
        mdText={mdText}
        setMdText={setMdText}
        active={active}
      />
    </div>
  );
};
