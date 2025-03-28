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
} from '../../actions/blog/ActionTypes';

const initialState = {
    blogs: [],
    blog: {},
    error: null,
    loading: false
};
const blogReucer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BLOG_REQUEST:
        case CREATE_BLOG_REQUEST:
        case UPDATE_BLOG_REQUEST:
        case GET_BLOG_BY_ID_REQUEST:
        case DELETE_BLOG_REQUEST:
            return { ...state, loading: true };

        case GET_BLOG_SUCCESS:
            return { ...state, loading: false, blogs: action.payload };
        case GET_BLOG_BY_ID_SUCCESS:
            return { ...state, loading: false, blog: action.payload };
        case CREATE_BLOG_SUCCESS:
            return { ...state, loading: false, blogs: [...state.blogs, action.payload] };
        case UPDATE_BLOG_SUCCESS:
            return { ...state, loading: false, blogs: state.blogs.map((blog) => blog._id === action.payload._id ? action.payload : blog) };
        case DELETE_BLOG_SUCCESS:
            return { ...state, loading: false, blogs: state.blogs.filter((blog) => blog.id !== action.payload) };
        case GET_BLOG_FAIL:
        case CREATE_BLOG_FAIL:
        case UPDATE_BLOG_FAIL:
        case GET_BLOG_BY_ID_FAIL:
        case DELETE_BLOG_FAIL:
            return { ...state, loading: false, error: action.payload };
        default: return state;
    }
}
export default blogReucer;