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
    minHeight: '95vh',
  },

  backgroundimage: {
    [theme.breakpoints.down('md')]: {
      width: '100%',
      height: '100%',
    },
  },
  buttonGrp: {
    marginTop: theme.spacing(4),
  },
  button: {
    borderRadius: '50px',
    width: '100%',
    height: '48px',
  },
}))

const Section1 = () => {
  const classes = useStyles()
  const [session] = useSession()

  return (
    <Grid container className={classes.root} spacing={8} alignContent='center'>
      <Grid item>
        <Typography variant='h2' component={'h1'} gutterBottom>
          Hey, {session && `${session.user.name}.`} I'm Brian Lau
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant='body1' gutterBottom>
          You’ve somehow found my little corner of the internet!
        </Typography>
        <Typography>Sign my guestbook and let know me you're here!</Typography>
      </Grid>
    </Grid>
  )
}

export default Section1
