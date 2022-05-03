import React, { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faList, faTrash } from "@fortawesome/free-solid-svg-icons";

import "./App.css";
import Header from "./components/Header";
import Task from "./components/Task";
import Form from "./components/Form";
import Footer from "./components/Footer";
library.add(faList, faTrash);

function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([
    { title: "Learn CSS", done: false },
    { title: "Learn JS", done: true },
  ]);

  const addNewTask = (event) => {
    event.preventDefault();
    console.log(input);
    if (!input) {
      alert("Write a task.");
    } else {
      const newTasks = [...tasks];
      newTasks.push({ title: input, done: false });
      setTasks(newTasks);
      setInput("");
    }
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleCheckbox = (index) => {
    console.log("Index à modifier =>", index);
    const newTasks = [...tasks];
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);
  };

  const handleDelete = (index) => {
    console.log(tasks);
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <Header />
      <div>
        <div className="direction">
          <Task
            handleClickCheck={handleCheckbox}
            handleClickRemove={handleDelete}
            tasks={tasks}
          />
        </div>
        <div>
          <Form
            handleChange={handleChange}
            handleSubmit={addNewTask}
            input={input}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
