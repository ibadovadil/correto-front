import React from 'react';
import { Navigate } from 'react-router-dom';
import { isTokenExpired } from '../utils/AuthHelper';

const privateRoute = ({ element: Component }) => {
    if (isTokenExpired()) {

        localStorage.removeItem('token');
        setTimeout(() => {
            window.location.reload();
        }, 100);
                return <Navigate to='/login' state={{ message: 'Your session has expired. Please log in again.' }} />;
    }

    return Component;
}

export default privateRoute;
