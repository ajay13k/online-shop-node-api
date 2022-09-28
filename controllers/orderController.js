const orderModel = require("../models/orderModel");
const createOrder = async (req, res) => {
  try {
    const data = await orderModel.findOne({ userid: req.body.userid });
    if (data) {
      res.status(400).json({ message: "order already exist" });
    } else {
      const newOrder = new orderModel({
        userid: req.body.userid,
        productid: req.body.productid,
        total: req.body.total,
      });
      const result = await newOrder.save();
      res
        .status(200)
        .json({ succes: true, msg: "order created successfuly", data: result });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getOrder = async (req, res) => {
  try {
    const result = await orderModel.find();
    res.status(200).json({ succes: true, msg: "get orders", data: result });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateOrder = async (req, res) => {
  try {
    const result = await orderModel.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          userid: req.body.userid,
          productid: req.body.productid,
          total: req.body.total,
        },
      }
    );
    res
      .status(200)
      .json({ succes: true, msg: "update order successfuly", data: result });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteOrder = async (req, res) => {
  try {
    const result = await orderModel.deleteOne({ _id: req.params.id });
    res
      .status(200)
      .json({ succes: true, msg: "order deleted successfuly", data: result });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { createOrder, getOrder, updateOrder, deleteOrder };
