import { Grid } from '@mui/material'
import { styled, useTheme } from '@mui/material/styles'
import React, { FC } from 'react'

import { Footer, Navbar } from '@components/common'

declare interface LayoutProps {
  children: React.ReactNode
}

const AppLayout: FC<LayoutProps> = ({ children }) => {
  const theme = useTheme()
  return (
    <Grid
      sx={{
        minHeight: '100vh',
        maxWidth: theme.breakpoints.values.lg,
        margin: '0 auto',
        xl: {
          overflow: 'hidden',
        },
      }}
      container
      justifyContent='center'
    >
      <Grid item xs={12} component='nav'>
        <Navbar />
      </Grid>

      <Grid
        item
        xs={12}
        sx={{
          margin: theme.spacing(10, 2),
          md: {
            margin: theme.spacing(8, 2),
          },
        }}
        component='main'
      >
        {children}
      </Grid>

      <Grid item xs={12} component='footer'>
        <Footer />
      </Grid>
    </Grid>
  )
}

export default AppLayout
