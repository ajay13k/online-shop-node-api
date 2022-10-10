const mongoose = require("mongoose");
const productModel = mongoose.Schema({
  name: { type: String, require: true },
  description: { type: String, require: true },
  price: { type: String, require: true },
  category: { type: String, required: true },
  categoryid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category",
    required:true
  },
});

const product = mongoose.model("product", productModel);
module.exports = product;
