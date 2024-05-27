import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AutoProvider';

export default function PrivateRoute({ element }) {
    const { isAuth } = useAuth();

    return isAuth ? element : <Navigate to="/login" />;
}


