import { Typography, Theme } from '@mui/material'
import { styled } from '@mui/material/styles'
import makeStyles from '@mui/styles/makeStyles'

import { Link } from '@components/ui'

const PREFIX = 'ToolCard'

const classes = {
  mainGrid: `${PREFIX}-mainGrid`,
  text: `${PREFIX}-text`,
}

const Root = styled('div')(({ theme }) => ({
  [`& .${classes.mainGrid}`]: {
    marginTop: theme.spacing(6),
  },

  [`& .${classes.text}`]: {
    textTransform: 'capitalize',
  },
}))

interface IPost {
  slug: string
  title: string
}

const ToolCard = ({ title, slug, ...RestaurantOutlined }: IPost) => {
  return (
    <Root className={classes.mainGrid}>
      <Link href={`/tools/${slug}`}>
        <div>
          <Typography
            variant='h5'
            component={'h4'}
            gutterBottom
            className={classes.text}
          >
            {title}
          </Typography>
        </div>
      </Link>
    </Root>
  )
}

export default ToolCard
