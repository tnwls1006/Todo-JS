import React, { useState } from 'react';
import useTodo from '../../hooks/useTodo';

import '../../css/todo.css';

export default function TodoHeader() {
    const [inTodo, setInTodo] = useState('');
    const addTodo = useTodo((state) => state.addTodo);

    const onSubmit = (e) => {
        e.preventDefault();
        if (inTodo.trim()) {
            addTodo(inTodo);
            setInTodo('');
        }
    };

    return (
        <div className="TodoHeader">
            <p>Todo</p>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="input text"
                    value={inTodo}
                    onChange={(e) => setInTodo(e.target.value)}
                />
                <button type="submit">확인</button>
            </form>
        </div>
    );
}
