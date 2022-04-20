import React from 'react'
import { getIn } from 'formik'
import { TextField } from '@mui/material'

export const TextFormField = ({ field, form, ...props }) => {
  const errorText =
    getIn(form.touched, field.name) && getIn(form.errors, field.name)

  return (
    <TextField
      fullWidth
      margin='normal'
      helperText={errorText}
      error={!!errorText}
      {...field}
      {...props}
    />
  )
}
