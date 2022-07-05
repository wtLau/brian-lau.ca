import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import { FC } from 'react'

import Section1 from '@components/common/Landing/Section1'
import Landingv2 from '@components/common/Landing/Landingv2'
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
      <Landingv2 />
      <h1>HELLO</h1>
      {/* <Section1 /> */}
      {/* <Section2 /> */}
      {/* <Section3 /> */}
      {/* <Section4 /> */}
    </StyledGrid>
  )
}

export default Index
