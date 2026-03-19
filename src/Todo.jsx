import React from "react";
//親から渡された「封筒」を開けています
const Todo = ({todo,toggleTodo}) => {
// todo: 表示する中身 toggleTodo: 親から預かった「チェックを切り替えるためのリモコン（関数）
    const  handleTodoClic = () => {
        toggleTodo(todo.id){/* toggleTodoのボタンを押して、親に「このID（todo.id）のチェックを切り替えて！」とメッセージを送ります。 */}
    };

    return  (
        <div>
            <label>
                <input
                    type="checkbox"
                    checked={todo.completed}//データの完了状態を見て、チェックを入れるか外すかを決めています。
                    onChange={handleTodoClic}//チェックボックスの状態が変わった瞬間に、操作を実行
                />
            < /label>
            {todo.name}//タグの外に { } で囲って書くことで、データの中にある「散歩」などのテキストを表示
        </div>
    );
};

export default Todo;