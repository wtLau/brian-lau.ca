import React, { useState, useEffect } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Typography, Button, Grid } from '@material-ui/core'
import Image from 'next/image'
import { Link } from '@components/ui'

import { skillsData, TSkills } from '@data/skillsData'
import { signIn, signOut, useSession } from 'next-auth/client'
import { NextSeo } from 'next-seo'
import Section5 from '@components/common/Landing/Section5'

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    marginTop: theme.spacing(17),
  },
  backgroundimage: {
    [theme.breakpoints.down('md')]: {
      width: '100%',
      height: '100%',
    },
  },
  container: {
    margin: theme.spacing(10, 0),
  },
}))

const About = () => {
  const classes = useStyles()
  const [session] = useSession()
  const [skills, setSkills] = useState<TSkills[]>([])
  const userName = session?.user?.name || 'stranger'

  useEffect(() => {
    setSkills(skillsData)
  }, [skills])

  return (
    <>
      <NextSeo
        title='About'
        description='A little more information about Brian Lau'
      />

      <Grid container className={classes.title}>
        <Typography variant='h1' gutterBottom>
          About Me
        </Typography>
        <Image
          src='/static/images/desktop-section1.png'
          width={584}
          height={484}
          priority={true}
          alt='portrait-image'
          className={classes.backgroundimage}
        />
      </Grid>

      <Grid item xs={12} className={classes.container}>
        <Typography paragraph>
          {session && `Hi, ${userName}.`} My name is Brian, and I am currently
          living in North Vancouver, Canada, with my beautiful corgi.
        </Typography>

        <Typography paragraph>
          Professionally, I am an web developer with an obsession for
          well-crafted design, building seamless experiences for users. I'm big
          on growth and teamwork. If we're gonna build the future, let's have
          some fun doing it!
        </Typography>

        <Typography paragraph>
          When I am not in front of computer, I spend my time body building,
          making pour-over coffee, and enjoying time with friends and family in
          Vancouver.
        </Typography>
      </Grid>

      <Grid className={classes.container}>
        <Typography variant='h2' gutterBottom>
          Interested In
        </Typography>

        <Grid container justify='center' spacing={2}>
          {skills &&
            skills.map((data) => (
              <Grid item key={data.name}>
                <Link href={data.url ? data.url : '/'} target='_blank'>
                  <Button variant='text' size='small'>
                    {data.name}
                  </Button>
                </Link>
              </Grid>
            ))}
        </Grid>
      </Grid>

      <Grid className={classes.container}>
        <Typography variant='h2' gutterBottom>
          Footprint
        </Typography>
        <iframe
          src='https://www.google.com/maps/d/embed?mid=11fk358gCbvrJrgluq7zidFOMMv1CieaA&z=2'
          width='100%'
          height='680'
        />
      </Grid>

      <Grid className={classes.container}>
        <Section5 />
      </Grid>
    </>
  )
}

export default About
