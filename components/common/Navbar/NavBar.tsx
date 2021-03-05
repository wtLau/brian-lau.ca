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
  Grid,
  Button,
  Link as MaterialLink,
  PaletteType,
  useScrollTrigger,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Hidden,
} from '@material-ui/core'
import {
  Brightness7,
  Brightness4,
} from '@material-ui/icons'

import Image from 'next/image'
// import Link from 'next/link'
import React, { FC } from 'react'
import { orange } from '@material-ui/core/colors'
import {
  ThemeContextType,
  useThemeSetContext,
} from '@components/common/Theme'
import { Link } from '@components/ui'
import { PaletteOptions } from '@material-ui/core/styles/createPalette'
import SideDrawer from './SideDrawer'

const useStyles = makeStyles((theme: Theme) => ({
  appBar: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor:
      theme.palette.background.default,
    // boxShadow: 'none',
  },
  toolBar: {
    maxWidth: theme.breakpoints.width('lg'),
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },

  logo: {
    marginRight: theme.spacing(1),
  },
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  linkText: {
    textDecoration: `none`,
    color: `white`,
  },
}))

interface Props {
  children: React.ReactElement
}

function ElevationScroll(props: Props) {
  const { children } = props
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  return React.cloneElement(children, {
    elevation: trigger ? 1 : 0,
  })
}

const navLinks = [
  { title: `Blog`, path: `/blog` },
  { title: `Contact`, path: `/contact` },
  {
    title: `Resume`,
    path: `/brian-lau-resume.pdf`,
    external: true,
  },
  {
    title: `Github`,
    path: `https://github.com/wtLau`,
    external: true,
  },
  {
    title: `LinkedIn`,
    path: `https://www.linkedin.com/in/brian-lau/`,
    external: true,
  },
]

const NavBar = () => {
  const {
    theme,
    updateTheme,
  } = useThemeSetContext() as ThemeContextType

  const handleChangeDark = () => {
    const isDark =
      theme.palette!.type === 'light'
        ? 'dark'
        : 'light'

    const newTheme = {
      ...theme,
      palette: {
        ...(theme.palette as PaletteOptions),
        type: isDark as PaletteType,
      },
    }
    updateTheme(newTheme)
  }

  const classes = useStyles()

  return (
    <>
      <ElevationScroll>
        <AppBar className={classes.appBar}>
          <Toolbar className={classes.toolBar}>
            <Link href='/'>
              <Grid container alignItems='center'>
                <Avatar
                  className={classes.logo}
                  alt='Brian Lau'
                >
                  <Image
                    alt='Brian Profile Picture'
                    src='/static/images/brian_square.jpg'
                    width={100}
                    height={100}
                  />
                </Avatar>

                <Typography
                  variant='body1'
                  color='textPrimary'
                  gutterBottom
                >
                  Brian Lau
                </Typography>
              </Grid>
            </Link>

            <IconButton
              onClick={() => handleChangeDark()}
              title='Toggle light/dark theme'
            >
              {theme.palette!.type === 'dark' ? (
                <Brightness7
                  style={{ color: orange[500] }}
                />
              ) : (
                <Brightness4 />
              )}
            </IconButton>
            <Hidden smDown>
              <List
                component='nav'
                aria-labelledby='main navigation'
                className={classes.navDisplayFlex}
              >
                <Link
                  href='/contact'
                  color='textPrimary'
                >
                  <ListItem button>
                    <ListItemText
                      primary={'Contact'}
                    />
                  </ListItem>
                </Link>

                <Link
                  href='/blog'
                  color='textPrimary'
                >
                  <ListItem button>
                    <ListItemText
                      primary={'Blog'}
                    />
                  </ListItem>
                </Link>

                <Link
                  href='/brian-lau-resume.pdf'
                  color='textPrimary'
                  target='_blank'
                >
                  <ListItem button>
                    <ListItemText
                      primary={'Resume'}
                    />
                  </ListItem>
                </Link>

                <Link
                  href='https://github.com/wtLau'
                  target='_blank'
                  title='GitHub repository'
                >
                  <ListItem>
                    <GitHub color='primary' />
                  </ListItem>
                </Link>

                <Link
                  href='https://www.linkedin.com/in/brian-lau/'
                  target='_blank'
                  title='LinkedIn profile'
                >
                  <ListItem>
                    <LinkedIn color='primary' />
                  </ListItem>
                </Link>
              </List>
            </Hidden>
            <Hidden mdUp>
              <SideDrawer navLinks={navLinks} />
            </Hidden>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </>
  )
}
export default NavBar
