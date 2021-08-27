import React, { useState, useEffect } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Typography, Button, Grid } from '@material-ui/core'
import Image from 'next/image'
import { Link } from '@components/ui'
import { getFiles, getFileBySlug } from '@lib/mdx'
import BlogLayout from '@components/blog/BlogLayout'
import MDXComponents from '@components/blog/BlogContent'
import hydrate from 'next-mdx-remote/hydrate'
import { skillsData, TSkills } from '@data/skillsData'
import { signIn, signOut, useSession } from 'next-auth/client'
import { NextSeo } from 'next-seo'
import Section5 from '@components/common/Landing/Section5'

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

interface Props {
  mdxSource: any
  frontMatter: any
}

const Mentorship = ({ mdxSource, frontMatter }: Props) => {
  const classes = useStyles()
  const [session] = useSession()
  const [skills, setSkills] = useState<TSkills[]>([])

  const contents = hydrate(mdxSource, {
    components: MDXComponents,
  })

  useEffect(() => {
    setSkills(skillsData)
  }, [skills])

  return (
    <>
      <NextSeo
        title='Mentorship'
        description='A description of what I can provide with my mentorship'
      />

      <BlogLayout frontMatter={frontMatter}>{contents}</BlogLayout>
    </>
  )
}

export default Mentorship

export async function getStaticProps({ params }: any) {
  const post = await getFileBySlug('/mentorship')

  return { props: post }
}
