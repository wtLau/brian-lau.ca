/* eslint-disable react/jsx-no-bind */
import { GitHub, LinkedIn } from '@material-ui/icons'
import {
  makeStyles,
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
} from '@material-ui/core'
import { Brightness7, Brightness4, Person, Eject } from '@material-ui/icons'

import Image from 'next/image'
// import Link from 'next/link'
import React from 'react'
import { useChangeTheme } from '@components/common/Theme'
import { Link } from '@components/ui'
import SideDrawer from './SideDrawer'

import { signIn, signOut, useSession } from 'next-auth/client'

const useStyles = makeStyles((theme: Theme) => ({
  appBar: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: theme.palette.background.default,
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
    background: `url('/static/images/profile/profile_placeholder.png')`,
    backgroundSize: 'contain',
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
  const theme = useTheme()
  const changeTheme = useChangeTheme()

  const [session] = useSession()

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const classes = useStyles()

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <>
      <ElevationScroll>
        <AppBar className={classes.appBar}>
          <Toolbar className={classes.toolBar}>
            <Link href='/'>
              <Grid container alignItems='center'>
                {/* <Avatar className={classes.logo} alt='Brian Lau'>
                  <Image
                    alt='Brian Profile Picture'
                    src='/static/images/brian_square.jpg'
                    width={100}
                    height={100}
                    priority
                  />
                </Avatar> */}

                <Typography variant='body1' color='textPrimary' gutterBottom>
                  Brian Lau
                </Typography>
              </Grid>
            </Link>

            <IconButton
              onClick={() => changeTheme()}
              title='Toggle light/dark theme'
            >
              {theme.palette.type === 'dark' ? (
                <Brightness7 />
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
                <Link href='/contact' color='textPrimary'>
                  <ListItem button>
                    <ListItemText primary={'Contact'} />
                  </ListItem>
                </Link>

                <Link href='/blog' color='textPrimary'>
                  <ListItem button>
                    <ListItemText primary={'Blog'} />
                  </ListItem>
                </Link>

                <Link
                  href='/brian-lau-resume.pdf'
                  color='textPrimary'
                  target='_blank'
                >
                  <ListItem button>
                    <ListItemText primary={'Resume'} />
                  </ListItem>
                </Link>

                <Link href='/tools' color='textPrimary'>
                  <ListItem button>
                    <ListItemText primary={'Tools'} />
                  </ListItem>
                </Link>

                <Link
                  href='/tools'
                  color='textPrimary'
                >
                  <ListItem button>
                    <ListItemText
                      primary={'Tools'}
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

                {!session && (
                  <ListItem>
                    <Button
                      onClick={() => {
                        signIn()
                      }}
                    >
                      LogIn
                    </Button>
                  </ListItem>
                )}

                {session && (
                  <ListItem>
                    <Avatar className={classes.logo}>
                      <Button
                        aria-label='Account show more'
                        aria-controls='menu-appbar'
                        aria-haspopup='true'
                        onClick={handleMenu}
                      >
                        {session.user.image && (
                          <Image
                            alt='Profile Picture'
                            src={session.user.image}
                            width={60}
                            height={60}
                            priority
                          />
                        )}
                      </Button>
                    </Avatar>

                    <Menu
                      id='menu-appbar'
                      anchorEl={anchorEl}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      open={open}
                      onClose={handleClose}
                    >
                      <MenuItem>
                        <Typography>Signed in as:</Typography>
                        <ListItemText>
                          {session.user.name || session.user.email}
                        </ListItemText>
                      </MenuItem>

                      <MenuItem>
                        <ListItemIcon>
                          <Person />
                        </ListItemIcon>
                        <ListItemText>
                          <Link href='/profile' color='textPrimary'>
                            View Profile
                          </Link>
                        </ListItemText>
                      </MenuItem>

                      <MenuItem onClick={() => signOut()}>
                        <ListItemIcon>
                          <Eject />
                        </ListItemIcon>

                        <ListItemText>Sign Out</ListItemText>
                      </MenuItem>
                    </Menu>
                  </ListItem>
                )}
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
