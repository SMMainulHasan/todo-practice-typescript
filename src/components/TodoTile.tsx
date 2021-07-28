import React from "react";
import Rectengular from "../assets/rec.svg";
import Tick from "../assets/tick.svg";

interface ITodo {
  name: string;
  done: boolean;
  complete: (name: string, done: boolean) => void;
  remove: (name: string) => void;
}

const TodoTile = ({ name, done, complete, remove }: ITodo) => {
  return (
    <div className="todo-tile">
      <div className="group">
        <button onClick={() => complete(name, done)}>
          {done ? <img src={Tick} alt="" /> : <img src={Rectengular} alt="" />}
        </button>
        {done ? (
          <p style={{ textDecoration: "line-through" }}>
            <strong>{name}</strong>
          </p>
        ) : (
          <p>
            <strong>{name}</strong>
          </p>
        )}
      </div>
      <p className="remove" onClick={() => remove(name)}>
        <strong>&times;</strong>
      </p>
    </div>
  );
};

export default TodoTile;
