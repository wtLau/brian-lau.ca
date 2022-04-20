import { Footer, Navbar } from '@components/common'
import { Grid, Theme } from '@mui/material'
import { styled } from '@mui/material/styles'
import makeStyles from '@mui/styles/makeStyles'
import React, { FC } from 'react'
import './Layout.module.css'

const PREFIX = 'Layout'

const classes = {
  root: `${PREFIX}-root`,
  body: `${PREFIX}-body`,
  footer: `${PREFIX}-footer`,
}

const StyledGrid = styled(Grid)(({ theme }) => ({
  [`&.${classes.root}`]: {
    flexGrow: 1,
    minHeight: '100vh',
    maxWidth: theme.breakpoints.values.lg,
    margin: '0 auto',
    [theme.breakpoints.down('xl')]: {
      overflow: 'hidden',
    },
  },

  [`& .${classes.body}`]: {
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(12, 2),
    },
    margin: theme.spacing(0, 3),
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

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <StyledGrid container className={classes.root} justifyContent='center'>
      <Grid item xs={12}>
        <Navbar />
      </Grid>

      <Grid item xs={12} className={classes.body}>
        {children}
      </Grid>

      <Grid item xs={12} className={classes.footer} component={Footer} />
    </StyledGrid>
  )
}

export default Layout
