import { getFiles, getFileBySlug } from '@lib/mdx'
import BlogLayout from '@components/layout/BlogLayout'
import MDXComponents from '@components/blog/BlogContent'
import hydrate from 'next-mdx-remote/hydrate'
import React from 'react'
import { NextSeo } from 'next-seo'

type Props = {
  mdxSource: any
  frontMatter: any
}

export default function Blog({ mdxSource, frontMatter }: Props) {
  const contents = hydrate(mdxSource, {
    components: MDXComponents,
  })

  return (
    <>
      <NextSeo
        title={`Blog- ${frontMatter.title}`}
        description={frontMatter.summary}
        openGraph={{
          type: 'website',
          title: frontMatter.title,
          description: frontMatter.summary,
          images: [
            {
              url: frontMatter.image,
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
  const posts = await getFiles('blog')

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
  const post = await getFileBySlug('blog', params.slug)

  return { props: post }
}
