const mongoose = require("mongoose");
var autoIncrement = require("mongoose-auto-increment");

const ProjectResourceDetail = new mongoose.Schema({
  Id: {
    type: Number,
    unique: true,
    min: 1,
  },
  ProjectId : {
    type: String,
  },
  RecourceId: {
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
ProjectResourceDetail.plugin(autoIncrement.plugin, {
  model: "ProjectResourceDetails",
  field: "Id",
  startAt: 1,
  incrementBy: 1,
});
const ProjectResourceDetailModel = mongoose.model("ProjectResourceDetails", ProjectResourceDetail);
module.exports = ProjectResourceDetailModel;
