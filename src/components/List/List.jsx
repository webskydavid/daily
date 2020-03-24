import React from "react";
import Day from "../Day/Day";
import { Context } from "../../reducer";
import style from "./List.module.scss";

const List = () => {
  const {
    state: { currentDay, days }
  } = React.useContext(Context);
  const day = days[currentDay];

  if (day) {
    const items = day.items;

    if (items.length > 0) {
      return (
        <div className={style.list}>
          {items && items.map(i => <Day key={i.id} data={i} />)}
        </div>
      );
    }
    return <div className={style.no_item}>No items!</div>;
  }

  return <div className={style.no_item}>No items!</div>;
};

export default List;
