import React, { useState } from 'react';
import useTodo from '../../hooks/useTodo';

import '../../css/todo.css';
import styled from 'styled-components';

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
        <TodoForm onSubmit={onSubmit}>
            <TodoInput
                type="text"
                placeholder="input text"
                value={inTodo}
                onChange={(e) => setInTodo(e.target.value)}
            />
            <TodoHeaderBtn type="submit">확인</TodoHeaderBtn>
        </TodoForm>
    );
}

const TodoForm = styled.form`
    display: flex;
`;

const TodoInput = styled.input`
    width: 80%;
`;

const TodoHeaderBtn = styled.button`
    width: 15%;
`;
