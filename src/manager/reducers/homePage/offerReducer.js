import {
    GET_OFFER_REQUEST,
    GET_OFFER_SUCCESS,
    GET_OFFER_FAIL,

    GET_OFFER_BY_ID_REQUEST,
    GET_OFFER_BY_ID_SUCCESS,
    GET_OFFER_BY_ID_FAIL,

    CREATE_OFFER_REQUEST,
    CREATE_OFFER_SUCCESS,
    CREATE_OFFER_FAIL,

    UPDATE_OFFER_REQUEST,
    UPDATE_OFFER_SUCCESS,
    UPDATE_OFFER_FAIL,

    DELETE_OFFER_REQUEST,
    DELETE_OFFER_SUCCESS,
    DELETE_OFFER_FAIL
} from '../../actions/homePage/offer/actionTypes.js';

const initialState = {
    offers: [],
    offer: {},
    loading: false,
    error: null
};
const offerReducer = (state = initialState, action) => {
    switch (action.type) {
        // Get Offer
        case GET_OFFER_REQUEST: return { ...state, loading: true };
        case GET_OFFER_SUCCESS: return { ...state, loading: false, offers: action.payload };
        case GET_OFFER_FAIL: return { ...state, loading: false, error: action.payload };

        // Get by Id
        case GET_OFFER_BY_ID_REQUEST: return { ...state, loading: true };
        case GET_OFFER_BY_ID_SUCCESS: return { ...state, loading: false, offer: action.payload };
        case GET_OFFER_BY_ID_FAIL: return { ...state, loading: false, error: action.payload }

        // Create Offer
        case CREATE_OFFER_REQUEST: return { ...state, loading: true };
        case CREATE_OFFER_SUCCESS: return { ...state, loading: false, offers: [...state.offers, action.payload] };
        case CREATE_OFFER_FAIL: return { ...state, loading: false, error: action.payload };

        // Update Offer
        case UPDATE_OFFER_REQUEST: return { ...state, loading: true };
        case UPDATE_OFFER_SUCCESS: return { ...state, loading: false, offers: state.offers.map((offer) => offer.id === action.payload.id ? action.payload : offer) };
        case UPDATE_OFFER_FAIL: return { ...state, loading: false, error: action.payload };

        // Delete Offer
        case DELETE_OFFER_REQUEST: return { ...state, loading: true };
        case DELETE_OFFER_SUCCESS: return { ...state, loading: false, offers: state.offers.filter((offer) => offer.id !== action.payload) };
        case DELETE_OFFER_FAIL: return { ...state, loading: false, error: action.payload }
        default:
            return state;
    }
}

export default offerReducer;