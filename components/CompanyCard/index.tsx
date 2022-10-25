import { Grid, ButtonBase, Card, Typography, Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import Image from 'next/image'

import { Link } from '@components/ui'
import { CompanyType } from '@data/companyData'

type CompanyCardType = {
  company: CompanyType
}

function CompanyCard({ company }: CompanyCardType) {
  const { name, description, link, imageAlt, imageLocation, title } = company

  return (
    <Grid
      container
      spacing={2}
      sx={{
        flexDirection: {
          xs: 'column',
          md: 'row',
        },
      }}
    >
      <Grid container item xs={2} justifyContent='center' alignItems='center'>
        <Image src={imageLocation} alt={imageAlt} width={78} height={90} />
      </Grid>
      <Grid item xs={12} md={8}>
        <Typography variant='h5' component={Link} href={link}>
          {name}
        </Typography>
        <Typography variant='body1' color='textSecondary'>
          {title}
        </Typography>
        <Typography variant='caption' color='textSecondary'>
          {description}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default CompanyCard
