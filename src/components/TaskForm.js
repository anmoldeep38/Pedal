import React from 'react';
import '../TaskForm.css';

const TaskList = ({ tasks, onTaskClick }) => {
  return (
    <div className="task-list">
      <h2>Tasks</h2>
      <ul>
        {tasks.map(task => (
          <li key={task._id} onClick={() => onTaskClick(task)}>
            {task.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
