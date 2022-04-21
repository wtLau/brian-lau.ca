import { MenuBook } from '@mui/icons-material'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import React from 'react'

import { Link } from '@components/ui'

const PREFIX = 'Section3'

const classes = {
  root: `${PREFIX}-root`,
  title: `${PREFIX}-title`,
  button: `${PREFIX}-button`,
}

const StyledGrid = styled(Grid)(({ theme }) => ({
  [`&.${classes.root}`]: {
    flexGrow: 1,
    margin: theme.spacing(5, 0),
  },

  [`& .${classes.title}`]: {
    background: `no-repeat  url('/section3-title.png')`,
    height: '400px',
    backgroundPosition: '50% 13%',
    backgroundSize: '35px 243px',
    [theme.breakpoints.down('xl')]: {
      background: `no-repeat  url('/section3-title-horizontal.png')`,
      height: 'auto',
    },
  },

  [`& .${classes.button}`]: {
    borderRadius: '50px',
    width: '100%',
    height: '48px',
    marginTop: theme.spacing(2),
  },
}))

const Section3 = () => {
  return (
    <StyledGrid
      container
      alignItems='center'
      className={classes.root}
      justifyContent='center'
      spacing={4}
    >
      <Grid item xs={12} md={6} container justifyContent='center'>
        <Image
          src='/static/images/section3-shape.png'
          alt='portrait-image'
          width={654}
          height={590}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant='h3' component={'h2'} gutterBottom>
          Web is FUN!
        </Typography>
        <Typography variant='body1' gutterBottom paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Typography>
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
    </StyledGrid>
  )
}

export default Section3
