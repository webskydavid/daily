import React from "react";
import Day from "./Day";

export const List = ({ items }) => {
  return (
    <div>
      {items.map(item => (
        <Day item={item} />
      ))}
    </div>
  );
};
