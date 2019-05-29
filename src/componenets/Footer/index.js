import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Footer extends Component {
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


export default Footer