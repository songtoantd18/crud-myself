import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import "../src/styles/App.css";
import Header from "./components/Header";

const App = () => {
  const initialState = JSON.parse(localStorage.getItem("todoList")) || [];
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Form
            input={input}
            setInput={setInput}
            todoList={todoList}
            setTodoList={setTodoList}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
        </div>
        <div>
          <TodoList
            todoList={todoList}
            setTodoList={setTodoList}
            setEditTodo={setEditTodo}
          />
        </div>
      </div>
    </div>
    // <div>
    //   <div>
    //     <Form
    //       input={input}
    //       setInput={setInput}
    //       todoList={todoList}
    //       setTodoList={setTodoList}
    //       editTodo={editTodo}
    //       setEditTodo={setEditTodo}
    //     />

    //     <TodoList
    //       todoList={todoList}
    //       setTodoList={setTodoList}
    //       setEditTodo={setEditTodo}
    //     />
    //   </div>
    // </div>
  );
};

export default App;
