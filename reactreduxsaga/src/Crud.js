import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Add, Update, Remove, Get } from "./action";

// import axios from 'axios'
import * as Yup from "yup";

const Crud = () => {
  const initialValues = {
    // userId: "",
    id: "",
    name: "",
    email: "",
  };
  // console.log("A1");
  const [editing, setEditing] = useState(false);
  const [values, setValues] = useState({ ...initialValues });
  const dispatch = useDispatch();
  const array = useSelector((state) => {
    return state.reducer;
  });
  const status = useSelector((state) => {
    // console.log(state.status)
    return state.reducer1.type;
  });
  console.log(status);
  const [message, setMessage] = useState("");
  // const [data, setData] = useState([...array]);
  // const [load, setLoad] = useState([...array.data]);
  console.log(array);

  const validationSchema = Yup.object({
    name: Yup.string().required("Mandatory"),
    email: Yup.string().email().required("Enter A valid Mail Id"),
  });

  useEffect(() => {
    dispatch(Get());
    // setData([...array])
  }, []);

  useEffect(() => {
    switch (status) {
      case "GET_SUCCESS":
        setMessage("Data fetched successfully!");
        setTimeout(()=>setMessage(""),2000)
        break;
      case "GET_FAILURE":
        setMessage("Failed to fetch data successfully!");
        setTimeout(()=>setMessage(""),2000)
        break;
      case "ADD_SUCCESS":
        setMessage("User added successfully!");
        setTimeout(()=>setMessage(""),2000)
        break;
      case "ADD_FAILURE":
        setMessage("Failed to add user!");
        setTimeout(()=>setMessage(""),2000)
        break;
      case "REMOVE_SUCCESS":
        setMessage("User removed successfully!");
        setTimeout(()=>setMessage(""),2000)
        break;
      case "REMOVE_FAILURE":
        setMessage("Failed to removed successfully!");
        setTimeout(()=>setMessage(""),2000)
        break;
      case "UPDATE_SUCCESS":
        setMessage("User updated successfully!");
        setTimeout(()=>setMessage(""),2000)
        break;
      case "UPDATE_FAILURE":
        setMessage("Failed to update successfully!");
        setTimeout(()=>setMessage(""),2000)
        break;
      default:
        setMessage("");
    }
  }, [status]);

  const submit = (values, { resetForm }) => {
    // console.log("B");
    if (values.id) {
      // console.log("B1");
      const data = { ...values };
      dispatch(Update(data));

      setEditing(false);
    } else {
      // console.log("C");
      const data = { ...values };
      //, userId: new Date().getTime().toString()
      // console.log(data);
      dispatch(Add(data));
    }
    // console.log("C1");
    resetForm();
    setValues({ ...initialValues });
  };

  const Delete = (values) => {
    // console.log("D");
    dispatch(Remove(values));
  };

  const Edit = (e) => {
    // console.log("E");
    setEditing(true);
    setValues(e);
  };

  // const visibility = () => {
  //   setTimeout(() => {
  //     message.fadeOut("slow");
  //   }, 100);
  // };
  // const get =()=>{
  //   dispatch(Get())
  // }
  // console.log("array:", array);

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

            {message}
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

            <button type="submit">{editing ? "Update" : "Submit"}</button>
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
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Delete/Edit</th>
            {/* <th>Edit</th> */}
          </tr>
        </thead>

        <tbody key={new Date().getTime().toString()}>
          {array.map((e, index) => (
            <tr key={index}>
              <td>{e.id}</td>
              <td>{e.name}</td>
              <td>{e.email}</td>
              <td>
                <button key={`delete-${index}`} onClick={() => Delete(e)}>
                  Delete
                </button>
                <button key={`edit-${index}`} onClick={() => Edit(e)}>
                  Edit
                </button>
              </td>
              {/* <td>
                <button key={`edit-${index}`} onClick={() => Edit(e)}>
                  Edit
                </button>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Crud;
