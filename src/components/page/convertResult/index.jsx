import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { css } from '@emotion/react';

import domtoimage from 'dom-to-image';
import { FishBornChart } from 'components/model/chart/FishBornChart';
import { CancelButton } from './CancelButton';
import { DownloadButton } from './DownloadButton';

export const ConvertResult = () => {
  const chartImgRef = useRef();
  const location = useLocation();
  const mdText = location.state.mdText;

  const download = () => {
    const title = mdText.match(/^\* (.+)/)[1];
    // domからイメージを生成
    domtoimage
      .toPng(chartImgRef.current)
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
        link.download = `fbc-${title}.png`;
        link.click();
      })
      .catch((e) => {
        console.error('You got a error: ' + e);
      });
  };

  return (
    <>
      <FishBornChart mdText={mdText} ref={chartImgRef} />
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
