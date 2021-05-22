"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Task_1 = require("../entities/Task");
exports.taskList = function (request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const nTasks = parseInt(request.params.n) || 3;
        const titles = yield getTasks(nTasks);
        response.status(200).send(titles);
    });
};
exports.taskPost = function (request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield markTask(request.params.id);
        response.status(200).send(result);
    });
};
function getTasks(nTasks) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield Task_1.Task.find({
            select: ["id", "title", "completed"],
            order: {
                createdAt: "ASC",
            },
            take: nTasks,
        });
    });
}
function markTask(idTask) {
    return __awaiter(this, void 0, void 0, function* () {
        const responseTask = yield Task_1.Task.findOne(idTask);
        if (!responseTask) {
            return `Task ${idTask} is not a valid task`;
        }
        else if (responseTask.completed) {
            return `Task ${idTask} is already completed`;
        }
        else {
            const resp = yield Task_1.Task.update({ id: idTask }, { completed: true });
            console.log(resp);
            return `Task ${idTask} mark as completed`;
        }
    });
}
//# sourceMappingURL=tasksController.js.map