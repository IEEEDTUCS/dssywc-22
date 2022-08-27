const express = require("express");
const Router = express.Router();
const EventSchema = require("../model/EventSchema");

const TicketsNow = 150;
const EndingSoon = 250;

Router.get("/", async (err, res) => {
  EventSchema.find({}, function (err, users) {
    const hasStarted = users[0].isStarted;
    const count = users[0].count;
    if (err) return;
    else {
      res.render("index", {
        start: hasStarted,
        Count: count,
        TN: TicketsNow,
        ES: EndingSoon,
      });
    }
  });
});

module.exports = Router;
