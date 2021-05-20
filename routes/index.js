const routes = require('express').Router();
var taskController = require('../controllers/tasksController.js');

routes.get("/tasks/:n?", taskController.taskList);

routes.put("/tasks/:id", taskController.taskPost);

module.exports = routes;