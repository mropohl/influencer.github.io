import React, { Component } from 'react'
import actions from '../../../redux/actions/actions'

class PageListItem extends Component {

    //handleLogout () {
    //this.props.dispatch(actions.Logout())
    //}

    render () {
        return (
            <li>{this.props.name}</li>
        )
    }
}

export default PageListItem
