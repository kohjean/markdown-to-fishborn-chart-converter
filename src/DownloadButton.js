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
        backgroundColor: 'rgba(61,204,250, 0.6)',
        '&:hover': {
          backgroundColor: 'rgba(61,204,250, 1)',
        },
      }}
    >
      Download
    </Button>
  );
};
