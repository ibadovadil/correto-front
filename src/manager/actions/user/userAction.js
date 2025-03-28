import axios from "axios";

// user action types
export const USER_LIST_REQUEST = 'USER_LIST_REQUEST';
export const USER_LIST_SUCCESS = 'USER_LIST_SUCCESS';
export const USER_LIST_FAIL = 'USER_LIST_FAIL';

export const USER_GET_REQUEST = 'USER_GET_REQUEST';
export const USER_GET_SUCCESS = 'USER_GET_SUCCESS';
export const USER_GET_FAIL = 'USER_GET_FAIL';

export const USER_PROFILE_REQUEST = "USER_PROFILE_REQUEST";
export const USER_PROFILE_SUCCESS = "USER_PROFILE_SUCCESS";
export const USER_PROFILE_FAIL = "USER_PROFILE_FAIL";

export const USER_CREATE_REQUEST = 'USER_CREATE_REQUEST';
export const USER_CREATE_SUCCESS = 'USER_CREATE_SUCCESS';
export const USER_CREATE_FAIL = 'USER_CREATE_FAIL';

export const USER_UPDATE_REQUEST = 'USER_UPDATE_REQUEST';
export const USER_UPDATE_SUCCESS = 'USER_UPDATE_SUCCESS';
export const USER_UPDATE_FAIL = 'USER_UPDATE_FAIL';

export const USER_DELETE_REQUEST = 'USER_DELETE_REQUEST';
export const USER_DELETE_SUCCESS = 'USER_DELETE_SUCCESS';
export const USER_DELETE_FAIL = 'USER_DELETE_FAIL';

export const getUsers = () => async (dispatch) => {
    try {
        dispatch({ type: USER_LIST_REQUEST })
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/user`);
        const data = response.data;
        dispatch({ type: USER_LIST_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: USER_LIST_FAIL, payload: error.response?.data?.message || error.message })

    }
};


export const getUserById = (id) => async (dispatch) => {
    try {
        dispatch({ type: USER_GET_REQUEST });
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/user/${id}`);
        dispatch({ type: USER_GET_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({
            type: USER_GET_FAIL,
            payload: error.response?.data?.message || error.message
        });
    }
}

export const getUserProfile = () => async (dispatch) => {
    try {
        dispatch({ type: USER_PROFILE_REQUEST })
        const token = localStorage.getItem('token');
        if (!token) {
            return dispatch({
                type: USER_PROFILE_FAIL,
                payload: 'No token found',
            });
        }
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/profile`, {
            headers: {
                'X-Auth-Token': token
            }
        })
        const data = response.data;
        dispatch({ type: USER_PROFILE_SUCCESS, payload: data })

    } catch (error) {
        dispatch({ type: USER_PROFILE_FAIL, payload: error.response?.data?.message || error.message })

    }
}



// export const updateUser = (id, userData) => async (dispatch) => {
//     try {
//         dispatch({ type: USER_UPDATE_REQUEST });
//         const response = await axios.put(`${process.env.REACT_APP_API_URL}/user/${id}`, userData);
//         dispatch({ type: USER_UPDATE_SUCCESS, payload: response.data });
//     } catch (error) {
//         dispatch({ 
//             type: USER_UPDATE_FAIL, 
//             payload: error.response?.data?.message || error.message 
//         });
//     }
// };


export const updateUserProfile = (userData) => async (dispatch) => {
    try {
        dispatch({ type: USER_UPDATE_REQUEST });

        const token = localStorage.getItem('token');
        if (!token) {
            return dispatch({
                type: USER_UPDATE_FAIL,
                payload: 'No token found',
            });
        }

        console.log("Gönderilen userData:", userData); // Burada userData'yı kontrol et

        const response = await axios.put(`${process.env.REACT_APP_API_URL}/user/${userData._id}`, userData, {
            headers: { 'X-Auth-Token': token }
        });

        dispatch({ type: USER_UPDATE_SUCCESS, payload: response.data });

    } catch (error) {
        dispatch({
            type: USER_UPDATE_FAIL,
            payload: error.response?.data?.message || error.message,
        });
    }
};

//* Code 2
// export const updateUserProfile = (userData) => async (dispatch, getState) => {
//     try {
//         dispatch({ type: USER_UPDATE_REQUEST });

//         const token = localStorage.getItem('token');
//         if (!token) {
//             return dispatch({
//                 type: USER_UPDATE_FAIL,
//                 payload: 'No token found',
//             });
//         }

//         // Redux'tan kullanıcı bilgisini al
//         const { user } = getState().user;
//         const userId = userData.id || user._id; // Eğer gelen userData'da ID yoksa Redux'tan al

//         if (!userId) {
//             return dispatch({
//                 type: USER_UPDATE_FAIL,
//                 payload: 'User ID is missing',
//             });
//         }

//         const response = await axios.put(`${process.env.REACT_APP_API_URL}/user/${userId}`, userData, {
//             headers: { 'X-Auth-Token': token }
//         });

//         dispatch({ type: USER_UPDATE_SUCCESS, payload: response.data });

//     } catch (error) {
//         dispatch({
//             type: USER_UPDATE_FAIL,
//             payload: error.response?.data?.message || error.message,
//         });
//     }
// };




export const deleteUser = (id) => async (dispatch) => {
    try {
        dispatch({ type: USER_DELETE_REQUEST });
        await axios.delete(`${process.env.REACT_APP_API_URL}/user/${id}`);
        dispatch({ type: USER_DELETE_SUCCESS, payload: id });
    } catch (error) {
        dispatch({ 
            type: USER_DELETE_FAIL, 
            payload: error.response?.data?.message || error.message 
        });
    }
};
