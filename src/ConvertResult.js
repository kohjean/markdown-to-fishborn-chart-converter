import { useRef } from 'react';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import { FishBornChart } from './FishBornChart';
import { CancelButton } from './CancelButton';
import { DownloadButton } from './DownloadButton';

const Flex = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
`;

export const ConvertResult = () => {
  const params = useParams();
  const chartImg = useRef();
  return (
    <>
      <FishBornChart markdown={params.markdown} ref={chartImg} />
      <Flex>
        <CancelButton />
        <DownloadButton />
        <div />
      </Flex>
    </>
  );
};
