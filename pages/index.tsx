import { FC } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import Section1 from './Landing/Section1'
import Section2 from './Landing/Section2'
import Section3 from './Landing/Section3'
import Section4 from './Landing/Section4'
import Company from './Landing/Company'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    [theme.breakpoints.up('md')]: {
      maxWidth: theme.breakpoints.width('lg'),
      margin: '0 auto',
    },
  },
}))

const Index: FC = () => {
  const classes = useStyles()

  return (
    <Grid
      container
      className={classes.root}
      justify='center'
      alignItems='center'
    >
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Company />
    </Grid>
  )
}

export default Index
