import React from 'react'
import useUser from '@hooks/useUser'
import useEvents from '@hooks/useEvents'

import { Grid, Typography } from '@material-ui/core'
import Fetcher from '@lib/fetcher'
import { useRouter } from 'next/router'

const Profile = () => {
  const { user, mutateUser } = useUser({ redirectTo: '/login' })
  const { events, loadingEvents } = useEvents(user)
  const router = useRouter()

  if (!user?.isLoggedIn || loadingEvents) {
    return <Typography>loading...</Typography>
  }

  return (
    <Grid>
      <h1>Your GitHub profile</h1>
      <h2>
        This page uses{' '}
        <a href='https://nextjs.org/docs/basic-features/pages#static-generation-recommended'>
          Static Generation (SG)
        </a>{' '}
        and the <a href='/api/user'>/api/user</a> route (using{' '}
        <a href='https://github.com/zeit/swr'>zeit/SWR</a>)
      </h2>

      <p style={{ fontStyle: 'italic' }}>
        Public data, from{' '}
        <a href={githubUrl(user.login)}>{githubUrl(user.login)}</a>, reduced to
        `login` and `avatar_url`.
      </p>

      <pre>{JSON.stringify(user, undefined, 2)}</pre>

      <p>
        Number of GitHub events for user: <b>{events.length}</b>, last event
        type: <b>{events.type}</b>
      </p>

      <a
        href='/api/logout'
        onClick={async (e) => {
          e.preventDefault()
          mutateUser(
            await Fetcher('/api/auth/logout', { method: 'POST' }),
            false
          )
          router.push('/login')
        }}
      >
        Logout
      </a>
    </Grid>
  )
}

function githubUrl(login) {
  return `https://api.github.com/users/${login}`
}

export default Profile
