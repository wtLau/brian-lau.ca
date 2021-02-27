import {
  Footer,
  Navbar,
} from '@components/common'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}))

const Layout = ({ children }) => {
  const classes = useStyles()

  return (
    <Grid
      container
      spacing={1}
      className={classes.root}
    >
      <Grid item xs={12}>
        <Navbar />
      </Grid>

      <Grid item xs={12}>
        {children}
      </Grid>

      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  )
}

export default Layout
