import React from 'react'
import './styles.css'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      password: '',
      password2: ''
    }
    this.handleUsernameChange = this.handleUsernameChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handlePassword2Change = this.handlePassword2Change.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // Show Error Message

  showError(input, message) {
    const formControl = input
    formControl.className = 'form-control error'
    const small = formControl.querySelector('small')
    small.innerText = message
  }

  // Event Listeners
  handleUsernameChange(event) {
    this.setState({ username: event.target.value })
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value })
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value })
  }

  handlePassword2Change(event) {
    this.setState({ password2: event.target.value })
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
              id='username'
              placeholder='Enter Username'
              value={this.state.username}
              onChange={this.handleUsernameChange}
            />
            <small>Error Message</small>
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email</label>
            <input
              type='text'
              id='email'
              placeholder='Enter email'
              value={this.state.email}
              onChange={this.handleEmailChange}
            />
            <small>Error Message</small>
          </div>
          <div className='form-control'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              placeholder='Enter password'
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
            <small>Error Message</small>
          </div>
          <div className='form-control'>
            <label htmlFor='password2'>Confirm Password</label>
            <input
              type='password'
              id='password2'
              placeholder='Enter password again'
              value={this.state.password2}
              onChange={this.handlePassword2Change}
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
