import Button from '@mui/material/Button';

export const SubmitButton = ({
  label,
  target,
  startIcon,
  endIcon,
  size,
  onClick,
}) => {
  return (
    <Button
      type="submit"
      form={target}
      variant="contained"
      startIcon={startIcon}
      endIcon={endIcon}
      size={size}
      onClick={onClick}
      sx={{
        color: 'text.main',
        backgroundColor: 'submit.alpha',
        '&:hover': {
          backgroundColor: 'submit.main',
        },
      }}
    >
      {label}
    </Button>
  );
};
