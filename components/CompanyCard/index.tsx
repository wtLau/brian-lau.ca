import { CompanyType } from '@data/companyData'
import { Grid, ButtonBase, Card, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from '@components/ui'
import Image from 'next/image'

const useStyles = makeStyles((theme) => ({
  companyCard: {
    minHeight: '200px',
    background: theme.palette.background.paper,
    borderRadius: '50px',
    width: '100%',
    padding: theme.spacing(3, 2),
  },
}))

type CompanyCardType = {
  company: CompanyType
}

function CompanyCard({ company }: CompanyCardType) {
  const { name, description, link, imageAlt, imageLocation, title } = company
  const classes = useStyles()

  return (
    <Grid item xs={12}>
      <Link href={link} target='_blank'>
        <ButtonBase
          className={classes.companyCard}
          component={Card}
          focusRipple
        >
          <Grid container alignItems='center' justifyContent='space-around'>
            <Grid container item xs={2} justifyContent='center'>
              <Image
                src={imageLocation}
                alt={imageAlt}
                width={78}
                height={90}
              />
            </Grid>
            <Grid item xs={8}>
              <Typography variant='h5'>{name}</Typography>
              <Typography variant='body1' color='textSecondary'>
                {title}
              </Typography>
              <Typography variant='caption' color='textSecondary'>
                {description}
              </Typography>
            </Grid>
          </Grid>
        </ButtonBase>
      </Link>
    </Grid>
  )
}

export default CompanyCard
