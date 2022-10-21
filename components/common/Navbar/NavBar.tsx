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
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Slide,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import ThemeButton from './ThemeButton'
const drawerWidth = 240
const navTile = 'Brian Lau'

const navItems = [
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
interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window
  children: React.ReactElement
}

function HideOnScroll({ children, window }: Props) {
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  })

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  )
}

function ScrollTop({ children, window }: Props) {
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
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
        onClick={handleClick}
        role='presentation'
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  )
}

export default function NavBar({ window }: Props) {
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }
  const container =
    window !== undefined ? () => window().document.body : undefined

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
        <AppBar color='primary'>
          <Toolbar>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              edge='start'
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant='h6'
              noWrap
              component='a'
              href='/'
              // sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
              sx={{
                mr: 2,
                display: { xs: 'none', sm: 'flex' },
                // fontFamily: 'monospace',
                fontWeight: 700,
                flexGrow: 1,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              {navTile}
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <Button key={item.title} sx={{ color: '#fff' }}>
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
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
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
        <Fab size='small' aria-label='scroll back to top'>
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  )
}
