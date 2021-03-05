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
    margin: theme.spacing(8, 0),
  },
  button: {
    borderRadius: '50px',
    width: '100%',
  },
}))

const Company: FC = () => {
  const classes = useStyles()

  return (
    <Grid
      container
      className={classes.root}
      spacing={6}
      alignItems='center'
    >
      <Grid item xs={12}>
        <Typography
          align='center'
          variant='h3'
          component='h2'
        >
          I've worked with
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
                    src='/static/images/hansonroboticslogo.png'
                    alt='hanson robotics logo'
                    width={78}
                    height={90}
                  ></Image>
                </Grid>
                <Grid item>
                  <Typography
                    variant='body1'
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
                    src='/static/images/dfologo.png'
                    alt='DFO logo'
                    width={78}
                    height={90}
                  />
                </Grid>
                <Grid item>
                  <Typography
                    variant='body1'
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
                    src='/static/images/sgscLogo.png'
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
                    src='/static/images/greenMoustacheLogo.jpg'
                    alt='The Green Moustache logo'
                    width={78}
                    height={90}
                  />
                </Grid>
                <Grid item>
                  <Typography
                    variant='body1'
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
    </Grid>
  )
}

export default Company
