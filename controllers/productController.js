const productModel = require("../models/productModel");
const createProduct = async (req, res) => {
  try {
    const newProduct = new productModel({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      categoryid: req.body.categoryid,
    });

    const productexist = await productModel.findOne({ name: req.body.name });
    if (productexist) {
      res.status(400).json({ message: "product is already exist" });
    } else {
      const result = await newProduct.save();
      res.status(200).json({
        succes: true,
        msg: "pruduct created successfuly",
        data: result,
      });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getProduct = async (req, res) => {
  try {
    const result = await productModel.find({});
    res.status(200).json({ succes: true, msg: "get data", data: result });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const productexist = await productModel.findOne({ name: req.body.name });
    if (productexist) {
      res.status(400).json({ message: "product is already exist" });
    } else {
      const result = await productModel.findOneAndUpdate(
        { _id: req.params.id },
        {
          $set: {
            name: req.body.name,
            description: req.body.descriptione,
            price: req.body.price,
            category: req.body.category,
            categoryid: req.body.categoryid,
          },
        }
      );
      res.status(200).json({
        success: true,
        msg: "update record successfully",
        data: result,
      });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const result = await productModel.deleteOne({ _id: req.params.id });
    res.status(400).json({
      succes: true,
      msg: "deleted record successfuly",
      data: result,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { createProduct, getProduct, updateProduct, deleteProduct };
