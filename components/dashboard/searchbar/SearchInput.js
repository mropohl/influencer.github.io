import React, { Component } from 'react'
import actions from '../../../redux/actions/actions'

class SearchInput extends Component {

    constructor (props, context) {
        super(props, context)
        this.state = {
            pageURL: ""
        }
    }

    handleSubmit () {
        console.log('Btn Add Page triggered.');
        this.props.dispatch(actions.AddPage(this.state.pageURL))
    }
    handleChange (event) {
        console.log('Handling change');
        this.setState({
            pageURL: event.target.value
        })
    }

    render () {
        return (
            <div>

                <input
                    type="text"
                    onChange={this.handleChange.bind(this)}
                    placeholder="Enter Facebook Page URL"
                    value={this.state.pageURL}
                />
                <button onClick={this.handleSubmit.bind(this)}>Add Page</button>

            </div>
        )
    }
}

export default SearchInput
