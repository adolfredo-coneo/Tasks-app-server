import express from "express";
import routes from "./routes/router";
import { createConnection } from "typeorm";
import { Task } from "./entities/Task";
import cors from "cors";
require('dotenv').config();

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
  const port = process.env.PORT;

  app.set("trust proxy", 1);
  app.use(
    cors({
      origin: process.env.CORS_ORIGIN,
      credentials: true,
    })
  );

  app.use(routes);

  app.listen(port, () => {
    console.log(`We are running at http://localhost:${port}`);
  });
};

main().catch((err) => {
  console.error(err);
});
