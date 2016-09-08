import React, { Component } from 'react'


class NavbarStatus extends Component {
    render () {
        return (
            <div>

                <span>{this.props.userData.name}</span>

            </div>
        )
    }
}

export default NavbarStatus
