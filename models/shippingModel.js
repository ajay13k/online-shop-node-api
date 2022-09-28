const mongoose = require("mongoose");
const shippingSchema = mongoose.Schema({
  name: { type: String, required: true },
  address1: { type: String, required: true },
  address2: { type: String, required: true },
  country: { type: String, required: true },
  state: { type: String, required: true },
  city: { type: String, required: true },
  phone: { type: String, required: true },
});
const shipping = mongoose.model("shipping", shippingSchema);
module.exports = shipping;
