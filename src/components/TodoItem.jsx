function TodoItem({ todo, deleteTodo, toggleComplete }) {
    return (
        <li className="item">
            <span className={todo.completed ? "completed" : ""}>
                {todo.text}
            </span>

            <div>
                <button className="complete-btn" onClick={() => toggleComplete(todo.id)}>
                    Complete
                </button>

                <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>
                    Delete
                </button>
            </div>
        </li>
    );
}

export default TodoItem;
