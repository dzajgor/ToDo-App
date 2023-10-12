import { Component } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import Task from './Task';
import './App.css';

class App extends Component {
  counter = 3;
  state = {
    tasks: [
      {
        id: 0,
        text: 'Przeczytać książkę o GitHubie',
        date: '2023-10-14',
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 1,
        text: 'Nauka Reacta',
        date: '2023-10-12',
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 2,
        text: 'Pójść do fryziera',
        date: '2023-10-13',
        important: false,
        active: true,
        finishDate: null
      },
    ]
  }

  deleteTask = (id) => {
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex(task => task.id === id);
    tasks.splice(index, 1);

    this.setState({
      tasks
    })
  }

  changeTaskStatus = (id) => {
    const tasks = [...this.state.tasks];
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    })
    this.setState({
      tasks
    })
  }

  addTask = (text, date, important) => {
    const tasks = [...this.state.tasks];
    const task = {
      id: this.counter,
      text,
      date,
      important,
      active: true,
      finishDate: null
    }
    tasks.push(task);
    this.counter++
    this.setState({
      tasks
    })

    return true
  }

  render() {
    return (
      <div className="App">
        <h1>TODO APP</h1>
        <AddTask add={this.addTask} />
        <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus} />
      </div>
    );
  }
}

export default App;
