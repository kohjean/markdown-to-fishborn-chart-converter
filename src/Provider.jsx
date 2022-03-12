import { ThemeProvider } from '@mui/material/styles';
import { theme } from 'styles/theme';

export const Provider = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
