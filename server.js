const express = require("express");

const app = express();
const port = 8080;

app.get("/tasks/:N", (request, response) => {
    response
    .status(200)
    .send(
        `List of Tasks ${request.params.N}`
    );
});

app.put("/tasks/:id", (request, response) => {
  //response.send("This flow is triggered when a Get request is made on the /test path");
  response
    .status(200)
    .send(
        `Task ${request.params.id} mark as completed`
    );
});

app.listen(port, () => {
  console.log(`We are running at http://localhost:${port}`);
});
