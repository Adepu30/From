import React, { useState } from "react";
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from "yup";
import Table from "./Table.js";
const Task = () => {
  const day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const [days, setDays] = useState("Select A Day");
  const [task, setTask] = useState({});
  const [body, setBody] = useState([]);
  const [editing, setEditing] = useState(false);
  const [id, setId] = useState(null);

  const select = (e) => {
    setDays(e.target.value);
  };

  const input = (e) => {
    // const [name, value] = e.target;
    console.log("A");
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    if (id === null) {
      const data = { days, ...task, id: new Date().getTime().toString() };

      setBody([...body, data]);
      setDays({});
      setTask({});
    } else {
      setId(null);
    }
  };

  const Delete = (id) => {
    setBody(body.map((e) => e.id !== id));
  };

  const Edit = (id) => {
    setEditing(true);
    setTask(body.map((e) => e.id === id));
  };

  // const Tday=()=>{return day.map((e,index)=><th>{e}</th>)}

  // useEffect(()=>{Tday()})

  return (
    <>
      <div>
        <form onSubmit={submit}>
          <label htmlFor={() => day.map((e) => e)}>Select A Day</label>
          <select name={() => day.map((e) => e)} onChange={select}>
            <option>Select A Day</option>

            {day.map((e) => {
              return <option>{e}</option>;
            })}
          </select>
          <input
            type="text"
            name="task"
            id="task"
            onChange={input}
            value={task.task}
            placeholder="Enter Task"
            required
          />

          <button type="submit">{editing ? "Update" : "Add"}</button>
        </form>
      </div>

      <table border="2" border-collapse="bordercollapse">
        <thead>
          <tr>
            {day.map((e, index) => (
              <th>{e}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {body.map((value, index) => {
            return day.map(
              (data) =>
                value[
                  (
                    <Table
                      text1={data.task}
                      key={index}
                      id={data.id}
                      onSelect1={Edit}
                      onSelect2={Delete}
                    />
                  )
                ]
            );
          })}
        </tbody>
      </table>
    </>
  );
};
export default Task;
