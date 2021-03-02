/* eslint-disable react/jsx-no-bind */
import {
  GitHub,
  LinkedIn,
  CloudDownload,
} from '@material-ui/icons'
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Theme,
  ButtonBase,
  Button,
  Link as MaterialLink,
} from '@material-ui/core'
import {
  Brightness7,
  Brightness4,
} from '@material-ui/icons'

import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
import { orange } from '@material-ui/core/colors'
import {
  ThemeContextType,
  useThemeSetContext,
} from '@components/common/Theme'

const useStyles = makeStyles((theme: Theme) => ({
  appBar: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    boxShadow: 'none',
    borderBottom: `1px solid ${theme.palette.grey['100']}`,
    backgroundColor: 'white',
  },
  toolBar: {
    maxWidth: theme.breakpoints.width('lg'),
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
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

const NavBar: FC = () => {
  const classes = useStyles()
  const {
    theme,
    updateTheme,
  } = useThemeSetContext() as ThemeContextType

  const handleChangeDark = () => {
    const newTheme = {
      ...theme,
      palette: {
        ...theme.palette,
        type:
          theme.palette.type === 'light'
            ? 'dark'
            : 'light',
      },
    }
    updateTheme(newTheme)
  }

  return (
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.toolBar}>
        <Link href='/'>
          <ButtonBase>
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

            <Typography
              variant='h6'
              color='textSecondary'
              className={classes.title}
            >
              Brian Lau
            </Typography>
          </ButtonBase>
        </Link>

        <IconButton
          onClick={() => handleChangeDark()}
        >
          {theme.palette.type === 'dark' ? (
            <Brightness7
              style={{ color: orange[500] }}
            />
          ) : (
            <Brightness4 />
          )}
        </IconButton>

        <div>
          <Link href='/contact'>
            <a>
              <Typography
                variant='overline'
                color='textPrimary'
              >
                Contact
              </Typography>
            </a>
          </Link>

          <a
            href='https://github.com/wtLau'
            aria-label='Github.com Link'
            target='_blank'
            className='text-primary'
          >
            <IconButton color='primary'>
              <GitHub color='primary' />
            </IconButton>
          </a>
          <a
            href='https://www.linkedin.com/in/brian-lau/'
            aria-label='Linkedin Link'
            target='_blank'
            className='text-primary'
          >
            <IconButton color='primary'>
              <LinkedIn />
            </IconButton>
          </a>

          <MaterialLink
            color='primary'
            startIcon={<CloudDownload />}
            component={Button}
            size='small'
            href='https://docs.google.com/document/d/1Oiysjfct-dErd9s1q3IIYuuShucltOg29MbfpIRFovM/edit?usp=sharing'
            target='_blank'
            aria-label='Download Resume'
          >
            Resume
          </MaterialLink>
        </div>
      </Toolbar>
    </AppBar>
  )
}
export default NavBar
