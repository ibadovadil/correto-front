import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import sliderReducer from "../reducers/homePage/sliderReducer";
import offerReducer from "../reducers/homePage/offerReducer";
import loadingReducer from "../reducers/perloaderReducer";

const rootReducer = combineReducers({
    sliders: sliderReducer,
    offers: offerReducer,
    loading:loadingReducer
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
