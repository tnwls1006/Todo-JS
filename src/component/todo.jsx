import React from 'react';
import TodoHeader from './Todos/TodoHeader';
import TodoList from './Todos/TodoList';

import '../css/todo.css';

export default function todo() {
    return (
        <div className="Todo">
            <TodoHeader />
            <TodoList />
        </div>
    );
}
