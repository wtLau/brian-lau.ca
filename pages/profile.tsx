import { useSession } from 'next-auth/client'
import React, { useEffect, useState } from 'react'

import { Grid, Typography, CircularProgress } from '@material-ui/core'

const Profile = () => {
  const [content, setContent] = useState()
  const [session, loading] = useSession()
  const userName = session?.user?.name
  // Fetch content from protected route
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/user')
      const json = await res.json()
      if (json.content) {
        setContent(json.content)
      }
    }
    fetchData()
  }, [session])

  if (loading) {
    return <CircularProgress />
  }

  // If no session exists, display access denied message
  if (!session) {
    return <Typography>Access Denied</Typography>
  }

  return (
    <Grid>
      <h1>Protected Page</h1>
      <p>You're sign in as</p>

      <strong>{userName || '\u00a0'}</strong>
      <br />
      <strong>{content}</strong>
    </Grid>
  )
}

export default Profile
