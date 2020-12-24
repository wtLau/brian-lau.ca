import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'
import NavBar from '../components/Navbar'
// import AvatarImage from '../images/brian_square.jpg'
import Grid from '@material-ui/core/Grid'
// import Box from '@material-ui/core/Box'
// import Typography from '@material-ui/core/Typography'

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
    <Grid container spacing={1} className={classes.root}>
      <Grid item xs={12}>
        <NavBar />
      </Grid>
      <Grid item xs={12}>
        {children}
      </Grid>
      {/* <Grid item xs={12}>
        <Box className='footer'>
          <Typography>© 2019 Brian Lau All Rights Reserved</Typography>
        </Box>
      </Grid> */}
    </Grid>
  )
}

Layout.defaultProps = {
  children: null,
}

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
