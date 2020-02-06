import React from 'react'
import './styles.css'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      formControls: {
        username: '',
        email: '',
        password: '',
        password2: ''
      }
    }

    // this.handleUsernameChange = this.handleUsernameChange.bind(this)
    // this.handleEmailChange = this.handleEmailChange.bind(this)
    // this.handlePasswordChange = this.handlePasswordChange.bind(this)
    // this.handlePassword2Change = this.handlePassword2Change.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)

    // this.usernameRef = React.createRef()
  }

  // Show Error Message
  showError(input, message) {
    const formControl = input
    formControl.className = 'form-control error'
    const small = formControl.querySelector('small')
    small.innerText = message
  }

  // Event Listeners
  changeHandler = event => {
    const name = event.target.name
    const value = event.target.value

    this.setState({
      formControls: {
        ...this.state.formControls,
        [name]: value
      }
    })
  }
  handleSubmit(event) {
    if (this.state.username === '') {
      this.showError(this.state.username, 'Username is required')
    }
    alert('Submitted')
    event.preventDefault()
  }

  render() {
    return (
      <div className='formContainer'>
        <form id='form' className='form' onSubmit={this.handleSubmit}>
          <h2>Register With Us</h2>
          <div className='form-control'>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              name='username'
              placeholder='Enter Username'
              value={this.state.formControls.username}
              onChange={this.changeHandler}
            />
            <small>Error Message</small>
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email</label>
            <input
              type='text'
              name='email'
              placeholder='Enter email'
              value={this.state.formControls.email}
              onChange={this.changeHandler}
            />
            <small>Error Message</small>
          </div>
          <div className='form-control'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              name='password'
              placeholder='Enter password'
              value={this.state.formControls.password}
              onChange={this.changeHandler}
            />
            <small>Error Message</small>
          </div>
          <div className='form-control'>
            <label htmlFor='password2'>Confirm Password</label>
            <input
              type='password'
              name='password2'
              placeholder='Enter password again'
              value={this.state.formControls.password2}
              onChange={this.changeHandler}
            />
            <small>Error Message</small>
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}
export default Form
