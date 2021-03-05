import { getFiles, getFileBySlug } from '@lib/mdx'
import BlogLayout from '@components/blog/BlogLayout'
import MDXComponents from '@components/blog/BlogContent'
import hydrate from 'next-mdx-remote/hydrate'

export default function Blog({
  mdxSource,
  frontMatter,
}) {
  const contents = hydrate(mdxSource, {
    components: MDXComponents,
  })

  return (
    <BlogLayout frontMatter={frontMatter}>
      {contents}
    </BlogLayout>
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

export async function getStaticProps({ params }) {
  const post = await getFileBySlug(
    'blog',
    params.slug
  )

  return { props: post }
}
