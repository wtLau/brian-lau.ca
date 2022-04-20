import { Typography, Button, Grid } from '@mui/material'
import { styled } from '@mui/material/styles'
import makeStyles from '@mui/styles/makeStyles'
import { signIn, signOut, useSession } from 'next-auth/client'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'

import { Link, ColumnListItem } from '@components/ui'
import { resources } from '@data/resources'
import { skillsData, TSkills } from '@data/skillsData'

const PREFIX = 'About'

const classes = {
  title: `${PREFIX}-title`,
  backgroundimage: `${PREFIX}-backgroundimage`,
  container: `${PREFIX}-container`,
}

// TODO jss-to-styled codemod: The Fragment root was replaced by div. Change the tag if needed.
const Root = styled('div')(({ theme }) => ({
  [`& .${classes.title}`]: {
    flexGrow: 1,
    marginTop: theme.spacing(17),
  },

  [`& .${classes.backgroundimage}`]: {
    [theme.breakpoints.down('xl')]: {
      width: '100%',
      height: '100%',
    },
  },

  [`& .${classes.container}`]: {
    margin: theme.spacing(10, 0),
  },
}))

const About = () => {
  const [session] = useSession()
  const [skills, setSkills] = useState<TSkills[]>([])

  useEffect(() => {
    setSkills(skillsData)
  }, [skills])

  return (
    <Root>
      <NextSeo
        title='Resources'
        description='A little library of my knowledge collections.'
      />
      <Grid container className={classes.title}>
        <Typography variant='h1' gutterBottom>
          Resources
        </Typography>
      </Grid>
      <Grid item xs={12} className={classes.container}>
        {resources.map((resource) => (
          <Link href={resource.url}>
            <ColumnListItem title={resource.title} />
          </Link>
        ))}
      </Grid>
    </Root>
  )
}

export default About
