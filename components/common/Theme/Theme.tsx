import React, { FC } from 'react'
import {
  createMuiTheme,
  ThemeOptions,
  useTheme,
  Theme,
  MuiThemeProvider,
} from '@material-ui/core'
import { PaletteOptions } from '@material-ui/core/styles/createPalette'

interface ITheme {
  themeConfig: ThemeOptions
  palette?: PaletteOptions
}

interface ThemeContextType {
  dispatch: React.Dispatch<any>
}

type Action = {
  type: 'changeTheme'
  payload: any
}

interface State {
  paletteType: string
}

interface ThemeProviderProps {
  children: React.ReactNode
  theme: ThemeOptions
}

const ThemeDispatchContext = React.createContext<any>(null)

const ThemeCustomProvider: FC<ThemeProviderProps> = ({ children, theme }) => {
  const themeInitialOptions = {
    paletteType: 'dark',
  }

  const [themeOptions, dispatch] = React.useReducer(
    (state: State, action: Action) => {
      switch (action.type) {
        case 'changeTheme':
          return {
            ...state,
            paletteType: action.payload,
          }
        default:
          throw new Error()
      }
    },
    themeInitialOptions
  )

  const memoizedTheme = React.useMemo(() => {
    return createMuiTheme({
      ...theme,
      palette: {
        ...theme.palette,
        type: themeOptions.paletteType,
      },
    })
  }, [theme, themeOptions.paletteType])

  return (
    <MuiThemeProvider theme={memoizedTheme}>
      <ThemeDispatchContext.Provider value={dispatch}>
        {children}
      </ThemeDispatchContext.Provider>
    </MuiThemeProvider>
  )
}

export default ThemeCustomProvider

export const useChangeTheme = () => {
  const dispatch = React.useContext(ThemeDispatchContext)
  const theme = useTheme()
  const changeTheme = React.useCallback(
    () =>
      dispatch({
        type: 'changeTheme',
        payload: theme.palette.type === 'light' ? 'dark' : 'light',
      }),
    [theme.palette.type, dispatch]
  )

  return changeTheme
}
