import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Table from "./Table.js";
import * as Yup from 'yup'
// import axios from "axios";

const Create = () => {
  // const{values,errors,touch,handleBlur,handleSubmit,handleChange}=useFormik({initialValues:initialValues,onSumit:(values)=>{}})
  console.log("A");
  const person = {
    fname: "",
    lname: "",
    number: "",
    email: "",
  };
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  const validationSchema=Yup.object().shape({
    fname:Yup.string().min(2,'First Name must be at least 2 characters').max(30).required("Please Enter Your First Name"),
    lname:Yup.string().min(2,'Last Name must be at least 2 characters').max(30).required("Please Enter Your Last Name"),
    number:Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
    email:Yup.string().email("Enter a Valid Email Id").required("Email is Required")
  })

  
  const [info, setInfo] = useState({ ...person });
  const [body, setBody] = useState([]);
  const [editing, setEditing]=useState(false)
  const [id,setId]=useState(null)


  const input = (e) => {
    console.log("B");
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
    console.log("B1");
  };

  const handleSubmit = (e) => {
    console.log("C");
    e.preventDefault();
    // let validate=true
    if (id===null) {
      console.log("D");
      const data = { ...info, id: new Date().getTime().toString() };;
      setBody([...body, data]);

      setInfo({ ...person });
      
      // await axios.post(
      //   // "https://localhost:3000",
      //   "https://63db5e89b8e69785e4808146.mockapi.io/CRUDAPIDATADUMMY",
      //   {
      //     ...info,
      //   }
      // );
    } else {
      console.log("E");
      const data = { ...info };
      const index = body.findIndex(x => x.id ===id)
      if(index!==-1){
        const bodyItems=[...body]
        bodyItems[index]=data
        setBody([...bodyItems])
        setEditing(false)
      }
      // body.splice(index,1,data)
      
      // body.map((e)=>{if(e.id===id){e.fname=info.fname;e.lname=info.lname;e.number=info.number;e.email=info.email}})
     

      // await axios.put(
      //   // "https://localhost:3000"+
      //   "https://63db5e89b8e69785e4808146.mockapi.io/CRUDAPIDATADUMMY/" +
      //     info.id,
      //   { ...info }
      // );
    }
    // getDummyList();
    setId(null)
    setInfo({ ...person });
    console.log("F");
  };

  const getDummyList = () => {
    console.log("G");
    // await axios
    //   .get(
    //     // "https://localhost:3000")
    //     "https://63db5e89b8e69785e4808146.mockapi.io/CRUDAPIDATADUMMY")
    //   .then((response) => {
    //     setBody(response.data);
    //   });
    setInfo({ ...info });
  };

 

  useEffect(() => {
    console.log("H");
    getDummyList();
  },[]);

  const Edit = (id) => {
    console.log("I");
    setId(id)
    alert("Do want to Update the Data");
    setEditing(true)
    setInfo(body.find((e,index) => e.id === id));
    
  };

  const Delete = (id) => {
    console.log("J");
    alert("Do You Want to Delete the Data");
    setBody(body.filter((e,index) => e.id !== id));

    // await axios
    //   .delete(
    //     `https://63db5e89b8e69785e4808146.mockapi.io/CRUDAPIDATADUMMY/${id}`
    //   )
    //   .then(() => {

    // getDummyList();

    // });
  };

  return (
    <>
      <h1> User Information Input</h1>
      <Formik initialValues= {person}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}>
        {({errors,touched})=>(
      <Form >
      {/* <form onSubmit={handleSubmit}> */}
        <div>
          <label htmlFor="fname">First Name:</label>
          {/* <input */}
          <Field
            type="text"
            name="fname"
            id="fname"
            // onChange={handleChange}
            // onBlur={handleBlur}
            onChange={input}
            value={info.fname}
            placeholder="FirstName"
            // max="30"
            // required
          />
          {errors.fname && touched.fname ? (
             <div>{errors.fname}</div>
           ) : null}
          {/* <p><ErrorMessage name="fname"/></p> */}
        </div>
        <div>
          <label htmlFor="lname">Last Name:</label>
          {/* <input */}
          <Field
            type="text"
            name="lname"
            id="lname"
            onChange={input}
            // onChange={handleChange}
            // onBlur={handleBlur}
            value={info.lname}
            placeholder="LastName"
            // required
          />
          {errors.lname && touched.lname ? (
             <div>{errors.fname}</div>
           ) : null}
          {/* <p><ErrorMessage name="lname"/></p> */}
        </div>
        <div>
          <label htmlFor="number">Contact Number:</label>
          {/* <input */}
          <Field
            type="text"
            name="number"
            id="number"
            onChange={input}
            // onChange={handleChange}
            // onBlur={handleBlur}
            value={info.number}
            placeholder="Contact Number"
            // max="10"
            // min="10"
            // required
          />
          {errors.number && touched.number ? (
             <div>{errors.number}</div>
           ) : null}
          {/* <p><ErrorMessage name="number"/></p> */}
        </div>
        <div>
          <label htmlFor="email">Email Id:</label>
          {/* <input */}
          <Field
            type="email"
            name="email"
            id="email"
            onChange={input}
            // onChange={handleChange}
            // onBlur={handleBlur}
            
            
            value={info.email}
            placeholder="Email"
            // required
          />
          {errors.email && touched.email ? (
             <div>{errors.email}</div>
           ) : null}
          {/* <p><ErrorMessage name="email"/></p> */}
        </div>
        <button type="submit">{editing?"Update":"Add"}</button>
      </Form>
      // {/* </form> */}
      )}
      <table border="2" border-collapse="bordercollapse">
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
                id={value.id}
                onSelect1={Edit}
                onSelect2={Delete}
                
              />
            );
          })}
        </tbody>
      </table>
      </Formik>
    </>
  );
};
export default Create;
