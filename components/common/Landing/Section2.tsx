import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { Grid, Card } from '@material-ui/core'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline'

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up('md')]: {
      background: `no-repeat bottom url('/static/images/section2-background.png')`,
      backgroundPosition: '50% 79%',
      margin: theme.spacing(8, 0),
      padding: theme.spacing(7, 0),
    },
  },
  card: {
    height: '220px',
    background: theme.palette.background.paper,
    borderRadius: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}))

const Section1 = () => {
  const classes = useStyles()

  return (
    <Grid container item xs={12} spacing={4} className={classes.root}>
      <Grid item xs={12} md={4}>
        <Card raised className={classes.card}>
          <Typography component={'h3'} variant='h4'>
            Design
          </Typography>
        </Card>
      </Grid>

      <Grid item xs={12} md={4}>
        <Card raised className={classes.card}>
          <Typography component={'h3'} variant='h4'>
            Front-End
          </Typography>
        </Card>
      </Grid>

      <Grid item xs={12} md={4}>
        <Card raised className={classes.card}>
          <Typography component={'h3'} variant='h4'>
            Back-End
          </Typography>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Section1
