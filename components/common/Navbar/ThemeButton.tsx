import { Brightness7, Brightness4 } from '@mui/icons-material'
import { IconButton, Tooltip, useTheme } from '@mui/material'
import React from 'react'

import Condition from '../Condition'
import { useChangeTheme } from '../Theme'

function ThemeButton() {
  const theme = useTheme()
  const changeTheme = useChangeTheme()

  const isDarkMode = theme.palette.mode === 'dark'
  return (
    <Tooltip title={`Toggle ${isDarkMode ? 'light' : 'dark'} mode`}>
      <IconButton onClick={changeTheme} size='large'>
        <Condition condition={isDarkMode} fallback={<Brightness4 />}>
          <Brightness7 />
        </Condition>
      </IconButton>
    </Tooltip>
  )
}

export default ThemeButton
