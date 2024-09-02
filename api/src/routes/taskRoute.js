const express = require('express');
const taskController = require('../controller/taskController');

const taskRoute = express.Router();

taskRoute.post('/create', taskController.create);
taskRoute.get('/read-all', taskController.readAll);
taskRoute.put('/update', taskController.update);
taskRoute.delete('/delete', taskController.delete);

module.exports = taskRoute;
