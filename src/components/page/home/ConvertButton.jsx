import { SubmitButton } from 'components/commons/button/SubmitButton';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';

export const ConvertButton = ({ target }) => {
  return (
    <SubmitButton
      label="Convert"
      target={target}
      endIcon={<ChangeCircleIcon />}
      size="large"
    />
  );
};
