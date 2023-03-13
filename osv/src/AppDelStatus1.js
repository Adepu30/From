import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const AppDelStatus1 = () => {
  const [show, setShow] = useState(false);
  const [fill, setFill] = useState([]);

  const delivery_of_original_guarantee = [
    "Yes Bank Ltd",
    "ICICI Bank Ltd",
    "HDFC Bank",
    "SBI",
    "CANARA Bank",
    "UCO Bank",
  ];
  const deliveryto = [
    "Yes Bank Ltd",
    "ICICI Bank Ltd",
    "HDFC Bank",
    "SBI",
    "CANARA Bank",
    "UCO Bank",
  ];
  const addresstype = [
    "Yes Bank Ltd",
    "ICICI Bank Ltd",
    "HDFC Bank",
    "SBI",
    "CANARA Bank",
    "UCO Bank",
  ];
  const country = [
    "Yes Bank Ltd",
    "ICICI Bank Ltd",
    "HDFC Bank",
    "SBI",
    "CANARA Bank",
    "UCO Bank",
  ];

  return (
    <Formik
      initialValues={{
        name: "",
        crnumber: "",
        deloforiguara: "",
        deliveryto: "",
        addresstype: "",
        shortaddress: "",
        buildingno: "",
        unitno: "",
        streetname: "",
        secondnumber: "",
        country: "",
        district: "",
        city: "",
        postalcode: "",
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string().required("Mandatory"),
        crnumber: Yup.number()
          .required("Mandatory")
          .test(
            "is positive?",
            "Error:The number should be positive",
            (value) => value > 0
          ),
        deloforiguara: Yup.string().required("Mandatory"),
        deliveryto: Yup.string().required("Mandatory"),
        addresstype: Yup.string().required("Mandatory"),
        shortaddress: Yup.string().required("Mandatory"),
        buildingno: Yup.string().required("Mandatory"),
        unitno: Yup.string().required("Mandatory"),
        streetname: Yup.string().required("Mandatory"),
        secondnumber: Yup.string().required("Mandatory"),
        country: Yup.string().required("Mandatory"),
        district: Yup.string().required("Mandatory"),
        city: Yup.string().required("Mandatory"),
        postalcode: Yup.string().required("Mandatory"),
      })}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        setFill([...fill, values]);
        resetForm();
      }}
    >
      {() => (
        <>
          <button onClick={() => setShow(!show)}>
            <h1>2.Applicant & Delivery Details</h1>
          </button>
          {show && (
            <Form>
              <h2>Applicant Details</h2>
              <h4>Enter CR Number to validate company and letter request</h4>
              <div>
                <label htmlFor="name"></label>
                <Field type="text" name="name" placeholder="Name" />
                <ErrorMessage name="name" />
              </div>
              <div>
                <label htmlFor="crnumber"></label>
                <Field type="text" name="crnumber" placeholder="CR Number" />
                <ErrorMessage name="crnumber" />
              </div>

              <div>
                <h4>Applicant and Delivery Address</h4>
                <label htmlFor="deloforiguara"></label>
                <Field as="select" name="deloforiguara">
                  <option> Delivery of Original Guarantee</option>
                  {delivery_of_original_guarantee.map((e) => {
                    return <option>{e}</option>;
                  })}
                </Field>
                <ErrorMessage name="deloforiguara" />
              </div>

              <div>
                <label htmlFor="deliveryto"></label>
                <Field as="select" name="deliveryto">
                  <option> Delivery to</option>
                  {deliveryto.map((e) => {
                    return <option>{e}</option>;
                  })}
                </Field>
                <ErrorMessage name="deliveryto" />
              </div>

              <div>
                <label htmlFor="addresstype"></label>
                <Field as="select" name="addresstype">
                  <option> Address Type</option>
                  {addresstype.map((e) => {
                    return <option>{e}</option>;
                  })}
                </Field>
                <ErrorMessage name="addresstype" />
              </div>

              <div>
                <label htmlFor="shortaddress"></label>
                <Field
                  type="text"
                  name="shortaddress"
                  placeholder="Short Address"
                />
                <ErrorMessage name="shortaddress" />
              </div>

              <div>
                <label htmlFor="buildingno"></label>
                <Field
                  name="buildingno"
                  type="text"
                  placeholder="Building No"
                />
                <ErrorMessage name="buildingno" />

                <label htmlFor="unitno"></label>
                <Field name="unitno" type="text" placeholder="Unit No" />
                <ErrorMessage name="unitno" />
              </div>

              <div>
                <label htmlFor="streetname"></label>
                <Field
                  name="streetname"
                  type="text"
                  placeholder="Street Name"
                />
                <ErrorMessage name="streetname" />

                <label htmlFor="secondnumber"></label>
                <Field
                  name="secondnumber"
                  type="text"
                  placeholder="Second No"
                />
                <ErrorMessage name="secondnumber" />
              </div>

              <div>
                <label htmlFor="country"></label>
                <Field as="select" name="country">
                  <option>Country</option>
                  {country.map((e) => {
                    return <option>{e}</option>;
                  })}
                </Field>
                <ErrorMessage name="country" />

                <label htmlFor="district"></label>
                <Field name="district" type="text" placeholder="District" />
                <ErrorMessage name="district" />
              </div>

              <div>
                <label htmlFor="city"></label>
                <Field name="city" type="text" placeholder="City" />
                <ErrorMessage name="city" />

                <label htmlFor="postalcode"></label>
                <Field
                  name="postalcode"
                  type="text"
                  placeholder="Postal Code"
                />
                <ErrorMessage name="postalcode" />
              </div>

              <a href="https://www.google.com/">
                Applicant Address is Different
              </a>
              <div>
                <button
                  type="reset"
                  onClick={({ resetForm }) => {
                    resetForm();
                  }}
                >
                  Clear
                </button>
                <button type="submit">Next</button>
              </div>
            </Form>
          )}
        </>
      )}
    </Formik>
  );
};

export default AppDelStatus1;
