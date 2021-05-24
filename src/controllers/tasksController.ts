import { Request, Response } from "express";
import { Task } from "../entities/Task";

// Display list of tasks.
exports.taskList = async function (request: Request, response: Response) {
  const nTasks = parseInt(request.params.n) || 3;
  const titles = await getTasks(nTasks);
  response.status(200).send(titles);
};

// Post task log.
exports.taskPost = async function (request: Request, response: Response) {
  const result = await markTask(request.params.id);
  response.status(200).send(result);
};

// Make a request to the database with nTasks
async function getTasks(nTasks: number) {
  return await Task.find({
    select: ["id", "title", "completed"],
    order: {
      createdAt: "ASC",
    },
    take: nTasks,
  });
}

// Mark a tark as completed - database
async function markTask(idTask: string) {
  const responseTask = await Task.findOne(idTask);
  if (!responseTask) {
    return `Task ${idTask} is not a valid task`;
  } else if (responseTask.completed) {
    return `Task ${idTask} is already completed`;
  } else {
    const resp = await Task.update({ id: idTask }, { completed: true });
    console.log(resp);
    return `Task ${idTask} mark as completed`;
  }
}
