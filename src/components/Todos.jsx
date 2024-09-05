import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  console.log(todos);
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center w-1/2  rounded-lg ">
          <div className="w-full rounded-xl ">
            {todos.map((todo) => (
              <div
                key={todo.id}
                className="flex flex-row outline-none my-2 shadow-xl w-full"
              >
                <input
                  value={todo.text}
                  className="w-full bg-white text-black p-2 rounded-l"
                />

                <button
                  className="h-10  rounded-r  bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 "
                  onClick={() => {
                    dispatch(removeTodo(todo.id));
                  }}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Todos;
