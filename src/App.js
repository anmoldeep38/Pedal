import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import TaskDetails from './components/TaskDetails';
import './styles.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await axios.get('http://localhost:5000/api/v1/tasks');
      setTasks(response.data);
    };
    fetchTasks();
  }, []);
  
  const addTask = async (task) => {
    try {
      const response = await axios.post('http://localhost:5000/api/v1/tasks', task);
      console.log('Added task:', response.data); // Debug log
      setTasks([...tasks, response.data]);
    } catch (error) {
      console.error('Error adding task:', error); // Debug log
    }
  };

  const updateTask = async (id, updatedTask) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/v1/tasks/${id}`, updatedTask);
      console.log('Updated task:', response.data); // Debug log
      setTasks(tasks.map(task => task._id === id ? response.data : task));
    } catch (error) {
      console.error('Error updating task:', error); // Debug log
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/v1/tasks/${id}`);
      console.log('Deleted task:', id); // Debug log
      setTasks(tasks.filter(task => task._id !== id));
    } catch (error) {
      console.error('Error deleting task:', error); // Debug log
    }
  };

  const handleTaskClick = (task) => {
    console.log('Task clicked:', task); // Debug log
    setSelectedTask(task);
    setIsEditing(false);
  };

  const handleEditClick = (task) => {
    console.log('Edit task clicked:', task); // Debug log
    setSelectedTask(task);
    setIsEditing(true);
  };

  const handleBackClick = () => {
    console.log('Back clicked'); // Debug log
    setSelectedTask(null);
    setIsEditing(false);
  };

  return (
    <div className="app">
      <h1>Task Management</h1>
      {selectedTask ? (
        isEditing ? (
          <TaskForm task={selectedTask} onSave={updateTask} onBack={handleBackClick} />
        ) : (
          <TaskDetails task={selectedTask} onEdit={handleEditClick} onDelete={() => deleteTask(selectedTask._id)} onBack={handleBackClick} />
        )
      ) : (
        <>
          <TaskForm onSave={addTask} />
          <TaskList tasks={tasks} onTaskClick={handleTaskClick} />
        </>
      )}
    </div>
  );
};

export default App;
