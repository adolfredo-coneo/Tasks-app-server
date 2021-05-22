import { Request, Response } from "express";
import { Task } from "../entities/Task";
//const axios = require("axios").default;

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

/*
// Make a request to hipsum with nTasks
async function getTasksHipsum(nTasks: number) {
  try {
    const response = await axios.get("https://hipsum.co/api/", {
      params: {
        type: "hipster-centric",
        sentences: nTasks,
      },
    });

    let titleArray = response.data.toString().split(". ");

    let titles = titleArray.map((title: string) => {
      return {
        UUID: 1,
        Title: title,
      };
    });

    return titles;
  } catch (error) {
    console.error(error);
    return error;
  }
}

// Mark a tark as completed - Hipsum
function markTaskHipsum(idTask: string) {
  return `Task ${idTask} mark as completed`;
}

*/
