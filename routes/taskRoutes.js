const express = require('express');
const router = express.Router();
const {
  getAllTasks,
  createTask,
  getTaskById,
  updateTask,
  deleteTask,
} = require('../controllers/taskController');

router.get('/gettasks', getAllTasks);
router.post('/tasks', createTask);
router.get('/tasks/:id', getTaskById);
router.put('/updatetasks/:id', updateTask);
router.delete('/delete/:id', deleteTask);

module.exports = router;
