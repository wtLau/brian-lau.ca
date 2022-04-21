import { Drawer, IconButton, List, ListItem, ListItemText } from '@mui/material'
import { styled } from '@mui/material/styles'
import makeStyles from '@mui/styles/makeStyles'
import { Menu } from '@mui/icons-material'
import * as React from 'react'
import { useState } from 'react'
import { Link } from '@components/ui'
const PREFIX = 'SideDrawer'

const classes = {
  list: `${PREFIX}-list`,
  linkText: `${PREFIX}-linkText`,
}

// TODO jss-to-styled codemod: The Fragment root was replaced by div. Change the tag if needed.
const Root = styled('div')({
  [`& .${classes.list}`]: {
    width: 250,
  },
  [`& .${classes.linkText}`]: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `black`,
  },
})

// type Props = {
//   navLinks: {
//     title: string
//     path: string
//     external?: boolean
//   }[]
// }

const SideDrawer = ({ navLinks }) => {
  const [state, setState] = useState({
    right: false,
  })

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown') {
      return
    }

    setState({ [anchor]: open })
  }

  const sideDrawerList = (anchor) => (
    <div
      className={classes.list}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List component='nav'>
        {navLinks.map(({ title, path, external }) => (
          <Link
            href={path}
            key={title}
            target={external ? '_blank' : ''}
            className={classes.linkText}
          >
            <ListItem button>
              <ListItemText primary={title} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  )

  return (
    <Root>
      <IconButton
        edge='start'
        aria-label='menu'
        onClick={toggleDrawer('right', true)}
        size='large'
      >
        <Menu fontSize='large' color='primary' />
      </IconButton>

      <Drawer
        anchor='right'
        open={state.right}
        onOpen={toggleDrawer('right', true)}
        onClose={toggleDrawer('right', false)}
      >
        {sideDrawerList('right')}
      </Drawer>
    </Root>
  )
}

export default SideDrawer
