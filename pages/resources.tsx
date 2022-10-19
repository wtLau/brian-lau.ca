import { Grid } from '@mui/material'
import React, { useState, useEffect } from 'react'

import PageLayout from '@components/layout/PageLayout'
import { Link, ColumnListItem } from '@components/ui'
import { resources } from '@data/resources'
import { skillsData, TSkills } from '@data/skillsData'

const About = () => {
  const [skills, setSkills] = useState<TSkills[]>([])

  useEffect(() => {
    setSkills(skillsData)
  }, [skills])

  return (
    <PageLayout
      title='Resources'
      description='A little library of my knowledge collections.'
    >
      <Grid item xs={12}>
        {resources.map((resource) => (
          <Link href={resource.url} key={resource.id}>
            <ColumnListItem title={resource.title} />
          </Link>
        ))}
      </Grid>
    </PageLayout>
  )
}

export default About
