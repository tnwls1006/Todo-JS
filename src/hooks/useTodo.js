import { create } from 'zustand';
import todo from '../component/todo';

const useTodo = create((set) => ({
    todos: [],
    id: 1,
    addTodo: (todo) =>
        set((state) => ({
            todos: [{ id: state.id, value: todo, isChecked: false }, ...state.todos],
            id: state.id + 1,
        })),
    deleteTodo: (id) =>
        set((state) => ({
            todos: state.todos.filter((todo) => todo.id !== id),
        })),
    toggleTodo: (id) =>
        set((state) => ({
            todos: state.todos.map((todo) => (todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo)),
        })),
}));

export default useTodo;
