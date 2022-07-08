import { forwardRef } from 'react';
import { css } from '@emotion/react';
import { RenderContainer } from 'components/model/chart/RenderContainer';
import { mdToTree } from 'components/functional/hooks/mdToTree';

export const FishBornChart = forwardRef(({ mdText }, ref) => {
  const mdLines = mdText.split('\n');
  const root = mdToTree(mdLines);

  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        overflow: scroll;
      `}
    >
      <RenderContainer root={root} ref={ref} />
    </div>
  );
});
