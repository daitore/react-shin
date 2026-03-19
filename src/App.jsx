import Todolist from "./Todolist.jsx";
import React, {useState ,useRef} from "react";

function  App() {
    const  [todos,setTodos] =  useState([
        { id:1,name:"Todo1",completed:false},
    ]);

    const  todoNameRef = useRef();

    const handleAddTodo = () => {
        //タスクを追加するための関数
        const name = todoNameRef.current.value;
        if (name === "") return; //空のタスクは追加しない

        setTodos((prevTodos) => {
            return [...prevTodos, { id: "1", name: name, completed: false }];
        });

        todoNameRef.current.value = ""; //入力フィールドをクリア
    }

    return (
        <>
            <Todolist todos={todos} />
            <input type="text" ref={todoNameRef} />
            <button onClick={handleAddTodo}>タスクを追加</button>
            <button>完了したタスクの削除</button>
            <div>完了したタスクの数: 0</div>
        </>
    );
}
export default App


