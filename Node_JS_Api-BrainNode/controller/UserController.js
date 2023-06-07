const UserModel = require("../model/UserModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const jwtkey = "Node_js";
ObjectID = require('mongoskin').ObjectID;
var FCM = require('fcm-node');
var serverKey = 'AAAAmI9IHBo:APA91bGxYEz2nMgpgo_H8fxrIYbBJVzNXzzijXqcR_NfiAzaW6Mo2y8faVpRfpefhwl30hroNpJAHpLdE9bNd_PdDBL30BQVFAfDlR9WmvM6OQ1tEc7TD9JkWV-k1BcOArk8PvZaKFoB'; // put your server key here
var fcm = new FCM(serverKey);

exports.registerUser = async function (req, res, next) {
  const allPhone = await UserModel.findOne({ Phone: req.body.Phone });
  if (allPhone && allPhone.Phone) {
    res.status(201).json({
      status: false,
      message: "Phone Number Already Exists",
    });
  } else {
    let newpass = await bcrypt.hash(req.body.Password, 12);
    const data = {
      FirstName: req.body.FirstName,
      LastName: req.body.LastName,
      Phone: req.body.Phone,
      Password: newpass,
      ProfileImg: req.files[0].path,
      // Devicetoken: req.body.device_token,
    };

    jwt.sign({ data }, jwtkey, async (err, token) => {
      if (err) {
        res.send({ result: "wrong...." });
      }
      const tag = await UserModel.create(data);

      res.status(201).send({
        status: true,
        auth: token,
        data: tag,
      });
    });
  }
};

exports.loginUser = async function (req, res, next) {
  const { Phone, Password } = req.body;
  const User = await UserModel.findOne({ Phone });

  if (User) {

    jwt.sign({ User }, jwtkey, async (err, token) => {
      if (err) {
        res.send({ status: false, message: "not valid Phone and password" });
      }

      const checkpass = await bcrypt.compare(Password, User.Password);
      console.log(User , checkpass);
      if (checkpass) {
        res.status(200).json({
          status: true,
          data: User,
          auth: token,
          message: "1",
        });
      } else {
        res.send({ status: false, message: "not valid Phone and password" });
      }
    });
  } else {
    res.send({ status: false, message: "not valid Phone and password" });
  }
};

exports.GetData = async function (req, res, next) {
  try {
    const data = await UserModel.find();
    res.status(201).json({ status: "success", data: data });
  } catch (error) {
    console.log(error);
  }
};

exports.Notification = async function (req, res, next) {
  try {
    const data = await UserModel.find({ _id: { $in: req.body.Ids } });
    let TokenList = data.map(element => {
      return element.Devicetoken;
    });
    var result = pushNotification(req.body.Title, req.body.Description, TokenList);
    if (result == true) {
      res.status(200).json({ status: "Notification Send Successfully" });
    } else {
      res.status(400).json({ status: "Notification Send Fail" });
    }
  } catch (error) {
    console.log(error);
  }
};

const pushNotification = (title, description, deviceIds) => {
  var message = {
    registration_ids: deviceIds,
    notification: {
      title: title,
      body: description
    },
    data: {
      my_key: 'my value',
      my_another_key: 'my another value'
    }
  };
  fcm.send(message, function (err, response) {
    if (err) {
      return false;
    } else {
      return true;
    }
  });
  return true;
};