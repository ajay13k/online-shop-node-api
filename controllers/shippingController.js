const shippingModel = require("../models/shippingModel");
const shippingCreate = async (req, res) => {
  try {
    const newShipping = new shippingModel({
      name: req.body.name,
      address1: req.body.address1,
      address2: req.body.address2,
      country: req.body.country,
      state: req.body.state,
      city: req.body.city,
      phone: req.body.city,
    });

    const result = await newShipping.save();
    res.status(200).json({
      succes: true,
      msg: "shipping created successfuly",
      data: result,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
const shippingGet = async (req, res) => {
  try {
    const result = await shippingModel.find({});
    res.status(200).json({ succes: true, msg: "get data", data: result });
  } catch (error) {
    res.state(400).json({ message: error.message });
  }
};

const shippingUpdate = async (req, res) => {
  try {
    const result = await shippingModel.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          name: req.body.name,
          address1: req.body.address1,
          address2: req.body.address2,
          country: req.body.country,
          state: req.body.state,
          city: req.body.city,
          phone: req.body.city,
        },
      }
    );
    res
      .status(200)
      .json({ succes: true, msg: "shiping update successfuly", data: result });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const shipingDelete = async (req, res) => {
  try {
    const result = await shippingModel.delete({ _id: req.params.id });
    res.status(200).json({
      succes: true,
      msg: "shipping deleted successfuly",
      data: result,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { shippingCreate, shippingGet, shippingUpdate, shipingDelete };
