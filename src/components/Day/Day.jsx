import React from "react";
import { Context, types } from "../../reducer";
import Button from "../elements/Button";

const Day = ({ data }) => {
  const {
    state: { currentDay },
    dispatch
  } = React.useContext(Context);

  const day = React.useMemo(() => {
    return (
      <div key={data.id}>
        <h5>
          {data.title} {data.time}{" "}
          <Button
            variant="info"
            size="small"
            text="Edit"
            onClick={() =>
              dispatch({
                type: types.IS_EDIT,
                payload: {
                  date: currentDay,
                  id: data.id
                }
              })
            }
          />
          <Button
            variant="danger"
            size="small"
            text="Delete"
            onClick={() =>
              dispatch({
                type: types.REMOVE,
                payload: { id: data.id }
              })
            }
          />
        </h5>
        <p>{data.content}</p>
      </div>
    );
  }, [currentDay, data.content, data.id, data.time, data.title, dispatch]);

  return day;
};

export default Day;
