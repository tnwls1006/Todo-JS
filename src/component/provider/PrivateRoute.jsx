import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthProvider';

export default function PrivateRoute({ element }) {
    const { isAuth } = useAuth();

    return isAuth ? element : <Navigate to="/login" />;
}
