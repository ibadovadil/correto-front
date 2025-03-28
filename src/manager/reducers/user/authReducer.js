import { jwtDecode } from "jwt-decode";

const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAIL = 'LOGIN_FAIL';
const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
const SIGNUP_FAIL = 'SIGNUP_FAIL';
const CLEAR_ERROR = 'CLEAR_ERROR'; // Yeni action: error-u sıfırlamaq üçün

const initialState = {
    token: localStorage.getItem('token') || null,
    user: localStorage.getItem("token") ? jwtDecode(localStorage.getItem("token")) : null,
    isAuthenticated: !!localStorage.getItem('token'), // Token varsa, authenticated true olsun
    error: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
        case SIGNUP_SUCCESS:
            const decodedUser = jwtDecode(action.payload);
            localStorage.setItem('token', action.payload);
            return {
                ...state,
                token: action.payload,
                user: decodedUser,
                isAuthenticated: true, // İstifadəçi uğurla daxil oldu
                error: null, 
            };
        case LOGIN_FAIL:
        case SIGNUP_FAIL:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                error: action.payload, // Error mesajını state-ə yazırıq
            };
        case CLEAR_ERROR:
            return {
                ...state,
                error: null, // Error-u sıfırlayırıq
            };
        default:
            return state;
    }
};

export default authReducer;
