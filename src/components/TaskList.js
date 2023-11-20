import React from "react";
import Task from "./Task";
import { useDrop } from "react-dnd";
import "./TaskList.css";

const TaskList = (props) => {
  const [, drop] = useDrop({
    accept: "TASK",
    drop: (item) => props.change(item.id),
  });

  const activeTasks = props.tasks
    .filter((task) => task.active)
    .map((task) => <Task key={task.id} task={task} delete={props.delete} />);

  const doneTasks = props.tasks
    .filter((task) => !task.active)
    .map((task) => <Task key={task.id} task={task} delete={props.delete} />);

  return (
    <div className="tasks-list" ref={drop}>
      <table className="active">
        <thead>
          <tr>
            <th>
              <h2>Zadania do zrobienia</h2>
            </th>
          </tr>
        </thead>
        <tbody>
          {activeTasks.length > 0 ? activeTasks : <tr><td>Brak zadań</td></tr>}
        </tbody>
      </table>
      <table className="done">
        <thead>
          <tr>
            <th>
              <h3>
                Zadania zrobione <em>({doneTasks.length})</em>
              </h3>
            </th>
          </tr>
        </thead>
        <tbody>{doneTasks.slice(0, 5)}</tbody>
      </table>
    </div>
  );
};

export default TaskList;