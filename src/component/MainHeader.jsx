import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../Auto/AutoProvider';

import '../css/todo.css'

export default function MainHeader() {
    const navigate = useNavigate();
    const location = useLocation();
    const {isAuth, userID, logout} = useAuth();

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


  return (
    <div className='MainHeader'>
      <h1 onClick={onHome}>Todo</h1>
      <div className='UserState'>
      {location.pathname !== '/login' && !isAuth&&(
            <button onClick={onLogin}>Login</button>
      )}
      {isAuth &&(<span>{userID}  <button onClick={onLogout}>Logout</button> </span>)}
      </div>
     
    </div>
  )
}
