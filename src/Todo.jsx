import React from "react";

const Todo = ({todo,toggleTodo}) => {

    const  handleTodoClic = () => {
        toggleTodo(todo.id)
    };

    return  (
        <div>
            <label>
                <input
                    type="checkbox"
                    checked={todo.completed}
                    readOnly onChange={handleTodoClic}
                />
            < /label>
            {todo.name}
        </div>
    );
};

export default Todo;