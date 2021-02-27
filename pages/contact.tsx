import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { Formik, Form, Field } from 'formik'
import { TextFormField } from '@components/ui/FormFields/TextFormField'
import SelectFormField from '@components/ui/FormFields/SelecFormField'
import Card from '@components/ui/Card'
import * as yup from 'yup'
import { Typography } from '@material-ui/core'
import Button from '@components/ui/Button/Button'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: '130px auto',
    [theme.breakpoints.up('md')]: {
      maxWidth: theme.breakpoints.width('lg'),
      margin: '300px auto',
    },
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
  name: yup
    .string('Enter your name')
    .required('Name is required')
    .min(3),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
})

const Contact = () => {
  const classes = useStyles()

  return (
    <Grid
      container
      className={classes.root}
      justify='center'
      alignItems='center'
    >
      <Grid item xs={8}>
        <Card>
          <Grid
            container
            justify='center'
            alignItems='center'
            spacing={2}
          >
            <Grid
              item
              xs={12}
              component={Typography}
              variant='h1'
              align='center'
              gutterBottom
            >
              Send Me a Message!
            </Grid>
            <Grid
              item
              xs={12}
              component={Typography}
              variant='h3'
              align='center'
            >
              Inquiries, Feedback, Support
            </Grid>
            <Grid
              item
              xs={12}
              component={Typography}
              variant='body1'
              align='center'
            >
              Send me a message to get in touch.
              Always happy to receive info
              requests, hear user feedback or
              provide app support!
            </Grid>

            <Grid item xs={10}>
              <Formik
                initialValues={{
                  name: '',
                  email: '',
                  messagetype: '',
                  message: '',
                }}
                validationSchema={schema}
                onSubmit={(values) => {
                  alert(
                    JSON.stringify(
                      values,
                      null,
                      2
                    )
                  )
                }}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <Grid
                      container
                      justify='center'
                      alignItems='center'
                      spacing={2}
                    >
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
                        component={
                          SelectFormField
                        }
                      />
                      <Field
                        id='message'
                        name='message'
                        label='Message'
                        component={TextFormField}
                      />
                      <Grid item xs={6}>
                        <Button
                          type='submit'
                          disabled={isSubmitting}
                        >
                          Submit
                        </Button>
                      </Grid>
                    </Grid>
                  </Form>
                )}
              </Formik>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Contact
