import { forwardRef } from 'react';
import { Spine } from 'components/model/chart/Spine';
import { RecursiveComponent } from 'components/model/chart/RecursiveComponent.jsx';
import { css } from '@emotion/react';

export const RenderContainer = forwardRef(({ root }, ref) => {
  const { text, depth, children } = root;

  return (
    <div ref={ref} css={containerStyle}>
      <Spine />
      <div data-depth={depth} css={problemStyle}>
        {text}
      </div>
      {children.map((elem, idx) => (
        <RecursiveComponent
          props={elem}
          key={elem.id}
          idx={idx}
          branchIdx={idx}
        />
      ))}
    </div>
  );
});

const containerStyle = (theme) => css`
  font-family: MonoFont;
  background-color: ${theme.colors.white};
  color: ${theme.colors.black};
  position: relative;
  width: 800px;
  min-width: 800px;
  height: 500px;
  border: 1px solid ${theme.colors.black};
  box-sizing: border-box;

  & * {
    position: absolute;
    box-sizing: border-box;
    overflow-wrap: anywhere;
  }
`;

const problemStyle = (theme) => css`
  top: calc(50%);
  left: calc(100% - 7rem);
  width: 7rem;
  border: 1px solid ${theme.colors.black};
  transform: translateY(-50%);
  text-align: center;
`;
