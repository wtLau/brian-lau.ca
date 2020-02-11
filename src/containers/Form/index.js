import React from 'react'
import './styles.css'

import TextInput from '../../componenets/TextInput'
import validate from './validation'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      formIsValid: false,
      formControls: {
        username: {
          label: 'Username',
          name: 'username',
          type: 'text',
          className: 'form-control',
          value: '',
          valid: false,
          touched: false,
          placeholder: 'Enter Username',
          validationRules: {
            isRequired: true,
            minLength: 3
          }
        },
        email: {
          label: 'Email',
          name: 'email',
          type: 'text',
          className: 'form-control',
          value: '',
          valid: false,
          touched: false,
          placeholder: 'Enter Email',
          validationRules: {
            isEmail: true,
            isRequired: true
          }
        },
        password: {
          label: 'Password',
          name: 'password',
          type: 'password',
          value: '',
          className: 'form-control',
          valid: false,
          touched: false,
          placeholder: 'Enter password',
          validationRules: {
            isRequired: true
          }
        },
        password2: {
          label: 'Confirm Password',
          name: 'password2',
          type: 'password',
          className: 'form-control',
          value: '',
          valid: false,
          touched: false,
          placeholder: 'Enter password again',
          validationRules: {
            isRequired: true
          }
        }
      }
    }
  }

  // Event Listeners
  changeHandler = event => {
    const name = event.target.name.toLowerCase()
    const value = event.target.value

    const updatedControls = {
      ...this.state.formControls
    }
    const updatedFormElement = {
      ...updatedControls[name]
    }
    updatedFormElement.value = value
    updatedFormElement.touched = true
    updatedFormElement.valid = validate(
      value,
      updatedFormElement.validationRules
    )

    if (updatedFormElement.touched && !updatedFormElement.valid) {
      updatedFormElement.className = 'form-control error'
    } else {
      updatedFormElement.className = 'form-control'
    }

    updatedControls[name] = updatedFormElement

    this.setState({
      formControls: updatedControls
    })
  }
  handleSubmit = event => {
    if (event.target.value === '') {
      this.showError(event.target.value, 'Username is required')
    }
    alert('Submitted')
    event.preventDefault()
  }

  render() {
    let textInput = this.state.formControls
    let elements = []
    for (let item in textInput)
      elements.push(
        <TextInput
          type={textInput[item].type}
          label={textInput[item].label}
          name={textInput[item].name}
          key={textInput[item].name}
          placeholder={textInput[item].placeholder}
          value={textInput[item].value}
          onChange={this.changeHandler}
          className={textInput[item].className}
        />
      )

    return (
      <div className='formContainer'>
        <form id='form' className='form' onSubmit={this.handleSubmit}>
          <h2>Register With Us</h2>
          {elements}
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}
export default Form
