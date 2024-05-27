import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export default function AutoProvider({ children }) {
    const [isAuth, setIsAuth] = useState(false);
    const [userID, setUserID] = useState('');

    const login = (id) => {
        setUserID(id)
        setIsAuth(true);
    };

    const logout = () => {
        setUserID('')
        setIsAuth(false);
    };

    return <AuthContext.Provider value={{ isAuth,userID, login, logout }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
    return useContext(AuthContext);
}
