import React from "react";

const TodoList = ({ todoList, setTodoList, setEditTodo, editTodo }) => {
  const handleDelete = ({ id, title }, index) => {
    console.log("id:", id);
    console.log("title:", title);
    console.log("index:", index);
    setTodoList(todoList.filter((item) => item.id !== id));
  };
  const handleCheck = (todo) => {
    console.log("check:", `check`);
    setTodoList(
      todoList.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        console.log("item:", item);
        return item;
      })
    );
  };
  const handleEdit = ({ id }) => {
    const findTodo = todoList.find((item) => {
      return item.id === id;
    });
    console.log("findTodo:", findTodo);
    setEditTodo(findTodo);
    console.log("editTodo:", editTodo);
  };

  return (
    <div>
      {todoList.map((todo, index) => {
        console.log("todo.completed:", todo.completed);
        return (
          <li
            className={`list ${todo.completed ? "completed" : ""}`}
            key={todo.id}
          >
            day la in dex{index}__ day la id {todo.id}:{todo.title}
            {/* <input
              type="text"
              value={todo.title}
              onChange={(e) => e.preventDefault()}
            /> */}
            <button onClick={() => handleCheck(todo)}>check</button>
            <button onClick={() => handleEdit(todo)}>edit</button>
            <button onClick={() => handleDelete(todo, index)}>delete</button>
          </li>
        );
      })}
    </div>
  );
};

export default TodoList;
