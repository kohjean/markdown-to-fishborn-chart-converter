import Button from '@mui/material/Button';

export const DangerButton = ({ label, onClick, startIcon, endIcon, size }) => {
  return (
    <Button
      variant="contained"
      startIcon={startIcon}
      endIcon={endIcon}
      size={size}
      onClick={onClick}
      sx={{
        color: 'text.main',
        width: '10rem',
        margin: '1rem 0',
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
