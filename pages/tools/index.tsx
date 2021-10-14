import type { InferGetStaticPropsType } from 'next'
import { NextSeo } from 'next-seo'
import React from 'react'
import { Grid, Typography, makeStyles, Theme } from '@material-ui/core'
import fs from 'fs'
import path from 'path'
import ToolCard from '@components/tools/MacroCalculator/ToolCard'

const root = process.cwd()

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  gridMargin: {
    marginTop: theme.spacing(15),
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

      <Typography variant='h2' gutterBottom className={cn.gridMargin}>
        All Tools
      </Typography>

      {!tools.length && (
        <Typography variant='body1'>
          No tool found. Please let me know if you are interested to learn more
          about it.
        </Typography>
      )}

      {tools.map((tool: string) => (
        <ToolCard key={tool} slug={tool} {...tool} />
      ))}
    </>
  )
}
export async function getStaticProps() {
  const files = await fs.readdirSync(path.join(root, 'pages/tools'))

  const tools = await files.reduce((allPosts, toolsSlug) => {
    const slug = toolsSlug.replace('.tsx', '')

    if (slug === 'index') return [...allPosts]

    return {
      slug: slug.replace('.tsx', ''),
      ...allPosts,
    }
  }, [])

  return { props: { tools } }
}
