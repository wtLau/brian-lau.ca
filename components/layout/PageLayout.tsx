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
    <StyledGrid px={2} container spacing={6}>
      <Grid item xs={12} width={'100%'}>
        <HeadSeo title={title} description={description} />
      </Grid>

      <Grid item width={'100%'}>
        {children}
      </Grid>
    </StyledGrid>
  )
}

export default PageLayout
