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
  return (
    <>
      <FishBornChart markdown={params.markdown} />
      <Flex>
        <CancelButton />
        <DownloadButton />
        <div />
      </Flex>
    </>
  );
};
