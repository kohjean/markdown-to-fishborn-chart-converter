import { css } from '@emotion/react';
import { mq } from 'components/breakpoints';

export const CodeField = ({ name, setText }) => {
  const placeholder = `// Enter something like this.
* problem
  * factor 1
    * sub case 1
    * sub case 2
    * sub case 3
      * little node
      * little node
      * little node 1
  * factor 2
    * sub case 4
    * sub case 5
    * sub case 6
    * sub case 7
  * factor 3
    * sub case 8
    * sub case 9
    * sub case 10
    * sub case 11
  * factor 4
    * sub case 12
    * sub case 13
      * little node
      * little node
      * little node 2
`;

  return (
    <div
      css={(theme) => css`
        box-sizing: border-box;
        position: relative;
        width: 80%;
        ${mq[0]} {
          width: 50%;
        }
        margin: 0 auto;
        height: 10rem;
        &:hover label,
        &:focus-within {
          color: ${theme.colors.focus};
        }
      `}
    >
      <label
        htmlFor="textarea"
        css={(theme) => css`
          position: absolute;
          top: -1rem;
          left: 1rem;
          transition: 0.2s;
          padding: 8px 2px 0;
          transition: 0.2s;
          background-color: ${theme.colors.background};
          z-index: 1;
          font-size: 0.8rem;
        `}
      >
        {name}
      </label>
      <textarea
        id="textarea"
        placeholder={placeholder}
        onChange={(event) => setText(event.target.value)}
        css={textareaStyle}
      />
    </div>
  );
};

const textareaStyle = (theme) => css`
  box-sizing: border-box;
  color: ${theme.colors.white};
  border: 1px solid ${theme.colors.white};
  border-radius: 4px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: inherit;
  transition: 0.2s;
  height: 130%;
  width: 140%;
  padding: 8px 4px;
  &:hover,
  &:focus {
    border: 1px solid ${theme.colors.focus};
  }
  &:focus-visible {
    outline: none;
  }
`;
