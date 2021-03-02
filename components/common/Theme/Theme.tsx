import React, { FC, ReactNode } from 'react'
import themeConfig from './config'
import {
  createMuiTheme,
  ThemeOptions,
  ThemeProvider,
} from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import { PaletteOptions } from '@material-ui/core/styles/createPalette'

interface ITheme {
  themeConfig: ThemeOptions
  palette?: PaletteOptions
}

export type ThemeContextType = {
  theme: ITheme
  updateTheme: (themeConfig: ITheme) => void
}

const ThemeSetContext = React.createContext<ThemeContextType | null>(
  null
)

const ThemeCustomProvider: FC<ReactNode> = ({
  children,
}) => {
  const [
    theme,
    setTheme,
  ] = React.useState<ITheme>(themeConfig)

  const updateTheme = (themeConfig: ITheme) => {
    setTheme(themeConfig)
  }

  return (
    <ThemeProvider theme={createMuiTheme(theme)}>
      <ThemeSetContext.Provider
        value={{
          theme,
          updateTheme,
        }}
      >
        <CssBaseline />
        {children}
      </ThemeSetContext.Provider>
    </ThemeProvider>
  )
}

export function useThemeSetContext() {
  const context = React.useContext(
    ThemeSetContext
  )
  if (context === undefined) {
    throw new Error(
      'ThemeSetContext must be used within a ThemeContext.Provider'
    )
  }
  return context
}

export default ThemeCustomProvider
