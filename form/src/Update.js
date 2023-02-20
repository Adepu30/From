import React, { useState, useEffect } from "react";
import axios from "axios";
import Create from './Create.js'

const Update = () => {
 
  const [info, setInfo] = useState(Edit);
  const [body, setBody] = useState([]);
  const [id, setId] = useState(null);

  const upDateData = (e) => {
    e.preventDefault();
    const data = { ...info, id: new Date().getTime().toString() };
    setBody([...body, data]);
    setInfo({ ...info });

    axios.put(
      "https://63db5e89b8e69785e4808146.mockapi.io/CRUDAPIDATADUMMY/${id}",
      { ...info }
    );
  };
 

  const Edit=() => {
    setId(localStorage.getItem("ID"));
    // info.fname(localStorage.getItem("FirstName"));
    // info.lname(localStorage.getItem("LastName"));
    // info.number(localStorage.getItem("ContactNumber"));
    // info.email(localStorage.getItem("Email"));
    setInfo({
        fname: localStorage.getItem("FirstName")
    })
  };

  

  return (
    <>
      <h1> User Information Input</h1>
      <form onSubmit={upDateData}>
        <div>
          <label htmlFor="fname">First Name:</label>
          <input
            type="text"
            name="fname"
            id="fname"
            // onChange={Edit}
            value={info.fname}
            placeholder="FirstName"
          />
        </div>
        <div>
          <label htmlFor="lname">Last Name:</label>
          <input
            type="text"
            name="lname"
            id="lname"
            // onChange={Edit}
            value={info.lname}
            placeholder="LastName"
          />
        </div>
        <div>
          <label htmlFor="number">Contact Number:</label>
          <input
            type="text"
            name="number"
            id="number"
            // onChange={Edit}
            value={info.number}
            placeholder="Contact Number"
          />
        </div>
        <div>
          <label htmlFor="email">Email Id:</label>
          <input
            type="email"
            name="email"
            id="email"
            // onChange={Edit}
            value={info.email}
            placeholder="Email"
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </>
  );
};

export default Update;
