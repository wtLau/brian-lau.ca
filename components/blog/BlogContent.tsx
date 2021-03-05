import React from 'react'
import Typography from '@material-ui/core/Typography'
import { Link } from '@components/ui'

import Image from 'next/image'

const H1 = ({ children }) => {
  return (
    <Typography
      variant='h3'
      gutterBottom
      component={'h1'}
    >
      {children}
    </Typography>
  )
}

const H2 = ({ children }) => {
  return (
    <Typography
      variant='h4'
      component={'h2'}
      gutterBottom
    >
      {children}
    </Typography>
  )
}

const P = ({ children }) => {
  return (
    <Typography
      variant='body1'
      paragraph
      gutterBottom
    >
      {children}
    </Typography>
  )
}

const MDXComponents = {
  Image,
  a: Link,
  h1: H1,
  h2: H2,
  p: P,
}

export default MDXComponents
