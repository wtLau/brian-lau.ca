import { PaletteType, ThemeOptions } from '@material-ui/core'
import { PaletteOptions } from '@material-ui/core/styles/createPalette'

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
    }
  },
  typography: {
    fontSize: 18
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1060,
      lg: 1200,
      xl: 1920
    }
  }

}

export default themeConfig
