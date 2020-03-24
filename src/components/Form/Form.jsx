import React from "react";
import { Form as FormikForm, Formik } from "formik";
import * as Yup from "yup";
import { formatCurrentDate, getTime, timestamp } from "../../utils";
import { Context, types } from "../../reducer";
import Button from "../elements/Button";
import Input from "../elements/Input";
import style from "./Form.module.scss";

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

const Form = () => {
  let initValue = {
    title: "",
    content: "",
    time: getTime(),
    id: timestamp()
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
        <Button
          type="button"
          text="Add new NOTE!"
          onClick={() =>
            dispatch({ type: types.SHOW_FORM, payload: { show: true } })
          }
        />
      )}
      {form.show && (
        <div className={style.form}>
          {form.isEdit.id > 0 && "Edit: " + initValue.title}
          <Formik
            initialValues={{ ...initValue }}
            enableReinitialize
            onSubmit={(value, actions) => {
              if (form.isEdit.id > 0) {
                dispatch({
                  type: types.UPDATE,
                  payload: {
                    ...value
                  }
                });
                dispatch({
                  type: types.IS_EDIT,
                  payload: { date: 0, id: 0 }
                });
              } else {
                dispatch({
                  type: types.ADD,
                  payload: {
                    ...value,
                    date: formatCurrentDate()
                  }
                });
              }
              actions.resetForm();
              dispatch({
                type: types.SHOW_FORM,
                payload: { show: false }
              });
            }}
            validationSchema={Schema}
          >
            <FormikForm>
              <Input key="title" label="Title" name="title" type="text" />
              <Input
                key="content"
                label="Content"
                name="content"
                type="textarea"
              />
              <Input key="time" label="Time" name="time" type="text" />

              <Button
                variant="warning"
                type="button"
                text="Close"
                onClick={() =>
                  dispatch({ type: types.SHOW_FORM, payload: { show: false } })
                }
              />
              <Button variant="primary" type="submit" text="Save" />
            </FormikForm>
          </Formik>
        </div>
      )}
    </>
  );
};

export default Form;
