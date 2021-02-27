import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { Link as MaterialLink } from '@material-ui/core'

import DownloadIcon from '@material-ui/icons/CloudDownload'
import section1BackgroundImage from '/section3-shape.png'
import sectionTitle from '/section3-title.png'
import sectionTitleHorizontal from '/section3-title-horizontal.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: '100px 0',
  },
  backgroundimage: {
    width: '100%',
    height: '100%',
  },
  titleGroup: {
    minHeight: '260px',
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
  buttonGrp: {
    marginTop: theme.spacing(10),
  },
  button: {
    borderRadius: '50px',
    width: '100%',
    height: '48px',
  },
}))

const Section3 = () => {
  const classes = useStyles()
  let location = useLocation()

  return (
    <Grid
      container
      alignItems='center'
      className={classes.root}
      spacing={4}
    >
      <Grid container item xs={12} md={6}>
        <img
          src={section1BackgroundImage}
          alt='portrait-image'
          className={classes.backgroundimage}
        ></img>
      </Grid>

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
            Need Development?
          </Typography>
          <Typography align='left' variant='h2'>
            I Can Help!
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
            <Button
              color='primary'
              component={MaterialLink}
              target='_blank'
              href='https://storage.cloud.google.com/sdfdsfasd/Resume-Brian-Lau.pdf'
              search={location.search}
              variant={'contained'}
              className={classes.button}
              startIcon={<DownloadIcon />}
            >
              <Typography variant='button'>
                Downlaod Resume
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={6} md={4}>
            <Button
              color='secondary'
              component={Link}
              to='/contact'
              search={location.search}
              variant={'contained'}
              className={classes.button}
              fullWidth
            >
              <Typography variant='button'>
                Hire Me!
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Section3
