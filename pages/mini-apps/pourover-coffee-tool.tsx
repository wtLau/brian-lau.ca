import {
  Typography,
  Chip,
  TextField,
  InputAdornment,
  Grid,
} from '@mui/material'
import React, { useState } from 'react'

import PageLayout from '@components/layout/PageLayout'

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

  return (
    <PageLayout
      title='Pour Over Coffee'
      description='Pour over coffee tool to measure, record, and track. It provides a way to make coffee measurement specifically for
        pour overs. Includes feature like brew ratio, water temperature, coffee origin,
        coffee cupping result, findings etc..'
    >
      <Grid item container spacing={2}>
        <Grid item>
          <Typography variant='h3' gutterBottom>
            Variables
          </Typography>
          <Typography variant='body1' paragraph>
            This tool is a variable card. This tool is a variable card. This
            This tool is a variable card. tool is a variable card. This tool is
            This tool is a variable card. a variable card.
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant='h6'>Coffee Ratio</Typography>
          <Grid container spacing={1}>
            {brewRatioList.map(({ title, value, id }) => (
              <Grid item key={id}>
                <Chip
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

          <Grid item container spacing={2} direction='column'>
            <Grid item>
              <Typography variant='body1'>Ratio: 1 : {ratio}</Typography>
            </Grid>
            <Grid item>
              <TextField
                id='standard-start-adornment'
                value={weight}
                label='Coffee Weight'
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
              <Typography variant='body1'>Water: {ratio * weight}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item container spacing={2}>
        <Grid item>
          <Typography component={'h1'} variant='h3' gutterBottom>
            Methods
          </Typography>
          <Typography variant='body1' paragraph>
            Coming Soon
          </Typography>
        </Grid>

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
      </Grid>
    </PageLayout>
  )
}
