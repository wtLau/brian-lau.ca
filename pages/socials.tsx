import React, { FC } from 'react'
import { Grid, Typography } from '@mui/material'

import PageLayout from '@components/layout/PageLayout'
import { SocialData } from '@data/SocialData'

import PostList from '@components/PostList'

export default function Socials() {
  return (
    <PageLayout
      title='Socials'
      description='This is a page where it contains all my social for connecting with people.'
    >
      {SocialData.map(({ name, link, description }) => (
        <Grid item key={name}>
          <PostList title={name} summary={description} href={link} />
        </Grid>
      ))}
    </PageLayout>
  )
}
