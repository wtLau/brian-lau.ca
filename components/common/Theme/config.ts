import { PaletteType } from '@material-ui/core'
import { PaletteOptions } from '@material-ui/core/styles/createPalette'

// Create a theme instance.
const themeConfig = {
  palette: {
    type: 'light' as PaletteType,
    primary: {
      main: '#A67212',
    },
    secondary: {
      main: '#F2CB57',
    },
    text: {
      primary: '#000',
      secondary: '#555',
    }
  },

} as PaletteOptions

export default themeConfig
