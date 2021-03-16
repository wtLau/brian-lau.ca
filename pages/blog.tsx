import { BlogPost } from '@components/ui'
import { getAllFilesFrontMatter } from '@lib/mdx'
import {
  Grid,
  Typography,
  makeStyles,
  Theme,
  TextField,
  InputAdornment,
} from '@material-ui/core'

import { Search } from '@material-ui/icons'
import { ChangeEvent, ReactHTMLElement, useState } from 'react'
import { NextSeo } from 'next-seo'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  gridMargin: {
    marginTop: theme.spacing(8),
  },
}))

export default function Blog({ posts }: any) {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts
    .sort(
      (a: any, b: any) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter((frontMatter: any) =>
      frontMatter.title.toLowerCase().includes(searchValue.toLowerCase())
    )

  const cn = useStyles()
  return (
    <>
      <NextSeo
        title='Blog'
        description='Thoughts on the front-end development, programming, diet, fitness, coffee, and my personal life.'
      />
      <Grid container className={cn.root}>
        <Typography component={'h1'} variant='h3' gutterBottom>
          Blog
        </Typography>

        <Typography variant='body1' gutterBottom>
          {`I care about web development, fitness, photography and personal growth.

            In total, I've written ${posts.length} articles on this site.
            Use the search below to filter by title.`}
        </Typography>

        <TextField
          variant='outlined'
          fullWidth
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSearchValue(e.target.value)
          }
          placeholder='Search articles'
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <Search />
              </InputAdornment>
            ),
          }}
        />

        {!searchValue && (
          <Grid item className={cn.gridMargin}>
            <Typography variant='h3' gutterBottom>
              Featured
            </Typography>
            <BlogPost
              title='About Me'
              summary='Learn more about me, here I am answering some personal question.'
              slug='about-me'
            />
          </Grid>
        )}

        <Grid item className={cn.gridMargin}>
          <Typography variant='h3' gutterBottom>
            All Posts
          </Typography>
          {!filteredBlogPosts.length && (
            <Typography variant='body1'>
              No posts found. Please let me know if you are interested to learn
              more about it.
            </Typography>
          )}
          {filteredBlogPosts.map((frontMatter: any) => (
            <BlogPost key={frontMatter.title} {...frontMatter} />
          ))}
        </Grid>
      </Grid>
    </>
  )
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}
