"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routes = require('express').Router();
var taskController = require('../controllers/tasksController.js');
routes.get("/tasks/:n?", taskController.taskList);
routes.put("/tasks/:id", taskController.taskPost);
exports.default = routes;
//# sourceMappingURL=router.js.map