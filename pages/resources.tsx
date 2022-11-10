import { Grid, Typography } from '@mui/material'
import React from 'react'

import PageLayout from '@components/layout/PageLayout'
import { resources, resourceType } from '@data/resources'
import PostList from '@components/PostList'

const Resources = () => {
  const recomendList = resources.filter((list) => list.recommended === true)
  const allList = resources.filter((list) => !list.recommended)
  return (
    <PageLayout
      title='Resources'
      description='A little library of public knowledge.'
    >
      <Grid container spacing={4}>
        <Grid item container direction='column'>
          <Grid item>
            <Typography variant='h2' gutterBottom>
              Recommended
            </Typography>
          </Grid>

          {!recomendList.length && (
            <Grid item>
              <Typography variant='body1'>
                No recommended found. Please let me know if you are interested
                to learn more about it.
              </Typography>
            </Grid>
          )}
          {recomendList.map((resource: resourceType) => (
            <Grid item key={resource.title}>
              <PostList
                title={resource.title}
                summary={resource.summary}
                href={resource.url}
              />
            </Grid>
          ))}
        </Grid>
        <Grid item container direction='column'>
          <Grid item>
            <Typography variant='h2' gutterBottom>
              All List
            </Typography>
          </Grid>

          {!allList.length && (
            <Grid item>
              <Typography variant='body1'>
                No posts found. Please let me know if you are interested to
                learn more about it.
              </Typography>
            </Grid>
          )}
          {allList.map((resource: resourceType) => (
            <Grid item key={resource.title}>
              <PostList
                title={resource.title}
                summary={resource.summary}
                href={resource.url}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </PageLayout>
  )
}

export default Resources
