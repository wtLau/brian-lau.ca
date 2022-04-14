import React, { FC } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import ButtonBase from '@material-ui/core/ButtonBase'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { Card } from '@material-ui/core'

import { Link } from '@components/ui'
import Image from 'next/image'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(8, 0),
  },
  companyCard: {
    minHeight: '200px',
    background: theme.palette.background.paper,
    borderRadius: '50px',
    width: '100%',
  },
}))

const companyData = [
  {
    name: 'Spinndle',
    imageLocation: '/static/images/spinndle_logo.png',
    imageAlt: 'logo',
    title: 'Front-End Developer',
    description: 'Use Spinndle\'s competency-based learning software to keep track of student-driven inquiry, PBL, personal projects and more. The project management tool allows gifted and IB students to manage their projects more independently through ongoing collaboration, reflection and revision.',
    link: 'https://spinndle.com/',
  },
  {
    name: 'Hanson Robotics Inc.',
    imageLocation: '/static/images/hansonroboticslogo.png',
    imageAlt: 'hanson robotics logo',
    title: 'Robot Opeator',
    link: 'https://www.hansonrobotics.com',
  },
  {
    name: 'Direct Focus Online',
    imageLocation: '/static/images/dfologo.png',
    imageAlt: 'DFO logo',
    link: 'https://www.linkedin.com/company/direct-focus-online/',
    title: 'Front-End Developer',
  },
  {
    name: 'South Granville Seniors Centre',
    imageLocation: '/static/images/sgscLogo.png',
    imageAlt: 'South Granville Seniors Centre logo',
    link: 'http://southgranvilleseniors.ca/',
    title: 'Front-End Developer',
  },
  {
    name: 'The Green Moustache',
    imageLocation: '/static/images/greenMoustacheLogo.jpg',
    imageAlt: 'The Green Moustachelogo',
    link: 'https://www.linkedin.com/company/the-green-moustache/',
    title: 'Front-End Developer',
  },
]

const Section5: FC = () => {
  const classes = useStyles()

  return (
    <Grid
      container
      className={classes.root}
      spacing={4}
      alignItems='center'
      justify='center'
    >
      <Grid item xs={12}>
        <Typography variant='h3' component='h2' gutterBottom>
          Previous Experiences
        </Typography>
      </Grid>

      {companyData.map((prop) => (
        <Grid item xs={12} key={prop.name}>
          <Link href={prop.link} target='_blank'>
            <ButtonBase
              className={classes.companyCard}
              component={Card}
              focusRipple
            >
              <Grid container alignItems='center' justify='space-between'>
                <Grid item xs={3} container justify='flex-end'>
                  <Image
                    src={prop.imageLocation}
                    alt={prop.imageAlt}
                    width={78}
                    height={90}
                  />
                </Grid>
                <Grid item xs={8}>
                  <Typography variant='body1'>{prop.name}</Typography>
                  <Typography variant='body1' color='textSecondary'>
                    {prop.title}
                  </Typography>
                </Grid>
              </Grid>
            </ButtonBase>
          </Link>
        </Grid>
      ))}
    </Grid>
  )
}

export default Section5
