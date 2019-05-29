import React from 'react'
import PropTypes from 'prop-types'
import NavBar from '../../componenets/NavBar'
import Footer from '../../componenets/Footer'

import './styles.css'

const Layout = ({ children }) => (
    <div className="appContentWrapper">
        <div className="appHeader">
            <NavBar />
        </div>
        <div className="appContent">
            {children}
        </div>
        <section className="footer">
            <Footer />
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
