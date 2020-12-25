import React, { useEffect, useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { Link as MaterialLink } from '@material-ui/core'

import sectionBackgroundImage from '../../assets/section3-shape.png'
import sectionTitle from '../../assets/section4-title.png'
import sectionTitleHorizontal from '../../assets/section4-title-horizaontal.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: '20px',
  },
  button: {
    borderRadius: '50px',
    width: '100%',
  },
  title: {
    background: `no-repeat  url(${sectionTitle})`,
    height: '400px',
    backgroundPosition: '50% 13%',
    backgroundSize: '35px 243px',
    [theme.breakpoints.down('md')]: {
      background: `no-repeat  url(${sectionTitleHorizontal})`,
      height: 'auto',
    },
  },
}))

const Section4 = () => {
  const classes = useStyles()
  const [skills, setSkills] = useState([])

  //Grab all skills from Fauna
  //Display all the skills
  //Maybe add and detele capability

  const loadSkills = async () => {
    try {
      const res = await fetch('/api/getSkills')
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
    <Grid container className={classes.root} spacing={4}>
      <Grid container item xs={12} md={1} className={classes.title}></Grid>

      <Grid container item xs={12} md={5}>
        <Grid item xs={12}>
          <Typography align='left' variant='h2'>
            What My Development Skills Included
          </Typography>
        </Grid>

        <Grid item xs={12} md={12}>
          <Typography variant='body1'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </Grid>

        <Grid
          container
          item
          xs={12}
          className={classes.buttonGrp}
          justify='space-between'
        >
          {skills.map((data) => (
            <Grid item key={data._id}>
              <Button
                color='secondary'
                component={MaterialLink}
                target='_blank'
                href={data.url}
                variant={'contained'}
                className={classes.button}
                fullWidth
                size='small'
              >
                <Typography variant='button'>{data.name}</Typography>
              </Button>
            </Grid>
          ))}
        </Grid>
      </Grid>

      <Grid container item xs={12} md={6}>
        <img
          src={sectionBackgroundImage}
          alt='portrait-image'
          className={classes.backgroundimage}
        ></img>
      </Grid>
    </Grid>
  )
}

export default Section4
