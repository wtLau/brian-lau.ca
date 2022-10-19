import { ThemeOptions } from '@mui/material'

// Create a theme instance.
const themeConfig: ThemeOptions = {
  palette: {
    primary: {
      main: '#f9f9f9',
    },
    secondary: {
      main: '#424242',
    },
  },
  typography: {
    fontSize: 18,
    h1: {
      fontSize: '5rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '3.5rem',
      fontWeight: 700,
    },
    h3: {
      fontSize: '3rem',
      fontWeight: 700,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1060,
      lg: 1200,
      xl: 1920,
    },
  },
}

export default themeConfig
