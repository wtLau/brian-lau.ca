import { Grid, Typography } from '@mui/material'

import PageLayout from '@components/layout/PageLayout'

export default function GuestBook() {
  return (
    <PageLayout
      title='Guest Book'
      description='This is a online guest book where you can sign-in and comment on my little corner of the internet.'
    >
      <Grid item>
        <Typography variant='body1' gutterBottom>
          Unforunately, the guest book is not up yet. I have been busy working
          on improving test coverage and typescipt coverage. :(
        </Typography>
      </Grid>
    </PageLayout>
  )
}
