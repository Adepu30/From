import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const LGDetails1 = () => {
  const [show, setShow] = useState(false);
  const [body, setBody] = useState([]);

  const initialValues={
    bank: "",
    kindofguarantee: "",
    typeofguarantee: "",
    formofguarantee: "",
    nameofguarantee: "",
    language: "",
    type: "",
    amount: "",
    validitytype: "",
    expirydate: "",
  }

  const onsubmit=(values, { resetForm }) => {
    console.log(values);
    setBody([...body, values]);
    resetForm();
  }

  const validation=Yup.object({
    bank: Yup.string().required("Mandatory"),
    kindofguarantee: Yup.string().required("Mandatory"),
    typeofguarantee: Yup.string().required("Mandatory"),
    formofguarantee: Yup.string().required("Mandatory"),
    nameofguarantee: Yup.string().required("Mandatory"),
    language: Yup.string().required("Mandatory"),
    type: Yup.string().required("Mandatory"),
    amount: Yup.number()
      .required("Mandatory")
      .test(
        "is positive?",
        "Error:The number should be positive",
        (value) => value > 0
      ),
    validitytype: Yup.string().required("Mandatory"),
    expirydate: Yup.string().required("Mandatory"),
    currency:Yup.string().required("Select the Currency")
  })

  const bank = [
    "Yes Bank Ltd",
    "ICICI Bank Ltd",
    "HDFC Bank",
    "SBI",
    "CANARA Bank",
    "UCO Bank",
  ];
  const kguarantee = [
    "Yes Bank Ltd",
    "ICICI Bank Ltd",
    "HDFC Bank",
    "SBI",
    "CANARA Bank",
    "UCO Bank",
  ];
  const tguarantee = [
    "Yes Bank Ltd",
    "ICICI Bank Ltd",
    "HDFC Bank",
    "SBI",
    "CANARA Bank",
    "UCO Bank",
  ];
  const fguarantee = [
    "Yes Bank Ltd",
    "ICICI Bank Ltd",
    "HDFC Bank",
    "SBI",
    "CANARA Bank",
    "UCO Bank",
  ];
  const nguarantee = [
    "Yes Bank Ltd",
    "ICICI Bank Ltd",
    "HDFC Bank",
    "SBI",
    "CANARA Bank",
    "UCO Bank",
  ];
  const language = ["English", "Telugu", "Hindi", "Arabic", "Spanish", "Tamil"];
  const type = [
    "Yes Bank Ltd",
    "ICICI Bank Ltd",
    "HDFC Bank",
    "SBI",
    "CANARA Bank",
    "UCO Bank",
  ];
  const validitytype = [
    "Yes Bank Ltd",
    "ICICI Bank Ltd",
    "HDFC Bank",
    "SBI",
    "CANARA Bank",
    "UCO Bank",
  ];

  const currency = ["USD", "EUR", "POUND", "INR", "AUSD", "SAR"];
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onsubmit}
      validationSchema={validation}
    >
      {() => (
        <>
          <button onClick={() => setShow(!show)}>
            <h1>1.Bank & Letter of Guarantee Details</h1>
          </button>
          {show && (
            <Form>
              <h2>Bank & Letter of Guarantee Type</h2>
              <div>
                <label htmlFor="bank"></label>
                <Field as="select" name="bank">
                  <option>Bank</option>
                  {bank.map((e) => {
                    return <option>{e}</option>;
                  })}
                </Field>

                <ErrorMessage name="bank" />
              </div>
              <div>
                <label htmlFor="kindofguarantee"></label>
                <Field as="select" name="kindofguarantee">
                  <option>Kind of Guarantee</option>
                  {kguarantee.map((e) => {
                    return <option>{e}</option>;
                  })}
                </Field>
                <ErrorMessage name="kindofguarantee" />
              </div>
              <div>
                <label htmlFor="typeofguarantee"></label>
                <Field as="select" name="typeofguarantee">
                  <option> Type of Guarantee</option>
                  {tguarantee.map((e) => {
                    return <option>{e}</option>;
                  })}
                </Field>
                <ErrorMessage name="typeofguarantee" />
              </div>
              <div>
                <label htmlFor="formofguarantee"></label>
                <Field as="select" name="formofguarantee">
                  <option> Form of Guarantee</option>
                  {fguarantee.map((e) => {
                    return <option>{e}</option>;
                  })}
                </Field>

                <ErrorMessage name="formofguarantee" />
              </div>
              <div>
                <label htmlFor="nameofguarantee"></label>
                <Field as="select" name="nameofguarantee">
                  <option> Name of Guarantee</option>
                  {nguarantee.map((e) => {
                    return <option>{e}</option>;
                  })}
                </Field>

                <ErrorMessage name="nameofguarantee" />
              </div>
              <div>
                <label htmlFor="language"></label>
                <Field as="select" name="language">
                  <option> Language</option>
                  {language.map((e) => {
                    return <option>{e}</option>;
                  })}
                </Field>
                <ErrorMessage name="language" />
              </div>
              <div>
                <h3>Guarantee Amount</h3>
                <label htmlFor="type"></label>
                <Field as="select" name="type">
                  <option> Type</option>
                  {type.map((e) => {
                    return <option>{e}</option>;
                  })}
                </Field>
                <ErrorMessage name="type" />
              </div>
              <div>
                <label htmlFor="currency"></label>
                <Field as="select" name="currency">
                  <option> Currency</option>
                  {currency.map((e) => {
                    return <option>{e}</option>;
                  })}
                </Field>
                <ErrorMessage name="currency" />
                <label htmlFor="amount"></label>
                <Field type="text" name="amount" placeholder="Amount" />
                <ErrorMessage name="amount" />
              </div>

              <div>
                <h3>Expiry Date</h3>
                <label htmlFor="validitytype"></label>

                <Field as="select" name="validitytype">
                  <option>Validity Type</option>
                  {validitytype.map((e) => {
                    return <option>{e}</option>;
                  })}
                </Field>
                <ErrorMessage name="validitytype" />
                <label htmlFor="expirydate"></label>
                <Field
                  type="date"
                  name="expirydate"
                  placeholder="Expiry Date"
                />
                <ErrorMessage name="expirydate" />
              </div>

              <div>
                <button
                  type="reset"
                  onClick={({ resetForm }) => {
                    resetForm();
                  }}>
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

export default LGDetails1;
