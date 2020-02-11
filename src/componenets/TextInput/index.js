import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

const TextInput = props => {
  return (
    <div className={props.className}>
      <label>{props.label}</label>
      <input {...props} />
      <small>Error Message</small>
    </div>
  )
}

TextInput.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string
}

export default TextInput
