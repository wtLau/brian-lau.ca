import { Link } from '@components/ui'

import { Typography, makeStyles, Theme } from '@material-ui/core'

interface IPost {
  slug: string
  title: string
}

const useStyles = makeStyles((theme: Theme) => ({
  mainGrid: {
    marginTop: theme.spacing(6),
  },
  text: {
    textTransform: 'capitalize',
  },
}))

const ToolCard = ({ title, slug, ...RestaurantOutlined }: IPost) => {
  const cn = useStyles()

  return (
    <div className={cn.mainGrid}>
      <Link href={`/tools/${slug}`}>
        <div>
          <Typography
            variant='h5'
            component={'h4'}
            gutterBottom
            className={cn.text}
          >
            {title}
          </Typography>
        </div>
      </Link>
    </div>
  )
}

export default ToolCard
