import React from 'react';
import './App.css';
import Todo from './component/Todo';
import Login from './component/Login';
import Start from './component/Start';
import TodoView from './component/Todos/TodoView';
import AutoProvider from './Auto/AutoProvider';
import ProtectedRoute from './Auto/ProtectedRoute';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Start />} />
                <Route path="/login" element={<Login />} />
                <Route path="/todo" element={<ProtectedRoute element={<Todo />} />} />
                <Route path="/todos/:id" element={<ProtectedRoute element={<TodoView />} />} />
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
