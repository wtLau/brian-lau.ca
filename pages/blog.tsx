import { Search } from '@mui/icons-material'
import {
  Grid,
  Typography,
  Theme,
  TextField,
  InputAdornment,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import makeStyles from '@mui/styles/makeStyles'
import { NextSeo } from 'next-seo'
import { ChangeEvent, ReactHTMLElement, useState } from 'react'

import { BlogPost } from '@components/ui'
import { getAllFilesFrontMatter } from '@lib/mdx'

const PREFIX = 'blog'

const classes = {
  root: `${PREFIX}-root`,
  gridMargin: `${PREFIX}-gridMargin`,
  searchField: `${PREFIX}-searchField`,
}

// TODO jss-to-styled codemod: The Fragment root was replaced by div. Change the tag if needed.
const Root = styled('div')(({ theme }) => ({
  [`& .${classes.root}`]: {},

  [`& .${classes.gridMargin}`]: {
    marginTop: theme.spacing(15),
  },

  [`& .${classes.searchField}`]: {
    marginTop: theme.spacing(5),
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

  return (
    <Root>
      <NextSeo
        title='Blog'
        description='Thoughts on the front-end development, programming, diet, fitness, coffee, and my personal life.'
      />
      <Grid container className={classes.root}>
        <Typography variant='h1' gutterBottom>
          Blog
        </Typography>

        <Typography variant='body1' gutterBottom>
          {`I care about web development, fitness, photography and personal growth. In total, I've written ${posts.length} articles on this site. Use the search below to filter by title.`}
        </Typography>

        <TextField
          variant='outlined'
          className={classes.searchField}
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
      </Grid>
      {/* {!searchValue && (
          <Grid item className={classes.gridMargin}>
            <Typography variant='h3' gutterBottom>
              Featured
            </Typography>
            <BlogPost
              title='About Me'
              summary='Learn more about me, here I am answering some personal question.'
              slug='about-me'
            />
          </Grid>
        )} */}
      <Grid container className={classes.gridMargin}>
        <Grid item>
          <Typography variant='h2' gutterBottom>
            All Posts
          </Typography>
        </Grid>

        {!filteredBlogPosts.length && (
          <Grid item>
            <Typography variant='body1'>
              No posts found. Please let me know if you are interested to learn
              more about it.
            </Typography>
          </Grid>
        )}

        <Grid item>
          {filteredBlogPosts.map((frontMatter: any) => (
            <BlogPost key={frontMatter.title} {...frontMatter} />
          ))}
        </Grid>
      </Grid>
    </Root>
  )
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}
