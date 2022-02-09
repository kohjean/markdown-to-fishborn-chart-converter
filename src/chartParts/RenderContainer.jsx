import styled from '@emotion/styled';
import { Spine } from './Spine';
import { RecursiveComponent } from './RecursiveComponent';

export const RenderContainer = ({ root }) => {
  const { text, depth, children, id } = root;
  return (
    <SDiv className="container">
      <Spine />
      <div data-depth={depth} id={`no_${id}`}>
        {text}
      </div>
      {children.map((elem) => (
        <RecursiveComponent props={elem} />
      ))}
    </SDiv>
  );
};

const SDiv = styled.div`
  background-color: #fff;
  color: #000;
  position: relative;
  width: 700px;
  height: 500px;
  border: 1px solid #000;
  box-sizing: border-box;
`;
