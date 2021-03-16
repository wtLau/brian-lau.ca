import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Typography, Button, Grid } from '@material-ui/core'
import Image from 'next/image'
import { Link } from '@components/ui'

import { CloudDownload as DownloadIcon } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(5, 0),
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

  return (
    <Grid container alignItems='center' className={classes.root} spacing={4}>
      <Grid container item xs={12} md={6}>
        <Grid item xs={12}>
          <Typography align='left' variant='h2' component={'h1'} gutterBottom>
            Hi! I&lsquo;m Brian
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant='h4'
            component={'h2'}
            gutterBottom
            color='primary'
            style={{ marginRight: '-20px' }}
          >
            Front-End Devloper
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='subtitle1' color='textSecondary'>
            Based in Vancouver, BC
          </Typography>
        </Grid>
        <Grid item xs={12} md={12} className={classes.buttonGrp}>
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
          md={10}
          className={classes.buttonGrp}
          justify='center'
          spacing={2}
        >
          <Grid item xs={6} md={7}>
            <Link href='/brian-lau-resume.pdf' target='_blank'>
              <Button
                color='primary'
                variant={'contained'}
                className={classes.button}
                startIcon={<DownloadIcon />}
              >
                <Typography variant='body1'>View Resume</Typography>
              </Button>
            </Link>
          </Grid>
          <Grid item xs={10} md={4}>
            <Link href='/contact'>
              <Button
                color='secondary'
                variant={'contained'}
                className={classes.button}
                fullWidth
              >
                <Typography variant='button'>Lets Chat!</Typography>
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
      <Grid container item xs={12} md={6}>
        <Image
          src='/static/images/desktop-section1.png'
          width={784}
          height={684}
          priority={true}
          alt='portrait-image'
          className={classes.backgroundimage}
        />
      </Grid>
    </Grid>
  )
}

export default Section1
