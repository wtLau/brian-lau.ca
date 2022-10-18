import { Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

import PageLayout from '@components/layout/PageLayout'

const NotFound = () => (
  <PageLayout
    title='Wrong page 🙈'
    description='Looks like you might be finding something hidden, nice try tho :)'
  >
    <Grid container>
      <Image
        src='/static/images/404.svg'
        alt='error404'
        width={500}
        height={500}
      />
      <Typography>
        Sorry, looks like the page you looked for doesn&#39t exist. Let me know
        if you'd like to see that page!
      </Typography>
    </Grid>
  </PageLayout>
)

export default NotFound
