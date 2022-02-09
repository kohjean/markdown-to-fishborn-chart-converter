import styled from '@emotion/styled';
import { Spine } from './Spine';
import { RecursiveComponent } from './RecursiveComponent';

export const RenderContainer = ({ root }) => {
  return (
    <SDiv className="container">
      <Spine />
      <RecursiveComponent props={root} />
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
