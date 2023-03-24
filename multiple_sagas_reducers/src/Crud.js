import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { connect } from "react-redux";
import { Add, Update, Remove, Get } from "./redux/actions/index";

import * as Yup from "yup";

const Crud = () => {
  const initialValues = {
    id: "",
    name: "",
    email: ""
  };

  const [editing, setEditing] = useState(false);
  const [values, setValues] = useState({ ...initialValues });

  const dispatch = useDispatch();
  const array = useSelector((state) => {
    console.log(state.getSucess);
    return state.getSuccess;
  });
  console.log(array);

  const validationSchema = Yup.object({
    name: Yup.string().required("Mandatory"),
    email: Yup.string().email().required("Enter A valid Mail Id")
  });

  useEffect(() => {
    console.log("E1");
    dispatch(Get());
  }, []);

  const submit = (values, { resetForm }) => {
    if (values.id) {
      const data = { ...values };
      dispatch(Update(data));

      setEditing(false);
    } else {
      const data = { ...values };
      console.log(data);
      dispatch(Add(data));
    }

    resetForm();
    setValues({ ...initialValues });
  };

  const Delete = (values) => {
    dispatch(Remove(values));
  };

  const Edit = (e) => {
    setEditing(true);
    setValues(e);
  };

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
            <th>Delete</th>
            <th>Edit</th>
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
              </td>
              <td>
                <button key={`edit-${index}`} onClick={() => Edit(e)}>
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

// const mapStateToProps = (state) => {
//   console.log(state);
//   return {
//     posts: state.Get.posts,
//     addedPost: state.Add.post,
//     deletedPost: state.Remove.post,
//     updatedPost: state.update.post
//   };
// };

// const mapDispatchToProps = (dispatch) => ({
//   actions: {
//     Get: () => {
//       dispatch(Get());
//     },
//     Add: (payload) => {
//       dispatch(Add(payload));
//     },
//     Remove: (payload) => {
//       dispatch(Remove(payload));
//     },
//     Update: (payload) => {
//       dispatch(Update(payload));
//     }
//   }
// });

export default Crud;
// export default connect(mapStateToProps, mapDispatchToProps)(Crud);
