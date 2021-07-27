import React from "react";

interface ITodo {
  name: string;
  state: boolean;
}

const TodoTile = ({ name, state }: ITodo) => {
  return (
    <div>
      <p>
        <strong>{name}</strong>
      </p>
    </div>
  );
};

export default TodoTile;
