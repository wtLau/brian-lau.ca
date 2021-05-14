import { Link } from '@components/ui'
import useSWR from 'swr'
// import format from 'comma-number'

import fetcher from '@lib/fetcher'
import { Typography, makeStyles, Theme } from '@material-ui/core'

interface IPost {
  title: string
  summary: string
  slug: string
}

const useStyles = makeStyles((theme: Theme) => ({
  mainGrid: {
    marginTop: theme.spacing(6),
  },
}))

const BlogPost = ({ title, summary, slug }: IPost) => {
  // const { data } = useSWR(
  //   `/api/views/${slug}`,
  //   fetcher
  // )
  // const views = data?.total
  const cn = useStyles()
  return (
    <div className={cn.mainGrid}>
      <Link href={`/blog/${slug}`}>
        <div>
          <Typography variant='h5' component={'h4'} gutterBottom>
            {title}
          </Typography>

          <Typography variant='body1' color='textSecondary' paragraph>
            {summary}
          </Typography>
        </div>
      </Link>
    </div>
  )
}

export default BlogPost
