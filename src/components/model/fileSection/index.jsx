import { FileUploader } from './fileUploader';
import { SubTitle } from 'components/commons/title/SubTitle';

export const FileSection = ({ setMdText, active, setActive, style }) => {
  return (
    <div
      onClick={() => setActive(true)}
      className={active ? 'active' : 'inactive'}
      css={style}
    >
      <SubTitle title="File Upload" />
      <FileUploader setMdText={setMdText} sx={sx} />
    </div>
  );
};

const sx = {
  fontSize: '10rem',
  '&:hover': {
    cursor: 'pointer',
  },
};
