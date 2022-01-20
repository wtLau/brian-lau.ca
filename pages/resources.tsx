import React, { useState, useEffect } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Typography, Button, Grid } from '@material-ui/core'
import Image from 'next/image'
import { Link } from '@components/ui'

import { skillsData, TSkills } from '@data/skillsData'
import { signIn, signOut, useSession } from 'next-auth/client'
import { NextSeo } from 'next-seo'
import Section5 from '@components/common/Landing/Section5'
import { resources } from '@data/resources'
import { ColumnListItem } from '@components/ui'

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    marginTop: theme.spacing(17),
  },
  backgroundimage: {
    [theme.breakpoints.down('md')]: {
      width: '100%',
      height: '100%',
    },
  },
  container: {
    margin: theme.spacing(10, 0),
  },
}))

const About = () => {
  const classes = useStyles()
  const [session] = useSession()
  const [skills, setSkills] = useState<TSkills[]>([])

  useEffect(() => {
    setSkills(skillsData)
  }, [skills])

  return (
    <>
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
          <ColumnListItem link={resource.url} title={resource.title} />
        ))}
      </Grid>
    </>
  )
}

export default About
