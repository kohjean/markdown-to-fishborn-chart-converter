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
        color: 'text.main',
        backgroundColor: 'primary.alpha',
        '&:hover': {
          backgroundColor: 'primary.main',
        },
      }}
    >
      {label}
    </Button>
  );
};
