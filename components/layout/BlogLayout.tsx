import Image from 'next/image'
import { parseISO, format } from 'date-fns'

import BlogContent from '../blog/BlogContent'
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
    marginRight: '1rem',
  },
  content: {
    margin: '2.5rem 0',
  },
}))

export default function BlogLayout({ children, frontMatter }: Props) {
  const classes = useStyles()
  return (
    <article>
      <Grid container className={classes.header}>
        <Grid item>
          <Typography variant='h1' gutterBottom>
            {frontMatter.title}
          </Typography>
        </Grid>

        <Grid item container>
          <Grid container item xs={9}>
            <div className={classes.profile}>
              <Image
                alt='Brian Lau'
                height={35}
                width={35}
                src='/static/images/brian_square.jpg'
                className={classes.profile}
              />
            </div>
            <Typography color='textSecondary'>
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
        </Grid>

        {frontMatter.image && (
          <Grid item>
            <Image
              alt={frontMatter.image_alt}
              height={1620}
              width={2160}
              src={frontMatter.image}
            />
          </Grid>
        )}
        <Grid item className={classes.content}>
          {children}
        </Grid>

        <Grid item>
          <div>
            <Typography variant='caption' gutterBottom>
              I am still learning how to interact on the internet. If you find
              any problem or issue regarding this post, feel free to tweet me or
              make pull request!
            </Typography>
          </div>
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
        </Grid>
      </Grid>
    </article>
  )
}
