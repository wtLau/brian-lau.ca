import { createMuiTheme } from '@material-ui/core/styles'

// Create a theme instance.
const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1110,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      main: '#A67212',
    },
    secondary: {
      main: '#F2CB57',
    },
    text: {
      primary: '#000',
      secondary: '#555',
    },
  },
  typography: {
    h1: {
      fontSize: '3.125rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2.375rem',
      fontWeight: 700,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 400,
    },
    body1: {
      lineHeight: '1.12rem',
    },
  },
})

export default theme
