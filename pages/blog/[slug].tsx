import { getFiles, getFileBySlug } from '@lib/mdx'
import BlogLayout from '@components/blog/BlogLayout'
import BlogContent from '@components/blog/BlogContent'

export default function Blog({
  // mdxSource,
  content,
  frontMatter,
}) {
  // const content = hydrate(mdxSource, {
  //   components: MDXComponents,
  // })

  return (
    <BlogLayout frontMatter={frontMatter}>
      {/* <BlogContent frontMatter={frontMatter} /> */}
      <div
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      />
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
