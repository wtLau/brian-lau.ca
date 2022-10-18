import { styled } from '@mui/material/styles'
import hydrate from 'next-mdx-remote/hydrate'
import { NextSeo } from 'next-seo'
import React, { useState, useEffect } from 'react'

import MDXComponents from '@components/blog/BlogContent'
import BlogLayout from '@components/layout/BlogLayout'
import { skillsData, TSkills } from '@data/skillsData'
import { getFileBySlug } from '@lib/mdx'

const PREFIX = 'Mentorship'

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

interface Props {
  mdxSource: any
  frontMatter: any
}

const Mentorship = ({ mdxSource, frontMatter }: Props) => {
  const [skills, setSkills] = useState<TSkills[]>([])

  const contents = hydrate(mdxSource, {
    components: MDXComponents,
  })

  useEffect(() => {
    setSkills(skillsData)
  }, [skills])

  return (
    <Root>
      <NextSeo
        title='Mentorship'
        description='A description of what I can provide with my mentorship'
      />
      <BlogLayout frontMatter={frontMatter}>{contents}</BlogLayout>
    </Root>
  )
}

export default Mentorship

export async function getStaticProps() {
  const post = await getFileBySlug({ type: '/blog/mentorship' })

  return { props: post }
}
