import React, { createContext, useState } from "react";
import { formatCurrentDate, timestamp } from "./../utils";

const initData = {
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

export const Context = createContext();

const NoteStore = ({ children }) => {
  const currentDay = formatCurrentDate();
  const [data, setData] = useState(initData);

  const add = note => {
    setData(s => {
      if (!s[currentDay]) {
        s[currentDay] = {
          items: []
        };
      }
      s[currentDay].items.push({
        ...note,
        id: timestamp(),
        time: formatCurrentDate("HH:mm:ss")
      });
      return {
        ...s
      };
    });
  };

  const remove = id => {
    setData(s => {
      let items = s[currentDay].items.filter(i => i.id !== id) || [];
      return {
        ...s,
        [currentDay]: {
          items
        }
      };
    });
  };

  const update = () => {};

  const [fn] = useState({
    add,
    remove,
    update
  });

  return (
    <Context.Provider value={{ ...fn, data }}>{children}</Context.Provider>
  );
};

export default NoteStore;
