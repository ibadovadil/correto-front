import axios from "axios";

// Action Types 
import {
    // GET SLIDERS
    GET_SLIDERS_REQUEST,
    GET_SLIDERS_SUCCESS,
    GET_SLIDERS_FAIL,

    // GET SLIDER BY ID
    GET_SLIDER_BY_ID_REQUEST,
    GET_SLIDER_BY_ID_SUCCESS,
    GET_SLIDER_BY_ID_FAIL,

    // CREATE SLIDER
    CREATE_SLIDER_REQUEST,
    CREATE_SLIDER_SUCCESS,
    CREATE_SLIDER_FAIL,

    // UPDATE SLIDER
    UPDATE_SLIDER_REQUEST,
    UPDATE_SLIDER_SUCCESS,
    UPDATE_SLIDER_FAIL,

    // DELETE SLIDER
    DELETE_SLIDER_REQUEST,
    DELETE_SLIDER_SUCCESS,
    DELETE_SLIDER_FAIL
} from './actionTypes.js';

export const getSliders = () => async (dispatch) => {
    try {
        dispatch({ type: GET_SLIDERS_REQUEST, }); // Send Request

        const response = await axios.get(`${process.env.REACT_APP_API_URL}/slider`);
        const data = await response.data;
    

        dispatch({ type: GET_SLIDERS_SUCCESS, payload: data })

    } catch (error) {
        dispatch({ type: GET_SLIDERS_FAIL, payload: error.message });
    }
};

export const getSliderById = (id) => async (dispatch) => {
    try {
        dispatch({ type: GET_SLIDER_BY_ID_REQUEST, })

        const response = await axios.get(`{process.env.REACT_APP_API_URL}/slider/${id}`);
        const data = response.data

        dispatch({ type: GET_SLIDER_BY_ID_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: GET_SLIDER_BY_ID_FAIL, payload: error.message })
    }
}

export const createSlider = (sliderData) => async (dispatch) => {
    try {
        dispatch({ type: CREATE_SLIDER_REQUEST, })

        const response = await axios.post(`${process.env.REACT_APP_API_URL}/admin/slider`, sliderData);
        const data = response.data;
        dispatch({ type: CREATE_SLIDER_SUCCESS, payload: data })

    } catch (error) {
        dispatch({ type: CREATE_SLIDER_FAIL, payload: error.message })
    }
}

export const updateSlider = (id, sliderData) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_SLIDER_REQUEST, })

        const response = await axios.put(`${process.env.REACT_APP_API_URL}/admin/slider/${id}`, sliderData)
        const data = response.data;

        dispatch({ type: UPDATE_SLIDER_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: UPDATE_SLIDER_FAIL, payload: error.message })
    }
}

export const deleteSlider = (id) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_SLIDER_REQUEST })

        await axios.delete(`${process.env.REACT_APP_API_URL}/admin/slider/${id}`);

        dispatch({ type: DELETE_SLIDER_SUCCESS, payload: id })
    } catch (error) {
        const errorMsg = error.response ? error.response.data.message : error.message;
        dispatch({ type: DELETE_SLIDER_FAIL, payload: error.message });
        console.error("Delete error:", errorMsg);

    }
}
