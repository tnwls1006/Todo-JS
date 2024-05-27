import React from 'react';
import useTodo from '../../hooks/useTodo';
import { Link } from 'react-router-dom';

export default function TodoList() {
    const todos = useTodo((state) => state.todos);
    const deleteTodo = useTodo((state) => state.deleteTodo);
    const toggleTodo = useTodo((state) => state.toggleTodo);
    console.log(todos);
    return (
        <div className="TodoList">
            <p> TodoList</p>
            {todos.map((todo, idx) => (
                <div
                    className="todoItems"
                    key={todo.id}
                    to={`/todos/${todo.id}`}
                    style={{
                        textDecoration: todo.isChecked ? 'line-through' : 'none',
                        color: todo.isChecked ? 'gray' : 'black',
                        cursor: 'pointer',
                    }}
                >
                    <span>{idx + 1} </span>

                    <Link key={todo.id} to={`/todos/${todo.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                        <span style={{ color: todo.isChecked ? 'gray' : 'black' }}>{todo.value} </span>
                    </Link>

                    <button onClick={() => toggleTodo(todo.id)}>완료</button>
                    <button onClick={() => deleteTodo(todo.id)}>삭제</button>
                </div>
            ))}
        </div>
    );
}