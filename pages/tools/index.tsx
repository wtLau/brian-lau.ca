import type { InferGetStaticPropsType } from 'next'
import { NextSeo } from 'next-seo'
import React from 'react'
import { BlogPost } from '@components/ui'
import { Grid, Typography, makeStyles, Theme } from '@material-ui/core'
import matter from 'gray-matter'
import fs from 'fs'
import path from 'path'
import ToolCard from '@components/tools/MacroCalculator/ToolCard'

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

        {tools.map((tool: string) => (
          <Grid item>
            <ToolCard key={tool} slug={tool} {...tool} />
          </Grid>
        ))}
      </Grid>
    </>
  )
}
export async function getStaticProps() {
  const files = await fs.readdirSync(path.join(root, 'pages/tools'))

  const tools = await files.reduce((allPosts, toolsSlug) => {
    const slug = toolsSlug.replace('.tsx', '')

    if (slug === 'index') return [...allPosts]

    return [
      {
        slug: toolsSlug.replace('.tsx', ''),
      },
      ...allPosts,
    ]
  }, [])

  return { props: { tools } }
}
