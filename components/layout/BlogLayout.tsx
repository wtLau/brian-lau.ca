/* eslint-disable react/jsx-no-undef */
import { Typography, Grid } from '@mui/material'
import { styled } from '@mui/material/styles'
import { parseISO, format } from 'date-fns'
import Image from 'next/image'
import { ReactNode } from 'react'

import { Link } from '@components/ui'
import { BlogFrontMatterType } from '@lib/mdx'

import PageLayout from './PageLayout'
import { HOST } from '@lib/constants'
import Condition from '@components/common/Condition'

const ProfileImageStyled = styled(Image)({
  borderRadius: '50%',
  marginRight: '20px',
})

const editUrl = (slug: string) =>
  `https://github.com/wtLau/Portfolio-App/edit/production/data/blog/${slug}.mdx`

const discussUrl = (slug: string) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `https://brian-lau.ca/blog/${slug}`
  )}`

type Props = {
  children: ReactNode
  frontMatter: BlogFrontMatterType
}

export default function BlogLayout({ children, frontMatter }: Props) {
  let currentUrl = HOST
  if (typeof window !== 'undefined')
    currentUrl = `${HOST}${window.location.pathname}`

  return (
    <PageLayout title={frontMatter.title} description={frontMatter.summary}>
      <Grid item container>
        <Grid container direction='row' columnSpacing={2} xs={9}>
          <Grid item>
            <ProfileImageStyled
              alt='Brian Lau'
              height={35}
              width={35}
              src='/static/images/brian_square.jpg'
            />
          </Grid>
          <Grid item>
            <Typography color='textSecondary' variant='body1'>
              {`Brian Lau / ${format(
                parseISO(frontMatter.publishedAt),
                'MMMM dd, yyyy'
              )}`}
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={2}>
          <Typography color='textSecondary'>
            {frontMatter.readingTime.text}
            {/* {` • `} */}
            {/* <ViewCounter slug={frontMatter.slug} /> */}
          </Typography>
        </Grid>
        <Condition condition={Boolean(frontMatter.image)}>
          <Grid item>
            <Image
              alt={frontMatter.image_alt || ''}
              height={1620}
              width={2160}
              src={frontMatter.image || ''}
            />
          </Grid>
        </Condition>
      </Grid>

      <Grid item>{children}</Grid>

      <Grid item marginTop={10}>
        <Grid item>
          <Typography variant='caption' gutterBottom>
            If you find any bugs regarding this post, feel free to tweet me or
            make pull request!
          </Typography>
        </Grid>
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
    </PageLayout>
  )
}
