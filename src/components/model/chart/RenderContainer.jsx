import styled from '@emotion/styled';
import { forwardRef } from 'react';
import { Spine } from './Spine';
import { RecursiveComponent } from './RecursiveComponent';

export const RenderContainer = forwardRef(({ root }, ref) => {
  const { text, depth, children } = root;

  return (
    <SDiv className="container" ref={ref}>
      <Spine />
      <MainProblem data-depth={depth}>{text}</MainProblem>
      {children.map((elem, idx) => (
        <RecursiveComponent
          props={elem}
          key={elem.id}
          idx={idx}
          branchIdx={idx}
        />
      ))}
    </SDiv>
  );
});

const MainProblem = styled.div`
  top: calc(50%);
  left: calc(100% - 7rem);
  width: 7rem;
  border: 1px solid #000;
  transform: translateY(-50%);
  text-align: center;
`;

const SDiv = styled.div`
  background-color: #fff;
  color: #000;
  position: relative;
  width: 800px;
  height: 500px;
  border: 1px solid #000;
  box-sizing: border-box;
  & * {
    position: absolute;
    box-sizing: border-box;
    overflow-wrap: anywhere;
  }
`;
