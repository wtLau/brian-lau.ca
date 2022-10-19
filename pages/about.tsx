import { Typography, Button, Grid } from '@mui/material'
import { useSession } from 'next-auth/client'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'

import CompanyCard from '@components/CompanyCard'
import PageLayout from '@components/layout/PageLayout'
import { Link } from '@components/ui'
import { companyData } from '@data/companyData'
import { skillsData, TSkills } from '@data/skillsData'

const About = () => {
  const [session] = useSession()
  const [skills, setSkills] = useState<TSkills[]>([])
  const userName = session?.user?.name || 'stranger'

  useEffect(() => {
    setSkills(skillsData)
  }, [skills])

  const previousCompanies = companyData.filter((company) => !company.current)
  const currentCompany = companyData.find((company) => company.current === true)

  return (
    <PageLayout
      title='About'
      description='
            Brian Lau is a Front-End Developer at
            Data.ai, where he helps building data visualization products on the web. Lau is also known as an
            educator, writer, and mentor.
          '
    >
      <Grid container spacing={8}>
        <Grid item>
          <Image
            src='/static/images/desktop-section1.png'
            width={584}
            height={484}
            priority={true}
            alt='portrait-image'
          />
          <Grid item xs={12}>
            <Typography paragraph>
              {session && `Hi, ${userName}.`} My name is Brian, and I am
              currently living in North Vancouver, Canada.
            </Typography>

            <Typography paragraph>
              Professionally, I am an web developer with an obsession for
              well-crafted design, building seamless experiences for users. I am
              big on growth and teamwork. If we are gonna build the future, lets
              have some fun doing it!
            </Typography>

            <Typography paragraph>
              When I am not in front of computer, I spend my time body building,
              making pour-over coffee, and enjoying time with friends and family
              in Vancouver.
            </Typography>
          </Grid>
        </Grid>

        <Grid item>
          <Typography variant='h2' gutterBottom>
            Interested In
          </Typography>

          <Grid container justifyContent='center' spacing={2}>
            {skills &&
              skills.map((data) => (
                <Grid item key={data.name}>
                  <Link href={data.url ? data.url : '/'} target='_blank'>
                    {data.name}
                  </Link>
                </Grid>
              ))}
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Typography variant='h2' gutterBottom>
            Footprint
          </Typography>
          <iframe
            src='https://www.google.com/maps/d/embed?mid=11fk358gCbvrJrgluq7zidFOMMv1CieaA&z=2'
            width='100%'
            height='680'
            title='travel map'
          />
        </Grid>
        <Grid item xs={12}>
          {currentCompany ? (
            <>
              <Typography variant='h3' component='h2' gutterBottom>
                Currently At
              </Typography>

              <CompanyCard company={currentCompany} />
            </>
          ) : null}
        </Grid>
        <Grid item xs={12}>
          <Typography variant='h3' component='h2' gutterBottom>
            Previous Experiences
          </Typography>
          <Grid spacing={4} container>
            {previousCompanies.map((previousCompany) => (
              <CompanyCard
                company={previousCompany}
                key={previousCompany.name}
              />
            ))}
          </Grid>
        </Grid>
      </Grid>
    </PageLayout>
  )
}

export default About
