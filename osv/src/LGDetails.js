import React, { useState, useEffect, useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const LGDetails = () => {
  const [show, setShow] = useState(false);
  const collapse = useRef(null);
  const [body, setBody] = useState([]);

  const formik = useFormik({
    initialValues: {
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
    },
    onSubmit: (values) => {
      console.log(values);
      setBody([...body, values]);
      formik.resetForm();
    },
    validationSchema: Yup.object({
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
    }),
  });

  // const contraction=()=>{
  //   setShow(!show)
  // }

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
    <>
      <button ref={collapse} onClick={() => setShow(!show)}>
        <h1>1.Bank & Letter of Guarantee Details</h1>
      </button>
      {show && (
        <form
          onSubmit={formik.handleSubmit}

          // style={{ display: "none"}}
        >
          <h2>Bank & Letter of Guarantee Type</h2>
          <div>
            <label htmlFor="bank"></label>
            <select
              name="bank"
              value={formik.values.bank}
              onChange={formik.handleChange}
            >
              <option>Bank</option>
              {bank.map((e) => {
                return <option>{e}</option>;
              })}
            </select>
            {formik.touched.bank && formik.errors.bank && (
              <p style={{ color: "red" }}>{formik.errors.bank}</p>
            )}
            {/* <ErrorMessage name="" /> */}
          </div>
          <div>
            <label htmlFor="kindofguarantee"></label>
            <select
              name="kindofguarantee"
              value={formik.values.kindofguarantee}
              onChange={formik.handleChange}
            >
              <option>Kind of Guarantee</option>
              {kguarantee.map((e) => {
                return <option>{e}</option>;
              })}
            </select>
            {formik.touched.kindofguarantee &&
              formik.errors.kindofguarantee && (
                <p style={{ color: "red" }}>{formik.errors.kindofguarantee}</p>
              )}
          </div>
          <div>
            <label htmlFor="typeofguarantee"></label>
            <select
              name="typeofguarantee"
              value={formik.values.typeofguarantee}
              onChange={formik.handleChange}
            >
              <option> Type of Guarantee</option>
              {tguarantee.map((e) => {
                return <option>{e}</option>;
              })}
            </select>
            {formik.touched.typeofguarantee &&
              formik.errors.typeofguarantee && (
                <p style={{ color: "red" }}>{formik.errors.typeofguarantee}</p>
              )}
          </div>
          <div>
            <label htmlFor="formofguarantee"></label>
            <select
              name="formofguarantee"
              value={formik.values.formofguarantee}
              onChange={formik.handleChange}
            >
              <option> Form of Guarantee</option>
              {fguarantee.map((e) => {
                return <option>{e}</option>;
              })}
            </select>

            {formik.touched.formofguarantee &&
              formik.errors.formofguarantee && (
                <p style={{ color: "red" }}>{formik.errors.formofguarantee}</p>
              )}
          </div>
          <div>
            <label htmlFor="nameofguarantee"></label>
            <select
              name="nameofguarantee"
              value={formik.values.nameofguarantee}
              onChange={formik.handleChange}
            >
              <option> Name of Guarantee</option>
              {nguarantee.map((e) => {
                return <option>{e}</option>;
              })}
            </select>

            {formik.touched.nameofguarantee &&
              formik.errors.nameofguarantee && (
                <p style={{ color: "red" }}>{formik.errors.nameofguarantee}</p>
              )}
          </div>
          <div>
            <label htmlFor="language"></label>
            <select
              name="language"
              value={formik.values.language}
              onChange={formik.handleChange}
            >
              <option> Language</option>
              {language.map((e) => {
                return <option>{e}</option>;
              })}
            </select>
            {formik.touched.language && formik.errors.language && (
              <p style={{ color: "red" }}>{formik.errors.language}</p>
            )}
          </div>
          <div>
            <h3>Guarantee Amount</h3>
            <label htmlFor="type"></label>
            <select
              name="type"
              value={formik.values.type}
              onChange={formik.handleChange}
            >
              <option> Type</option>
              {type.map((e) => {
                return <option>{e}</option>;
              })}
            </select>
            {formik.touched.type && formik.errors.type && (
              <p style={{ color: "red" }}>{formik.errors.type}</p>
            )}
          </div>
          <div>
            <label htmlFor="currency"></label>
            <select
              name="currency"
              value={formik.values.currency}
              onChange={formik.handleChange}
            >
              <option> currency</option>
              {currency.map((e) => {
                return <option>{e}</option>;
              })}
            </select>
            <label htmlFor="amount"></label>
            <input
              name="amount"
              id="amount"
              value={formik.values.amount}
              onChange={formik.handleChange}
              placeholder="Amount"
            />
          </div>
          {formik.touched.amount && formik.errors.amount && (
            <p style={{ color: "red" }}>{formik.errors.amount}</p>
          )}
          <div>
            <h3>Expiry Date</h3>
            <label htmlFor="validitytype"></label>

            <select
              name="validitytype"
              value={formik.values.validitytype}
              onChange={formik.handleChange}
            >
              <option>Validity Type</option>
              {validitytype.map((e) => {
                return <option>{e}</option>;
              })}
            </select>

            <label htmlFor="expirydate"></label>
            <input
              type="date"
              name="expirydate"
              id="expirydate"
              value={formik.values.expirydate}
              onChange={formik.handleChange}
              placeholder="Expiry Date"
            />
          </div>
          {formik.touched.expirydate && formik.errors.expirydate && (
            <p style={{ color: "red" }}>{formik.errors.expirydate}</p>
          )}
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

export default LGDetails;
