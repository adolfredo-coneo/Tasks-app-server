module.exports.singleMiddleware = (request, response, next) => {
  console.log(
    "This is a log printed by a middleware integrated for a single route!"
  );
  next();
};

module.exports.multipleMiddleware = (request, response, next) => {
  console.log(
    "This is a log printed by a middleware integrated to multiple routes!"
  );
  next();
};
