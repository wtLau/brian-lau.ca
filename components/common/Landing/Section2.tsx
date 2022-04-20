import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import { Grid, Card } from '@mui/material'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import makeStyles from '@mui/styles/makeStyles'
import React from 'react'

const PREFIX = 'Section1'

const classes = {
  root: `${PREFIX}-root`,
  card: `${PREFIX}-card`,
}

const StyledGrid = styled(Grid)(({ theme }) => ({
  [`&.${classes.root}`]: {
    [theme.breakpoints.up('md')]: {
      background: `no-repeat bottom url('/static/images/section2-background.png')`,
      backgroundPosition: '50% 79%',
      margin: theme.spacing(8, 0),
      padding: theme.spacing(7, 0),
    },
  },

  [`& .${classes.card}`]: {
    height: '220px',
    background: theme.palette.background.paper,
    borderRadius: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}))

const Section1 = () => {
  return (
    <StyledGrid container item xs={12} spacing={4} className={classes.root}>
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
    </StyledGrid>
  )
}

export default Section1
