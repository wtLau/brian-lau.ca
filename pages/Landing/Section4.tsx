import React, { useEffect, useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

import { Card } from '@components/ui'
import Image from 'next/image'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: '100px 0',
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
}))

const Section4 = () => {
  const classes = useStyles()
  const [skills, setSkills] = useState([])

  //Grab all skills from Fauna
  //Display all the skills
  //Maybe add and detele capability

  type Data = {
    _id: number
    url: string
    name: string
  }

  const loadSkills = async () => {
    try {
      const res = await fetch(
        '/.netlify/functions/getSkills'
      )
      const skills = await res.json()
      setSkills(skills)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    loadSkills()
  }, [])

  return (
    <Grid
      container
      className={classes.root}
      spacing={4}
    >
      <Grid
        container
        item
        xs={12}
        md={1}
        className={classes.title}
      ></Grid>

      <Grid container item xs={12} md={5}>
        <Grid item xs={12}>
          <Typography align='left' variant='h2'>
            What My Development Skills Included
          </Typography>
        </Grid>

        <Grid item xs={12} md={12}>
          <Typography variant='body1'>
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt
            in culpa qui officia deserunt mollit
            anim id est laborum.
          </Typography>
        </Grid>

        <Grid
          container
          item
          xs={12}
          justify='space-evenly'
          spacing={1}
        >
          {skills.map((data: Data) => (
            <Grid item key={data._id}>
              <a href={data.url} target='_blank'>
                <Button
                  color='secondary'
                  variant='contained'
                  className={classes.button}
                  size='small'
                >
                  <Typography variant='button'>
                    {data.name}
                  </Typography>
                </Button>
              </a>
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
          <Card
            width='230px'
            height='266px'
            raised
            mobileMargin='initial'
          >
            <Grid
              container
              direction='column'
              justify='space-evenly'
              alignItems='center'
              wrap='nowrap'
            >
              <Grid>
                <Image
                  src='/javascript-logo.png'
                  alt='portrait-image'
                  className={classes.img}
                  width={78}
                  height={90}
                ></Image>
              </Grid>
              <Typography variant='h5'>
                JavaScript
              </Typography>
              <Typography
                variant='body1'
                align='center'
              >
                JavaScript is one of my favorite
                programming langugage, I find it
                fun and easy to learn.
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
          <Card
            width='230px'
            height='266px'
            raised
            margin='40px 0  0 0'
            mobileMargin='initial'
          >
            <Grid
              container
              direction='column'
              justify='space-evenly'
              alignItems='center'
              wrap='nowrap'
            >
              <Grid>
                <Image
                  src='/html5-logo.png'
                  alt='portrait-image'
                  className={classes.img}
                  width={78}
                  height={90}
                ></Image>
              </Grid>
              <Typography variant='h5'>
                JavaScript
              </Typography>
              <Typography
                variant='body1'
                align='center'
              >
                HTML is a markup template, its was
                the first web technology I
                learned.
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
          <Card
            width='230px'
            height='266px'
            raised
            mobileMargin='initial'
          >
            <Grid
              container
              direction='column'
              justify='space-evenly'
              alignItems='center'
              wrap='nowrap'
            >
              <Grid>
                <Image
                  src='/react-logo.png'
                  alt='portrait-image'
                  className={classes.img}
                  width={78}
                  height={90}
                ></Image>
              </Grid>
              <Typography variant='h5'>
                React
              </Typography>
              <Typography
                variant='body1'
                align='center'
              >
                This porfolio is actually
                programmed in React. It was a
                pleasure using it!
              </Typography>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Section4
