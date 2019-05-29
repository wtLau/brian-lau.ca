import React from 'react'
import Error404 from '../../images/404.svg'

import './styles.css'


const NotFound = () => (
    <div className="error-404">
        <img src={Error404} alt="error404" />
    </div>
)

export default NotFound
