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
import {
  ChangeEvent,
  ReactHTMLElement,
  useState,
} from 'react'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  gridMargin: {
    marginTop: theme.spacing(8),
  },
}))

export default function Blog({ posts }: any) {
  const [searchValue, setSearchValue] = useState(
    ''
  )
  const filteredBlogPosts = posts
    .sort(
      (a: any, b: any) =>
        Number(new Date(b.publishedAt)) -
        Number(new Date(a.publishedAt))
    )
    .filter((frontMatter: any) =>
      frontMatter.title
        .toLowerCase()
        .includes(searchValue.toLowerCase())
    )

  const cn = useStyles()
  return (
    <Grid container className={cn.root}>
      <Typography
        component={'h1'}
        variant='h3'
        gutterBottom
      >
        Blog
      </Typography>

      <Typography variant='body1' gutterBottom>
        {`I write mostly about web development, fitness and personal blogs.
            In total, I've written ${posts.length} articles on this site.
            Use the search below to filter by title.`}
      </Typography>

      <TextField
        variant='outlined'
        fullWidth
        onChange={(
          e: ChangeEvent<HTMLInputElement>
        ) => setSearchValue(e.target.value)}
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
            title='Everything I Know About Style Guides, Design Systems, and Component Libraries'
            summary="A deep-dive on everything I've learned in the past year building style guides, design systems, component libraries, and their best practices."
            slug='style-guides-component-libraries-design-systems'
          />
          <BlogPost
            title='How Stripe Designs Beautiful Websites'
            summary="Examining the tips and tricks used to make Stripe's website design a notch above the rest."
            slug='how-stripe-designs-beautiful-websites'
          />
          <BlogPost
            title='Creating a Monorepo with Lerna & Yarn Workspaces'
            summary='In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process.'
            slug='monorepo-lerna-yarn-workspaces'
          />
        </Grid>
      )}

      <Grid item className={cn.gridMargin}>
        <Typography variant='h3' gutterBottom>
          All Posts
        </Typography>
        {!filteredBlogPosts.length && (
          <Typography variant='body1'>
            No posts found. Please let me know if
            you are interested to learn more about
            it.
          </Typography>
        )}
        {filteredBlogPosts.map(
          (frontMatter: any) => (
            <BlogPost
              key={frontMatter.title}
              {...frontMatter}
            />
          )
        )}
      </Grid>
    </Grid>
  )
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter(
    'blog'
  )

  return { props: { posts } }
}
