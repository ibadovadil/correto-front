import { CREATE_COUNTER_FAIL, CREATE_COUNTER_REQUEST, CREATE_COUNTER_SUCCESS, DELETE_COUNTER_FAIL, 
    DELETE_COUNTER_REQUEST, DELETE_COUNTER_SUCCESS, GET_COUNTER_BY_ID_FAIL, GET_COUNTER_BY_ID_REQUEST, 
    GET_COUNTER_BY_ID_SUCCESS, GET_COUNTER_FAIL, GET_COUNTER_REQUEST, GET_COUNTER_SUCCESS, UPDATE_COUNTER_FAIL,
     UPDATE_COUNTER_REQUEST, UPDATE_COUNTER_SUCCESS } from '../../actions/homePage/counter/actionTypes'

const initialState = {
    counters: [],
    counter: {},
    loading: false,
    error: null
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        //Get
        case GET_COUNTER_REQUEST: return { ...state, loading: true };
        case GET_COUNTER_SUCCESS: return { ...state, loading: false, counters: action.payload };
        case GET_COUNTER_FAIL: return { ...state, loading: false, error: action.payload };

        //Get By Id
        case GET_COUNTER_BY_ID_REQUEST: return { ...state, loading: true };
        case GET_COUNTER_BY_ID_SUCCESS: return { ...state, loading: false, counter: action.payload };
        case GET_COUNTER_BY_ID_FAIL: return { ...state, loading: false, error: action.payload };

        //Create
        case CREATE_COUNTER_REQUEST: return { ...state, loading: true };
        case CREATE_COUNTER_SUCCESS: return { ...state, loading: false, counters: [...state.counters, action.payload] };
        case CREATE_COUNTER_FAIL: return { ...state, loading: false, error: action.payload };

        //Update
        case UPDATE_COUNTER_REQUEST: return { ...state, loading: true };
        case UPDATE_COUNTER_SUCCESS: return { ...state, loading: false, counters: state.counters.map((counter) => counter.id === action.payload.id ? action.payload : counter) };
        case UPDATE_COUNTER_FAIL: return { ...state, loading: false, error: action.payload };

        //Delete
        case DELETE_COUNTER_REQUEST: return { ...state, loading: true };
        case DELETE_COUNTER_SUCCESS: return { ...state, loading: false, counters: state.counters.filter((counter) => counter.id !== action.payload) };
        case DELETE_COUNTER_FAIL: return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default counterReducer;