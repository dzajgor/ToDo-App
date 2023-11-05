import { useState } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import "./App.css";

const App = () => {
  const [counter, setCounter] = useState(3);
  const [allTasks, setAllTasks] = useState([
    {
      id: 0,
      text: "Przeczytać książkę o GitHubie",
      date: "2023-10-14",
      important: true,
      active: true,
      finishDate: null,
    },
    {
      id: 1,
      text: "Nauka Reacta",
      date: "2023-10-12",
      important: true,
      active: true,
      finishDate: null,
    },
    {
      id: 2,
      text: "Pójść do fryziera",
      date: "2023-10-13",
      important: false,
      active: true,
      finishDate: null,
    },
  ]);

  const deleteTask = (id) => {
    const tasks = [...allTasks];
    const index = tasks.findIndex((task) => task.id === id);
    tasks.splice(index, 1);

    setAllTasks(tasks);
  };

  const changeTaskStatus = (id) => {
    const tasks = [...allTasks];
    tasks.forEach((task) => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    });
    setAllTasks(tasks);
  };

  const addTask = (text, date, important) => {
    const tasks = [...allTasks];
    const task = {
      id: counter,
      text,
      date,
      important,
      active: true,
      finishDate: null,
    };
    tasks.push(task);
    setCounter(counter + 1);
    setAllTasks(tasks);

    return true;
  };

  return (
    <div className="App">
      <h1>TODO APP</h1>
      <AddTask add={addTask} />
      <TaskList
        tasks={allTasks}
        delete={deleteTask}
        change={changeTaskStatus}
      />
    </div>
  );
};

export default App;
