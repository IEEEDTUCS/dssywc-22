const express = require("express");
const Router = express.Router();
const EventSchema = require("../model/EventSchema");
const EventPasses = require("../public/Data")

const TicketsNow = 150;
const EndingSoon = 250;

Router.get("/", async (err, res) => {
  EventSchema.find({}, function (err, users) {
    const hasStarted = users[0].isStarted;
    const count = users[0].count;
    const val= EventPasses.PASSES
    // console.log(EventPasses.PASSES)
    // console.log(users);
    if (err) return;
    else {
      res.render("index", {
        start: hasStarted,
        Count: count,
        TN: TicketsNow,
        ES: EndingSoon,
        Passes: EventPasses.PASSES,
        IP: users[0].IP,
        NIP: users[0].NIP,
        IPA: users[0].IPA,
        NIPA:users[0].NIPA,
      });
    }
  });
});

module.exports = Router;
