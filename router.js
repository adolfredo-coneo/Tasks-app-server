// router.js
const express = require("express");

const router = express.Router();
router.get("/", (request, response) => {
      response.send("This path under a specific router");
});

module.exports = router;