import {
  Footer,
  Navbar,
} from '@components/common'
import { Grid, Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React, { FC } from 'react'
import './Layout.module.css'

declare interface LayoutProps {
  children: React.ReactNode
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    minHeight: '100vh',
    [theme.breakpoints.up('md')]: {
      maxWidth: theme.breakpoints.width('lg'),
      margin: '0 auto',
    },
  },
  body: {
    margin: theme.spacing(5, 7),
  },
  footer: {
    marginTop: 'auto',
    display: 'flex',
    justifyContent: 'center',
  },
}))

const Layout: FC<LayoutProps> = ({
  children,
}) => {
  const classes = useStyles()

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Navbar />
      </Grid>

      <Grid item xs={12} className={classes.body}>
        {children}
      </Grid>

      <Grid
        item
        xs={12}
        className={classes.footer}
        component={Footer}
      />
    </Grid>
  )
}

export default Layout
