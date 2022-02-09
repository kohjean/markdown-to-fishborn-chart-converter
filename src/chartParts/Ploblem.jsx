import styled from '@emotion/styled';

export const Ploblem = (props) => {
  const { text } = props;
  return <SDiv>{text}</SDiv>;
};
const SDiv = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 7rem;
  top: 50%;
  left: calc(100% - 7rem);
  border: 1px solid #000;
  transform: translateY(-50%);
  text-align: center;
`;
