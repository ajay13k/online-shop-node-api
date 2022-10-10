const userModel = require("../models/userModel");
require("../db/config");
const genrateToken = require("../midleware/authjwt");
const createUser = async (req, res) => {
  try {
    const newuser = new userModel({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
      password: req.body.password,
    });

    const userexist = await userModel.findOne({ email: req.body.email });
    if (userexist) {
      res.status(400).json({ result: "user already exist" });
    } else {
      await newuser.save();
      res.status(200).json({
        succes: true,
        msg: "user created successfully",
        data: {
          _id: newuser._id,
          firstName: newuser.firstName,
          lastName: newuser.lastName,
          email: newuser.email,
          phone: newuser.phone,
          password: newuser.password,
          token: genrateToken(newuser._id),
        },
      });
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getUser = async (req, res) => {
  try {
    const result = await userModel.find({});
    res.status(200).json({
      success: true,
      msg: "get data",
      data: result,
    });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const result = await userModel.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          phone: req.body.phone,
          password: req.body.password,
        },
      }
    );

    res
      .status(200)
      .json({ success: true, msg: "update record successfully", data: result });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const result = await userModel.deleteOne({ _id: req.params.id });
    res.status(200).json({
      success: true,
      msg: " deleted record successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({ message: error.messag });
  }
};

const getUserbyid = async (req, res) => {
  try {
    const result = await userModel.findOne({ _id: req.params.id });
    res
      .status(200)
      .json({ success: true, msg: "get user by id", data: result });
  } catch (error) {
    res.status(400).json({ messag: error.message });
  }
};

const authUser = async (req, res) => {
  try {
    if (req.body.password && req.body.email) {
      const user = await userModel.findOne(req.body).select("-password");
      if (user) {
        res.status(200).json({
          succes: true,
          msg: "user login successfuly",
          data: {
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            phone: user.phone,
            password: user.password,
            token: genrateToken(user._id),
          },
        });
      } else {
        res.send({ message: "user not found" });
      }
    } else {
      res.send({ message: "please provide a email and password" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
module.exports = {
  createUser,
  getUser,
  updateUser,
  deleteUser,
  getUserbyid,
  authUser,
};

