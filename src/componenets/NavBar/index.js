import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './styles.css'

class navBar extends Component {
    static propTypes = {
        value: PropTypes.string
    }

    render() {
        return (
            <div>
                <button className="square">
                    {this.props.value}
                </button>
            </div>
        )
    }
}


export default navBar