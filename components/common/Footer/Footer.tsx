import { FC } from 'react'

import {
  makeStyles,
  Theme,
} from '@material-ui/core/styles'
import {
  Grid,
  Typography,
  IconButton,
} from '@material-ui/core'
import {
  GitHub as GitHubIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
} from '@material-ui/icons'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(5, 0),
    maxWidth: theme.breakpoints.width('lg'),
    borderTop: `1px solid ${theme.palette.divider}`,
  },
  icon: {
    fontSize: '40px',
  },
}))

const Footer: FC = () => {
  const classes = useStyles()

  return (
    <Grid container className={classes.root}>
      <Grid
        component={Typography}
        item
        xs={12}
        variant='h4'
        color='secondary'
        gutterBottom
        align='center'
      >
        Let&apos;s Connect!
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
              variant='h6'
              color='primary'
              gutterBottom
            >
              Phone:
            </Typography>
            <Typography
              variant='body1'
              color='textSecondary'
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
              variant='h6'
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
              variant='h6'
              color='primary'
              gutterBottom
            >
              Email
            </Typography>
            <Typography
              variant='body1'
              color='textSecondary'
            >
              778-898-1111
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Typography
          variant='body2'
          color='textSecondary'
          align='center'
        >
          © {new Date().getFullYear()} Brian Lau
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Footer
