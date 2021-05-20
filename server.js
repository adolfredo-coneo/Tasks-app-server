const express = require("express");
const middleware = require("./middlewares/middlewares.js");
const routes = require("./routes");  

const app = express();
const port = 8080;

app.use(middleware.multipleMiddleware);
app.use(routes);

app.listen(port, () => {
  console.log(`We are running at http://localhost:${port}`);
});
