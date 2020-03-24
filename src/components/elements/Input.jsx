import React from "react";
import { Field, ErrorMessage } from "formik";
import {} from "prop-types";
import style from "./Input.module.scss";

const Input = ({ label, name, type = "text" }) => {
  let attr = {};
  if (type === "textarea") {
    attr = {
      as: "textarea",
      rows: 5
    };
  } else {
    attr = {
      type
    };
  }

  return (
    <div className={style.input}>
      <span>{label}</span>
      <Field {...attr} name={name} />
      <ErrorMessage name={name} component="div" />
    </div>
  );
};

Input.propTypes = {};

export default Input;
