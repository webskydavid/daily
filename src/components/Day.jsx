import React, { useState, useContext } from "react";
import NoteForm from "./NoteForm";
import { Context } from "../contexts/NoteStore";
import { formatCurrentDate } from "./../utils";

const Day = () => {
  const [day] = useState(formatCurrentDate("DDMMYYYY"));
  const context = useContext(Context);

  if (context.data[day]) {
    return (
      <div>
        <h3>
          <button>Prev</button> Daily of {day} <button>Next</button>
        </h3>
        {context.data[day].items &&
          context.data[day].items.map(i => (
            <div key={i.id}>
              <h5>
                {i.title} {i.time} <button onClick={() => {}}>Edit</button>
                <button onClick={() => context.remove(i.id)}>Delete</button>
              </h5>
              <p>{i.content}</p>
            </div>
          ))}
      </div>
    );
  }
  return "There are no notes for this day. Please add your first note! :)";
};

export default Day;
