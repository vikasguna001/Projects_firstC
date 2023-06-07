var express = require('express');
var router = express.Router();
var api  = require('../controller/User/UserController');
const auth = require("../middleware/auth");

/* GET users listing. */
router.post("/register", api.userRegister);
router.post("/login",  api.userLogin);
router.get("/welcome", auth,api.welcome);






module.exports = router;



