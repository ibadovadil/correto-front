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
} from '../../actions/homePage/partner/ActionTypes.js';

const initialState = {
    partners: [],
    partner: null,
    loading: false,
    error: null
};

const partnerReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PARTNERS_REQUEST:
        case CREATE_PARTNER_REQUEST:
        case UPDATE_PARTNER_REQUEST:
        case DELETE_PARTNER_REQUEST:
        case GET_PARTNER_BY_ID_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };

        case GET_PARTNERS_SUCCESS:
            return {
                ...state,
                loading: false,
                partners: action.payload,
                error: null
            };

        case GET_PARTNER_BY_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                partner: action.payload,
                error: null
            };

        case CREATE_PARTNER_SUCCESS:
            return {
                ...state,
                loading: false,
                partners: [...state.partners, action.payload], 
                error: null
            };

        case UPDATE_PARTNER_SUCCESS:
            return {
                ...state,
                loading: false,
                partners: state.partners.map(partner => 
                    partner.id === action.payload.id ? action.payload : partner
                ), 
                error: null
            };

        case DELETE_PARTNER_SUCCESS:
            return {
                ...state,
                loading: false,
                partners: state.partners.filter(partner => partner.id !== action.payload),
                error: null
            };

        case GET_PARTNERS_FAILURE:
        case CREATE_PARTNER_FAILURE:
        case UPDATE_PARTNER_FAILURE:
        case DELETE_PARTNER_FAILURE:
        case GET_PARTNER_BY_ID_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload 
            };

        default:
            return state;
    }
};

export default partnerReducer;
