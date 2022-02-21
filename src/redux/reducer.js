const initialState = {
    userLogin: false,
    firstName: '',
    lastName: '',
    countries: {
        like: [],
        visited: []
    },
    dogData:{
        data: null,
        error: null
    }
}

const reducer = (state = initialState, action) => {
    const actionType = action.type;
    console.log("type of action from reducer ", actionType)

    switch (actionType) {
        case 'USER_LOGIN':
            return {
                ...state,
                userLogin: true,
                firstName: 'rrrrrr',
                lastName: 'eeeeee'
            }
        case 'USER_LOGOUT':
            return {
                ...state,
                userLogin: false,
                firstName: '',
                lastName: ''
            }
        case 'UPDATE_USER':
            return {
                ...state,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName
            } 
        case 'ADD_VISITED_COUNTRIES':
            return {
                ...state,
                countries: {
                    ...state.countries,
                    visited: ['Finland', 'Bangladesh']
                }
            }
            case 'FATCH_DOG_SUCCESS':
                return {
                    ...state,
                    dogData: {...state.dogData, data: action.payload}
                }
                case 'FATCH_DOG_ERROR':
                    return {
                        ...state,
                        dogData: {
                            ...state.dogData, 
                            error: action.payload}
                    }
        default:
            return state
    }
}

export default reducer