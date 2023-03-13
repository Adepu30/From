import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Add, Update, Remove, Get } from "./action";

// import axios from 'axios'
import * as Yup from "yup";

const Crud = () => {
  console.log("CRUD");
  const initialValues = {
    // userId: "",
    id:"",
    name: "",
    email: "",
  };
  console.log("A1");
  const [editing, setEditing] = useState(false);
  const [values, setValues] = useState({ ...initialValues });
  const dispatch = useDispatch();
  const array = useSelector((state) => state.reducer);

  console.log("A2");
  const validationSchema = Yup.object({
    name: Yup.string().required("Mandatory"),
    email: Yup.string().email().required("Enter A valid Mail Id"),
  });

  // useEffect(() => {
  //   console.log("E1");

  //   dispatch({
  //     type: "GET",
  //   });
  // }, []);

  useEffect(() => {
    console.log("E1");
    dispatch(Get());
  },[]);

  const submit = (values, { resetForm }) => {
    console.log("B");
    if (values.id) {
      console.log("B1");
      const data = { ...values };
      dispatch(Update(data));
      setEditing(false);
    } else {
      console.log("C");
      const data = { ...values};
      // , id: new Date().getTime().toString()
      console.log(data);
      dispatch(Add(data));
      
    }
    console.log("C1");
    resetForm();
    setValues({ ...initialValues });
  };

  const Delete = (values) => {
    console.log("D");
    dispatch(Remove(values));
  };

  const Edit = (e) => {
    console.log("E");
    setEditing(true);
    setValues(e);
  };

  // const get =()=>{
  //   dispatch(Get())
  // }
  console.log("array:", array);

  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={values}
        validationSchema={validationSchema}
        onSubmit={submit}
      >
        {() => (
          <Form>
            <div>
              <label htmlFor="name">Name</label>
              <Field
                type="text"
                name="name"
                id="name"
                placeholder="John Doe"
              ></Field>
              <ErrorMessage name="name" />
            </div>
            {console.log("mid1")}
            <div>
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                name="email"
                id="email"
                placeholder="abc@abc.com"
              ></Field>
              <ErrorMessage name="email" />
            </div>

            <button type="submit">
              {editing ? "Update" : "Submit"}
              {console.log("button")}
            </button>
            <button
              type="reset"
              onClick={() => {
                setEditing(false);
                setValues({ ...initialValues });
              }}
            >
              Reset
            </button>
          </Form>
        )}
      </Formik>
      <table border="2">
        {console.log("table")}
        <thead>
          <tr>
            <th>Id</th>
            {console.log("row")}
            <th>Name</th>
            <th>Email</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {console.log("table1")}

          {array.map((e) => (
            <tr key={e.id}>
              <td>
                {e.id}
                {console.log("kumar")}
              </td>
              <td>{e.name}</td>
              <td>{e.email}</td>
              <td>
                <button onClick={() => Delete(e)}>
                  Delete
                  {console.log("Delete")}
                </button>
              </td>
              <td>
                <button onClick={() => Edit(e)}>
                  Edit
                  {console.log("Edit")}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Crud;
