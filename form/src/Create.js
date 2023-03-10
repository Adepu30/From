import React,{useState} from "react";
import Table from "./Table";

const Create = () => {
  const person = {
    fname: "",
    lname: "",
    number: "",
    email: "",
  };
  const [info, setInfo] = useState({ ...person });
  const [body, setBody] = useState([]);
  const [id, setId] = useState(null);
  const [editing, setEditing]=useState(false)

  const input = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };
  const submit = (e) => {
    e.preventDefault();

    if (id===null) {
      const data = { ...info, id: new Date().getTime().toString() };
      setBody([...body, data]);
      setInfo({ ...person });
    } else {
      
      body.map((e)=>{if(e.id===id){e.fname=info.fname;e.lname=info.lname;e.number=info.number;e.email=info.email}})
      setInfo({ ...info });
      setEditing(false)
    }
    getDummyList()
    setInfo({...person})

  };

  const getDummyList = () => {
    setInfo({ ...info });
  };

  const Edit = (id) => {
    alert("Do want to Update the Data");
    setId(id)
    setInfo(body.find((e) => e.id === id));
  };

  const Delete = (id) => {
    console.log("J");
    alert("Do You Want to Delete the Data");
    setBody(body.filter((e) => e.id!== id));
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
            onChange={input}
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
            onChange={input}
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
            onChange={input}
            value={info.number}
            placeholder="Contact Number"
            max="10"
            min="10"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email Id:</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={input}
            value={info.email}
            placeholder="Email"
            required
          />
        </div>
        <button type="submit">{editing?"Update":"Add"}</button>
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
              <Table
                text1={value.fname}
                text2={value.lname}
                text3={value.number}
                text4={value.email}
                key={index}
                id={index}
                onSelect1={Edit}
                onSelect2={Delete}
                
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
};
export default Create;


