import React, { FC } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import ButtonBase from '@material-ui/core/ButtonBase'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { Link as MaterialLink } from '@material-ui/core'

import Link from 'next/link'
import { Card } from '@components/ui'
import Image from 'next/image'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: '20px',
    margin: '30px 0',
  },
  button: {
    borderRadius: '50px',
    width: '100%',
  },
  title: {
    background: `no-repeat  url('/section4-title.png')`,
    height: '400px',
    backgroundPosition: '50% 13%',
    backgroundSize: '35px 243px',
    [theme.breakpoints.down('md')]: {
      background: `no-repeat  url('/section4-title-horizaontal.png')`,
      height: 'auto',
    },
  },
  img: {
    width: '78px',
    height: '90px',
  },
  image1: {
    marginLeft: '10px',
    marginRight: '62px',
    [theme.breakpoints.down('md')]: {
      margin: 'initial',
    },
  },
  image3: {
    marginTop: '20px',
    marginLeft: '11px',
    [theme.breakpoints.down('md')]: {
      margin: 'initial',
    },
    button: {
      borderRadius: '50px',
      width: '100%',
      height: '48px',
    },
  },
}))

const Company: FC = () => {
  const classes = useStyles()

  return (
    <Grid
      container
      className={classes.root}
      spacing={10}
      alignItems='center'
    >
      <Grid item xs={12}>
        <Typography
          align='center'
          variant='h2'
          gutterBottom
        >
          Previous Company
        </Typography>
      </Grid>

      <Grid
        container
        item
        xs={12}
        alignItems='center'
        spacing={4}
      >
        <Grid
          item
          container
          justify='center'
          xs={6}
          md={3}
        >
          <ButtonBase
            component={MaterialLink}
            href='https://www.hansonrobotics.com'
            target='_blank'
            focusRipple
          >
            <Card height='270px' width='246px'>
              <Grid
                container
                justify='center'
                alignItems='center'
                direction='column'
                spacing={2}
              >
                <Grid item>
                  <Image
                    src='/hansonroboticslogo.png'
                    alt='hanson robotics logo'
                    width={78}
                    height={90}
                  ></Image>
                </Grid>
                <Grid item>
                  <Typography
                    variant='h5'
                    align='center'
                  >
                    Hanson Robotics Inc.
                  </Typography>
                </Grid>
              </Grid>
            </Card>
          </ButtonBase>
        </Grid>

        <Grid
          item
          container
          justify='center'
          xs={6}
          md={3}
        >
          <ButtonBase
            component={MaterialLink}
            href='https://www.linkedin.com/company/direct-focus-online/'
            target='_blank'
            focusRipple
          >
            <Card height='270px' width='246px'>
              <Grid
                container
                justify='center'
                alignItems='center'
                direction='column'
                spacing={2}
              >
                <Grid item>
                  <Image
                    src='/dfologo.png'
                    alt='DFO logo'
                    width={78}
                    height={90}
                  />
                </Grid>
                <Grid item>
                  <Typography
                    variant='h5'
                    align='center'
                  >
                    Direct Focus Online
                  </Typography>
                </Grid>
              </Grid>
            </Card>
          </ButtonBase>
        </Grid>

        <Grid
          item
          container
          justify='center'
          xs={6}
          md={3}
        >
          <ButtonBase
            component={MaterialLink}
            href='http://southgranvilleseniors.ca/'
            target='_blank'
            focusRipple
          >
            <Card height='270px' width='246px'>
              <Grid
                container
                justify='center'
                alignItems='center'
                direction='column'
                spacing={2}
              >
                <Grid item>
                  <Image
                    src='/sgscLogo.png'
                    alt='South Granville Seniors Centre logo'
                    width={78}
                    height={90}
                  />
                </Grid>
                <Grid item>
                  <Typography
                    variant='body1'
                    align='center'
                  >
                    South Granville Seniors Centre
                  </Typography>
                </Grid>
              </Grid>
            </Card>
          </ButtonBase>
        </Grid>

        <Grid
          item
          container
          justify='center'
          xs={6}
          md={3}
        >
          <ButtonBase
            component={MaterialLink}
            href='https://www.linkedin.com/company/the-green-moustache/'
            target='_blank'
            focusRipple
          >
            <Card height='270px' width='246px'>
              <Grid
                container
                justify='center'
                alignItems='center'
                direction='column'
                spacing={2}
              >
                <Grid item>
                  <Image
                    src='/greenMoustacheLogo.jpg'
                    alt='The Green Moustache logo'
                    width={500}
                    height={500}
                  ></Image>
                </Grid>
                <Grid item>
                  <Typography
                    variant='h5'
                    align='center'
                  >
                    The Green Moustache
                  </Typography>
                </Grid>
              </Grid>
            </Card>
          </ButtonBase>
        </Grid>
      </Grid>
      <Grid
        item
        container
        xs={12}
        justify='center'
      >
        <Grid item xs={4}>
          <Link href='/contact'>
            <Button
              color='secondary'
              variant={'contained'}
              className={classes.button}
            >
              <Typography variant='button'>
                Hire Me!
              </Typography>
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Company
