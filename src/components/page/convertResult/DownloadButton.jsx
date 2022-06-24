import { SubmitButton } from 'components/commons/button/SubmitButton';
import FileDownloadIcon from '@mui/icons-material/FileDownload';


export const DownloadButton = ({ handler }) => {
  return (
    <SubmitButton
      onClick={handler}
      size="large"
      endIcon={<FileDownloadIcon />}
      label="DOWNLOAD"
    />
  );
};
