import { useNavigate } from 'react-router';
import Button from '@mui/material/Button';

export const DangerButton = ({ label, startIcon, endIcon, size }) => {
  const navigate = useNavigate();

  return (
    <Button
      variant="contained"
      startIcon={startIcon}
      endIcon={endIcon}
      size={size}
      onClick={() => navigate(`${process.env.PUBLIC_URL}`)}
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
