import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './provider/AuthProvider';

import '../css/todo.css';

export default function Login() {
    const [userID, setUserID] = useState('');
    const [userPW, setUserPW] = useState('');

    const navigate = useNavigate();
    const { login, isAuth } = useAuth();

    const onLogin = (e) => {
        e.preventDefault();
        if (userID.trim().length >= 3 && userID.trim().length <= 10 && userPW.trim() !== '') {
            const authInfo = login(userID, userPW);
            if (authInfo) {
                navigate('/todo');
            } else {
                alert('아이디, 비번 틀림');
            }
        } else {
            alert('아이디는 3글자 이상 10글자 이하, 비밀번호를 입력하세요');
        }
    };

    return (
        <div className="Login">
            <div className="Login-container">
                <form className="Login-Form" onSubmit={onLogin}>
                    <label htmlFor="userID">아이디</label>
                    <input type="text" id="userID" value={userID} onChange={(e) => setUserID(e.target.value)} />

                    <label htmlFor="userPW">비밀번호</label>
                    <input type="password" id="userPW" value={userPW} onChange={(e) => setUserPW(e.target.value)} />

                    <button type="submit">로그인</button>
                </form>
            </div>
        </div>
    );
}
