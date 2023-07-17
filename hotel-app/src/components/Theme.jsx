//import { createTheme, ThemeProvider } from '@material-ui/core/styles';

import { createTheme } from "@mui/material";

export const theme = createTheme();

theme.typography.h8 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  // [theme.breakpoints.up('md')]: {
  //   fontSize: '2.4rem',
  // },
};