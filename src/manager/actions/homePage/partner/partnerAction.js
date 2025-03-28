import axios from 'axios';
import {
    GET_PARTNERS_REQUEST,
    GET_PARTNERS_SUCCESS,
    GET_PARTNERS_FAILURE,
    CREATE_PARTNER_REQUEST,
    CREATE_PARTNER_SUCCESS,
    CREATE_PARTNER_FAILURE,
    UPDATE_PARTNER_REQUEST,
    UPDATE_PARTNER_SUCCESS,
    UPDATE_PARTNER_FAILURE,
    DELETE_PARTNER_REQUEST,
    DELETE_PARTNER_SUCCESS,
    DELETE_PARTNER_FAILURE,
    GET_PARTNER_BY_ID_REQUEST,
    GET_PARTNER_BY_ID_SUCCESS,
    GET_PARTNER_BY_ID_FAILURE
} from './ActionTypes.js'

export const getPartners = () => async (dispatch) => {
    try {
        dispatch({ type: GET_PARTNERS_REQUEST });
        const reponse = await axios.get(`${process.env.REACT_APP_API_URL}/partner`);
        const data = reponse.data;
        dispatch({ type: GET_PARTNERS_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: GET_PARTNERS_FAILURE, payload: error.response?.data?.message || error.message })
    }
}


export const getPartnersById = (id) => async (dispatch) => {
    try {
        dispatch({ type: GET_PARTNER_BY_ID_REQUEST });
        const reponse = await axios.get(`${process.env.REACT_APP_API_URL}/partner/${id}`);
        const data = reponse.data;
        dispatch({ type: GET_PARTNER_BY_ID_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: GET_PARTNER_BY_ID_FAILURE, payload: error.response?.data?.message || error.message })
    }
}
export const createPartner = (partnerData) => async (dispatch) => {
    try {
        dispatch({ type: CREATE_PARTNER_REQUEST });
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/admin/partner`, partnerData);
        const data = response.data;
        dispatch({ type: CREATE_PARTNER_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: CREATE_PARTNER_FAILURE, payload: error.response?.data?.message || error.message })
    }
}

export const updatePartner = (id, partnerData) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_PARTNER_REQUEST });
        const response = await axios.put(`${process.env.REACT_APP_API_URL}/admin/partner/${id}`, partnerData)
        const data = response.data;
        dispatch({ type: UPDATE_PARTNER_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: UPDATE_PARTNER_FAILURE, payload: error.response?.data?.message || error.message })
    }
}
export const deletePartner = (id) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_PARTNER_REQUEST });
        await axios.delete(`${process.env.REACT_APP_API_URL}/admin/partner/${id}`);

        dispatch({ type: DELETE_PARTNER_SUCCESS, payload: id })
    } catch (error) {
        dispatch({ type: DELETE_PARTNER_FAILURE, payload: error.response?.data?.message || error.message })
    }
}