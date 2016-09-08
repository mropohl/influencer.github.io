import React, { Component } from 'react'
import Navbar from './navbar/Navbar'
import SearchBar from './searchbar/SearchBar'
import PageListBar from './pagelistbar/PageListBar'

class Dashboard extends Component {

    render() {
        return (
            <div>
                <Navbar userData={this.props.state.user} dispatch={this.props.dispatch}/>
                <SearchBar flagPageAlreadyAdded={this.props.state.flagPageAlreadyAdded} dispatch={this.props.dispatch}/>
                <PageListBar dispatch={this.props.dispatch} pageData={this.props.state.addedPages}/>
            </div>
        )
    }

}


export default Dashboard
