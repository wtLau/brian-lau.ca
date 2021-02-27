/* eslint-disable react/jsx-no-bind */
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
} from '@material-ui/icons'
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
} from '@material-ui/core'

import Image from 'next/image'
import Link from 'next/link'

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
    boxShadow: 'none',
    borderBottom: `1px solid ${theme.palette.grey['100']}`,
    backgroundColor: 'white',
  },

  menuButton: {
    marginRight: theme.spacing(2),
    float: 'right',
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    marginRight: theme.spacing(2),
  },
  inline: {
    display: 'inline',
  },
  tagline: {
    display: 'inline-block',
    marginLeft: 10,
    [theme.breakpoints.up('md')]: {
      paddingTop: '0.8em',
    },
  },
  flex: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },

  tabContainer: {
    marginLeft: 32,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  tabItem: {
    paddingTop: 20,
    paddingBottom: 20,
    minWidth: 'auto',
    color: theme.palette.grey['A200'],
  },
}))

const NavBar = () => {
  const classes = useStyles()

  return (
    <AppBar
      position='absolute'
      className={classes.appBar}
    >
      <Toolbar>
        <Link href='/'>
          <Avatar
            className={classes.logo}
            alt='Brian Lau'
          >
            <Image
              alt='Vercel logo'
              src='/brian_square.jpg'
              width={100}
              height={100}
            />
          </Avatar>
        </Link>

        <Typography
          variant='h6'
          color='textSecondary'
          className={classes.title}
        >
          Brian Lau
        </Typography>

        <div>
          <Link href='/contact'>
            <a
              className={classes.menuButton}
              aria-label='contact'
            >
              Contact
            </a>
          </Link>
        </div>

        <a
          rel='noopener'
          href='https://github.com/wtLau'
          aria-label='Github.com Link'
          target='_blank'
          className='text-primary'
        >
          <IconButton color='primary'>
            <GitHubIcon color='primary' />
          </IconButton>
        </a>
        <a
          rel='noopener'
          href='https://www.linkedin.com/in/brian-lau/'
          aria-label='Linkedin.com/in/brian-lau/ Link'
          target='_blank'
          className='text-primary'
        >
          <IconButton edge='end' color='primary'>
            <LinkedInIcon />
          </IconButton>
        </a>
      </Toolbar>
    </AppBar>
  )
}
export default NavBar
