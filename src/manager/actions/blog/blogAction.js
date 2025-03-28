import axios from 'axios'
import {
    GET_BLOG_REQUEST,
    GET_BLOG_SUCCESS,
    GET_BLOG_FAIL,
    CREATE_BLOG_REQUEST,
    CREATE_BLOG_SUCCESS,
    CREATE_BLOG_FAIL,
    UPDATE_BLOG_REQUEST,
    UPDATE_BLOG_SUCCESS,
    UPDATE_BLOG_FAIL,
    DELETE_BLOG_REQUEST,
    DELETE_BLOG_SUCCESS,
    DELETE_BLOG_FAIL,
    GET_BLOG_BY_ID_REQUEST,
    GET_BLOG_BY_ID_SUCCESS,
    GET_BLOG_BY_ID_FAIL
} from './ActionTypes.js'

export const getBlog = () => async (dispatch) => {
    try {
        dispatch({ type: GET_BLOG_REQUEST });
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/blog`);
        const data = response.data;
        dispatch({ type: GET_BLOG_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_BLOG_FAIL, payload: error.response?.data?.message || error.message })
    }
}
export const getBlogById = (id) => async (dispatch) => {
    try {
        dispatch({ type: GET_BLOG_BY_ID_REQUEST });
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/blog/${id}`);
        const data = response.data;
        dispatch({ type: GET_BLOG_BY_ID_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_BLOG_BY_ID_FAIL, payload: error.response?.data?.message || error.message })
    }
}
export const createBlog = (blogData) => async (dispatch) => {
    try {
        dispatch({ type: CREATE_BLOG_REQUEST });
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/admin/blog`, blogData);
        const data = response.data;
        dispatch({ type: CREATE_BLOG_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: CREATE_BLOG_FAIL, payload: error.response?.data?.message || error.message })
    }
}

export const updateBlog = (blogData, id) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_BLOG_REQUEST });
        const response = await axios.put(`${process.env.REACT_APP_API_URL}/admin/blog/${id}`, blogData);
        const data = response.data;
        dispatch({ type: UPDATE_BLOG_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: UPDATE_BLOG_FAIL, payload: error.response?.data?.message || error.message })
    }
}

export const deleteBlog = (id) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_BLOG_REQUEST });
        const response = await axios.delete(`${process.env.REACT_APP_API_URL}/admin/blog/${id}`);
        const data = response.data;
        dispatch({ type: DELETE_BLOG_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: DELETE_BLOG_FAIL, payload: error.response?.data?.message || error.message })
    }
}
