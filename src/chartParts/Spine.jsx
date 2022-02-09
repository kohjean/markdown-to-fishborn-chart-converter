import styled from '@emotion/styled';

export const Spine = () => {
  return <SDiv />;
};

const SDiv = styled.div`
  box-sizing: border-box;
  position: absolute;
  border: 1px solid #000;
  top: 50%;
  width: calc(100% - 7rem);
`;
