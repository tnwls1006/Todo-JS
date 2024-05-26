import React from 'react';

import TodoHeader from './TodoHeader';
import TodoList from './TodoList';

import '../css/todo.css';

export default function todo() {
    return (
        <div className="Todo">
            <TodoHeader />
            <TodoList />
        </div>
    );
}
