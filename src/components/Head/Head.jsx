import React from "react";
import { Context, types } from "../../reducer";
import { formatDate, formatCurrentDate } from "../../utils";
import style from "./Head.module.scss";
import Button from "../elements/Button";

const Head = () => {
  const {
    state: { currentDay },
    dispatch
  } = React.useContext(Context);
  return (
    <div className={style.head}>
      <Button
        size="small"
        text="Prev"
        onClick={() => dispatch({ type: types.PREV_DAY })}
      />
      <p>{formatDate(currentDay, "DDMMYYYY", "DD-MMMM-YYYY")}</p>
      {currentDay !== formatCurrentDate() && (
        <Button
          size="small"
          text="Next"
          onClick={() => dispatch({ type: types.NEXT_DAY })}
        />
      )}
    </div>
  );
};

export default Head;
