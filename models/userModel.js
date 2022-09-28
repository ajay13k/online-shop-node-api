const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, require: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
});

const user = mongoose.model("user", userSchema);
module.exports = user;
