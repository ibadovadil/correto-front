import {jwtDecode} from 'jwt-decode';
const decodeToken = (token) => {
    try {
        return jwtDecode(token);
    } catch (error) {
        console.error('Token decoding failed',error)
        return null;
    }
};

//Getting User information
export const getUserInfoFromToken= () => {
    const token = localStorage.getItem('token');
    if (!token) {
    return null;    
    }
    const decoded = decodeToken(token);
    return decoded?decoded.user:null;
}