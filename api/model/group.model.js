const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GroupSchema = new Schema({
  participant: {
    type: [String],
    unique: false,
  },
  todos: {
    type: [String],
    unique: false,
  },
});

const Group = mongoose.model("Group", GroupSchema);

module.exports = { Group };
