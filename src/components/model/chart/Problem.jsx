import { css } from '@emotion/react';

export const Problem = ({ text }) => {
  return <div css={style}>{text}</div>;
};

const style = css`
  box-sizing: border-box;
  position: absolute;
  width: 7rem;
  top: 50%;
  left: calc(100% - 7rem);
  border: 1px solid #000;
  transform: translateY(-50%);
  text-align: center;
`;
