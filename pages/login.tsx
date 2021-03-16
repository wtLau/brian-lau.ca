import React, { FormEvent, ReactEventHandler, useState } from 'react'
import useUser from '@lib/hooks/useUser'
import fetcher from '@lib/fetcher'
import { TextField, Button, Typography } from '@material-ui/core'

import { signIn, signOut, useSession } from 'next-auth/client'

const Login = () => {
  // here we just check if user is already logged in and redirect to profile
  const { mutateUser } = useUser({
    redirectTo: '/profile',
    redirectIfFound: true,
  })

  const [errorMsg, setErrorMsg] = useState('')
  const [session, loading] = useSession()

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault()

    const target = e.target as typeof e.target & {
      username: { value: string }
    }
    const body = target.username.value

    try {
      await mutateUser(
        fetcher('/api/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        })
      )
    } catch (error) {
      console.error('An unexpected error happened:', error)
      setErrorMsg(error.data.message)
    }
  }

  return (
    <>
      <div className='login'>
        <form onSubmit={handleSubmit}>
          <Typography gutterBottom>Type your GitHub username</Typography>
          <input type='text' name='username' required />

          <Button variant='contained' color='primary' type='submit'>
            Login
          </Button>

          {errorMsg && <Typography color='error'>{errorMsg}</Typography>}
        </form>

        <Button
          onClick={() => {
            signIn()
          }}
        >
          NextAuth Sign in
        </Button>
      </div>
      <style jsx>{`
        .login {
          max-width: 21rem;
          margin: 0 auto;
          padding: 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
      `}</style>
    </>
  )
}

export default Login
