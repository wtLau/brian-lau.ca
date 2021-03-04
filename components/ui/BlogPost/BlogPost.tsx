import Link from 'next/link'
import useSWR from 'swr'
// import format from 'comma-number'

import fetcher from '@lib/fetcher'
import { Typography } from '@material-ui/core'

interface IPost {
  title: string
  summary: string
  slug: string
}

const BlogPost = ({
  title,
  summary,
  slug,
}: IPost) => {
  const { data } = useSWR(
    `/api/views/${slug}`,
    fetcher
  )
  const views = data?.total

  return (
    <Link href={`/blog/${slug}`}>
      <div>
        <Typography variant='h4'>
          {title}
        </Typography>

        <Typography variant='body1'>
          {summary}
        </Typography>
      </div>
    </Link>
  )
}

export default BlogPost
