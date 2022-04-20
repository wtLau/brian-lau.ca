import { Button as MaterialButton, Typography } from '@mui/material'
import PropTypes from 'prop-types'
import React from 'react'

const Button = ({ ...props }) => {
  return (
    <MaterialButton
      color='secondary'
      variant={'contained'}
      fullWidth
      style={{
        borderRadius: '50px',
        width: '100%',
        height: '48px',
      }}
      {...props}
    >
      <Typography variant='button'>{props.children}</Typography>
    </MaterialButton>
  )
}

Button.propTypes = {
  props: PropTypes.node,
}

export default Button
