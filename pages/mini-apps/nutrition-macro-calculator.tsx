import { Typography, CardContent, CardActions } from '@mui/material'
import React from 'react'

import PageLayout from '@components/layout/PageLayout'
import MacroCalculator from '@components/tools/MacroCalculator/MacroCalculator'
import { Card } from '@components/ui'

const PREFIX = 'nutrition-macro-calculator'

const classes = {
  root: `${PREFIX}-root`,
  gridMargin: `${PREFIX}-gridMargin`,
}

export default function MacroCalculatorPage() {
  return (
    <PageLayout title='Tools' description='Tools that you might find useful'>
      <Card className={classes.root}>
        <CardContent>
          <Typography component={'h1'} variant='h3' gutterBottom>
            Nutrition Marco Calculator
          </Typography>
          <Typography variant='body1' paragraph>
            This calculator can provide a suggested values for a {"person's"}
            macronutrient in percentage or gram based on the daily calorie
            provided.
          </Typography>

          <Typography variant='body1' color='textSecondary' gutterBottom>
            1 gram of fat = 9 kcal
          </Typography>
          <Typography variant='body1' color='textSecondary' gutterBottom>
            1 gram of proteins = 4 kcal
          </Typography>
          <Typography variant='body1' color='textSecondary' gutterBottom>
            1 gram of carbohydrate = 4 kcal
          </Typography>

          <CardActions>
            <MacroCalculator />
          </CardActions>
        </CardContent>
      </Card>
    </PageLayout>
  )
}
