import React from "react";

const TodoList = (props) => {
  return (
    <>
      <button onClick={()=>props.onSelect(props.id)}>-</button>
      <li>{props.text}</li>
    </>
  );
};

export default TodoList;
