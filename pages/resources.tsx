import { Grid } from '@mui/material'
import React, { useState, useEffect } from 'react'

import PageLayout from '@components/layout/PageLayout'
import { Link } from '@components/ui'
import { resources, resourceType } from '@data/resources'
import { skillsData, TSkills } from '@data/skillsData'
import PostList from '@components/PostList'

const Resources = () => {
  return (
    <PageLayout
      title='Resources'
      description='A little library of my knowledge collections.'
    >
      <Grid item container direction='column'>
        {resources.map((resource: resourceType) => (
          <Grid item key={resource.title}>
            <PostList title={resource.title} summary='' href={resource.url} />
          </Grid>
        ))}
      </Grid>
    </PageLayout>
  )
}

export default Resources
