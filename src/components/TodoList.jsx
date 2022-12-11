import React from "react";

const TodoList = ({ todoList, setTodoList, setEditTodo, editTodo }) => {
  const handleDelete = ({ id, title }, index) => {
    setTodoList(todoList.filter((item) => item.id !== id));
  };
  const handleCheck = (todo) => {
    setTodoList(
      todoList.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  const handleEdit = ({ id }) => {
    const findTodo = todoList.find((item) => {
      return item.id === id;
    });
    setEditTodo(findTodo);
  };

  return (
    <div>
      <div>
        {todoList.map((todo) => {
          return (
            <li className="todo-list " key={todo.id}>
              {/* \\\\\\\\\\\\\{todo.id}//////////// ___{todo.title}___ */}
              <input
                type="text"
                value={todo.title}
                className={`list ${todo.completed ? "completed" : ""}`}
                onChange={(e) => e.preventDefault()}
              />

              <button
                className="button-complete task-button"
                onClick={() => handleCheck(todo)}
              >
                <i className="fa fa-check-circle"></i>
              </button>
              <button
                className="button-edit task-button"
                onClick={() => handleEdit(todo)}
              >
                <i className="fa fa-edit"></i>
              </button>
              <button
                className="button-delete task-button"
                onClick={() => handleDelete(todo)}
              >
                <i className="fa fa-trash"></i>
              </button>
              <div></div>
            </li>
          );
        })}
      </div>
      {/* {todoList.map((todo, index) => {
        return (
          <li className="todo-list " key={todo.id}>
            <input className={`list ${todo.completed ? "completed" : ""}`}>
              {todo.title}

              <button
                className="button-complete task-button"
                onClick={() => handleCheck(todo)}
              >
                <i className="fa fa-check-circle"></i>
              </button>
              <button
                className="button-edit task-button"
                onClick={() => handleEdit(todo)}
              >
                <i className="fa fa-edit"></i>
              </button>
              <button
                className="button-delete task-button"
                onClick={() => handleDelete(todo, index)}
              >
                <i className="fa fa-trash"></i>
              </button>
            </input>
          </li>
        );
      })} */}
    </div>
  );
};

export default TodoList;
