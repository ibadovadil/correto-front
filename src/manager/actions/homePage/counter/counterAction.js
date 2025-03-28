import axios from 'axios';
import { CREATE_COUNTER_FAIL, CREATE_COUNTER_REQUEST, CREATE_COUNTER_SUCCESS, DELETE_COUNTER_FAIL, DELETE_COUNTER_REQUEST, DELETE_COUNTER_SUCCESS, GET_COUNTER_BY_ID_FAIL, GET_COUNTER_BY_ID_REQUEST, GET_COUNTER_BY_ID_SUCCESS, GET_COUNTER_FAIL, GET_COUNTER_REQUEST, GET_COUNTER_SUCCESS, UPDATE_COUNTER_FAIL, UPDATE_COUNTER_REQUEST, UPDATE_COUNTER_SUCCESS } from './actionTypes'

export const getCounters = () => async (dispatch) => {
    try {
        dispatch({ type: GET_COUNTER_REQUEST });
        const response= await axios.get(`${process.env.REACT_APP_API_URL}/counter`);
        const data = response.data;
        dispatch({ type: GET_COUNTER_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: GET_COUNTER_FAIL, payload: error.response?.data?.message || error.message })
    }
};

export const getCounterById = (id) => async (dispatch) => {
    try {
        dispatch({ type: GET_COUNTER_BY_ID_REQUEST });
        const response= await axios.get(`${process.env.REACT_APP_API_URL}/counter/${id}`)
        const data = response.data;
        dispatch({ type: GET_COUNTER_BY_ID_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: GET_COUNTER_BY_ID_FAIL, payload: error.response?.data?.message || error.message })
    }
}

export const createCounter = () => async (dispatch) => {
    try {
        dispatch({ type: CREATE_COUNTER_REQUEST });
        const response= await axios.post(`${process.env.REACT_APP_API_URL}/admin/counter`);
        const data = response.data;
        dispatch({ type: CREATE_COUNTER_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: CREATE_COUNTER_FAIL, payload: error.response?.data?.message || error.message })
    }
}

export const updateCounter = (id, counterData) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_COUNTER_REQUEST });
        const response = await axios.put(`${process.env.REACT_APP_API_URL}/admin/counter/${id}`, counterData)
        const data = response.data
        dispatch({
            type: UPDATE_COUNTER_SUCCESS, payload: data
        });
    } catch (error) {
        dispatch({ type: UPDATE_COUNTER_FAIL, payload: error.response?.data?.message || error.message })
    }
}
export const deleteCounter = (id) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_COUNTER_REQUEST });
        const response = await axios.delete(`${process.env.REACT_APP_API_URL}/admin/counter/${id}`)
        const data = response.data;
        dispatch({ type: DELETE_COUNTER_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: DELETE_COUNTER_FAIL, payload: error.response?.data?.message || error.message })
    }

}