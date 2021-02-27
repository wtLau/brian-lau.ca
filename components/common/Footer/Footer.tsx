import { FC } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import {
  Grid,
  Card,
  Typography,
  IconButton,
} from '@material-ui/core'
import {
  GitHub as GitHubIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
} from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  white: {
    color: '#fff',
  },

  footer: {
    maxWidth: theme.breakpoints.width('lg'),
    borderRadius: '100px 100px 0  0',
    background: '#272727',
    padding: '60px 0 0 0 ',
  },
  icon: {
    fontSize: '40px',
    color: '#fff',
  },
}))

const Footer: FC = () => {
  const classes = useStyles()

  return (
    <Card className={classes.footer}>
      <Grid
        item
        container
        justify='center'
        alignContent='center'
        xs={12}
        spacing={10}
      >
        <Grid item xs={12}>
          <Typography
            variant='h2'
            color='secondary'
            gutterBottom
          >
            Let&apos;s Connect!
          </Typography>
        </Grid>

        <Grid
          item
          container
          xs={12}
          justify='center'
        >
          <Grid item xs={12} md={4}>
            <Grid
              direction='column'
              container
              justify='center'
              alignItems='center'
            >
              <Typography
                variant='h4'
                color='primary'
                gutterBottom
              >
                Phone:
              </Typography>
              <Typography
                variant='h5'
                className={classes.white}
              >
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
              <Typography
                variant='h4'
                color='primary'
                gutterBottom
              >
                Social Media
              </Typography>
              <Grid
                container
                justify='center'
                alignItems='center'
              >
                <IconButton
                  aria-label='Github.com'
                  onClick={() =>
                    window.open(
                      'https://github.com/wtLau'
                    )
                  }
                >
                  <GitHubIcon
                    className={classes.icon}
                  />
                </IconButton>
                <IconButton
                  aria-label='Linkedin.com'
                  onClick={() =>
                    window.open(
                      'https://www.linkedin.com/in/brian-lau/'
                    )
                  }
                >
                  <LinkedInIcon
                    className={classes.icon}
                  />
                </IconButton>
                <IconButton
                  aria-label='Instagram'
                  onClick={() =>
                    window.open(
                      'https://www.instagram.com/image_brlau/'
                    )
                  }
                >
                  <InstagramIcon
                    className={classes.icon}
                  />
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
              <Typography
                variant='h4'
                color='primary'
                gutterBottom
              >
                Email
              </Typography>
              <Typography
                variant='h5'
                className={classes.white}
              >
                778-898-1111
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Typography
            variant='subtitle1'
            color='secondary'
            align='center'
          >
            © 2019 Brian Lau All Rights Reserved
          </Typography>
        </Grid>
      </Grid>
    </Card>
  )
}

export default Footer
