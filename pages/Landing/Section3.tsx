import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Image from 'next/image'
import { Link } from '@components/ui'
import { MenuBook } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(5, 0),
  },

  title: {
    background: `no-repeat  url('/section3-title.png')`,
    height: '400px',
    backgroundPosition: '50% 13%',
    backgroundSize: '35px 243px',
    [theme.breakpoints.down('md')]: {
      background: `no-repeat  url('/section3-title-horizontal.png')`,
      height: 'auto',
    },
  },
  button: {
    borderRadius: '50px',
    width: '100%',
    height: '48px',
  },
}))

const Section3 = () => {
  const classes = useStyles()

  return (
    <Grid
      container
      alignItems='center'
      className={classes.root}
      spacing={4}
    >
      <Grid container item xs={12} md={6}>
        <Image
          src='/static/images/section3-shape.png'
          alt='portrait-image'
          width={654}
          height={590}
        ></Image>
      </Grid>
      <Grid
        container
        item
        xs={12}
        md={5}
        spacing={5}
      >
        <Grid item xs={12}>
          <Typography
            align='left'
            variant='h3'
            component={'h2'}
          >
            Web is FUN!
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant='body1'>
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </Typography>
        </Grid>

        <Grid item xs={6} md={7}>
          <Link href='/blog'>
            <Button
              color='primary'
              variant={'contained'}
              className={classes.button}
              startIcon={<MenuBook />}
            >
              Read More~
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Section3
