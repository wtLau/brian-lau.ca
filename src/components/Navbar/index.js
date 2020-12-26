/* eslint-disable react/jsx-no-bind */
import React, { useState, useEffect } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { Link as MaterialLink, makeStyles } from '@material-ui/core'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import Avatar from '@material-ui/core/Avatar'
import AvatarImage from '../../images/brian_square.jpg'

import { Link, useLocation } from 'react-router-dom'
import Menu from '../../routes/Menu'

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
    boxShadow: 'none',
    borderBottom: `1px solid ${theme.palette.grey['100']}`,
    backgroundColor: 'white',
  },
  toolbar: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      justifyContent: 'center',
      alignItems: 'center',
      width: theme.breakpoints.width('lg'),
      margin: '0 auto',
    },
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
  iconContainer: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
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
  const [value, setvalue] = useState(0)
  const [menuDrawer, setmenuDrawer] = useState(false)
  const classes = useStyles()
  let location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  })

  const menuListItem = () =>
    Menu.map((item) =>
      item.job ? (
        <ListItem
          component={item.external ? MaterialLink : Link}
          href={item.external ? item.pathname : null}
          to={
            item.external
              ? null
              : {
                  pathname: item.pathname,
                  search: location.search,
                }
          }
          target='_blank'
          button
          key={item.label}
        >
          <ListItemText primary={item.label} />
        </ListItem>
      ) : null
    )

  const menuListTab = () =>
    Menu.map((item, index) =>
      item.job ? (
        <Tab
          key={index}
          component={item.external ? MaterialLink : Link}
          href={item.external ? item.pathname : null}
          to={
            item.external
              ? null
              : {
                  pathname: item.pathname,
                  search: location.search,
                }
          }
          classes={{ root: classes.tabItem }}
          label={item.label}
          target='_blank'
        />
      ) : null
    )
  const current = () => {
    if (location.pathname === '/') {
      return 0
    }
    if (location.pathname === '/about') {
      return 1
    }
    if (location.pathname === '/contact') {
      return 2
    }
    if (location.pathname === '/dev') {
      return 3
    }
  }

  return (
    <AppBar position='absolute' className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Link to='/'>
          <Avatar className={classes.logo} alt='Brian Lau' src={AvatarImage} />
        </Link>

        <Typography
          variant='h6'
          color='textSecondary'
          className={classes.title}
        >
          Brian Lau
        </Typography>

        <React.Fragment>
          <div className={classes.iconContainer}>
            <IconButton
              edge='start'
              className={classes.menuButton}
              aria-label='menu'
              onClick={() => setmenuDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </div>
          <div className={classes.tabContainer}>
            <SwipeableDrawer
              //Menu Icon Click Open
              anchor='right'
              open={menuDrawer}
              onClose={() => setmenuDrawer(false)}
              onOpen={() => setmenuDrawer(true)}
            >
              <AppBar title='Menu' />
              <List>{menuListItem()}</List>
            </SwipeableDrawer>
            <Tabs
              //Desktop Menu
              value={current()}
              indicatorColor='primary'
              textColor='primary'
              onChange={() => setvalue({ value })}
            >
              {menuListTab()}
            </Tabs>
          </div>
        </React.Fragment>
        <IconButton
          aria-label='Github.com'
          color='primary'
          onClick={() => window.open('https://github.com/wtLau')}
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          edge='end'
          color='primary'
          aria-label='Linkedin.com'
          onClick={() => window.open('https://www.linkedin.com/in/brian-lau/')}
        >
          <LinkedInIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
export default NavBar
