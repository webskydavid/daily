import React from "react";
import Day from "./Day";
import { Context } from "./../App";

const List = () => {
  const {
    state: { currentDay, days }
  } = React.useContext(Context);
  const day = days[currentDay];

  if (!day) {
    return "No items!";
  }

  const items = day.items;

  if (items) {
    return <div>{items && items.map(i => <Day key={i.id} data={i} />)}</div>;
  }
  return "ERROR";
};

export default List;
