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

const useStyles = makeStyles((theme) => ({
  root: {
    height: '60vh',
  },
  buttonGroup: {
    minHeight: 200,
  },
}))

export default function Landing() {
  const classes = useStyles()
  return (
    <Grid
      container
      spacing={0}
      direction='column'
      alignItems='center'
      justify='center'
      className={classes.root}
    >
      <Typography variant='h1'>Hi! I'm Brian</Typography>
      <Typography justify='center' variant='h4'>
        Front-end Developer based in Vancouver, BC
      </Typography>
      <ButtonGroup
        className={classes.buttonGroup}
        justify='center'
        alignItems='center'
      >
        <Grid spacing={4} container justify='center'>
          <Grid item container xs={12} sm={3} justify='center'>
            <Link to='/'></Link>
            <Button startIcon={<CodeOutlinedIcon />} variant='text'>
              Developer
            </Button>
          </Grid>
          <Grid item container xs={12} sm={3} justify='center'>
            <Button disabled startIcon={<PhotoCameraIcon />} variant='text'>
              Photographer
            </Button>
          </Grid>
          <Grid item container xs={12} sm={3} justify='center'>
            <Button
              disabled
              startIcon={<FitnessCenterOutlinedIcon />}
              variant='text'
            >
              Bodybuilder
            </Button>
          </Grid>
          <Grid item container xs={12} sm={3} justify='center'>
            <Button disabled startIcon={<ExploreOutlinedIcon />} variant='text'>
              Traveller
            </Button>
          </Grid>
        </Grid>
      </ButtonGroup>
    </Grid>
  )
}
