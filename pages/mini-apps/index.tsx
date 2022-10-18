import fs from 'fs'
import path from 'path'

import { Grid, Stack, Typography } from '@mui/material'
import type { InferGetStaticPropsType } from 'next'
import React from 'react'

import PageLayout from '@components/layout/PageLayout'
import ToolCard from '@components/tools/MacroCalculator/ToolCard'

export default function MiniApps({
  apps,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <PageLayout
      title='Mini Apps'
      description={`I love building apps that could assist me on various day-to-day task. In total, I've made ${apps.length} published tools on this site.`}
    >
      <Grid item>
        <Typography variant='h2' marginTop={10} gutterBottom>
          All Mini Apps
        </Typography>
        {!apps.length && (
          <Typography variant='body1'>
            No app found. Please let me know if you are interested to learn more
            about it.
          </Typography>
        )}
      </Grid>

      <Grid item>
        <Stack spacing={2}>
          {apps.map(({ title, slug, ...rest }) => (
            <ToolCard key={slug} title={title} slug={slug} {...rest} />
          ))}
        </Stack>
      </Grid>
    </PageLayout>
  )
}
export async function getStaticProps() {
  const appsFile = await fs.readdirSync(path.join('pages/mini-apps'))
  const apps = await appsFile.reduce(
    (
      allApps: {
        slug: string
        title: string
      }[],
      appsSlug
    ) => {
      const slug = appsSlug.replace('.tsx', '')

      if (slug === 'index') return allApps

      return [
        {
          slug: slug.replace('.tsx', ''),
          title: slug.replace(/-/g, ' '),
        },
        ...allApps,
      ]
    },
    []
  )

  return { props: { apps } }
}
