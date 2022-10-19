import { Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import { useSession } from 'next-auth/client'
import { FC } from 'react'

import { Link } from '@components/ui'
const StyledGrid = styled(Grid)({
  minHeight: '85vh',
})

const Index: FC = () => {
  const [session] = useSession()
  const userName = session?.user?.name || 'stranger'
  return (
    <StyledGrid container justifyContent='center' alignItems='center'>
      <Grid container spacing={8} alignContent='center'>
        <Grid item>
          <Typography variant='h2' component={'h1'} gutterBottom>
            Hey, {userName}! {`I'm Brian Lau`}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant='body1' gutterBottom>
            You’ve strangely found my little corner of the internet!
          </Typography>
          <Typography>
            Sign my{' '}
            <Link underline='always' href='/guestbook'>
              guest-book
            </Link>{' '}
            and let know me {`you're`} here!
          </Typography>
        </Grid>
      </Grid>
    </StyledGrid>
  )
}

export default Index
