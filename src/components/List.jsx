import React, { useContext, useState } from "react";
import Day from "./Day";
import { Context } from "./../contexts/NoteStore";
import { formatCurrentDate } from "./../utils";

const List = () => {
  const { data } = useContext(Context);
  const [day] = useState(formatCurrentDate("DDMMYYYY"));

  if (data[day]) {
    return (
      <div>
        <h3>
          <button>Prev</button> Daily of {day} <button>Next</button>
        </h3>
        {data[day].items &&
          data[day].items.map(i => <Day key={i.id} data={i} />)}
      </div>
    );
  }
  return "There are no notes for this day. Please add your first note! :)";
};

export default List;
