import { Card } from '@components/ui'
import MacroCalculator from '@components/tools/MacroCalculator/MacroCalculator'
import {
  Typography,
  makeStyles,
  Theme,
  CardContent,
  CardActions,
  Chip,
  TextField,
  InputAdornment,
} from '@material-ui/core'
import clsx from 'clsx'

import React from 'react'
import { NextSeo } from 'next-seo'

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

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    flexGrow: 1,
  },
  gridMargin: {
    marginTop: theme.spacing(8),
  },
  margin: {
    margin: theme.spacing(1),
  },

  textField: {
    width: '25ch',
  },
}))

export default function MacroCalculatorPage() {
  const cn = useStyles()

  const handleCoffeeRatio = (value) => {
    console.log(value)
  }

  return (
    <>
      <NextSeo
        title='Pour Over Coffee'
        description='Pour over coffee tool to measure, record, and track.'
      />
      <Card className={cn.card}>
        <CardContent>
          <Typography component={'h1'} variant='h3' gutterBottom>
            Pour-Over Coffee Tool
          </Typography>
          <Typography variant='body1' paragraph>
            This tool provide a way to make coffee measurement specifically for
            pour overs. Things like brew ratio, water temperature, coffee
            origin, coffee cupping result, findings etc..
          </Typography>
        </CardContent>
      </Card>

      <Card className={cn.card}>
        <CardContent>
          <Typography component={'h1'} variant='h3' gutterBottom>
            Variables
          </Typography>
          <Typography variant='body1' paragraph>
            This tool is a variable card. This tool is a variable card. This
            This tool is a variable card. tool is a variable card. This tool is
            This tool is a variable card. a variable card.
          </Typography>

          {brewRatioList.map(({ title, value, id }) => (
            <Chip
              key={id}
              label={title}
              variant='outlined'
              onClick={() => handleCoffeeRatio(value)}
            />
          ))}

          <Chip label='custom' variant='outlined' />

          <Typography variant='body1' paragraph>
            Ratio: 1:12
          </Typography>
          <Typography variant='body1' paragraph>
            Coffee: 30gram
          </Typography>

          <div>
            <Typography variant='body1' paragraph>
              Coffee:
            </Typography>

            <TextField
              id='standard-start-adornment'
              className={clsx(cn.margin, cn.textField)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>gram</InputAdornment>
                ),
              }}
            />
          </div>
          <div>
            <Typography variant='body1' paragraph>
              water:
            </Typography>

            <TextField
              id='standard-start-adornment'
              className={clsx(cn.margin, cn.textField)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>ml</InputAdornment>
                ),
              }}
            />
          </div>
        </CardContent>
      </Card>
    </>
  )
}
