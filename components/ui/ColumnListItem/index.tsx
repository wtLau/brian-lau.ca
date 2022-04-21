import { Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

const PREFIX = 'ColumnListItem'

const classes = {
  mainGrid: `${PREFIX}-mainGrid`,
}

const Root = styled('div')(({ theme }) => ({
  [`& .${classes.mainGrid}`]: {
    marginTop: theme.spacing(6),
  },
}))

type ColumnListProps = {
  title: string
  description?: string
}

const ColumnListItem = ({ title, description }: ColumnListProps) => {
  return (
    <Root className={classes.mainGrid}>
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
    </Root>
  )
}

export default ColumnListItem
