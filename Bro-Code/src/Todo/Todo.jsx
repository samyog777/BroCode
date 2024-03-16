import React, { useState } from "react";
import style from "./Todo.module.css";

function TodoList() {
  const [task, setTask] = useState([
    "Pushing Git",
    "Eating food",
    "Doing something secret",
  ]);
  const [newTask, setNewTask] = useState("");

  function HandelInputChange(event) {
    setNewTask(event.target.value);
  }
  function Addtask() {
    if (newTask !== "") {
      setTask((t) => [...t, newTask]);
      setNewTask("");
    }
  }
  function RemoveTask(index) {
    const updatedTask = task.filter((_, i) => i !== index);
    setTask(updatedTask);
  }
  function MoveUp(index) {
    if (index > 0) {
      const updateTask = [...task];
      [updateTask[index], updateTask[index - 1]] = [
        updateTask[index - 1],
        updateTask[index],
      ];
      setTask(updateTask);
    }
  }
  function MoveDown(index) {
    if (index < task.length-1) {
      const updatedTask = [...task];
      [updatedTask[index], updatedTask[index + 1]] = [
        updatedTask[index + 1],
        updatedTask[index],
      ];
      setTask(updatedTask);
    }
  }

  return (
    <>
      <div className={style.MainDiv}>
        <h1 className={style.h1}>The List in Todo: </h1>
        <div>
          <input
            className={style.input}
            type="text"
            onChange={HandelInputChange}
            value={newTask}
          />
          <button className={style.AddTask} onClick={Addtask}>
            Add
          </button>
        </div>
        <ol>
          {task.map((task, index) => (
            <li key={index}>
              <span className={style.text}>{task}</span>
              <button
                className={style.delete}
                onClick={() => RemoveTask(index)}>
                Delete
              </button>
              <button className={style.up} onClick={() => MoveUp(index)}>
                Up
              </button>
              <button className={style.down} onClick={() => MoveDown(index)}>
                Down
              </button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default TodoList;
