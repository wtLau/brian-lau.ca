import { Brightness7, Brightness4 } from '@mui/icons-material'
import { IconButton, useTheme } from '@mui/material'
import React from 'react'

import Condition from '../Condition'
import { useChangeTheme } from '../Theme'

function ThemeButton() {
  const theme = useTheme()
  const changeTheme = useChangeTheme()
  return (
    <IconButton onClick={changeTheme} title='Toggle theme' size='large'>
      <Condition
        condition={theme.palette.mode === 'dark'}
        fallback={<Brightness4 />}
      >
        <Brightness7 />
      </Condition>
    </IconButton>
  )
}

export default ThemeButton
