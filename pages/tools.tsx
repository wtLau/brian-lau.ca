import { Typography, Grid } from '@mui/material'
import Image from 'next/image'
import React from 'react'

import PageLayout from '@components/layout/PageLayout'
import toolsData from '@data/toolsData'

const Tools = () => {
  const toolsTypeList = new Set(toolsData.map((ele) => ele.type))

  return (
    <PageLayout
      title='Tools'
      description="Here's a list of tools I am currently using for coding, writing and learning. They often get marginal upgrades based on my wish list!"
    >
      <Grid container spacing={8}>
        <Grid item>
          <Image
            src='/static/images/desk.jpeg'
            width={1706}
            height={1280}
            layout='intrinsic'
            priority={true}
            alt='portrait-image'
          />
        </Grid>
        <Grid container item xs={12} spacing={4}>
          {[...toolsTypeList].map((type) => (
            <Grid item xs={12} key={type}>
              <Typography variant='h3'>{type}</Typography>
              {toolsData.map(
                (ele) =>
                  ele.type === type && <Typography>‧ {ele.name}</Typography>
              )}
            </Grid>
          ))}
        </Grid>
      </Grid>
    </PageLayout>
  )
}

export default Tools
