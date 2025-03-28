import { jwtDecode } from "jwt-decode";

export const getTokenExpiration = (token) => {
    try {
        const decoded = jwtDecode(token);
        return decoded.exp * 1000
    } catch (error) {
        return null;
    }
};

export const isTokenExpired = () => {
    const token = localStorage.getItem('token');
    if (!token) return true;
    const expiration = getTokenExpiration(token);
    return Date.now() > expiration
}