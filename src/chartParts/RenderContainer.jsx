import styled from '@emotion/styled';
import { CalcH2 } from './calc';
import { Ploblem } from './Ploblem';
import { Spine } from './Spine';

export const RenderContainer = (props) => {
  const { h2List } = props;
  const h2Elem = h2List.map((text, index) => CalcH2(text, index));
  return (
    <SDiv>
      <Ploblem text="PLOBLEM" />
      <Spine />
      {h2Elem.map((obj, index) => (
        <SH2 key={index} obj={obj}>
          {obj.text}
        </SH2>
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
`;

const SH2 = styled.div(
  {
    borderBottom: '1px solid #000',
    position: 'absolute',
    width: '250px',
  },
  (props) => ({
    width: props.obj.width,
    top: props.obj.top,
    left: props.obj.left,
    transform: props.obj.transform,
  }),
);
