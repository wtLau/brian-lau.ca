import { GitHub, Instagram, LinkedIn } from '@mui/icons-material'
import { Grid, Typography, IconButton } from '@mui/material'
import { styled } from '@mui/material/styles'
import React, { FC } from 'react'

import { Link } from '@components/ui'

const PREFIX = 'Footer'

const classes = {
  root: `${PREFIX}-root`,
  copyright: `${PREFIX}-copyright`,
}

const StyledGrid = styled(Grid)(({ theme }) => ({
  [`&.${classes.root}`]: {
    flexGrow: 1,
    padding: theme.spacing(6, 0),
    borderTop: `1px solid ${theme.palette.divider}`,
  },

  [`& .${classes.copyright}`]: {
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
    name: 'Mini Apps',
    link: '/mini-apps',
  },
  {
    name: 'Resume',
    link: '/brian-lau-resume.pdf',
    target: '_blank',
  },
  { name: 'Mentorship', link: '/mentorship' },
]

const Footer: FC = () => {
  return (
    <StyledGrid
      container
      className={classes.root}
      justifyContent='center'
      spacing={4}
    >
      <Grid container item justifyContent='center' spacing={5}>
        {linkData &&
          linkData.map((e, i) => (
            <Grid item key={i}>
              <Link href={e.link} target={e.target ? e.target : ''}>
                <Typography
                  gutterBottom
                  variant='body2'
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

      <Grid container item justifyContent='center' spacing={1}>
        <Grid item>
          <Link target='_blank' href='https://www.linkedin.com/in/brian-lau/'>
            <IconButton size='large'>
              <LinkedIn />
            </IconButton>
          </Link>
        </Grid>

        <Grid item>
          <Link
            target='_blank'
            href='https://www.instagram.com/user_____undefined/'
          >
            <IconButton size='large'>
              <Instagram />
            </IconButton>
          </Link>
        </Grid>
        <Grid item>
          <Link target='_blank' href='https://www.github.com/wtlau'>
            <IconButton size='large'>
              <GitHub />
            </IconButton>
          </Link>
        </Grid>
      </Grid>

      {/* 
      <Grid item xs={12} className={classes.copyright}>
        <Typography variant='subtitle2' color='textSecondary' align='center'>
          © {new Date().getFullYear()} Brian Lau
        </Typography>
      </Grid> */}
    </StyledGrid>
  )
}

export default Footer
