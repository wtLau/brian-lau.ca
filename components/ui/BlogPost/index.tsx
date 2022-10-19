import { Typography } from '@mui/material'

import { Link } from '@components/ui'

interface IPost {
  title: string
  summary: string
  slug: string
}

const BlogPost = ({ title, summary, slug }: IPost) => {
  return (
    <>
      <Link href={`/blog/${slug}`}>
        <Typography variant='h5' component={'h4'}>
          {title}
        </Typography>
      </Link>

      <Typography variant='body1' color='textSecondary' paragraph>
        {summary}
      </Typography>
    </>
  )
}

export default BlogPost
