import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const CancelButton = () => {
  return (
    <Button
      variant="contained"
      size="large"
      startIcon={<ArrowBackIcon />}
      sx={{
        backgroundColor: 'rgba(243,99,99, 0.6)',
        '&:hover': {
          backgroundColor: 'rgba(243,99,99, 1)',
        },
      }}
    >
      Cancel
    </Button>
  );
};
