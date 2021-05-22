import express from "express";
import routes from "./routes/router";
import { createConnection } from "typeorm";
import { Task } from "./entities/Task";
import cors from "cors";
require('dotenv').config();

const main = async () => {
  await createConnection({
    type: "postgres",
    url: process.env.DATABASE_URL,
    logging: true,
    synchronize: true,
    entities: [Task],
  });

  const app = express();
  const port = process.env.PORT;
  const origin = process.env.CORS_ORIGIN || "";
  const originLocal = process.env.CORS_ORIGIN_LOCAL || "";

  const allowlist = [origin, originLocal]
  app.set("trust proxy", 1);
  app.use(
    cors({
      origin: allowlist,
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
