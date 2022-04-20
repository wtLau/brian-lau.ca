import { Card } from '@components/ui'
import { styled } from '@mui/material/styles'
import MacroCalculator from '@components/tools/MacroCalculator/MacroCalculator'
import {
  Typography,
  Theme,
  CardContent,
  CardActions,
  Chip,
  TextField,
  InputAdornment,
  Button,
  Grid,
  FormControl,
  InputLabel,
} from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import clsx from 'clsx'

import React, { useState } from 'react'
import { NextSeo } from 'next-seo'
import { HeadSeo } from '@components/HeadSeo'
import { number } from 'yup'

const PREFIX = 'pourover-coffee-tool'

const classes = {
  card: `${PREFIX}-card`,
  gridMargin: `${PREFIX}-gridMargin`,
  margin: `${PREFIX}-margin`,
  textField: `${PREFIX}-textField`,
}

const StyledGrid = styled(Grid)(({ theme }) => ({
  [`& .${classes.card}`]: {
    flexGrow: 1,
  },

  [`& .${classes.gridMargin}`]: {
    marginTop: theme.spacing(8),
  },

  [`& .${classes.margin}`]: {
    margin: theme.spacing(1, 0),
  },

  [`& .${classes.textField}`]: {
    width: '25ch',
  },
}))

const brewRatioList = [
  {
    id: 1,
    title: '1:2',
    value: 2,
  },
  {
    id: 2,
    title: '1:6',
    value: 6,
  },
  {
    id: 3,
    title: '1:10',
    value: 10,
  },
  {
    id: 4,
    title: '1:12',
    value: 12,
  },
  {
    id: 5,
    title: '1:16',
    value: 16,
  },
]

const brewMethodsList = [
  {
    id: 1,
    title: '4:6',
  },
  {
    id: 2,
    title: 'Hoffman',
  },
  {
    id: 3,
    title: 'V60',
  },
  {
    id: 4,
    title: 'Kalista',
  },
]

export default function MacroCalculatorPage() {
  const [ratio, setRatio] = useState(16)
  const [weight, setWeight] = useState(25)
  const handleCoffeeRatio = (ratio: number) => {
    setRatio(ratio)
  }
  const handleCoffeeWeight = (input: string) => {
    const weight = Number(input)
    setWeight(weight)
  }

  // const handleMethodRatio = (title) => {
  //   console.log(title)
  // }

  return (
    <StyledGrid spacing={10} container>
      <HeadSeo
        title='Pour Over Coffee'
        description='Pour over coffee tool to measure, record, and track.'
      />

      <Grid item>
        <Typography variant='h1' gutterBottom>
          Pour-Over Coffee Tool
        </Typography>

        <Typography variant='body1' paragraph gutterBottom>
          This tool provide a way to make coffee measurement specifically for
          pour overs. Things like brew ratio, water temperature, coffee origin,
          coffee cupping result, findings etc..
        </Typography>
      </Grid>

      <Grid item>
        <Card className={classes.card}>
          <CardContent>
            <Grid container direction='column' spacing={2}>
              <Grid item>
                <Typography variant='h3' gutterBottom>
                  Variables
                </Typography>
                <Typography variant='body1' paragraph>
                  This tool is a variable card. This tool is a variable card.
                  This This tool is a variable card. tool is a variable card.
                  This tool is This tool is a variable card. a variable card.
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='h5'>Coffee Ratio</Typography>
                <Grid container spacing={1}>
                  {brewRatioList.map(({ title, value, id }) => (
                    <Grid item>
                      <Chip
                        key={id}
                        label={title}
                        variant={ratio === value ? 'filled' : 'outlined'}
                        color='primary'
                        onClick={() => handleCoffeeRatio(value)}
                      />
                    </Grid>
                  ))}

                  <Grid item>
                    <Chip label='custom' disabled variant='outlined' />
                  </Grid>
                </Grid>
              </Grid>

              <Grid item container spacing={2} direction='column'>
                <Grid item>
                  <Typography variant='body1'>Ratio: 1 : {ratio}</Typography>
                </Grid>
                <Grid item>
                  <TextField
                    id='standard-start-adornment'
                    value={weight}
                    label='Coffee Weight'
                    className={clsx(classes.textField)}
                    aria-describedby='outlined-weight-helper-text'
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position='end'>g</InputAdornment>
                      ),
                    }}
                    onChange={(e) => handleCoffeeWeight(e.target.value)}
                  />
                </Grid>
                <Grid item>
                  <Typography variant='body1'>
                    Water: {ratio * weight}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      <Grid item>
        <Card className={classes.card}>
          <CardContent>
            <Typography component={'h1'} variant='h3' gutterBottom>
              Methods
            </Typography>
            <Typography variant='body1' paragraph>
              Coming Soon
            </Typography>

            {/* {brewRatioList.map(({ title, id }) => (
              <Chip
                key={id}
                label={title}
                variant='outlined'
                onClick={() => handleMethodRatio(title)}
              />
            ))}

            <Chip label='custom' variant='outlined' />

            <div>
              <Typography variant='h5' paragraph>
                Bloom/1st Pour:
              </Typography>

              <TextField
                id='standard-start-adornment'
                className={clsx(classes.margin, classes.textField)}
                value='60'
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>gram</InputAdornment>
                  ),
                }}
              />

              <Typography variant='body1' paragraph>
                Total: 60g
              </Typography>
            </div>

            <div>
              <Typography variant='h5' paragraph>
                2nd Pour:
              </Typography>

              <TextField
                id='standard-start-adornment'
                className={clsx(classes.margin, cn.textField)}
                value='130'
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>gram</InputAdornment>
                  ),
                }}
              />

              <Typography variant='body1' paragraph>
                Total: 190g
              </Typography>
            </div>

            <div>
              <Typography variant='h5' paragraph>
                2nd Pour:
              </Typography>

              <TextField
                id='standard-start-adornment'
                className={clsx(cn.margin, cn.textField)}
                value='130'
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>gram</InputAdornment>
                  ),
                }}
              />

              <Typography variant='body1' paragraph>
                Total: 450g
              </Typography>
            </div>

            <Button
              className={clsx(cn.margin, cn.textField)}
              variant='outlined'
              color='primary'
            >
              Add another pour
            </Button> */}
          </CardContent>
        </Card>
      </Grid>
    </StyledGrid>
  )
}
