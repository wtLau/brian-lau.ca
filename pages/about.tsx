import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Typography, Button, Grid } from '@material-ui/core'
import Image from 'next/image'
import { Link } from '@components/ui'

import { CloudDownload as DownloadIcon } from '@material-ui/icons'
import { signIn, signOut, useSession } from 'next-auth/client'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  backgroundimage: {
    [theme.breakpoints.down('md')]: {
      width: '100%',
      height: '100%',
    },
  },
}))

const About = () => {
  const classes = useStyles()
  const [session] = useSession()

  return (
    <Grid container className={classes.root} spacing={4} alignItems='center'>
      <Grid item xs={12}>
        <Typography variant='h2' component={'h1'}>
          About Me
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography paragraph>
          {session && `Hi, ${session.user.name}.`} My name is Brian, and I live
          in North Vancouver, Canada, with my beautiful corgi.
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
      <Image
        src='/static/images/desktop-section1.png'
        width={584}
        height={484}
        priority={true}
        alt='portrait-image'
        className={classes.backgroundimage}
      />
    </Grid>
  )
}

export default About
