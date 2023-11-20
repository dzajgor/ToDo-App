import React from "react";
import Task from "./Task";
import "./TaskList.css";

const TaskList = (props) => {
  const active = props.tasks.filter((task) => task.active);
  const done = props.tasks.filter((task) => !task.active);

  if (done.length >= 2) {
    done.sort((a, b) => {
      if (a.finishDate < b.finishDate) {
        return 1;
      }
      if (a.finishDate > b.finishDate) {
        return -1;
      }
      return 0;
    });
  }
  if (active.length >= 2) {
    active.sort((a, b) => {
      a = a.text.toLowerCase();
      b = b.text.toLowerCase();

      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    });
  }

  const activeTasks = active.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));
  const doneTasks = done.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));
  return (
    <>
      <div className="tasks-list">
        <table className="active">
          <tr>
            <th>
              <h2>Zadania do zrobienia</h2>
            </th>
          </tr>
          {activeTasks.length > 0 ? activeTasks : <p>Brak zadań</p>}
        </table>
        <table className="done">
          <tr>
            <th>
              <h3>
                Zadania zrobione <em>({done.length})</em>
              </h3>
            </th>
          </tr>
          {doneTasks.slice(0, 5)}
        </table>
      </div>
    </>
  );
};

export default TaskList;