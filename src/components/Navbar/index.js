import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { Link as MaterialLink } from '@material-ui/core'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import Avatar from '@material-ui/core/Avatar'
import AvatarImage from '../../images/brian_square.jpg'

import { Link, withRouter } from 'react-router-dom'
import Menu from '../../routes/Menu'

const useStyles = (theme) => ({
  appBar: {
    position: 'relative',
    boxShadow: 'none',
    borderBottom: `1px solid ${theme.palette.grey['100']}`,
    backgroundColor: 'white',
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
  },
})

class NavBar extends Component {
  state = {
    value: 0,
    menuDrawer: false,
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  mobileMenuOpen = (event) => {
    this.setState({ menuDrawer: true })
  }

  mobileMenuClose = (event) => {
    this.setState({ menuDrawer: false })
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  current = () => {
    if (this.props.currentPath === '/home') {
      return 0
    }
    if (this.props.currentPath === '/dev') {
      return 1
    }
    if (this.props.currentPath === '/photo') {
      return 2
    }
    if (this.props.currentPath === '/workout') {
      return 3
    }
    if (this.props.currentPath === '/travel') {
      return 4
    }
  }

  render() {
    const { classes } = this.props

    return (
      <AppBar position='absolute' className={classes.appBar}>
        <Toolbar>
          <Link to='/'>
            <Avatar
              className={classes.logo}
              alt='Brian Lau'
              src={AvatarImage}
            />
          </Link>

          <Typography variant='h6' color='secondary' className={classes.title}>
            Brian's Website
          </Typography>

          {!this.props.noTabs && (
            <React.Fragment>
              <div className={classes.iconContainer}>
                <IconButton
                  edge='start'
                  className={classes.menuButton}
                  color='inherit'
                  aria-label='menu'
                  onClick={this.mobileMenuOpen}
                >
                  <MenuIcon />
                </IconButton>
              </div>
              <div className={classes.tabContainer}>
                <SwipeableDrawer
                  anchor='right'
                  open={this.state.menuDrawer}
                  onClose={this.mobileMenuClose}
                  onOpen={this.mobileMenuOpen}
                >
                  <AppBar title='Menu' />
                  <List>
                    {Menu.map((item, index) => (
                      <ListItem
                        component={item.external ? MaterialLink : Link}
                        href={item.external ? item.pathname : null}
                        to={
                          item.external
                            ? null
                            : {
                                pathname: item.pathname,
                                search: this.props.location.search,
                              }
                        }
                        button
                        key={item.label}
                      >
                        <ListItemText primary={item.label} />
                      </ListItem>
                    ))}
                  </List>
                </SwipeableDrawer>
                <Tabs
                  value={this.current() || this.state.value}
                  indicatorColor='secondary'
                  textColor='secondary'
                  onChange={this.handleChange}
                >
                  {Menu.map((item, index) => (
                    <Tab
                      key={index}
                      component={item.external ? MaterialLink : Link}
                      href={item.external ? item.pathname : null}
                      to={
                        item.external
                          ? null
                          : {
                              pathname: item.pathname,
                              search: this.props.location.search,
                            }
                      }
                      classes={{ root: classes.tabItem }}
                      label={item.label}
                    />
                  ))}
                </Tabs>
              </div>
            </React.Fragment>
          )}
        </Toolbar>
      </AppBar>
    )
  }
}

export default withRouter(withStyles(useStyles)(NavBar))
