import { Card } from '@components/ui'
import MacroCalculator from '@components/tools/MacroCalculator/MacroCalculator'
import {
  Typography,
  makeStyles,
  Theme,
  CardContent,
  CardActions,
} from '@material-ui/core'

import React from 'react'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  gridMargin: {
    marginTop: theme.spacing(8),
  },
}))

export default function Tools() {
  const cn = useStyles()

  return (
    <Card className={cn.root}>
      <CardContent>
        <Typography
          component={'h1'}
          variant='h3'
          gutterBottom
        >
          Marco Calculator
        </Typography>
        <Typography variant='body1' paragraph>
          This calculator can provide a suggested
          values for a person's macronutrient in
          percentage or gram based on the daily
          calorie provided.
        </Typography>

        <Typography
          variant='body1'
          color='textSecondary'
          gutterBottom
        >
          1 gram of fat = 9 kcal
        </Typography>
        <Typography
          variant='body1'
          color='textSecondary'
          gutterBottom
        >
          1 gram of proteins = 4 kcal
        </Typography>
        <Typography
          variant='body1'
          color='textSecondary'
          gutterBottom
        >
          1 gram of carbohydrate = 4 kcal
        </Typography>

        <CardActions>
          <MacroCalculator />
        </CardActions>
      </CardContent>
    </Card>
  )
}
