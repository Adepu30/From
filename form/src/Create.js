import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";

const Create = () => {
  console.log("A");
  const person = {
    id: "0",
    fname: "",
    lname:"",
    number: "",
    email: "",
  };
  const [info, setInfo] = useState({ ...person });
  const [body, setBody] = useState([]);
  // const [validate,setValidate]=useState({...person})

  const create = (e) => {
    console.log("B");
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const submit = async (e) => {
    console.log("C");
    e.preventDefault();
    if (info.id === "0") {
      console.log("D");
      // const data = { ...info };
      // setBody([...body, data]);
      // setInfo({ ...person });
      await axios.post(
        "https://63db5e89b8e69785e4808146.mockapi.io/CRUDAPIDATADUMMY",
        {
          ...info,
        }
      );
    } else {
      console.log("E");

      // const data = { ...info };
      // setBody([...body, data]);
      // setInfo({ ...info });

      await axios.put(
        "https://63db5e89b8e69785e4808146.mockapi.io/CRUDAPIDATADUMMY/" +
          info.id,
        { ...info }
      );
    }
    getDummyList();
    setInfo({ ...person });
    console.log("F");
  };

  const getDummyList = async () => {
    console.log("G");
    await axios
      .get("https://63db5e89b8e69785e4808146.mockapi.io/CRUDAPIDATADUMMY")
      .then((response) => {
        setBody(response.data);
      });
  };

  useEffect(() => {
    console.log("H");
    getDummyList();
  }, []);

  // const data = () => {setData()};
  // const setData=(data)=>{
  //   let {id,fname,lname,number,email}=data
  //   localStorage.setItem("ID",id)
  //   localStorage.setItem("FirstName",fname)
  //   localStorage.setItem("LastName",lname)
  //   localStorage.setItem("ContactNumber",number)
  //   localStorage.setItem("Email",email)
  // }

  // setId(localStorage.getItem("ID"));
  // info.fname(localStorage.getItem("FirstName"));
  // info.lname(localStorage.getItem("LastName"));
  // info.number(localStorage.getItem("ContactNumber"));
  // info.email(localStorage.getItem("Email"));
  // setInfo({
  //   fname: localStorage.getItem("FirstName"),
  // });

  const Edit = (id) => {
    console.log("I");
    window.confirm("Do want to Update the Data");

    setInfo(() => body.find((e) => e.id === id));
  };

  // const upDateData = (e) => {
  //   e.preventDefault();
  //   const data = { ...info, id: new Date().getTime().toString() };
  //   setBody([...body, data]);
  //   setInfo({ ...info });

  //   axios.put(
  //     "https://63db5e89b8e69785e4808146.mockapi.io/CRUDAPIDATADUMMY/${id}",
  //     { ...info }
  //   );
  // };

  const Delete = async(id) => {
    console.log("J");
    window.confirm("Do You Want to Delete the Data");

    await axios
      .delete(
        `https://63db5e89b8e69785e4808146.mockapi.io/CRUDAPIDATADUMMY/${id}` 
      )
      .then(() => {
        getDummyList();
       
      });
     
  };

  return (
    <>
      <h1> User Information Input</h1>
      <form onSubmit={submit}>
        <div>
          <label htmlFor="fname">First Name:</label>
          <input
            type="text"
            name="fname"
            id="fname"
            onChange={create}
            value={info.fname}
            placeholder="FirstName"
            max="30"
            required
          />
        </div>
        <div>
          <label htmlFor="lname">Last Name:</label>
          <input
            type="text"
            name="lname"
            id="lname"
            onChange={create}
            value={info.lname}
            placeholder="LastName"
            required
          />
        </div>
        <div>
          <label htmlFor="number">Contact Number:</label>
          <input
            type="text"
            name="number"
            id="number"
            onChange={create}
            value={info.number}
            placeholder="Contact Number"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email Id:</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={create}
            value={info.email}
            placeholder="Email"
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      <table border="2">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Full Name</th>
            <th>Contact Number</th>
            <th>Email</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {body.map((value, index) => {
            return (
              <>
                <tr>
                  <td>{index + 1}</td>
                  <td>
                    {value.fname}{" "+value.lname}
                  </td>
                  <td>{value.number}</td>
                  <td>{value.email}</td>
                  <td>
                    <button onClick={() => Edit(value.id)}>Edit</button>
                  </td>
                  <td>
                    <button onClick={() => Delete(value.id)}>Delete</button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
export default Create;
