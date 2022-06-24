import { createTheme } from '@mui/material/styles';
export const theme = createTheme({
  colors: {
    background: '#282c34',
    primary: '#3dccfa',
    focus: '#1976d2',
    white: '#fffefe',
    black: '#0f0417',
  },
  palette: {
    submit: {
      main: '#3dccfa',
      alpha: '#3dccfa99',
      focus: '#1976d2',
    },
    cancel: {
      main: '#f36363',
      alpha: '#f3636399',
    },
    text: {
      main: '#fffefe',
    },
  },
});
