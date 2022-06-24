import Button from '@mui/material/Button';

export const DangerButton = ({ label, startIcon, endIcon, size, onClick }) => {
  return (
    <Button
      variant="contained"
      startIcon={startIcon}
      endIcon={endIcon}
      size={size}
      onClick={onClick}
      sx={{
        color: 'text.main',
        backgroundColor: 'cancel.alpha',
        '&:hover': {
          backgroundColor: 'cancel.main',
        },
      }}
    >
      {label}
    </Button>
  );
};
