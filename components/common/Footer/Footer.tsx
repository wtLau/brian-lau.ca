import React, { FC } from 'react'

import { makeStyles, Theme } from '@material-ui/core/styles'
import {
  Grid,
  Typography,
  IconButton,
  MenuList,
  ListItemText,
  Icon,
} from '@material-ui/core'
import { GitHub, Instagram, LinkedIn } from '@material-ui/icons'
import { Link } from '@components/ui'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing(6),
    borderTop: `1px solid ${theme.palette.divider}`,
  },
  copyright: {
    marginTop: theme.spacing(3),
  },
}))

const linkData = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'Contact',
    link: '/contact',
  },
  {
    name: 'Blog',
    link: '/blog',
  },
  {
    name: 'Tools',
    link: '/tools',
  },
  {
    name: 'Resume',
    link: '/brian-lau-resume.pdf',
    target: '_blank',
  },
]

const Footer: FC = () => {
  const classes = useStyles()

  return (
    <Grid container className={classes.root} justify='center' spacing={4}>
      <Grid container item justify='center' spacing={5}>
        {linkData &&
          linkData.map((e, i) => (
            <Grid item key={i}>
              <Link href={e.link} target={e.target ? e.target : ''}>
                <Typography
                  gutterBottom
                  variant='h6'
                  component='p'
                  color='textSecondary'
                  align='center'
                >
                  {e.name}
                </Typography>
              </Link>
            </Grid>
          ))}
      </Grid>

      <Grid container item justify='center' spacing={1}>
        <Grid item>
          <Link target='_blank' href='https://www.github.com/wtlau'>
            <IconButton>
              <GitHub />
            </IconButton>
          </Link>
        </Grid>

        <Grid item>
          <Link target='_blank' href='https://www.linkedin.com/in/brian-lau/'>
            <IconButton>
              <LinkedIn />
            </IconButton>
          </Link>
        </Grid>

        <Grid item>
          <Link target='_blank' href='https://www.instagram.com/image_brlau/'>
            <IconButton>
              <Instagram />
            </IconButton>
          </Link>
        </Grid>
      </Grid>

      <Grid item xs={12} className={classes.copyright}>
        <Typography variant='subtitle2' color='textSecondary' align='center'>
          © {new Date().getFullYear()} Brian Lau
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Footer
