import Grid from '@mui/material/Grid'
import React from 'react'

import { HeadSeo } from '@components/HeadSeo'

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
    <Grid container direction='column' spacing={4}>
      <Grid item>
        <HeadSeo title={title} description={description} />
      </Grid>

      {children}
    </Grid>
  )
}

export default PageLayout
