import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'
import NavBar from '../components/Navbar'
// import AvatarImage from '../images/brian_square.jpg'
import Grid from '@material-ui/core/Grid'
// import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Card from '../components/Card/Card'
import GitHubIcon from '@material-ui/icons/GitHub'
import InstagramIcon from '@material-ui/icons/Instagram'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import IconButton from '@material-ui/core/IconButton'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  white: {
    color: '#fff',
  },
  footer: {
    maxWidth: theme.breakpoints.width('lg'),
  },
  icon: {
    fontSize: '40px',
    color: '#fff',
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

      <Grid item xs={12}>
        <Card
          borderRadius='100px 100px 0  0 '
          background='#272727'
          padding='60px 0 0 0 '
        >
          <Grid
            item
            container
            justify='center'
            alignContent='center'
            xs={12}
            spacing={10}
            className={classes.footer}
          >
            <Grid item xs={12}>
              <Typography variant='h2' color='secondary' gutterBottom>
                Let&apos;s Connect!
              </Typography>
            </Grid>

            <Grid item container xs={12} justify='center'>
              <Grid item xs={12} md={4}>
                <Grid
                  direction='column'
                  container
                  justify='center'
                  alignItems='center'
                >
                  <Typography variant='h4' color='primary' gutterBottom>
                    Phone:
                  </Typography>
                  <Typography variant='h5' className={classes.white}>
                    778-898-1111
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={12} md={4}>
                <Grid
                  direction='column'
                  container
                  justify='center'
                  alignItems='center'
                >
                  <Typography variant='h4' color='primary' gutterBottom>
                    Social Media
                  </Typography>
                  <Grid container justify='center' alignItems='center'>
                    <IconButton
                      aria-label='Github.com'
                      onClick={() => window.open('https://github.com/wtLau')}
                    >
                      <GitHubIcon className={classes.icon} />
                    </IconButton>
                    <IconButton
                      aria-label='Linkedin.com'
                      onClick={() =>
                        window.open('https://www.linkedin.com/in/brian-lau/')
                      }
                    >
                      <LinkedInIcon className={classes.icon} />
                    </IconButton>
                    <IconButton
                      aria-label='Instagram'
                      variant='contained'
                      onClick={() =>
                        window.open('https://www.instagram.com/image_brlau/')
                      }
                    >
                      <InstagramIcon className={classes.icon} />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={4}>
                <Grid
                  direction='column'
                  container
                  justify='center'
                  alignItems='center'
                >
                  <Typography variant='h4' color='primary' gutterBottom>
                    Email
                  </Typography>
                  <Typography variant='h5' className={classes.white}>
                    778-898-1111
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Typography variant='subtitle1' color='secondary' align='center'>
                © 2019 Brian Lau All Rights Reserved
              </Typography>
            </Grid>
          </Grid>
        </Card>
      </Grid>
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
