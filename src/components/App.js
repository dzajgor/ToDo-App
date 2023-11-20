import { useEffect, useState } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import "./App.css";
import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const App = () => {
  const [counter, setCounter] = useState(3);
  const [allTasks, setAllTasks] = useState(JSON.parse(localStorage.getItem('allTasks')) || []);

  useEffect(() => {
    localStorage.setItem('allTasks', JSON.stringify(allTasks));
  }, [allTasks]);

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
        task.active = !task.active;
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
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <h1>TODO APP</h1>
        <AddTask add={addTask} />
        <TaskList
          tasks={allTasks}
          delete={deleteTask}
          change={changeTaskStatus}
        />
      </div>
    </DndProvider>
  );
};

export default App;
