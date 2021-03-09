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
    height: '300px',
    background: theme.palette.background.paper,
    borderRadius: '50px',
  },
}))

const companyData = [
  {
    name: 'Hanson Robotics Inc.',
    imageLocation: '/static/images/hansonroboticslogo.png',
    imageAlt: 'hanson robotics logo',
    link: 'https://www.hansonrobotics.com',
  },
  {
    name: 'Direct Focus Online',
    imageLocation: '/static/images/dfologo.png',
    imageAlt: 'DFO logo',
    link: 'https://www.linkedin.com/company/direct-focus-online/',
  },
  {
    name: 'South Granville Seniors Centre',
    imageLocation: '/static/images/sgscLogo.png',
    imageAlt: 'South Granville Seniors Centre logo',
    link: 'http://southgranvilleseniors.ca/',
  },
  {
    name: 'The Green Moustache',
    imageLocation: '/static/images/greenMoustacheLogo.jpg',
    imageAlt: 'The Green Moustachelogo',
    link: 'https://www.linkedin.com/company/the-green-moustache/',
  },
]

const Company: FC = () => {
  const classes = useStyles()

  return (
    <Grid
      container
      className={classes.root}
      spacing={6}
      alignItems='center'
      justify='center'
    >
      <Grid item xs={12}>
        <Typography align='center' variant='h3' component='h2'>
          I've worked with
        </Typography>
      </Grid>

      {companyData.map((prop) => (
        <Grid item xs={12} md={3} key={prop.name}>
          <Button
            component={Card}
            focusRipple
            fullWidth
            className={classes.companyCard}
          >
            <Link href={prop.link} target='_blank'>
              <Grid
                container
                justify='center'
                alignItems='center'
                direction='column'
                spacing={2}
              >
                <Grid item>
                  <Image
                    src={prop.imageLocation}
                    alt={prop.imageAlt}
                    width={78}
                    height={90}
                  ></Image>
                </Grid>
                <Grid item>
                  <Typography
                    variant='body1'
                    color='textPrimary'
                    align='center'
                  >
                    {prop.name}
                  </Typography>
                </Grid>
              </Grid>
            </Link>
          </Button>
        </Grid>
      ))}
    </Grid>
  )
}

export default Company
