import React, { useEffect, useState } from 'react';
import { getAllTasks, deleteTask } from '../services/api';
import TaskItem from '../TaskItem.css';

const TaskList = ({ onEdit, onView }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const fetchedTasks = await getAllTasks();
        console.log('Fetched tasks:', fetchedTasks);
        setTasks(fetchedTasks);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  const handleDelete = async (taskId) => {
    try {
      await deleteTask(taskId);
      setTasks(tasks.filter((task) => task._id !== taskId));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  if (!tasks || tasks.length === 0) {
    return <div>No tasks available.</div>;
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task._id}
          task={task}
          onEdit={() => onEdit(task)}
          onDelete={() => handleDelete(task._id)}
          onView={() => onView(task)}
        />
      ))}
    </div>
  );
};

export default TaskList;
