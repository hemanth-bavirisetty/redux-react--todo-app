import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export default function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center w-1/2   p-5 text-white ">
          <h1>Add Todo</h1>
          <form onSubmit={handleAddTodo}>
            <input
              className="h-10 w-60 m-2 font-bold py-2 px-4 rounded text-black"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              className="h-10 w-fit m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Add Todo
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
