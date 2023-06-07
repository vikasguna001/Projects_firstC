const mongoose = require("mongoose");
var autoIncrement = require("mongoose-auto-increment");

const User = new mongoose.Schema({
  Id: {
    type: Number,
    unique: true,
    min: 1,
  },
  token: {  
    type: String
   },
  UserName: {
    type: String,
  },
  Email: {
    type: String,
    required: true,
    unique:true,
  },
  Password: {
    type: String,
  },
  UserRole: {
    type: String,
  },
  IsActive: {
    type: Boolean,
  },
  FirstName: {
    type: String,
  },
  LastName: {
    type: String,
  },
  Gender: {
    type: String,
  },
  ForgotPasswordToken: {
    type: String,
  },
  FunctionalGroupId: {
    type: String,
  },
  Phone: {
    type: Number,
  },
  CreateBy: {
    type: String,
  },
  CreateDate: {
    type: Date,
    default: Date.now,
  },
  ModifiedBy: {
    type: String,
  },
  ModifiedDate: {
    type: Date,
    default: Date.now,
  },
});

//const BussinessUnitModel = mongoose.model('businessunits',businessUnit);
autoIncrement.initialize(mongoose.connection); // 3. initialize autoIncrement
User.plugin(autoIncrement.plugin, {
  model: "User",
  field: "Id",
  startAt: 1,
  incrementBy: 1,
});
//businessUnit.plugin(autoIncrement.plugin, 'businessunits'); // 4. use autoIncrement
const UserModel = mongoose.model("User", User);
module.exports = UserModel;
