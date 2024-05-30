import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from './provider/AuthProvider';

import styled from 'styled-components';
import { useTheme } from './style/ThemeProvider';

export default function MainHeader() {
    const { isDark, setIsDark } = useContext(useTheme);

    const navigate = useNavigate();
    const location = useLocation();
    const { isAuth, userID, logout } = useAuth();

    const onHome = () => {
        navigate('/');
    };

    const onLogin = () => {
        navigate('/login');
    };

    const onLogout = () => {
        logout();
        navigate('/login');
    };

    // const ontheme = () => {};

    return (
        <Header>
            <Title onClick={onHome}>Todo</Title>
            <UserState>
                {location.pathname !== '/login' && !isAuth && <LoginBtn onClick={onLogin}>Login</LoginBtn>}
                {isAuth && (
                    <UserSpan>
                        {userID} <LogoutBtn onClick={onLogout}>Logout</LogoutBtn>{' '}
                    </UserSpan>
                )}
                {/* <Button onClick={ontheme}>다크 모드</Button> */}
            </UserState>
        </Header>
    );
}

const Header = styled.div`
    height: 20%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
`;

const Title = styled.h1`
    cursor: pointer;
`;

const UserState = styled.div`
    display: flex;
    align-items: center;
`;

const LoginBtn = styled.button`
    width: 5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 15px;
    font-weight: bold;
    font-size: 1.2rem;
`;

const UserSpan = styled.span`
    display: flex;
    align-items: center;
`;

const LogoutBtn = styled.button`
    margin-left: 0.5rem;
    padding: 0.5rem 1rem;
    width: auto;
    height: auto;
    font-size: 1rem;
    border-radius: 15px;
    background-color: white;
`;

// const DarkBtn = styled.div`
//     margin-left: 0.5rem;
//     padding: 0.5rem 1rem;
//     width: auto;
//     height: auto;
//     font-size: 1rem;
//     border: 1px solid black;
//     border-radius: 15px;
//     background-color: white;
// `;
