import React  from "react";
import Todo from "./Todo.jsx";

const Todolist = ({todos} ) => {
    return todos.map((todo) => <Todo key={todo.name} todo={todo} />);
};

export  default Todolist;
