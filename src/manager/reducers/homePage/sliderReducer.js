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
} from '../../actions/homePage/slider/actionTypes.js';

const initialState = {
    sliders: [], //All slider list
    slider: {}, // Set initial value to empty object, not undefined
    loading: false,
    error: null
};




const sliderReducer = (state = initialState, action) => {
    switch (action.type) {
        // Get Sliders
        case GET_SLIDERS_REQUEST:
            return { ...state, loading: true };
        case GET_SLIDERS_SUCCESS:
            return {
                ...state,
                loading: false,
                sliders: action.payload // Add Coming Sliders To Store
            };
        case GET_SLIDERS_FAIL:
            return { ...state, loading: false, error: action.payload };

        // Get Slider By Id
        case GET_SLIDER_BY_ID_REQUEST:
            return { ...state, loading: true };
        case GET_SLIDER_BY_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                slider: action.payload 
            };
        case GET_SLIDER_BY_ID_FAIL:
            return { ...state, loading: false, error: action.payload };

        // Create Slider
        case CREATE_SLIDER_REQUEST:
            return { ...state, loading: true };
        case CREATE_SLIDER_SUCCESS:
            return {
                ...state,
                loading: false,
                sliders: [...state.sliders, action.payload ]
            };
        case CREATE_SLIDER_FAIL:
            return { ...state, loading: false, error: action.payload };

        // Update Slider
        case UPDATE_SLIDER_REQUEST:
            return { ...state, loading: true };
        case UPDATE_SLIDER_SUCCESS:
            return {
                ...state,
                loading: false,
                sliders: state.sliders.map((slider) => slider.id === action.payload.id ? action.payload : slider)
            };
        case UPDATE_SLIDER_FAIL:
            return { ...state, loading: false, error: action.payload };

        // Delete Slider
        case DELETE_SLIDER_REQUEST:
            return {
                ...state,
                loading: true
            };
        case DELETE_SLIDER_SUCCESS:
            return {
                ...state,
                loading: false,
                sliders: state.sliders.filter((slider) => slider.id !== action.payload)
            };
        case DELETE_SLIDER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
}

export default sliderReducer