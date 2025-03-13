import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeToDo } from "../features/todo/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();
  return (
    <>
      <h1>Hello Todo's</h1>
      {todos.map((todo) => (
        <div key={todo.id} className="todocard">
          <h2>{todo.text} </h2>
          <button onClick={() => dispatch(removeToDo(todo.id))}>Delete</button>
        </div>
      ))}
    </>
  );
};

export default Todos;
