import Todolist from "./Todolist.jsx";
import React, {useState ,useRef} from "react";
import { v4 as uuidv4 } from 'uuid';

function  App() {
    const  [todos,setTodos] =  useState([]);

    const  todoNameRef = useRef();

    const handleAddTodo = () => {
        //タスクを追加するための関数
        const name = todoNameRef.current.value;
        if (name === "") return; //空のタスクは追加しない

        setTodos((prevTodos) => {
            return [...prevTodos, { id:uuidv4(), name: name, completed: false }];
        });

        todoNameRef.current.value = ""; //入力フィールドをクリア
    }

    const  toggleTodo = (id) => {
        //タスクの完了状態を切り替えるための関数
        const newTodos = [...todos];
        const todo = newTodos.find((todo) => todo.id === id);
        todo.completed = !todo.completed;
        setTodos(newTodos);
        };

    const handleClear = () => {
        //完了したタスクを削除するための関数
        const newTodos = todos.filter((todo) => !todo.completed);
        setTodos(newTodos);
    }

    return (
        <>
            <Todolist todos={todos} toggleTodo={toggleTodo} />
            <input type="text" ref={todoNameRef} />
            <button onClick={handleAddTodo}>タスクを追加</button>
            <button onClick={handleClear}>完了したタスクの削除</button>
            <div>残りのタスクの数:{todos.filter((todo) => !todo.completed).length}</div>
        </>
    );
}
export default App


