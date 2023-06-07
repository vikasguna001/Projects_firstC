const mongoose = require("mongoose");
var autoIncrement = require("mongoose-auto-increment");

const RoleMaster = new mongoose.Schema({
  Id: {
    type: Number,
    unique: true,
    min: 1,
  },
  Name: {
    type: String,
  },
  IsActive: {
    type: String,
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
  }
});

autoIncrement.initialize(mongoose.connection);
RoleMaster.plugin(autoIncrement.plugin, {
  model: "RoleMasters",
  field: "Id",
  startAt: 1,
  incrementBy: 1,
});
const RoleMasterModel = mongoose.model("RoleMasters", RoleMaster);
module.exports = RoleMasterModel;
