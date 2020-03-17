import React, { useState, useContext } from "react";
import { Context } from "../contexts/NoteStore";

const Day = ({ data }) => {
  const { remove } = useContext(Context);

  return (
    <div key={data.id}>
      <h5>
        {data.title} {data.time} <button onClick={() => {}}>Edit</button>
        <button onClick={() => remove(data.id)}>Delete</button>
      </h5>
      <p>{data.content}</p>
    </div>
  );
};

export default Day;
