const jwt = require("jsonwebtoken");
const key = "online-shop";
verifyToken = (id) => {
  return jwt.sign({ id }, key, { expiresIn: "40d" });
};
module.exports = verifyToken;
