const initialState = {
    basket: null,
    error: null,
};

const FETCH_BASKET_SUCCESS = "FETCH_BASKET_SUCCESS";
const ADD_TO_BASKET = "ADD_TO_BASKET";
const REMOVE_FROM_BASKET = "REMOVE_FROM_BASKET";
const BASKET_ERROR = "BASKET_ERROR";
const FETCH_BASKET_REQUEST = "FETCH_BASKET_REQUEST"
const UPDATE_BASKET_SUCCESS = "UPDATE_BASKET_SUCCESS"

const basketReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BASKET_REQUEST: return { ...state, loading: true };

        case FETCH_BASKET_SUCCESS:
        case UPDATE_BASKET_SUCCESS:
            return { ...state, basket: action.payload, error: null, loading: false };

        case ADD_TO_BASKET:
            // If basket exists, add the new product or update the existing one
            return {
                ...state,
                basket: {
                    ...state.basket,
                    products: state.basket?.products
                        ? [
                            ...state.basket.products.filter(product => product.product._id !== action.payload._id),
                            action.payload,
                        ]
                        : [action.payload],
                },
            };

        case REMOVE_FROM_BASKET:
            // Remove product based on _id
            return {
                ...state,
                basket: {
                    ...state.basket,
                    products: state.basket?.products?.filter(p => p.product._id !== action.payload) || [],
                },
            };

        case BASKET_ERROR:
            return { ...state, error: action.payload };

        default:
            return state;
    }
};

export default basketReducer;
