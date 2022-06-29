import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { DangerButton } from 'components/commons/button/DangerButton';

export const CancelButton = () => {
  return (
    <DangerButton
      label="CANCEL"
      size="large"
      startIcon={<ArrowBackIcon />}
    />
  );
};
