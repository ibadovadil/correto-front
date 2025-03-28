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
} from "../../actions/product/ProductActionTypes.js"
const initialState = {
    products: [],
    product: {},
    loading: false,
    error: null,
    paginatedProducts: { // Əlavə edildi
        products: [],
        pagination: {}
    }
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {

        // Get All Products
        case GET_PRODUCTS_REQUEST:
            return { ...state, loading: true };
        case GET_PRODUCTS_SUCCESS:
            return { ...state, loading: false, products: action.payload };
        case GET_PRODUCTS_FAIL:
            return { ...state, loading: false, error: action.payload };

        // Get Paginated Products
        case GET_PRODUCTS_PAGINATED_REQUEST:
            return { ...state, loading: true };
        case GET_PRODUCTS_PAGINATED_SUCCESS:
            return {
                ...state,
                loading: false,
                paginatedProducts: action.payload
            };
        case GET_PRODUCTS_PAGINATED_FAIL:
            return { ...state, loading: false, error: action.payload };

        // Get Product by ID
        case GET_PRODUCT_BY_ID_REQUEST:
            return { ...state, loading: true };
        case GET_PRODUCT_BY_ID_SUCCESS:
            return { ...state, loading: false, product: action.payload };
        case GET_PRODUCT_BY_ID_FAIL:
            return { ...state, loading: false, error: action.payload };

        // Get Products by Tag
        case GET_PRODUCTS_BY_TAG_REQUEST:
            return { ...state, loading: true };
        case GET_PRODUCTS_BY_TAG_SUCCESS:
            return { ...state, loading: false, products: action.payload };
        case GET_PRODUCTS_BY_TAG_FAIL:
            return { ...state, loading: false, error: action.payload };

        // Get Products by Category
        case GET_PRODUCTS_BY_CATEGORY_REQUEST:
            return { ...state, loading: true };
        case GET_PRODUCTS_BY_CATEGORY_SUCCESS:
            return { ...state, loading: false, products: action.payload };
        case GET_PRODUCTS_BY_CATEGORY_FAIL:
            return { ...state, loading: false, error: action.payload };

        // Create Product
        case CREATE_PRODUCT_REQUEST:
            return { ...state, loading: true };
        case CREATE_PRODUCT_SUCCESS:
            return { ...state, loading: false, products: [...state.products, action.payload] };
        case CREATE_PRODUCT_FAIL:
            return { ...state, loading: false, error: action.payload };

        // Update Product
        case UPDATE_PRODUCT_REQUEST:
            return { ...state, loading: true };
        case UPDATE_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                products: state.products.map(product =>
                    product.id === action.payload.id ? action.payload : product
                )
            };
        case UPDATE_PRODUCT_FAIL:
            return { ...state, loading: false, error: action.payload };

        // Delete Product
        case DELETE_PRODUCT_REQUEST:
            return { ...state, loading: true };
        case DELETE_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                products: state.products.filter(product => product.id !== action.payload)
            };
        case DELETE_PRODUCT_FAIL:
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
};

export default productReducer;