import React from "react";

function Task(props) {
  const { task, deleteTask } = props;

  const handleDelete = () => {
    deleteTask(task.id);
  };

  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button className="delete" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}

export default Task;
