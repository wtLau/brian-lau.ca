import { Search } from '@mui/icons-material'
import { Grid, Typography, TextField, InputAdornment } from '@mui/material'
import { ChangeEvent, useState } from 'react'

import PageLayout from '@components/layout/PageLayout'
import { BlogPost } from '@components/ui'
import { BlogFrontMatterType, getAllFilesFrontMatter } from '@lib/mdx'

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
    <PageLayout
      title='Blog'
      description='Thoughts on the front-end development, programming, diet, fitness, coffee, and my personal life.'
    >
      <Grid container spacing={4}>
        <Grid item>
          <Typography variant='body1' gutterBottom>
            {`I care about web development, fitness, photography and personal growth. In total, I've written ${posts.length} articles on this site. Use the search below to filter by title.`}
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
        <Grid item container>
          <Grid item>
            <Typography variant='h2' gutterBottom>
              All Posts
            </Typography>
          </Grid>

          {!filteredBlogPosts.length && (
            <Grid item>
              <Typography variant='body1'>
                No posts found. Please let me know if you are interested to
                learn more about it.
              </Typography>
            </Grid>
          )}

          <Grid item>
            {filteredBlogPosts.map((frontMatter: BlogFrontMatterType) => (
              <BlogPost key={frontMatter.title} {...frontMatter} />
            ))}
          </Grid>
        </Grid>
      </Grid>
    </PageLayout>
  )
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}
