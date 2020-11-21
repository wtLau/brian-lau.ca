import React from 'react'
import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import ButtonGroup from '@material-ui/core/ButtonGroup'
// import Button from '@material-ui/core/Button'
// import PhotoCameraIcon from '@material-ui/icons/PhotoCamera'
// import CodeOutlinedIcon from '@material-ui/icons/CodeOutlined'
import Icon from '@material-ui/core/Icon'

// import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined'
// import FitnessCenterOutlinedIcon from '@material-ui/icons/FitnessCenterOutlined'
import Grid from '@material-ui/core/Grid'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'

import Menu from '../routes/Menu'

const useStyles = makeStyles(() => ({
  root: {
    height: '80vh',
    margin: '1em',
  },
  buttonGroup: {
    minHeight: 200,
    marginTop: '1em',
  },
}))

const Landing = () => {
  const classes = useStyles()
  const [dense] = React.useState(false)
  const [secondary] = React.useState(false)

  const listMenu = Menu.map((value) => {
    if (value.homepage) {
      return (
        <ListItem button component={Link} to={value.pathname}>
          <ListItemIcon>
            <Icon>{value.icon ? value.icon : 'PhotoCameraIcon'}</Icon>
          </ListItemIcon>
          <ListItemText
            primary={value.label}
            secondary={secondary ? 'Secondary text' : null}
          />
        </ListItem>
      )
    }
    return null
  })
  return (
    <Grid
      container
      spacing={0}
      direction='column'
      alignItems='center'
      justify='center'
      className={classes.root}
    >
      <Typography variant='h1' align='center' gutterBottom>
        Hi! I&lsquo;m Brian
      </Typography>
      <Typography justify='center' align='center' variant='h4' gutterBottom>
        Front-end Developer based in Vancouver, BC
      </Typography>
      <ButtonGroup
        className={classes.buttonGroup}
        justify='center'
        alignItems='center'
      >
        <div className={classes.demo}>
          <List dense={dense}>{listMenu}</List>
        </div>
        {/* <Grid spacing={4} container justify='center' alignItems='center'>
          <Grid item container xs={12} sm={3} justify='left'>
            <Button startIcon={<CodeOutlinedIcon />} variant='text'>
              Developer
            </Button>
          </Grid>
          <Grid item container xs={12} sm={3} justify='left'>
            <Button disabled startIcon={<PhotoCameraIcon />} variant='text'>
              Photographer
            </Button>
          </Grid>
          <Grid item container xs={12} sm={3} justify='left'>
            <Button
              disabled
              startIcon={<FitnessCenterOutlinedIcon />}
              variant='text'
            >
              Bodybuilder
            </Button>
          </Grid>
          <Grid item container xs={12} sm={3} justify='left'>
            <Button disabled startIcon={<ExploreOutlinedIcon />} variant='text'>
              Traveller
            </Button>
          </Grid>
        </Grid> */}
      </ButtonGroup>
    </Grid>
  )
}

export default Landing
