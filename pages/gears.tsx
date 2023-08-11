import { Typography, Grid } from '@mui/material'
import Image from 'next/image'
import React from 'react'

import PageLayout from '@components/layout/PageLayout'
import { Link } from '@components/ui'
import Condition from '@components/common/Condition'
import gearsData from '@data/toolsData'

const Gears = () => {
  const gearCategory = [...new Set(gearsData?.map((item) => item.type))]

  return (
    <PageLayout
      title='Gears'
      description="Here's a list of gears I am currently using for coding, writing and learning. They often get marginal upgrades based on my wish list!"
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
          {gearCategory?.map((type) => (
            <Grid item xs={12} key={type}>
              <Typography variant='h5' component={'h4'}>
                {type}
              </Typography>

              {gearsData.map(
                (ele) =>
                  ele.type === type && (
                    <Typography>
                      ‧ {ele.name}
                      <Condition condition={!!ele.link}>
                        {'  -  '}
                        <Link underline='always' href={ele.link as string}>
                          Link to goodies
                        </Link>
                      </Condition>
                    </Typography>
                  )
              )}
            </Grid>
          ))}
        </Grid>
      </Grid>
    </PageLayout>
  )
}

export default Gears
