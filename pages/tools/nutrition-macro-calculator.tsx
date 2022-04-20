import { Typography, Theme, CardContent, CardActions } from '@mui/material'
import { styled } from '@mui/material/styles'
import makeStyles from '@mui/styles/makeStyles'
import { NextSeo } from 'next-seo'
import React from 'react'

import MacroCalculator from '@components/tools/MacroCalculator/MacroCalculator'
import { Card } from '@components/ui'

const PREFIX = 'nutrition-macro-calculator'

const classes = {
  root: `${PREFIX}-root`,
  gridMargin: `${PREFIX}-gridMargin`,
}

// TODO jss-to-styled codemod: The Fragment root was replaced by div. Change the tag if needed.
const Root = styled('div')(({ theme }) => ({
  [`& .${classes.root}`]: {
    flexGrow: 1,
  },

  [`& .${classes.gridMargin}`]: {
    marginTop: theme.spacing(8),
  },
}))

export default function MacroCalculatorPage() {
  return (
    <Root>
      <NextSeo title='Tools' description='Tools that you might find useful' />
      <Card className={classes.root}>
        <CardContent>
          <Typography component={'h1'} variant='h3' gutterBottom>
            Nutrition Marco Calculator
          </Typography>
          <Typography variant='body1' paragraph>
            This calculator can provide a suggested values for a person's
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
    </Root>
  )
}
