import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    custom: {
      light: '#ffa726',
      main: '#ffffff',
      dark: '#ef6c00',
      contrastText: 'rgba(0, 0, 0, 0.87)'
    },
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#6363AB',
      dark: '#5A4067'
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#fffff',
      main: '#ffffff',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00'
    },
    giscolor: {
      main: '#6363AB;',
      contrastText: '#ffffff'
    }
  },
  typography: {
    fontFamily: ['Josefin Sans', 'sans-serif'].join(',')
  }
});
