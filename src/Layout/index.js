import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Button, Avatar } from '@material-ui/core'

import './styles.css'

import AvatarImage from '../images/brian_square.jpg'

const Layout = ({ children }) => (
  <div className='appContentWrapper'>
    <div className='appHeader'>
      <div className='header'>
        <Link to='/'>
          <div className='logo_menu'>
            <Avatar alt='Brian Lau' src={AvatarImage} />
            {/* <h1>Brian Lau</h1> */}
          </div>
        </Link>
        <div className='buttons'>
          <Link to='/form'>
            <Button color='secondary'>Form</Button>
          </Link>
          <Link to='/photo'>
            <Button color='secondary'>Photo</Button>
          </Link>
          <Link to='/resume'>
            <Button color='secondary'>Resume</Button>
          </Link>
          <Link to='/projects'>
            <Button color='secondary'>Projects</Button>
          </Link>
        </div>
      </div>
    </div>
    <div className='appContent'>{children}</div>
    <section className='footer'>
      <p className='copyright'>© 2019 Brian Lau All Rights Reserved</p>
    </section>
  </div>
)

Layout.defaultProps = {
  children: null
}

Layout.propTypes = {
  children: PropTypes.node
}

export default Layout
