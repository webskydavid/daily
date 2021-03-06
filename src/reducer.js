import React from "react";
import { formatCurrentDate, prevDayFormatted, nextDayFormatted } from "./utils";

const ADD = "ADD";
const REMOVE = "REMOVE";
const UPDATE = "UPDATE";
const PREV_DAY = "PREV_DAY";
const NEXT_DAY = "NEXT_DAY";
const IS_EDIT = "IS_EDIT";
const SHOW_FORM = "FORM";

export const types = {
  ADD,
  REMOVE,
  UPDATE,
  PREV_DAY,
  NEXT_DAY,
  IS_EDIT,
  SHOW_FORM
};

const initState = {
  currentDay: formatCurrentDate(),
  form: {
    show: false,
    isEdit: { date: 0, id: 0 }
  },
  days: {
    "16032020": {
      items: [
        { id: 1, time: "13:13", title: "Title", content: "Contnet foo bar" },
        { id: 2, time: "13:46", title: "Title", content: "Contnet foo bar" }
      ],
      hours: [1]
    },
    "18032020": {
      items: []
    },
    "23032020": {
      items: [
        { id: 1, time: "13:13", title: "Title", content: "Contnet foo bar" },
        { id: 2, time: "13:46", title: "Title", content: "Contnet foo bar" },
        { id: 3, time: "13:46", title: "Title", content: "Contnet foo bar" },
        { id: 4, time: "13:46", title: "Title", content: "Contnet foo bar" }
      ],
      hours: [1]
    }
  }
};

const reducer = (state, action) => {
  console.log("Log: [action.type]", action.type, state, action);
  const { currentDay, days } = state;
  const { type, payload } = action;
  const day = days[currentDay] || { items: [] };
  const items = day.items;

  switch (type) {
    case SHOW_FORM:
      const edit = !payload.show ? { date: 0, id: 0 } : state.form.isEdit;
      return {
        ...state,
        form: {
          ...state.form,
          show: payload.show,
          isEdit: edit
        }
      };
    case IS_EDIT:
      return {
        ...state,
        form: {
          ...state.form,
          show: payload.id > 0,
          isEdit: {
            date: payload.date,
            id: payload.id
          }
        }
      };
    case PREV_DAY:
      return {
        ...state,
        currentDay: prevDayFormatted(currentDay)
      };
    case NEXT_DAY:
      return {
        ...state,
        currentDay: nextDayFormatted(currentDay)
      };
    case ADD:
      if (!days[currentDay]) {
        days[currentDay] = { items: [] };
      }

      return {
        ...state,
        days: {
          ...days,
          [currentDay]: {
            items: [
              ...days[currentDay].items,
              {
                ...payload
              }
            ]
          }
        }
      };
    case REMOVE:
      return {
        ...state,
        days: {
          ...days,
          [currentDay]: {
            items: days[currentDay].items.filter(i => i.id !== payload.id)
          }
        }
      };
    case UPDATE:
      const result = items.map(i => {
        if (i.id === payload.id) {
          return { ...i, ...payload };
        }
        return i;
      });

      return {
        ...state,
        days: {
          ...days,
          [currentDay]: {
            items: result
          }
        }
      };
    default:
      break;
  }
};

export const Context = React.createContext();

const Store = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initState);
  console.log("Log: [CURRENT STATE]", state);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export default Store;
