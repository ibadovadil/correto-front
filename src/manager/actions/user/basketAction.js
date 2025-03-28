import axios from "axios";
const FETCH_BASKET_REQUEST = "FETCH_BASKET_REQUEST"
const FETCH_BASKET_SUCCESS = "FETCH_BASKET_SUCCESS";
const ADD_TO_BASKET = "ADD_TO_BASKET";
const BASKET_ERROR = "BASKET_ERROR";
const UPDATE_BASKET_SUCCESS = "UPDATE_BASKET_SUCCESS"

export const getBasket = () => async (dispatch) => {
    try {
        const token = localStorage.getItem("token");
        if (!token) {
            return dispatch({ type: BASKET_ERROR, payload: "No token found" });
        }

        const response = await axios.get(`${process.env.REACT_APP_API_URL}/basket`, {
            headers: {
                "X-Auth-Token": token,
            },
        });

        dispatch({ type: FETCH_BASKET_SUCCESS, payload: response.data });
    } catch (error) {
        const errorMessage = error.response ? error.response.data : error.message || "An error occurred";
        dispatch({ type: BASKET_ERROR, payload: errorMessage });
    }
};

export const addToBasket = (product) => async (dispatch) => {
    try {
        const token = localStorage.getItem("token");
        const response = await axios.post(
            `${process.env.REACT_APP_API_URL}/basket`,
            { products: [product] },
            {
                headers: {
                    "X-Auth-Token": token,
                    "Content-Type": "application/json"

                },
            }
        );
        dispatch({ type: ADD_TO_BASKET, payload: response.data });
    } catch (error) {
        const errorMessage = error.response ? error.response.data : error.message || "Bir hata oluştu";
        dispatch({ type: BASKET_ERROR, payload: errorMessage });
    }
};

export const removeFromBasket = (productId) => async (dispatch) => {
    try {
        const token = localStorage.getItem("token");
        if (!token) {
            return dispatch({ type: BASKET_ERROR, payload: "Please Login And Register" });
        }

        await axios.delete(`${process.env.REACT_APP_API_URL}/basket/${productId}`, {
            headers: {
                "X-Auth-Token": token,
            },
        });

        const response = await axios.get(`${process.env.REACT_APP_API_URL}/basket`, {
            headers: {
                "X-Auth-Token": token,
            },
        });

        dispatch({ type: FETCH_BASKET_SUCCESS, payload: response.data });

    } catch (error) {
        dispatch({ type: BASKET_ERROR, payload: error.response?.data || "Something went wrong" });
    }
};

export const deleteBasket = () => async (dispatch) => {
    try {
        const token = localStorage.getItem("token");

        if (!token) {
            return dispatch({ type: BASKET_ERROR, payload: "Please Login And Register" });
        }

        await axios.delete(`${process.env.REACT_APP_API_URL}/basket`, {
            headers: {
                "X-Auth-Token": token,
            },
        });

        dispatch({ type: FETCH_BASKET_SUCCESS, payload: null });

    } catch (error) {
        dispatch({ type: BASKET_ERROR, payload: error.response?.data || "Something went wrong" });
    }
};


export const updateBasket = (productId, quantity) => async (dispatch) => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.put('http://localhost:3001/basket', { productId, quantity }, { headers: { 'X-Auth-Token': token } });
        dispatch({ type: UPDATE_BASKET_SUCCESS, payload: response.data.basket });
    } catch (error) {
        console.error(error);
    }
};



// export const updateBasket = (productId, quantity, action) => async (dispatch) => {
//     try {
//         const token = localStorage.getItem("token");
//         if (!token) {
//             return dispatch({ type: BASKET_ERROR, payload: "Lütfen giriş yapın ve kayıt olun" });
//         }

//         const response = await axios.put(
//             `${process.env.REACT_APP_API_URL}/basketUpdate`,
//             { productId, quantity, action },
//             { headers: { "X-Auth-Token": token } }
//         );

//         dispatch({ type: FETCH_BASKET_SUCCESS, payload: response.data.basket });
//     } catch (error) {
//         let errorMessage = "Bir hata oluştu";
//         if (error.response && error.response.data) {
//             errorMessage = error.response.data.message || errorMessage;
//         }
//         dispatch({ type: BASKET_ERROR, payload: errorMessage });
//     }
// };