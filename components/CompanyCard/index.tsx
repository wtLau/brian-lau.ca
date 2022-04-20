import { Grid, ButtonBase, Card, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import makeStyles from '@mui/styles/makeStyles'
import Image from 'next/image'

import { Link } from '@components/ui'
import { CompanyType } from '@data/companyData'

const PREFIX = 'CompanyCard'

const classes = {
  companyCard: `${PREFIX}-companyCard`,
}

const StyledGrid = styled(Grid)(({ theme }) => ({
  [`& .${classes.companyCard}`]: {
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

  return (
    <StyledGrid item xs={12}>
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
    </StyledGrid>
  )
}

export default CompanyCard
