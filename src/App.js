import React, { useState } from "react";
import "./styles.scss";

const data = {
  "01032020": {
    items: [
      { id: 1, time: "13:13", title: "Title", content: "Contnet foo bar" },
      { id: 2, time: "13:46", title: "Title", content: "Contnet foo bar" }
    ],
    hours: [1]
  },
  "02032020": {
    items: []
  }
};

const DayComponent = () => {
  const [day, setDay] = useState("01032020");

  return (
    <div>
      <h3>
        <button>Prev</button> Daily of {day} <button>Next</button>
      </h3>
      {data[day].items.map(i => (
        <div key={i.id}>
          <h5>
            {i.title} {i.time} <button>Edit</button>
          </h5>
          <p>{i.content}</p>
        </div>
      ))}
      <button>New note</button>
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <DayComponent />
    </div>
  );
}
