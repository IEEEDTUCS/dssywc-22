const express = require("express");
const FRouter = express.Router();

FRouter.get("/", async (err, res) => {
    res.render("form");
});

module.exports = FRouter;
