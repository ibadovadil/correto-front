import axios from 'axios';
import {
    GET_PRODUCTS_REQUEST,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAIL,
    GET_PRODUCTS_PAGINATED_REQUEST,
    GET_PRODUCTS_PAGINATED_SUCCESS,
    GET_PRODUCTS_PAGINATED_FAIL,
    GET_PRODUCT_BY_ID_REQUEST,
    GET_PRODUCT_BY_ID_SUCCESS,
    GET_PRODUCT_BY_ID_FAIL,
    GET_PRODUCTS_BY_TAG_REQUEST,
    GET_PRODUCTS_BY_TAG_SUCCESS,
    GET_PRODUCTS_BY_TAG_FAIL,
    GET_PRODUCTS_BY_CATEGORY_REQUEST,
    GET_PRODUCTS_BY_CATEGORY_SUCCESS,
    GET_PRODUCTS_BY_CATEGORY_FAIL,
    CREATE_PRODUCT_REQUEST,
    CREATE_PRODUCT_SUCCESS,
    CREATE_PRODUCT_FAIL,
    UPDATE_PRODUCT_REQUEST,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_FAIL,
    DELETE_PRODUCT_REQUEST,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAIL
} from './ProductActionTypes.js';

// Get Products
export const getProducts = () => async (dispatch) => {
    try {
        dispatch({ type: GET_PRODUCTS_REQUEST });
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/admin/product`);
        const data = response.data;
        dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: GET_PRODUCTS_FAIL, payload: error.message })
    }
};

// Get Product By Id
export const getProductById = (id) => async (dispatch) => {
    try {
        dispatch({ type: GET_PRODUCT_BY_ID_REQUEST });
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/product/${id}`);
        const data = response.data;
        dispatch({ type: GET_PRODUCT_BY_ID_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: GET_PRODUCT_BY_ID_FAIL, payload: error.message })
    }
}

export const paginatedProducts = (page, limit) => async (dispatch) => {
    try {
        dispatch({ type: GET_PRODUCTS_PAGINATED_REQUEST });
        
        // API isteği
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/productpag?page=${page}&limit=${limit}`);
        
        // API'den gelen yanıtı kontrol et
        const { products, pagination } = response.data;

        // Başarıyla alınan veriyi dispatch et
        dispatch({
            type: GET_PRODUCTS_PAGINATED_SUCCESS,
            payload: {
                products,  // ürünler
                pagination // sayfalama bilgileri
            },
        });
    } catch (error) {
        // Hata oluştuğunda hata mesajını dispatch et
        dispatch({
            type: GET_PRODUCTS_PAGINATED_FAIL,
            payload: error.response?.data?.message || error.message,  // Hata mesajını doğru şekilde al
        });
    }
};

// Get Products By Tag
export const getProductsByTag = (tagId) => async (dispatch) => {
    try {
        dispatch({ type: GET_PRODUCTS_BY_TAG_REQUEST });
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/productbytag/${tagId}`);
        const data = response.data;
        dispatch({ type: GET_PRODUCTS_BY_TAG_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_PRODUCTS_BY_TAG_FAIL, payload: error.message })

    }
};

// Get Products by Category
export const getProductsByCategory = (catId) => async (dispatch) => {
    try {
        dispatch({ type: GET_PRODUCTS_BY_CATEGORY_REQUEST });
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/productbycat/${catId}`);
        const data = response.data;
        dispatch({ type: GET_PRODUCTS_BY_CATEGORY_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_PRODUCTS_BY_CATEGORY_FAIL, payload: error.message });
    }
};


// Create Product
export const createProduct = (productData) => async (dispatch) => {
    try {
        dispatch({ type: CREATE_PRODUCT_REQUEST });
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/admin/product`, productData);
        const data = response.data;
        dispatch({ type: CREATE_PRODUCT_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: CREATE_PRODUCT_FAIL, payload: error.message });
    }
};

// Update Product
export const updateProduct = (id, productData) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_PRODUCT_REQUEST });
        const response = await axios.put(`${process.env.REACT_APP_API_URL}/admin/product/${id}`, productData);
        const data = response.data;
        dispatch({ type: UPDATE_PRODUCT_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: UPDATE_PRODUCT_FAIL, payload: error.message });
    }
};

// Delete Product
export const deleteProduct = (id) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_PRODUCT_REQUEST });
        await axios.delete(`${process.env.REACT_APP_API_URL}/admin/product/${id}`);
        dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: id });
    } catch (error) {
        dispatch({ type: DELETE_PRODUCT_FAIL, payload: error.message });
    }
};