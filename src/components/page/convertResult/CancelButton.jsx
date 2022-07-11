import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { DangerButton } from 'components/commons/button/DangerButton';
import { useNavigate } from 'react-router';

export const CancelButton = ({ mdText }) => {
  const navigate = useNavigate();

  return (
    <DangerButton
      label="BACK"
      size="large"
      onClick={() =>
        navigate(`${process.env.PUBLIC_URL}`, { state: { mdText, active: false } })
      }
      startIcon={<ArrowBackIcon />}
    />
  );
};
