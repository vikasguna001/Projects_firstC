const mongoose = require("mongoose");
var autoIncrement = require("mongoose-auto-increment");

const RecourceDetail = new mongoose.Schema({
  Id: {
    type: Number,
    unique: true,
    min: 1,
  },
  UserId: {
    type: Number,
  },
  Name : {
    type: String,
  },
  CommitedCapacity : {
    type: Number,
  },
  ApprovelCapacity : {
    type: Number,
  },
  ResorcesCapacity: {
    type: Number,
  },
  YearlyHour: {
    type: Number,
  },
  YearlyAllocation: {
    type: Number,
  },
  Notes : {
    type: String,
  },
  CreateBy : {
    type: String,
  },
  CreateDate : {
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
  Year: {
    type: String,
    // default: Date.now,
  },
  Month: {
    type: String,
    // default: Date.now,
  }
});

autoIncrement.initialize(mongoose.connection);
RecourceDetail.plugin(autoIncrement.plugin, {
  model: "RecourceDetails",
  field: "Id",
  startAt: 1,
  incrementBy: 1,
});
const RecourceDetailModel = mongoose.model("RecourceDetails", RecourceDetail);
module.exports = RecourceDetailModel;