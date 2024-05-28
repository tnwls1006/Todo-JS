import React from 'react';
import Todo from './component/Todo';
import Login from './component/Login';
import TodoView from './component/todos/TodoView';
import AutoProvider from './component/provider/AuthProvider';
import PrivateRoute from './component/provider/PrivateRoute';
import MainHeader from './component/MainHeader';

import './App.css';
import styled from 'styled-components';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Router = () => {
    return (
        <BrowserRouter>
            <MainHeader />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/todo" element={<PrivateRoute element={<Todo />} />} />
                <Route path="/todos/:id" element={<PrivateRoute element={<TodoView />} />} />
            </Routes>
        </BrowserRouter>
    );
};

export default function App() {
    return (
        <div className="App">
            <AutoProvider>
                <Router />
            </AutoProvider>
        </div>
    );
}
