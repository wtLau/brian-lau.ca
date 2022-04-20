import { CloudDownload as DownloadIcon } from '@mui/icons-material'
import { Typography, Button, Grid } from '@mui/material'
import { styled } from '@mui/material/styles'
import makeStyles from '@mui/styles/makeStyles'
import { signIn, signOut, useSession } from 'next-auth/client'
import Image from 'next/image'
import React from 'react'

import { Link } from '@components/ui'

const PREFIX = 'Section1'

const classes = {
  root: `${PREFIX}-root`,
  backgroundimage: `${PREFIX}-backgroundimage`,
  buttonGrp: `${PREFIX}-buttonGrp`,
  button: `${PREFIX}-button`,
}

const StyledGrid = styled(Grid)(({ theme }) => ({
  [`&.${classes.root}`]: {
    flexGrow: 1,
    minHeight: '95vh',
  },

  [`& .${classes.backgroundimage}`]: {
    [theme.breakpoints.down('xl')]: {
      width: '100%',
      height: '100%',
    },
  },

  [`& .${classes.buttonGrp}`]: {
    marginTop: theme.spacing(4),
  },

  [`& .${classes.button}`]: {
    borderRadius: '50px',
    width: '100%',
    height: '48px',
  },
}))

const Section1 = () => {
  const [session] = useSession()
  const userName = session?.user?.name || 'stranger'

  return (
    <StyledGrid
      container
      className={classes.root}
      spacing={8}
      alignContent='center'
    >
      <Grid item>
        <Typography variant='h2' component={'h1'} gutterBottom>
          Hey, {userName}! I'm Brian Lau
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant='body1' gutterBottom>
          You’ve somehow found my little corner of the internet!
        </Typography>
        <Typography>Sign my guestbook and let know me you're here!</Typography>
      </Grid>
    </StyledGrid>
  )
}

export default Section1
