import type { InferGetStaticPropsType } from 'next'
import { NextSeo } from 'next-seo'
import React, { ChangeEvent } from 'react'
import { BlogPost } from '@components/ui'
import {
  Grid,
  Typography,
  TextField,
  InputAdornment,
  makeStyles,
  Theme,
} from '@material-ui/core'
import { Search } from '@material-ui/icons'
import { getAllFilesFrontMatter } from '@lib/mdx'
import matter from 'gray-matter'
import { type } from 'os'
import fs from 'fs'
import path from 'path'

const root = process.cwd()

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: theme.spacing(10),
  },
  gridMargin: {
    marginTop: theme.spacing(15),
  },
  searchField: {
    marginTop: theme.spacing(5),
  },
}))

export default function Tools({
  tools,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const cn = useStyles()
  console.log(tools)

  return (
    <>
      <NextSeo
        title='Tools'
        description='Thoughts on the front-end development, programming, diet, fitness, coffee, and my personal life.'
      />
      <Grid container className={cn.root}>
        <Typography variant='h1' gutterBottom>
          Tools
        </Typography>

        <Typography variant='body1' gutterBottom>
          {`I love building tools that could assist me on various day-to-day task. In total, I've made {posts.length} published tools on this site. Use the search below to filter by title.`}
        </Typography>
      </Grid>

      <Grid container className={cn.gridMargin}>
        <Grid item>
          <Typography variant='h2' gutterBottom>
            All Tools
          </Typography>
        </Grid>

        {!tools.length && (
          <Grid item>
            <Typography variant='body1'>
              No tool found. Please let me know if you are interested to learn
              more about it.
            </Typography>
          </Grid>
        )}

        <Grid item>
          {tools.map((frontMatter: any) => (
            <BlogPost key={frontMatter.title} {...frontMatter} />
          ))}
        </Grid>
      </Grid>
    </>
  )
}
export async function getStaticProps() {
  // const tools = await getAllFilesFrontMatter('blog')
  const files = await fs.readdirSync(path.join(root, 'data/blog'))

  const tools = await files.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(
      path.join(root, 'data/blog', postSlug),
      'utf8'
    )
    const { data } = matter(source)

    return [
      {
        ...data,
        slug: postSlug.replace('.mdx', ''),
      },
      ...allPosts,
    ]
  }, [])

  return { props: { tools } }
}

// export async function getStaticPaths() {
//   const tools = await function () {
//     return fs.readdirSync(path.join(root, 'pages/blog', type))
//   }
//   return {
//     paths: tools.map((p) => ({
//       params: {
//         slug: p.replace(/\.mdx/, ''),
//       },
//     })),
//     fallback: false,
//   }
// }
