import React from "react";
import { useDrag } from "react-dnd";

const Task = (props) => {
  const style = {
    color: "red",
  };

  const { text, date, id, active, important, finishDate } = props.task;

  const [, drag] = useDrag({
    type: "TASK",
    item: { id },
  });

  if (active) {
    return (
      <tr className="table-tr" ref={drag}>
        <td>
          <p>
            <strong style={important ? style : null}>{text}</strong> - do{" "}
            <span>{date} </span>
            <button onClick={() => props.delete(id)}>X</button>
          </p>
        </td>
      </tr>
    );
  } else {
    const finish = new Date(finishDate).toLocaleString();
    return (
      <tr className="table-tr" ref={drag}>
        <td>
          <p>
            <strong>{text}</strong>
            <em> (zrobić do {date}) </em>
            <br />- potwierdzenie wykonania
            <span>{finish}</span>
            <button onClick={() => props.delete(id)}>X</button>
          </p>
        </td>
      </tr>
    );
  }
};

export default Task;