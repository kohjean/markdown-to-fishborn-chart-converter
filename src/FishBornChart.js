import { RenderContainer } from './chartParts/RenderContainer';

export const FishBornChart = (props) => {
  console.log(props.markdown);
  // URLパラメータに渡す際に改行コードを変換していた部分の復号
  const mdLines = props.markdown.split('&nbsp;');
};
