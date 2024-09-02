const express = require('express');
const taskController = require('../controller/taskController');

const taskRoute = express.Router();

taskRoute.post('/create', taskController.create);

module.exports = taskRoute;
