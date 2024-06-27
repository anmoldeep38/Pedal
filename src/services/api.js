import axios from 'axios';

const API_URL = 'http://localhost:5000/api/v1/tasks';

// Function to get all tasks
export const getAllTasks = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw error;
  }
};

// Function to get a single task by ID
export const getTaskById = async (taskId) => {
  try {
    const response = await axios.get(`${API_URL}/${taskId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching task with ID ${taskId}:`, error);
    throw error;
  }
};

// Function to create a new task
export const createTask = async (taskData) => {
  try {
    const response = await axios.post(API_URL, taskData);
    return response.data;
  } catch (error) {
    console.error('Error creating task:', error);
    throw error;
  }
};

// Function to update an existing task
export const updateTask = async (taskId, taskData) => {
  try {
    const response = await axios.put(`${API_URL}/${taskId}`, taskData);
    return response.data;
  } catch (error) {
    console.error(`Error updating task with ID ${taskId}:`, error);
    throw error;
  }
};

// Function to delete a task
export const deleteTask = async (taskId) => {
  try {
    await axios.delete(`${API_URL}/${taskId}`);
  } catch (error) {
    console.error(`Error deleting task with ID ${taskId}:`, error);
    throw error;
  }
};
