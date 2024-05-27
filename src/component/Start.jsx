import React from 'react';
import { useNavigate } from 'react-router-dom';

import '../css/todo.css';

export default function Start() {
    const navigate = useNavigate('');

    const onLogin = () => {
        navigate('/login');
    };

    return (
        <div className="Start">
            <h1>Todo</h1>
            <button onClick={onLogin}>Login</button>
        </div>
    );
}
