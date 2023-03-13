import React, { useState} from "react";
import { ErrorMessage, Field, Formik, Form } from "formik";

import * as Yup from "yup";

const TotalOrdeAmt1 = () => {
  const [show, setShow] = useState(false);
  const [fill, setFill] = useState([]);

  

  

  const currency = ["SAR", "INR", "USD", "EURO", "AUSD", "STERLING"];
  const applicablerules = [
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
        currency: "",
        amount: "",
        guaranteevalueinpercent: "",
        customermobilenumber: "",
        beneficiarymobilenumber: "",
        applicablerules: "",
        chargesandfees: "",
        detailsofguarantee: "",
        termsandconditions: "",
        letterofguaranteestartdate: "",
      }}
      validationSchema={Yup.object({
        currency: Yup.string().required("Mandatory"),
        amount: Yup.number()
          .required("Mandatory")
          .test(
            "is positive?",
            "Error:The number should be positive",
            (value) => value > 0
          ),
        guaranteevalueinpercent: Yup.number()
          .min(2)
          .max(5)
          .required("Mandatory")
          .test(
            "is positive?",
            "Error:The number should be positive",
            (value) => value > 0
          ),
        // customermobilenumber: Yup.number()
        //   .max(10)
        //   .min(10)
        //   .required("Mandatory").test(
        //     "is positive?",
        //     "Error:The number should be positive",
        //     (value) => value > 0
        //   ),
        // beneficiarymobilenumber: Yup.number()
        //   .max(10)
        //   .min(10)
        //   .required("Mandatory")
        //   .test(
        //     "is positive?",
        //     "Error:The number should be positive",
        //     (value) => value > 0
        //   ),
        applicablerules: Yup.string().required("Mandatory"),
        chargesandfees: Yup.number()
          .required("Mandatory")
          .test(
            "is positive?",
            "Error:The number should be positive",
            (value) => value > 0
          ),
        detailsofguarantee: Yup.string().required("Mandatory"),
        termsandconditions: Yup.string().required("Mandatory"),
        letterofguaranteestartdate: Yup.string().required("Mandatory"),
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
            <h1>4.Total Order Amount Details</h1>
          </button>
          {show && (
            <Form>
              <h2>Total Order Amount</h2>
              <p>Enter amount details for guarantee</p>
              <div>

                <label htmlFor="currency"></label>
                <Field name="currency" as="select">
                  <option> Currency</option>
                  {currency.map((e) => {
                    return <option>{e}</option>;
                  })}
                </Field>
                <ErrorMessage name="currency"/>

                <label htmlFor="amount"></label>
                <Field type="text" name="amount" placeholder="Amount" />
                <ErrorMessage name="amount" />

              </div>

              <div>
                <label htmlFor="guaranteevalueinpercent"></label>
                <Field
                  type="text"
                  name="guaranteevalueinpercent"
                  placeholder="Guarantee Value in %"
                />

                <ErrorMessage name="guaranteevalueinpercent" />
              </div>

              <div>
                <label htmlFor="customermobilenumber"></label>
                <Field
                  type="text"
                  name="customermobilenumber"
                  placeholder="Customer Mobile Number"
                />

                <ErrorMessage name="customermobilenumber" />

                <label htmlFor="beneficiarymobilenumber"></label>
                <Field
                  type="text"
                  name="beneficiarymobilenumber"
                  placeholder="Beneficiary Mobile Number"
                />

                <ErrorMessage name="beneficiarymobilenumber" />
              </div>

              <div>
                <label htmlFor="applicablerules"></label>
                <Field as="select" name="applicablerules">
                  <option> Applicable rules</option>
                  {applicablerules.map((e) => {
                    return <option>{e}</option>;
                  })}
                </Field>
                <ErrorMessage name="applicablerules" />
              </div>

              <div>
                <label htmlFor="chargesandfees"></label>
                <Field
                  as="textarea"
                  type="text"
                  name="chargesandfees"
                  placeholder="Charges and Fees(optional)"
                ></Field>

                <ErrorMessage name="chargesandfees" />
              </div>

              <div>
                <label htmlFor="detailsofguarantee"></label>
                <Field
                  as="textarea"
                  type="text"
                  name="detailsofguarantee"
                  placeholder="Details of Guarantee"
                />

                <ErrorMessage name="detailsofguarantee" />
              </div>

              <div>
                <label htmlFor="termsandconditions"></label>
                <Field
                  as="textarea"
                  type="text"
                  name="termsandconditions"
                  placeholder="Terms and Conditions"
                />
                <ErrorMessage name="termsandconditions" />
              </div>
              
              <div>
                <label htmlFor="letterofguaranteestartdate"></label>
                <Field
                  type="date"
                  name="letterofguaranteestartdate"
                  placeholder="Letter of Guarantee Start Date"
                />
                <ErrorMessage name="letterofguaranteestartdate" />
              </div>

              <div>
                <button
                  type="reset"
                  onClick={({resetForm}) => {
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

export default TotalOrdeAmt1;
