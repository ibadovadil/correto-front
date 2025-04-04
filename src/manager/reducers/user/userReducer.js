export const USER_LIST_REQUEST = 'USER_LIST_REQUEST';
export const USER_LIST_SUCCESS = 'USER_LIST_SUCCESS';
export const USER_LIST_FAIL = 'USER_LIST_FAIL';

export const USER_GET_REQUEST = 'USER_GET_REQUEST';
export const USER_GET_SUCCESS = 'USER_GET_SUCCESS';
export const USER_GET_FAIL = 'USER_GET_FAIL';

export const USER_PROFILE_REQUEST = "USER_PROFILE_REQUEST";
export const USER_PROFILE_SUCCESS = "USER_PROFILE_SUCCESS";
export const USER_PROFILE_FAIL = "USER_PROFILE_FAIL";

export const USER_CREATE_REQUEST = 'USER_CREATE_REQUEST';
export const USER_CREATE_SUCCESS = 'USER_CREATE_SUCCESS';
export const USER_CREATE_FAIL = 'USER_CREATE_FAIL';

export const USER_UPDATE_REQUEST = 'USER_UPDATE_REQUEST';
export const USER_UPDATE_SUCCESS = 'USER_UPDATE_SUCCESS';
export const USER_UPDATE_FAIL = 'USER_UPDATE_FAIL';

export const USER_DELETE_REQUEST = 'USER_DELETE_REQUEST';
export const USER_DELETE_SUCCESS = 'USER_DELETE_SUCCESS';
export const USER_DELETE_FAIL = 'USER_DELETE_FAIL';

const initalState = {
    users: [],
    user: {},
    loading: false,
    error: null
}

const userReducer = (state = initalState, action) => {
    switch (action.type) {
        case USER_LIST_REQUEST:
        case USER_GET_REQUEST:
        case USER_PROFILE_REQUEST:
        case USER_CREATE_REQUEST:
        case USER_UPDATE_REQUEST:
        case USER_DELETE_REQUEST:
            return { ...state, loading: true };

            case USER_LIST_SUCCESS:
                return { ...state, loading: false, users: action.payload };
            case USER_GET_SUCCESS:
                return { ...state, loading: false, user: action.payload };
            case USER_PROFILE_SUCCESS:
                return { ...state, loading: false, user: action.payload }; 
            case USER_CREATE_SUCCESS:
                return { ...state, loading: false, users: [...state.users, action.payload] };
            case USER_UPDATE_SUCCESS:
                return { 
                    ...state, 
                    loading: false, 
                    users: state.users.map((user) => user._id === action.payload._id ? action.payload : user),
                    user: action.payload
                };
            case USER_DELETE_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    users: state.users.filter((user) => user._id !== action.payload)
                };

        case USER_LIST_FAIL:
        case USER_GET_FAIL:
        case USER_PROFILE_FAIL:
        case USER_UPDATE_FAIL:
        case USER_CREATE_FAIL:
        case USER_DELETE_FAIL:
            return { ...state, loading: false, error: action.payload };
        default: return state
    }
};
export default userReducer