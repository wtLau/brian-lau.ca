import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'
import Fade from '@mui/material/Fade'
import {
  ButtonBase,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  Slide,
  Tooltip,
  useTheme,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import ThemeButton from './ThemeButton'
import { Link } from '@components/ui'
import ScrollTop from './ScrollTop'
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

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const theme = useTheme()

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: 'center',
        height: '100%',
        backgroundImage: 'none',
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Typography
        variant='h6'
        noWrap
        component={Link}
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
          <ListItem key={item.title}>
            <ButtonBase
              LinkComponent={Link}
              href={item.path}
              sx={{ width: '100%', py: 1 }}
            >
              {item.title}
            </ButtonBase>
          </ListItem>
        ))}
      </List>
      <Divider />
      <ListItemIcon sx={{ py: 1 }}>
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
            <Box sx={{ flexGrow: 1, display: { sm: 'block' } }}>
              <Typography
                variant='h6'
                noWrap
                component={Link}
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
            <Box>
              <IconButton
                aria-label='open drawer'
                edge='end'
                onClick={handleDrawerToggle}
                sx={{ display: { sm: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
              <Grid
                container
                direction='row'
                spacing={4}
                alignItems='center'
                sx={{ display: { xs: 'none', sm: 'flex' } }}
              >
                {navItems.map((item) => (
                  <Grid item key={item.title}>
                    <Link href={item.path} sx={{ color: 'inherit' }}>
                      {item.title}
                    </Link>
                  </Grid>
                ))}

                <Grid item>
                  <ListItemIcon>
                    <ThemeButton />
                  </ListItemIcon>
                </Grid>
              </Grid>
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Box component='nav'>
        <Drawer
          variant='temporary'
          anchor='right'
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

      <ScrollTop />
    </>
  )
}
export default NavBar
