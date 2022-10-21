// const NavBar = () => {
//   return (
//     <Root>
//       <AppBar className={classes.appBar} color='transparent'>
//         <Toolbar className={classes.toolBar}>
//           <Link href='/'>
//             <ButtonBase focusRipple>
//               <Typography variant='body1' color='textPrimary' align='center'>
//                 Brian Lau
//               </Typography>
//             </ButtonBase>
//           </Link>

//           <Hidden mdDown>
//             <List
//               component='nav'
//               aria-labelledby='main navigation'
//               className={classes.navDisplayFlex}
//             >
//               <Link href='/about' color='textPrimary'>
//                 <ListItemButton>
//                   <ListItemText primary={'About'} />
//                 </ListItemButton>
//               </Link>

//               <Link href='/blog' color='textPrimary'>
//                 <ListItemButton>
//                   <ListItemText primary={'Blog'} />
//                 </ListItemButton>
//               </Link>

//               <ListItemIcon>
//                 <ThemeButton />
//               </ListItemIcon>
//             </List>
//           </Hidden>

//           <Hidden mdUp>
//             <SideDrawer navLinks={navLinks} />
//           </Hidden>
//         </Toolbar>
//       </AppBar>
//       <Toolbar />
//     </Root>
//   )
// }
// export default NavBar

import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import Fade from '@mui/material/Fade'
import {
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Slide,
  Tooltip,
  useTheme,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import ThemeButton from './ThemeButton'
const drawerWidth = 240
const navTile = 'Brian Lau'

const navItems = [
  { title: `Blog`, path: `/blog` },
  { title: 'About', path: '/about' },
  // {
  //   title: `Github`,
  //   path: `https://github.com/wtLau`,
  //   external: true,
  // },
  // {
  //   title: `LinkedIn`,
  //   path: `https://www.linkedin.com/in/brian-lau/`,
  //   external: true,
  // },
]
interface Props {
  children: React.ReactElement
}

function HideOnScroll({ children }: Props) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  })

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  )
}

function ScrollTop({ children }: Props) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  })

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector('#back-to-top-anchor')

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      })
    }
  }

  return (
    <Fade in={trigger}>
      <Box
        onClick={(e) => handleClick(e)}
        role='presentation'
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  )
}

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const theme = useTheme()

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography
        variant='h6'
        noWrap
        component='a'
        href='/'
        sx={{
          my: 6,
          display: { xs: 'flex' },
          justifyContent: 'center',
          // fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        {navTile}
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <ListItemIcon>
        <ThemeButton />
      </ListItemIcon>
    </Box>
  )
  return (
    <>
      <HideOnScroll>
        <AppBar
          sx={{
            backgroundImage: 'none',
            backgroundColor: theme.palette.background.default,
            py: 2,
          }}
        >
          <Toolbar
            sx={{
              maxWidth: theme.breakpoints.values.lg,
              alignSelf: 'center',
              width: '100%',
            }}
          >
            <Box sx={{ flexGrow: 1, display: { sm: 'flex' } }}>
              <Typography
                variant='h6'
                noWrap
                component='a'
                href='/'
                sx={{
                  mr: 2,
                  // fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                {navTile}
              </Typography>
            </Box>
            <IconButton
              aria-label='open drawer'
              edge='end'
              onClick={handleDrawerToggle}
              sx={{ display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <Button key={item.title} sx={{ color: 'inherit' }}>
                  {item.title}
                </Button>
              ))}
            </Box>
            <ListItemIcon sx={{ display: { xs: 'none', sm: 'flex' } }}>
              <ThemeButton />
            </ListItemIcon>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Box component='nav'>
        <Drawer
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'flex', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Toolbar id='back-to-top-anchor' />

      <ScrollTop>
        <Tooltip title='Scroll to top'>
          <Fab size='small' aria-label='scroll back to top'>
            <KeyboardArrowUpIcon />
          </Fab>
        </Tooltip>
      </ScrollTop>
    </>
  )
}
export default NavBar
