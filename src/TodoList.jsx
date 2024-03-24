import React, {useState} from "react";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState();

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  return (
    <div className="todo-list">
      <h2 className="title">Todo List:</h2>
      <div className="input-elements">
        <input
          type="text"
          value={newTask}
          placeholder="Add todo list..."
          onChange={handleInputChange}
        />
        <button onClick={addTask}>➕</button>
      </div>

      <div className="list-container">
        <ol>
          {tasks.map((task, index) => (
            <li key={index}>
              <span className="list-text">{task}</span>
              <button className="delete-list-button" onClick={() => deleteTask(index)}>
                🗑️
              </button>
              <button className="move-up-task" onClick={() => moveTaskUp(index)}>
                👆
              </button>
              <button className="move-down-task" onClick={() => moveTaskDown(index)}>
                👇
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default TodoList;
