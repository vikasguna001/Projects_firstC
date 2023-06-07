const jwt = require("jsonwebtoken");
const jwtkey = "Node_js";

const verifyToken = (req, res, next) => {
  let token = req.headers["authorization"];
  // console.log("call...", token);

  if (token) {
    token = token.split(" ")[1];
    jwt.verify(token, jwtkey, (err, valid) => {
      if (err) {
        res.status(401).send({ result: "401 Unauthorized" });
      } else {
        next()
      }
    });
  } else {
    res.status(403).send({ result: "403 Forbidden" });
  }
};

module.exports = verifyToken;