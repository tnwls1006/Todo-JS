import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export default function AutoProvider({ children }) {
    const [isAuth, setIsAuth] = useState(false);

    const login = () => {
        setIsAuth(true);
    };

    const logout = () => {
        setIsAuth(false);
    };

    return <AuthContext.Provider value={{ isAuth, login, logout }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
    return useContext(AuthContext);
}
