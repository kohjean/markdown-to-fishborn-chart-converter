import { css } from '@emotion/react';

export const RecursiveComponent = ({ props, idx, branchIdx }) => {
  const { text, depth, children } = props;
  const isUpperBranch = (idx) => idx % 2 === 0;
  return (
    <>
      <div
        css={nodeStyle({ idx: idx, isUpper: isUpperBranch(branchIdx) })}
        data-depth={depth}
      >
        {text}
        {children.length > 0 &&
          children.map((elem, idx) => (
            <RecursiveComponent
              props={elem}
              key={elem.id}
              idx={idx}
              branchIdx={branchIdx}
            />
          ))}
      </div>
    </>
  );
};

const nodeStyle = ({ idx, isUpper }) => css`
  &[data-depth='1'] {
    width: 250px;
    border-bottom: solid 1px #000;
    // 上下で異なる
    ${isUpper
      ? `
        top: calc(122px + 0.5rem);
        transform: rotate(60deg) translateY(-50%);
    `
      : `
        top: calc(375px - 1.5rem + 2px);
        transform: rotate(120deg);
      `}
    // インデックスで異なる
    left: calc(100% - 12rem * ${idx * 0.5 + 2});
  }
  &[data-depth='2'] {
    font-size: 0.8rem;
    top: calc((98px + 1.5rem) / 2);
    // 領域(子要素(数, 高さ))で異なる
    width: 96px;
    ${isUpper
      ? `
        transform: rotate(-60deg);
        border-top: 1px solid #000;
        left: calc(185px - (${idx + 1} * 54px));
    `
      : `
        transform: rotate(-120deg);
        border-bottom: 1px solid #000;
        left: calc(-30px + (${idx + 1} * 50px));
      `}
  }
  &[data-depth='3'] {
    font-size: 0.6rem;
    min-height: 1rem;
    border-bottom: 1px solid #000;
    width: 64px;
    // 上下で異なる
    ${isUpper
      ? `
      text-align: right;
      top: -40px;
      transform: rotate(60deg);
    `
      : `
      text-align: left;
      top: 43px;
      transform: rotate(120deg);
    `}
    // インデックスで異なる
    left: calc(36px - ${idx * 32}px)
  }
`;
