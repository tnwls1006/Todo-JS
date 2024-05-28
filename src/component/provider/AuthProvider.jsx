import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

const userInfo = {
    infoID: 'tnwls',
    infoPW: 'tnwls',
};

export default function AuthProvider({ children }) {
    const [isAuth, setIsAuth] = useState(false);
    const [userID, setUserID] = useState('');

    const login = (id, pw) => {
        if (id === userInfo.infoID && pw === userInfo.infoPW) {
            setUserID(id);
            setIsAuth(true);
            return true;
        } else {
            return false;
        }
    };

    const logout = () => {
        setUserID('');
        setIsAuth(false);
    };

    return <AuthContext.Provider value={{ isAuth, userID, login, logout }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
    return useContext(AuthContext);
}
