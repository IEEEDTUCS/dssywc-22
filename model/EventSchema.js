const mongoose  = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
  isStarted: {
    type: Boolean,
    required: true,
  },
  IP: {
    type: Number,
    required: true,
  },
  NIP: {
    type: Number,
    required: true,
  },
  IPA: {
    type: Number,
    required: true,
  },
  NIPA: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("EventRegister",userSchema);
