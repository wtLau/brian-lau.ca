import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera'
import CodeOutlinedIcon from '@material-ui/icons/CodeOutlined'
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined'
import FitnessCenterOutlinedIcon from '@material-ui/icons/FitnessCenterOutlined'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import Menu from '../routes/Menu'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '80vh',
    margin: '1em',
  },
  buttonGroup: {
    minHeight: 200,
    marginTop: '1em',
  },
}))

function generate(element) {
  return Menu.map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  )
}

export default function Landing() {
  const classes = useStyles()
  const [dense, setDense] = React.useState(false)
  const [secondary, setSecondary] = React.useState(false)

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
        Hi! I'm Brian
      </Typography>
      <Typography justify='center' align='center' variant='h4' gutterBottom>
        Front-end Developer based in Vancouver, BC
      </Typography>
      <ButtonGroup
        className={classes.buttonGroup}
        justify='center'
        alignItems='center'
      >
        <Grid spacing={4} container justify='center' alignItems='center'>
          <Grid item container xs={12} sm={3} justify='left'>
            <div className={classes.demo}>
              <List dense={dense}>
                {generate(
                  <ListItem>
                    <ListItemText
                      primary={dense}
                      secondary={secondary ? 'Secondary text' : null}
                    />
                  </ListItem>
                )}
              </List>
            </div>

            <ListItem
              to={Menu.map((item) =>
                item.label == 'Development' ? item.pathname : null
              )}
              component='Button'
              startIcon={<CodeOutlinedIcon />}
              variant='text'
            >
              Developer
            </ListItem>
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
        </Grid>
      </ButtonGroup>
    </Grid>
  )
}
