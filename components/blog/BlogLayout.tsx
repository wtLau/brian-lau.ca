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

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    marginBottom: theme.spacing(10),
  },
  profile: {
    borderRadius: '50%',
  },
}))

export default function BlogLayout({ children, frontMatter }: Props) {
  const classes = useStyles()
  return (
    <article>
      <Typography variant='h1' paragraph>
        {frontMatter.title}
      </Typography>
      <Grid
        container
        spacing={2}
        alignItems='center'
        className={classes.header}
      >
        <Grid item>
          <Image
            alt='Brian Lau'
            height={35}
            width={35}
            src='/static/images/brian_square.jpg'
            className={classes.profile}
          />
        </Grid>
        <Grid item xs={9}>
          <Typography color='textSecondary'>
            {frontMatter.by}
            {'Brian Lau / '}
            {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}
          </Typography>
        </Grid>
        <Grid item xs>
          <Typography color='textSecondary'>
            {frontMatter.readingTime.text}
            {/* {` • `} */}
            {/* <ViewCounter slug={frontMatter.slug} /> */}
          </Typography>
        </Grid>
        <Grid item>
          <Image
            alt={frontMatter.image_alt}
            height={1620}
            width={2160}
            src={frontMatter.image}
          />
        </Grid>
      </Grid>
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
