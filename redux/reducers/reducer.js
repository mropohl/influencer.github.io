function getId(state) {
    return state.todos.reduce((maxId, todo) => {
        return Math.max(todo.id, maxId)
    }, -1) + 1
}

let reducer = function (state, action) {
    switch (action.type) {
        case 'USER_LOGIN':
            return Object.assign({}, state, {
                user: {
                    id: action.id,
                    accessToken: action.accessToken,
                    loggedIn: true
                }
            });
        case 'USER_LOGOUT':
            return Object.assign({}, state, {
                user: {
                    id: '',
                    accessToken: '',
                    loggedIn: false,
                    name: ''
                }
            });
        case 'SET_USER_NAME':
            return Object.assign({}, state, {

                user: { ...state.user,
                    name: action.name

                }

            })

        case 'ADD_PAGE_ALERT_DISMISS':
            return Object.assign({}, state, {
                flagPageAlreadyAdded: false
            })

        case 'ADD_PAGE':

            if (state.addedPages.map((page) => {
                    return page.id
                }).indexOf(action.id) === -1) {

                return Object.assign({}, state, {
                    addedPages: [...state.addedPages, {
                        id: action.id,
                        name: action.name
                    }]
                })

            } else {
                return Object.assign({}, state, {
                    flagPageAlreadyAdded: true
                })
            }

        default:
            return state;
    }
}

export default reducer
