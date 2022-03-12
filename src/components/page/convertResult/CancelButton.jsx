import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const CancelButton = () => {
  return (
    <Button
      variant="contained"
      size="large"
      startIcon={<ArrowBackIcon />}
      sx={{
        color: 'text.main',
        backgroundColor: 'cancel.alpha',
        '&:hover': {
          backgroundColor: 'cancel.main',
        },
      }}
    >
      Cancel
    </Button>
  );
};
