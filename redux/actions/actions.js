
export function LoginAsync(id, accessToken) {
    console.log('Async Login successful...')
    return {
        type: 'USER_LOGIN',
        id: id,
        accessToken: accessToken
    }
}

export function LogoutAsync() {
    console.log('Async Logout successful...')
    return {
        type: 'USER_LOGOUT'
    }
}

export function SetUserName(name) {
    return {
        type: 'SET_USER_NAME',
        name: name
    }
}

export function AddPageAsync(id, name) {
    return {
        type: 'ADD_PAGE',
        id: id,
        name: name
    }
}

let actions = {

    RegisterUser: function (id, accessToken) {
        return function (dispatch) {
            dispatch(LoginAsync(id, accessToken))
            FB.api('/me', function (response) {
                dispatch(SetUserName(response.name))
            })
        }
    },

    Login: function () {

        return function (dispatch) {
            FB.login (function (response) {
                console.log('Dispatching...')
                dispatch(LoginAsync(response.authResponse.userID, response.authResponse.accessToken))
                FB.api('/me', function (response) {
                    dispatch(SetUserName(response.name))
                })
            }, {scope: 'public_profile, email, manage_pages'})
        }

    },

    Logout: function () {

        return function (dispatch) {
            FB.logout (function () {
                dispatch(LogoutAsync())
            })
        }

    },

    AddPage: function (pageURL) {
        return function (dispatch) {
            FB.api('/' + pageURL, function (response) {
                dispatch(AddPageAsync(response.id, response.name))
            })
        }
    },

    AddPageAlertDismiss: function () {
        return {
            type: 'ADD_PAGE_ALERT_DISMISS'
        }
    }


}


export default actions
