import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Card from '../../components/Card/Card.js'

import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline'

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}))

const Section1 = () => {
  const classes = useStyles()

  return (
    <Grid container>
      <Grid container item xs={12} justify='space-between' spacing={3}>
        <Grid container item xs={12} md={4} spacing={4}>
          <Card raised className={classes.card} height='190px'>
            <Grid item xs={2}>
              <CheckCircleOutlineIcon style={{ fontSize: 40 }} />
            </Grid>

            <Grid item xs={10}>
              <Typography>Front-End</Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </Typography>
            </Grid>
          </Card>
        </Grid>
        <Grid container item xs={12} md={4} spacing={4}>
          <Card raised className={classes.card} height='190px'>
            <Grid item xs={2}>
              <CheckCircleOutlineIcon style={{ fontSize: 40 }} />
            </Grid>

            <Grid item xs={10}>
              <Typography>Front-End</Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </Typography>
            </Grid>
          </Card>
        </Grid>
        <Grid container item xs={12} md={4} spacing={4}>
          <Card raised className={classes.card} height='190px'>
            <Grid item xs={2}>
              <CheckCircleOutlineIcon style={{ fontSize: 40 }} />
            </Grid>

            <Grid item xs={10}>
              <Typography>Front-End</Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </Typography>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Section1
