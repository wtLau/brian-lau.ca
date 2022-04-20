import { Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import createStyles from '@mui/styles/createStyles'
import makeStyles from '@mui/styles/makeStyles'
import { FC } from 'react'

import Section1 from '@components/common/Landing/Section1'
import Section2 from '@components/common/Landing/Section2'
import Section3 from '@components/common/Landing/Section3'
import Section4 from '@components/common/Landing/Section4'

const PREFIX = 'Index'

const classes = {
  root: `${PREFIX}-root`,
}

const StyledGrid = styled(Grid)(({ theme }) => ({
  [`&.${classes.root}`]: {
    flexGrow: 1,
  },
}))

const Index: FC = () => {
  return (
    <StyledGrid
      container
      className={classes.root}
      justifyContent='center'
      alignItems='center'
    >
      <Section1 />
      {/* <Section2 /> */}
      {/* <Section3 /> */}
      {/* <Section4 /> */}
    </StyledGrid>
  )
}

export default Index
