import Button from '@mui/material/Button';

export const DownloadButton = ({ size, icon, label }) => {
  return (
    <Button
      type="submit"
      variant="contained"
      // onClick={handler} ハンドラーは呼び出し元で定義したい
      size={size}
      endIcon={icon}
      sx={{
        backgroundColor: 'rgba(61,204,250, 0.6)',
        '&:hover': {
          backgroundColor: 'rgba(61,204,250, 1)',
        },
      }}
    >
      {label}
    </Button>
  );
};
