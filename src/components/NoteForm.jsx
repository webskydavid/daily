import React, { useState, useContext } from "react";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { Context } from "./../contexts/NoteStore";
import * as Yup from "yup";

const Schema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Too Short!")
    .max(120, "Too Long!")
    .required("Required"),
  content: Yup.string()
    .min(2, "Too Short!")
    .max(500, "Too Long!")
    .required("Required")
});

const NoteForm = () => {
  const context = useContext(Context);
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(s => !s);
  };

  return (
    <>
      <button onClick={handleToggle}>New note</button>

      {toggle ? (
        <Formik
          initialValues={{ title: "", content: "" }}
          onSubmit={(value, actions) => {
            context.add(value);
            actions.resetForm();
            handleToggle();
          }}
          validationSchema={Schema}
        >
          <Form>
            <label htmlFor="">
              Title
              <Field type="text" name="title" />
              <ErrorMessage name="title" />
            </label>
            <br />
            <label htmlFor="">
              Content
              <Field as="textarea" name="content" />
              <ErrorMessage name="content" />
            </label>
            <br />
            <button type="submit">Save</button>
          </Form>
        </Formik>
      ) : null}
    </>
  );
};

export default NoteForm;
