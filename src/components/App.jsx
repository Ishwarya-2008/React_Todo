import React from "react";
import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import './style.css';

function App() {
    const [todos, setTodos] = useState([]);

    const addTodo = (text) => {
        setTodos([
            ...todos,
            { id: Date.now(), text, completed: false }
        ]);
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const toggleComplete = (id) => {
        setTodos(
            todos.map(todo =>
                todo.id === id
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )
        );
    };

    return (
        <div className="container">
            <h2>My ToDo List</h2>

            <TodoInput addTodo={addTodo} />

            {todos.length === 0 ? (
                <p className="empty">No tasks added yet</p>
            ) : (
                <TodoList
                    todos={todos}
                    deleteTodo={deleteTodo}
                    toggleComplete={toggleComplete}
                />
            )}
        </div>
    );
}

export default App;
