import { Typography } from '@mui/material'

import { Link } from '@components/ui'

interface IPost {
  title: string
  summary: string
  href: string
}

const PostList = ({ title, summary, href }: IPost) => {
  return (
    <>
      <Link href={href}>
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

export default PostList
