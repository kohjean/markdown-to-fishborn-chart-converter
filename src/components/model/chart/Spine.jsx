import { css } from '@emotion/react';

export const Spine = () => {
  return <div css={style} className="spine" />;
};

const style = css`
  box-sizing: border-box;
  position: absolute;
  border: 1px solid #000;
  top: 50%;
  width: calc(100% - 7rem);
`;
