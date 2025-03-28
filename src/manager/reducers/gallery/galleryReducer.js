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
} from '../../actions/gallery/ActionTypes';

const initialState = {
    galleries: [],
    gallery: {},
    error: null,
    loading: false
};


const galleryReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_GALLERY_REQUEST:
        case CREATE_GALLERY_REQUEST:
        case UPDATE_GALLERY_REQUEST:
        case GET_GALLERY_BY_ID_REQUEST:
        case DELETE_GALLERY_REQUEST:
            return { ...state, loading: true };

        case GET_GALLERY_SUCCESS:
            return { ...state, loading: false, galleries: action.payload };
        case GET_GALLERY_BY_ID_SUCCESS:
            return { ...state, loading: false, gallery: action.payload };
        case CREATE_GALLERY_SUCCESS:
            return { ...state, loading: false, galleries: [...state.galleries, action.payload] };
        case UPDATE_GALLERY_SUCCESS:
            return { ...state, loading: false, galleries: state.galleries.map((gallery) => gallery._id === action.payload._id ? action.payload : gallery) };
        case DELETE_GALLERY_SUCCESS:
            return { ...state, loading: false, galleries: state.galleries.filter((gallery) => gallery.id !== action.payload) };
        case GET_GALLERY_FAIL:
        case CREATE_GALLERY_FAIL:
        case UPDATE_GALLERY_FAIL:
        case GET_GALLERY_BY_ID_FAIL:
        case DELETE_GALLERY_FAIL:
            return { ...state, loading: false, error: action.payload };
        default: return state
    }
}

export default galleryReducer;