import { useState } from "react";
import "./ToDoList.css";

const ListItem = ({ toDoItem, onToggleDone, onDelete }) => {
  return (
    <div
      className={`listItem ${toDoItem.done ? "completed" : ""}`}
      onClick={() => onToggleDone(toDoItem.id)}
    >
      <span>{toDoItem.name}</span>
      <button className="deleteButton" onClick={(e) => { e.stopPropagation(); onDelete(toDoItem.id); }}>
        Delete
      </button>
    </div>
  );
};

const ToDoList = ({ pageTitle }) => {
  const [toDoList, setToDoList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onClickAddTask = () => {
    if (!inputValue) return;
    const newTask = {
      id: Date.now(),
      name: inputValue,
      done: false
    };
    setToDoList([...toDoList, newTask]);
    setInputValue("");
  };

  const onToggleDone = (id) => {
    setToDoList(
      toDoList.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const onDelete = (id) => {
    setToDoList(toDoList.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
      <div className="header">
        <h1>{pageTitle}</h1>
      </div>
      <div className="inputContainer">
        <label htmlFor="taskText" className="inputLabel">
          Digite a sua tarefa
        </label>
        <input
          id="taskText"
          name="taskText"
          className="input"
          value={inputValue}
          onChange={onInputChange}
        />
        <button className="addButton" onClick={onClickAddTask}>
          +
        </button>
      </div>
      <div className="list">
        {toDoList.map((toDoItem) => (
          <ListItem
            key={toDoItem.id}
            toDoItem={toDoItem}
            onToggleDone={onToggleDone}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default ToDoList;
