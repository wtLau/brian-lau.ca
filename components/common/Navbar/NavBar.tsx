/* eslint-disable react/jsx-no-bind */
import {
  AppBar,
  Toolbar,
  Typography,
  List,
  ListItemText,
  Hidden,
  ListItemIcon,
  ListItemButton,
  ButtonBase,
} from '@mui/material'
import { styled } from '@mui/material/styles'
// import Link from 'next/link'
import React from 'react'

import { Link } from '@components/ui'

import SideDrawer from './SideDrawer'
import ThemeButton from './ThemeButton'

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
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  [`& .${classes.toolBar}`]: {
    maxWidth: theme.breakpoints.values.lg,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },

  [`& .${classes.navbarDisplayFlex}`]: {
    display: `flex`,
    justifyContent: `space-between`,
  },

  [`& .${classes.navDisplayFlex}`]: {
    display: `flex`,
    justifyContent: `space-between`,
  },
}))

const navLinks = [
  { title: `Blog`, path: `/blog` },
  { title: 'About', path: '/about' },
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
  return (
    <Root>
      <AppBar className={classes.appBar} color='transparent'>
        <Toolbar className={classes.toolBar}>
          <Link href='/'>
            <ButtonBase focusRipple>
              <Typography variant='body1' color='textPrimary' align='center'>
                Brian Lau
              </Typography>
            </ButtonBase>
          </Link>

          <Hidden mdDown>
            <List
              component='nav'
              aria-labelledby='main navigation'
              className={classes.navDisplayFlex}
            >
              <Link href='/about' color='textPrimary'>
                <ListItemButton>
                  <ListItemText primary={'About'} />
                </ListItemButton>
              </Link>

              <Link href='/blog' color='textPrimary'>
                <ListItemButton>
                  <ListItemText primary={'Blog'} />
                </ListItemButton>
              </Link>

              <ListItemIcon>
                <ThemeButton />
              </ListItemIcon>
            </List>
          </Hidden>

          <Hidden mdUp>
            <SideDrawer navLinks={navLinks} />
          </Hidden>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Root>
  )
}
export default NavBar
