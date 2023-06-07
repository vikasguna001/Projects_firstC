const mongoose = require("mongoose");
var autoIncrement = require("mongoose-auto-increment");

const HeatMap = new mongoose.Schema({
  Id: {
    type: Number,
    unique: true,
    min: 1,
  },
  Month: {
    type: Date,
    default: Date.now,
  },
  Year: {
    type: Date,
    default: Date.now,
  },
  ProjectId: {
    type: String,
  },
  UserId: {
    type: String,
  },
  Status: {
    type: String,
  },
  ApprovedCommittedEffort: {
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
    type: String,
  }
});

autoIncrement.initialize(mongoose.connection);
HeatMap.plugin(autoIncrement.plugin, {
  model: "HeatMaps",
  field: "Id",
  startAt: 1,
  incrementBy: 1,
});
const HeatMapModel = mongoose.model("HeatMaps", HeatMap);
module.exports = HeatMapModel;
