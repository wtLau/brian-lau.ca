/* eslint-disable react/jsx-no-bind */
import { GitHub, LinkedIn } from '@mui/icons-material'
import { styled } from '@mui/material/styles'
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Theme,
  Grid,
  useScrollTrigger,
  List,
  ListItem,
  ListItemText,
  Hidden,
  useTheme,
  Button,
  Menu,
  MenuItem,
  ListItemIcon,
} from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import { Brightness7, Brightness4, Person, Eject } from '@mui/icons-material'

import Image from 'next/image'
// import Link from 'next/link'
import React from 'react'
import { useChangeTheme } from '@components/common/Theme'
import { Link } from '@components/ui'
import SideDrawer from './SideDrawer'

import { signIn, signOut, useSession } from 'next-auth/client'

const PREFIX = 'NavBar'

const classes = {
  appBar: `${PREFIX}-appBar`,
  toolBar: `${PREFIX}-toolBar`,
  logo: `${PREFIX}-logo`,
  navbarDisplayFlex: `${PREFIX}-navbarDisplayFlex`,
  navDisplayFlex: `${PREFIX}-navDisplayFlex`,
  linkText: `${PREFIX}-linkText`,
}

// TODO jss-to-styled codemod: The Fragment root was replaced by div. Change the tag if needed.
const Root = styled('div')(({ theme }) => ({
  [`& .${classes.appBar}`]: {
    [theme.breakpoints.up('md')]: {
      height: '100px',
    },
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: `${theme.palette.background.default}90`,
  },

  [`& .${classes.toolBar}`]: {
    maxWidth: theme.breakpoints.values.lg,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },

  [`& .${classes.logo}`]: {
    marginRight: theme.spacing(1),
    background: `url('/static/images/profile/profile_placeholder.png')`,
    backgroundSize: 'contain',
  },

  [`& .${classes.navbarDisplayFlex}`]: {
    display: `flex`,
    justifyContent: `space-between`,
  },

  [`& .${classes.navDisplayFlex}`]: {
    display: `flex`,
    justifyContent: `space-between`,
  },

  [`& .${classes.linkText}`]: {
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
  { title: `Tools`, path: `/tools` },
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
  const theme = useTheme()
  const changeTheme = useChangeTheme()

  const [session] = useSession()

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  return (
    <Root>
      <ElevationScroll>
        <AppBar className={classes.appBar} color='transparent'>
          <Toolbar className={classes.toolBar}>
            <Link href='/'>
              <Grid container alignItems='center'>
                <Typography variant='body1' color='textPrimary' gutterBottom>
                  Brian Lau
                </Typography>
              </Grid>
            </Link>

            <Hidden lgDown>
              <List
                component='nav'
                aria-labelledby='main navigation'
                className={classes.navDisplayFlex}
              >
                <Link href='/blog' color='textPrimary'>
                  <ListItem button>
                    <ListItemText primary={'Blog'} />
                  </ListItem>
                </Link>

                <Link href='/about' color='textPrimary'>
                  <ListItem button>
                    <ListItemText primary={'About'} />
                  </ListItem>
                </Link>

                <Link href='/tools' color='textPrimary'>
                  <ListItem button>
                    <ListItemText primary={'Tools'} />
                  </ListItem>
                </Link>

                <Link
                  href='/brian-lau-resume.pdf'
                  color='textPrimary'
                  target='_blank'
                  download
                >
                  <ListItem button>
                    <ListItemText primary={'Resume'} />
                  </ListItem>
                </Link>

                <Link href='/contact' color='textPrimary'>
                  <ListItem button>
                    <ListItemText primary={'Contact'} />
                  </ListItem>
                </Link>

                <ListItemIcon>
                  <IconButton
                    onClick={() => changeTheme()}
                    title='Toggle light/dark theme'
                    size='large'
                  >
                    {theme.palette.mode === 'dark' ? (
                      <Brightness7 />
                    ) : (
                      <Brightness4 />
                    )}
                  </IconButton>
                </ListItemIcon>
              </List>
            </Hidden>

            <Hidden mdUp>
              <SideDrawer navLinks={navLinks} />
            </Hidden>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </Root>
  )
}
export default NavBar
