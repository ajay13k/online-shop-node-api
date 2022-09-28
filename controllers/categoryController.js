const categoryModel = require("../models/categoryModel");
const createCategory = async (req, res) => {
  try {
    const existcategory = await categoryModel.findOne({ name: req.body.name });

    if (existcategory) {
      res.status(400).json({ message: "category already exist " });
    } else {
      const newCategory = new categoryModel({
        name: req.body.name,
        description: req.body.description,
        productid: req.body.productid,
      });
      const result = await newCategory.save();
      res
        .status(200)
        .json({ success: true, msg: "category add successfuly", data: result });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getCategory = async (req, res) => {
  try {
    const result = await categoryModel.find({});
    res.status(200).json({ succes: true, msg: "get category", data: result });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateCategory = async (req, res) => {
  try {
    const result = await categoryModel.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          name: req.body.name,
          description: req.body.description,
          productid: req.body.productid,
        },
      }
    );
    res
      .status(200)
      .json({ succes: true, msg: "update category successfuly", data: result });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const result = await categoryModel.deleteOne({ _id: req.params.id });
    res
      .status(200)
      .json({ succes: true, msg: "record deleted successfuly", data: result });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createCategory,
  getCategory,
  updateCategory,
  deleteCategory,
};
