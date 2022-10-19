import Typography from '@mui/material/Typography'
import Image from 'next/image'
import React, { ReactNode } from 'react'

import { Link } from '@components/ui'

type Props = {
  children: ReactNode
  href?: any
}

const H1 = ({ children }: Props) => {
  return (
    <Typography
      variant='h1'
      gutterBottom
      style={{
        marginTop: '3rem',
        marginBottom: '2rem',
      }}
    >
      {children}
    </Typography>
  )
}

const H2 = ({ children }: Props) => {
  return (
    <Typography
      variant='h2'
      gutterBottom
      style={{
        marginTop: '3rem',
        marginBottom: '2rem',
      }}
    >
      {children}
    </Typography>
  )
}

const H3 = ({ children }: Props) => {
  return (
    <Typography
      variant='h3'
      gutterBottom
      style={{
        marginTop: '3rem',
        marginBottom: '2rem',
      }}
    >
      {children}
    </Typography>
  )
}

const H4 = ({ children }: Props) => {
  return (
    <Typography
      variant='h4'
      gutterBottom
      style={{
        marginTop: '3rem',
        marginBottom: '2rem',
      }}
    >
      {children}
    </Typography>
  )
}

const P = ({ children }: Props) => {
  return (
    <Typography
      variant='body1'
      paragraph
      gutterBottom
      style={{ margin: '1rem 0' }}
    >
      {children}
    </Typography>
  )
}

const mdxLink = ({ href, children }: Props) => {
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))
  if (isInternalLink) {
    return (
      <Link
        href={href}
        style={{
          textDecorationLine: 'underline',
        }}
      >
        {children}
      </Link>
    )
  }

  return (
    <Link
      href={href}
      style={{ textDecorationLine: 'underline' }}
      target='blank'
    >
      {children}
    </Link>
  )
}

const MDXComponents = {
  Image,
  a: mdxLink,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  p: P,
}

export default MDXComponents
