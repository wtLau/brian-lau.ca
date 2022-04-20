import { Typography, Button, Grid } from '@mui/material'
import { styled } from '@mui/material/styles'
import makeStyles from '@mui/styles/makeStyles'
import { signIn, signOut, useSession } from 'next-auth/client'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'

import CompanyCard from '@components/CompanyCard'
import { HeadSeo } from '@components/HeadSeo'
import { Link } from '@components/ui'
import { companyData } from '@data/companyData'
import { skillsData, TSkills } from '@data/skillsData'

const PREFIX = 'About'

const classes = {
  title: `${PREFIX}-title`,
  backgroundimage: `${PREFIX}-backgroundimage`,
}

// TODO jss-to-styled codemod: The Fragment root was replaced by div. Change the tag if needed.
const Root = styled('div')(({ theme }) => ({
  [`& .${classes.title}`]: {
    flexGrow: 1,
    marginTop: theme.spacing(7),
  },

  [`& .${classes.backgroundimage}`]: {
    [theme.breakpoints.down('xl')]: {
      width: '100%',
      height: '100%',
    },
  },
}))

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
    <Root>
      <HeadSeo title='About' description='A little more about Brian Lau' />
      <Grid container spacing={8}>
        <Grid item className={classes.title}>
          <Typography variant='h1' gutterBottom>
            About
          </Typography>
          <Image
            src='/static/images/desktop-section1.png'
            width={584}
            height={484}
            priority={true}
            alt='portrait-image'
            className={classes.backgroundimage}
          />
          <Grid item xs={12}>
            <Typography paragraph>
              {session && `Hi, ${userName}.`} My name is Brian, and I am
              currently living in North Vancouver, Canada, with my beautiful
              corgi.
            </Typography>

            <Typography paragraph>
              Professionally, I am an web developer with an obsession for
              well-crafted design, building seamless experiences for users. I'm
              big on growth and teamwork. If we're gonna build the future, let's
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

          <Grid container justifyContent='center' spacing={1}>
            {skills &&
              skills.map((data) => (
                <Grid item key={data.name}>
                  <Link href={data.url ? data.url : '/'} target='_blank'>
                    <Button variant='text' size='small'>
                      {data.name}
                    </Button>
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
    </Root>
  )
}

export default About
