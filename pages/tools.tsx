import { Typography, Grid } from '@mui/material'
import { styled } from '@mui/material/styles'
import Image from 'next/image'
import React from 'react'

import { HeadSeo } from '@components/HeadSeo'
import toolsData from '@data/toolsData'

const PREFIX = 'About'

const classes = {
  title: `${PREFIX}-title`,
  backgroundimage: `${PREFIX}-backgroundimage`,
}

const Root = styled('div')(({ theme }) => ({
  [`& .${classes.title}`]: {
    flexGrow: 1,
    marginTop: theme.spacing(7),
  },
}))

const Tools = () => {
  const toolsTypeList = new Set(toolsData.map((ele) => ele.type))

  return (
    <Root>
      <HeadSeo
        title='Tools'
        description="Here's a list of tools I am currently using for coding, writing and learning. They often get marginal upgrades based on my wish list!"
      />
      <Grid container spacing={8}>
        <Grid item className={classes.title}>
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
            <Grid item xs={12}>
              <Typography variant='h3'>{type}</Typography>
              {toolsData.map(
                (ele) =>
                  ele.type === type && <Typography>‧ {ele.name}</Typography>
              )}
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Root>
  )
}

export default Tools
