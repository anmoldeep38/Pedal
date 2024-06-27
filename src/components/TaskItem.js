import React from 'react';
import '../TaskItem.css';

const TaskItem = ({ task, onEdit, onDelete, onView }) => {
  return (
    <div className="task-item">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p><strong>Due Date:</strong> {new Date(task.dueDate).toLocaleDateString()}</p>
      <button onClick={onView}>View</button>
      <button onClick={onEdit}>Edit</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default TaskItem;
