import axios from "axios";

const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAIL = 'LOGIN_FAIL';
const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
const SIGNUP_FAIL = 'SIGNUP_FAIL';

export const login = (email, password) => async (dispatch) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/signin`, { email, password });

        const token = response.data.token;
        localStorage.setItem('token', token);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: token,
        });

        return { success: true };
    } catch (error) {
        const errorMessage = error.response?.data?.message || "Login failed. Please try again.";

        dispatch({
            type: LOGIN_FAIL,
            payload: errorMessage,
        });

        return { success: false, message: errorMessage };
    }
};

export const signUp = (fullname, email, phone, password) => async (dispatch) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/user`, { fullname, email, phone, password });

        const token = response.headers['x-auth-token'];

        if (token) {
            localStorage.setItem('token', token);
            dispatch({
                type: SIGNUP_SUCCESS,
                payload: token,
            });
            return { success: true };
        } else {
            const errorMessage = "No token received.";
            dispatch({
                type: SIGNUP_FAIL,
                payload: errorMessage,
            });
            return { success: false, message: errorMessage };
        }

    } catch (error) {
        const errorMessage = error.response?.data?.message || "Sign up failed. Please try again.";

        dispatch({
            type: SIGNUP_FAIL,
            payload: errorMessage,
        });

        return { success: false, message: errorMessage };
    }
};
