const axios = require("axios").default;

// Display list of tasks.
exports.taskList = async function (request, response) {
  const nTasks = request.params.n || 3;
  let titles = await getTasks(nTasks);
  console.log(titles);
  response.status(200).send(titles);
};

// Post task log.
exports.taskPost = function (request, response) {
  response.status(200).send(`Task ${request.params.id} mark as completed`);
};

// Make a request to hipsum with nTasks
async function getTasks(nTasks) {
  try {
    const response = await axios.get("https://hipsum.co/api/", {
      params: {
        type: "hipster-centric",
        sentences: nTasks,
      },
    });
    
    let titleArray = response.data.toString().split(". ");
    
    let titles = titleArray.map((title) => {
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
