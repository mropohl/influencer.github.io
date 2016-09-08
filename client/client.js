import React from 'react'
import { render } from 'react-dom'
import App from '../components/App'
import configureStore from '../redux/store/storeconfig'
import { Provider } from 'react-redux'
//import styles from '../components/app.sass'

// configure and create Store

let initialState = {
    user: {
        id: '',
        accessToken: '',
        loggedIn: false,
        name: ''
    },
    addedPages: [],
    flagPageAlreadyAdded: false
}

let store = configureStore(initialState)

render (
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
)
