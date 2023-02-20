import React, { useState } from "react";
import "./App.css";
import TodoList from "./TodoList.js";

const App = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const itemList = (e) => {
    setInput(e.target.value);
  };

  const AddItem = () => {
    setList([...list, input]);
    setInput("");
  };
  const deleteItems=(id)=>{
    setList(()=>
    list.filter((value,index)=>{return index!==id}))
  }
  return (
    <>
      <div>
        <h1>TODO LIST</h1>
        <input
          type="text"
          placeholder="Add Item"
          value={input}
          onChange={itemList}
        />
        <button onClick={AddItem}>+</button>
        <ol>
          {list.map((value, index) => {
            return <TodoList key={index} id={index} text={value} onSelect={deleteItems}/>;
          })}
        </ol>
      </div>
    </>
  );
};

export default App;
