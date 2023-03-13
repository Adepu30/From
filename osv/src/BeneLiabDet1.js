import React, { useState} from "react";
import { Formik,Form,ErrorMessage,Field } from "formik";
import * as Yup from "yup";

const BeneLiabDet1 = () => {
  const [show, setShow] = useState(false);
  const [fill, setFill] = useState([]);

 

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

  const reference = [
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
        liabilitydescription: "",
        reference: "",
        referencedate: "",
      }}
      validationSchema={Yup.object({
        name: Yup.string().required("Mandatory"),
        crnumber: Yup.number()
          .required("Mandatory")
          .test(
            "is positive?",
            "Error:The number should be positive",
            (value) => value > 0
          ),
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
            <h1>3.Beneficiary & Liability Details</h1>
          </button>
          {show && (
            <Form>
              <h2>Beneficiary</h2>
              <h3>Enter and validate the beneficiary details for the letter</h3>
              <div>
                <label htmlFor="name"></label>
                <Field
                  type="text"
                  name="name"
                  placeholder="Name"
                />
                <ErrorMessage name="name"/>
              </div>
              <div>
                <label htmlFor="crnumber"></label>
                <Field
                  type="text"
                  name="crnumber"
                  
                  placeholder="CR Number"
                />

                <ErrorMessage name="crnumber"/>
              </div>

              <div>
                <h4>Address</h4>
                <label htmlFor="addresstype"></label>
                <Field as="select"
                  name="addresstype"
                  
                >
                  <option> Address Type</option>
                  {addresstype.map((e) => {
                    return <option>{e}</option>;
                  })}
                </Field>

                <ErrorMessage name="addresstype"/>
              </div>
              <div>
                <label htmlFor="shortaddress"></label>
                <Field
                  type="text"
                  name="shortaddress"
                  
                  placeholder="Short Address"
                />

                <ErrorMessage name="shortaddress"/>
              </div>
              <div>
                <label htmlFor="buildingno"></label>
                <Field
                  type="text"
                  name="buildingno"
                  
                  placeholder="Building No"
                />

                <ErrorMessage name="buildingno"/>

                <label htmlFor="unitno"></label>
                <Field
                  type="text"
                  name="unitno"
                  
                  placeholder="Unit No"
                />

                <ErrorMessage name="unitno"/>
              </div>

              <div>
                <label htmlFor="streetname"></label>
                <Field
                  type="text"
                  name="streetname"
                  
                  placeholder="Street Name"
                />

                <ErrorMessage name="streetname"/>

                <label htmlFor="secondnumber"></label>
                <Field
                  type="text"
                  name="secondnumber"
                  
                  placeholder="Second No"
                />

                <ErrorMessage name="secondnumber"/>
              </div>
              <div>
                <label htmlFor="country"></label>

                <Field as="select"
                  name="country"
                  
                >
                  <option>Country</option>
                  {country.map((e) => {
                    return <option>{e}</option>;
                  })}
                </Field>

                <ErrorMessage name="country"/>

                <label htmlFor="district"></label>
                <Field
                  type="text"
                  name="district"
                  
                  placeholder="District"
                />

                <ErrorMessage name="country"/>
              </div>
              <div>
                <label htmlFor="city"></label>
                <Field
                  type="text"
                  name="city"
                 
                  placeholder="City"
                />

                <ErrorMessage name="city"/>

                <label htmlFor="postalcode"></label>
                <Field
                  type="text"
                  name="postalcode"
                  
                  placeholder="Postal Code"
                />

                <ErrorMessage name="postalcode"/>
              </div>

              <div>
                <h4>Liability & Reference Details</h4>
                <p>Describe the liabilities and mention the reference </p>
                <label htmlFor="liabilitydescription"></label>
                <Field as="textarea"
                  type="text"
                  name="liabilitydescription"
                  
                  placeholder="Liability Description"
                ></Field>

                <ErrorMessage name="liabilitydescription"/>
              </div>

              <div>
                <label htmlFor="reference"></label>
                <Field as="select"
                  name="reference"
                  
                >
                  <option> Reference</option>
                  {reference.map((e) => {
                    return <option>{e}</option>;
                  })}
                </Field>

                <ErrorMessage name="reference"/>

                <label htmlFor="referencedate"></label>
                <Field
                  type="date"
                  name="referencedate"
                  
                  placeholder="Reference Date"
                />

                <ErrorMessage name="referencedate"/>
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

export default BeneLiabDet1;
