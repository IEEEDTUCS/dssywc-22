const express = require("express");
const TRouter = express.Router();

TRouter.get("/", async (err, res) => {
  res.render("teams");
});

module.exports = TRouter;
