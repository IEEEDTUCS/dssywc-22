const mongoose  = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
  isStarted: {
    type: Boolean,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("EventRegister",userSchema);
