import { useNavigate } from 'react-router';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { DangerButton } from 'components/commons/button/DangerButton';

export const CancelButton = () => {
  const navigate = useNavigate();
  return (
    <DangerButton
      label="CANCEL"
      size="large"
      startIcon={<ArrowBackIcon />}
      onClick={() => navigate('/')}
    />
  );
};
