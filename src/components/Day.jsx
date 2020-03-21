import React from "react";
import { Context } from "./../App";

const Day = ({ data }) => {
  const {
    state: { currentDay },
    dispatch
  } = React.useContext(Context);

  return (
    <div key={data.id}>
      <h5>
        {data.title} {data.time}{" "}
        <button
          onClick={() =>
            dispatch({
              type: "IS_EDIT",
              payload: {
                date: currentDay,
                id: data.id
              }
            })
          }
        >
          Edit
        </button>
        <button
          onClick={() => dispatch({ type: "REMOVE", payload: { id: data.id } })}
        >
          Delete
        </button>
      </h5>
      <p>{data.content}</p>
    </div>
  );
};

export default Day;
