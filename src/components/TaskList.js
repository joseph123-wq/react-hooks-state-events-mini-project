import React from "react";
import Task from "./Task";

function TaskList(props) {
  const { tasks, deleteTask } = props;

  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task key={task.id} task={task} deleteTask={deleteTask} />
      ))}
    </div>
  );
}

export default TaskList;
