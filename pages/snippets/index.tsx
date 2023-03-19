import { Search } from '@mui/icons-material'
import { Grid, Typography, TextField, InputAdornment } from '@mui/material'
import { ChangeEvent, useState } from 'react'

import PageLayout from '@components/layout/PageLayout'
import { BlogFrontMatterType, getAllFilesFrontMatter } from '@lib/mdx'
import PostList from '@components/PostList'
import Condition from '@components/common/Condition'

export default function Snippets({ snippets }: any) {
  const [searchValue, setSearchValue] = useState('')

  const filteredBlogsnippets = snippets
    .sort(
      (a: any, b: any) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter((frontMatter: any) =>
      frontMatter.title.toLowerCase().includes(searchValue.toLowerCase())
    )

  return (
    <PageLayout
      title='Snippets'
      description='Useful snippets that I would love to share with the community!'
    >
      <Grid container spacing={4}>
        <Grid item xs>
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
        <Grid item container direction='column'>
          <Grid item>
            <Typography variant='h2' gutterBottom>
              All Snippets
            </Typography>
          </Grid>

          <Condition condition={!filteredBlogsnippets.length}>
            <Grid item>
              <Typography variant='body1'>
                No snippets found. Please let me know if you are interested to
                learn more about it.
              </Typography>
            </Grid>
          </Condition>

          <Grid item container direction='column'>
            {filteredBlogsnippets.map((frontMatter: BlogFrontMatterType) => (
              <Grid item key={frontMatter.title}>
                <PostList
                  title={frontMatter.title}
                  summary={frontMatter.summary}
                  href={`/snippets/${frontMatter.slug}`}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </PageLayout>
  )
}

export async function getStaticProps() {
  const snippets = await getAllFilesFrontMatter('snippets')

  return { props: { snippets } }
}
