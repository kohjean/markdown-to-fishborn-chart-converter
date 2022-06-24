import { FileUploader } from './fileUploader';
import { SubTitle } from 'components/commons/title/SubTitle';

export const FileSection = ({ setText, handler, active, props }) => {
  return (
    <div
      onClick={() => handler(true)}
      className={active ? 'active' : 'inactive'}
      css={props}
    >
      <SubTitle text="File Upload" />
      <FileUploader size={'10rem'} setText={setText} />
    </div>
  );
};
