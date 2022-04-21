import {
  createTheme,
  DeprecatedThemeOptions,
  useTheme,
  ThemeProvider,
  StyledEngineProvider,
  adaptV4Theme,
} from '@mui/material'
import { PaletteOptions } from '@mui/material/styles'
import React, { FC } from 'react'

interface ITheme {
  themeConfig: DeprecatedThemeOptions
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
  theme: DeprecatedThemeOptions
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
    return createTheme(
      adaptV4Theme({
        ...theme,
        palette: {
          ...theme.palette,
          mode: themeOptions.paletteType,
        },
      })
    )
  }, [theme, themeOptions.paletteType])

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={memoizedTheme}>
        <ThemeDispatchContext.Provider value={dispatch}>
          {children}
        </ThemeDispatchContext.Provider>
      </ThemeProvider>
    </StyledEngineProvider>
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
        payload: theme.palette.mode === 'light' ? 'dark' : 'light',
      }),
    [theme.palette.mode, dispatch]
  )

  return changeTheme
}
