import hydrate from 'next-mdx-remote/hydrate'
import { NextSeo } from 'next-seo'
import React from 'react'

import MDXComponents from '@components/blog/BlogContent'
import BlogLayout from '@components/layout/BlogLayout'
import {
  getFiles,
  getFileBySlug,
  BlogFrontMatterType,
  MdxSourceType,
} from '@lib/mdx'

type Props = {
  mdxSource: MdxSourceType
  frontMatter: BlogFrontMatterType
}

export default function Snippet({ mdxSource, frontMatter }: Props) {
  const contents = hydrate(mdxSource, {
    components: MDXComponents,
  })

  return (
    <>
      <NextSeo
        title={`Snippet- ${frontMatter.title}`}
        description={frontMatter.summary}
        openGraph={{
          type: 'website',
          title: frontMatter.title,
          description: frontMatter.summary,
          images: [
            {
              url: frontMatter.image || '',
              width: 800,
              height: 600,
              alt: frontMatter.title,
            },
          ],
        }}
      />
      <BlogLayout frontMatter={frontMatter}>{contents}</BlogLayout>
    </>
  )
}

export async function getStaticPaths() {
  const posts = await getFiles('snippets')

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ''),
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }: any) {
  try {
    const post = await getFileBySlug({ type: 'snippets', slug: params.slug })
    return { props: post }
  } catch (e) {
    console.error(e)
  }
}
