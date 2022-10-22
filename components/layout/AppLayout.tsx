import { Grid } from '@mui/material'
import { styled } from '@mui/material/styles'
import React, { FC } from 'react'

import { Footer, Navbar } from '@components/common'

const PREFIX = 'Layout'

const classes = {
  root: `${PREFIX}-root`,
  body: `${PREFIX}-body`,
  footer: `${PREFIX}-footer`,
}

const StyledGrid = styled(Grid)(({ theme }) => ({
  flexGrow: 1,
  minHeight: '100vh',
  maxWidth: theme.breakpoints.values.lg,
  margin: '0 auto',
  [theme.breakpoints.down('xl')]: {
    overflow: 'hidden',
  },

  [`& .${classes.body}`]: {
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(10, 2),
    },
    margin: theme.spacing(8, 2),
  },

  [`& .${classes.footer}`]: {
    marginTop: 'auto',
    display: 'flex',
    justifyContent: 'center',
  },
}))

declare interface LayoutProps {
  children: React.ReactNode
}

const AppLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <StyledGrid container justifyContent='center'>
      <Grid item xs={12} component='nav'>
        <Navbar />
      </Grid>

      <Grid item xs={12} className={classes.body} component='main'>
        {children}
      </Grid>

      <Grid item xs={12} className={classes.footer} component='footer'>
        <Footer />
      </Grid>
    </StyledGrid>
  )
}

export default AppLayout
