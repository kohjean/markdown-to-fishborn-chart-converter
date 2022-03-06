import { forwardRef } from 'react';

import { RenderContainer } from './RenderContainer';
import { mdToTree } from 'components/functional/hooks/mdToTree';

export const FishBornChart = forwardRef((props, ref) => {
  // URLパラメータに渡す際に改行コードを変換していた部分の復号
  const mdLines = props.markdown.split('&nbsp;');
  const root = mdToTree(mdLines);

  return <RenderContainer root={root} ref={ref} />;
});
