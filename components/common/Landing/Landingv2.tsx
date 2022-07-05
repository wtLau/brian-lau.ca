import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Typography, Button, Grid } from '@material-ui/core'
import Image from 'next/image'
import { Link } from '@components/ui'

import { CloudDownload as DownloadIcon } from '@material-ui/icons'
import { signIn, signOut, useSession } from 'next-auth/client'
import './main_v2.css'

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

const LandingV2 = () => {
  const classes = useStyles()
  const [session] = useSession()

  return (
    <Grid container className={classes.root} spacing={8} alignContent='center'>
      <main role='main' className='main-content' id='main-content'>
        <div className='titleCont'>
          <h1 className='main-title' id='main-title'>
            "Hello, stranger
            <br />
            <span style={{ paddingLeft: '100px' }}>you FOUND me,</span>
            <br />
            <span style={{ paddingRight: '110px' }}>ay'm,</span>
            <br />
            <span style={{ paddingLeft: '-20px' }}>Brian"</span>
          </h1>
        </div>
        <canvas id='noise' className='noise'></canvas>
        <div className='vignette'></div>
      </main>
    </Grid>
  )
}

export default LandingV2
