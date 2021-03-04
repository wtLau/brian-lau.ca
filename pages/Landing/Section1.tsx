import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import {
  Typography,
  Button,
  Grid,
} from '@material-ui/core'
import Image from 'next/image'
import Link from 'next/link'

import { CloudDownload as DownloadIcon } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: '100px 0',
  },

  backgroundimage: {
    [theme.breakpoints.down('md')]: {
      width: '100%',
      height: '100%',
    },
  },
  buttonGrp: {
    marginTop: theme.spacing(10),
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
    <Grid
      container
      alignItems='center'
      className={classes.root}
      spacing={4}
    >
      <Grid container item xs={12} md={6}>
        <Grid item xs={12}>
          <Typography
            align='left'
            variant='h2'
            gutterBottom
          >
            Hi! I&lsquo;m Brian
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant='h1'
            gutterBottom
            color='primary'
            style={{ marginRight: '-20px' }}
          >
            FRONT-END DEVELOPER
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant='subtitle1'
            gutterBottom
          >
            Base in Vancouver, BC
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          className={classes.buttonGrp}
        >
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
          md={10}
          className={classes.buttonGrp}
          justify='space-between'
        >
          <Grid item xs={6} md={7}>
            <a
              href='https://docs.google.com/document/d/1Oiysjfct-dErd9s1q3IIYuuShucltOg29MbfpIRFovM/edit?usp=sharing'
              target='_blank'
            >
              <Button
                color='primary'
                variant={'contained'}
                className={classes.button}
                startIcon={<DownloadIcon />}
              >
                <Typography variant='button'>
                  Downlaod Resume
                </Typography>
              </Button>
            </a>
          </Grid>
          <Grid item xs={6} md={4}>
            <Link href='/contact'>
              <Button
                color='secondary'
                variant={'contained'}
                className={classes.button}
                fullWidth
              >
                <Typography variant='button'>
                  Hire Me!
                </Typography>
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
          alt='portrait-image'
          className={classes.backgroundimage}
        />
      </Grid>
    </Grid>
  )
}

export default Section1
