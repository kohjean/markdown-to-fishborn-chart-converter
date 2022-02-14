import styled from '@emotion/styled';
import { Spine } from './Spine';
import { RecursiveComponent } from './RecursiveComponent';

export const RenderContainer = ({ root }) => {
  const { text, depth, children } = root;
  return (
    <SDiv className="container">
      <Spine />
      <MainPloblem data-depth={depth}>{text}</MainPloblem>
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
};

const MainPloblem = styled.div`
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
