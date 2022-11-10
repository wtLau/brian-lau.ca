import {
  Grid,
  Typography,
  IconButton,
  useTheme,
  Icon,
  Container,
} from '@mui/material'
import React, { FC } from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import { Link } from '@components/ui'

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
    name: 'Gears',
    link: '/gears',
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
  { name: 'Resources', link: '/resources' },
]

const Footer: FC = () => {
  const theme = useTheme()
  return (
    <Grid
      py={2}
      container
      sx={{
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
      justifyContent='center'
      spacing={4}
    >
      <Grid item container justifyContent='center' spacing={2}>
        {linkData.map((e, i) => (
          <Grid item key={i} component={Link} href={e.link}>
            <Typography color='textSecondary'>{e.name}</Typography>
          </Grid>
        ))}
      </Grid>

      <Grid item xs={12} container justifyContent='center'>
        <Link
          href='https://www.linkedin.com/in/brian-lau/'
          mx={1}
          target='_blank'
        >
          <LinkedInIcon />
        </Link>

        <Link
          target='_blank'
          mx={1}
          href='https://www.instagram.com/wtlau.raw/'
        >
          <InstagramIcon />
        </Link>

        <Link target='_blank' mx={1} href='https://www.github.com/wtlau'>
          <GitHubIcon />
        </Link>
      </Grid>

      <Grid item>
        <Typography variant='subtitle2' color='textSecondary'>
          © {new Date().getFullYear()} Brian Lau
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Footer
