// import { Card } from '@components/ui'
import { Typography, Card } from '@mui/material'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import makeStyles from '@mui/styles/makeStyles'
import Image from 'next/image'
import React from 'react'

import { Link } from '@components/ui'

import { skillsData } from '../../../data/skillsData'

const PREFIX = 'Section4'

const classes = {
  root: `${PREFIX}-root`,
  button: `${PREFIX}-button`,
  title: `${PREFIX}-title`,
  img: `${PREFIX}-img`,
  image1: `${PREFIX}-image1`,
  image3: `${PREFIX}-image3`,
  card: `${PREFIX}-card`,
}

const StyledGrid = styled(Grid)(({ theme }) => ({
  [`&.${classes.root}`]: {
    flexGrow: 1,
    margin: theme.spacing(5, 0),
  },

  [`& .${classes.button}`]: {
    borderRadius: '50px',
    width: '100%',
  },

  [`& .${classes.title}`]: {
    background: `no-repeat  url('/section4-title.png')`,
    height: '400px',
    backgroundPosition: '50% 13%',
    backgroundSize: '35px 243px',
    [theme.breakpoints.down('xl')]: {
      background: `no-repeat  url('/section4-title-horizaontal.png')`,
      height: 'auto',
    },
  },

  [`& .${classes.img}`]: {
    height: '90px',
  },

  [`& .${classes.image1}`]: {
    [theme.breakpoints.up('md')]: {
      marginLeft: '10px',
      marginRight: '62px',
      margin: 'initial',
    },
  },

  [`& .${classes.image3}`]: {
    [theme.breakpoints.up('md')]: {
      marginTop: '20px',
      marginLeft: '11px',
      margin: 'initial',
    },
  },

  [`& .${classes.card}`]: {
    width: '230px',
    height: '266px',
    borderRadius: '32px',
    background: theme.palette.background.paper,
    display: 'flex',
    justifyContent: 'center',
  },
}))

const Section4 = () => {
  const skills = skillsData

  return (
    <StyledGrid container className={classes.root} spacing={4}>
      <Typography variant='h2' gutterBottom>
        Interested In
      </Typography>

      <Grid container item justifyContent='center' spacing={2}>
        {skills &&
          skills.map((data) => (
            <Grid item key={data.name}>
              <Link href={data.url ? data.url : '/'} target='_blank'>
                <Button variant='text' className={classes.button} size='small'>
                  {data.name}
                </Button>
              </Link>
            </Grid>
          ))}
      </Grid>
    </StyledGrid>
  )
}

export default Section4
