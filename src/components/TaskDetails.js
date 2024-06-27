import React from 'react';
import '../TaskDetails.css';

const TaskDetails = ({ task, onEdit, onDelete, onBack }) => {
  return (
    <div className="task-details">
      <h2>Task Details</h2>
      <p><strong>Title:</strong> {task.title}</p>
      <p><strong>Description:</strong> {task.description}</p>
      <p><strong>Due Date:</strong> {new Date(task.dueDate).toLocaleDateString()}</p>
      <button onClick={() => onEdit(task)}>Edit</button>
      <button onClick={() => onDelete(task._id)}>Delete</button>
      <button onClick={onBack}>Back</button>
    </div>
  );
};

export default TaskDetails;
