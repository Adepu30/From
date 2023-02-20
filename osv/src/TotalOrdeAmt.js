import React, { useState, useEffect, useRef } from "react";
import { useFormik } from "formik";

import * as Yup from "yup";

const TotalOrdeAmt = () => {
  const [show, setShow] = useState(false);
  const [fill, setFill] = useState([]);

  const collapse = useRef(null);
  const formik = useFormik({
    initialValues: {
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
    },

    onSubmit: (values) => {
      console.log(values);
      setFill([...fill, values]);
      formik.resetForm();
    },
    validationSchema: Yup.object({
      currency: Yup.string().required("Mandatory"),
      amount: Yup.number().required("Mandatory"),
      guaranteevalueinpercent: Yup.number().min(2).max(5).required("Mandatory"),
      customermobilenumber: Yup.number()
        .max(10, "Enter A Valid contact Number")
        .min(10, "Enter A Valid contact Number")
        .required("Mandatory"),
      beneficiarymobilenumber: Yup.string().required("Mandatory"),
      applicablerules: Yup.string().required("Mandatory"),
      chargesandfees: Yup.number().required("Mandatory"),
      detailsofguarantee: Yup.string().required("Mandatory"),
      termsandconditions: Yup.string().required("Mandatory"),
      letterofguaranteestartdate: Yup.string().required("Mandatory"),
    }),
  });

  const contraction = () => {
    setShow(!show);
  };
  useEffect(() => {
    const show = () => {
      const content = cc.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    };
    const cc = collapse.current;
    cc.addEventListener("click", show);
    return () => {
      cc.removeEventListener("click", show);
    };
  }, [show]);

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
    <>
      <button ref={collapse} onClick={contraction}>
        <h1>4.Total Order Amount Details</h1>
      </button>

      <form onSubmit={formik.handleSubmit} style={{ display: "none" }}>
        <h2>Total Order Amount</h2>
        <p>Enter amount details for guarantee</p>
        <div>
          <label htmlFor="currency"></label>
          <select
            name="currency"
            value={formik.values.currency}
            onChange={formik.handleChange}
          >
            <option> Currency</option>
            {currency.map((e) => {
              return <option>{e}</option>;
            })}
          </select>

          {formik.touched.currency && formik.errors.currency && (
            <p style={{ color: "red" }}>{formik.errors.currency}</p>
          )}

          <label htmlFor="amount"></label>
          <input
            type="text"
            name="amount"
            value={formik.values.amount}
            onChange={formik.handleChange}
            placeholder="Amount"
          />
          {formik.touched.amount && formik.errors.amount && (
            <p style={{ color: "red" }}>{formik.errors.amount}</p>
          )}
        </div>
        <div>
          <label htmlFor="guaranteevalueinpercent"></label>
          <input
            type="text"
            name="guaranteevalueinpercent"
            value={formik.values.guaranteevalueinpercent}
            onChange={formik.handleChange}
            placeholder="Guarantee Value in %"
          />

          {formik.touched.guaranteevalueinpercent &&
            formik.errors.guaranteevalueinpercent && (
              <p style={{ color: "red" }}>
                {formik.errors.guaranteevalueinpercent}
              </p>
            )}
        </div>

        <div>
          <label htmlFor="customermobilenumber"></label>
          <input
            type="text"
            name="customermobilenumber"
            value={formik.values.customermobilenumber}
            onChange={formik.handleChange}
            placeholder="Customer Mobile Number"
          />

          {formik.touched.customermobilenumber &&
            formik.errors.customermobilenumber && (
              <p style={{ color: "red" }}>
                {formik.errors.customermobilenumber}
              </p>
            )}

          <label htmlFor="beneficiarymobilenumber"></label>
          <input
            type="text"
            name="beneficiarymobilenumber"
            value={formik.values.beneficiarymobilenumbr}
            onChange={formik.handleChange}
            placeholder="Beneficiary Mobile Number"
          />

          {formik.touched.beneficiarymobilenumber &&
            formik.errors.beneficiarymobilenumber && (
              <p style={{ color: "red" }}>
                {formik.errors.beneficiarymobilenumber}
              </p>
            )}
        </div>

        <div>
          <label htmlFor="applicablerules"></label>
          <select
            name="applicablerules"
            value={formik.values.applicablerules}
            onChange={formik.handleChange}
          >
            <option> Applicable rules</option>
            {applicablerules.map((e) => {
              return <option>{e}</option>;
            })}
          </select>

          {formik.touched.applicablerules && formik.errors.applicablerules && (
            <p style={{ color: "red" }}>{formik.errors.applicablerules}</p>
          )}
        </div>

        <div>
          <label htmlFor="chargesandfees"></label>
          <textarea
            type="text"
            name="chargesandfees"
            value={formik.values.chargesandfees}
            onChange={formik.handleChange}
            placeholder="Charges and Fees(optional)"
          ></textarea>

          {formik.touched.chargesandfees && formik.errors.chargesandfees && (
            <p style={{ color: "red" }}>{formik.errors.chargesandfees}</p>
          )}
        </div>
        <div>
          <label htmlFor="detailsofguarantee"></label>
          <textarea
            type="text"
            name="detailsofguarantee"
            value={formik.values.detailsofguarantee}
            onChange={formik.handleChange}
            placeholder="Details of Guarantee"
          ></textarea>

          {formik.touched.detailsofguarantee &&
            formik.errors.detailsofguarantee && (
              <p style={{ color: "red" }}>{formik.errors.detailsofguarantee}</p>
            )}
        </div>

        <div>
          <label htmlFor="termsandconditions"></label>
          <textarea
            type="text"
            name="termsandconditions"
            value={formik.values.termsandconditions}
            onChange={formik.handleChange}
            placeholder="Terms and Conditions"
          ></textarea>
          {formik.touched.termsandconditions &&
            formik.errors.termsandconditions && (
              <p style={{ color: "red" }}>{formik.errors.termsandconditions}</p>
            )}
        </div>
        <div>
          <label htmlFor="letterofguaranteestartdate"></label>
          <input
            type="date"
            name="letterofguaranteestartdate"
            value={formik.values.letterofguaranteestartdate}
            onChange={formik.handleChange}
            placeholder="Letter of Guarantee Start Date"
          />

          {formik.touched.letterofguaranteestartdate &&
            formik.errors.letterofguaranteestartdate && (
              <p style={{ color: "red" }}>
                {formik.errors.letterofguaranteestartdate}
              </p>
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
    </>
  );
};

export default TotalOrdeAmt;
