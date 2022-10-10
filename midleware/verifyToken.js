const jwt = require("jsonwebtoken");
const key = "online-shop";
function verifyToken(req, res, next) {
  const token = req.headers["authorization"];
  console.log(token);
  if (token) {
    const tokenn = token;
    console.log(tokenn);
    jwt.verify(tokenn, key, (err, valid) => {
      if (err) {
        res.status(401).json({ message: "please provide a  valid jwt token" });
      } else {
        next();
      }
    });
  } else {
    res.status(400).send({ message: "please provide a token with header" });
  }
}

module.exports = verifyToken;
