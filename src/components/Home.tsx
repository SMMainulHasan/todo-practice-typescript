import React, { useState } from "react";
import arrow from "../assets/straight-right-arrow.svg";
import "./Home.css";
import TodoTile from "./TodoTile";

interface ITodo {
  name: string;
  done: boolean;
}

const Home = () => {
  const complete = (name: string, done: boolean) => {
    const todos = todoList.filter((elm) => elm.name !== name);
    setTodoList([...todos, { name: name, done: !done }]);
  };
  const remove = (name: string) => {
    setTodoList(todoList.filter((elm) => elm.name !== name));
  };
  const [todo, setTodo] = useState<ITodo>({} as ITodo);
  const [todoList, setTodoList] = useState<ITodo[]>([]);

  return (
    <div className="container">
      <div>
        <h1>Tasks</h1>
        <div className="task-list">
          {todoList.map((todo) => (
            <TodoTile
              key={todo.name}
              name={todo.name}
              done={todo.done}
              complete={complete}
              remove={remove}
            />
          ))}
        </div>
      </div>
      <div className="add">
        <input
          name="name"
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
          placeholder="Add a task"
          type="text"
          value={todo.name}
        />
        <button
          onClick={() => {
            setTodoList([todo, ...todoList]);
            setTodo({ name: "", done: false });
          }}
        >
          <img src={arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Home;
