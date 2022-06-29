import { useRef } from 'react';
import { useParams } from 'react-router-dom';
import { css } from '@emotion/react';

import domtoimage from 'dom-to-image';
import { FishBornChart } from 'components/model/chart/FishBornChart';
import { CancelButton } from './CancelButton';
import { DownloadButton } from './DownloadButton';

export const ConvertResult = () => {
  const params = useParams();
  const chartImg = useRef();

  const download = () => {
    // domからイメージを生成
    domtoimage
      .toPng(chartImg.current)
      .then((base64) => {
        const bin = window.atob(base64.replace(/^.+,/, ''));
        const buffer = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; i++) {
          buffer[i] = bin.charCodeAt(i);
        }
        const blob = new Blob([buffer.buffer], { type: 'image/png' });
        // ダウンロード処理
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = `fb-chart.png`;
        link.click();
      })
      .catch((e) => {
        console.error('You got a error: ' + e);
      });
  };

  return (
    <>
      <FishBornChart markdown={params.markdown} ref={chartImg} />
      <div
        css={css`
          width: 80%;
          display: flex;
          justify-content: space-evenly;
        `}
      >
        <CancelButton />
        <DownloadButton handler={download} />
        <div />
      </div>
    </>
  );
};
