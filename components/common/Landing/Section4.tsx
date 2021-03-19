// import { Card } from '@components/ui'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Card } from '@material-ui/core'

import Image from 'next/image'
import React from 'react'
import { skillsData } from '../../../data/skillsData'
import { Link } from '@components/ui'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(5, 0),
  },
  button: {
    borderRadius: '50px',
    width: '100%',
  },
  title: {
    background: `no-repeat  url('/section4-title.png')`,
    height: '400px',
    backgroundPosition: '50% 13%',
    backgroundSize: '35px 243px',
    [theme.breakpoints.down('md')]: {
      background: `no-repeat  url('/section4-title-horizaontal.png')`,
      height: 'auto',
    },
  },
  img: {
    height: '90px',
  },
  image1: {
    [theme.breakpoints.up('md')]: {
      marginLeft: '10px',
      marginRight: '62px',
      margin: 'initial',
    },
  },
  image3: {
    [theme.breakpoints.up('md')]: {
      marginTop: '20px',
      marginLeft: '11px',
      margin: 'initial',
    },
  },
  card: {
    width: '230px',
    height: '266px',
    borderRadius: '32px',
    background: theme.palette.background.paper,
    display: 'flex',
    justifyContent: 'center',
  },
}))

const Section4 = () => {
  const classes = useStyles()
  const skills = skillsData

  return (
    <Grid container className={classes.root} spacing={4}>
      <Typography variant='h2' gutterBottom>
        Interested In
      </Typography>

      <Grid container item justify='center' spacing={2}>
        {skills &&
          skills.map((data) => (
            <Grid item key={data.name}>
              <Link href={data.url ? data.url : '/'} target='_blank'>
                <Button variant='text' className={classes.button} size='small'>
                  {data.name}
                </Button>
              </Link>
            </Grid>
          ))}
      </Grid>
    </Grid>
  )
}

export default Section4
