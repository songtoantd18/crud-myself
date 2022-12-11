import React, { useEffect } from "react";

const Form = ({
  input,
  setInput,
  todoList,
  setTodoList,
  editTodo,
  setEditTodo,
}) => {
  const updateTodo = (title, id, completed) => {
    console.log("title:", title);
    console.log("id:", id);
    console.log("completed:", completed);

    const newTodo = todoList.map((item) =>
      item.id === id ? { title, id, completed } : item
    );
    setTodoList(newTodo);
    setEditTodo("");
  };
  useEffect(() => {
    console.log("editTodo:", editTodo);
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [setInput, editTodo]);
  const onInputChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editTodo) {
      setTodoList([
        ...todoList,
        {
          id: todoList.length === 0 ? 0 : todoList[todoList.length - 1].id + 1,

          title: input,
          completed: false,
        },
      ]);
      setInput("");
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };
  return (
    <div>
      <form>
        <input
          className=" task-input"
          type="text"
          placeholder="enter to do"
          value={input}
          required
          onChange={onInputChange}
          //   onClick={handleSubmit}
        />
        <button className="button-add" onClick={handleSubmit} type="submit">
          {editTodo ? "ok" : "add"}
        </button>
      </form>
    </div>
  );
};

export default Form;
