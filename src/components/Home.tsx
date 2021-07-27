import React, { useState } from "react";
import arrow from "../assets/straight-right-arrow.svg";
import "./Home.css";
import TodoTile from "./TodoTile";

interface ITodo {
  name: string;
  state: boolean;
}

const Home = () => {
  const [todo, setTodo] = useState<ITodo>({} as ITodo);
  const [todoList, setTodoList] = useState<ITodo[]>([]);

  return (
    <div className="container">
      <div>
        <h1>Tasks</h1>
        {todoList.map((todo) => (
          <TodoTile key={todo.name} name={todo.name} state={todo.state} />
        ))}
      </div>
      <div className="add">
        <input
          name="name"
          onChange={(e) => setTodo({ name: e.target.value, state: false })}
          placeholder="Add a task"
          type="text"
          value={todo.name}
        />
        <button
          onClick={() => {
            setTodoList([...todoList, todo]);
            setTodo({ name: "", state: false });
          }}
        >
          <img src={arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Home;
