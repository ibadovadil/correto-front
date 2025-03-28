import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import sliderReducer from "../reducers/homePage/sliderReducer";
import offerReducer from "../reducers/homePage/offerReducer";
import loadingReducer from "../reducers/perloaderReducer";
import productReducer from "../reducers/product/productReducer";
import authReducer from "../reducers/user/authReducer";
import basketReducer from "../reducers/user/basketReducer";
import counterReducer from "../reducers/homePage/counterReducer";
import partnerReducer from "../reducers/homePage/partnerReducer";
import galleryReducer from "../reducers/gallery/galleryReducer";
import userReducer from "../reducers/user/userReducer";
import blogReducer from "../reducers/blog/blogReducer";

const rootReducer = combineReducers({
    sliders: sliderReducer,
    offers: offerReducer,
    loading: loadingReducer,
    products: productReducer,
    auth: authReducer,
    basket: basketReducer,
    counter: counterReducer,
    partner:partnerReducer,
    gallery:galleryReducer,
    user:userReducer,
    blog:blogReducer
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
