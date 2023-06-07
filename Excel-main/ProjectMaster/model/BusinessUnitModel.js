const mongoose = require("mongoose");
var autoIncrement = require("mongoose-auto-increment");

const businessUnit = new mongoose.Schema({
  Id: {
    type: Number,
    unique: true,
    min: 1,
  },
  Name: {
    type: String,
  },
  CreateBy: {
    type: String,
  },
  CreateDate: {
    type: String,
    // default: Date.now,
  },
  ModifiedBy: {
    type: String,
  },
  ModifiedDate: {
    type: String,
    // default: Date.now,
  },
});

autoIncrement.initialize(mongoose.connection);
businessUnit.plugin(autoIncrement.plugin, {
  model: "businessunits",
  field: "Id",
  startAt: 1,
  incrementBy: 1,
});
const BussinessUnitModel = mongoose.model("businessunits", businessUnit);
module.exports = BussinessUnitModel;
