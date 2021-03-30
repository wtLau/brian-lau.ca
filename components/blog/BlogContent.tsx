import React, { AnchorHTMLAttributes, ReactNode } from 'react'
import Typography from '@material-ui/core/Typography'
import { Link } from '@components/ui'

import Image from 'next/image'

type Props = {
  children: ReactNode
  href?: any
}

const H1 = ({ children }: Props) => {
  return (
    <Typography variant='h1' gutterBottom style={{ marginTop: '3rem' }}>
      {children}
    </Typography>
  )
}

const H2 = ({ children }: Props) => {
  return (
    <Typography variant='h2' gutterBottom style={{ marginTop: '3rem' }}>
      {children}
    </Typography>
  )
}

const P = ({ children }: Props) => {
  return (
    <Typography variant='body1' paragraph gutterBottom>
      {children}
    </Typography>
  )
}

const mdxLink = ({ href, children }: Props) => {
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))
  if (isInternalLink) {
    return (
      <Link href={href} style={{ textDecorationLine: 'underline' }}>
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
  p: P,
}

export default MDXComponents
