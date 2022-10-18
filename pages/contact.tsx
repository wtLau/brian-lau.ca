import { Typography, Paper } from '@mui/material'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import { Formik, Form, Field } from 'formik'
import React from 'react'
import * as yup from 'yup'

import PageLayout from '@components/layout/PageLayout'
import Button from '@components/ui/Button'
import SelectFormField from '@components/ui/FormFields/SelecFormField'
import { TextFormField } from '@components/ui/FormFields/TextFormField'

const PREFIX = 'Contact'

const classes = {
  card: `${PREFIX}-card`,
  button: `${PREFIX}-button`,
}

// TODO jss-to-styled codemod: The Fragment root was replaced by div. Change the tag if needed.
const StylePaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(5, 2),
  height: '100%',
  borderRadius: '50px',

  [`& .${classes.button}`]: {
    marginTop: theme.spacing(4),
  },
}))

const dropDownOption = [
  { label: 'Inquiry', value: 'inquiry' },
  {
    label: 'Recommendation',
    value: 'recommendation',
  },
  { label: 'Others', value: 'other' },
]

const schema = yup.object({
  name: yup.string().required('Name is required').min(3),
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
})

type FormType = {
  name: string
  email: string
  messagetype: string
  message: string
}

const formInitValue = {
  name: '',
  email: '',
  messagetype: '',
  message: '',
}

const Contact = () => {
  const handleSubmit = (values: FormType) => {
    const { name, email, messagetype, message } = values

    window.open(
      `mailto:lauwangtatbrian@gmail.com
        ?subject=${messagetype.toUpperCase()} for brian-lau.ca
        &body=Hi Brian
        <br/>
        <br/>
        <br/> 
        ${message} 
        <br/>
        <br/>
        <br/>
        ${name}
        <br/> 
        ${email}`
    )
  }
  return (
    <PageLayout
      title='Contact'
      description='Let me know if you have any questions!  Send me a message to get in touch. Always happy to receive info
        requests, hear user feedback or provide app support!'
    >
      <StylePaper>
        <Grid container alignItems='center' direction='column' spacing={2}>
          <Grid item>
            <Typography variant='h3' gutterBottom>
              Send Me a Message!
            </Typography>
            <Typography variant='h5' align='center'>
              Inquiries, Feedback, Support
            </Typography>
          </Grid>

          <Grid item xs={10}>
            <Formik
              initialValues={formInitValue}
              validationSchema={schema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <Field
                    id='name'
                    name='name'
                    label='Your Name'
                    component={TextFormField}
                  />
                  <Field
                    id='email'
                    name='email'
                    label='Email'
                    component={TextFormField}
                  />
                  <Field
                    options={dropDownOption}
                    label='MessageType*'
                    name='messagetype'
                    component={SelectFormField}
                  />
                  <Field
                    id='message'
                    name='message'
                    label='Message'
                    component={TextFormField}
                    multiline
                    rows={4}
                  />
                  <Button
                    type='submit'
                    disabled={isSubmitting}
                    className={classes.button}
                  >
                    Submit
                  </Button>
                </Form>
              )}
            </Formik>
          </Grid>
        </Grid>
      </StylePaper>
    </PageLayout>
  )
}

export default Contact
