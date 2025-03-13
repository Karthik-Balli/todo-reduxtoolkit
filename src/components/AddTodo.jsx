import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "../features/todo/todoSlice";
import "../App.css";

const AddTodo = () => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();

    dispatch(addToDo(input));
    setInput("");
  };

  return (
    <div>
      <h1>Hola AddTodo page</h1>
      <form onSubmit={addTodoHandler}>
        <input
          type="text"
          placeholder="Enter a Todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default AddTodo;
