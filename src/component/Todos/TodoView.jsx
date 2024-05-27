import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useTodo from '../../hooks/useTodo';

import '../../css/todo.css'

export default function TodoView(state) {
    const { id } = useParams();

    const { todos } = useTodo();
    const currentTodo = todos.find((v) => v.id === +id);

    return (
        <div className="TodoView">
            <p>{currentTodo.value}</p>
            <Link to={`/todo`}>
                <button>이전</button>
            </Link>
        </div>
    );
}
