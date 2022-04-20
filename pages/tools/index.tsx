import fs from 'fs'
import path from 'path'

import { Grid, Typography, Theme } from '@mui/material'
import { styled } from '@mui/material/styles'
import makeStyles from '@mui/styles/makeStyles'
import type { InferGetStaticPropsType } from 'next'
import { NextSeo } from 'next-seo'
import React from 'react'

import ToolCard from '@components/tools/MacroCalculator/ToolCard'

const PREFIX = 'index'

const classes = {
  root: `${PREFIX}-root`,
  gridMargin: `${PREFIX}-gridMargin`,
}

// TODO jss-to-styled codemod: The Fragment root was replaced by div. Change the tag if needed.
const Root = styled('div')(({ theme }) => ({
  [`& .${classes.root}`]: {},

  [`& .${classes.gridMargin}`]: {
    marginTop: theme.spacing(15),
  },
}))

const root = process.cwd()

export default function Tools({
  tools,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(tools)
  return (
    <Root>
      <NextSeo
        title='Tools'
        description='Thoughts on the front-end development, programming, diet, fitness, coffee, and my personal life.'
      />
      <Grid container className={classes.root}>
        <Typography variant='h1' gutterBottom>
          Tools
        </Typography>

        <Typography variant='body1' gutterBottom>
          {`I love building tools that could assist me on various day-to-day task. In total, I've made ${tools.length} published tools on this site.`}
        </Typography>
      </Grid>
      <Typography variant='h2' gutterBottom className={classes.gridMargin}>
        All Tools
      </Typography>
      {!tools.length && (
        <Typography variant='body1'>
          No tool found. Please let me know if you are interested to learn more
          about it.
        </Typography>
      )}
      {tools.map(({ title, slug, ...rest }) => (
        <ToolCard key={slug} title={title} slug={slug} {...rest} />
      ))}
    </Root>
  )
}
export async function getStaticProps() {
  const files = await fs.readdirSync(path.join(root, 'pages/tools'))

  const tools = await files.reduce(
    (
      allTools: {
        slug: string
        title: string
      }[],
      toolsSlug
    ) => {
      const slug = toolsSlug.replace('.tsx', '')

      if (slug === 'index') return allTools

      return [
        {
          slug: slug.replace('.tsx', ''),
          title: slug.replace(/-/g, ' '),
        },
        ...allTools,
      ]
    },
    []
  )

  return { props: { tools } }
}
