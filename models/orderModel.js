const mongoose = require("mongoose");
const orderSchema = mongoose.Schema({
  userid: { type: String, required: true },
  productid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "product",
    required: true,
  },
  total: { type: Number, default: 2 },
});
const order = mongoose.model("order", orderSchema);
module.exports = order;
