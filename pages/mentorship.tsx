import hydrate from 'next-mdx-remote/hydrate'
import React, { useState, useEffect } from 'react'

import MDXComponents from '@components/blog/BlogContent'
import BlogLayout from '@components/layout/BlogLayout'
import { skillsData, TSkills } from '@data/skillsData'
import { BlogFrontMatterType, getFileBySlug, MdxSourceType } from '@lib/mdx'

interface Props {
  mdxSource: MdxSourceType
  frontMatter: BlogFrontMatterType
}

const Mentorship = ({ mdxSource, frontMatter }: Props) => {
  const [skills, setSkills] = useState<TSkills[]>([])

  const contents = hydrate(mdxSource, {
    components: MDXComponents,
  })

  useEffect(() => {
    setSkills(skillsData)
  }, [skills])

  return <BlogLayout frontMatter={frontMatter}>{contents}</BlogLayout>
}

export default Mentorship

export async function getStaticProps() {
  const post = await getFileBySlug({ type: '/blog/mentorship' })

  return { props: post }
}
