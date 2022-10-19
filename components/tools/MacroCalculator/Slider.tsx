import { Add, Remove } from '@mui/icons-material'
import {
  Grid,
  Input,
  Slider as MSlider,
  Typography,
  InputAdornment,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import React, { useEffect, useState } from 'react'

const PREFIX = 'Slider'

const classes = {
  root: `${PREFIX}-root`,
  input: `${PREFIX}-input`,
}

const StyledGrid = styled(Grid)(({ theme }) => ({
  [`& .${classes.root}`]: {
    flexGrow: 1,
    marginTop: theme.spacing(3),
    border: `1px solid ${theme.palette.divider}`,
  },

  [`& .${classes.input}`]: {
    width: '70px',
    '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
    },
  },
}))

type Props = {
  title: string
  defaultPercentage: number
  kcal: number | string
}

export default function Slider({ title, defaultPercentage, kcal }: Props) {
  const [percentage, setPercentage] = useState<number>(defaultPercentage)

  const [macro, setMacro] = useState<number>(0)
  const [calorie, setCalorie] = useState<number>(0)

  const macroCalculation = (title: string, calorie: number) => {
    let multipiler = 0

    switch (title) {
      case 'Fat':
        multipiler = 9
        break
      case 'Protein':
        multipiler = 4
        break

      case 'Carbs':
        multipiler = 4
        break
    }
    setMacro(~~(calorie / multipiler))
  }

  const calCalculation = (kcal: number | string, percentage: number) => {
    const numberKcal = typeof kcal === 'number' ? kcal : 0
    setCalorie(~~((numberKcal * percentage) / 100))
  }

  const handleSliderChange = (_event: any, newValue: number | number[]) => {
    if (typeof newValue === 'number') {
      setPercentage(newValue)
    }
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPercentage(Number(event.target.value))
  }

  const handleBlur = () => {
    if (percentage < 0) {
      setPercentage(0)
    } else if (percentage > 100) {
      setPercentage(100)
    }
  }

  useEffect(() => {
    macroCalculation(title, calorie)
    calCalculation(kcal, percentage)
  }, [percentage, title, calorie, kcal])

  return (
    <StyledGrid
      container
      justifyContent='center'
      spacing={3}
      className={classes.root}
    >
      <Grid item xs={6}>
        <Typography id='input-slider' gutterBottom>
          {title}
        </Typography>
      </Grid>

      <Grid item container justifyContent='space-between' xs={4}>
        <Typography>{macro} g</Typography>

        <Input
          className={classes.input}
          value={percentage}
          margin='dense'
          onChange={handleInputChange}
          onBlur={handleBlur}
          inputProps={{
            step: 1,
            min: 0,
            max: 100,
            type: 'number',
            'aria-labelledby': 'input-slider',
          }}
          endAdornment={<InputAdornment position='end'>%</InputAdornment>}
        />

        <Typography>{calorie} cals</Typography>
      </Grid>

      <Grid container item xs={12}>
        <Grid item xs={1} component={Remove} />
        <Grid item xs={10}>
          <MSlider
            value={typeof percentage === 'number' ? percentage : 0}
            onChange={handleSliderChange}
            aria-labelledby='input-slider'
          />
        </Grid>
        <Grid item xs={1} component={Add} />
      </Grid>
    </StyledGrid>
  )
}
