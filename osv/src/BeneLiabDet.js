import React, { useState, useEffect, useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const BeneLiabDet = () => {
  const [show, setShow] = useState(false);
  const [fill, setFill] = useState([]);

  const collapse = useRef(null);
  const formik = useFormik({
    initialValues: {
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
    },

    onSubmit: (values) => {
      console.log(values);
      setFill([...fill, values]);
      formik.resetForm();
    },
    validationSchema: Yup.object({
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
    }),
  });

  // const contraction = () => {
  //   setShow(!show);
  // };
  // useEffect(() => {
  //   const show = () => {

  //     const content = cc.nextElementSibling;
  //     if (content.style.display === "block") {

  //       content.style.display = "none";
  //     } else {
  //       content.style.display = "block";
  //     }
  //   };
  //   const cc = collapse.current;
  //   cc.addEventListener("click", show);
  //   return () => {
  //     cc.removeEventListener("click", show);
  //   };
  // }, [show]);

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
    <>
      <button ref={collapse} onClick={() => setShow(!show)}>
        <h1>3.Beneficiary & Liability Details</h1>
      </button>
      {show && (
        <form
          onSubmit={formik.handleSubmit}

          // style={{ display: "none" }}
        >
          <h2>Beneficiary</h2>
          <h3>Enter and validate the beneficiary details for the letter</h3>
          <div>
            <label htmlFor="name"></label>
            <input
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              placeholder="Name"
            />
            {formik.touched.name && formik.errors.name && (
              <p style={{ color: "red" }}>{formik.errors.name}</p>
            )}
          </div>
          <div>
            <label htmlFor="crnumber"></label>
            <input
              type="text"
              name="crnumber"
              value={formik.values.crnumber}
              onChange={formik.handleChange}
              placeholder="CR Number"
            />

            {formik.touched.crnumber && formik.errors.crnumber && (
              <p style={{ color: "red" }}>{formik.errors.crnumber}</p>
            )}
          </div>

          <div>
            <h4>Address</h4>
            <label htmlFor="addresstype"></label>
            <select
              name="addresstype"
              value={formik.values.addresstype}
              onChange={formik.handleChange}
            >
              <option> Address Type</option>
              {addresstype.map((e) => {
                return <option>{e}</option>;
              })}
            </select>

            {formik.touched.addresstype && formik.errors.addresstype && (
              <p style={{ color: "red" }}>{formik.errors.addresstype}</p>
            )}
          </div>
          <div>
            <label htmlFor="shortaddress"></label>
            <input
              type="text"
              name="shortaddress"
              value={formik.values.shortaddress}
              onChange={formik.handleChange}
              placeholder="Short Address"
            />

            {formik.touched.shortaddress && formik.errors.shortaddress && (
              <p style={{ color: "red" }}>{formik.errors.shortaddress}</p>
            )}
          </div>
          <div>
            <label htmlFor="buildingno"></label>
            <input
              type="text"
              name="buildingno"
              value={formik.values.buildingno}
              onChange={formik.handleChange}
              placeholder="Building No"
            />

            {formik.touched.buildingno && formik.errors.buildingno && (
              <p style={{ color: "red" }}>{formik.errors.buildingno}</p>
            )}

            <label htmlFor="unitno"></label>
            <input
              type="text"
              name="unitno"
              value={formik.values.unitno}
              onChange={formik.handleChange}
              placeholder="Unit No"
            />

            {formik.touched.unitno && formik.errors.unitno && (
              <p style={{ color: "red" }}>{formik.errors.unitno}</p>
            )}
          </div>

          <div>
            <label htmlFor="streetname"></label>
            <input
              type="text"
              name="streetname"
              value={formik.values.streetname}
              onChange={formik.handleChange}
              placeholder="Street Name"
            />

            {formik.touched.streetname && formik.errors.streetname && (
              <p style={{ color: "red" }}>{formik.errors.streetname}</p>
            )}

            <label htmlFor="secondnumber"></label>
            <input
              type="text"
              name="secondnumber"
              value={formik.values.secondnumber}
              onChange={formik.handleChange}
              placeholder="Second No"
            />

            {formik.touched.secondnumber && formik.errors.secondnumber && (
              <p style={{ color: "red" }}>{formik.errors.secondnumber}</p>
            )}
          </div>
          <div>
            <label htmlFor="country"></label>

            <select
              name="country"
              value={formik.values.country}
              onChange={formik.handleChange}
            >
              <option>Country</option>
              {country.map((e) => {
                return <option>{e}</option>;
              })}
            </select>

            {formik.touched.country && formik.errors.country && (
              <p style={{ color: "red" }}>{formik.errors.country}</p>
            )}

            <label htmlFor="district"></label>
            <input
              type="text"
              name="district"
              value={formik.values.district}
              onChange={formik.handleChange}
              placeholder="District"
            />

            {formik.touched.district && formik.errors.district && (
              <p style={{ color: "red" }}>{formik.errors.district}</p>
            )}
          </div>
          <div>
            <label htmlFor="city"></label>
            <input
              type="text"
              name="city"
              value={formik.values.city}
              onChange={formik.handleChange}
              placeholder="City"
            />

            {formik.touched.city && formik.errors.city && (
              <p style={{ color: "red" }}>{formik.errors.city}</p>
            )}

            <label htmlFor="postalcode"></label>
            <input
              type="text"
              name="postalcode"
              value={formik.values.postalcode}
              onChange={formik.handleChange}
              placeholder="Postal Code"
            />

            {formik.touched.postalcode && formik.errors.postalcode && (
              <p style={{ color: "red" }}>{formik.errors.postalcode}</p>
            )}
          </div>

          <div>
            <h4>Liability & Reference Details</h4>
            <p>Describe the liabilities and mention the reference </p>
            <label htmlFor="liabilitydescription"></label>
            <textarea
              type="text"
              name="liabilitydescription"
              value={formik.values.liabilitydescription}
              onChange={formik.handleChange}
              placeholder="Liability Description"
            ></textarea>

            {formik.touched.liabilitydescription &&
              formik.errors.liabilitydescription && (
                <p style={{ color: "red" }}>
                  {formik.errors.liabilitydescription}
                </p>
              )}
          </div>

          <div>
            <label htmlFor="reference"></label>
            <select
              name="reference"
              value={formik.values.reference}
              onChange={formik.handleChange}
            >
              <option> Reference</option>
              {reference.map((e) => {
                return <option>{e}</option>;
              })}
            </select>

            {formik.touched.reference && formik.errors.reference && (
              <p style={{ color: "red" }}>{formik.errors.reference}</p>
            )}

            <label htmlFor="referencedate"></label>
            <input
              type="date"
              name="referencedate"
              value={formik.values.referencedate}
              onChange={formik.handleChange}
              placeholder="Reference Date"
            />

            {formik.touched.referencedate && formik.errors.referencedate && (
              <p style={{ color: "red" }}>{formik.errors.referencedate}</p>
            )}
          </div>

          <div>
            <button
              type="reset"
              onClick={() => {
                formik.resetForm();
              }}
            >
              Clear
            </button>
            <button type="submit">Next</button>
          </div>
        </form>
      )}
    </>
  );
};

export default BeneLiabDet;
