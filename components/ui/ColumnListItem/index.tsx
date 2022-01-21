import { Link } from '@components/ui'

import { Typography, makeStyles, Theme } from '@material-ui/core'

type ColumnListProps = {
  title: string
  description?: string
}

const useStyles = makeStyles((theme: Theme) => ({
  mainGrid: {
    marginTop: theme.spacing(6),
  },
}))

const ColumnListItem = ({ title, description }: ColumnListProps) => {
  const cn = useStyles()

  return (
    <div className={cn.mainGrid}>
      {title && (
        <Typography variant='h5' component={'h4'} gutterBottom>
          {title}
        </Typography>
      )}
      {description && (
        <Typography variant='body1' color='textSecondary' paragraph>
          {description}
        </Typography>
      )}
    </div>
  )
}

export default ColumnListItem
