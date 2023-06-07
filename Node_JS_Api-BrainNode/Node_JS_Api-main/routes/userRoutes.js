var express = require("express");
var router = express.Router();
var api = require("../controller/UserController");
const multer = require("multer");
const auth = require("../middleware/auth");

// image multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log(file);
    if (file.mimetype === ("image/jpeg" || "image/png" || "image/jpg")) {
      cb(null, "./uploads");
    } else {
      cb(null, "./uploads");
    }
  },
  filename: (req, file, callBack) => {
    callBack(null, Date.now() + "-" + file.originalname);
  },
});

var upload = multer({
  storage: storage,
});

router.post("/Register",upload.any(), api.registerUser);
router.post("/Login", api.loginUser);
router.get("/GetData",auth, api.GetData);
router.post("/Notification",auth, api.Notification);


module.exports = router;
