import express from "express";
import routes from "./routes/router";
import { createConnection } from "typeorm";
import { Task } from "./entities/Task";

const main = async () => {
  await createConnection({
    type: "postgres",
    url: "postgresql://postgresta:TAphinx24..@tasksapp.cvnsjf6lry5p.us-east-2.rds.amazonaws.com/postgres",
    logging: true,
    synchronize: true,
    entities: [Task],
  });

  /*let task = new Task();
  task.title = "Ado and Angie";
  task.completed = false;

  conn.manager.save(task).then((task) => {
    console.log("Task has been saved. Task id is", task.id);
  });*/

  const app = express();
  const port = 8080;

  app.use(routes);

  app.listen(port, () => {
    console.log(`We are running at http://localhost:${port}`);
  });
};

main().catch((err) => {
  console.error(err);
});
