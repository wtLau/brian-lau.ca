import Image from 'next/image'
import { parseISO, format } from 'date-fns'

import BlogContent from './BlogContent'
import { Typography, makeStyles, Theme, Grid } from '@material-ui/core'
import { Link } from '@components/ui'
import { ReactNode } from 'react'

const editUrl = (slug: string) =>
  `https://github.com/wtLau/Portfolio-App/edit/development/data/blog/${slug}.mdx`

const discussUrl = (slug: string) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `https://brian-lau.ca/blog/${slug}`
  )}`

type Props = {
  children: ReactNode
  frontMatter: any
}

export default function BlogLayout({ children, frontMatter }: Props) {
  return (
    <article>
      <Typography variant='h6' gutterBottom>
        {frontMatter.title}
      </Typography>
      <Grid className='flex items-center'>
        <Image
          alt='Brian Lau'
          height={24}
          width={24}
          src='/static/images/brian_square.jpg'
          className='rounded-full'
        />
        <Typography>
          {frontMatter.by}
          {'Brian Lau / '}
          {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}
        </Typography>
      </Grid>
      <Typography>
        {frontMatter.readingTime.text}
        {` • `}
        {/* <ViewCounter slug={frontMatter.slug} /> */}
      </Typography>

      {children}

      {/* <Subscribe /> */}
      <Link
        href={discussUrl(frontMatter.slug)}
        target='_blank'
        rel='noopener noreferrer'
      >
        {'Discuss on Twitter'}
      </Link>
      {` • `}
      <Link
        href={editUrl(frontMatter.slug)}
        target='_blank'
        rel='noopener noreferrer'
      >
        {'Edit on GitHub'}
      </Link>
    </article>
  )
}
