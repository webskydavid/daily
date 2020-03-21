import React from "react";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { formatCurrentDate } from "./../utils";
import { Context } from "./../App";

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
  let initValue = {
    title: "",
    content: ""
  };
  const {
    state: { form, days },
    dispatch
  } = React.useContext(Context);

  if (form.isEdit.id > 0) {
    initValue = days[form.isEdit.date].items.find(i => i.id === form.isEdit.id);
  }

  return (
    <>
      {!form.show && (
        <button
          onClick={() => dispatch({ type: "FORM", payload: { show: true } })}
        >
          Add new NOTE!
        </button>
      )}
      {form.show && (
        <>
          {form.isEdit.id > 0 && "Edit: " + initValue.title}
          <Formik
            initialValues={{ ...initValue }}
            enableReinitialize
            onSubmit={(value, actions) => {
              if (form.isEdit.id > 0) {
                dispatch({
                  type: "UPDATE",
                  payload: {
                    ...value
                  }
                });
                dispatch({ type: "IS_EDIT", payload: { date: 0, id: 0 } });
              } else {
                dispatch({
                  type: "ADD",
                  payload: {
                    ...value,
                    date: formatCurrentDate()
                  }
                });
              }
              actions.resetForm();
              dispatch({ type: "FORM", payload: { show: false } });
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
              <button
                type="button"
                onClick={() =>
                  dispatch({ type: "FORM", payload: { show: false } })
                }
              >
                Close
              </button>
              <button type="submit">Save</button>
            </Form>
          </Formik>
        </>
      )}
    </>
  );
};

export default NoteForm;
