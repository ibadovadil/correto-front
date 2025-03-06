import axios from 'axios';
import {
    GET_OFFER_REQUEST,
    GET_OFFER_SUCCESS,
    GET_OFFER_FAIL,
    GET_OFFER_BY_ID_FAIL,
    GET_OFFER_BY_ID_REQUEST,
    GET_OFFER_BY_ID_SUCCESS,
    CREATE_OFFER_FAIL,
    CREATE_OFFER_REQUEST,
    CREATE_OFFER_SUCCESS,
    UPDATE_OFFER_FAIL,
    UPDATE_OFFER_REQUEST,
    UPDATE_OFFER_SUCCESS,
    DELETE_OFFER_FAIL,
    DELETE_OFFER_REQUEST,
    DELETE_OFFER_SUCCESS,

} from './actionTypes.js';

export const getOffers = () => async (dispatch) => {
    try {
        dispatch({ type: GET_OFFER_REQUEST });
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/heroTitle`);
        const data = response.data;
        dispatch({ type: GET_OFFER_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_OFFER_FAIL, payload:error.response?.data?.message || error.message })
    }
};

export const getOfferById = (id) => async (dispatch) => {
    try {
        dispatch({ type: GET_OFFER_BY_ID_REQUEST });
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/heroTitle/${id}`);
        const data = response.data;
        dispatch({ type: GET_OFFER_BY_ID_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: GET_OFFER_BY_ID_FAIL, payload:error.response?.data?.message || error.message })
    }
};

export const createOffer = (offerData) => async (dispatch) => {
    try {
        dispatch({ type: CREATE_OFFER_REQUEST });
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/admin/heroTitle`, offerData);
        const data = response.data;
        dispatch({ type: CREATE_OFFER_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: CREATE_OFFER_FAIL, payload:error.response?.data?.message || error.message })
    }
}

export const updateOffer = (id, offerData) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_OFFER_REQUEST });
        const response = await axios.put(`${process.env.REACT_APP_API_URL}/admin/heroTitle/${id}`, offerData);
        const data = response.data;
        dispatch({ type: UPDATE_OFFER_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: UPDATE_OFFER_FAIL, payload:error.response?.data?.message || error.message })
    }
}

export const deleteOffer = (id) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_OFFER_REQUEST });
        await axios.delete(`${process.env.REACT_APP_API_URL}/admin/heroTitle/${id}`);

        dispatch({ type: DELETE_OFFER_SUCCESS, payload: id })
    } catch (error) {
        dispatch({ type: DELETE_OFFER_FAIL, payload:error.response?.data?.message || error.message })
    }
}