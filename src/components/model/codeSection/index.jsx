import { SubTitle } from 'components/commons/title/SubTitle';
import { CodeField } from './CodeField';
import { css } from '@emotion/react';

export const CodeSection = ({ text, setText, handler, active, props }) => {
  return (
    <div
      onClick={() => handler(false)}
      className={active ? 'inactive' : 'active'}
      css={css`
        ${props};
      `}
    >
      <SubTitle text="Input Text" />
      <CodeField name="CODE" text={text} setText={setText} />
    </div>
  );
};
