import React from 'react'
import PropTypes from 'prop-types'

import { Button as MaterialButton, Typography } from '@material-ui/core'

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
