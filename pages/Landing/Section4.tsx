// import { Card } from '@components/ui'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import {
  Typography,
  Card,
} from '@material-ui/core'

import Image from 'next/image'
import React from 'react'
import { skillsData } from '../../data/skillsData'
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
    marginLeft: '10px',
    marginRight: '62px',
    [theme.breakpoints.down('md')]: {
      margin: 'initial',
    },
  },
  image3: {
    marginTop: '20px',
    marginLeft: '11px',
    [theme.breakpoints.down('md')]: {
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
    <Grid container className={classes.root}>
      <Grid
        container
        item
        xs={12}
        md={5}
        spacing={4}
      >
        <Typography variant='h3' component='h2'>
          I am interested in...
        </Typography>

        <Grid
          container
          item
          xs={12}
          justify='center'
          spacing={2}
        >
          {skills &&
            skills.map((data) => (
              <Grid item key={data.name}>
                <Link
                  href={data.url ? data.url : '/'}
                  target='_blank'
                >
                  <Button
                    color='secondary'
                    variant='contained'
                    className={classes.button}
                    size='small'
                  >
                    {data.name}
                  </Button>
                </Link>
              </Grid>
            ))}
        </Grid>
      </Grid>

      <Grid
        container
        item
        xs={12}
        md={6}
        justify='center'
      >
        <Grid
          item
          container
          xs={4}
          md={5}
          justify='center'
          className={classes.image1}
        >
          <Card raised className={classes.card}>
            <Grid
              container
              direction='column'
              justify='space-evenly'
              alignItems='center'
              wrap='nowrap'
            >
              <Image
                src='/static/images/javascript-logo.png'
                alt='portrait-image'
                className={classes.img}
                width={78}
                height={90}
              />

              <Typography
                variant='h5'
                component={'h5'}
              >
                JavaScript
              </Typography>
            </Grid>
          </Card>
        </Grid>

        <Grid
          item
          container
          xs={4}
          md={5}
          justify='center'
        >
          <Card raised className={classes.card}>
            <Grid
              container
              direction='column'
              justify='space-evenly'
              alignItems='center'
              wrap='nowrap'
            >
              <Grid>
                <Image
                  src='/static/images/html5-logo.png'
                  alt='portrait-image'
                  className={classes.img}
                  width={78}
                  height={90}
                ></Image>
              </Grid>
              <Typography
                variant='h5'
                component={'h5'}
              >
                HTML5
              </Typography>
            </Grid>
          </Card>
        </Grid>

        <Grid
          item
          container
          xs={4}
          md={5}
          justify='center'
          className={classes.image3}
        >
          <Card raised className={classes.card}>
            <Grid
              container
              direction='column'
              justify='space-evenly'
              alignItems='center'
              wrap='nowrap'
            >
              <Image
                src='/static/images/react-logo.png'
                alt='portrait-image'
                className={classes.img}
                width={100}
                height={90}
              />
              <Typography
                variant='h5'
                component={'h5'}
              >
                React
              </Typography>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Section4
