import { styled } from '@mui/material'
import Grid from '@mui/material/Grid'
import React from 'react'

import { HeadSeo } from '@components/HeadSeo'

const StyledGrid = styled(Grid)({
  minHeight: '85vh',
})

const PageLayout = ({
  title,
  description,
  children,
}: {
  title: string
  description: string
  children: React.ReactNode
}) => {
  return (
    <StyledGrid container direction='column' spacing={4}>
      <Grid item>
        <HeadSeo title={title} description={description} />
      </Grid>

      <Grid item>{children}</Grid>
    </StyledGrid>
  )
}

export default PageLayout
