import Button from '@mui/material/Button';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';

export const ConvertButton = ({ target }) => {
  return (
    <>
      <Button
        type="submit"
        form={target}
        variant="contained"
        size="large"
        endIcon={<ChangeCircleIcon />}
        sx={{
          color: 'text.main',
          backgroundColor: 'submit.alpha',
          '&:hover': {
            backgroundColor: 'submit.main',
          },
        }}
      >
        Convert
      </Button>
    </>
  );
};
