import Button from '@mui/material/Button';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

export const DownloadButton = ({handler}) => {
  return (
    <Button
      type="submit"
      variant="contained"
      onClick={handler}
      size="large"
      endIcon={<FileDownloadIcon />}
      sx={{
        color: 'text.main',
        backgroundColor: 'submit.alpha',
        '&:hover': {
          backgroundColor: 'submit.main',
        },
      }}
    >
      Download
    </Button>
  );
};
