import React, { Component } from 'react'
import BtnLogout from './BtnLogout'
import NavbarStatus from './NavbarStatus'

class Navbar extends Component {
    render () {
        return (
            <div>

                <BtnLogout dispatch={this.props.dispatch} userData={this.props.userData}/>
                <NavbarStatus userData={this.props.userData}/>

            </div>
        )
    }
}

export default Navbar
