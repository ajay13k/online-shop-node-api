const mongoose = require("mongoose");
const categoryModel = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, require: true },
  productid: { type: String, required: true },
});
const category = mongoose.model("category", categoryModel);
module.exports = category;

