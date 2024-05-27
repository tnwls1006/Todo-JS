import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AutoProvider';

function ProtectedRoute({ element }) {
    const { isAuth } = useAuth();

    return isAuth ? element : <Navigate to="/login" />;
}

export default ProtectedRoute;
