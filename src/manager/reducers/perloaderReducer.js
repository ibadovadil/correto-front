const SHOW_LOADING = "SHOW_LOADING";
const HIDE_LOADING = "HIDE_LOADING";

const initialState = {
    loading: false,
};

export const loadingReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_LOADING:
            return { loading: true };
        case HIDE_LOADING:
            return { loading: false };
        default:
            return state;
    }
};

export default loadingReducer;