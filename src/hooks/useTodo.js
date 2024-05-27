import { create } from 'zustand';

const useTodo = create((set) => ({
    todos: [],
    id: 1,
    addTodo: (todo) =>
        set((state) => ({
            todos: [...state.todos, { id: state.id, value: todo, isChecked: false }],
            id: state.id + 1,
        })),
    deleteTodo: (id) =>
        set((state) => ({
            todos: state.todos.filter((todo) => todo.id !== id),
        })),
    toggleTodo: (id) =>
        set((state) => ({
            todos: state.todos.map((todo) => (todo.id === id ? { ...todo,isChecked: !todo.isChecked } : todo)),
        })),
}));

export default useTodo;
