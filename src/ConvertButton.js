import Button from '@mui/material/Button';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';

export const ConvertButton = () => {
  return (
    <>
      <Button
        type="submit"
        form="file-uploader"
        variant="contained"
        size="large"
        endIcon={<ChangeCircleIcon />}
        sx={{
          backgroundColor: 'rgba(61,204,250, 0.6)',
          '&:hover': {
            backgroundColor: 'rgba(61,204,250, 1)',
          },
        }}
      >
        Convert
      </Button>
    </>
  );
};
