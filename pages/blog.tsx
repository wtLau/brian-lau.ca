import { BlogPost } from '@components/ui'
import { getAllFilesFrontMatter } from '@lib/mdx'
import {
  Grid,
  Typography,
  makeStyles,
  Theme,
} from '@material-ui/core'
import { useState } from 'react'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
}))

export default function Blog({ posts }) {
  const [searchValue, setSearchValue] = useState(
    ''
  )
  const filteredBlogPosts = posts
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) -
        Number(new Date(a.publishedAt))
    )
    .filter((frontMatter) =>
      frontMatter.title
        .toLowerCase()
        .includes(searchValue.toLowerCase())
    )

  const cn = useStyles()
  return (
    <Grid container className={cn.root}>
      <Grid
        item
        component={Typography}
        variant='h1'
      >
        Blog
      </Grid>
      <Grid
        item
        component={Typography}
        variant='body1'
      >
        {`I've been writing online since 2014, mostly about web development and tech careers.
            In total, I've written ${posts.length} articles on this site.
            Use the search below to filter by title.`}
      </Grid>

      <div>
        <input
          type='text'
          onChange={(e) =>
            setSearchValue(e.target.value)
          }
          placeholder='Search articles'
        />
      </div>

      {!searchValue && (
        <>
          <h3>Featured</h3>
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
        </>
      )}
      <Typography variant='h3'>
        All Posts
      </Typography>
      {!filteredBlogPosts.length && (
        <Typography variant='body1'>
          No posts found.
        </Typography>
      )}
      {filteredBlogPosts.map((frontMatter) => (
        <BlogPost
          key={frontMatter.title}
          {...frontMatter}
        />
      ))}
    </Grid>
  )
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter(
    'blog'
  )

  return { props: { posts } }
}
