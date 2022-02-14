import styled from '@emotion/styled';

export const RecursiveComponent = ({ props, idx, branchIdx }) => {
  const { text, depth, children } = props;
  const isUpperBranch = (idx) => idx % 2 === 0;
  return (
    <>
      <Node
        data-depth={depth}
        theme={{ myIndex: idx, isUpper: isUpperBranch(branchIdx) }}
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
      </Node>
    </>
  );
};

const Node = styled.div`
  &[data-depth='1'] {
    width: 250px;
    border-bottom: solid 1px #000;
    // 上下で異なる
    top: ${({ theme }) =>
      `calc(${theme.isUpper ? '125px + 0.5rem' : '375px - 1.5rem + 2px'})`};
    transform: ${({ theme }) =>
      `${theme.isUpper ? 'rotate(60deg) translateY(-50%)' : 'rotate(120deg)'}`};
    // インデックスで異なる
    left: ${({ theme }) => `calc(100% - 12rem * ${theme.myIndex * 0.5 + 2})`};
  }
  &[data-depth='2'] {
    font-size: 0.8rem;
    top: calc(96px / 2 + 0.5rem);
    // 領域(子要素(数, 高さ))で異なる
    width: 96px;
    // 上下で異なる
    transform: ${({ theme }) =>
      theme.isUpper ? 'rotate(-60deg)' : 'rotate(-120deg)'};
    ${({ theme }) =>
      theme.isUpper
        ? 'border-top: 1px solid #000;'
        : 'border-bottom: 1px solid #000;'};
    // インデックスで異なる
    left: ${({ theme }) => `${100 - theme.myIndex * 50}px`};
  }
  &[data-depth='3'] {
    font-size: 0.6rem;
    min-height: 1rem;
    border-bottom: 1px solid #000;
    width: 64px;
    // 上下で異なる
    text-align: ${({ theme }) => (theme.isUpper ? 'right' : 'left')};
    top: ${({ theme }) => (theme.isUpper ? '-40px' : '54px')};
    transform: ${({ theme }) =>
      theme.isUpper ? 'rotate(60deg)' : 'rotate(120deg)'};
    // インデックスで異なる
    left: ${({ theme }) => `${36 - theme.myIndex * 36}px`};
  }
`;
