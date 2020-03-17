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

const NoteForm = ({ values, update }) => {
  const context = useContext(Context);

  const { title, content } = values;

  return (
    <Formik
      initialValues={{
        title: title || "fewf",
        content: content || "fewfe"
      }}
      onSubmit={(value, actions) => {
        if (update) {
          context.update({
            ...values,
            title: value.title,
            content: value.content
          });
        } else {
          context.add(value);
          actions.resetForm();
        }
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
  );
};

export default NoteForm;
