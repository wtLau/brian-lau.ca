import { PaletteType, ThemeOptions } from '@material-ui/core'
import { PaletteOptions } from '@material-ui/core/styles/createPalette'
import Theme from '.'

// Create a theme instance.
const themeConfig: ThemeOptions = {
  palette: {
    primary: {
      main: '#A67212',
      // light: '#dba044',
      // dark: '#734700',
      // contrastText: "#fff"
    },
    secondary: {
      main: '#F2CB57',
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
