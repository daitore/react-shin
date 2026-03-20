import Todolist from "./Todolist.jsx";
import React, {useState ,useRef} from "react";
import { v4 as uuidv4 } from 'uuid';

function  App() {
    const  [todos,setTodos] =  useState([]);
    //タスクのリストを管理するための状態を作成
    const  todoNameRef = useRef();
    // タスクの名前を入力するための参照を作成
    const handleAddTodo = () => {
        //タスクを追加するための関数
        const name = todoNameRef.current.value;
        if (name === "") return; //空のタスクは追加しない

        setTodos((prevTodos) => {
            return [...prevTodos, { id:uuidv4(), name: name, completed: false }];
        // 新しいタスクを追加するために、現在のタスクのリストを展開し、新しいタスクオブジェクトを追加しています。
        });

        todoNameRef.current.value = ""; //入力フィールドをクリア
    }

    const  toggleTodo = (id) => {
        //タスクの完了状態を切り替えるための関数
        const newTodos = [...todos];
        // 現在のタスクのリストをコピーして、新しいリストを作成しています。これにより、元のリストを直接変更せずに、新しいリストを作成できます。
        const todo = newTodos.find((todo) => todo.id === id);
        // 新しいリストから、指定されたIDを持つタスクを見つけています。findメソッドは、条件に一致する最初の要素を返します。
        todo.completed = !todo.completed;
        // 見つかったタスクの完了状態を切り替えています。現在の完了状態を反転させることで、タスクが完了しているかどうかを切り替えます。
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


