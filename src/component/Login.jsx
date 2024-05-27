import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Auto/AutoProvider';

import '../css/todo.css';

export default function Login() {
    const [userID, setUserID] = useState('');
    const [userPW, setUserPW] = useState('');

    const navigate = useNavigate();

    const { login } = useAuth;

    const onLogin = (e) => {
        e.preventDefault();
        if (userID.trim() !== '' && userPW.trim() !== '') {
            login();
            navigate('/todo');
        } else {
            alert('아이디와 비밀번호를 입력하세요');
        }
    };

    return (
        <div className="Login-container">
            <h1>Todo</h1>
            <form className="Login-Form" onSubmit={onLogin}>
                <label htmlFor="userID">아이디</label>
                <input type="text" id="userID" value={userID} onChange={(e) => setUserID(e.target.value)} />
                <label htmlFor="userPW">비밀번호</label>
                <input type="password" id="userPW" value={userPW} onChange={(e) => setUserPW(e.target.value)} />
                <button type="submit">로그인</button>
            </form>
        </div>
    );
}
