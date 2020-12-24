import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Card from '../../components/Card/Card.js'

import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline'
import backgroundImage from '../../assets/section2-background.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  section2: {
    background: `no-repeat bottom url(${backgroundImage})`,
    // backgroundSize: '100%',
    backgroundPosition: '50% 79%',
    paddingTop: theme.spacing(4),
    minHeight: '500px',
  },
}))

const Section1 = () => {
  const classes = useStyles()

  return (
    <Grid
      container
      item
      xs={12}
      justify='space-between'
      alignItems='center'
      spacing={4}
      className={classes.section2}
    >
      <Grid container item xs={12} md={4}>
        <Card raised className={classes.card} height='190px'>
          <Grid item xs={2}>
            <CheckCircleOutlineIcon color='primary' style={{ fontSize: 40 }} />
          </Grid>
          <Grid item xs={9}>
            <Typography variant='h3' gutterBottom>
              DESIGN
            </Typography>
            <Typography variant='body1'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </Typography>
          </Grid>
        </Card>
      </Grid>

      <Grid container item xs={12} md={4}>
        <Card raised className={classes.card} height='190px'>
          <Grid item xs={2}>
            <CheckCircleOutlineIcon color='primary' style={{ fontSize: 40 }} />
          </Grid>
          <Grid item xs={9}>
            <Typography variant='h3' gutterBottom>
              FRONT-END
            </Typography>
            <Typography variant='body1'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </Typography>
          </Grid>
        </Card>
      </Grid>

      <Grid container item xs={12} md={4}>
        <Card raised className={classes.card} height='190px'>
          <Grid item xs={2}>
            <CheckCircleOutlineIcon color='primary' style={{ fontSize: 40 }} />
          </Grid>
          <Grid item xs={9}>
            <Typography variant='h3' gutterBottom>
              BACK-END
            </Typography>
            <Typography variant='body1'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </Typography>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Section1
