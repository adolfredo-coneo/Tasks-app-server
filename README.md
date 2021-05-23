# NodeJS Tasks API Server
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

A NodeJS Task Api built with Express, TypeORM, and connected to an AWS PostgreSQL Database. The API is currently deployed on Heroku https://tasks-app-api.herokuapp.com/ for testing purposes.

## Running The Project
If you are interested in running the project, then checkout this repo. You will need <code>[node](https://nodejs.org/en/)</code> (v14.1 or later) & <code>[npm](https://www.npmjs.com/)</code> installed. Now start the process with the following:
```
> git clone https://github.com/adolfredo-coneo/Tasks-app-server.git
> cd Tasks-app-server
> npm install
> npm start
```
## Testing The API
You can use a client like Postman to test the API with these endpoints:

- Get http://localhost:4000/tasks/:nTask - You can use the optional parameter nTask to get a specific number of tasks. The default value is 3.
- Put http://localhost:4000/tasks/:idTask - You need to provide the idTask parameter, the UUID of the task you want to complete.


### Not Familiar with Git?
You can download the .zip file. Extract the contents, then move to the project directory, open your terminal, and use:
```
> npm install
> npm start
```

### Learning Git
Those who are not yet familiar with Git but want to learn more about how to use it, check out these resources to dive into git workflow -
- [Git - Documentation](https://git-scm.com/doc)
- [Codecademy course](https://www.codecademy.com/learn/learn-git)
- [FCC video tutorial series](https://www.youtube.com/watch?v=vR-y_2zWrIE&list=PLWKjhJtqVAbkFiqHnNaxpOPhh9tSWMXIF)
- [How to Use Git and GitHub - FREE course on Udacity](https://www.udacity.com/course/how-to-use-git-and-github--ud775#)
- [Getting Git Right - Tutorials on Atlassian](https://www.atlassian.com/git)
- [List of useful resources & references](https://gist.github.com/eashish93/3eca6a90fef1ea6e586b7ec211ff72a5)
