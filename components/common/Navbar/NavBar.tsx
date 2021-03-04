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

const NavBar = () => {
  const classes = useStyles()
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

            <div>
              <Link
                href='/contact'
                color='textPrimary'
              >
                Contact
              </Link>

              <Link
                href='/blog'
                color='textPrimary'
              >
                Blog
              </Link>

              <Link
                href='/brian-lau-resume.pdf'
                color='textPrimary'
                target='_blank'
              >
                Resume
              </Link>

              <Link
                href='https://github.com/wtLau'
                target='_blank'
              >
                <IconButton
                  color='primary'
                  title='GitHub repository'
                >
                  <GitHub color='primary' />
                </IconButton>
              </Link>

              <Link
                href='https://www.linkedin.com/in/brian-lau/'
                target='_blank'
              >
                <IconButton
                  color='primary'
                  title='LinkedIn profile'
                >
                  <LinkedIn />
                </IconButton>
              </Link>
            </div>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </>
  )
}
export default NavBar
