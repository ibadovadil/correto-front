import axios from 'axios';
import {
    GET_GALLERY_REQUEST,
    GET_GALLERY_SUCCESS,
    GET_GALLERY_FAIL,
    CREATE_GALLERY_REQUEST,
    CREATE_GALLERY_SUCCESS,
    CREATE_GALLERY_FAIL,
    UPDATE_GALLERY_REQUEST,
    UPDATE_GALLERY_SUCCESS,
    UPDATE_GALLERY_FAIL,
    DELETE_GALLERY_REQUEST,
    DELETE_GALLERY_SUCCESS,
    DELETE_GALLERY_FAIL,
    GET_GALLERY_BY_ID_REQUEST,
    GET_GALLERY_BY_ID_SUCCESS,
    GET_GALLERY_BY_ID_FAIL
} from './ActionTypes';


export const getGallery = () => async (dispatch) => {
    try {
        dispatch({ type: GET_GALLERY_REQUEST });
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/admin/gallery`);
        const data = response.data;
        dispatch({ type: GET_GALLERY_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_GALLERY_FAIL, payload: error.response?.data?.message || error.message })
    }
}
export const getGalleryById = (id) => async (dispatch) => {
    try {
        dispatch({ type: GET_GALLERY_BY_ID_REQUEST });
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/gallery/${id}`);
        const data = response.data;
        dispatch({ type: GET_GALLERY_BY_ID_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_GALLERY_BY_ID_FAIL, payload: error.response?.data?.message || error.message })
    }
}
export const createGallery = (galleryData) => async (dispatch) => {
    try {
        dispatch({ type: CREATE_GALLERY_REQUEST });
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/admin/gallery`, galleryData);
        const data = response.data;
        dispatch({ type: CREATE_GALLERY_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: CREATE_GALLERY_FAIL, payload: error.response?.data?.message || error.message })
    }
}

export const updateGallery = (galleryData, id) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_GALLERY_REQUEST });
        const response = await axios.put(`${process.env.REACT_APP_API_URL}/admin/gallery/${id}`, galleryData);
        const data = response.data;
        dispatch({ type: UPDATE_GALLERY_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: UPDATE_GALLERY_FAIL, payload: error.response?.data?.message || error.message })
    }
}


export const deleteGallery = (id) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_GALLERY_REQUEST });
        const response = await axios.delete(`${process.env.REACT_APP_API_URL}/admin/gallery/${id}`);
        const data = response.data;
        dispatch({ type: DELETE_GALLERY_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: DELETE_GALLERY_FAIL, payload: error.response?.data?.message || error.message })
    }
}
