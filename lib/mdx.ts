import fs from 'fs'
import path from 'path'

import matter from 'gray-matter'
import renderToString from 'next-mdx-remote/render-to-string'
import { MdxRemote } from 'next-mdx-remote/types'
import readingTime, { ReadTimeResults } from 'reading-time'

import MDXComponents from '@components/blog/BlogContent'

const root = process.cwd()

export async function getFiles(type: string) {
  return fs.readdirSync(path.join(root, 'data', type))
}

type BlogMetaData = {
  title: string
  publishedAt: string
  summary: string
  image?: string
  image_alt?: string
  categories?: string[]
  meta?: {
    keywords?: string[]
  }
}
export type BlogFrontMatterType = BlogMetaData & {
  wordCount: number
  readingTime: ReadTimeResults
  slug: string
}
export type MdxSourceType = MdxRemote.Source

export async function getFileBySlug({
  type,
  slug,
}: {
  type: string
  slug?: string
}): Promise<{
  mdxSource: MdxSourceType
  frontMatter: BlogFrontMatterType
}> {
  const source = slug
    ? fs.readFileSync(path.join(root, 'data', type, `${slug}.mdx`), 'utf8')
    : fs.readFileSync(path.join(root, 'data', `${type}.mdx`), 'utf8')

  const { data, content } = matter(source)

  const mdxSource = await renderToString(content, {
    components: MDXComponents,
    mdxOptions: {
      remarkPlugins: [
        require('remark-autolink-headings'),
        require('remark-slug'),
        require('remark-code-titles'),
      ],
      rehypePlugins: [require('@mapbox/rehype-prism')],
    },
  })

  return {
    mdxSource,
    frontMatter: {
      title: data.title,
      summary: data.summary,
      publishedAt: data.publishedAt,
      image_alt: data.image_alt || '',
      image: data.image || '',
      wordCount: content.split(/\s+/gu).length,
      readingTime: readingTime(content),
      slug: slug || '',
    },
  }
}

export async function getAllFilesFrontMatter(type: string) {
  const files = fs.readdirSync(path.join(root, 'data', type))
  return files.reduce((allPosts: any, postSlug: string) => {
    const source = fs.readFileSync(
      path.join(root, 'data', type, postSlug),
      'utf8'
    )
    const { data } = matter(source)

    return [
      {
        ...data,
        slug: postSlug.replace('.mdx', ''),
      },
      ...allPosts,
    ]
  }, [])
}
