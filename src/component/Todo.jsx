import React from 'react';
import TodoHeader from './todos/TodoHeader';
import TodoList from './todos/TodoList';

import styled from 'styled-components';

export default function Todo() {
    return (
        <Todos>
            <TodoHeader />
            <TodoList />
        </Todos>
    );
}

const Todos = styled.div`
    font-weight: bold;
    font-size: 2rem;
`;
