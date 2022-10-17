import { Typography, Card, Container } from '@mui/material'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import { Formik, Form, Field, FormikValues } from 'formik'
import React from 'react'
import * as yup from 'yup'

import Button from '@components/ui/Button'
import SelectFormField from '@components/ui/FormFields/SelecFormField'
import { TextFormField } from '@components/ui/FormFields/TextFormField'
import { HeadSeo } from '@components/HeadSeo'

const PageLayout = ({
  title,
  description,
  children,
}: {
  title: string
  description: string
  children: React.ReactNode
}) => {
  return (
    <Grid container direction='column' spacing={4}>
      <Grid item>
        <HeadSeo title={title} description={description} />
      </Grid>

      {children}
    </Grid>
  )
}

export default PageLayout
