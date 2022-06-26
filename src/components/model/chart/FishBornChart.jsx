import { forwardRef } from 'react';

import { RenderContainer } from './RenderContainer';
import { mdToTree } from 'components/functional/hooks/mdToTree';
import { css } from '@emotion/react';

export const FishBornChart = forwardRef((props, ref) => {
  // URLパラメータに渡す際に改行コードを変換していた部分の復号
  const mdLines = props.markdown.split('&nbsp;');
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
