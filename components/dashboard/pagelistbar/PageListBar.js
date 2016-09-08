import React, { Component } from 'react'
import PageListItem from './PageListItem'

class PageListBar extends Component {

    constructor (props, context) {
        super (props,context)
        this.state = {

        }
    }
    render () {
        return (
            <div>
                <ul>
                {this.props.pageData.map(function (page, index) {
                    return <PageListItem key={page.id} name={page.name}/>

                })}
                </ul>

            </div>
        )
    }
}

export default PageListBar
