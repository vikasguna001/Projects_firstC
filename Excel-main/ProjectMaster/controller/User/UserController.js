   
const UserService = require("../../Services/User/UserService");

// Register
exports.userRegister = async function (req, res, next) {
  return await UserService.registerUser(req, res, next);
};

// Login
exports.userLogin = function (req, res, next) {
  return UserService.loginUser(req, res, next);
  //    .then(user => res.json(user))
  //         .catch(next);
  // return await UserService.loginUser(req, res, next);
};

// exports.userLogin = async function (req, res, next) {
//     return await UserService.loginUser(req, res, next);
// };

exports.welcome = async function (req, res, next) {
  return res.status(200).send("Welcome 🙌 ");
};
   