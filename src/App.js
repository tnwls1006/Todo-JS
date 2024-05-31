import React, { useState } from 'react';
import Todo from './component/Todo';
import Login from './component/Login';
import TodoView from './component/todos/TodoView';
import AutoProvider from './component/provider/AuthProvider';
import PrivateRoute from './component/provider/PrivateRoute';
import MainHeader from './component/MainHeader';

import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './component/style/Theme';
import { GlobalStyle } from './component/style/GlobalStyle';

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
    // const [theme, setTheme] = useState('dark');

    // const toggleTheme = () => {
    //     setTheme(() => {
    //         return theme === 'dark' ? 'light' : 'dark';
    //     });
    // };
    return (
        // <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
        <ThemeProvider>
            <GlobalStyle />
            <div className="App">
                {/* style={{ backgroundColor: isDark ? darkTheme.background : lightTheme.background, }} */}
                <AutoProvider>
                    <Router />
                </AutoProvider>
            </div>
            //{' '}
        </ThemeProvider>
    );
}
