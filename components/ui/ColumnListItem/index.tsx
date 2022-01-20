import { Link } from '@components/ui'

import { Typography, makeStyles, Theme } from '@material-ui/core'

type ColumnListProps = {
  title: string
  description?: string
  link?: string
}

const useStyles = makeStyles((theme: Theme) => ({
  mainGrid: {
    marginTop: theme.spacing(6),
  },
}))

const ColumnListItem = ({ title, description, link }: ColumnListProps) => {
  const cn = useStyles()

  return (
    <div className={cn.mainGrid}>
      <Link href={link}>

        {title && <Typography variant='h5' component={'h4'} gutterBottom>
          {title}
        </Typography>
        }
        {
          description &&
          <Typography variant='body1' color='textSecondary' paragraph>
            {description}
          </Typography>
        }
      </Link>
    </div>
  )
}

export default ColumnListItem 
