import TodoItem from "./TodoItem";

function TodoList({ todos, deleteTodo, toggleComplete }) {
    return (
        <ul className="list">
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    deleteTodo={deleteTodo}
                    toggleComplete={toggleComplete}
                />
            ))}
        </ul>
    );
}

export default TodoList;
