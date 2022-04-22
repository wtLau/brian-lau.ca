import fs from 'fs'
import path from 'path'

import { Stack, Typography } from '@mui/material'
import type { InferGetStaticPropsType } from 'next'
import React from 'react'

import ToolCard from '@components/tools/MacroCalculator/ToolCard'
import { HeadSeo } from '@components/HeadSeo'

export default function Tools({
  tools,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <HeadSeo
        title='Tools'
        description={`I love building tools that could assist me on various day-to-day task. In total, I've made ${tools.length} published tools on this site.`}
      />
      <Typography variant='h2' marginTop={10} gutterBottom>
        All Tools
      </Typography>

      {!tools.length && (
        <Typography variant='body1'>
          No tool found. Please let me know if you are interested to learn more
          about it.
        </Typography>
      )}

      <Stack spacing={2}>
        {tools.map(({ title, slug, ...rest }) => (
          <ToolCard key={slug} title={title} slug={slug} {...rest} />
        ))}
      </Stack>
    </>
  )
}
export async function getStaticProps() {
  const files = await fs.readdirSync(path.join('pages/tools'))

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
