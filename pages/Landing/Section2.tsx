import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline'

import { Card } from '@components/ui'

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up('md')]: {
      background: `no-repeat bottom url('/static/images/section2-background.png')`,
      backgroundPosition: '50% 79%',
      margin: theme.spacing(8, 0),
      padding: theme.spacing(7, 0),
    },
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
      className={classes.root}
    >
      <Grid container item xs={12} md={4}>
        <Card raised height='220px'>
          <Grid item xs={2}>
            <CheckCircleOutlineIcon color='primary' style={{ fontSize: 40 }} />
          </Grid>
          <Grid item xs={9}>
            <Typography component={'h3'} variant='h4'>
              Design
            </Typography>
            <Typography variant='body1'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Typography>
          </Grid>
        </Card>
      </Grid>

      <Grid container item xs={12} md={4}>
        <Card raised height='220px'>
          <Grid item xs={2}>
            <CheckCircleOutlineIcon color='primary' style={{ fontSize: 40 }} />
          </Grid>
          <Grid item xs={9}>
            <Typography component={'h3'} variant='h4'>
              Front-End
            </Typography>
            <Typography variant='body1'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit minim
              veniam
            </Typography>
          </Grid>
        </Card>
      </Grid>

      <Grid container item xs={12} md={4}>
        <Card raised height='220px'>
          <Grid item xs={2}>
            <CheckCircleOutlineIcon color='primary' style={{ fontSize: 40 }} />
          </Grid>
          <Grid item xs={9}>
            <Typography component={'h3'} variant='h4'>
              Back-End
            </Typography>
            <Typography variant='body1'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit minim
              veniam
            </Typography>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Section1
